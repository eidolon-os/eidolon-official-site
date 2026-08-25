import type { Metadata } from "next";
import { site } from "../content";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "EID-X 设备与能力协议 | Eidolon OS", description: "EID-X 定义官方外设、可穿戴、空间终端、专业工具和机器人如何被 Eidolon OS 发现、授权并完成情境交接。" };

const contracts = [
  ["Identity", "设备是谁", "每台设备、服务与 Agent 以可验证身份进入系统，不能凭匿名连接取得长期权限。"],
  ["Capability", "它能做什么", "声音、视觉、位置、显示、支付、移动与机械动作被声明成边界清晰的能力。"],
  ["Context", "此刻可以知道什么", "OS 只提供当前任务需要且被允许的上下文，不把用户完整状态复制给每台设备。"],
  ["Lease", "这次允许多久", "能力授权带有情境、范围、期限和确认方式；活动结束或任务完成后自动失效。"],
  ["Handoff", "任务如何交接", "设备离开、界面变化或风险等级改变时，任务状态能交给下一台合适产品继续。"],
  ["Trace", "行动如何追溯", "来源、模型、工具、设备、确认和结果形成可核查的责任链。"],
] as const;

export default function Protocol() {
  return <main className="site-shell sovereign-site protocol-v2">
    <SiteHeader />
    <section className="subhero protocol-subhero"><p>EID-X · DEVICE &amp; CAPABILITY PROTOCOL</p><h1>让不同设备，<br /><em>进入同一个 OS。</em></h1><span>EID-X 是 Eidolon OS 的设备与能力协议。可穿戴、空间终端、创作工具、辅助设备和机器人通过它被发现、认证、授权，并在情境变化时完成任务交接。</span></section>

    <section className="doc-section protocol-position-section"><div className="container"><header className="section-lead"><p>WHERE EID-X SITS</p><h2>OS 维护个人 AI。<br />EID-X 连接现实硬件。<br />产品在两者之上形成体验。</h2></header><div className="protocol-position-map"><div className="ppm-products"><span>EIDOLON ONE</span><span>ONE FAMILY</span><span>PARTNER DEVICES</span></div><div className="ppm-os"><b>Eidolon OS</b><small>RUNTIME · MEMORY · AGENT · CONTEXT · AUTHORITY</small></div><div className="ppm-eidx"><b>EID-X</b><small>DISCOVER · IDENTIFY · CAPABILITY · HANDOFF · TRACE</small></div><div className="ppm-hardware"><span>SENSORS</span><span>DISPLAYS</span><span>INSTRUMENTS</span><span>ROBOTS</span></div></div></div></section>

    <section className="doc-section protocol-diagram-section"><div className="container"><header className="section-lead"><p>THE COMMON LANGUAGE</p><h2>官方产品与第三方设备，<br />使用同一种方式说明自己并请求能力。</h2></header><div className="protocol-waist"><div className="protocol-side minds"><small>OS SERVICES</small><span>个人 AI 运行时</span><span>情境与任务状态</span><span>权限与安全</span><span>Agent 与模型</span></div><div className="protocol-core"><small>DEVICE INTERFACE</small><b>EID-X PROTOCOL</b><span>IDENTITY · CAPABILITY · CONTEXT · LEASE · HANDOFF · TRACE</span></div><div className="protocol-side bodies"><small>PRODUCTS</small><span>One 官方外设</span><span>可穿戴与辅助设备</span><span>创作与专业工具</span><span>空间终端与机器人</span></div></div></div></section>

    <section className="doc-section contract-section"><div className="container"><header className="section-lead"><p>SIX CONTRACTS</p><h2>设备越靠近现实，<br />交接和边界越需要被说清楚。</h2></header><div className="contract-list">{contracts.map(([name,q,d],i)=><article key={name}><span>0{i+1}</span><small>EID-{name.toUpperCase()}</small><h3>{q}</h3><b>{name}</b><p>{d}</p></article>)}</div></div></section>

    <section className="doc-section builder-section"><div className="container split-prose"><div><p>WHAT BUILDERS GAIN</p><h2>设备不必复制 One，<br />也不必从零制造自己的 AI 孤岛。</h2></div><div className="prose"><p>厂商可以设计自己的产品形态、传感器、交互与行业能力。Eidolon OS 提供个人 AI 的共同系统服务，EID-X 提供安全连接、情境交接和能力调用规则。</p><p>完整设备可以运行 Eidolon OS；轻量设备可以作为 Companion；既有可穿戴、显示器、创作工具、空间设施和机器人也可以只实现 EID-X。三种路径共同进入一个兼容生态。</p><a className="text-link" href={site.github} target="_blank" rel="noreferrer">查看协议进展与代码 ↗</a></div></div></section>

    <section className="closing-section"><p>THE OPEN DEVICE NETWORK</p><h2>为 Eidolon OS，<br />创造新的产品与现实能力。</h2><a className="button light" href={site.github} target="_blank" rel="noreferrer">在 GitHub 上共建 ↗</a></section>
  </main>;
}
