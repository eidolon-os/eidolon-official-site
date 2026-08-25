import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { PlatformArchitecture } from "../components/PlatformArchitecture";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = {
  title: "Eidolon OS | 个人 AI 操作系统",
  description: "Eidolon OS 为个人 AI 提供身份、记忆、Agent、情境、权限与设备协作的共同系统基础。",
};

const systemServices = [
  ["01", "PERSONAL AI RUNTIME", "个人 AI 运行时", "维护身份、长期记忆、关系和正在进行的任务。应用、模型和硬件面对的是同一个个人 AI。"],
  ["02", "INTELLIGENCE FABRIC", "智能与 Agent 编排", "本地模型、云模型、工具和专业 Agent 可以按任务组合。智能不断升级，个人状态无需重建。"],
  ["03", "CONTEXT FRAMEWORK", "情境与体验框架", "理解正在做什么、身处何种环境、哪些设备在场，并选择合适的语音、视觉、屏幕或动作。"],
  ["04", "TRUST & AUTHORITY", "主权与安全服务", "管理设备身份、最小披露、操作确认、授权租约、行动记录、迁移与恢复。"],
] as const;

const deviceModes = [
  ["FULL OS", "完整主机", "运行完整系统服务，保存长期状态并承担高信任判断。Eidolon One 是官方旗舰实现。", "One · 个人服务器 · 合作伙伴主机"],
  ["COMPANION", "伴随设备", "运行轻量体验框架，带来随身、房间、桌面或无障碍交互，但不复制完整个人状态。", "One Go · One Room · One Dock"],
  ["EID-X", "能力设备", "只声明自己能感知、呈现或行动什么，在任务期限内获得最少上下文。", "传感器 · 车载界面 · 仪器 · 机器人"],
] as const;

const activities = [
  ["REFLECT", "独处与思考", "日记 · 复盘 · 私人决定"],
  ["CREATE", "创作与研究", "写作 · 影像 · 音乐 · 实验"],
  ["CONNECT", "沟通与协作", "会议 · 翻译 · 共同计划"],
  ["CARE", "日常照护", "作息 · 陪伴 · 温和提醒"],
  ["EXPLORE", "移动与探索", "路线 · 户外 · 陌生环境"],
  ["ACCESS", "无障碍交互", "字幕 · 触觉 · 辅助开关"],
  ["MAKE", "现实制作", "摄影 · 工作台 · 专业仪器"],
  ["ACT", "具身行动", "机械臂 · 移动机器人 · 工具"],
] as const;

export default function OSPage() {
  return (
    <main className="site-shell site-light os-v2-page">
      <SiteHeader />

      <section className="subpage-hero page-frame os-page-hero">
        <div><p className="eyebrow">EIDOLON OS · THE PLATFORM</p><h1>个人 AI 的<br /><em>操作系统。</em></h1><p>传统操作系统让应用运行在不同电脑和手机上。Eidolon OS 让一个人的 AI 运行在不同模型、产品和现实活动中，同时保留身份、记忆与决定权。</p><div className="actions"><a className="primary-action" href="#architecture">理解系统架构</a><Link className="text-action" href="/one">认识旗舰 One <i>↗</i></Link></div></div>
        <aside className="os-analogy-panel"><span>OPERATING SYSTEM LOGIC</span><div><small>传统 OS</small><b>协调应用、硬件与文件</b></div><i>→</i><div className="analogy-focus"><small>Eidolon OS</small><b>协调身份、记忆、智能、情境与现实能力</b></div><p>模型可以替换，产品可以换代。你的个人 AI 不必从零开始。</p></aside>
      </section>

      <section id="architecture" className="dark-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">01 · SYSTEM ARCHITECTURE</p><h2>产品在上面生长。<br />OS 与协议提供共同基础。</h2></div><p>Eidolon One、官方外设和合作伙伴产品可以拥有不同形态，但共享系统服务、设备身份和连接规则。</p></header><PlatformArchitecture /></div></section>

      <section className="os-service-section section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">02 · SYSTEM SERVICES</p><h2>不是功能合集。<br />是个人 AI 可复用的系统能力。</h2></div><p>OS 负责那些不能随 App、模型或某件硬件一起消失的长期基础。</p></header><div className="os-service-stack">{systemServices.map(([n,code,title,detail])=><article key={code}><span>{n}</span><div><small>{code}</small><h3>{title}</h3></div><p>{detail}</p></article>)}</div></div></section>

      <section className="os-device-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">03 · THREE DEVICE MODES</p><h2>不是所有设备都要成为 One。<br />但都能进入同一个系统。</h2></div><p>完整主机、伴随设备和能力设备承担不同责任。越接近长期状态，权限越高；越靠近现场，能力越具体。</p></header><div className="os-device-modes">{deviceModes.map(([code,title,detail,examples],index)=><article key={code}><span>0{index+1}</span><small>{code}</small><h3>{title}</h3><p>{detail}</p><b>{examples}</b></article>)}</div></div></section>

      <section className="os-activity-section section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">04 · WHERE THE OS APPEARS</p><h2>OS 面向的不是几个空间。<br />而是人需要智能协助的活动。</h2></div><p>家庭、办公室或车辆只是设备所在的环境。真正连续的是思考、创作、协作、照护和行动本身。</p></header><div className="os-activity-atlas">{activities.map(([code,title,examples],index)=><article key={code}><span>0{index+1}</span><small>{code}</small><h3>{title}</h3><p>{examples}</p></article>)}</div></div></section>

      <section className="os-continuity-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">05 · CONTINUITY</p><h2>情境变化时，迁移任务状态。<br />不是复制整份私人数据。</h2></div><p>一次创作可以经过随身采集、快速整理、轻量预览和完整制作；每个设备只获得当下所需的一段。</p></header><div className="os-continuity-rail"><article><small>CAPTURE</small><b>领夹终端</b><p>收下一句灵感与现场声音</p></article><i>OS handoff</i><article><small>SHAPE</small><b>One Go</b><p>用语音继续形成结构</p></article><i>EID-X lease</i><article><small>PREVIEW</small><b>电子纸</b><p>只展示提纲与待确认问题</p></article><i>OS handoff</i><article><small>CREATE</small><b>One + Dock</b><p>展开素材、Agent 与创作工具</p></article></div></div></section>

      <section className="closing-section compact-closing"><VesselMark size={50} tone="bone" idSuffix="os-v2-end" /><p>ONE OS · MANY PRODUCTS · ONE OWNER</p><h2>One 定义旗舰体验。<br />OS 让个人 AI 拥有更长的生命。</h2><div className="actions"><Link className="primary-action light" href="/one">进入 Eidolon One</Link><Link className="text-action on-dark" href="/protocol">了解 EID-X ↗</Link></div></section>
    </main>
  );
}
