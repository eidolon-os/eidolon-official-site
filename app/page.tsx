import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";
import { EidolonOne } from "./components/EidolonOne";
import { LifeScenes } from "./components/LifeScenes";
import { OSConstellation } from "./components/OSConstellation";
import { PlatformArchitecture } from "./components/PlatformArchitecture";
import { VesselMark } from "./components/brand";
import { site } from "./content";

const osCapabilities = [
  ["01", "PERSONAL AI RUNTIME", "个人 AI 运行时", "身份、记忆、关系、任务与长期状态，不再被某个模型或设备定义。"],
  ["02", "AGENT & MODEL FABRIC", "智能与 Agent 系统", "本地模型、云模型、工具和 Agent 按任务协作，随时可以升级与替换。"],
  ["03", "EXPERIENCE FRAMEWORK", "体验与场景框架", "语音、屏幕、空间与主动服务共享同一套状态，场景切换不重新开始。"],
  ["04", "TRUST & AUTHORITY", "主权与安全服务", "设备身份、数据边界、操作确认、授权租约与行动追溯成为系统能力。"],
] as const;

const portfolio = [
  ["FLAGSHIP", "Eidolon One", "官方旗舰设备", "由 Eidolon 完整定义软硬件体验，展示 Eidolon OS 最完整、最可信的个人 AI 体验。", "/one"],
  ["ONE FAMILY", "One Peripherals", "官方外设家族", "Go、Room、Dock 与 Link 围绕 One 扩展随身、家庭、工作和移动体验。", "/one#matrix"],
  ["ECOSYSTEM", "EID-X Devices", "兼容设备生态", "汽车、家电、机器人与新终端通过 EID-X 接入 Eidolon OS 的场景与能力体系。", "/protocol"],
] as const;

