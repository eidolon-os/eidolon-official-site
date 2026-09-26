/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { OneSceneMatrix } from "../components/OneSceneMatrix";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = {
  title: "Eidolon One | Eidolon OS 官方旗舰主机",
  description: "Eidolon One 是完整运行 Eidolon OS 的官方旗舰个人 AI 主机。一台主机，按需长出角色陪伴、IP 角色团、智能家居、办公与车载等场景，而不是每个场景再买一套系统。",
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
    forms: [["VOICE", "房间语音终端", "远场对话与物理静音"], ["PANEL", "家居中控面板", "按房间显示与控制家居设备"], ["SENSE", "存在 / 空气节点", "人数、区域与环境趋势"], ["ROBOT", "桌面对话机器人", "移动回应与轻量行动"]],
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

const silos = ["陪伴玩具", "IP 周边", "智能家居", "车载助手"] as const;
const siloLayers = ["专属 App", "独立账号", "各自云端", "各自记忆", "各自唤醒词"] as const;
const hubScenes = ["角色陪伴", "IP 角色团", "智能家居", "办公", "车载", "创作", "照护"] as const;
const hubDevices = ["桌面伙伴", "按键说话器", "家居面板", "开放式耳机", "电子纸副屏", "车载桥接盒"] as const;
const hubShared = ["一份身份", "一份长期记忆", "一组伙伴", "一份家的目录", "一套设备信任", "一套权限"] as const;

const sceneEntries = [
  { n: "01", code: "COMPANIONS", name: "角色陪伴", desc: "五种性格的桌面伙伴，陪你聊天，也能安静待着。", adds: "桌面陪伴设备", host: "伙伴设定与各自的记忆", href: "/companions" },
  { n: "02", code: "IP ENSEMBLE", name: "IP 角色团", desc: "一个故事的角色住进多台设备，单聊、同台、传话都可以。", adds: "多台桌面设备 · 按键说话器", host: "多角色调度与轮流发声", href: "/ensemble" },
  { n: "03", code: "SMART HOME", name: "智能家居", desc: "一块面板按房间看全家，一句话控制家里的设备。", adds: "家居中控面板", host: "家的目录、指令理解与执行", href: "/smart-home" },
  { n: "04", code: "MORE ENVIRONMENTS", name: "更多环境", desc: "办公、车载、创作与照护：同一台主机，组合不同外设进入更多环境。", adds: "Dock · Link · Room 系列外设", host: "同一份状态与权限边界", href: "#scenes" },
] as const;

const crossovers = [
  ["在书房对伙伴说「把客厅空调关了」", "伙伴和家居面板在同一台主机上，共用一条执行路径。伙伴用声音答复，客厅面板上的空调同时变为关闭。"],
  ["房间只整理一次", "在手机里标好每台设备所在的房间：家居面板据此确定默认房间，桌面伙伴也据此理解你说的「这里」。"],
  ["一句提醒，送到几台设备", "在手机上输入「休息一下，喝口水」，选择书房和卧室的伙伴设备：一台播出声音，一台只显示文字。"],
] as const;

export default function OnePage() {
  return (
    <main className="site-shell site-light one-v4-page">
      <SiteHeader />

      <section className="one-hero page-frame one-v4-hero">
        <div className="one-hero-copy"><p className="eyebrow">EIDOLON ONE · OFFICIAL FLAGSHIP HOST</p><h1>把 Eidolon OS，<br /><em>完整地做成<br />一台产品。</em></h1><p>Eidolon One 是官方旗舰个人 AI 主机。它把本地运行、长期记忆、设备信任与关键行动确认放进一台真正可以拥有的整机。陪伴、IP 角色团、智能家居，都只是在这台主机上多加一台设备、多开一项能力。</p><div className="actions"><a className="primary-action" href="#one-host">一台主机，如何长出场景</a><a className="text-action" href="#family">查看产品矩阵 <i>↓</i></a></div><nav className="one-scene-links" aria-label="Eidolon One 的场景">{sceneEntries.slice(0, 3).map((scene) => <Link key={scene.href} href={scene.href}><small>{scene.code}</small>{scene.name} ↗</Link>)}</nav><div className="concept-note"><span>PRODUCT DIRECTION</span><i />主机概念形态<i />工业设计进行中<i />非最终 SKU</div></div>
        <figure className="one-hero-figure one-v4-hero-figure"><img src="/eidolon-one-product.png" alt="Eidolon One 官方旗舰个人 AI 主机概念形态" /><figcaption><span>EIDOLON ONE</span><b>CONCEPT FORM · NOT FINAL INDUSTRIAL DESIGN</b></figcaption></figure>
      </section>

      <section id="one-host" className="one-hub section-pad"><div className="page-frame">
        <header className="section-heading split-heading"><div><p className="eyebrow">01 · ONE HOST, EVERY SCENE</p><h2>一台 One，<br />长出每一个场景。</h2></div><p>陪伴玩具一个 App，智能家居一个网关，IP 周边再一个账号——每多一个场景，就多一套互不相通的账号、云端和记忆。Eidolon One 反过来：主机只有一台，场景是在它上面加设备、开能力，不必每个场景再买一套系统。</p></header>
        <div className="one-hub-compare">
          <article className="one-hub-silo"><header><span>THE USUAL WAY</span><h3>每个场景，各买一套</h3></header><div className="one-hub-silo-cols">{silos.map((silo) => <div key={silo}><b>{silo}</b>{siloLayers.map((layer) => <i key={layer}>{layer}</i>)}</div>)}</div><p>设备越多，你的账号、App 和记忆就越分散。</p></article>
          <article className="one-hub-one"><header><span>THE ONE WAY</span><h3>一台主机，按需长出场景</h3></header>
            <div className="one-hub-stack">
              <div className="one-hub-layer"><small>场景</small><p>{hubScenes.map((item) => <i key={item}>{item}</i>)}</p></div>
              <div className="one-hub-layer"><small>设备</small><p>{hubDevices.map((item) => <i key={item}>{item}</i>)}</p></div>
              <div className="one-hub-host"><b>Eidolon One</b><p>{hubShared.map((item) => <i key={item}>{item}</i>)}</p></div>
              <div className="one-hub-app">一个手机 App，管理全部伙伴、设备与家</div>
            </div>
            <p>场景越多，这台主机越完整；你始终只有一个自己。</p>
          </article>
        </div>
        <div className="one-hub-add"><div><span>ADD A SCENE</span><h3>加一个场景，只需要</h3><ul><li>一台对应的设备</li><li>在同一个 App 里打开这项能力</li></ul></div><div><span>NO NEED FOR</span><h3>不需要再来一遍</h3><ul><li><del>新账号</del></li><li><del>新网关、新云端</del></li><li><del>新 App</del></li><li><del>从零开始的记忆</del></li></ul></div></div>
        <div className="one-hub-scenes">{sceneEntries.map((scene) => <Link key={scene.href} href={scene.href}><span>{scene.n}</span><small>{scene.code}</small><h3>{scene.name}</h3><p>{scene.desc}</p><dl><div><dt>新增</dt><dd>{scene.adds}</dd></div><div><dt>One 提供</dt><dd>{scene.host}</dd></div></dl><b>{scene.href.startsWith("#") ? "看环境组合 ↓" : "查看场景 ↗"}</b></Link>)}</div>
        <div className="one-hub-cross"><header><p className="eyebrow">SCENES THAT TALK TO EACH OTHER</p><h3>场景之间，<br />本来就相通。</h3></header>{crossovers.map(([title, detail]) => <article key={title}><h4>{title}</h4><p>{detail}</p></article>)}</div>
      </div></section>

      <section className="one-role-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">02 · THE PRODUCT RELATION</p><h2>OS 定义共同能力。<br />One 定义旗舰体验。</h2></div><p>One 是一台具体主机，不是 OS 的别名，也不是所有设备的总称。外设通过 EID-X 为它提供当下需要的感知、界面和行动。</p></header><div className="one-role-flow"><article><span>PLATFORM</span><b>Eidolon OS</b><p>身份 · 记忆 · Agent · 情境 · 权限</p></article><i>完整运行于</i><article className="host-role"><span>FLAGSHIP HOST</span><b>Eidolon One</b><p>本地运行 · 可信锚点 · 完整体验</p></article><i>通过 EID-X 协作</i><article><span>PRODUCT MATRIX</span><b>One Family + 兼容设备</b><p>随身 · 空间 · 工作 · 车辆 · 机器人</p></article></div></div></section>

      <section id="family" className="one-family-v4 section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">03 · THE PRODUCT MATRIX</p><h2>一台主机，四条产品线。<br />每条都对应真实的设备形态。</h2></div><p>下面是产品方向而不是已发布清单。它回答 One 生态会由什么组成、放在哪里、承担什么角色。</p></header><figure className="one-family-concept"><img src="/one-family-concept-v3.png" alt="Eidolon One 主机、可穿戴、房间终端、桌面设备与桥接模块概念产品板" /><figcaption><span>ONE FAMILY · INDUSTRIAL DESIGN STUDY</span><b>概念视觉用于说明产品关系，不代表最终外观与 SKU</b></figcaption></figure><div className="one-family-catalog">{family.map(item=><article key={item.name}><header><span>{item.n}</span><div><small>{item.code}</small><h3>{item.name}</h3><b>{item.role}</b></div><p>{item.promise}</p></header><div className={item.forms.length > 3 ? "has-four" : undefined}>{item.forms.map(([code,name,use])=><section key={name}><small>{code}</small><h4>{name}</h4><p>{use}</p></section>)}</div></article>)}</div></div></section>

      <section id="scenes" className="one-scenes-v4 section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">04 · MATRIX IN USE</p><h2>产品矩阵不是摆满设备。<br />是每个环境选择恰当的组合。</h2></div><p>切换家庭、办公、车载、创作和照护，查看 One、官方外设与现实设备如何组成一次完整服务。</p></header><OneSceneMatrix /></div></section>

      <section className="one-ecosystem-v4 section-pad"><div className="page-frame"><header className="section-heading split-heading"><div><p className="eyebrow">05 · BEYOND FIRST-PARTY HARDWARE</p><h2>产品矩阵会继续生长。<br />但不要求所有产品长得像 One。</h2></div><p>第一方产品负责定义体验，合作伙伴保留自己的工业设计和行业能力；系统只要求身份清晰、权限最小、任务可交接、行动可追溯。</p></header><div className="ecosystem-paths"><article><span>FULL OS</span><h3>兼容主机</h3><p>面向 NAS、个人服务器或行业终端，完整运行 Eidolon OS。</p></article><article><span>COMPANION</span><h3>体验设备</h3><p>面向穿戴、桌面、空间与无障碍产品，运行轻量系统能力。</p></article><article><span>EID-X</span><h3>能力设备</h3><p>传感器、车辆、仪器与机器人只贡献自己的现场能力。</p></article></div></div></section>

      <section className="principles-section section-pad"><div className="page-frame"><header className="section-heading on-dark split-heading"><div><p className="eyebrow">06 · THE FLAGSHIP STANDARD</p><h2>官方旗舰建立体验上限。<br />主权规则不因此封闭。</h2></div><p>One 的价值是把软硬件做到最好；Eidolon OS 的价值是即使未来更换主机、模型或设备，你仍然拥有自己。</p></header><div className="principles-grid">{principles.map(([code,title,detail])=><article key={code}><span>{code}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>

      <section className="closing-section compact-closing"><VesselMark size={50} tone="bone" idSuffix="one-v4-end" /><p>EIDOLON ONE · THE OFFICIAL FLAGSHIP</p><h2>一台主机建立信任。<br />每多一个场景，只是多一台设备。</h2><div className="actions"><Link className="primary-action light" href="/os">了解 Eidolon OS</Link><Link className="text-action on-dark" href="/protocol">进入 EID-X ↗</Link></div></section>
    </main>
  );
}
