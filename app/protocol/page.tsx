import type { Metadata } from "next";
import { protocol, site } from "../content";
import { SiteHeader } from "../components/SiteHeader";
import { CoreGlyph } from "../components/brand";

export const metadata: Metadata = { title: "为 Eidolon 建造 | 开发者", description: "让新的身体、感官、空间与能力进入同一个长期智能世界。" };

export default function Developers() {
  return <main className="site-shell future-site">
    <SiteHeader />
    <section className="builder-hero"><div className="builder-glow" /><div className="container builder-grid"><div><p>{protocol.hero.eyebrow}</p><h1>{protocol.hero.heading}</h1><span>{protocol.hero.lead}</span></div><div className="builder-core"><div><CoreGlyph size={62} /><b>EIDOLON</b></div>{["BODY","SENSE","SPACE","ABILITY"].map((x,i)=><span className={`builder-node node-${i+1}`} key={x}>{x}</span>)}</div></div></section>
    <section className="future-section exchange-section"><div className="container"><div className="exchange-grid">{protocol.sides.map((side,index)=><article key={side.k}><small>0{index+1}</small><h2>{side.k}</h2><ul>{side.items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div></div></section>
    <section className="future-section path-section"><div className="container"><p>HOW SOMETHING NEW ENTERS THE WORLD</p><h2>接入不是一次调用。<br />是进入一段关系。</h2><ol>{protocol.path.map((x,i)=><li key={x}><span>0{i+1}</span><b>{x}</b>{i<protocol.path.length-1&&<i>→</i>}</li>)}</ol></div></section>
    <section className="builder-final"><div className="container"><p>{protocol.invitation}</p><a className="btn btn-primary" href={site.github} target="_blank" rel="noreferrer">在 GitHub 上一起建造 ↗</a></div></section>
  </main>;
}
