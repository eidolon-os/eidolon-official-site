import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { HomePanelDemo } from "./HomePanelDemo";
import "./smart-home.css";

export const metadata: Metadata = {
  title: "智能家居 | 一台 Eidolon One，把家也连进来",
  description: "在手机里整理一次房间和设备，保存在 Eidolon One 上；家居中控面板按房间显示、点按控制，一句话就能执行。",
  openGraph: { title: "智能家居 | 一台 Eidolon One，把家也连进来", description: "手机整理，One 保存与执行，面板显示与输入。常见指令快速识别，复杂说法再交给大模型。", images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Eidolon OS — 个人 AI 操作系统" }] },
};

const roles = [
  {
    code: "PHONE", name: "手机", verb: "整理你的家",
    items: ["房间：新增、改名、排序", "设备：按房间分组，可起别名", "位置：给面板和桌面伙伴标上所在房间", "一键载入示例户型，先上手体验"],
  },
  {
    code: "EIDOLON ONE", name: "Eidolon One", verb: "保存并执行",
    items: ["家的目录只存一份，在你自己的主机上", "理解指令，执行前再校验一次", "设备状态变化，同步到每块面板和手机"],
  },
  {
    code: "PANEL", name: "家居中控面板", verb: "显示与输入",
    items: ["按房间排列的设备磁贴", "点一下开关，加减调节亮度、温度与开合", "回家、离家、观影、睡眠等场景一键执行", "点按麦克风，说一句话"],
  },
] as const;

const pipeline = [
  ["01", "说话", "点按麦克风或实体键，说「打开空调」"],
  ["02", "听写", "主机把语音转成文字，判断你已说完"],
  ["03", "理解", "常见说法快速识别；听不懂的再交给大模型"],
  ["04", "校验", "设备存在、命令合法、参数在范围内"],
  ["05", "执行", "设备确认成功，才算完成"],
  ["06", "同步", "所有面板和手机，同时看到新状态"],
] as const;

const understanding = [
  ["默认就是这个房间", "面板标在客厅，「打开空调」就是客厅空调，不用每次都说房间。"],
  ["说不清，就让你选", "两台空调、又不确定房间时，面板直接列出「客厅空调 / 主卧空调」，点一下就好，比再追问一句更快。"],
  ["没有，就说没有", "「打开投影仪」得到的是「家里没有这个设备」，不会胡乱打开别的东西。"],
  ["只管家里的事", "闲聊不会被当成指令，面板会告诉你「这里只处理家里的设备」。"],
] as const;

const capabilities = ["开关", "亮度", "色温", "温度与模式", "风速", "开合位置", "运行状态", "音量", "温湿度", "场景"] as const;
const deviceTypes = ["灯", "空调", "窗帘", "空气净化器", "电视", "音箱", "扫地机器人", "温湿度传感器"] as const;

const rules = [
  ["CONFIRMED", "确认了才显示完成", "设备回报成功，面板才显示「已打开」；超时就如实标为未知，不会自动重发。"],
  ["ONCE", "一句话只执行一次", "网络重试不会让同一条指令执行两次。"],
  ["PARTIAL", "场景逐条汇报", "一个场景包含多台设备，部分没完成，就如实告诉你是哪几项。"],
  ["YOURS", "你的家只属于你", "另一个家庭的面板看不到、也控制不了你的设备。"],
] as const;

export default function SmartHomePage() {
  return (
    <main className="site-shell site-light sh-page">
      <SiteHeader />

      <section className="sh-hero" id="top">
        <div className="page-frame sh-hero-copy">
          <p className="sh-label">EIDOLON ONE · SCENE <span>智能家居</span></p>
          <h1>一块面板看全家，<br /><em>一句话就办好。</em></h1>
          <p className="sh-lead">在手机里把房间和设备整理一次，保存在你的 Eidolon One 上。墙上的家居中控面板按房间显示、点按控制；对它说一句「打开空调」，它知道你在客厅。</p>
          <div className="sh-actions"><a className="sh-button" href="#flow">看一句话如何执行 <span>↓</span></a><Link className="sh-text-link" href="/one">不是再买一套系统，是给 One 加一块面板 ↗</Link></div>
        </div>
        <div className="page-frame"><HomePanelDemo /></div>
      </section>

      <section className="sh-section sh-roles">
        <div className="page-frame">
          <header className="sh-heading"><div><p className="sh-label">01 / THREE PARTS, ONE HOME</p><h2>手机整理，One 保存，<br />面板显示。</h2></div><p>每件事只有一个地方说了算。手机里改了设备名字，面板立刻更新；面板上点了开关，手机也看到新状态。家居面板是 One Room 产品线的一员，和桌面伙伴连着同一台主机。</p></header>
          <div className="sh-roles-grid">
            {roles.map((role, index) => (
              <article key={role.code} className={index === 1 ? "is-host" : undefined}>
                <span>{role.code}</span>
                <h3>{role.name}</h3>
                <b>{role.verb}</b>
                <ul>{role.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-flow" id="flow">
        <div className="page-frame">
          <header className="sh-heading on-dark"><div><p className="sh-label">02 / FROM VOICE TO TILE</p><h2>说完，<br />磁贴就变了。</h2></div><p>开灯、开空调这样的常见指令，不必每次都等大模型想一遍。One 先用快速识别在本地理解；遇到「有点热」这类说法，再交给大模型，而且只给它家居相关的工具。</p></header>
          <ol className="sh-pipeline">
            {pipeline.map(([n, name, detail]) => <li key={n}><span>{n}</span><b>{name}</b><p>{detail}</p></li>)}
          </ol>
          <div className="sh-latency">
            <article>
              <span>每句话都交给大模型</span>
              <div className="sh-bar"><i style={{ width: "100%" }} /></div>
              <p><b>开个灯，也要等一等</b>先等模型理解、组织语言，再把回复念出来。</p>
            </article>
            <article className="is-fast">
              <span>Eidolon One · 快速识别</span>
              <div className="sh-bar"><i style={{ width: "17%" }} /></div>
              <p><b>说完，磁贴就变了</b>常见指令在主机本地完成理解和执行，面板上立刻看到结果。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sh-section sh-understand">
        <div className="page-frame">
          <header className="sh-heading"><div><p className="sh-label">03 / IT KNOWS THE ROOM</p><h2>它知道<br />你在哪个房间。</h2></div><p>在手机里给面板标好所在的房间，它就用这个房间理解你的话。听不明白时，宁可让你点一下，也不替你瞎猜。</p></header>
          <div className="sh-understand-grid">
            {understanding.map(([title, detail], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
        </div>
      </section>

      <section className="sh-section sh-quiet">
        <div className="page-frame sh-split">
          <div>
            <p className="sh-label">04 / QUIET BY DESIGN</p>
            <h2>只听，不说。<br />所以一切都看得见。</h2>
            <p className="sh-prose">家居面板有麦克风，没有扬声器——它不会在客厅突然开口。每一步都写在屏幕上：听到了什么、做了什么、为什么没做成。</p>
          </div>
          <ul className="sh-quiet-list">
            <li><b>聆听中 → 处理中 → 结果</b><p>结果卡片写明听到的话和执行结果，几秒后自动收起。</p></li>
            <li><b>失败写明原因</b><p>没听清、主机不可达、家里没有这个设备、这里只处理家里的设备。</p></li>
            <li><b>每次变化都有来源</b><p>活动条标出最近一次变化来自触控、面板语音、伙伴语音、手机还是场景。</p></li>
            <li><b>离线就如实显示</b><p>和主机断开时，磁贴变灰并标注「离线 · 上次状态」，不接受操作，也不假装执行。</p></li>
          </ul>
        </div>
      </section>

      <section className="sh-section sh-companion">
        <div className="page-frame">
          <header className="sh-heading"><div><p className="sh-label">05 / TWO WAYS IN, ONE PATH</p><h2>桌面伙伴，<br />也能帮你开灯。</h2></div><p>家居面板和桌面伙伴连着同一台 One，走的是同一条执行路径。这正是「一台主机」和「每个场景一套系统」的区别。</p></header>
          <div className="sh-paths">
            <article><span>面板语音</span><p>在客厅对面板说<br /><b>「打开空调」</b></p><small>结果显示在面板的卡片上</small></article>
            <article><span>伙伴语音</span><p>在书房对桌面伙伴说<br /><b>「把客厅空调关了」</b></p><small>伙伴用声音答复你</small></article>
            <div className="sh-paths-core"><b>Eidolon One</b><p>同一套理解 · 同一次校验 · 同一个执行</p></div>
            <div className="sh-paths-out"><span>SYNC</span><p>客厅面板、手机同时看到空调的新状态</p></div>
          </div>
          <p className="sh-paths-note">伙伴也用手机里标好的房间理解你：伙伴在书房，「开灯」开的就是书房的灯。</p>
        </div>
      </section>

      <section className="sh-section sh-standard">
        <div className="page-frame sh-split">
          <div>
            <p className="sh-label">06 / BUILT ON OPEN STANDARDS</p>
            <h2>按 Matter 的语言，<br />描述每一台设备。</h2>
            <p className="sh-prose">每类设备的能力都对齐 Matter 设备类型的定义。无论设备从哪里接入，面板、伙伴和手机上的体验都保持一致。</p>
          </div>
          <div className="sh-standard-body">
            <div><span>设备类型</span><p>{deviceTypes.map((t) => <i key={t}>{t}</i>)}</p></div>
            <div><span>能力</span><p>{capabilities.map((t) => <i key={t}>{t}</i>)}</p></div>
            <ol className="sh-sources">
              <li><small>APP</small><b>在手机里添加</b><p>选好设备类型、分好房间，由 One 统一保存和管理。</p></li>
              <li><small>HOME ASSISTANT</small><b>接入已有设备</b><p>家里已经在用的设备，通过 Home Assistant 接进同一块面板。</p></li>
              <li><small>THREAD · ZIGBEE</small><b>面板直连</b><p>面板直接连接 Thread / Zigbee 设备，主机不在线时也能本地控制。</p></li>
            </ol>
            <p className="sh-standard-note">安全优先：门锁等涉及安全的设备，不接受语音直接开启。</p>
          </div>
        </div>
      </section>

      <section className="sh-section sh-rules">
        <div className="page-frame">
          <header className="sh-heading on-dark"><div><p className="sh-label">07 / HONEST BY DEFAULT</p><h2>不假装完成，<br />是家居控制的底线。</h2></div><p>控制家里的设备，比聊天更需要准确。宁可如实说「没做成」，也不让你以为空调已经开了。</p></header>
          <div className="sh-rules-grid">
            {rules.map(([code, title, detail]) => <article key={code}><span>{code}</span><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
        </div>
      </section>

      <section className="sh-section sh-status">
        <div className="page-frame">
          <p className="sh-label">GET STARTED</p>
          <h2>四步，<br />把家连进 One。</h2>
          <ol className="sh-start">
            <li><span>01</span><b>准备一台 Eidolon One</b><p>家的目录、设备状态与指令理解，都在这台主机上完成。</p><Link href="/one">了解 Eidolon One ↗</Link></li>
            <li><span>02</span><b>在手机里整理你的家</b><p>建好房间、添加设备；也可以一键载入示例户型，先上手体验。</p></li>
            <li><span>03</span><b>装上家居面板</b><p>连上主机，在手机里标好它所在的房间。</p></li>
            <li><span>04</span><b>点一下，或说一句</b><p>面板、桌面伙伴和手机，控制的是同一个家。</p></li>
          </ol>
        </div>
      </section>

      <section className="closing-section compact-closing">
        <p>ONE HOST · ONE HOME · EVERY ROOM</p>
        <h2>一台 One，<br />把家也连进来。</h2>
        <div className="actions"><Link className="primary-action light" href="/one">认识 Eidolon One</Link><Link className="text-action on-dark" href="/ensemble">再看看 IP 角色团 ↗</Link></div>
      </section>
    </main>
  );
}
