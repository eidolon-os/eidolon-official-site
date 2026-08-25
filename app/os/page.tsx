import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { PlatformArchitecture } from "../components/PlatformArchitecture";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = {
  title: "Eidolon OS | 个人 AI 操作系统",
  description: "Eidolon OS 为个人 AI 提供身份、记忆、Agent、模型、情境、权限和设备协作能力，并通过 EID-X 运行于不同硬件产品。",
};

const systemLayers = [
  ["01", "PERSONAL AI RUNTIME", "个人 AI 运行时", "维护身份、记忆、关系、任务与长期状态，让应用和硬件面对的是同一个个人 AI。"],
  ["02", "INTELLIGENCE FABRIC", "智能与 Agent 层", "组合本地模型、云模型、工具和专业 Agent；能力可以升级，用户状态无需重建。"],
  ["03", "EXPERIENCE FRAMEWORK", "体验与情境框架", "统一语音、视觉、屏幕、空间和主动服务，让任务在不同界面间自然接续。"],
  ["04", "TRUST & AUTHORITY", "主权与安全服务", "管理数据边界、设备身份、操作确认、权限租约、审计与恢复。"],
] as const;

const deviceModes = [
  ["FULL OS", "完整设备", "运行完整 Eidolon OS，可独立承载个人 AI 体验。Eidolon One 是官方旗舰参考。"],
  ["COMPANION", "伴随设备", "运行轻量系统能力，与主设备共同呈现连续体验，例如 One Go、Room 与 Dock。"],
  ["EID-X", "能力设备", "无需成为完整 AI 终端，通过协议提供听觉、视觉、显示、专业仪器或机械能力。"],
] as const;

const reach = [
  ["REFLECT", "独处与思考", "日记、复盘、情绪表达、私人决定"],
  ["CREATE", "创作与研究", "写作、影像、音乐、实验、知识整理"],
  ["CONNECT", "沟通与协作", "会议、翻译、关系提醒、共同计划"],
  ["CARE", "日常照护", "作息、陪伴、环境变化、温和提醒"],
  ["EXPLORE", "旅行与探索", "陌生空间、语言、路线、户外信息"],
  ["ACCESS", "无障碍体验", "字幕、触觉、语音、简化交互"],
  ["MAKE", "现实制作", "工作台、摄影、手作、专业设备"],
  ["ACT", "具身行动", "机械臂、移动机器人、无人机、智能工具"],
] as const;

export default function OSPage() {
  return (
    <main className="site-shell product-story os-detail-page">
      <SiteHeader />
      <section className="os-detail-hero">
        <div><p className="story-kicker">EIDOLON OS · THE PLATFORM</p><h1>个人 AI 的<br /><em>操作系统。</em></h1><p>如果传统操作系统让应用运行在各种电脑与手机上，Eidolon OS 则让一个人的 AI 运行在不同模型、产品与真实活动中。</p><div className="story-actions"><a className="story-button" href="#architecture">查看系统架构</a><Link className="story-link" href="/one">认识旗舰 One <i>↗</i></Link></div></div>
        <div className="os-analogy"><span>像 Android 定义移动设备的软件基础</span><i>但面向</i><b>个人 AI 的身份、智能、情境与设备协作</b><small>不是一个聊天 App，也不绑定某一台硬件。</small></div>
      </section>

      <section id="architecture" className="os-architecture-section"><header className="story-heading light"><span>01 · SYSTEM ARCHITECTURE</span><h2>产品在上面生长。<br />OS 与协议在下面提供共同基础。</h2><p>Eidolon One、官方外设和第三方产品可以拥有不同形态，但共享系统服务、情境模型与连接规则。</p></header><PlatformArchitecture /></section>

      <section className="os-services-section"><header className="story-heading"><span>02 · SYSTEM SERVICES</span><h2>不是罗列功能。<br />是把个人 AI 做成可复用的系统能力。</h2></header><div className="os-services-list">{systemLayers.map(([n,en,name,d])=><article key={n}><span>{n}</span><div><small>{en}</small><h3>{name}</h3></div><p>{d}</p></article>)}</div></section>

      <section className="device-modes-section"><header className="story-heading"><span>03 · DEVICE MODES</span><h2>不是所有设备都要成为 Eidolon One。<br />但都可以进入同一个系统。</h2></header><div className="device-modes">{deviceModes.map(([en,name,d])=><article key={en}><span>{en}</span><h3>{name}</h3><p>{d}</p></article>)}</div></section>

      <section className="os-reach-section"><header className="story-heading light"><span>04 · WHERE THE OS CAN APPEAR</span><h2>OS 面向的不是几个设备类别。<br />而是人需要智能协助的各种活动。</h2></header><div className="os-reach-list">{reach.map(([en,name,examples],index)=><article key={en}><span>0{index+1}</span><small>{en}</small><h3>{name}</h3><p>{examples}</p></article>)}</div></section>

      <section className="os-handoff-section"><div><span>05 · CONTINUITY</span><h2>情境变化时，<br />迁移的是任务状态，<br />不是整份私人数据。</h2></div><div className="handoff-rail"><article><small>CAPTURE</small><b>领夹终端</b><p>收下一句灵感和现场声音</p></article><i>OS handoff</i><article><small>SHAPE</small><b>One Go</b><p>用语音继续形成结构</p></article><i>EID-X</i><article><small>PREVIEW</small><b>墨水屏</b><p>只展示提纲与待确认问题</p></article><i>OS handoff</i><article><small>CREATE</small><b>One + Dock</b><p>展开完整素材与创作工具</p></article></div></section>

      <section className="one-future-section"><VesselMark size={60} tone="bone" idSuffix="os-detail-end" /><p>ONE OS · MANY PRODUCTS</p><h2>One 展示官方旗舰体验。<br />生态把 OS 带向更多设备。</h2><div className="story-actions"><Link className="story-button light" href="/one">进入 Eidolon One</Link><Link className="story-link on-dark" href="/protocol">了解 EID-X 协议 ↗</Link></div></section>
    </main>
  );
}
