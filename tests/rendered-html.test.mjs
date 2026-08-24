import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

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
  assert.match(html, /Eidolon OS \| 一个真正属于你的个人 AI/);
  assert.match(html, /一个真正/);
  assert.match(html, /属于你的 AI/);
  assert.match(html, /Eidolon One/);
  assert.match(html, /睡前一句话/);
  assert.match(html, /不会换主人/);
  assert.match(html, /Your AI\. Your memory\. Your authority\./);
  assert.match(html, /github\.com\/eidolon-os/);
});

test("server-renders the Eidolon One product page", async () => {
  const response = await render("/one");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Eidolon One \| 个人 AI 主机/);
  assert.match(html, /把你的 AI/);
  assert.match(html, /Eidolon Ear/);
  assert.match(html, /Eidolon Car Link/);
  assert.match(html, /EID Body/);
  assert.match(html, /ONE IS THE HOST/);
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
