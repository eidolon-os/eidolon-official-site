import type { Metadata } from "next";
import { site } from "../content";
import { SiteHeader } from "../components/SiteHeader";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = { title: "Eidolon OS 愿景 | AI 主权属于人", description: "为什么个人 AI 的身份、记忆、权限和连续性必须由人拥有。" };

const shifts = [
  ["平台账号", "Owner Root", "身份不再是某个平台数据库里的一行，而是人可以持有、迁移和恢复的根。"],
  ["聊天记录", "可继续生活的记忆", "记忆有来源、关系、边界与遗忘权，并能在更换模型后继续工作。"],
  ["全知助手", "有边界的代表", "智能体只能在明确范围和期限内代表人行动，并对每个结果留下责任链。"],
  ["设备生态", "可挂载的身体", "车、家、手机和机器人提供感官与行动，但不能占有 Eidolon 本身。"],
];

const roadmap = [
  ["01", "个人主权中枢", "完成一位 Owner 的身份、记忆、模型、设备与授权闭环。"],
  ["02", "生活连续性", "在随身、家庭、工作和移动空间里实现按边界挂载的同一体验。"],
  ["03", "家庭与团队联邦", "每个人保有自己的 Eidolon，再建立可验证、可撤回的共同空间。"],
  ["04", "身体与智能体网络", "让硬件、机器人和其他 Agent 以公开契约接入，而不是被单一平台吞并。"],
];

export default function Manifesto() {
  return <main className="site-shell sovereign-site">
    <SiteHeader />
    <section className="subhero">
      <p>THE EIDOLON MANIFESTO</p>
      <h1>AI 时代真正稀缺的，<br />不是更强的模型。<br /><em>是人的主权位置。</em></h1>
      <span>模型会快速商品化，设备会持续换代，平台会不断争夺入口。Eidolon 选择构建不随它们消失的那一层：一个人自己的身份、记忆、权限、关系与长期智能连续性。</span>
    </section>

    <section className="doc-section light-doc">
      <div className="container split-prose"><div><p>THE STRUCTURAL GAP</p><h2>今天的 AI 越强，<br />所有权问题越无法回避。</h2></div><div className="prose"><p>当 AI 只回答问题时，选择哪个模型是体验差异。当 AI 开始读取私人数据、理解关系、代表人发消息、付款、开门或控制机器人时，选择谁拥有它，就成为权力结构。</p><p>平台倾向于让身份、数据、模型和入口闭合在自己的生态里。Eidolon 的机会不是做另一个更完整的平台，而是成为人与所有平台之间的主权层：中立、可迁移、可验证。</p></div></div>
    </section>

    <section className="doc-section shift-doc"><div className="container"><header className="section-lead"><p>FOUR CHANGES</p><h2>把 AI 从平台资产，重新变成人的能力。</h2></header>
      <div className="manifest-shifts">{shifts.map(([from,to,d],i)=><article key={from}><span>0{i+1}</span><del>{from}</del><i>→</i><h3>{to}</h3><p>{d}</p></article>)}</div>
    </div></section>

    <section className="doc-section conviction-doc"><div className="container split-prose"><div><p>WHY THIS CAN ENDURE</p><h2>功能会被复刻。<br />中立位置、历史与信任不会被瞬间复制。</h2></div><div className="prose"><p>Eidolon 的价值随时间复利：越多真实场景进入，个人语境越完整；边界被反复验证，用户越敢委托；更多硬件接受同一套主权契约，迁移成本越低，生态价值越高。</p><p>这不是用锁定用户建立壁垒，而是用“用户可以离开”建立信任。真正的防御力来自一个悖论：因为人始终保有退出权，才愿意把更多生活交给它。</p></div></div></section>

    <section className="doc-section roadmap-doc"><div className="container"><header className="section-lead"><p>THE PATH</p><h2>从一个人的主权闭环，走向开放的智能世界。</h2></header><div className="roadmap-list">{roadmap.map(([n,k,d])=><article key={n}><span>{n}</span><h3>{k}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="closing-section"><VesselMark size={68} tone="bone" idSuffix="manifesto" /><p>OUR POSITION</p><h2>我们不替人拥有 AI。<br />我们让人拥有自己的 AI。</h2><a className="button light" href={site.github} target="_blank" rel="noreferrer">加入共建 ↗</a></section>
  </main>;
}
