/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SceneCards } from "../components/SceneCards";
import { VesselMark } from "../components/brand";
import { oneScenes } from "../content";

export const metadata: Metadata = {
  title: "Eidolon One | Eidolon OS 官方旗舰主机",
  description: "Eidolon One 是官方旗舰个人 AI 主机。一台主机，按需长出角色陪伴、IP 角色团、智能家居、办公与车载等场景，不必每个场景再买一套系统。",
  openGraph: { title: "Eidolon One | 官方旗舰主机与产品矩阵", description: "一台可信主机，连接随身、空间、工作和现实行动设备，按需长出每一个场景。", images: [{ url: "/one-family-concept-v3.png", width: 1536, height: 864, alt: "Eidolon One 主机与外设产品矩阵" }] },
};

const family = [
  {
    n: "00", code: "OFFICIAL FLAGSHIP HOST", name: "Eidolon One", role: "个人 AI 主机", scenes: "所有场景",
    promise: "完整运行 Eidolon OS，保存长期状态，管理设备信任与关键行动确认。",
    forms: [["HOST", "桌面主机", "本地运行与可信锚点"], ["RECOVERY", "个人恢复钥匙", "迁移与灾难恢复"], ["CONSOLE", "主权控制台", "查看记忆、设备与权限"]],
  },
  {
    n: "01", code: "SPATIAL COMPANIONS", name: "One Room", role: "空间交互", scenes: "角色陪伴 · IP 角色团 · 智能家居",
    promise: "伙伴、家居面板和传感器放进房间，都连着同一台主机。",
    forms: [["COMPANION", "桌面陪伴设备", "伙伴的身体：说话、字幕与表情"], ["PANEL", "家居中控面板", "按房间显示与控制家居设备"], ["VOICE", "房间语音终端", "远场对话与物理静音"], ["SENSE", "存在 / 空气节点", "人数、区域与环境趋势"]],
  },
  {
    n: "02", code: "MOBILE COMPANIONS", name: "One Go", role: "随身交互", scenes: "随身 · IP 角色团",
    promise: "让开口、听见和即时确认跟随你，但不在随身设备里复制完整记忆。",
    forms: [["TALK", "按键说话器", "按住开口，按下即停"], ["AUDIO", "开放式耳机", "对话、翻译、低干扰提醒"], ["CAPTURE", "领夹终端", "语音、灵感与现场声音"], ["VISION", "轻量眼镜", "字幕、导航与视觉确认"]],
  },
  {
    n: "03", code: "WORK COMPANIONS", name: "One Dock", role: "工作与创作", scenes: "办公 · 创作",
    promise: "把 One 展开成桌面、会议室或工作室中的完整生产力环境。",
    forms: [["READ", "电子纸副屏", "提纲、批注与安静提醒"], ["CONTROL", "可编程旋钮台", "Agent、时间线与工具操作"], ["MEETING", "音视频条", "会议采集与身份提示"]],
  },
  {
    n: "04", code: "CAPABILITY BRIDGES", name: "One Link", role: "现实能力桥接", scenes: "车载 · 专业工具 · 机器人",
    promise: "让车辆、专业仪器和机器人贡献能力，而不必各自再造一个个人 AI。",
    forms: [["AUTO", "车载桥接盒", "行程租约与车端身份"], ["INSTRUMENT", "仪器适配器", "读取与受控操作"], ["ROBOTICS", "机器人网关", "动作授权与结果回传"]],
  },
] as const;

const moreEnvironments = [
  ["随身", "One Go", "耳机 · 眼镜 · 领夹终端"],
  ["办公", "One Dock", "电子纸副屏 · 旋钮台 · 音视频条"],
  ["车载", "One Link", "车载桥接盒"],
  ["创作与照护", "Dock · Room", "创作控制台 · 照护节点"],
] as const;

// 能力 × 场景：每个场景用到了 One 里的哪些能力。
const capabilityScenes = ["角色陪伴", "IP 角色团", "智能家居", "随身 · 办公 · 车载"] as const;
const capabilities = [
  { name: "你的身份与长期记忆", uses: [1, 1, 1, 1] },
  { name: "角色伙伴与各自的记忆", uses: [1, 1, 1, 0] },
  { name: "多位伙伴轮流回应", uses: [0, 1, 0, 0] },
  { name: "家的目录与设备执行", uses: [1, 0, 1, 0] },
  { name: "设备信任与权限", uses: [1, 1, 1, 1] },
  { name: "一个手机 App", uses: [1, 1, 1, 1] },
] as const;

const crossovers = [
  ["在书房对伙伴说「把客厅空调关了」", "伙伴和家居面板共用一条执行路径。伙伴用声音答复，客厅面板上的空调同时变为关闭。"],
  ["房间只整理一次", "在手机里标好每台设备所在的房间：家居面板据此确定默认房间，桌面伙伴也据此理解你说的「这里」。"],
  ["单聊的伙伴，也能一起聊", "平时各自陪你的伙伴，在手机上一选就能同台，用的还是各自的设备和记忆。"],
] as const;

