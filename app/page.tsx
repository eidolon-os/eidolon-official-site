/* eslint-disable @next/next/no-img-element */
import { lifeContinuum, productFamily, productSystem, site, technicalFoundation } from "./content";
import { SiteHeader } from "./components/SiteHeader";
import { VesselMark } from "./components/brand";

function SectionLead({ eyebrow, heading, lead }: { eyebrow: string; heading: string; lead?: string }) {
  return <div className="v4-lead"><p>{eyebrow}</p><h2>{heading}</h2>{lead && <span>{lead}</span>}</div>;
}

export default function Home() {
  return <main className="site-shell v4-site">
    <SiteHeader />

    <section id="top" className="v4-hero">
      <div className="v4-hero-copy">
        <p>EIDOLON OS · PERSONAL AGENT OPERATING SYSTEM</p>
        <h1>一个 Eidolon，<br />贯穿人、车、家与工作。</h1>
        <span>它不是分散在每台设备里的助手，而是一个由你拥有、长期认识你的智能体中枢。无论走进汽车、回到家、戴上耳机还是坐到桌前，身份、记忆、任务与边界都自然接续。</span>
        <div><a className="v4-button" href="#architecture">了解产品架构</a><a href="#life">看它如何进入生活 ↓</a></div>
      </div>
      <figure className="v4-hero-media"><img src="/hero-continuum.png" alt="同一个 Eidolon 贯穿人的家庭、汽车与工作空间" /></figure>
      <div className="v4-hero-rail"><span>PERSONAL CORE</span><i>→</i><span>COMPANION</span><i>→</i><span>SCENE RUNTIME</span><i>→</i><span>BODY MESH</span></div>
    </section>

    <section className="v4-statement"><div className="container"><p>“人车家”的下一步，不只是设备互联。</p><h2>是同一个智能体，带着对你的理解，<br />在所有空间里持续存在。</h2><span>设备协同解决“在哪里使用服务”；Eidolon 进一步解决“谁在为你服务、它记得什么、能做什么、如何从一个场景继续到下一个”。</span></div></section>

    <section id="architecture" className="v4-section v4-architecture"><div className="container v4-architecture-layout">
      <SectionLead eyebrow={productSystem.eyebrow} heading={productSystem.heading} lead={productSystem.lead} />
      <div className="v4-stack">
        {productSystem.layers.map((layer, index) => <article key={layer.en}><div className="v4-stack-head"><span>0{index + 1}</span><small>{layer.en}</small><b>{layer.role}</b></div><h3>{layer.k}</h3><p>{layer.d}</p></article>)}
        <div className="v4-foundation"><small>底层共同能力</small><div>{productSystem.base.map(item => <span key={item}>{item}</span>)}</div></div>
      </div>
    </div></section>

    <section id="products" className="v4-section v4-products"><div className="container">
      <SectionLead eyebrow={productFamily.eyebrow} heading={productFamily.heading} lead={productFamily.lead} />
      <div className="v4-product-list">
        {productFamily.items.map((item, index) => <article key={item.name}><span>0{index + 1}</span><div className="v4-product-name"><small>{item.kind}</small><h3>{item.name}</h3></div><b>{item.form}</b><p>{item.d}</p></article>)}
      </div>
    </div></section>

    <section id="life" className="v4-section v4-life"><div className="container">
      <SectionLead eyebrow={lifeContinuum.eyebrow} heading={lifeContinuum.heading} lead={lifeContinuum.lead} />
      <div className="v4-life-flow">
        {lifeContinuum.scenes.map((scene, index) => <article key={scene.time}><div className="v4-scene-mark"><span>{scene.time}</span><i /><small>0{index + 1}</small></div><div className="v4-scene-copy"><p>{scene.en} · {scene.place}</p><h3>{scene.title}</h3><span>{scene.story}</span><b>{scene.tech}</b></div></article>)}
      </div>
    </div></section>

    <section className="v4-section v4-technical"><div className="container">
      <SectionLead eyebrow={technicalFoundation.eyebrow} heading={technicalFoundation.heading} />
      <div className="v4-tech-list">{technicalFoundation.items.map((item, index) => <article key={item.en}><span>0{index + 1}</span><small>{item.en}</small><h3>{item.k}</h3><p>{item.d}</p></article>)}</div>
    </div></section>

    <section className="v4-horizon"><div className="container"><p>WHERE IT GROWS</p><h2>今天连接人、车、家与工作。<br />未来连接家庭、团队、机器人与智能体社会。</h2><span>Eidolon OS 的目标不是控制更多设备，而是让每个人都能拥有一个可成长、可迁移、可进入现实世界的长期智能体。</span><div><a className="v4-button dark" href="/manifesto">阅读完整愿景</a><a href={site.github} target="_blank" rel="noreferrer">在 GitHub 上共建 ↗</a></div></div></section>

    <footer className="site-footer"><VesselMark size={40} tone="bone" idSuffix="v4-foot" /><p className="foot-name">{site.fullName}</p><span className="mantra">{site.mantraEn}</span><span className="mantra mantra-zh">{site.mantraZh}</span></footer>
  </main>;
}
