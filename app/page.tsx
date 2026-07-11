import { site, nav, hero, problem, thesis, keywords, whatIs, assets, capabilities, scenes, moat, closing } from "./content";
import { HubPanel } from "./components/HubPanel";
import { FeatureUI } from "./components/featureUI";
import { VesselMark } from "./components/brand";

export default function Home() {
  return (
    <main className="site-shell">
      {/* ── 顶栏 ── */}
      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="Eidolon OS 首页">
          <img src="/brand/seal/logo-full-lacquer.svg" alt="Eidolon" />
        </a>
        <nav className="nav-links" aria-label="主导航">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="nav-hide">
              {item.label}
            </a>
          ))}
          <a className="nav-github" href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section id="top" className="band band-lacquer hero">
        <div className="container">
          <div className="hero-copy">
            <span className="hero-badge"><i className="dot-on" />{hero.eyebrow}</span>
            <h1 className="display-1">
              拥有一个 AI，<br />而不是<span className="accent">登录</span>一个。
            </h1>
            <p className="lede">{hero.lede}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={hero.ctaPrimary.href}>{hero.ctaPrimary.label} →</a>
            </div>
          </div>
          <HubPanel />
        </div>
      </section>

      {/* ── 1 · 现状 ── */}
      <section id="problem" className="band band-lacquer grain">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{problem.eyebrow}</p>
            <h2 className="display-2">{problem.heading}</h2>
            <p className="lede" style={{ marginTop: 18 }}>{problem.lede}</p>
          </div>
          <div className="problem-list">
            {problem.items.map((it, i) => (
              <article className="problem-item reveal" key={it.title}>
                <span className="problem-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 为什么是现在（战略帧：位移 + 三问 + 窗口 + 归属）── */}
      <section className="band band-lacquer grain thesis">
        <div className="container">
          <p className="eyebrow">{thesis.eyebrow}</p>
          <h2 className="display-2 thesis-heading">{thesis.heading}</h2>
          <p className="lede thesis-lead">{thesis.lead}</p>
          <div className="thesis-drivers">
            {thesis.drivers.map((d) => (
              <div className="tdriver reveal" key={d.n}>
                <span className="td-n">{d.n}</span>
                <div className="td-body">
                  <h3 className="td-k">{d.k}</h3>
                  <p className="td-d">{d.d}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="display-2 thesis-punch">{thesis.punch}</h2>
          <p className="thesis-punchsub">{thesis.punchSub}</p>
        </div>
      </section>

      {/* ── 2 · Eidolon 是什么 ── */}
      <section id="what" className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{whatIs.eyebrow}</p>
            <h2 className="display-2">{whatIs.heading}</h2>
            <p className="lede" style={{ marginTop: 18 }}>{whatIs.lede}</p>
          </div>
          <div className="overview-layout">
            <div className="not-is">
              {whatIs.contrasts.map((c) => (
                <div className="not-is-row reveal" key={c.is}>
                  <span className="ni-not">不是{c.not}</span>
                  <span className="ni-is">{c.is}</span>
                </div>
              ))}
            </div>
            <div className="stack reveal" aria-label="Eidolon OS 三层结构">
              <div className="stack-layer stack-soft">
                <span className="sl-label">{whatIs.stack.top.label}</span>
                <span className="sl-note">{whatIs.stack.top.note}</span>
              </div>
              <div className="stack-connector" />
              <div className="stack-layer stack-waist">
                <span className="sl-label">{whatIs.stack.waist.label}</span>
                <div className="waist-assets">
                  {whatIs.stack.waist.assets.map((a) => (<span className="waist-asset" key={a}>{a}</span>))}
                </div>
                <span className="sl-note">{whatIs.stack.waist.note}</span>
              </div>
              <div className="stack-connector" />
              <div className="stack-layer stack-soft">
                <span className="sl-label">{whatIs.stack.bottom.label}</span>
                <span className="sl-note">{whatIs.stack.bottom.note}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 四个关键词（名字即架构）── */}
      <section id="keywords" className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{keywords.eyebrow}</p>
            <h2 className="display-2">{keywords.heading}</h2>
            <p className="lede" style={{ marginTop: 18 }}>{keywords.lede}</p>
          </div>
          <div className="kw-grid">
            {keywords.items.map((it) => (
              <article className="kw-card reveal" key={it.en}>
                <div className="kw-head">
                  <span className="kw-cn">{it.k}</span>
                  <span className="kw-en">{it.en}</span>
                </div>
                <p>{it.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 · 你真正拥有的 ── */}
      <section id="own" className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{assets.eyebrow}</p>
            <h2 className="display-2">{assets.heading}</h2>
            <p className="lede" style={{ marginTop: 18 }}>{assets.lede}</p>
          </div>
          <div className="asset-shift">
            {assets.items.map((a) => (
              <div className="asset-row reveal" key={a.title}>
                <div className="asset-title">{a.title}</div>
                <div className="asset-move">
                  <span className="asset-plat">{a.plat}</span>
                  <span className="asset-arrow">→</span>
                  <span className="asset-you">{a.you}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · 能力 ×4 ── */}
      <section id="capabilities" className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{capabilities.eyebrow}</p>
            <h2 className="display-2">{capabilities.heading}</h2>
            <p className="lede" style={{ marginTop: 18 }}>{capabilities.lede}</p>
          </div>
          <div className="features">
            {capabilities.blocks.map((b, i) => (
              <article className={`feature${i % 2 === 1 ? " reverse" : ""}`} key={b.id}>
                <div className="feature-copy reveal">
                  <span className="feature-tag">{b.tag}</span>
                  <h3 className="display-3">{b.title}</h3>
                  <p>{b.body}</p>
                </div>
                <div className="feature-ui reveal">
                  <FeatureUI id={b.id} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 · 场景 · Scene Horizon ── */}
      <section id="scenes" className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{scenes.eyebrow}</p>
            <h2 className="display-2">{scenes.heading}</h2>
            <p className="lede" style={{ marginTop: 18 }}>{scenes.lede}</p>
          </div>
          <div className="scene-grid">
            {scenes.items.map((s) => (
              <article className="scene-card reveal" key={s.en}>
                <div className="scene-head">
                  <span className="scene-cn">{s.k}</span>
                  <span className="scene-en">{s.en}</span>
                </div>
                <p>{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 · 壁垒 · Technical Moat（六层护城河）── */}
      <section id="moat" className="band band-lacquer grain">
        <div className="container">
          <div className="section-head wide">
            <p className="eyebrow">{moat.eyebrow}</p>
            <h2 className="display-2">{moat.heading}</h2>
            <p className="lede" style={{ marginTop: 18 }}>{moat.lede}</p>
          </div>
          <div className="moat-grid">
            {moat.items.map((m) => (
              <article className="moat-card reveal" key={m.en}>
                <div className="moat-head">
                  <span className="moat-n">{m.n}</span>
                  <span className="moat-cn">{m.title}</span>
                  <span className="moat-en">{m.en}</span>
                </div>
                <div className="moat-row"><span className="moat-k">难复制</span><p>{m.hard}</p></div>
                <div className="moat-row value"><span className="moat-k">对你</span><p>{m.value}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7 · 走向（前瞻 + CTA）── */}
      <section className="band band-lacquer grain closing">
        <div className="container">
          <p className="eyebrow">{closing.eyebrow}</p>
          <h2 className="display-1" style={{ maxWidth: "16ch", marginBottom: 20 }}>{closing.heading}</h2>
          <p className="lede" style={{ marginBottom: 36, maxWidth: "36ch" }}>{closing.sub}</p>
          <a className="btn btn-primary" href={closing.cta.href} target="_blank" rel="noreferrer">↗ {closing.cta.label}</a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <VesselMark size={44} tone="bone" idSuffix="foot" />
        <p className="foot-name">{site.fullName}</p>
        <span className="mantra">{site.mantraEn}</span>
        <span className="mantra mantra-zh">{site.mantraZh}</span>
      </footer>
    </main>
  );
}
