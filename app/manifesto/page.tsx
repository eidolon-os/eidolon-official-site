import type { Metadata } from "next";
import { productFamily, productSystem, site } from "../content";
import { SiteHeader } from "../components/SiteHeader";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = { title: "为什么需要 Eidolon OS", description: "从设备互联走向个人智能体连续存在：Eidolon OS 的产品哲学、系统边界与长期方向。" };

const shifts = [
  ["设备是中心", "人是中心", "不要求人适应每一个入口，而是让系统理解人的位置、关系和任务。"],
  ["账号同步", "智能体连续", "同步文件和通知只是第一步；Eidolon 还延续身份、记忆、对话、任务和权限。"],
  ["每台设备一个助手", "同一个 Eidolon 多具身体", "车、家、手机和机器人不再制造彼此失忆的助手。"],
  ["控制设备", "理解场景", "系统不仅知道设备在线，还知道谁在场、正在发生什么、什么不该做。"],
];

const arc = [
  ["现在", "一个人 · 多个场景", "让个人中枢、随身入口、汽车、家庭与工作空间形成完整连续体验。"],
  ["接下来", "一个家庭 · 多个 Eidolon", "每个人拥有自己的智能体，同时建立有边界的家庭共享记忆和空间协作。"],
  ["继续扩展", "团队、空间与机器人", "Eidolon 进入工作室、门店、车辆与机器人身体，承担更长、更真实的任务。"],
  ["长期", "由人拥有的智能体网络", "不同 Eidolon 可以协作、交换能力和代表人行动，但身份与责任始终可以回到人。"],
];

export default function Manifesto() {
  return <main className="site-shell v4-site">
    <SiteHeader />
    <section className="v4-subhero"><div className="container"><p>VISION · PRODUCT PHILOSOPHY</p><h1>设备互联之后，<br />还需要智能体的连续存在。</h1><span>“人车家”证明了服务可以跨设备流转。Eidolon OS 关注下一层：同一个长期智能体如何带着对人的理解，在不同空间、身体和关系中持续生活与行动。</span></div></section>

    <section className="v4-section v4-shift"><div className="container"><div className="v4-lead"><p>THE NEXT SHIFT</p><h2>从连接设备，走向连接一个人的完整生活。</h2></div><div className="v4-shift-list">{shifts.map(([from,to,d],i)=><article key={from}><span>0{i+1}</span><del>{from}</del><i>→</i><h3>{to}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="v4-section v4-thesis-system"><div className="container"><div className="v4-lead"><p>{productSystem.eyebrow}</p><h2>系统稳定的是“这个 Eidolon 是谁”，变化的是它使用什么智能、进入什么身体。</h2></div><div className="v4-thesis-lines">{productSystem.layers.map((x,i)=><article key={x.en}><span>0{i+1}</span><div><small>{x.en}</small><h3>{x.k}</h3></div><p>{x.d}</p></article>)}</div></div></section>

    <section className="v4-section v4-product-arc"><div className="container"><div className="v4-lead"><p>FROM PRODUCT TO ECOSYSTEM</p><h2>先把一套产品做完整，再让它成为更多产品的底座。</h2><span>{productFamily.lead}</span></div><div className="v4-arc-list">{arc.map(([phase,title,d],i)=><article key={phase}><span>{String(i+1).padStart(2,"0")}</span><small>{phase}</small><h3>{title}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="v4-manifest-final"><div className="container"><VesselMark size={58} tone="bone" idSuffix="v4-manifest" /><p>THE EIDOLON PRINCIPLE</p><h2>模型决定它此刻有多聪明。<br />Eidolon OS 决定它是谁、认识谁，以及如何进入现实。</h2><a className="v4-button dark" href={site.github} target="_blank" rel="noreferrer">加入共建 ↗</a></div></section>
  </main>;
}
