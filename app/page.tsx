import { SiteHeader } from "./components/SiteHeader";
import { EidolonOne } from "./components/EidolonOne";
import { LifeScenes } from "./components/LifeScenes";
import { OSConstellation } from "./components/OSConstellation";
import { VesselMark } from "./components/brand";
import { site } from "./content";

const osLayers = [
  ["01", "SOVEREIGN CORE", "主权内核", "保存身份、长期记忆、关系、权限、任务状态与行动记录。它是同一个 Eidolon 不会归零的原因。"],
  ["02", "INTELLIGENCE FABRIC", "智能编织层", "按任务组合本地模型、云模型和专业 Agent。模型提供能力，却不成为长期关系的主人。"],
  ["03", "PRESENCE RUNTIME", "场景运行时", "让同一件事在手机、耳机、桌面与空间之间继续，并为每个场景切换交互与边界。"],
  ["04", "EID CONNECT", "现实连接层", "让主机、车辆、家庭设备和机器人声明能力，获得有范围、有期限、可撤回的授权。"],
] as const;

export default function Home() {
  return (
    <main className="site-shell product-story">
      <SiteHeader />

      <section id="top" className="product-hero os-hero">
        <div className="product-hero-copy">
          <p className="story-kicker">EIDOLON OS · YOUR PERSONAL AI</p>
          <h1>一个真正<br /><em>属于你的 AI。</em></h1>
          <p className="hero-deck">Eidolon OS 保存那个持续认识你、跟随你并向你负责的 AI。模型可以替换，设备可以更换，你们共同形成的记忆与关系不会因此归零。</p>
          <div className="story-actions"><a className="story-button" href="#os">理解 Eidolon OS</a><a className="story-link" href="/one">认识 One 主机 <i>↗</i></a></div>
          <div className="hero-promises" aria-label="Eidolon OS 的三个承诺"><span><b>认识你</b>共同经历不会归零</span><span><b>跟随你</b>事情在场景间继续</span><span><b>属于你</b>记忆与决定由你掌握</span></div>
        </div>
        <OSConstellation />
      </section>

      <section className="category-statement">
        <p>今天的 AI 以模型、App 和设备为边界。一个人因此拥有很多彼此失忆的助手。</p>
        <h2>Eidolon OS 改变的不是助手功能。<br />而是 AI <em>以谁为中心。</em></h2>
        <div className="category-change" aria-label="产品范式变化"><span>平台拥有身份与记忆</span><i>→</i><b>人拥有一个持续存在的 AI</b></div>
      </section>

      <section id="os" className="os-logic-section">
        <header className="story-heading"><span>01 · THE WHOLE PRODUCT</span><h2>Eidolon OS 是完整产品。<br />One 是它的第一台主机。</h2><p>先把层级说清楚：OS 负责连续性、智能编排、场景运行与现实连接；One 负责给这套系统一个由个人掌握、长期在线的物理家。</p></header>
        <div className="os-logic-layout">
          <aside className="os-logic-index"><p>THE OPERATING SYSTEM</p><h3>一个内核，<br />编织所有智能，<br />抵达所有场景。</h3><div><span>稳定</span><b>Owner · Core · Memory</b></div><div><span>变化</span><b>Models · Devices · Places</b></div></aside>
          <div className="os-layer-flow">
            {osLayers.map(([n,en,name,description]) => <article key={n}><span>{n}</span><div><small>{en}</small><h3>{name}</h3></div><p>{description}</p></article>)}
          </div>
        </div>
        <div className="product-hierarchy" aria-label="Eidolon 产品层级">
          <div className="hierarchy-os"><span>SOFTWARE SYSTEM</span><b>Eidolon OS</b><small>完整的个人 AI 操作系统</small></div>
          <i>运行于</i>
          <div className="hierarchy-one"><span>FIRST-PARTY HOST</span><b>Eidolon One</b><small>第一方个人 AI 主机</small></div>
          <i>连接</i>
          <div className="hierarchy-matrix"><span>PRESENCES & BODIES</span><b>One 产品矩阵 + EID-* 生态</b><small>随身、空间、汽车与机器人</small></div>
        </div>
        <div className="os-one-teaser">
          <div><span>THE FIRST-PARTY HARDWARE</span><h3>Eidolon One</h3><p>One 不是 OS 的新名字。它是一台具体主机：在你掌握的设备里保存长期状态，再把必要的能力交给身边的外设与场景。</p><a className="story-link" href="/one">查看 One 产品矩阵与概念影像 <i>↗</i></a></div>
          <EidolonOne />
        </div>
      </section>

      <section id="philosophy" className="philosophy-section">
        <header className="story-heading"><span>02 · THE EIDOLON PRINCIPLE</span><h2>产品的中心不是模型。<br />是一个真实的人。</h2><p>三条原则同时定义体验与边界。缺少其中任何一条，Eidolon 都会退化为另一个平台助手。</p></header>
        <div className="principle-run">
          <article><span>01</span><h3>认识你</h3><p>记得共同经历、你的偏好与正在进行的事。不是把所有数据塞进提示词，而是知道什么在此刻真正相关。</p><small>LONG-TERM MEMORY</small></article>
          <article><span>02</span><h3>跟随你</h3><p>同一件事从手机到车、从耳机到桌面自然继续。设备只是入口，不会各自养出一个新的、失忆的你。</p><small>CONTINUITY ACROSS PLACES</small></article>
          <article><span>03</span><h3>属于你</h3><p>你能带走记忆、换掉模型、撤回设备、看见行动依据。能力可以越来越强，权力不能越过你的允许。</p><small>USER SOVEREIGNTY</small></article>
        </div>
      </section>

      <section id="life" className="life-section">
        <header className="story-heading light"><span>03 · ONE LIFE, ONE CONTINUITY</span><h2>不是“人、车、家”三套 AI。<br />是同一个 Eidolon，接住你的一天。</h2><p>OS 跟随事情的前因后果；One 与外设负责在不同地方让它出现。连续不等于把所有隐私复制到所有设备。</p></header>
        <LifeScenes />
      </section>

      <section id="architecture" className="plain-architecture">
        <header className="story-heading"><span>04 · THE SOVEREIGN RELATION</span><h2>主权不是一个设置项。<br />它是整套架构的方向。</h2><p>从人的根权出发，经过 Eidolon Core，再抵达模型与现实设备。越靠外越容易替换，越靠内越不能被平台带走。</p></header>
        <div className="relation-map">
          <div className="relation-owner"><span>OWNER ROOT</span><h3>你</h3><p>拥有、恢复、决定</p></div><i className="relation-arrow" />
          <div className="relation-core"><VesselMark size={68} tone="bone" idSuffix="map" /><span>EIDOLON CORE</span><h3>记忆你，代表你，向你负责</h3><p>身份 · 长期记忆 · 关系 · 权限 · 任务 · 行动记录</p></div><i className="relation-arrow" />
          <div className="relation-world"><div><span>MINDS</span><b>本地模型 / 云模型 / Agents</b></div><div><span>BODIES</span><b>One / 手机 / 家 / 车 / 机器人</b></div><p>它们提供智能与身体，但不拥有你。</p></div>
        </div>
        <p className="architecture-plain">每个模型与身体得到的不是你的全部数据，而是一份有范围、有期限、可随时收回的能力。Eidolon OS 知道信息从哪里来、为何被使用、结果去了哪里。</p>
      </section>

      <section id="company" className="company-section">
        <header className="story-heading light"><span>05 · THE PRODUCT FLYWHEEL</span><h2>从个人 OS 建立关系，<br />由 One 与现实世界扩大价值。</h2><p>软件形成连续性，第一方主机建立可信锚点，外设与 EID-* 生态扩大场景。三者是一条增长路径，而不是三个互相竞争的产品。</p></header>
        <div className="growth-path">
          <article><span>OS</span><h3>个人关系</h3><p>记忆、任务接力与主权控制成为每天使用的软件入口。</p><b>Core 软件 / 可选智能服务</b></article><i>→</i>
          <article><span>ONE</span><h3>可信主机</h3><p>第一方硬件承载长期状态，形成家庭与个人空间中的稳定锚点。</p><b>主机 / 外设 / 家庭方案</b></article><i>→</i>
          <article><span>EID-*</span><h3>身体网络</h3><p>汽车、空间、机器人与第三方硬件接入用户已经拥有的关系。</p><b>协议认证 / OEM 授权 / 生态</b></article>
        </div>
        <div className="moat-statement"><p>大厂可以复刻某个功能，<br />却很难复制一个跨模型、跨品牌的个人主权位置。</p><div><h3>壁垒随使用共同生长</h3><span>个人语境</span><i>×</i><span>授权关系</span><i>×</i><span>第一方主机</span><i>×</i><span>现实身体网络</span><small>资产由用户拥有，产品因此获得长期托付；Eidolon 的中立性不是口号，而是进入不同品牌与生活场景的条件。</small></div></div>
      </section>

      <section className="future-section">
        <p>EIDOLON OS · EIDOLON ONE · EID-* ECOSYSTEM</p>
        <div className="future-line"><span>个人 OS</span><i /><span>第一方主机</span><i /><span>生活外设</span><i /><span>开放身体网络</span></div>
        <h2>未来不是每件设备都有一个 AI。<br />而是每个人，都真正拥有一个。</h2>
        <div className="story-actions"><a className="story-button light" href="/one">进入 Eidolon One</a><a className="story-link on-dark" href="/protocol">了解 EID-* 协议 ↗</a></div>
      </section>

      <footer className="story-footer"><VesselMark size={36} tone="bone" idSuffix="footer-new" /><p>{site.fullName}</p><span>Your AI. Your memory. Your authority.</span><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a></footer>
    </main>
  );
}