export default function OnePage() {
  return (
    <main className="site-shell site-light one-v4-page">
      <SiteHeader />

      <section className="one-hero page-frame one-v4-hero">
        <div className="one-hero-copy"><p className="eyebrow">EIDOLON ONE · OFFICIAL FLAGSHIP HOST</p><h1>一台 Eidolon One，<br /><em>长出每一个场景。</em></h1><p>Eidolon One 是官方旗舰个人 AI 主机，在你家里本地运行你的身份、长期记忆和设备信任。想要陪伴、角色团或智能家居，就给它加一台对应的设备——主机始终只有一台。</p><div className="actions"><a className="primary-action" href="#scenes">从场景开始</a><a className="text-action" href="#family">按场景挑设备 <i>↓</i></a></div><div className="concept-note"><span>EIDOLON ONE</span><i />本地运行<i />长期记忆<i />设备信任</div></div>
        <figure className="one-hero-figure one-v4-hero-figure"><img src="/eidolon-one-product.png" alt="Eidolon One 官方旗舰个人 AI 主机" /><figcaption><span>EIDOLON ONE</span><b>OFFICIAL FLAGSHIP PERSONAL AI HOST</b></figcaption></figure>
      </section>

      <section id="scenes" className="one-scenes-section section-pad"><div className="page-frame">
        <header className="section-heading split-heading"><div><p className="eyebrow">01 · SCENES</p><h2>从你想做的事开始。</h2></div><p>先选场景，再加设备。每个场景都只是在同一台 One 上多加一台设备、多开一项能力。</p></header>
        <SceneCards scenes={oneScenes} className="is-three" />
        <div className="one-more-envs"><h3>更多环境</h3>{moreEnvironments.map(([scene, line, devices]) => <a key={scene} href="#family"><b>{scene}</b><span>{line}</span><small>{devices}</small></a>)}</div>
      </div></section>

      <section id="one-host" className="one-host-section section-pad"><div className="page-frame">
        <header className="section-heading on-dark split-heading"><div><p className="eyebrow">02 · ONE HOST</p><h2>每个场景要的，<br />One 里都有一份。</h2></div><p>身份、记忆、伙伴、家的目录和设备信任，都只在这台主机上存一份，所有场景共用。加一个场景，不必再买一套账号、网关、App 和云端。</p></header>
        <div className="one-cap-matrix" role="table" aria-label="各个场景用到的 Eidolon One 能力">
          <div role="row" className="one-cap-head"><span role="columnheader">One 里的能力</span>{capabilityScenes.map((scene) => <span role="columnheader" key={scene}>{scene}</span>)}</div>
          {capabilities.map((cap) => {
            const shared = cap.uses.every(Boolean);
            return <div role="row" key={cap.name} className={shared ? "is-shared" : undefined}><span role="rowheader">{cap.name}{shared && <em>所有场景共用</em>}</span>{cap.uses.map((used, i) => <span role="cell" key={capabilityScenes[i]} aria-label={used ? "用到" : "不需要"}>{used ? <i /> : <s />}</span>)}</div>;
          })}
        </div>
        <div className="one-hub-cross"><header><p className="eyebrow">SCENES THAT TALK TO EACH OTHER</p><h3>场景之间，<br />本来就相通。</h3></header>{crossovers.map(([title, detail]) => <article key={title}><h4>{title}</h4><p>{detail}</p></article>)}</div>
      </div></section>

      <section id="family" className="one-family-v4 section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">03 · THE ONE FAMILY</p><h2>按场景，<br />挑一台设备。</h2></div><p>One 家族的每条产品线都对应一类场景。同一台设备换个场景也能用：桌面陪伴设备既陪你单聊，也在角色团里同台。</p></header><figure className="one-family-concept"><img src="/one-family-concept-v3.png" alt="Eidolon One 主机、可穿戴、房间终端、桌面设备与桥接模块产品家族" /><figcaption><span>ONE FAMILY</span><b>一台主机 · 四条外设产品线</b></figcaption></figure><div className="one-family-catalog">{family.map(item=><article key={item.name}><header><span>{item.n}</span><div><small>{item.code}</small><h3>{item.name}</h3><b>{item.role}</b></div><p>{item.promise}<em>用在：{item.scenes}</em></p></header><div className={item.forms.length > 3 ? "has-four" : undefined}>{item.forms.map(([code,name,use])=><section key={name}><small>{code}</small><h4>{name}</h4><p>{use}</p></section>)}</div></article>)}</div></div></section>

      <section className="closing-section compact-closing"><VesselMark size={50} tone="bone" idSuffix="one-v4-end" /><p>EIDOLON ONE · THE OFFICIAL FLAGSHIP</p><h2>一台主机建立信任。<br />每多一个场景，只是多一台设备。</h2><div className="actions"><Link className="primary-action light" href="/os">了解 Eidolon OS</Link><Link className="text-action on-dark" href="/protocol">进入 EID-X ↗</Link></div></section>
    </main>
  );
}
