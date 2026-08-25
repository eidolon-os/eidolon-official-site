import type { Metadata } from "next";
import { site } from "../content";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "EID-X 设备与能力协议 | Eidolon OS", description: "EID-X 定义传感器、屏幕、车载界面、专业工具和机器人如何被 Eidolon OS 发现、授权、调用与收回。" };

const contracts = [
  ["01", "IDENTITY", "设备是谁", "可验证的设备身份先于任何数据和能力访问。"],
  ["02", "CAPABILITY", "它能做什么", "传感、显示、音频、车辆和机械动作被声明成边界清晰的能力。"],
  ["03", "CONTEXT", "此刻可以知道什么", "OS 只提供当前任务需要且被允许的最小上下文。"],
  ["04", "LEASE", "允许多久", "每次授权都有范围、期限、确认方式和自动结束条件。"],
  ["05", "HANDOFF", "任务如何交接", "环境或风险变化时，把必要状态交给下一台合适设备。"],
  ["06", "TRACE", "行动如何追溯", "来源、模型、工具、设备、确认和结果形成责任链。"],
] as const;

const paths = [
  ["FULL OS", "兼容主机", "运行完整 Eidolon OS，形成独立个人 AI 产品。"],
  ["COMPANION", "伴随产品", "运行轻量系统能力，与 One 或其他主机共同呈现体验。"],
  ["EID-X", "能力设备", "只提供传感、界面、车辆、仪器或机械能力。"],
] as const;

export default function Protocol() {
  return <main className="site-shell site-dark">
    <SiteHeader />
    <section className="protocol-hero page-frame"><p className="eyebrow">EID-X · DEVICE &amp; CAPABILITY PROTOCOL</p><h1>让现实设备加入，<br /><em>但不拿走你的 AI。</em></h1><p>EID-X 是 Eidolon OS 的设备与能力协议。传感器、屏幕、车载界面、专业工具与机器人通过它被发现、验证、授权，并在任务结束后归还权限。</p></section>

    <section className="protocol-position section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">01 · WHERE EID-X SITS</p><h2>OS 维护个人 AI，<br />协议连接现实能力。</h2></div><p>产品可以由 Eidolon 或合作伙伴设计，但任何设备都不能绕过 OS 直接占有用户的长期状态。</p></header><div className="protocol-stack"><div><span>PRODUCTS</span><b>Eidolon One · One Family · Partner Devices</b></div><div className="stack-os"><span>SYSTEM</span><b>Eidolon OS</b><small>IDENTITY · MEMORY · AGENTS · CONTEXT · AUTHORITY</small></div><div className="stack-eidx"><span>PROTOCOL</span><b>EID-X</b><small>DISCOVER · VERIFY · LEASE · HANDOFF · TRACE</small></div><div><span>CAPABILITIES</span><b>SENSORS · DISPLAYS · VEHICLES · INSTRUMENTS · ROBOTS</b></div></div></div></section>

    <section className="contract-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">02 · SIX CONTRACTS</p><h2>设备越接近现实，<br />边界越需要被说清楚。</h2></div><p>EID-X 不只解决连接，更回答身份、最小披露、授权期限、任务交接与行动责任。</p></header><div className="contract-grid">{contracts.map(([n,code,title,detail])=><article key={code}><span>{n}</span><small>{code}</small><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>

    <section className="lease-example section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">03 · EXAMPLE: A VEHICLE LEASE</p><h2>进入车辆时，<br />只交接这段行程。</h2></div><p>车载是一个具体例子：Eidolon OS 继续维护完整个人状态，车辆只获得本次行程所需的显示、音频与状态能力。</p></header><div className="lease-flow"><article><span>01 · REQUEST</span><b>车辆声明能力</b><p>屏幕 · 音频 · 电量 · 位置</p></article><i>→</i><article><span>02 · GRANT</span><b>OS 发放行程租约</b><p>路线 · 到达时间 · 驾驶中提醒</p></article><i>→</i><article><span>03 · USE</span><b>低干扰交互</b><p>需要确认的工作留到停车后</p></article><i>→</i><article><span>04 · REVOKE</span><b>到达后自动收回</b><p>结果写回，私人状态不留车端</p></article></div></div></section>

    <section className="builder-paths section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">04 · FOR BUILDERS</p><h2>不必复制 One，<br />也不必再造一个 AI 孤岛。</h2></div><p>合作伙伴保留自己的硬件、交互和行业能力，通过三种路径进入同一个可治理生态。</p></header><div className="paths-grid">{paths.map(([code,title,detail])=><article key={code}><span>{code}</span><h3>{title}</h3><p>{detail}</p></article>)}</div><a className="text-action" href={site.github} target="_blank" rel="noreferrer">查看协议进展与代码 ↗</a></div></section>

    <section className="closing-section compact-closing"><p>THE OPEN DEVICE NETWORK</p><h2>让设备贡献能力，<br />让主权始终回到人。</h2><a className="primary-action light" href={site.github} target="_blank" rel="noreferrer">在 GitHub 上共建 ↗</a></section>
  </main>;
}
