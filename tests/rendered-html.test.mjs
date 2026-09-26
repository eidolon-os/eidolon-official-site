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
  assert.match(html, /完整地做成/);
  assert.match(html, /一台产品/);
  assert.match(html, /官方旗舰个人 AI 主机/);
  assert.match(html, /One Go/);
  assert.match(html, /One Room/);
  assert.match(html, /One Dock/);
  assert.match(html, /One Link/);
  assert.match(html, /THE PRODUCT MATRIX/);
  assert.match(html, /开放式耳机/);
  assert.match(html, /存在 \/ 空气节点/);
  assert.match(html, /电子纸副屏/);
  assert.match(html, /车载桥接盒/);
  assert.match(html, /轻量眼镜/);
  assert.match(html, /可编程旋钮台/);
  assert.match(html, /ONE HOST, EVERY SCENE/);
  assert.match(html, /长出每一个场景/);
  assert.match(html, /不必每个场景再买一套系统/);
  assert.match(html, /家居中控面板/);
  assert.match(html, /href="\/companions"/);
  assert.match(html, /href="\/ensemble"/);
  assert.match(html, /href="\/smart-home"/);
  assertNarrativeIsCurrent(html);
});

test("server-renders the Eidolon OS platform page", async () => {
  const response = await render("/os");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Eidolon OS \| 个人 AI 操作系统/);
  assert.match(html, /个人 AI 的/);
  assert.match(html, /PERSONAL AI RUNTIME/);
  assert.match(html, /智能与 Agent 编排/);
  assert.match(html, /完整主机/);
  assert.match(html, /伴随设备/);
  assert.match(html, /能力设备/);
  assert.match(html, /家庭/);
  assert.match(html, /车辆/);
  assert.match(html, /独处与思考/);
  assert.match(html, /情境变化时/);
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

// 官网面向客户与用户：用现在时讲产品体验，不写研发进度、预览或免责口吻。
const inProgressLanguage = /产品预览|预览版|尚未|开发中|进行中|正在(?:打磨|验证|设计|开发)|非最终|待(?:实测|验证|测试)|首个版本|第一期|暂不开放|设计示意|演示数据|概念(?:形态|图|设计|产品|视觉|影像)|设想|WHERE WE ARE|NOT FINAL|CONCEPT FORM|DESIGN STUDY|PRODUCT DIRECTION/;

test("keeps in-progress and preview language off customer-facing pages", async () => {
  const files = [];
  async function collect(relativePath) {
    const entries = await readdir(new URL(`../${relativePath}`, import.meta.url), { withFileTypes: true });
    for (const entry of entries) {
      const child = `${relativePath}/${entry.name}`;
      if (entry.isDirectory()) await collect(child);
      else if (/\.(?:tsx?|json)$/.test(entry.name)) files.push(child);
    }
  }
  await collect("app");
  for (const file of files) {
    const source = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
    assert.doesNotMatch(source, inProgressLanguage, file);
  }
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

test("static deployment exports every public page", async () => {
  const deployScript = await readFile(new URL("../deploy/render-static.mjs", import.meta.url), "utf8");
  const expectedRoutes = [
    ["/", "index.html"],
    ["/os", "os/index.html"],
    ["/one", "one/index.html"],
    ["/companions", "companions/index.html"],
    ["/ensemble", "ensemble/index.html"],
    ["/smart-home", "smart-home/index.html"],
    ["/protocol", "protocol/index.html"],
    ["/manifesto", "manifesto/index.html"],
  ];

  for (const [pathname, output] of expectedRoutes) {
    assert.match(
      deployScript,
      new RegExp(`\\{\\s*path:\\s*["']${pathname}["'],\\s*out:\\s*["']${output.replace(".", "\\.")}["']\\s*\\}`),
    );
  }
});

test("companion page presents characters and a truthful device journey", async () => {
  const response = await render("/companions");
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const name of ["小铮", "青芽", "澄澄", "烁烁", "团团"]) assert.ok(html.includes(name));
  assert.match(html, /href="\/one"/);
  assert.match(html, /href="\/ensemble"/);
  assert.match(html, /href="\/smart-home"/);
  assert.match(html, /id="companion-introduction"/);
  assert.doesNotMatch(html, /box-3|livekit|esp32|genome_hash/i);
  assertNarrativeIsCurrent(html);
  await access(new URL("public/companions/five-companions.png", projectRoot));
});

const internalNames = /korvo|esp32|livekit|laya|box-3|stackchan|opi5|waveshare|rk3588/i;

test("IP ensemble page presents multi-device cast conversations truthfully", async () => {
  const response = await render("/ensemble");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /IP 角色团 \| 一台 Eidolon One，托起一整组角色/);
  for (const name of ["唐僧", "悟空", "八戒", "沙僧"]) assert.ok(html.includes(name));
  for (const mode of ["单独聊", "换处回应", "一起聊", "接着讨论", "传一句话", "安静陪伴"]) assert.ok(html.includes(mode));
  assert.match(html, /角色是角色/);
  assert.match(html, /一次只有一台设备/);
  assert.match(html, /古典名著《西游记》/);
  assert.match(html, /GET STARTED/);
  assert.match(html, /href="\/one"/);
  assert.doesNotMatch(html, internalNames);
  assertNarrativeIsCurrent(html);
});

test("smart home page presents the panel, host and phone roles truthfully", async () => {
  const response = await render("/smart-home");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /智能家居 \| 一台 Eidolon One，把家也连进来/);
  assert.match(html, /手机整理，One 保存/);
  assert.match(html, /家居中控面板/);
  assert.match(html, /快速识别/);
  assert.match(html, /它知道/);
  assert.match(html, /只听，不说/);
  assert.match(html, /Matter/);
  assert.match(html, /Home Assistant/);
  assert.match(html, /涉及安全的设备/);
  assert.match(html, /GET STARTED/);
  assert.match(html, /href="\/one"/);
  assert.doesNotMatch(html, internalNames);
  assertNarrativeIsCurrent(html);
});
