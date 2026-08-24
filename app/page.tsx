import { architecture, continuity, horizons, product, site, sovereignty } from "./content";
import { SiteHeader } from "./components/SiteHeader";
import { SovereignConsole } from "./components/SovereignConsole";
import { VesselMark } from "./components/brand";

function SectionLead({ eyebrow, heading, lead }: { eyebrow: string; heading: string; lead?: string }) {
  return <header className="section-lead"><p>{eyebrow}</p><h2>{heading}</h2>{lead && <span>{lead}</span>}</header>;
}

export default function Home() {
  return (
    <main className="site-shell sovereign-site">
      <SiteHeader />

      <section id="top" className="sovereign-hero">
        <div className="hero-copy">
          <p className="kicker">EIDOLON OS · THE SOVEREIGN PERSONAL AI OS</p>
          <h1>你的 AI，<br />不应属于任何<br /><em>模型、设备或平台。</em></h1>
          <span>身份、记忆、权限与长期关系属于你。模型可以替换，设备可以更换；同一个 Eidolon 仍然认识你，并只在你允许的地方出现。</span>
          <div className="hero-actions"><a className="button primary" href="#architecture">理解主权架构</a><a className="text-link" href="#continuity">看它如何进入生活 <i>↓</i></a></div>
        </div>
        <div className="hero-product"><SovereignConsole /><p><span>不是概念图</span>这就是 Eidolon 应该让用户看见并掌控的关系。</p></div>
      </section>

      <section className="thesis-strip">
        <p>模型提供智能。设备提供身体。</p>
        <h2>Eidolon 保存那个穿过它们，<br />仍然属于你的“我”。</h2>
      </section>

      <section id="architecture" className="content-section architecture-section">
        <div className="container architecture-layout">
          <div className="architecture-intro"><SectionLead {...architecture} /><p className="architecture-note">人 / 车 / 家不是三套 AI，而是同一个 Eidolon 在不同世界里获得的临时身体。</p></div>
          <div className="layer-list">
            {architecture.layers.map((layer, index) => (
              <article key={layer.en} className={index === 1 ? "core-layer" : ""}>
                <span>{layer.n}</span><div><small>{layer.en}</small><h3>{layer.k}</h3></div><p>{layer.d}</p>
              </article>
            ))}
            <div className="replaceable-axis"><span>不可被平台替代</span><i /><span>可以持续更换与扩展</span></div>
          </div>
        </div>
      </section>

      <section className="content-section sovereignty-section">
        <div className="container">
          <SectionLead {...sovereignty} />
          <div className="sovereignty-list">
            {sovereignty.items.map((item) => (
              <article key={item.en}>
                <div className="sovereignty-index"><span>{item.n}</span><b>{item.verb}</b><small>{item.en}</small></div>
                <h3>{item.title}</h3><p>{item.d}</p><i>→</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="continuity" className="content-section continuity-section">
        <div className="container"><SectionLead {...continuity} /></div>
        <div className="scene-track">
          {continuity.scenes.map((scene, index) => (
            <article key={scene.time}>
              <div className="scene-time"><span>{scene.time}</span><small>0{index + 1} · {scene.en}</small></div>
              <div className="scene-place"><i />{scene.place}</div>
              <h3>{scene.title}</h3><p>{scene.d}</p>
              <div className="scene-state"><span>{scene.state}</span><span className="sealed">{scene.sealed}</span></div>
            </article>
          ))}
        </div>
        <p className="scene-principle">连续的不是“所有数据随处可见”。连续的是：<b>同一个 Owner，在每个场景都保有选择。</b></p>
      </section>

      <section id="product" className="content-section product-section">
        <div className="container product-layout">
          <SectionLead {...product} />
          <div className="product-system">
            <article className="product-core">
              <span>{product.core.kind}</span><VesselMark size={74} tone="bone" idSuffix="product" /><h3>{product.core.name}</h3><p>{product.core.d}</p><div>IDENTITY · MEMORY · AUTHORITY · AUDIT</div>
            </article>
            <div className="product-surfaces">
              {product.surfaces.map((surface, index) => <article key={surface.name}><span>0{index + 1}</span><div><small>{surface.en}</small><h3>{surface.name}</h3></div><p>{surface.d}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section compounding-section">
        <div className="container compounding-layout">
          <SectionLead eyebrow="THE COMPOUNDING ADVANTAGE" heading="真正难复制的，不是一项功能。是一个人愿意长期托付的关系基础。" lead="大厂可以复刻界面和功能，但很难天然拥有一个跨模型、跨品牌、由用户控制的中立位置。Eidolon 的壁垒来自随时间共同增长的四种资产。" />
          <div className="compound-line">
            <div><span>01</span><b>个人语境</b><small>不是训练素材，是可迁移的共同历史</small></div><i>→</i>
            <div><span>02</span><b>治理关系</b><small>谁能知道、何时能做、结果归谁</small></div><i>→</i>
            <div><span>03</span><b>身体网络</b><small>跨品牌设备以同一主权契约接入</small></div><i>→</i>
            <div><span>04</span><b>长期信任</b><small>更多可委托任务与更深生活入口</small></div>
          </div>
        </div>
      </section>

      <section className="content-section horizon-section">
        <div className="container"><SectionLead {...horizons} />
          <div className="horizon-list">{horizons.items.map((item, index) => <article key={item.phase}><span>0{index + 1}</span><small>{item.phase}</small><h3>{item.k}</h3><p>{item.d}</p></article>)}</div>
        </div>
      </section>

      <section className="closing-section">
        <VesselMark size={68} tone="bone" idSuffix="closing" />
        <p>THE EIDOLON PRINCIPLE</p>
        <h2>未来最强的 AI，<br />首先应该真正属于你。</h2>
        <div><a className="button light" href="/manifesto">阅读完整愿景</a><a className="text-link" href={site.github} target="_blank" rel="noreferrer">在 GitHub 上共建 ↗</a></div>
      </section>

      <footer className="site-footer"><VesselMark size={36} tone="bone" idSuffix="footer" /><p>{site.fullName}</p><span>{site.mantraEn}</span><small>{site.mantraZh}</small></footer>
    </main>
  );
}
