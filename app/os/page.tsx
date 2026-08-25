import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { PlatformArchitecture } from "../components/PlatformArchitecture";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = {
  title: "Eidolon OS | 个人 AI 操作系统",
  description: "Eidolon OS 保存个人 AI 的身份、记忆、Agent、任务与权限，并让它在不同产品和真实环境中持续运行。",
};

const services = [
  ["IDENTITY", "身份与关系", "知道正在代表谁，也知道不同关系之间不能互相越界。"],
  ["MEMORY", "长期记忆", "保存来源、时间、关系与遗忘规则；换模型不必重新认识自己。"],
  ["AGENTS", "Agent 与模型", "本地模型、云模型和专业 Agent 按任务组合，能力可换，个人状态不换。"],
  ["AUTHORITY", "权限与责任", "决定设备能知道什么、能做什么、允许多久，并记录重要行动的责任链。"],
] as const;

const environmentMatrix = [
  ["家庭", "成员关系、共同任务、环境变化", "传感器原始流、其他成员私密记忆"],
  ["办公", "当前项目、会议身份、可公开材料", "私人关系、其他项目、长期账户凭证"],
  ["车载", "本次行程、路线、驾驶中可用交互", "完整记忆、私人对话、无关日程"],
  ["创作", "当前作品、素材来源、工具状态", "未授权作品、发布权、危险机械动作"],
  ["照护", "本人允许的趋势与提醒规则", "持续监视、无条件共享、无限期保留"],
] as const;

const modes = [
  ["FULL OS", "完整主机", "运行完整 Eidolon OS，承载长期状态与本地服务。Eidolon One 是官方旗舰。"],
  ["COMPANION", "伴随设备", "运行轻量系统能力，与主机共同完成一次连续交互。"],
  ["EID-X", "能力设备", "只声明传感、显示、音频、车辆或机械能力，不复制完整个人 AI。"],
] as const;

export default function OSPage() {
  return (
    <main className="site-shell site-light">
      <SiteHeader />
      <section className="subpage-hero page-frame os-page-hero">
        <div><p className="eyebrow">EIDOLON OS · THE PLATFORM</p><h1>让个人 AI 拥有<br /><em>自己的系统基础。</em></h1><p>传统操作系统管理应用和硬件。Eidolon OS 管理一个长期存在的个人 AI：它是谁、记得什么、可以调用哪些智能，以及何时能代表你行动。</p><div className="actions"><a className="primary-action" href="#architecture">查看系统架构</a><Link className="text-action" href="/one">认识旗舰 One <i>↗</i></Link></div></div>
        <aside className="definition-panel"><span>不是</span><del>一个聊天 App</del><del>某台主机的固件</del><del>一个模型的账户层</del><i>而是</i><b>个人 AI 的运行时、状态层与主权边界。</b></aside>
      </section>

      <section id="architecture" className="dark-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">01 · SYSTEM ARCHITECTURE</p><h2>产品可以变化，<br />个人状态不必重建。</h2></div><p>One、官方外设与合作伙伴设备拥有不同形态，但都在同一套 OS 服务和 EID-X 规则上工作。</p></header><PlatformArchitecture /></div></section>

      <section className="services-section section-pad page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">02 · WHAT THE OS KEEPS</p><h2>OS 保存的不是功能清单，<br />而是“同一个你”的连续条件。</h2></div><p>模型越强、设备越多，越需要一层不被任何单一供应商占有的长期基础。</p></header><div className="services-grid">{services.map(([code,title,detail])=><article key={code}><span>{code}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></section>

      <section className="context-section section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">03 · SAME OS, DIFFERENT CONTEXT</p><h2>在不同环境中，<br />开放不同部分。</h2></div><p>连续性不是全量同步。OS 根据活动、设备身份和风险，只交接当前需要的任务状态与能力。</p></header><div className="context-matrix"><div className="matrix-head"><span>环境例子</span><b>OS 提供</b><b>继续封存</b></div>{environmentMatrix.map(([place,provide,withhold])=><article key={place}><h3>{place}</h3><p>{provide}</p><p>{withhold}</p></article>)}</div></div></section>

      <section className="modes-section section-pad page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">04 · DEVICE MODES</p><h2>不是每台设备<br />都要变成 Eidolon One。</h2></div><p>完整主机、伴随设备和能力设备是三条不同接入路径。产品自由设计，主权规则保持一致。</p></header><div className="modes-grid">{modes.map(([code,title,detail])=><article key={code}><span>{code}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></section>

      <section className="handoff-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">05 · A SINGLE HANDOFF</p><h2>离开办公室，进入车辆，<br />任务继续，权限重算。</h2></div><p>迁移的不是整份私人数据，而是一段可验证、可到期的任务状态。</p></header><div className="handoff-flow"><article><small>OFFICE</small><b>One + Dock</b><p>保存当前提案与下一步</p></article><i>OS packages context</i><article><small>VEHICLE</small><b>车载界面</b><p>只接收路线与待确认事项</p></article><i>EID-X lease expires</i><article><small>ARRIVAL</small><b>Eidolon One</b><p>合并结果并收回车机权限</p></article></div></div></section>

      <section className="closing-section compact-closing"><VesselMark size={50} tone="bone" idSuffix="os-end" /><p>THE PLATFORM FOR PERSONAL AI</p><h2>One 定义旗舰体验。<br />OS 定义它可以走多远。</h2><div className="actions"><Link className="primary-action light" href="/one">进入 Eidolon One</Link><Link className="text-action on-dark" href="/protocol">了解 EID-X ↗</Link></div></section>
    </main>
  );
}
