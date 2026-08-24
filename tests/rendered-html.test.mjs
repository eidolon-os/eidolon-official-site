import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
  assert.match(html, /Eidolon OS \| Personal AI Continuity Infrastructure/);
  assert.match(html, /个人 AI 的连续性层/);
  assert.match(html, /Personal AI Continuity Infrastructure/);
  assert.match(html, /Identity before body/);
  assert.match(html, /模型可以被复刻/);
  assert.match(html, /Evidence, not adjectives/);
  assert.match(html, /github\.com\/eidolon-os/);
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
  await access(new URL("public/og-continuity.png", projectRoot));
});
