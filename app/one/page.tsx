/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { OneSceneMatrix } from "../components/OneSceneMatrix";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = {
  title: "Eidolon One | Eidolon OS 官方旗舰主机",
  description: "Eidolon One 是完整运行 Eidolon OS 的官方旗舰个人 AI 主机，与 One Go、Room、Dock、Link 及兼容设备共同组成产品矩阵。",
  openGraph: { title: "Eidolon One | 官方旗舰主机与产品矩阵", description: "一台可信主机，连接随身、空间、工作和现实行动设备。概念影像不代表最终工业设计。", images: [{ url: "/one-family-concept-v3.png", width: 1536, height: 864, alt: "Eidolon One 主机与外设产品矩阵概念图" }] },
};

const family = [
  {
    n: "00", code: "OFFICIAL FLAGSHIP HOST", name: "Eidolon One", role: "个人 AI 主机",
    promise: "完整运行 Eidolon OS，保存长期状态，管理设备信任与关键行动确认。",
    forms: [["HOST", "桌面主机", "本地运行与可信锚点"], ["RECOVERY", "个人恢复钥匙", "迁移与灾难恢复"], ["CONSOLE", "主权控制台", "查看记忆、设备与权限"]],
  },
  {
    n: "01", code: "MOBILE COMPANIONS", name: "One Go", role: "随身交互",
    promise: "让听见、表达和即时确认跟随你，但不在穿戴设备里复制完整记忆。",
    forms: [["AUDIO", "开放式耳机", "对话、翻译、低干扰提醒"], ["CAPTURE", "领夹终端", "语音、灵感与现场声音"], ["VISION", "轻量眼镜", "字幕、导航与视觉确认"]],
  },
  {
    n: "02", code: "SPATIAL COMPANIONS", name: "One Room", role: "空间交互",
    promise: "让房间理解在场的人和当前活动，共同空间只获得共同上下文。",
    forms: [["VOICE", "房间语音终端", "远场对话与物理静音"], ["SENSE", "存在 / 空气节点", "人数、区域与环境趋势"], ["ROBOT", "桌面对话机器人", "移动回应与轻量行动"]],
  },
  {
    n: "03", code: "WORK COMPANIONS", name: "One Dock", role: "工作与创作",
    promise: "把 One 展开成桌面、会议室或工作室中的完整生产力环境。",
    forms: [["READ", "电子纸副屏", "提纲、批注与安静提醒"], ["CONTROL", "可编程旋钮台", "Agent、时间线与工具操作"], ["MEETING", "音视频条", "会议采集与身份提示"]],
  },
  {
    n: "04", code: "CAPABILITY BRIDGES", name: "One Link", role: "现实能力桥接",
    promise: "让车辆、专业仪器和机器人贡献能力，而不必各自再造一个个人 AI。",
    forms: [["AUTO", "车载桥接盒", "行程租约与车端身份"], ["INSTRUMENT", "仪器适配器", "读取与受控操作"], ["ROBOTICS", "机器人网关", "动作授权与结果回传"]],
  },
] as const;

const principles = [
  ["LOCAL", "本地优先", "长期状态与高信任判断优先在主机完成。"],
  ["VISIBLE", "边界可见", "正在参与的设备、能力与授权期限始终可查。"],
  ["PORTABLE", "状态可迁移", "One 是旗舰主机，不是绑住个人 AI 的唯一容器。"],
  ["OPEN", "设备开放", "第一方外设与合作伙伴产品遵循同一套 EID-X 规则。"],
] as const;