export default function Home() {
  return (
    <main className="site-shell product-story platform-home">
      <SiteHeader />

      <section id="top" className="product-hero os-hero">
        <div className="product-hero-copy">
          <p className="story-kicker">EIDOLON OS · PERSONAL AI OPERATING SYSTEM</p>
          <h1>让你的 AI，<br /><em>运行在你的世界。</em></h1>
          <p className="hero-deck">Eidolon OS 是面向个人 AI 的操作系统。它为不同模型、设备与生活场景提供同一套身份、记忆、Agent、权限和连续体验。</p>
          <div className="story-actions"><a className="story-button" href="#platform">理解产品架构</a><Link className="story-link" href="/one">认识旗舰 Eidolon One <i>↗</i></Link></div>
          <div className="hero-promises" aria-label="Eidolon OS 的三个价值"><span><b>一个系统</b>承载个人 AI 核心能力</span><span><b>多种产品</b>官方与生态硬件共同运行</span><span><b>连续场景</b>任务和关系跨设备延续</span></div>
        </div>
        <OSConstellation />
      </section>

      <section id="platform" className="category-statement platform-statement">
        <p>Eidolon OS 与 Eidolon One，不是同一个层级的产品。</p>
        <h2>OS 是系统与生态的基础。<br />One 是把它做到极致的<em>官方旗舰。</em></h2>
        <div className="category-change" aria-label="Eidolon 产品关系"><span>Eidolon OS + EID-X</span><i>→</i><b>One · 官方外设 · 第三方设备</b></div>
      </section>

      <section className="platform-overview-section">
        <header className="story-heading light"><span>01 · PRODUCT ARCHITECTURE</span><h2>先有共同的系统基础，<br />再有不同形态的产品。</h2><p>Eidolon OS 提供运行时与系统服务；EID-X 定义设备如何发现、授权和协作；One、官方外设和生态设备在其上形成产品体验。</p></header>
        <PlatformArchitecture compact />
      </section>

      <section id="os" className="os-capability-section">
        <header className="story-heading"><span>02 · EIDOLON OS</span><h2>像操作系统一样，<br />把个人 AI 的共同能力沉到系统层。</h2><p>它不是某一台主机的固件，也不是一个聊天 App。它可以运行在 Eidolon One，也可以服务未来的兼容设备与合作伙伴产品。</p></header>
        <div className="os-capability-layout">
          <aside><p>THE PLATFORM</p><h3>同一个 OS，<br />让产品共享能力，<br />又保留各自形态。</h3><Link className="story-link" href="/os">进入 Eidolon OS 页面 <i>↗</i></Link></aside>
          <div className="os-capability-list">{osCapabilities.map(([n,en,name,d])=><article key={n}><span>{n}</span><div><small>{en}</small><h3>{name}</h3></div><p>{d}</p></article>)}</div>
        </div>
      </section>

      <section className="portfolio-section">
        <header className="story-heading"><span>03 · PRODUCT PORTFOLIO</span><h2>系统、旗舰、外设与生态，<br />各自回答不同问题。</h2></header>
        <div className="portfolio-intro"><div><EidolonOne /></div><p><b>Eidolon One</b> 不是 OS 的别名，也不是所有个人状态唯一可能的住所。它是官方旗舰：用一台完整产品定义 Eidolon OS 应有的体验标准，并带动官方外设和兼容设备生态。</p></div>
        <div className="portfolio-list">{portfolio.map(([tag,name,kind,d,href],index)=><article key={name}><span>0{index+1}</span><small>{tag}</small><h3>{name}</h3><b>{kind}</b><p>{d}</p><Link href={href}>了解更多 ↗</Link></article>)}</div>
      </section>

      <section id="life" className="life-section platform-life-section">
        <header className="story-heading light"><span>04 · CONTINUITY IN REAL LIFE</span><h2>不是把同一界面搬到所有设备。<br />是让同一件事穿过多个场景。</h2><p>Eidolon OS 维护任务和关系的连续性；One 与其他产品呈现当下最合适的交互；EID-X 完成设备能力与权限的交接。</p></header>
        <LifeScenes />
      </section>

      <section className="sovereignty-platform-section">
        <header className="story-heading"><span>05 · SOVEREIGN BY DESIGN</span><h2>个人主权不是 One 的硬件卖点。<br />是整个 OS 的系统规则。</h2><p>因此它会作用于每一台设备、每一个模型和每一次场景切换。</p></header>
        <div className="sovereignty-run"><article><span>OWN</span><h3>属于你</h3><p>身份、长期记忆与恢复权由 Owner 掌握。</p></article><article><span>MOVE</span><h3>可迁移</h3><p>更换模型或兼容设备，不要求重新建立自己。</p></article><article><span>BOUND</span><h3>有边界</h3><p>每个场景只得到当下必要的上下文和能力。</p></article><article><span>TRACE</span><h3>可追溯</h3><p>重要读取、调用、交接和写回留下责任链。</p></article></div>
      </section>

      <section className="eidx-home-section">
        <div className="eidx-home-copy"><span>06 · EID-X PROTOCOL</span><h2>OS 让个人 AI 能运行。<br />EID-X 让现实设备能加入。</h2><p>协议定义设备是谁、能做什么、此刻可以知道什么、授权何时到期，以及任务如何从一台设备交给另一台。</p><Link className="story-link" href="/protocol">了解 EID-X 协议 <i>↗</i></Link></div>
        <div className="eidx-signal"><b>EID-X</b><span>IDENTITY</span><i /><span>CAPABILITY</span><i /><span>CONTEXT</span><i /><span>HANDOFF</span><i /><span>TRACE</span></div>
      </section>

      <section className="platform-growth-section">
        <header className="story-heading light"><span>07 · WHY THIS SCALES</span><h2>旗舰定义体验。<br />操作系统扩大产品边界。<br />协议连接现实世界。</h2></header>
        <div className="growth-path"><article><span>ONE</span><h3>建立标杆</h3><p>官方旗舰让用户直接理解并体验个人 AI。</p><b>完整软硬件体验</b></article><i>→</i><article><span>OS</span><h3>复用能力</h3><p>共同系统服务进入更多官方与合作伙伴产品。</p><b>平台与开发生态</b></article><i>→</i><article><span>EID-X</span><h3>扩展场景</h3><p>不同品牌设备以统一规则加入用户生活。</p><b>兼容认证与能力网络</b></article></div>
      </section>

      <section className="future-section"><p>EIDOLON OS · EIDOLON ONE · EID-X ECOSYSTEM</p><div className="future-line"><span>操作系统</span><i /><span>官方旗舰</span><i /><span>外设家族</span><i /><span>兼容生态</span></div><h2>未来不是每件设备各自拥有一个 AI。<br />而是一个人的 AI，运行在整个世界。</h2><div className="story-actions"><Link className="story-button light" href="/os">进入 Eidolon OS</Link><Link className="story-link on-dark" href="/one">认识 Eidolon One ↗</Link></div></section>

      <footer className="story-footer"><VesselMark size={36} tone="bone" idSuffix="footer-platform" /><p>{site.fullName}</p><span>Your AI. Your memory. Your authority.</span><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a></footer>
    </main>
  );
}
