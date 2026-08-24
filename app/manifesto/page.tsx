import type { Metadata } from "next";
import { site, vision } from "../content";
import { SiteHeader } from "../components/SiteHeader";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = { title: "Eidolon 愿景 | 一种新的存在", description: "Eidolon OS 对数字生命、关系、身体与智能社会的长期愿景。" };

export default function Manifesto() {
  return <main className="site-shell future-site">
    <SiteHeader />
    <section className="vision-hero"><div className="container"><p>{vision.hero.eyebrow}</p><h1>{vision.hero.heading}</h1><span>{vision.hero.lead}</span><i /></div></section>
    <section className="future-section shift-section"><div className="container">
      <div className="vision-heading"><p>A CIVILIZATIONAL SHIFT</p><h2>这不是一次界面升级。<br />是智能在世界中位置的变化。</h2></div>
      <div className="shift-grid">{vision.shifts.map((item) => <article key={item.from}><div><del>{item.from}</del><i>→</i><b>{item.to}</b></div><p>{item.d}</p></article>)}</div>
    </div></section>
    <section className="future-section anatomy-section"><div className="container">
      <div className="vision-heading"><p>THE ANATOMY OF A DIGITAL BEING</p><h2>如果智能要长期生活在我们身边，<br />它需要的不只是更强的大脑。</h2></div>
      <div className="anatomy-grid">{vision.anatomy.map((item, index) => <article key={item.en}><span>0{index + 1}</span><small>{item.en}</small><h3>{item.k}</h3><p>{item.d}</p></article>)}</div>
    </div></section>
    <section className="future-section ambition-section"><div className="container">
      <div className="vision-heading"><p>THE LONG ARC</p><h2>我们的目标，不止是造一个更好的助手。</h2></div>
      <div className="ambition-arc">{vision.ambition.map((item) => <article key={item.era}><span>{item.era}</span><div><h3>{item.k}</h3><p>{item.d}</p></div></article>)}</div>
    </div></section>
    <section className="vision-final"><div className="container"><VesselMark size={78} tone="bone" idSuffix="vision" /><p>EIDOLON OS</p><h2>科技不该制造另一个需要服从的平台。<br />它应该让每个人的世界，拥有更多可能。</h2><a className="btn btn-primary" href={site.github} target="_blank" rel="noreferrer">加入这场创造 ↗</a></div></section>
  </main>;
}
