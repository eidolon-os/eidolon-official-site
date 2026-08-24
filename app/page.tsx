import { SiteHeader } from "./components/SiteHeader";
import { CoreGlyph, VesselMark } from "./components/brand";
import { continuity, dataStrategy, evidence, moats, product, route, site, sources } from "./content";

function SectionIntro({ eyebrow, heading, lead }: { eyebrow: string; heading: string; lead?: string }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{heading}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <VesselMark size={42} tone="bone" idSuffix="footer" />
        <div><b>{site.fullName}</b><span>{site.positioningEn}</span></div>
      </div>
      <div className="footer-mantra"><span>{site.mantraEn}</span><span>{site.mantraZh}</span></div>
      <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section id="top" className="hero-v2 band-dark">
        <div className="page-width hero-v2-grid">
          <div className="hero-v2-copy">
            <span className="hero-kicker"><i />{site.positioningEn}</span>
            <h1>模型可以被复刻。<br /><span>你的连续性不能。</span></h1>
            <p>
              Eidolon OS 把身份、记忆、权限与行动结果留在一个由你拥有的中枢里。
              模型会换，身体会换；它对你的理解与责任边界，不必重新开始。
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#continuity">看连续性如何形成 <b>→</b></a>
              <a className="button quiet" href="/manifesto">为什么这会成为壁垒</a>
            </div>
            <div className="hero-principles">
              <span>LOCAL-FIRST</span><i />
              <span>CLOUD-OPTIONAL</span><i />
              <span>OWNER-CONTROLLED</span>
            </div>
          </div>

          <div className="continuity-orbit" aria-label="Eidolon 连续性状态图">
            <div className="orbit-ring orbit-ring-a" />
            <div className="orbit-ring orbit-ring-b" />
            <div className="orbit-core"><CoreGlyph size={56} /><b>ONE<br />EIDOLON</b></div>
            <span className="orbit-node node-identity"><i>01</i>身份</span>
            <span className="orbit-node node-memory"><i>02</i>记忆</span>
            <span className="orbit-node node-authority"><i>03</i>权限</span>
            <span className="orbit-node node-outcome"><i>04</i>结果</span>
            <span className="orbit-body body-phone">手机</span>
            <span className="orbit-body body-desk">桌面</span>
            <span className="orbit-body body-robot">机器人</span>
            <p>STATE COMPOUNDS<br /><b>BODIES REMAIN REPLACEABLE</b></p>
          </div>
        </div>
        <div className="hero-bottomline page-width">
          <span>不是另一位平台助手</span>
          <p>是个人 AI 的连续性层：让你在模型、设备和云服务变化之后，仍拥有同一个智能体。</p>
        </div>
      </section>

      <section id="continuity" className="section band-paper">
        <div className="page-width">
          <SectionIntro {...continuity} />
          <div className="continuity-stack">
            {continuity.layers.map((layer) => (
              <article className="continuity-layer" key={layer.en}>
                <span className="layer-number">{layer.n}</span>
                <div className="layer-name"><h3>{layer.k}</h3><span>{layer.en}</span></div>
                <p>{layer.d}</p>
                <span className="layer-state">{layer.state}</span>
              </article>
            ))}
          </div>
          <div className="continuity-equation">
            <span>能力</span><b>×</b><span>连续状态</span><b>×</b><span>可信边界</span><strong>= 越用越不可替代</strong>
          </div>
        </div>
      </section>

      <section id="product" className="section band-dark product-section">
        <div className="page-width">
          <SectionIntro {...product} />
          <div className="moment-track">
            {product.moments.map((moment) => (
              <article key={moment.n}>
                <span>{moment.n}</span><h3>{moment.k}</h3><p>{moment.d}</p>
              </article>
            ))}
          </div>
          <div className="focus-grid">
            {product.focus.map((item) => (
              <article key={item.k}><span>{item.k}</span><h3>{item.v}</h3><p>{item.d}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="evidence" className="section band-sand evidence-section">
        <div className="page-width">
          <SectionIntro {...evidence} />
          <div className="metrics-grid">
            {evidence.metrics.map((metric) => (
              <article key={metric.label}>
                <b>{metric.value}</b><h3>{metric.label}</h3><p>{metric.note}</p>
              </article>
            ))}
          </div>
          <div className="maturity-ledger">
            <div className="ledger-head"><span>当前能力</span><span>状态</span><span>可核验的定义</span></div>
            {evidence.maturity.map((item) => (
              <article key={item.k}>
                <h3>{item.k}</h3><span data-state={item.state}>{item.state}</span><p>{item.d}</p>
              </article>
            ))}
          </div>
          <p className="evidence-note">注：上述性能数字来自仓库内归档基线；它们证明工程路径，不替代真实用户留存、付费和信任数据。</p>
        </div>
      </section>

      <section className="section band-paper data-section">
        <div className="page-width">
          <SectionIntro {...dataStrategy} />
          <div className="data-flow">
            {dataStrategy.lanes.map((lane, index) => (
              <article key={lane.en} className={index === 0 ? "owner-lane" : ""}>
                <div><span>0{index + 1}</span><small>{lane.en}</small></div>
                <h3>{lane.k}</h3>
                <ul>{lane.items.map((item) => <li key={item}>{item}</li>)}</ul>
                {index < dataStrategy.lanes.length - 1 && <i aria-hidden="true">→</i>}
              </article>
            ))}
          </div>
          <p className="data-rule">{dataStrategy.rule}</p>
        </div>
      </section>

      <section id="moat" className="section band-dark moat-section">
        <div className="page-width">
          <SectionIntro {...moats} />
          <div className="moat-ladder">
            {moats.items.map((item, index) => (
              <article key={item.k} data-kind={item.kind}>
                <div className="moat-index"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
                <span className="moat-speed">复制时间 · {item.speed}</span>
                <h3>{item.k}</h3><p>{item.d}</p>
              </article>
            ))}
          </div>
          <p className="moat-punch">壁垒不是“别人做不到”。<br />是别人必须付出同样的时间、现场、信任与生态成本。</p>
        </div>
      </section>

      <section id="route" className="section band-paper route-section">
        <div className="page-width">
          <SectionIntro {...route} />
          <div className="route-grid">
            {route.phases.map((phase) => (
              <article key={phase.n}>
                <div className="route-top"><b>{phase.n}</b><span>{phase.en}</span></div>
                <h3>{phase.title}</h3><p>{phase.d}</p>
                <div className="route-proof"><span>进入下一层前必须证明</span><b>{phase.proof}</b></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-sand source-section">
        <div className="page-width">
          <SectionIntro eyebrow="External signals" heading="这不是孤立判断。行业正在同时补齐连接、身份、记忆、治理与互操作。" />
          <div className="source-grid">
            {sources.map((source) => (
              <a href={source.href} target="_blank" rel="noreferrer" key={source.k}>
                <span>{source.src}</span><h3>{source.k}</h3><p>{source.d}</p><b>查看原始资料 ↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="closing band-dark">
        <div className="page-width closing-grid">
          <div><p className="eyebrow">The claim</p><h2>能力属于此刻。<br /><span>连续性属于你。</span></h2></div>
          <div><p>我们不要求你相信一套宏大叙事。先看证据、看边界、看它能否把一件事可信地做完。</p>
            <div className="hero-actions"><a className="button primary" href="/manifesto">阅读战略与投资论证 →</a><a className="button quiet" href={site.github}>查看代码</a></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
