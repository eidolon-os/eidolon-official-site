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
  assert.match(html, /一个属于你的 AI/);
  assert.match(html, /不要把 OS、主机和外设/);
  assert.match(html, /官方旗舰主机/);
  assert.match(html, /EID-X/);
  assert.match(html, /Eidolon One/);
  assert.match(html, /家庭/);
  assert.match(html, /办公/);
  assert.match(html, /车载/);
  assert.match(html, /环境传感器/);
  assert.match(html, /对话机器人/);
  assert.match(html, /Your AI\. Your memory\. Your authority\./);
  assert.match(html, /github\.com\/eidolon-os/);
  assertNarrativeIsCurrent(html);
});

test("server-renders the Eidolon One product page", async () => {
  const response = await render("/one");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Eidolon One \| Eidolon OS 官方旗舰主机/);
  assert.match(html, /做成一台可信主机/);
  assert.match(html, /官方旗舰个人 AI 主机/);
  assert.match(html, /One Go/);
  assert.match(html, /One Room/);
  assert.match(html, /One Dock/);
  assert.match(html, /One Link/);
  assert.match(html, /One 留在中心/);
  assert.match(html, /环境传感器 · One Room · 对话机器人/);
  assert.match(html, /车载屏幕 · 车内音频 · 车辆状态/);
  assert.match(html, /PRODUCT DIRECTIONS/);
  assert.match(html, /轻量眼镜/);
  assert.match(html, /音乐控制器/);
  assert.match(html, /工业设计进行中/);
  assertNarrativeIsCurrent(html);
});

test("server-renders the Eidolon OS platform page", async () => {
  const response = await render("/os");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Eidolon OS \| 个人 AI 操作系统/);
  assert.match(html, /让个人 AI 拥有/);
  assert.match(html, /完整主机/);
  assert.match(html, /伴随设备/);
  assert.match(html, /能力设备/);
  assert.match(html, /家庭/);
  assert.match(html, /车载/);
  assert.match(html, /继续封存/);
  assert.match(html, /EID-X/);
  assertNarrativeIsCurrent(html);
});

test("server-renders the EID-X protocol page", async () => {
  const response = await render("/protocol");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /EID-X 设备与能力协议/);
  assert.match(html, /让现实设备加入/);
  assert.match(html, /不拿走你的 AI/);
  assert.match(html, /任务如何交接/);
  assert.match(html, /HANDOFF/);
  assert.match(html, /A VEHICLE LEASE/);
  assertNarrativeIsCurrent(html);
});

test("server-renders the sovereignty manifesto", async () => {
  const response = await render("/manifesto");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /AI 时代真正稀缺的/);
  assert.match(html, /人的主权位置/);
  assert.match(html, /Eidolon One 是官方旗舰主机/);
  assert.match(html, /位置、历史与信任不会/);
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
