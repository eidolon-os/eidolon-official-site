/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = {
  title: "Eidolon One | Eidolon OS 官方旗舰主机",
  description: "Eidolon One 是完整呈现 Eidolon OS 的官方旗舰个人 AI 主机，并通过 EID-X 与官方外设和兼容设备协作。",
  openGraph: { title: "Eidolon One | 官方旗舰主机", description: "把 Eidolon OS 做成一台真正可以拥有的个人 AI 主机。概念影像不代表最终工业设计。", images: [{ url: "/one-matrix-concept-v2.png", width: 1774, height: 887, alt: "Eidolon One 与外设产品方向概念影像" }] },
};

const family = [
  ["00", "Eidolon One", "OFFICIAL FLAGSHIP HOST", "完整运行 OS，保存长期状态，管理设备信任与关键行动确认。"],
  ["01", "One Go", "MOBILE COMPANION", "随身语音、轻量感知与低干扰提醒。"],
  ["02", "One Room", "SPATIAL COMPANION", "远场对话、共同空间与环境设备协调。"],
  ["03", "One Dock", "WORK COMPANION", "显示、输入、存储和专业工具扩展。"],
  ["04", "One Link", "CAPABILITY BRIDGE", "连接车辆、仪器、机器人与既有硬件。"],
] as const;

const principles = [
  ["LOCAL", "本地优先", "长期状态与高信任判断优先在主机完成。"],
  ["VISIBLE", "边界可见", "正在参与的设备、能力与授权期限始终可查。"],
  ["PORTABLE", "状态可迁移", "One 是旗舰主机，不是绑住个人 AI 的唯一容器。"],
  ["OPEN", "外设开放", "第一方与合作伙伴设备使用同一套 EID-X 规则。"],
] as const;

const accessoryGroups = [
  ["感知", "开放式耳机 · 领夹终端 · 睡眠传感器 · 空气节点 · 相机握柄"],
  ["呈现", "轻量眼镜 · 墨水屏 · 桌面光幕 · 共享屏 · 微型投影"],
  ["操控", "触控笔 · 键盘旋钮 · 音乐控制器 · 触觉手环 · 辅助开关"],
  ["行动", "车辆接口 · 专业仪器 · 机械臂 · 移动机器人 · 无人机"],
] as const;

const hostEnvironments = [
  ["HOME", "家庭", "环境传感器 · One Room · 对话机器人 · 灯光 / 屏幕", "只开放当前家庭任务，私人记忆不进入共同空间。"],
  ["WORK", "办公", "One Dock · 会议音视频 · 办公屏 · 打印与门禁", "只带入本次项目和会议上下文，离场即结束授权。"],
  ["MOVE", "车载", "车载屏幕 · 车内音频 · 车辆状态 · 方向盘按键", "只交接本次行程，到达后收回车端租约。"],
  ["MAKE", "创作", "相机握柄 · 音乐控制器 · 专业软件 · 工作室机器人", "素材与工具按项目开放，发布动作仍需本人确认。"],
  ["CARE", "照护", "睡眠传感器 · 辅助开关 · 家庭屏 · 陪护设备", "健康信息按对象和期限共享，不默认扩散给所有设备。"],
] as const;

