/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { CharacterPicker } from "./CharacterPicker";
import "./companions.css";

export const metadata: Metadata = {
  title: "Eidolon Companions | 找到与你合拍的伙伴",
  description: "五种性格，五种相处方式。从一位桌面伙伴开始，与 Eidolon One 一起，让陪伴进入日常。",
  openGraph: { title: "Eidolon Companions | 找到与你合拍的伙伴", description: "小铮、青芽、澄澄、烁烁、团团。认识五位原创 AI 伙伴。", images: [{ url: "/companions/five-companions.png", alt: "五位 Eidolon 原创伙伴" }] },
};

export default function CompanionsPage() {
  return <main className="site-shell site-light cp-page">
    <SiteHeader />
    <section className="cp-hero" id="top">
      <div className="cp-hero-copy"><p className="cp-label">EIDOLON COMPANIONS <span>角色陪伴</span></p><h1>让日常，<br />多一个合拍的伙伴。</h1><p className="cp-lead">有的陪你理清思绪，有的陪你天马行空。<br />选一位喜欢的伙伴，让每次开口都有熟悉的回应。</p><div className="cp-actions"><a className="cp-button" href="#characters">认识五位伙伴 <span>↗</span></a><a className="cp-text-link" href="#begin">看看如何开始 ↓</a></div></div>
      <figure className="cp-family"><img src="/companions/five-companions.png" width="1942" height="809" fetchPriority="high" alt="从左到右：白金色猫头鹰小铮、苔绿色小鹿青芽、雾蓝色水獭澄澄、珊瑚橙狐狸烁烁、暖赭色小熊团团" /><figcaption>小铮 · 青芽 · 澄澄 · 烁烁 · 团团</figcaption></figure>
      <div className="cp-hero-bottom"><span>一台个人 AI 主机</span><span>你喜欢的角色</span><span>属于你的相处方式</span></div>
    </section>
    <section className="cp-section" id="characters">
      <div className="cp-section-heading"><div><p className="cp-label">01 / MEET YOUR COMPANIONS</p><h2>五种性格。<br />不止一种合拍。</h2></div><p>从金、木、水、火、土汲取自然意象，创造五位各有脾气的伙伴。这里没有命理配对，也没有给你贴标签的测试。凭相处的感觉，选你喜欢的。</p></div>
      <CharacterPicker />
    </section>
    <section className="cp-everyday"><div className="cp-section"><p className="cp-label">02 / AT YOUR OWN PACE</p><h2>聊得来，也能安静待着。</h2><div className="cp-moments"><article><span>01</span><h3>思绪打结的时候</h3><p>说说今天卡住的一件事。想听建议，就一起理一理；只想说说，也不用立刻找答案。</p></article><article><span>02</span><h3>冒出新点子的时候</h3><p>分享一个不成熟的想法，聊一本书，或把小小的发现说给 TA 听。</p></article><article><span>03</span><h3>想安静一点的时候</h3><p>按设备支持的方式选择说话、字幕或表情。需要独处时，让对话停下来。</p></article></div><p className="cp-note">说话、字幕与表情随所连接设备的能力呈现；每位伙伴都有自己的语言风格。</p></div></section>
    <section className="cp-section" id="begin"><div className="cp-section-heading"><div><p className="cp-label">03 / MAKE ROOM FOR A COMPANION</p><h2>从一位开始，<br />慢慢认识更多。</h2></div><p>伙伴住在你的 Eidolon One 里，通过桌面陪伴设备与你相处。从认识一位伙伴到让 TA 来到桌面，只需要四步。</p></div><ol className="cp-steps"><li><span>01</span><h3>准备好你的主机</h3><p>连接运行 Eidolon OS 的个人 AI 主机。在 Mobile 中管理你的伙伴和设备。</p><Link href="/one">了解 Eidolon One ↗</Link></li><li><span>02</span><h3>认识一位伙伴</h3><p>从预设开始，也可以自己定义。改名字、调整相处方式，先试聊一句。</p></li><li><span>03</span><h3>让 TA 来到桌面</h3><p>接入兼容陪伴设备，选择由哪位伙伴回应，再设置这台设备的表达方式。</p></li><li><span>04</span><h3>按自己的节奏相处</h3><p>以后可以再认识新伙伴、连接新设备。每位伙伴保持自己的设定，每台设备明确由谁回应。</p></li></ol></section>
    <section className="cp-principles cp-section"><div><p className="cp-label">YOUR COMPANION. YOUR CHOICE.</p><h2>熟悉感会留下，<br />选择权也在你手里。</h2></div><div className="cp-principle-list"><article><h3>预设，只是一个起点</h3><p>不用填完一长串设定才开始。喜欢就先聊，相处中再调整。官方更新预设不会改写你已经创建的伙伴。</p></article><article><h3>每一位，都有自己的关系</h3><p>认识新伙伴，不意味着把所有私密聊天都交给 TA。记忆按伙伴区分；共享哪些内容，由你的设置与授权决定。</p></article><article><h3>角色和设备，各有位置</h3><p>伙伴的设定与记忆由主机管理。设备负责让 TA 与你交流；切换设备回应的角色，需要你明确选择。</p></article></div></section>
    <section className="cp-status cp-section"><p className="cp-label">ONE HOST, MORE SCENES</p><h2>陪伴，只是一个开始。</h2><div className="cp-status-grid"><article><b>让几位伙伴一起聊</b><p>单独聊、一起出主意、传一句话，伙伴们在各自的设备上轮流回应。</p><Link className="cp-text-link" href="/ensemble">看看 IP 角色团 ↗</Link></article><article><b>让伙伴帮你照看家</b><p>在书房对伙伴说「把客厅空调关了」，家里的设备跟着动起来。</p><Link className="cp-text-link" href="/smart-home">看看智能家居 ↗</Link></article></div><Link className="cp-button" href="/one">认识伙伴背后的主机 <span>↗</span></Link></section>
    <footer className="cp-footer"><Link href="/">Eidolon</Link><p>你的 AI，你的记忆，你的决定。</p><a href="#top">回到顶部 ↑</a></footer>
  </main>;
}
