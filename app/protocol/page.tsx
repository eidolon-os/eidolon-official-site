import type { Metadata } from "next";
import { site, protocol, glossary } from "../content";

export const metadata: Metadata = {
  title: "EID-* 协议 | Eidolon OS",
  description: "开放的是身体和能力，保留的是身份、记忆、权限和审计。EID-* 协议家族的接入流程：Discover → Declare → Authorize → Lease → Act → Audit → Remember。",
};

export default function Protocol() {
  return (
    <article className="doc">
      <a className="back" href="/">← 返回首页</a>
      <p className="eyebrow" style={{ marginTop: 32 }}>For developers · EID-* Protocol Family</p>
      <h1 className="serif">{protocol.heading}</h1>
      <p className="lede">{protocol.lede}</p>

      <p>
        EID-* 的意义类似操作系统的稳定接口契约：第三方设备与软件贡献感知与执行能力，
        Eidolon Hub 保留身份、记忆、权限、审计与调度权。任何一次接入都要走完下面七步。
      </p>

      <h2 className="serif">接入流程</h2>
      <ol>
        {protocol.steps.map((s) => (
          <li key={s.n}>
            <strong>{s.title}</strong>——{s.body}
          </li>
        ))}
      </ol>

      <h2 className="serif">能力清单模型</h2>
      <p>
        节点在 <strong>Declare</strong> 阶段提交 Capability Manifest，声明每项能力是独占（exclusive）还是共享（shared）、
        安全（safe）还是敏感（sensitive）。独占或敏感能力必须经 Hub 取得 <strong>Lease</strong>
        （epoch + 优先级 + 时限），过期或被撤销即失效。伙伴（Agent）只能发出意图，真正的物理动作由主权控制平面按当前授权与场景边界授予。
      </p>

      <h2 className="serif">术语</h2>
      <dl className="doc-glossary">
        {glossary.map((g) => (
          <div key={g.term}>
            <dt className="serif">{g.term}</dt>
            <dd>{g.plain}</dd>
          </div>
        ))}
      </dl>

      <p style={{ marginTop: 48 }}>
        <a className="back" href={site.github} target="_blank" rel="noreferrer">↗ {site.githubLabel}</a>
        &nbsp;&nbsp;·&nbsp;&nbsp;
        <a className="back" href="/manifesto">战略论述 →</a>
      </p>
    </article>
  );
}
