/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = {
  title: "Eidolon One | 个人 AI 主机与产品矩阵",
  description: "Eidolon One 是运行 Eidolon OS 的第一方个人 AI 主机；One Go、Room、Dock 与 Link 让同一个 Eidolon 进入随身、空间、汽车与具身场景。",
  openGraph: { title: "Eidolon One | 个人 AI 主机与产品矩阵", description: "一台主机，多种存在方式。概念影像不代表最终工业设计。", images: [{ url: "/one-matrix-concept-v2.png", width: 1774, height: 887, alt: "Eidolon One 产品矩阵概念影像" }] },
  twitter: { card: "summary_large_image", title: "Eidolon One | 个人 AI 主机与产品矩阵", description: "一台主机，多种存在方式。", images: ["/one-matrix-concept-v2.png"] },
};

const matrix = [
  { n:"01", code:"HOST", name:"Eidolon One", role:"个人 AI 主机", promise:"保存那个不会归零的你们。", detail:"长期运行 Eidolon OS，持有身份、记忆、关系、权限、任务状态和行动记录。它是整个产品矩阵唯一的长期状态锚点。", group:"核心" },
  { n:"02", code:"PERSONAL PRESENCE", name:"One Go", role:"随身入口", promise:"让 Eidolon 在你身边出现。", detail:"可穿戴语音、手机伴随与轻量环境确认的产品方向。只携带当前任务所需上下文，不保存完整长期记忆。", group:"随身" },
  { n:"03", code:"SPATIAL PRESENCE", name:"One Room", role:"空间节点", promise:"让一个房间拥有恰到好处的在场感。", detail:"面向家庭公共空间的远场交互与在场识别。状态可见、实体静音，并服从成员关系与房间级边界。", group:"空间" },
  { n:"04", code:"WORK PRESENCE", name:"One Dock", role:"桌面底座", promise:"回到桌面，完整工作现场自然恢复。", detail:"连接显示、键盘、音频和本地高速存储，把 One 延展为创作与工作的安静中枢。", group:"空间" },
  { n:"05", code:"BODY BRIDGE", name:"One Link", role:"车与具身桥接", promise:"让现实身体接入，而不让它们占有你。", detail:"面向汽车、机器人与第三方硬件的连接模块。设备声明感知与行动能力，通过 EID-* 获得可撤回授权。", group:"身体" },
] as const;

const scenes = [
  ["CREATION", "灵感到成果", "睡前把想法交给 One。主机在家继续组织资料；早晨，One Dock 恢复完整工作现场。"],
  ["MOBILITY", "移动中不断线", "One Go 开始的对话接入 One Link；进入驾驶场景后，只保留语音与低风险能力。"],
  ["HOME", "共享而不混同", "One Room 只挂载家庭共同空间。每位成员保留自己的 Eidolon，私人内容仍各自封存。"],
  ["EMBODIMENT", "能力进入现实", "机器人通过 One Link 获得一次任务所需的视觉与动作能力；任务结束，能力租约随之结束。"],
] as const;

