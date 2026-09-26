import { SiteHeader } from "./components/SiteHeader";
import { EidolonOne } from "./components/EidolonOne";
import { EnvironmentScenes } from "./components/EnvironmentScenes";
import { OSConstellation } from "./components/OSConstellation";
import { PlatformArchitecture } from "./components/PlatformArchitecture";
import { VesselMark } from "./components/brand";
import { SceneCards } from "./components/SceneCards";
import { oneScenes, site } from "./content";

const oneFamily = [
  ["GO", "随身交互", "耳机 · 领夹终端 · 轻量眼镜"],
  ["ROOM", "空间交互", "远场对话 · 环境传感 · 共享屏"],
  ["DOCK", "工作与创作", "显示 · 输入 · 存储 · 专业工具"],
  ["LINK", "现实能力", "车载 · 仪器 · 机器人 · 既有设备"],
] as const;

const sovereignty = [
  ["OWN", "属于你", "身份、长期记忆与恢复权由你掌握。"],
  ["CHOOSE", "由你选择", "模型、Agent 与设备都可以替换和组合。"],
  ["BOUND", "按需开放", "每台设备只获得当前任务所需的最小上下文。"],
  ["RECALL", "随时收回", "租约到期、情境改变或你主动撤回，权限立即结束。"],
] as const;

export default function Home() {
  return (
    <main className="site-shell site-light">
      <SiteHeader />

      <section id="top" className="home-hero page-frame">
        <div className="hero-copy-block">
          <p className="eyebrow">EIDOLON OS · PERSONAL AI OPERATING SYSTEM</p>
          <h1>一个属于你的 AI，<br /><em>在现实世界持续存在。</em></h1>
          <p className="hero-lead">Eidolon OS 维护一个人的身份、记忆、Agent 与权限。Eidolon One 把它做成可信主机；家庭设备、办公工具、车载界面和机器人通过 EID-X 为它提供感知与行动。</p>
          <div className="actions"><a className="primary-action" href="#environments">看它如何进入现实</a><a className="text-action" href="/one">认识 Eidolon One <i>↗</i></a></div>
          <div className="hero-proof"><span><b>你的状态</b>不随模型更换而归零</span><span><b>你的设备</b>只在被授权时参与</span><span><b>你的决定</b>始终拥有最终优先级</span></div>
        </div>
        <OSConstellation />
      </section>

      <section className="relation-section section-pad page-frame">
        <header className="section-heading split-heading"><div><p className="eyebrow">01 · ONE SYSTEM, CLEAR ROLES</p><h2>不要把 OS、主机和外设<br />混成一个产品。</h2></div><p>Eidolon 的产品关系很简单：OS 是可持续演进的系统基础；One 是官方旗舰主机；EID-X 让现实设备在清晰边界内加入。</p></header>
        <PlatformArchitecture compact />
      </section>

      <section id="environments" className="environment-section section-pad">
        <div className="page-frame">
          <header className="section-heading on-dark split-heading"><div><p className="eyebrow">02 · EXAMPLES IN THE REAL WORLD</p><h2>你的 Eidolon，<br />在不同环境里选择合适的设备。</h2></div><p>家庭、办公、车载、创作和照护只是具体使用例子，不是五套 AI。连续的是你的状态与边界；变化的是当下最合适的设备。</p></header>
          <EnvironmentScenes />
        </div>
      </section>

      <section className="one-intro-section section-pad page-frame">
        <div className="one-intro-art"><EidolonOne /></div>
        <div className="one-intro-copy"><p className="eyebrow">03 · EIDOLON ONE</p><h2>主机是可信锚点，<br />不是新的数据孤岛。</h2><p>Eidolon One 负责把 OS 的本地运行、长期状态、设备信任和关键行动确认放进一台完整产品。它定义官方体验上限，但不会垄断你的个人 AI。</p><a className="text-action" href="/one">查看 One 与官方外设 <i>↗</i></a><div className="family-strip">{oneFamily.map(([code,name,items])=><article key={code}><span>{code}</span><b>{name}</b><small>{items}</small></article>)}</div></div>
      </section>

      <section id="scenes" className="home-scenes section-pad">
        <div className="page-frame">
          <header className="section-heading split-heading"><div><p className="eyebrow">04 · SCENES ON EIDOLON ONE</p><h2>同一台 One，<br />走进不同的场景。</h2></div><p>陪伴、IP 角色团、智能家居，每个场景都只是在 One 上多加一台设备、多开一项能力，不必再买一套新系统。</p></header>
          <SceneCards scenes={oneScenes} className="is-three" />
          <a className="text-action" href="/one#one-host">看一台 One 如何长出每一个场景 <i>↗</i></a>
        </div>
      </section>

      <section className="sovereignty-section section-pad page-frame">
        <header className="section-heading split-heading"><div><p className="eyebrow">05 · SOVEREIGN BY DESIGN</p><h2>主权不是一句隐私口号，<br />而是系统每天执行的规则。</h2></div><p>我们不把“更懂你”建立在平台永久占有数据之上。Eidolon 的信任来自你能看见、迁移、限制并撤销它。</p></header>
        <div className="sovereignty-ledger">{sovereignty.map(([code,title,detail])=><article key={code}><span>{code}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="closing-section compact-closing"><VesselMark size={52} tone="bone" idSuffix="home-end" /><p>ONE OS · ONE OWNER · MANY CAPABILITIES</p><h2>让设备围绕你工作，<br />而不是让你分散在设备里。</h2><div className="actions"><a className="primary-action light" href="/os">理解 Eidolon OS</a><a className="text-action on-dark" href="/manifesto">阅读主权愿景 ↗</a></div></section>

      <footer className="site-footer"><VesselMark size={30} tone="bone" idSuffix="footer-home" /><span>{site.fullName}</span><small>Your AI. Your memory. Your authority.</small><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a></footer>
    </main>
  );
}
