import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { EnsembleStage } from "./EnsembleStage";
import { IpSwitcher } from "./IpSwitcher";
import { cast } from "./cast";
import "./ensemble.css";

export const metadata: Metadata = {
  title: "IP 角色团 | 一台 Eidolon One，托起一整组角色",
  description: "把一个故事里的角色请到你的多台设备上。换一套 IP，同样的设备就换了一班角色、一种相处方式；单独聊、一起聊、放手讨论、随时打断，都由同一台 Eidolon One 托起。",
  openGraph: { title: "IP 角色团 | 一台 Eidolon One，托起一整组角色", description: "一组角色，多台设备，一台主机。按住说话键开口，由合适的那位在自己的设备上回应；按下即停，所有设备立刻安静。", images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Eidolon OS — 个人 AI 操作系统" }] },
};

const controls = [
  ["我在跟谁说话？", "手机显示当前单聊对象或参与的伙伴；每位伙伴的设备显示思考中、等待中或正在说。"],
  ["谁能知道我说的内容？", "私聊默认只属于你和那一位；团队对话只在本次允许的成员之间共享，不默认打开所有历史。"],
  ["谁在回答，从哪里回答？", "看得见当前回应者，也可以选择允许哪些设备、以什么方式回应。"],
  ["想插话，或者不想继续了？", "按下说话键，所有设备立刻停下来听你；也可以在手机上结束这次一起聊。"],
  ["别的设备会不会录到声音？", "不会。一起聊时只有说话键在收音，桌面设备的麦克风都关着；伙伴之间用文字接话。"],
  ["一台设备掉线怎么办？", "显示这台未完成；其他回应照常，不会擅自换到别的设备播放。"],
  ["重新连接会不会又说一遍？", "已确认说完的内容不会重复播放；无法确认时如实标明，不假装成功。"],
] as const;

export default function EnsemblePage() {
  return (
    <main className="site-shell site-dark en-page">
      <SiteHeader />

      <section className="en-hero" id="top">
        <div className="en-hero-copy page-frame">
          <p className="en-label">EIDOLON ONE · SCENE <span>IP 角色团</span></p>
          <h1>一个故事里的角色，<br /><em>住进你的每一台设备。</em></h1>
          <p className="en-lead">把一整组角色请到桌面上，每位住在自己的设备里，各有性格与说话方式。按住手边的说话键开口，合适的那位就在自己的设备上回应；想插话，按下就行。换一套 IP，同样的设备就换了一班角色、一种气氛。</p>
          <div className="en-actions"><a className="en-button" href="#stories">换一套 IP 试试 <span>↓</span></a><Link className="en-text-link" href="/one">这一切背后，只有一台 One ↗</Link></div>
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
          <div className="en-lineup-inputs"><p><b>按键说话器</b>按住开口 · 按下即停</p><p><b>手机</b>选伙伴 · 开始结束 · 看状态</p></div>
          <p className="en-lineup-note">示例角色取材自古典名著《西游记》</p>
        </div>
      </section>

      <section className="en-section en-stories" id="stories">
        <div className="page-frame">
          <header className="en-heading"><div><p className="en-label">01 / ONE STAGE, MANY STORIES</p><h2>换一套 IP，<br />就是另一种相处。</h2></div><p>同样的桌面设备、同一台 One、同一个说话键。换一组角色，性格、说话方式、彼此的关系和接话的节奏全都跟着变。问同一句话，听听三个故事怎么回答。</p></header>
          <IpSwitcher />
          <div className="en-swap">
            <article><span>换一套 IP，换掉的是</span><ul><li>角色与性格</li><li>说话方式</li><li>角色之间的关系</li><li>谁先开口、怎么接话</li><li>屏幕上的形象与表情</li></ul></article>
            <article><span>一直不变的是</span><ul><li>同一台 Eidolon One</li><li>同一套桌面设备</li><li>同一个说话键和手机 App</li><li>你的数据，留在你自己的主机上</li></ul></article>
          </div>
          <p className="en-stories-more">不止名著。你自己的伙伴——小铮、青芽、澄澄、烁烁、团团——也能组团；遇到一个问题，也可以临时拉两位来讨论。<Link href="/companions">认识五位伙伴 ↗</Link></p>
          <p className="en-stories-note">示例角色取材自古典名著《西游记》《三国演义》《红楼梦》</p>
        </div>
      </section>

      <section className="en-section en-modes" id="modes">
        <div className="page-frame">
          <header className="en-heading"><div><p className="en-label">02 / SIX WAYS TO TALK</p><h2>六种交流方式，<br />都在同一个角色团里。</h2></div><p>点选下面六种交流方式，看看一句话怎样从说话键进来、由谁回应、在哪台设备上呈现。你不需要了解设备如何通信，只需要知道现在在和谁说话。</p></header>
          <EnsembleStage />
        </div>
      </section>

      <section className="en-section en-body">
        <div className="page-frame en-split">
          <div>
            <p className="en-label">03 / ROLE ≠ DEVICE</p>
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
              <li><b>一起聊结束，</b>每台设备还是原来的伙伴。</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="en-section en-why">
        <div className="page-frame">
          <header className="en-heading"><div><p className="en-label">04 / ONE HOST FOR THE WHOLE CAST</p><h2>一个角色团，<br />只需要一台主机。</h2></div><p>如果每个角色都是一只独立的 AI 玩具，你会有四个 App、四份记忆，而四位角色彼此听不见。角色团放在同一台 Eidolon One 上，它们才真正成为一个团。</p></header>
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
                <li><b>用文字接话</b><p>前一位的公开发言以文字交给下一位，接得准，也不会互相录到对方的声音。</p></li>
                <li><b>轮流出声</b><p>一位说完，下一位再开口；正在想的显示「思考中」，排队的显示「等待中」。</p></li>
                <li><b>一按就停</b><p>按下说话键，所有设备同时停下；排队的发言取消，旧话题不会再冒出来。</p></li>
                <li><b>记忆分得清</b><p>每位伙伴用自己的记忆回应；私聊只属于你和那一位，不会在团里公开。</p></li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="en-section en-control">
        <div className="page-frame en-split">
          <div>
            <p className="en-label">05 / VISIBLE AND IN YOUR HANDS</p>
            <h2>角色再多，<br />边界始终清楚。</h2>
            <p className="en-prose">多位角色同时在场，更需要清楚的边界。每一次交流是谁在听、谁在答、从哪里答，都应当一目了然。</p>
          </div>
          <dl className="en-control-list">
            {controls.map(([question, answer]) => <div key={question}><dt>{question}</dt><dd>{answer}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="en-section en-partner-section">
        <div className="page-frame">
          <div className="en-partner">
            <div><p className="en-label">FOR IP PARTNERS</p><h3>角色不再困在<br />一只玩具里。</h3></div>
            <div><p>IP 方提供角色设定、形象与说话风格；上新一套角色团，用户家里已有的设备马上就能用。Eidolon One 负责长期记忆、多角色调度、跨设备呈现和权限，用户与角色的共同经历留在用户自己的主机上——不必为每个 IP 各做一套 App 和云端。</p></div>
          </div>
        </div>
      </section>

      <section className="en-section en-status">
        <div className="page-frame">
          <p className="en-label">GET STARTED</p>
          <h2>四步，<br />把角色团请到桌面上。</h2>
          <ol className="en-start">
            <li><span>01</span><b>准备一台 Eidolon One</b><p>角色、记忆和所有设备，都由这台主机统一托起。</p><Link href="/one">了解 Eidolon One ↗</Link></li>
            <li><span>02</span><b>请来一组角色</b><p>选一套 IP 角色团，想换就换；也可以用你自己的伙伴组队。</p></li>
            <li><span>03</span><b>给每位一台设备</b><p>每位角色在自己的桌面设备上回应，再备一个按键说话器用来开口。</p></li>
            <li><span>04</span><b>在手机上开始</b><p>选好参与的伙伴，选「你来提问」或「允许讨论」，按住说话键就能聊。</p></li>
          </ol>
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