export default function OnePage() {
  return (
    <main className="site-shell site-light">
      <SiteHeader />
      <section className="one-hero page-frame">
        <div className="one-hero-copy"><p className="eyebrow">EIDOLON ONE · OFFICIAL FLAGSHIP HOST</p><h1>把 Eidolon OS，<br /><em>做成一台可信主机。</em></h1><p>Eidolon One 是官方旗舰个人 AI 主机。它把本地运行、长期状态、设备信任和关键行动确认装进一台完整产品，并为整个 Eidolon OS 生态建立体验标准。</p><div className="actions"><a className="primary-action" href="#one-in-use">看 One 如何工作</a><a className="text-action" href="#family">查看产品家族 <i>↓</i></a></div><div className="concept-note"><span>PRODUCT DIRECTION</span><i />概念形态<i />工业设计进行中<i />非最终 SKU</div></div>
        <figure className="one-hero-figure"><img src="/one-matrix-concept-v2.png" alt="Eidolon One 旗舰主机与外部设备的概念影像" /><figcaption><span>FLAGSHIP HOST</span><b>CONCEPT IMAGERY · NOT FINAL INDUSTRIAL DESIGN</b></figcaption></figure>
      </section>

      <section className="one-role-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">01 · WHAT ONE IS</p><h2>One 不是 OS 的别名，<br />也不是所有设备的总称。</h2></div><p>它是一台具体主机：完整呈现 Eidolon OS，持续维护个人状态，并在外部设备请求感知、显示或行动能力时成为可信锚点。</p></header><div className="one-role-flow"><article><span>PLATFORM</span><b>Eidolon OS</b><p>定义共同系统能力</p></article><i>完整运行于</i><article className="host-role"><span>FLAGSHIP HOST</span><b>Eidolon One</b><p>定义官方完整体验</p></article><i>通过 EID-X 协作</i><article><span>CAPABILITIES</span><b>外设与生态设备</b><p>提供感知、界面与行动</p></article></div></div></section>

      <section id="one-in-use" className="one-use-section section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">02 · ONE IN USE</p><h2>One 留在中心，<br />设备带来现实能力。</h2></div><p>主机不需要出现在每个房间、屏幕和界面里。它持续运行 Eidolon OS；当环境变化时，合适的外设通过 EID-X 获得一段有边界的能力租约。</p></header><div className="host-scene-layout"><div className="host-scene-map" aria-label="Eidolon One 通过 EID-X 调度感知、对话、呈现与行动设备"><span className="host-ring-label">EID-X · VERIFIED CAPABILITY LEASES</span><div className="host-scene-core"><small>TRUSTED HOST</small><b>Eidolon One</b><span>RUNNING EIDOLON OS</span></div><div className="host-spoke host-spoke-a"><small>SENSE</small><b>传感器</b></div><div className="host-spoke host-spoke-b"><small>TALK</small><b>对话设备</b></div><div className="host-spoke host-spoke-c"><small>SHOW</small><b>屏幕 / 音频</b></div><div className="host-spoke host-spoke-d"><small>ACT</small><b>工具 / 机器人</b></div></div><div className="host-environment-index">{hostEnvironments.map(([code,name,devices,boundary],index)=><article key={code}><span>0{index+1}</span><div><small>{code}</small><h3>{name}</h3></div><p><b>{devices}</b><em>{boundary}</em></p></article>)}</div></div></div></section>

      <section id="family" className="family-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">03 · THE ONE FAMILY</p><h2>一台主机，<br />四条官方外设方向。</h2></div><p>Go、Room、Dock、Link 是产品家族骨架。它们都运行 Eidolon OS 的适配能力，并通过 EID-X 与 One 保持状态和权限一致。</p></header><div className="family-ledger">{family.map(([n,name,code,detail])=><article key={name}><span>{n}</span><div><small>{code}</small><h3>{name}</h3></div><p>{detail}</p></article>)}</div></div></section>

      <section className="accessory-section section-pad page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">04 · PRODUCT DIRECTIONS</p><h2>外设的边界，<br />是人的感知与行动。</h2></div><p>这些是未来产品与合作伙伴方向，不代表已发布 SKU。重点不是堆硬件，而是让每种设备贡献独特能力。</p></header><div className="accessory-groups">{accessoryGroups.map(([title,items],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{items}</p></article>)}</div><div className="concept-wide"><img src="/one-matrix-concept-v2.png" alt="Eidolon One 产品方向科技概念图" /><p>CONCEPT FIELD · SENSING / INTERFACE / CONTROL / ACTION</p></div></section>

      <section className="principles-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">05 · THE FLAGSHIP STANDARD</p><h2>官方旗舰建立体验上限，<br />主权规则不因此封闭。</h2></div><p>One 的价值是把软硬件做到最好；Eidolon 的价值是即使未来更换主机、模型或设备，你仍然拥有自己。</p></header><div className="principles-grid">{principles.map(([code,title,detail])=><article key={code}><span>{code}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>

      <section className="closing-section compact-closing"><VesselMark size={50} tone="bone" idSuffix="one-end" /><p>EIDOLON ONE · OFFICIAL FLAGSHIP HOST</p><h2>主机定义今天的完整体验。<br />OS 保留明天的选择权。</h2><div className="actions"><Link className="primary-action light" href="/os">了解 Eidolon OS</Link><Link className="text-action on-dark" href="/protocol">进入 EID-X ↗</Link></div></section>
    </main>
  );
}
