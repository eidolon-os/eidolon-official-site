import type { Metadata } from "next";
import { site, investor } from "../content";
import { SiteHeader } from "../components/SiteHeader";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = {
  title: "为什么是 Eidolon OS · 投资视角 | Eidolon OS",
  description:
    "核心论点、为什么是现在（含数据主权与中国合规）、大厂为何不会做成 Eidolon、护城河、首批用户、尽调硬问题预答与未来宏图。",
};

export default function Investors() {
  const phases = investor.roadmap.phases;
  return (
    <main className="site-shell">
      <SiteHeader />

      {/* Hero + 核心概要 */}
      <section className="band band-lacquer grain">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{investor.eyebrow}</p>
            <h1 className="display-1">{investor.heading}</h1>
            <p className="lede" style={{ marginTop: 18 }}>{investor.lede}</p>
          </div>
          <div className="inv-glance">
            {investor.glance.map((g) => (
              <article className="glance-card reveal" key={g.k}>
                <span className="glance-k">{g.k}</span>
                <b className="glance-v">{g.v}</b>
                <p>{g.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 为什么是现在 · 外部坐标 */}
      <section className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{investor.signals.eyebrow}</p>
            <h2 className="display-2">{investor.signals.heading}</h2>
          </div>
          <div className="signal-list">
            {investor.signals.items.map((s) => (
              <article className="signal-item reveal" key={s.k}>
                <h3>{s.k}</h3>
                <p>{s.d}</p>
              </article>
            ))}
          </div>
          <p className="signal-punch">{investor.signals.punch}</p>
        </div>
      </section>

      {/* 竞争格局 · 大厂悖论 */}
      <section className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{investor.bigco.eyebrow}</p>
            <h2 className="display-2">{investor.bigco.heading}</h2>
            <p className="lede" style={{ marginTop: 18 }}>{investor.bigco.lead}</p>
          </div>
          <div className="asset-shift">
            {investor.bigco.points.map((p) => (
              <div className="asset-row reveal" key={p.k}>
                <div className="asset-title">{p.k}</div>
                <div className="asset-move">
                  <span className="asset-plat">{p.plat}</span>
                  <span className="asset-arrow">→</span>
                  <span className="asset-you">{p.you}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="signal-punch">{investor.bigco.punch}</p>
        </div>
      </section>

      {/* 护城河 */}
      <section className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{investor.moat.eyebrow}</p>
            <h2 className="display-2">{investor.moat.heading}</h2>
          </div>
          <div className="inv-moat">
            {investor.moat.items.map((m) => (
              <article className="inv-moat-card reveal" key={m.k}>
                <b>{m.k}</b>
                <p>{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 首批用户 · 从哪切入 */}
      <section className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{investor.users.eyebrow}</p>
            <h2 className="display-2">{investor.users.heading}</h2>
          </div>
          <div className="inv-moat">
            {investor.users.items.map((u) => (
              <article className="inv-moat-card reveal" key={u.k}>
                <b>{u.k}</b>
                <p>{u.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 尽调预答 · 硬问题 */}
      <section className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{investor.objections.eyebrow}</p>
            <h2 className="display-2">{investor.objections.heading}</h2>
          </div>
          <div className="qa-list">
            {investor.objections.items.map((o) => (
              <article className="qa-item reveal" key={o.q}>
                <h3 className="qa-q">{o.q}</h3>
                <p className="qa-a">{o.a}</p>
              </article>
            ))}
          </div>
          <p className="signal-punch">{investor.objections.punch}</p>
        </div>
      </section>

      {/* 未来宏图 */}
      <section className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{investor.roadmap.eyebrow}</p>
            <h2 className="display-2">{investor.roadmap.heading}</h2>
          </div>
          <div className="roadmap">
            {phases.map((p, i) => (
              <article className="rm-phase reveal" key={p.phase}>
                <div className="rm-marker">
                  <span className="rm-dot" />
                  {i < phases.length - 1 && <span className="rm-line" />}
                </div>
                <div className="rm-body">
                  <span className="rm-phase-k">{p.phase}</span>
                  <h3>{p.title}</h3>
                  <p>{p.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 收尾金句（替代原「走向」CTA）*/}
      <section className="band band-lacquer grain">
        <div className="container">
          <div className="final-word">
            <p className="fw-quote">{investor.finalWord.quote}</p>
            <p className="fw-sub">{investor.finalWord.sub}</p>
            <a className="fw-link" href={site.github} target="_blank" rel="noreferrer">
              ↗ {investor.finalWord.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <VesselMark size={44} tone="bone" idSuffix="foot" />
        <p className="foot-name">{site.fullName}</p>
        <span className="mantra">{site.mantraEn}</span>
        <span className="mantra mantra-zh">{site.mantraZh}</span>
      </footer>
    </main>
  );
}
