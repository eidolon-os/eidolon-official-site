import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const retiredNarrative = new RegExp([
  "人\\s*[、/]\\s*车\\s*[、/]\\s*家",
  ["接住", "你的一天"].join(""),
  "三套\\s*AI",
  ["生活", "场景"].join(""),
  ["跨场景", "连续"].join(""),
].join("|"));

function assertNarrativeIsCurrent(text) {
  assert.doesNotMatch(text, retiredNarrative);
}

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Eidolon official site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Eidolon OS \| 个人 AI 操作系统/);
  assert.match(html, /运行在你的世界/);
  assert.match(html, /OS 是系统与生态的基础/);
  assert.match(html, /PERSONAL AI RUNTIME/);
  assert.match(html, /EID-X/);
  assert.match(html, /Eidolon One/);
  assert.match(html, /官方旗舰/);
  assert.match(html, /连续创作的一天/);
  assert.match(html, /无障碍/);
  assert.match(html, /触觉手环/);
  assert.match(html, /Your AI\. Your memory\. Your authority\./);
  assert.match(html, /github\.com\/eidolon-os/);
  assertNarrativeIsCurrent(html);
});

test("server-renders the Eidolon One product page", async () => {
  const response = await render("/one");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Eidolon One \| Eidolon OS 官方旗舰/);
  assert.match(html, /完整地做成一台产品/);
  assert.match(html, /官方旗舰个人 AI 设备/);
  assert.match(html, /One Go/);
  assert.match(html, /One Room/);
  assert.match(html, /One Dock/);
  assert.match(html, /One Link/);
  assert.match(html, /OS 定义共同能力/);
  assert.match(html, /WIDER ACCESSORY FIELD/);
  assert.match(html, /实时字幕器/);
  assert.match(html, /音乐控制器/);
  assert.match(html, /工业设计进行中/);
  assertNarrativeIsCurrent(html);
});

test("server-renders the Eidolon OS platform page", async () => {
  const response = await render("/os");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Eidolon OS \| 个人 AI 操作系统/);
  assert.match(html, /像 Android 定义移动设备的软件基础/);
  assert.match(html, /完整设备/);
  assert.match(html, /伴随设备/);
  assert.match(html, /能力设备/);
  assert.match(html, /独处与思考/);
  assert.match(html, /无障碍体验/);
  assert.match(html, /EID-X/);
  assertNarrativeIsCurrent(html);
});

test("server-renders the EID-X protocol page", async () => {
  const response = await render("/protocol");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /EID-X 设备与能力协议/);
  assert.match(html, /让不同设备/);
  assert.match(html, /任务如何交接/);
  assert.match(html, /HANDOFF/);
  assertNarrativeIsCurrent(html);
});

test("server-renders the sovereignty manifesto", async () => {
  const response = await render("/manifesto");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /AI 时代真正稀缺的/);
  assert.match(html, /人的主权位置/);
  assert.match(html, /Eidolon OS 不等于 Eidolon One/);
  assertNarrativeIsCurrent(html);
});

test("keeps retired spatial-category language out of project sources", async () => {
  const roots = ["app", "README.md", "VISION.md", "SOVEREIGNTY-DESIGN.md"];
  const files = [];

  async function collect(relativePath) {
    const url = new URL(`../${relativePath}`, import.meta.url);
    const entries = await readdir(url, { withFileTypes: true }).catch(() => null);
    if (!entries) {
      files.push(url);
      return;
    }
    for (const entry of entries) {
      const child = `${relativePath}/${entry.name}`;
      if (entry.isDirectory()) await collect(child);
      else if (/\.(?:md|ts|tsx|css)$/.test(entry.name)) files.push(new URL(`../${child}`, import.meta.url));
    }
  }

  for (const root of roots) await collect(root);
  const sources = await Promise.all(files.map((file) => readFile(file, "utf8")));
  for (const source of sources) assertNarrativeIsCurrent(source);
});

test("keeps starter preview code out of the finished site", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview|Your site is taking shape/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await access(new URL("public/brand/seal/logo-full-lacquer.svg", projectRoot));
  await access(new URL("public/brand/cyber/mark-neon.svg", projectRoot));
  await access(new URL("public/og.png", projectRoot));
  await access(new URL("public/og-v2.png", projectRoot));
});
