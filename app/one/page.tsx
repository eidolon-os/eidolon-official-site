/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { VesselMark } from "../components/brand";

export const metadata: Metadata = {
  title: "Eidolon One | Eidolon OS 官方旗舰",
  description: "Eidolon One 是完整呈现 Eidolon OS 的官方旗舰个人 AI 设备，并与 One Go、Room、Dock、Link 组成官方产品家族。",
  openGraph: { title: "Eidolon One | Eidolon OS 官方旗舰", description: "把 Eidolon OS 的完整体验，做成一台属于你的旗舰产品。概念影像不代表最终工业设计。", images: [{ url: "/one-matrix-concept-v2.png", width: 1774, height: 887, alt: "Eidolon One 官方旗舰与产品家族概念影像" }] },
  twitter: { card: "summary_large_image", title: "Eidolon One | Eidolon OS 官方旗舰", description: "Eidolon OS 的官方旗舰个人 AI 设备。", images: ["/one-matrix-concept-v2.png"] },
};

const family = [
  { n:"00", code:"OFFICIAL FLAGSHIP", name:"Eidolon One", role:"旗舰个人 AI 设备", promise:"完整呈现 Eidolon OS。", detail:"由官方共同定义硬件、系统、交互与安全体验。它是 Eidolon OS 的旗舰产品和体验标杆，而不是 OS 本身。", group:"旗舰" },
  { n:"01", code:"PERSONAL COMPANION", name:"One Go", role:"随身外设", promise:"把对话与当前任务带在身边。", detail:"面向可穿戴语音和轻量交互的官方产品方向，通过 Eidolon OS 与 EID-X 和 One 保持连续。", group:"随身" },
  { n:"02", code:"SPATIAL COMPANION", name:"One Room", role:"空间外设", promise:"让共享空间自然回应在场的人。", detail:"提供远场交互、空间状态和共同活动能力，遵循 OS 中的成员关系与空间边界。", group:"共享" },
  { n:"03", code:"WORK COMPANION", name:"One Dock", role:"桌面扩展", promise:"把 One 变成完整工作与创作中枢。", detail:"连接显示、输入、音频、存储和桌面设备，恢复 Eidolon OS 的完整工作体验。", group:"工作" },
  { n:"04", code:"CAPABILITY BRIDGE", name:"One Link", role:"既有设备桥接", promise:"让现有工具进入 One 的体验体系。", detail:"通过 EID-X 连接显示器、专业仪器、空间设施、机器人或其他硬件能力，让任务可以交接，又不突破 OS 的权限边界。", group:"连接" },
] as const;

const standards = [
  ["INTEGRATED", "软硬件一体", "系统、算力、传感、交互和本地服务共同设计，减少拼装式 AI 体验。"],
  ["CONTINUOUS", "跨设备连续", "One 与官方外设共享任务状态，用户不需要在每台设备上重新说明。"],
  ["SOVEREIGN", "主权默认开启", "身份、记忆、权限、恢复与行动记录是系统默认，而不是隐藏在设置深处的选项。"],
  ["EXTENSIBLE", "面向生态扩展", "官方外设和第三方设备都经由 Eidolon OS 与 EID-X 接入，不形成封闭孤岛。"],
] as const;

const accessoryDirections = [
  ["LISTEN & SPEAK", "听见与表达", "开放式耳机 · 领夹终端 · 定向麦克风 · 听觉辅助器"],
  ["SEE & SHOW", "看见与呈现", "轻量眼镜 · 墨水屏 · 桌面光幕 · 微型投影"],
  ["CREATE", "创作与操控", "触控笔 · 相机握柄 · 键盘旋钮 · 音乐控制器"],
  ["SENSE", "身体与环境感知", "手表 · 睡眠传感器 · 空气节点 · 位置标签"],
  ["SHARE", "共同空间", "桌面投影 · 空间音频 · 共享面板 · 氛围灯"],
  ["EXPLORE", "探索与随行", "户外终端 · 翻译耳机 · 行李伴随器 · 头盔接口"],
  ["ACCESS", "无障碍交互", "触觉手环 · 实时字幕器 · 辅助开关 · 语音控制面板"],
  ["ACT", "现实行动", "机械臂 · 移动底盘 · 无人机 · 可编程工具"],
] as const;

