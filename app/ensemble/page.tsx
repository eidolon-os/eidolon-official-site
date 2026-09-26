import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { EnsembleStage } from "./EnsembleStage";
import { cast } from "./cast";
import "./ensemble.css";

export const metadata: Metadata = {
  title: "IP 角色团 | 一台 Eidolon One，托起一整组角色",
  description: "把一个故事里的角色请到你的多台设备上：单独聊、一起聊、换处回应、传话和安静陪伴，都由同一台 Eidolon One 托起。产品预览。",
  openGraph: { title: "IP 角色团 | 一台 Eidolon One，托起一整组角色", description: "一组角色，多台设备，一台主机。从任何一台设备开口，由合适的那位在它自己的设备上回应。产品预览。", images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Eidolon OS — 个人 AI 操作系统" }] },
};

const controls = [
  ["我在跟谁说话？", "手机显示当前单聊对象或团队成员；设备在能力允许时显示身份与状态。"],
  ["谁能知道我说的内容？", "私聊默认只属于你和那一位；团队对话只在本次允许的成员之间共享，不默认打开所有历史。"],
  ["谁在回答，从哪里回答？", "看得见当前回应者，也可以选择允许哪些设备、以什么方式回应。"],
  ["选错人或不想继续了？", "随时改选对象、纠正意图，或停止当前讨论。"],
  ["关掉麦克风后还能回应吗？", "可以。通过手机文字或手边的说话器输入，再按你的设置回应。"],
  ["一台设备掉线怎么办？", "显示这台未完成；其他回应照常，不会擅自换到别的设备播放。"],
  ["重新连接会不会又说一遍？", "已确认说完的内容不会重复播放；无法确认时如实标明，不假装成功。"],
] as const;

export default function EnsemblePage() {
  return (
    <main className="site-shell site-dark en-page">
      <SiteHeader />

      <section className="en-hero" id="top">
        <div className="en-hero-copy page-frame">
          <p className="en-label">EIDOLON ONE · SCENE <span>IP 角色团 · 产品预览</span></p>
          <h1>一个故事里的角色，<br /><em>住进你的每一台设备。</em></h1>
          <p className="en-lead">把一整组角色请到桌面上，每位住在自己的设备里，各有性格与说话方式。你可以单独找一位聊天，也可以让大家一起出主意——从手边任何一台设备开口，由合适的那位在它自己的设备上回应。</p>
          <div className="en-actions"><a className="en-button" href="#modes">看六种交流方式 <span>↓</span></a><Link className="en-text-link" href="/one">这一切背后，只有一台 One ↗</Link></div>
        </div>
        <div className="en-lineup page-frame" aria-label="示例角色团：唐僧、悟空、八戒、沙僧，各自一台桌面设备，由一台 Eidolon One 托起">
          <div className="en-lineup-cast">
            {cast.map((member) => (
              <article key={member.id} className={`en-${member.id}`}>
                <div className="en-lineup-device"><span>{member.glyph}</span></div>
                <b>{member.name}</b>
                <small>{member.trait}</small>
              </article>
            ))}
          </div>
          <div className="en-lineup-host"><i /><b>Eidolon One</b><span>角色 · 记忆 · 调度 · 权限</span><i /></div>
          <p className="en-lineup-note">示例角色取自公版名著《西游记》，不代表任何影视、动画形象或授权产品；设备形态为示意。</p>
        </div>
      </section>

      <section className="en-section en-modes" id="modes">
        <div className="page-frame">
          <header className="en-heading"><div><p className="en-label">01 / SIX WAYS TO TALK</p><h2>六种交流方式，<br />都在同一个角色团里。</h2></div><p>点选下面六种交流方式，看看一句话从哪台设备进来、由谁回应、在哪台设备上呈现。你不需要了解设备如何通信，只需要知道现在在和谁说话。</p></header>
          <EnsembleStage />
        </div>
      </section>

      <section className="en-section en-body">
        <div className="page-frame en-split">
          <div>
            <p className="en-label">02 / ROLE ≠ DEVICE</p>
            <h2>角色是角色，<br />设备是设备。</h2>
            <p className="en-prose">悟空是你认识的那一位，桌上的小设备只是他此刻表达自己的地方。角色的名字、性格和你们的共同经历都由 Eidolon One 保管；设备只负责听见、说出、显示和表情。</p>
          </div>
          <div className="en-body-diagram">
            <article className="en-body-role"><span>ROLE · 住在 One 里</span><b>悟空</b><ul><li>名字与性格</li><li>说话方式</li><li>和你的共同经历</li></ul></article>
            <i aria-hidden="true">此刻使用</i>
            <article className="en-body-device"><span>DEVICE · 此刻的身体</span><b>桌面设备</b><ul><li>收音</li><li>声音</li><li>文字</li><li>表情 · 简单动作</li></ul></article>
            <ol className="en-body-rules">
              <li><b>换一台设备，</b>还是同一个悟空。</li>
              <li><b>设备暂时离线，</b>悟空不会因此消失。</li>
              <li><b>本次换人回应，</b>不改设备原来的伙伴。</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="en-section en-why">
        <div className="page-frame">
          <header className="en-heading"><div><p className="en-label">03 / ONE HOST FOR THE WHOLE CAST</p><h2>一个角色团，<br />只需要一台主机。</h2></div><p>如果每个角色都是一只独立的 AI 玩具，你会有四个 App、四份记忆，而四位角色彼此听不见。角色团放在同一台 Eidolon One 上，它们才真正成为一个团。</p></header>
          <div className="en-why-compare">
            <article className="en-why-silo">
              <span>EACH TOY ALONE</span>
              <h3>各自为政</h3>
              <div>{cast.map((member) => <p key={member.id}><b>{member.glyph}</b><i>专属 App</i><i>独立账号</i><i>各自记忆</i></p>)}</div>
              <small>角色之间互不相识，谁也接不上谁的话。</small>
            </article>
            <article className="en-why-one">
              <span>ONE CAST ON ONE HOST</span>
              <h3>同台演出</h3>
              <ul>
                <li><b>彼此听得见</b><p>团队里的公开发言，下一位可以直接接着说，不用你再转述。</p></li>
                <li><b>轮流出声</b><p>桌上一次只有一台设备说话，四台设备不会同时抢答。</p></li>
                <li><b>记忆分得清</b><p>私聊只属于你和那一位；新成员不默认获得加入前的历史。</p></li>
                <li><b>一个入口</b><p>所有角色、设备和团队，都在同一个手机 App 里管理。</p></li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="en-section en-control">
        <div className="page-frame en-split">
          <div>
            <p className="en-label">04 / VISIBLE AND IN YOUR HANDS</p>
            <h2>角色再多，<br />边界始终清楚。</h2>
            <p className="en-prose">多位角色同时在场，更需要清楚的边界。每一次交流是谁在听、谁在答、从哪里答，都应当一目了然。</p>
          </div>
          <dl className="en-control-list">
            {controls.map(([question, answer]) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="en-section en-beyond">
        <div className="page-frame">
          <header className="en-heading"><div><p className="en-label">05 / BEYOND ONE STORY</p><h2>不只西游。<br />任何有群像的故事都可以。</h2></div><p>西游四人只是第一个示例。换成别的故事、别的角色数量，或者你自己的伙伴，交流方式完全一样。</p></header>
          <div className="en-beyond-grid">
            <article><span>STORY CAST</span><h3>一个故事的主角团</h3><p>师徒、队友、同学、一家人——角色之间本来就有关系，同台聊天才有味道。</p></article>
            <article><span>YOUR COMPANIONS</span><h3>你自己的伙伴团</h3><p>小铮、青芽、澄澄、烁烁、团团，或你亲手创建的伙伴，也能用同样的方式组队。</p><Link href="/companions">认识五位伙伴 ↗</Link></article>
            <article><span>AD-HOC</span><h3>临时拉两位讨论</h3><p>不必先建一个固定团队。遇到一个问题，临时邀请两位伙伴各说说看法。</p></article>
          </div>
          <div className="en-partner">
            <div><p className="en-label">FOR IP PARTNERS</p><h3>角色不再困在<br />一只玩具里。</h3></div>
            <div><p>IP 方提供角色设定、形象与说话风格；Eidolon One 负责长期记忆、多角色调度、跨设备呈现和权限。用户与角色的共同经历留在用户自己的主机上，一个角色团不必各做一套 App 和云端。</p></div>
          </div>
        </div>
      </section>

      <section className="en-section en-status">
        <div className="page-frame">
          <p className="en-label">WHERE WE ARE</p>
          <h2>先把一问一答做扎实，<br />再让整个团热闹起来。</h2>
          <div className="en-status-grid">
            <article><b>已经可以</b><p>多台设备连接同一台主机，各自与自己的伙伴单独对话。</p></article>
            <article><b>正在验证</b><p>从一台设备说话，由另一台设备上的伙伴回应；换人、停止与断线恢复。</p></article>
            <article><b>接下来</b><p>多位伙伴按顺序接续、团队公开上下文、传话，以及听说与表达的分别设置。</p></article>
          </div>
          <p className="en-note">本页为产品预览，介绍计划中的体验，不表示以上能力已经全部可用。示例对话用于说明体验，不是固定台词或效果保证；角色、设备外观与组合形式仍在设计中，尚未公布价格与上市时间。</p>
        </div>
      </section>

      <section className="closing-section compact-closing en-closing">
        <p>ONE HOST · ONE CAST · MANY DEVICES</p>
        <h2>一台 One，<br />托起整个角色团。</h2>
        <div className="actions"><Link className="primary-action light" href="/one">认识 Eidolon One</Link><Link className="text-action on-dark" href="/smart-home">再看看智能家居 ↗</Link></div>
      </section>
    </main>
  );
}
