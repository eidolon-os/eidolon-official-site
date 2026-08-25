import type { Metadata } from "next";
import { site } from "../content";
import { SiteHeader } from "../components/SiteHeader";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = { title: "Eidolon OS 愿景 | AI 主权属于人", description: "为什么个人 AI 的身份、记忆、权限和连续性必须由人拥有。" };

const shifts = [
  ["平台账号", "Owner Root", "身份不再是某个平台数据库里的一行，而是人可以持有、迁移和恢复的根。"],
  ["聊天记录", "可继续生活的记忆", "记忆有来源、关系、边界与遗忘权，并能在更换模型后继续工作。"],
  ["全知助手", "有边界的代表", "智能体只能在明确范围和期限内代表人行动，并对每个结果留下责任链。"],
  ["设备孤岛", "同一个 OS 生态", "One、官方外设和兼容设备共享系统能力与 EID-X 连接规则，又保留各自产品形态。"],
];

const roadmap = [
  ["01", "个人主权中枢", "完成一位 Owner 的身份、记忆、模型、设备与授权闭环。"],
  ["02", "生活连续性", "在随身、家庭、工作和移动空间里实现按边界挂载的同一体验。"],
  ["03", "家庭与团队联邦", "每个人保有自己的 Eidolon，再建立可验证、可撤回的共同空间。"],
  ["04", "EID-X 设备生态", "让官方外设、汽车、机器人和其他 Agent 以公开协议接入，而不是形成新的硬件孤岛。"],
];

export default function Manifesto() {
  return <main className="site-shell sovereign-site">
    <SiteHeader />
    <section className="subhero">
      <p>THE EIDOLON MANIFESTO</p>
      <h1>AI 时代真正稀缺的，<br />不是更强的模型。<br /><em>是人的主权位置。</em></h1>
      <span>模型会快速商品化，设备会持续换代，平台会不断争夺入口。Eidolon OS 选择成为个人 AI 的共同系统基础：让身份、记忆、权限与场景连续性不再依附某一个模型或某一台设备。</span>
    </section>

    <section className="doc-section light-doc">
      <div className="container split-prose"><div><p>THE STRUCTURAL GAP</p><h2>今天的 AI 越强，<br />越需要自己的操作系统。</h2></div><div className="prose"><p>当 AI 只回答问题时，一个 App 足以承载它。当 AI 开始维护长期记忆、调用 Agent、跨设备继续任务，并进入汽车、家庭和机器人时，就需要稳定的运行时、设备协议和权限体系。</p><p>Eidolon OS 不等于 Eidolon One。OS 是可复用的系统基础；One 是官方旗舰产品；EID-X 让官方外设和第三方设备进入同一生态。人的主权由系统保证，而不是依赖某一件硬件。</p></div></div>
    </section>

    <section className="doc-section shift-doc"><div className="container"><header className="section-lead"><p>FOUR CHANGES</p><h2>把 AI 从平台资产，重新变成人的能力。</h2></header>
      <div className="manifest-shifts">{shifts.map(([from,to,d],i)=><article key={from}><span>0{i+1}</span><del>{from}</del><i>→</i><h3>{to}</h3><p>{d}</p></article>)}</div>
    </div></section>

    <section className="doc-section conviction-doc"><div className="container split-prose"><div><p>WHY THIS CAN ENDURE</p><h2>功能会被复刻。<br />中立位置、历史与信任不会被瞬间复制。</h2></div><div className="prose"><p>Eidolon 的价值随时间复利：越多真实场景进入，个人语境越完整；边界被反复验证，用户越敢委托；更多硬件接受同一套主权契约，迁移成本越低，生态价值越高。</p><p>这不是用锁定用户建立壁垒，而是用“用户可以离开”建立信任。真正的防御力来自一个悖论：因为人始终保有退出权，才愿意把更多生活交给它。</p></div></div></section>

    <section className="doc-section roadmap-doc"><div className="container"><header className="section-lead"><p>THE PATH</p><h2>从一个人的主权闭环，走向开放的智能世界。</h2></header><div className="roadmap-list">{roadmap.map(([n,k,d])=><article key={n}><span>{n}</span><h3>{k}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="closing-section"><VesselMark size={68} tone="bone" idSuffix="manifesto" /><p>OUR POSITION</p><h2>我们不替人拥有 AI。<br />我们让人拥有自己的 AI。</h2><a className="button light" href={site.github} target="_blank" rel="noreferrer">加入共建 ↗</a></section>
  </main>;
}
