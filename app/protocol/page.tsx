import type { Metadata } from "next";
import { site } from "../content";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "EID-* 主权身体协议 | Eidolon OS", description: "让模型、应用、汽车、家庭设备和机器人在 Owner 授权下接入同一个 Eidolon。" };

const contracts = [
  ["Identity", "你是谁，代表谁", "设备与 Agent 必须带着可验证身份进入，不能只凭一个匿名 API Key 获得长期权限。"],
  ["Capability", "你能做什么", "声音、视觉、位置、支付、移动和机械动作被声明成边界清晰、风险可判断的能力。"],
  ["Lease", "这次允许多久", "授权有范围、期限、场景和确认方式；离开场景、任务结束或 Owner 撤回后立即失效。"],
  ["Context", "此刻可以知道什么", "每个世界只挂载必要记忆。家庭、工作、健康与公共空间不会被粗暴合并。"],
  ["Trace", "行动为何发生", "输入来源、使用的模型、调用的工具、获得的确认和最终结果组成可追溯责任链。"],
];

export default function Protocol() {
  return <main className="site-shell sovereign-site">
    <SiteHeader />
    <section className="subhero protocol-subhero"><p>EID-* · FOR BUILDERS</p><h1>接入的不是一个助手。<br /><em>是一个人的主权边界。</em></h1><span>EID-* 让模型、应用、车辆、家庭设备和机器人声明自己是谁、能做什么、需要知道什么，并在 Owner 授权后成为 Eidolon 的临时心智或身体。</span></section>

    <section className="doc-section protocol-diagram-section"><div className="container"><header className="section-lead"><p>THE NARROW WAIST</p><h2>上面可以不断出现新智能，下面可以不断出现新身体。中间只保留一套稳定的主权契约。</h2></header>
      <div className="protocol-waist">
        <div className="protocol-side minds"><small>MINDS</small><span>本地模型</span><span>云端模型</span><span>专业 Agent</span><span>第三方服务</span></div>
        <div className="protocol-core"><small>OWNER CONTROLLED</small><b>EID-* SOVEREIGN CONTRACT</b><span>IDENTITY · CAPABILITY · LEASE · CONTEXT · TRACE</span></div>
        <div className="protocol-side bodies"><small>BODIES</small><span>随身设备</span><span>汽车与空间</span><span>工作工具</span><span>机器人</span></div>
      </div>
    </div></section>

    <section className="doc-section contract-section"><div className="container"><header className="section-lead"><p>FIVE CONTRACTS</p><h2>能力越接近现实，关系越需要被说清楚。</h2></header><div className="contract-list">{contracts.map(([name,q,d],i)=><article key={name}><span>0{i+1}</span><small>EID-{name.toUpperCase()}</small><h3>{q}</h3><b>{name}</b><p>{d}</p></article>)}</div></div></section>

    <section className="doc-section builder-section"><div className="container split-prose"><div><p>WHAT BUILDERS GAIN</p><h2>硬件不必再从零制造一个失忆的 AI。</h2></div><div className="prose"><p>开发者提供一种更好的心智、一个新的感官、一项可执行能力或一具现实身体。Eidolon 提供长期身份、已有关系、受控上下文、授权流程和结果写回。</p><p>这让不同品牌可以共同服务一个人，而不必共享、复制或占有那个人的完整数据。集成的价值从“把用户锁进生态”转向“让产品成为可信身体”。</p><a className="text-link" href={site.github} target="_blank" rel="noreferrer">查看协议进展与代码 ↗</a></div></div></section>

    <section className="closing-section"><p>THE OPEN INVITATION</p><h2>为一个人的 Eidolon，<br />创造新的心智与身体。</h2><a className="button light" href={site.github} target="_blank" rel="noreferrer">在 GitHub 上共建 ↗</a></section>
  </main>;
}
