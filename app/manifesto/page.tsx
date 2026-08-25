import type { Metadata } from "next";
import { site } from "../content";
import { SiteHeader } from "../components/SiteHeader";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = { title: "Eidolon OS 愿景 | AI 主权属于人", description: "为什么个人 AI 的身份、记忆、权限和连续性必须由人拥有。" };

const shifts = [
  ["平台账号", "Owner Root", "身份可以被本人持有、迁移和恢复，而不是平台数据库中的附属记录。"],
  ["聊天历史", "可继续生活的记忆", "记忆有来源、关系、边界与遗忘权，换模型以后仍能继续工作。"],
  ["全知助手", "有边界的代表", "Agent 只能在明确范围与期限内代表人行动，并对结果留下责任链。"],
  ["设备孤岛", "可治理的能力网络", "主机、传感器、车辆、工具和机器人共享协议，但不共享所有数据。"],
] as const;

const compounding = [
  ["HISTORY", "个人历史", "长期记忆、关系与偏好随真实使用累积，不能靠复制界面瞬间获得。"],
  ["TRUST", "被验证的信任", "每次正确限制、解释和撤回权限，都让用户更敢委托下一件事。"],
  ["STANDARD", "设备标准", "更多厂商接受同一套身份、租约和责任规则，生态价值随兼容扩大。"],
  ["EXIT", "真实退出权", "能迁移、能恢复、能更换模型和主机，反而使长期关系更可信。"],
] as const;

const roadmap = [
  ["01", "个人闭环", "让一位 Owner 真正拥有身份、记忆、模型、设备与授权。"],
  ["02", "多环境连续", "在家庭、办公、车载、创作与照护中验证任务交接和最小披露。"],
  ["03", "协作关系", "每个人保有自己的 Eidolon，再建立可撤回的共同任务与共同记忆。"],
  ["04", "开放设备生态", "让外设、车辆、专业工具与机器人通过 EID-X 加入。"],
] as const;

export default function Manifesto() {
  return <main className="site-shell site-dark">
    <SiteHeader />
    <section className="manifesto-hero page-frame"><p className="eyebrow">THE EIDOLON MANIFESTO</p><h1>AI 时代真正稀缺的，<br />不是更强的模型。<br /><em>是人的主权位置。</em></h1><p>模型会快速商品化，设备会持续换代，平台会不断争夺入口。Eidolon OS 选择成为不随这些变化消失的个人基础：让身份、记忆、权限和选择权持续属于人。</p></section>

    <section className="manifesto-gap section-pad"><div className="page-frame split-heading"><div><p className="eyebrow">01 · THE STRUCTURAL GAP</p><h2>当 AI 开始行动，<br />一个 App 已经不够。</h2></div><div className="prose"><p>只回答问题时，聊天窗口可以承载 AI。当它开始维护长期记忆、调用 Agent、跨设备继续任务，并进入家庭设备、办公工具、车辆与机器人时，就需要稳定的运行时、设备协议和权限体系。</p><p>Eidolon OS 是这套系统基础；Eidolon One 是官方旗舰主机；EID-X 让现实设备加入。主权由系统保证，不依赖某一件硬件的承诺。</p></div></div></section>

    <section className="manifesto-shifts section-pad"><div className="page-frame"><header className="section-heading on-dark"><p className="eyebrow">02 · FOUR CHANGES</p><h2>把 AI 从平台资产，<br />重新变成人的能力。</h2></header><div className="shift-list">{shifts.map(([from,to,detail],index)=><article key={from}><span>0{index+1}</span><del>{from}</del><i>→</i><h3>{to}</h3><p>{detail}</p></article>)}</div></div></section>

    <section className="compounding-section section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">03 · WHY THIS CAN ENDURE</p><h2>功能会被复刻。<br />位置、历史与信任不会。</h2></div><p>Eidolon 的壁垒不应该是用户无法离开，而是用户即使可以离开，仍愿意让它参与更多真实活动。</p></header><div className="compounding-grid">{compounding.map(([code,title,detail])=><article key={code}><span>{code}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>

    <section className="roadmap-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">04 · THE PATH</p><h2>从一台可信主机，<br />走向开放的能力网络。</h2></div><p>先闭环一个人的主权与连续性，再进入多环境、多人协作与第三方设备生态。</p></header><div className="roadmap-list">{roadmap.map(([n,title,detail])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>

    <section className="closing-section compact-closing"><VesselMark size={54} tone="bone" idSuffix="manifesto-end" /><p>OUR POSITION</p><h2>我们不替人拥有 AI。<br />我们让人拥有自己的 AI。</h2><a className="primary-action light" href={site.github} target="_blank" rel="noreferrer">加入共建 ↗</a></section>
  </main>;
}