export default function OnePage() {
  return (
    <main className="site-shell site-light one-v4-page">
      <SiteHeader />

      <section className="one-hero page-frame one-v4-hero">
        <div className="one-hero-copy"><p className="eyebrow">EIDOLON ONE · OFFICIAL FLAGSHIP HOST</p><h1>把 Eidolon OS，<br /><em>完整地做成<br />一台产品。</em></h1><p>Eidolon One 是官方旗舰个人 AI 主机。它把本地运行、长期记忆、设备信任与关键行动确认放进一台真正可以拥有的整机，并为整个生态建立体验标准。</p><div className="actions"><a className="primary-action" href="#family">查看产品矩阵</a><a className="text-action" href="#scenes">看不同环境如何组合 <i>↓</i></a></div><div className="concept-note"><span>PRODUCT DIRECTION</span><i />主机概念形态<i />工业设计进行中<i />非最终 SKU</div></div>
        <figure className="one-hero-figure one-v4-hero-figure"><img src="/eidolon-one-product.png" alt="Eidolon One 官方旗舰个人 AI 主机概念形态" /><figcaption><span>EIDOLON ONE</span><b>CONCEPT FORM · NOT FINAL INDUSTRIAL DESIGN</b></figcaption></figure>
      </section>

      <section className="one-role-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">01 · THE PRODUCT RELATION</p><h2>OS 定义共同能力。<br />One 定义旗舰体验。</h2></div><p>One 是一台具体主机，不是 OS 的别名，也不是所有设备的总称。外设通过 EID-X 为它提供当下需要的感知、界面和行动。</p></header><div className="one-role-flow"><article><span>PLATFORM</span><b>Eidolon OS</b><p>身份 · 记忆 · Agent · 情境 · 权限</p></article><i>完整运行于</i><article className="host-role"><span>FLAGSHIP HOST</span><b>Eidolon One</b><p>本地运行 · 可信锚点 · 完整体验</p></article><i>通过 EID-X 协作</i><article><span>PRODUCT MATRIX</span><b>One Family + 兼容设备</b><p>随身 · 空间 · 工作 · 车辆 · 机器人</p></article></div></div></section>

      <section id="family" className="one-family-v4 section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">02 · THE PRODUCT MATRIX</p><h2>一台主机，四条产品线。<br />每条都对应真实的设备形态。</h2></div><p>下面是产品方向而不是已发布清单。它回答 One 生态会由什么组成、放在哪里、承担什么角色。</p></header><figure className="one-family-concept"><img src="/one-family-concept-v3.png" alt="Eidolon One 主机、可穿戴、房间终端、桌面设备与桥接模块概念产品板" /><figcaption><span>ONE FAMILY · INDUSTRIAL DESIGN STUDY</span><b>概念视觉用于说明产品关系，不代表最终外观与 SKU</b></figcaption></figure><div className="one-family-catalog">{family.map(item=><article key={item.name}><header><span>{item.n}</span><div><small>{item.code}</small><h3>{item.name}</h3><b>{item.role}</b></div><p>{item.promise}</p></header><div>{item.forms.map(([code,name,use])=><section key={name}><small>{code}</small><h4>{name}</h4><p>{use}</p></section>)}</div></article>)}</div></div></section>

      <section id="scenes" className="one-scenes-v4 section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">03 · MATRIX IN USE</p><h2>产品矩阵不是摆满设备。<br />是每个环境选择恰当的组合。</h2></div><p>切换家庭、办公、车载、创作和照护，查看 One、官方外设与现实设备如何组成一次完整服务。</p></header><OneSceneMatrix /></div></section>

      <section className="one-ecosystem-v4 section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">04 · BEYOND FIRST-PARTY HARDWARE</p><h2>产品矩阵会继续生长。<br />但不要求所有产品长得像 One。</h2></div><p>第一方产品负责定义体验，合作伙伴保留自己的工业设计和行业能力；系统只要求身份清晰、权限最小、任务可交接、行动可追溯。</p></header><div className="ecosystem-paths"><article><span>FULL OS</span><h3>兼容主机</h3><p>面向 NAS、个人服务器或行业终端，完整运行 Eidolon OS。</p></article><article><span>COMPANION</span><h3>体验设备</h3><p>面向穿戴、桌面、空间与无障碍产品，运行轻量系统能力。</p></article><article><span>EID-X</span><h3>能力设备</h3><p>传感器、车辆、仪器与机器人只贡献自己的现场能力。</p></article></div></div></section>

      <section className="principles-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">05 · THE FLAGSHIP STANDARD</p><h2>官方旗舰建立体验上限。<br />主权规则不因此封闭。</h2></div><p>One 的价值是把软硬件做到最好；Eidolon OS 的价值是即使未来更换主机、模型或设备，你仍然拥有自己。</p></header><div className="principles-grid">{principles.map(([code,title,detail])=><article key={code}><span>{code}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>

      <section className="closing-section compact-closing"><VesselMark size={50} tone="bone" idSuffix="one-v4-end" /><p>EIDOLON ONE · THE OFFICIAL FLAGSHIP</p><h2>一台主机建立信任。<br />一组设备把能力带进现实。</h2><div className="actions"><Link className="primary-action light" href="/os">了解 Eidolon OS</Link><Link className="text-action on-dark" href="/protocol">进入 EID-X ↗</Link></div></section>
    </main>
  );
}
