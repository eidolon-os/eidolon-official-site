import type { Metadata } from "next";
import { site } from "../content";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "EID-* 身体与能力协议 | Eidolon OS", description: "让汽车、家庭设备、机器人和软件能力成为同一个 Eidolon 的身体。" };

const contracts = [
  ["Pair", "它是谁、属于谁", "设备身份、Owner 归属、加入与撤销。"],
  ["Presence", "谁在场、身处何处", "房间、乘员、说话权和隐私模式。"],
  ["Capability", "它能够做什么", "声音、视觉、屏幕、移动、机械动作与风险级别。"],
  ["Lease", "这一次可以做多久", "能力租约、优先级、抢占、过期和人工确认。"],
  ["Task", "行动如何完成", "长任务状态、失败恢复、结果与主动回报。"],
  ["Memory", "结果如何成为经验", "来源、归属、写回、纠错和删除。"],
];

export default function Protocol() {
  return <main className="site-shell v4-site">
    <SiteHeader />
    <section className="v4-subhero protocol-v4-hero"><div className="container"><p>FOR AUTOMOTIVE · HOME · ROBOTICS · SOFTWARE</p><h1>造一具身体，<br />接入同一个 Eidolon。</h1><span>EID-* 不是另一个设备控制 API。它定义汽车、家庭空间、机器人和软件能力如何带着身份、场景、授权与结果，进入一个人的长期智能体系统。</span></div></section>

    <section className="v4-section v4-protocol-waist"><div className="container"><div className="v4-lead"><p>THE NARROW WAIST</p><h2>上面可以更换智能，下面可以增加身体。中间的身份与治理契约保持稳定。</h2></div><div className="v4-waist"><div className="v4-waist-top"><span>本地模型</span><span>云端模型</span><span>专业 Agent</span><span>第三方服务</span></div><div className="v4-waist-core"><small>EIDOLON PERSONAL CORE</small><b>身份 · 记忆 · 场景 · 权限 · 任务</b></div><div className="v4-waist-bottom"><span>随身设备</span><span>汽车</span><span>家庭空间</span><span>工作设备</span><span>机器人</span></div></div></div></section>

    <section className="v4-section v4-contracts"><div className="container"><div className="v4-lead"><p>EID-* CONTRACTS</p><h2>设备接入的不是一条指令，而是一套完整关系。</h2></div><div className="v4-contract-list">{contracts.map(([name,q,d],i)=><article key={name}><span>0{i+1}</span><h3>{name}</h3><b>{q}</b><p>{d}</p></article>)}</div></div></section>

    <section className="v4-protocol-final"><div className="container"><p>未来的汽车、音箱和机器人，不必各自制造一个失忆的助手。</p><h2>它们可以成为同一个 Eidolon<br />看见、听见和触碰世界的新方式。</h2><a className="v4-button dark" href={site.github} target="_blank" rel="noreferrer">查看项目与协议进展 ↗</a></div></section>
  </main>;
}