export default function OnePage() {
  return (
    <main className="site-shell product-story one-product-page one-v2">
      <SiteHeader />

      <section className="one-v2-hero">
        <div className="one-v2-copy">
          <p className="story-kicker">EIDOLON ONE · FIRST-PARTY HARDWARE</p>
          <h1>一台主机，<br /><em>多种存在方式。</em></h1>
          <p>Eidolon One 是运行 Eidolon OS 的第一方个人 AI 主机。它把长期状态留在一个稳定的家，再通过 Go、Room、Dock 与 Link 抵达你的随身、空间与现实身体。</p>
          <div className="story-actions"><a className="story-button" href="#matrix">查看产品矩阵</a><a className="story-link" href="#one-scenes">看场景如何接力 <i>↓</i></a></div>
          <div className="one-status-line"><span>CONCEPT DIRECTION</span><i />体系已定义<i />工业设计进行中<i />影像不代表最终形态</div>
        </div>
        <div className="one-v2-hero-art"><img src="/one-matrix-concept-v2.png" alt="Eidolon One 随身、空间和具身产品方向概念影像" /><div><span>PERSONAL</span><i /><span>SPACE</span><i /><span>BODY</span></div><p>CONCEPT IMAGERY · NOT FINAL INDUSTRIAL DESIGN</p></div>
      </section>

      <section className="one-boundary-section">
        <header><span>FIRST, THE PRODUCT BOUNDARY</span><h2>OS 负责“它是谁”。<br />One 负责“它住在哪里”。<br />外设负责“它如何出现”。</h2></header>
        <div className="one-boundary-diagram">
          <article><span>01 · SYSTEM</span><h3>Eidolon OS</h3><p>长期连续性、模型编排、场景运行与连接协议。</p></article><i>运行在</i>
          <article className="boundary-host"><span>02 · HOST</span><h3>Eidolon One</h3><p>由个人掌握的第一方主机，持有长期状态。</p></article><i>延展为</i>
          <article><span>03 · PRESENCES</span><h3>One Matrix</h3><p>随身、空间、桌面、汽车与机器人的感官和身体。</p></article>
        </div>
      </section>

      <section id="matrix" className="matrix-v2-section">
        <header className="story-heading light"><span>01 · THE ONE MATRIX</span><h2>不是一组彼此独立的 AI 产品。<br />是一台主机向生活伸出的感官与身体。</h2><p>矩阵只有一个长期状态源：Eidolon One。其他产品提供在场、感知、显示或行动能力，并且随时可以被替换或撤回。</p></header>
        <figure className="matrix-concept-figure"><img src="/one-matrix-concept-v2.png" alt="Eidolon One 产品矩阵科技概念影像" /><figcaption><span>01 · 随身入口</span><span>02 · 主机与空间</span><span>03 · 汽车与具身</span><small>概念影像用于表达产品关系与气质，不代表最终工业设计</small></figcaption></figure>
        <div className="matrix-v2-list">
          {matrix.map(item => <article key={item.name}>
            <span>{item.n}</span><div className="matrix-name"><small>{item.code}</small><h3>{item.name}</h3><b>{item.role}</b></div><p className="matrix-promise">{item.promise}</p><p>{item.detail}</p><em>{item.group}</em>
          </article>)}
        </div>
      </section>

      <section id="one-scenes" className="one-scenes-v2">
        <header className="story-heading"><span>02 · MATRIX IN REAL LIFE</span><h2>产品矩阵的意义，<br />是让一件事穿过生活继续发生。</h2><p>场景不是按硬件切开的功能清单，而是一条由 Eidolon OS 保持连续、由 One 产品矩阵接力完成的生活路径。</p></header>
        <div className="scene-orbit-diagram">
          <div className="scene-orbit-core"><VesselMark size={58} tone="bone" idSuffix="scene-orbit" /><span>EIDOLON ONE</span><b>HOST</b></div>
          <div className="scene-orbit-ring" />
          <div className="scene-satellite satellite-go"><span>GO</span><b>随身</b></div><div className="scene-satellite satellite-room"><span>ROOM</span><b>家庭</b></div><div className="scene-satellite satellite-dock"><span>DOCK</span><b>工作</b></div><div className="scene-satellite satellite-link"><span>LINK</span><b>移动 / 具身</b></div>
          <p>外设离开，长期关系仍在主机中继续。</p>
        </div>
        <div className="one-scene-list">{scenes.map(([en,title,text],index)=><article key={en}><span>0{index+1}</span><small>{en}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="host-contract-section one-contract-v2">
        <header className="story-heading"><span>03 · ONE SOURCE OF CONTINUITY</span><h2>长期状态只有一个家。<br />能力可以有很多出口。</h2></header>
        <div className="host-contract"><div><span>ONE 持有</span><p>身份、长期记忆、关系、权限策略、任务状态和行动记录。</p></div><i>≠</i><div><span>矩阵设备获得</span><p>当前场景所需的感知、显示或行动能力，以及一份会到期的上下文。</p></div></div>
        <p className="host-contract-note">这个结构让 One 产品矩阵可以持续扩展，也让第三方汽车、家电与机器人能够接入，而不必各自复制一个用户的完整 AI。</p>
      </section>

      <section className="one-future-section">
        <VesselMark size={62} tone="bone" idSuffix="one-v2-future" /><p>EIDOLON ONE · A HOME FOR YOUR AI</p><h2>产品形态会继续进化。<br />“谁拥有它”不会改变。</h2>
        <div className="story-actions"><Link className="story-button light" href="/#os">返回 Eidolon OS</Link><Link className="story-link on-dark" href="/protocol">了解 EID-* 接入协议 ↗</Link></div>
      </section>
    </main>
  );
}