export default function OnePage() {
  return (
    <main className="site-shell product-story one-product-page one-v3">
      <SiteHeader />

      <section className="one-v2-hero one-flagship-hero">
        <div className="one-v2-copy">
          <p className="story-kicker">EIDOLON ONE · OFFICIAL FLAGSHIP</p>
          <h1>把 Eidolon OS，<br /><em>完整地做成一台产品。</em></h1>
          <p>Eidolon One 是官方旗舰个人 AI 设备——就像一个操作系统需要旗舰产品定义体验上限，One 负责把 Eidolon OS 的系统能力、交互方式与主权原则变成用户真正可以拥有的整机。</p>
          <div className="story-actions"><a className="story-button" href="#family">查看 One 产品家族</a><a className="story-link" href="#flagship-scenes">看体验如何接力 <i>↓</i></a></div>
          <div className="one-status-line"><span>PRODUCT DIRECTION</span><i />官方旗舰<i />完整 OS 体验<i />工业设计进行中</div>
        </div>
        <div className="one-v2-hero-art"><img src="/one-matrix-concept-v2.png" alt="Eidolon One 官方旗舰与随身、空间、具身产品家族概念影像" /><div><span>FLAGSHIP</span><i /><span>FAMILY</span><i /><span>ECOSYSTEM</span></div><p>CONCEPT IMAGERY · NOT FINAL INDUSTRIAL DESIGN</p></div>
      </section>

      <section className="one-boundary-section flagship-boundary">
        <header><span>THE PRODUCT RELATION</span><h2>OS 定义共同能力。<br />One 定义旗舰体验。<br />外设把体验带到更多活动中。</h2></header>
        <div className="one-boundary-diagram">
          <article><span>PLATFORM</span><h3>Eidolon OS</h3><p>可运行于不同硬件的个人 AI 操作系统。</p></article><i>完整呈现于</i>
          <article className="boundary-host"><span>FLAGSHIP</span><h3>Eidolon One</h3><p>官方软硬件一体的旗舰个人 AI 设备。</p></article><i>协作于</i>
          <article><span>PERIPHERALS</span><h3>One Family</h3><p>基于 OS 与 EID-X 的官方外设家族。</p></article>
        </div>
        <p className="boundary-footnote">第三方设备也通过同一套 Eidolon OS 能力与 EID-X 规则进入生态；它们不是 One 外设的附属层，而是另一条兼容产品路径。</p>
      </section>

      <section className="flagship-standard-section"><header className="story-heading"><span>01 · THE FLAGSHIP STANDARD</span><h2>One 的价值不是“唯一能运行”。<br />而是“由官方做到最好”。</h2><p>它承担操作系统旗舰产品应承担的角色：建立体验标准、证明系统能力，并为整个生态提供清晰参考。</p></header><div className="flagship-standards">{standards.map(([en,name,d])=><article key={en}><span>{en}</span><h3>{name}</h3><p>{d}</p></article>)}</div></section>

      <section id="family" className="matrix-v2-section one-family-section">
        <header className="story-heading light"><span>02 · THE ONE FAMILY</span><h2>一台旗舰，<br />一组围绕人的感知与行动设计的官方外设。</h2><p>每件产品都建立在 Eidolon OS 与 EID-X 之上。它们可以拥有不同传感器、界面和现实能力，但共享系统状态、设备身份和权限规则。</p></header>
        <figure className="matrix-concept-figure"><img src="/one-matrix-concept-v2.png" alt="Eidolon One 官方旗舰与外设产品家族科技概念影像" /><figcaption><span>01 · 随身感官</span><span>02 · 创作与共享</span><span>03 · 工具与具身</span><small>用于表达产品方向与能力关系，不代表最终工业设计</small></figcaption></figure>
        <div className="matrix-v2-list">{family.map(item=><article key={item.name}><span>{item.n}</span><div className="matrix-name"><small>{item.code}</small><h3>{item.name}</h3><b>{item.role}</b></div><p className="matrix-promise">{item.promise}</p><p>{item.detail}</p><em>{item.group}</em></article>)}</div>
      </section>

      <section className="accessory-spectrum-section">
        <header className="story-heading"><span>03 · A WIDER ACCESSORY FIELD</span><h2>One Family 不会止于四个名字。<br />人的感官、表达与行动，都可能成为新的外设方向。</h2><p>以下是能力与产品形态的探索图谱，不代表已经发布的 SKU。它展示的是 Eidolon OS 与 EID-X 可以支撑多广的第一方和合作伙伴创新空间。</p></header>
        <div className="accessory-spectrum"><aside><span>CONCEPT FIELD</span><b>8</b><p>类感官与行动方向</p><small>NOT ANNOUNCED PRODUCTS</small></aside><div>{accessoryDirections.map(([en,name,examples],index)=><article key={en}><span>0{index+1}</span><small>{en}</small><h3>{name}</h3><p>{examples}</p></article>)}</div></div>
      </section>

      <section id="flagship-scenes" className="flagship-scenes-section">
        <header className="story-heading"><span>04 · ONE FAMILY IN MOTION</span><h2>连续体验不是一条固定动线。<br />是 OS 状态在需要的设备间自然交接。</h2></header>
        <div className="flagship-scene-rail">
          <article><span>07:20 · GLANCE</span><b>床边光幕</b><h3>看见今日线索</h3><p>只呈现日程与昨晚留下的创作提示，其他空间仍封存。</p><small>OS: MORNING GLANCE</small></article><i>HANDOFF</i>
          <article><span>08:10 · VOICE</span><b>One Go</b><h3>用声音继续</h3><p>走动时继续推敲当前想法，不需要打开完整工作界面。</p><small>OS: FOCUSED THREAD</small></article><i>EID-X</i>
          <article><span>08:40 · VISUAL</span><b>随行眼镜</b><h3>快速确认结构</h3><p>眼镜只获得提纲和素材预览，不接触其他私人内容。</p><small>LEASE: VISUAL ONLY</small></article><i>HANDOFF</i>
          <article><span>09:03 · STUDIO</span><b>One + Dock</b><h3>展开完整作品</h3><p>屏幕、文档、Agent、相机素材和来源在创作台重新展开。</p><small>OS: FULL STUDIO</small></article>
        </div>
        <div className="scene-role-key"><span><b>Eidolon OS</b>保存任务、关系与边界</span><span><b>One Family</b>提供当下最合适的交互</span><span><b>EID-X</b>完成设备能力和权限交接</span></div>
      </section>

      <section className="one-ecosystem-section"><div><span>05 · BEYOND THE ONE FAMILY</span><h2>官方外设之外，<br />还有整个兼容设备生态。</h2><p>可穿戴、创作设备、空间终端、无障碍工具、专业仪器和机器人厂商不需要复制 Eidolon One。它们可以运行适合自己的 Eidolon OS 版本，或通过 EID-X 提供能力，在同一套主权与连续性规则下形成差异化产品。</p></div><div className="ecosystem-rings"><b>EID-X</b><span>ONE FAMILY</span><span>WEARABLE</span><span>INSTRUMENT</span><span>ROBOTICS</span><small>ONE OS · OPEN DEVICE NETWORK</small></div></section>

      <section className="one-future-section"><VesselMark size={62} tone="bone" idSuffix="one-v3-future" /><p>EIDOLON ONE · THE OFFICIAL FLAGSHIP</p><h2>One 定义今天最完整的体验。<br />Eidolon OS 定义更广阔的未来。</h2><div className="story-actions"><Link className="story-button light" href="/os">了解 Eidolon OS</Link><Link className="story-link on-dark" href="/protocol">进入 EID-X 协议 ↗</Link></div></section>
    </main>
  );
}
