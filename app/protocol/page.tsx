/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { CoreGlyph } from "../components/brand";
import { protocol, site } from "../content";

export const metadata: Metadata = {
  title: "EID-* 协议与开发者 | Eidolon OS",
  description: "让设备和能力以受治理的身体接入 Eidolon OS：身份、声明、授权、租约、行动、审计与记忆。",
};

const statusLabel: Record<string, string> = {
  implemented: "已实现",
  partial: "部分实现",
  research: "研究中",
};

export default function Developers() {
  return (
    <main className="site-shell protocol-page">
      <SiteHeader />
      <section className="subhero band-dark protocol-hero">
        <div className="page-width protocol-hero-grid">
          <div>
            <p className="eyebrow">{protocol.eyebrow}</p>
            <h1>{protocol.heading}</h1>
            <p className="subhero-lead">{protocol.lead}</p>
            <div className="hero-actions"><a className="button primary" href={site.github} target="_blank" rel="noreferrer">在 GitHub 参与共建 ↗</a><a className="button quiet" href="/#moat">理解协议壁垒</a></div>
          </div>
          <div className="protocol-core">
            <CoreGlyph size={64} />
            <b>SOVEREIGN<br />KERNEL</b>
            <span className="proto-satellite sat-owner">OWNER</span>
            <span className="proto-satellite sat-memory">MEMORY</span>
            <span className="proto-satellite sat-policy">POLICY</span>
            <span className="proto-satellite sat-audit">AUDIT</span>
          </div>
        </div>
      </section>

      <section className="section band-paper">
        <div className="page-width">
          <div className="section-intro"><p className="eyebrow">The narrow waist</p><h2>开放连接，收紧治理。</h2><p className="section-lead">MCP 连接 Agent 与工具，A2A 连接 Agent 与 Agent，Matter 连接智能家居设备。EID-* 处在它们之下与人之上：定义身体和能力怎样进入某个 Owner 的主权命名空间。</p></div>
          <div className="waist-diagram">
            <div className="waist-top"><span>MCP</span><span>A2A</span><span>Models</span><span>Apps</span></div>
            <div className="waist-kernel"><small>THE NARROW WAIST</small><b>EID-* · IDENTITY / AUTHORITY / LEASE / AUDIT</b></div>
            <div className="waist-bottom"><span>桌面体</span><span>手机</span><span>视觉节点</span><span>车机</span><span>机器人</span><span>传感器</span></div>
          </div>
        </div>
      </section>

      <section className="section band-sand">
        <div className="page-width">
          <div className="section-intro"><p className="eyebrow">Lifecycle</p><h2>接入不是注册一个 API，是进入一条责任链。</h2></div>
          <ol className="lifecycle">
            {protocol.lifecycle.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b>{index < protocol.lifecycle.length - 1 && <i>→</i>}</li>)}
          </ol>
          <div className="lifecycle-notes">
            <p><b>能力声明即风险标注。</b>设备声明它能听、看、移动或执行的同时，也声明能力是 shared / exclusive、safe / sensitive。</p>
            <p><b>授权产生租约，而非永久钥匙。</b>高风险能力在时间、场景和 Owner 意图下获得可撤销的使用权。</p>
            <p><b>行动必须留下回执。</b>成功、失败、拒绝和回滚都进入审计与记忆，成为下一次调度的依据。</p>
          </div>
        </div>
      </section>

      <section className="section band-dark">
        <div className="page-width">
          <div className="section-intro"><p className="eyebrow">Protocol family</p><h2>如实标注成熟度。</h2><p className="section-lead">协议名是内部稳定语义的方向，不把尚未发布的草案伪装成事实标准。</p></div>
          <div className="protocol-grid">
            {protocol.families.map((family) => (
              <article key={family.k}>
                <div><span>EID-</span><h3>{family.k}</h3><i data-state={family.state}>{statusLabel[family.state]}</i></div>
                <p>{family.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="protocol-close band-paper">
        <div className="page-width">
          <p className="eyebrow">Design partner program</p>
          <h2>如果你在做一具身体，<br />我们一起让它接入同一个长期智能体。</h2>
          <p>桌面机器人、陪伴硬件、视觉节点、车机与隐私传感器，都是第一批适合验证 EID-* 的端点。</p>
          <a className="button ink-button" href={site.github} target="_blank" rel="noreferrer">查看仓库与契约 ↗</a>
        </div>
      </section>
    </main>
  );
}
