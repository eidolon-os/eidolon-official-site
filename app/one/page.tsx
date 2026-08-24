/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { EidolonOne } from "../components/EidolonOne";
import { SiteHeader } from "../components/SiteHeader";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = {
  title: "Eidolon One | 个人 AI 主机",
  description: "Eidolon One 是运行 Eidolon OS 的个人 AI 主机。它保存长期记忆、关系与权限，让同一个 AI 通过随身、家庭、汽车与未来机器人继续出现。",
  openGraph: {
    title: "Eidolon One | 个人 AI 主机",
    description: "把你的 AI，安放在自己掌握的主机里。",
    images: [{ url: "/eidolon-one-product.png", width: 1024, height: 1536, alt: "Eidolon One 个人 AI 主机" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eidolon One | 个人 AI 主机",
    description: "把你的 AI，安放在自己掌握的主机里。",
    images: ["/eidolon-one-product.png"],
  },
};

const peripherals = [
  { code: "EAR", name: "Eidolon Ear", kind: "随身听觉", shape: "ear", line: "在路上听见你，也只把必要的信息带在身边。", detail: "开放式耳机或夹式终端。负责唤醒、对话、环境确认与即时授权；不保存完整长期记忆。" },
  { code: "ROOM", name: "Eidolon Room", kind: "房间节点", shape: "room", line: "让同一个 Eidolon 在你允许的空间里出现。", detail: "用于家庭公共空间的远场语音与在场感知。拥有清晰状态灯、实体静音和房间级权限。" },
  { code: "DOCK", name: "Eidolon Dock", kind: "桌面底座", shape: "dock", line: "回到桌面，完整工作现场自然恢复。", detail: "连接显示器、键盘、音频与本地高速存储，把 One 变成安静的个人工作中枢。" },
  { code: "CAR", name: "Eidolon Car Link", kind: "车载桥接", shape: "car", line: "车得到驾驶所需的能力，但不拥有你的 AI。", detail: "接入车机、麦克风、导航和车辆状态；驾驶中自动收窄界面与高风险行动权限。" },
  { code: "BODY", name: "EID Body", kind: "具身接口", shape: "body", line: "未来的机器人，可以成为你的新身体。", detail: "面向机器人与硬件厂商的能力模块。声明传感器与执行器，通过 EID-* 契约获得有期限的行动权。" },
] as const;

const day = [
  ["23:48", "手机", "把没说完的想法交给 One。它在家继续整理，不需要让手机整夜保持在线。"],
  ["07:20", "Room", "卧室节点只获得晨间日程与家庭提醒；工作项目仍留在封存状态。"],
  ["08:18", "Ear → Car Link", "对话从耳机接入汽车，交互自动变成适合驾驶的语音形式。"],
  ["09:03", "Dock", "到达桌面后，方案、来源和待确认问题恢复为完整工作现场。"],
  ["19:12", "家庭空间", "One 卸载工作世界，只把需要你决定的结果带回家。"],
] as const;

export default function OnePage() {
  return (
    <main className="site-shell product-story one-product-page">
      <SiteHeader />

      <section className="one-detail-hero">
        <div className="one-detail-copy">
          <p className="story-kicker">EIDOLON ONE · PERSONAL AI HOST</p>
          <h1>把你的 AI，<br /><em>安放在自己家里。</em></h1>
          <p>Eidolon One 是运行 Eidolon OS 的个人 AI 主机。它保存长期记忆、关系、权限和未完成的事；模型与外设围绕它更换，而不是反过来拥有它。</p>
          <div className="story-actions"><a className="story-button" href="#one-day">看 One 的一天</a><a className="story-link" href="#peripherals">查看外设构想 <i>↓</i></a></div>
          <div className="one-status-line"><span>PRODUCT CONCEPT</span><i />无屏主机<i />本地优先<i />云端按需</div>
        </div>
        <EidolonOne />
      </section>

      <section className="one-definition">
        <p>ONE IS THE HOST. EIDOLON OS IS THE PRODUCT.</p>
        <h2>One 是一台具体主机。<br />它不是 Eidolon OS 的全部，<br />却是它最稳定的家。</h2>
        <div className="one-host-roles">
          <article><span>01</span><h3>一直在</h3><p>手机休眠、汽车离开、云模型切换，One 仍然保存正在进行的生活与任务。</p></article>
          <article><span>02</span><h3>知道边界</h3><p>谁在场、哪个房间、哪台设备、什么时间，都决定此刻能读取与执行什么。</p></article>
          <article><span>03</span><h3>不锁定智能</h3><p>本地模型负责私密与即时，云模型负责复杂任务；模型升级不要求关系重新开始。</p></article>
        </div>
      </section>

      <section id="one-day" className="one-day-section">
        <header className="story-heading"><span>01 · ONE DAY WITH ONE</span><h2>主机留在家里。<br />同一个 Eidolon 跟着你走。</h2><p>One 保存连续性；外设只带走当前场景需要的那一部分。</p></header>
        <div className="one-day-track">
          {day.map(([time, place, text], index) => <article key={time}><span>{time}</span><div className="day-thread"><i />{index < day.length - 1 && <b />}</div><div><small>0{index + 1} · {place}</small><p>{text}</p></div></article>)}
        </div>
      </section>

      <section id="peripherals" className="peripheral-section">
        <header className="story-heading light"><span>02 · A FAMILY OF PRESENCES</span><h2>不是五个 AI。<br />是 Eidolon One 的五种感官与身体。</h2><p>外设不建立独立人格，也不永久复制核心记忆。它们通过 Eidolon OS 获得一份有范围、有期限、可撤回的能力。</p></header>
        <div className="peripheral-field">
          <div className="peripheral-core"><img src="/eidolon-one-product.png" alt="Eidolon One" /><span>EIDOLON ONE</span><small>HOST · HOLDS CONTINUITY</small></div>
          {peripherals.map((item, index) => <div className={`peripheral-orbit orbit-${index + 1}`} key={item.code}><i className={`peripheral-shape shape-${item.shape}`} /><span>{item.name}</span><small>{item.kind}</small></div>)}
        </div>
        <div className="peripheral-list">
          {peripherals.map((item, index) => <article key={item.code}><span>0{index + 1}</span><div><small>{item.code} · PRODUCT CONCEPT</small><h3>{item.name}</h3></div><p>{item.line}</p><p>{item.detail}</p></article>)}
        </div>
      </section>

      <section className="host-contract-section">
        <header className="story-heading"><span>03 · THE HOST CONTRACT</span><h2>任何外设都可以离开。<br />你的 Eidolon 不会跟着丢失。</h2></header>
        <div className="host-contract">
          <div><span>ONE 持有</span><p>长期记忆、身份与关系、权限策略、任务状态、行动账本。</p></div>
          <i>≠</i>
          <div><span>外设获得</span><p>当前场景需要的听觉、视觉、显示或行动能力，以及随时会到期的上下文。</p></div>
        </div>
        <p className="host-contract-note">这让汽车厂商、家电品牌和机器人公司可以制造更好的“身体”，却不必占有用户的身份与共同历史。</p>
      </section>

      <section className="one-future-section">
        <VesselMark size={62} tone="bone" idSuffix="one-future" />
        <p>EIDOLON ONE · PRODUCT DIRECTION</p>
        <h2>从一台个人主机开始，<br />让整个现实世界成为你的 AI 可以安全抵达的地方。</h2>
        <div className="story-actions"><Link className="story-button light" href="/#os">返回 Eidolon OS</Link><Link className="story-link on-dark" href="/protocol">了解 EID-* 接入协议 ↗</Link></div>
      </section>
    </main>
  );
}
