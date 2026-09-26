import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { HomePanelDemo } from "./HomePanelDemo";
import "./smart-home.css";

export const metadata: Metadata = {
  title: "智能家居 | 一台 Eidolon One，把家也连进来",
  description: "在手机里整理一次房间和设备，保存在 Eidolon One 上；家居中控面板按房间显示、点按控制，一句话就能执行。",
  openGraph: { title: "智能家居 | 一台 Eidolon One，把家也连进来", description: "手机整理，One 保存与执行，面板显示与输入。常见指令快速识别，复杂说法再交给大模型。", images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Eidolon OS — 个人 AI 操作系统" }] },
};

const moments = [
  { time: "回家", code: "COMING HOME", title: "进门点一下「回家」", result: "客厅灯亮起，空调开到 26°，窗帘拉开。", tag: "场景 · 一键多台" },
  { time: "在客厅", code: "IN THE LIVING ROOM", title: "对面板说「打开空调」", result: "面板标在客厅，开的就是客厅空调；两台都有可能时，屏幕上直接给你两个按钮选。", tag: "语音 · 默认房间" },
  { time: "在书房", code: "IN THE STUDY", title: "对桌面伙伴说「把客厅空调关了」", result: "伙伴用声音答你一句，客厅面板上的空调同时变成关闭。", tag: "伙伴 · 同一个家" },
  { time: "夜里", code: "AT NIGHT", title: "点一下「睡眠」", result: "灯全关、窗帘合上、主卧空调调到 27°。面板只亮屏不出声，不会吵醒家人。", tag: "安静 · 只显示不说话" },
] as const;

const steps = [
  {
    code: "01 · PHONE", name: "手机", verb: "整理一次",
    items: ["建房间、加设备、起别名", "给面板和桌面伙伴标好所在房间", "也可以一键载入示例户型，先上手体验"],
  },
  {
    code: "02 · EIDOLON ONE", name: "Eidolon One", verb: "保存并执行",
    items: ["家的目录只存一份，在你自己的主机上", "常见指令在本地快速识别，说完磁贴就变", "「有点热」这类说法，再交给大模型理解"],
  },
  {
    code: "03 · PANEL & COMPANIONS", name: "面板与伙伴", verb: "点一下、说一句",
    items: ["按房间排列的磁贴，场景一键执行", "点按麦克风说一句，结果写在屏幕上", "桌面伙伴也能控制同一个家"],
  },
] as const;

const assurances = [
  ["CONFIRMED", "确认了才显示完成", "设备回报成功，才显示「已打开」；场景里哪几项没完成，逐条告诉你。"],
  ["OFFLINE", "离线就如实显示", "和主机断开时，磁贴变灰并标注「离线 · 上次状态」，不假装执行。"],
  ["YOURS", "你的家只属于你", "家的目录保存在你的主机上，别的家庭看不到，也控制不了。"],
  ["SAFETY", "安全优先", "门锁等涉及安全的设备，不接受语音直接开启。"],
] as const;

const deviceTypes = ["灯", "空调", "窗帘", "空气净化器", "电视", "音箱", "扫地机器人", "温湿度传感器"] as const;
const sources = ["手机添加", "Home Assistant 接入已有设备", "Thread / Zigbee 直连面板"] as const;

export default function SmartHomePage() {
  return (
    <main className="site-shell site-light sh-page">
      <SiteHeader />

      <section className="sh-hero" id="top">
        <div className="page-frame sh-hero-copy">
          <p className="sh-label">EIDOLON ONE · SCENE <span>智能家居</span></p>
          <h1>一块面板看全家，<br /><em>一句话就办好。</em></h1>
          <p className="sh-lead">在手机里把房间和设备整理一次，保存在你的 Eidolon One 上。墙上的家居中控面板按房间显示、点按控制；对它说一句「打开空调」，它知道你在客厅。</p>
          <div className="sh-actions"><a className="sh-button" href="#moments">看家里的几个时刻 <span>↓</span></a><a className="sh-text-link" href="/one">不是再买一套系统，是给 One 加一块面板 ↗</a></div>
        </div>
        <div className="page-frame"><HomePanelDemo /></div>
      </section>

      <section className="sh-section sh-moments" id="moments">
        <div className="page-frame">
          <header className="sh-heading"><div><p className="sh-label">01 / MOMENTS AT HOME</p><h2>家里的几个时刻，<br />一块面板都接得住。</h2></div><p>不用记哪个 App 管哪台设备。回家、在客厅、在书房、夜里，点一下或说一句就好。</p></header>
          <div className="sh-moments-grid">
            {moments.map((moment) => <article key={moment.code}><span>{moment.code}</span><h3>{moment.time}</h3><b>{moment.title}</b><p>{moment.result}</p><small>{moment.tag}</small></article>)}
          </div>
        </div>
      </section>

      <section className="sh-section sh-roles" id="how">
        <div className="page-frame">
          <header className="sh-heading"><div><p className="sh-label">02 / THREE STEPS</p><h2>三步，<br />把家连进 One。</h2></div><p>每件事只有一个地方说了算：手机里改了名字，面板立刻更新；面板上点了开关，手机也看到新状态。</p></header>
          <div className="sh-roles-grid">
            {steps.map((step, index) => (
              <article key={step.code} className={index === 1 ? "is-host" : undefined}>
                <span>{step.code}</span>
                <h3>{step.name}</h3>
                <b>{step.verb}</b>
                <ul>{step.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-rules">
        <div className="page-frame">
          <header className="sh-heading on-dark"><div><p className="sh-label">03 / PEACE OF MIND</p><h2>放心交给它。</h2></div><p>控制家里的设备，比聊天更需要准确。宁可如实说「没做成」，也不让你以为空调已经开了。</p></header>
          <div className="sh-rules-grid">
            {assurances.map(([code, title, detail]) => <article key={code}><span>{code}</span><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
          <div className="sh-compat">
            <div><span>按 Matter 设备类型设计</span><p>{deviceTypes.map((t) => <i key={t}>{t}</i>)}</p></div>
            <div><span>设备从哪里来</span><p>{sources.map((t) => <i key={t}>{t}</i>)}</p></div>
          </div>
        </div>
      </section>

      <section className="closing-section compact-closing">
        <p>ONE HOST · ONE HOME · EVERY ROOM</p>
        <h2>一台 One，<br />把家也连进来。</h2>
        <div className="actions"><a className="primary-action light" href="/one">认识 Eidolon One</a><a className="text-action on-dark" href="/ensemble">再看看 IP 角色团 ↗</a></div>
      </section>
    </main>
  );
}
