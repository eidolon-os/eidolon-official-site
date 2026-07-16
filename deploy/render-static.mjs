import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

const siteUrl = process.env.SITE_URL ?? "http://eidolon.aimanthor.com/";
const outDir = resolve(projectRoot, process.env.STATIC_OUT_DIR ?? "deploy/.static");
const distDir = resolve(projectRoot, "dist");
const clientDir = resolve(distDir, "client");
const serverEntry = resolve(distDir, "server/index.js");

// 每条路由都要单独预渲染成静态 HTML；nginx 用 `try_files $uri $uri/ /index.html`，
// 所以子页必须写成 <route>/index.html 才能被 $uri/ 命中，否则会回退到首页。
const routes = [
  { path: "/", out: "index.html" },
  { path: "/manifesto", out: "manifesto/index.html" },
  { path: "/protocol", out: "protocol/index.html" },
];

function usage() {
  return [
    "Usage:",
    "  SITE_URL=http://eidolon.aimanthor.com/ node deploy/render-static.mjs",
    "",
    "Environment:",
    "  SITE_URL         Absolute public site URL used for metadata.",
    "  STATIC_OUT_DIR   Output directory, defaults to deploy/.static.",
  ].join("\n");
}

if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log(usage());
  process.exit(0);
}

let publicUrl;
try {
  publicUrl = new URL(siteUrl);
} catch {
  console.error(`Invalid SITE_URL: ${siteUrl}`);
  process.exit(1);
}

await rm(outDir, { force: true, recursive: true });
await mkdir(outDir, { recursive: true });
await cp(clientDir, outDir, { recursive: true });

const { default: worker } = await import(pathToFileURL(serverEntry).href);

async function renderRoute(path, out) {
  const url = new URL(path, publicUrl);
  const response = await worker.fetch(
    new Request(url, {
      headers: {
        accept: "text/html",
        host: publicUrl.host,
        "x-forwarded-host": publicUrl.host,
        "x-forwarded-proto": publicUrl.protocol.replace(":", ""),
      },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    console.error(`Static render failed for ${path}: HTTP ${response.status}`);
    process.exit(1);
  }

  const html = await response.text();
  if (!html.includes("Eidolon OS") || !html.includes("/assets/")) {
    console.error(`Static render for ${path} did not look like a complete Eidolon page.`);
    process.exit(1);
  }

  const outPath = resolve(outDir, out);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, html);
  console.log(`Rendered ${path} -> ${out}`);
}

for (const route of routes) {
  await renderRoute(route.path, route.out);
}

const headersPath = resolve(outDir, "_headers");
let headers = "";
try {
  headers = await readFile(headersPath, "utf8");
} catch {
  // Optional Cloudflare-style headers file; nginx config handles equivalent cache headers.
}

await writeFile(
  resolve(outDir, "deploy-meta.json"),
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      siteUrl: publicUrl.toString(),
      source: "vinext-static-snapshot",
      routes: routes.map((r) => r.path),
      hasHeadersFile: headers.length > 0,
    },
    null,
    2,
  ),
);

console.log(`Static site written to ${outDir}`);
