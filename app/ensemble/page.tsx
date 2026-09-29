import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { EnsembleStage } from "./EnsembleStage";
import { IpSwitcher } from "./IpSwitcher";
import { cast } from "./cast";
import "./ensemble.css";

export const metadata: Metadata = {
  title: "IP 角色团 | 一台 Eidolon One，托起一整组角色",
  description: "给你的伙伴们派一组本场角色，在多台设备上开一场团队：点名回应、一起出主意、接着聊下去、随时打断。换一套 IP，同样的设备就是另一场戏，都由同一台 Eidolon One 托起。",
  openGraph: { title: "IP 角色团 | 一台 Eidolon One，托起一整组角色", description: "一组角色，多台设备，一台主机。按住说话键开口，由合适的那位在自己的设备上回应；按下即停，所有设备立刻安静。", images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Eidolon OS — 个人 AI 操作系统" }] },
};

const controls = [
  ["我在跟谁说话？", "手机上列着这一场的成员和各自的本场角色；正在想、正在说的那台设备会亮起状态。"],
  ["谁能知道我说的内容？", "团队里的话只在这一场的成员之间公开；你和伙伴的私聊、记忆都不会被带进来。"],
  ["别的设备会不会录到声音？", "不会。团队里只有说话键在收音，桌面设备只发声；伙伴之间用文字接话。"],
  ["想插话，或者想结束？", "按下说话键，所有设备立刻停下来听你；想结束，就在手机上点「结束团队」。"],
  ["离开手机页面，团队会散吗？", "不会。手机只是遥控器：离开页面、大家安静下来，团队都照常在；点「结束团队」才结束，设备随后回到原来的单聊。"],
  ["想换角色或者加人？", "一场开始后，成员和本场角色就固定了；想换，结束后重新开一场。"],
  ["重新连接会不会又说一遍？", "已经说完的内容不会重复播放；没说完的半句也不会被当成说过。"],
] as const;

export default function EnsemblePage() {
  return (
    <main className="site-shell site-dark en-page">
      <SiteHeader />

      <section className="en-hero" id="top">
        <div className="en-hero-copy page-frame">
          <p className="en-label">EIDOLON ONE · SCENE <span>IP 角色团</span></p>
          <h1>一个故事里的角色，<br /><em>住进你的每一台设备。</em></h1>
          <p className="en-lead">给桌上的几位伙伴各派一个本场角色，开一场团队。按住手边的说话键开口，合适的那位就在自己的设备上回应；想插话，按下就行。换一套 IP，只要换一组本场角色，同样的设备就是另一场戏。</p>
          <div className="en-actions"><a className="en-button" href="#stories">换一套 IP 试试 <span>↓</span></a><a className="en-text-link" href="/one">这一切背后，只有一台 One ↗</a></div>
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
          <header className="en-heading"><div><p className="en-label">01 / ONE STAGE, MANY STORIES</p><h2>换一套 IP，<br />就是另一种相处。</h2></div><p>同样的桌面设备、同一台 One、同一个说话键。开团前给成员换一组本场角色，性格、说话方式、彼此的关系和接话的节奏全都跟着变。问同一句话，听听三个故事怎么回答。</p></header>
          <IpSwitcher />
          <div className="en-swap">
            <article><span>换一组本场角色，换掉的是</span><ul><li>角色与性格</li><li>说话方式</li><li>角色之间的关系</li><li>谁接话、怎么接</li><li>这一场的交流目标</li></ul></article>
            <article><span>一直不变的是</span><ul><li>同一台 Eidolon One</li><li>同一套桌面设备</li><li>同一个说话键和手机 App</li><li>伙伴原来的身份和私聊，结束后一切照旧</li></ul></article>
          </div>
          <p className="en-stories-more">本场角色写什么都行：名著里的人物、你喜欢的故事，或者干脆留空，让小铮、青芽、澄澄、烁烁、团团用自己的身份来聊。<a href="/companions">认识五位伙伴 ↗</a></p>
          <p className="en-stories-note">示例角色取材自古典名著《西游记》《三国演义》《红楼梦》</p>
        </div>
      </section>

      <section className="en-section en-modes" id="modes">
        <div className="page-frame">
          <header className="en-heading"><div><p className="en-label">02 / FOUR WAYS TO PLAY</p><h2>一场团队，<br />四种聊法。</h2></div><p>点选下面四种聊法，看看一句话怎样从说话键进来、由谁接话、在哪台设备上说出来。你不需要了解设备如何通信，只需要知道现在谁在说。</p></header>
          <EnsembleStage />
        </div>
      </section>

      <section className="en-section en-body">
        <div className="page-frame">
          <header className="en-heading"><div><p className="en-label">03 / COMPANION · ROLE · DEVICE</p><h2>伙伴是伙伴，<br />角色只演这一场。</h2></div><p className="en-prose">烁烁是一直陪你的那位伙伴；这一场，TA 扮演悟空；桌上的小设备，是 TA 此刻说话的地方。三者分开，团队结束，一切回到原样。</p></header>
          <div className="en-body-diagram">
            <article className="en-body-role"><span>COMPANION · 住在 One 里</span><b>烁烁</b><ul><li>长期的名字与性格</li><li>你们的私聊和共同经历</li></ul></article>
            <i aria-hidden="true">这一场扮演</i>
            <article className="en-body-cast"><span>ROLE · 只在这一场</span><b>悟空</b><ul><li>角色名与角色说明</li><li>开始后固定，结束就卸下</li></ul></article>
            <i aria-hidden="true">借用</i>
            <article className="en-body-device"><span>DEVICE · 此刻的身体</span><b>桌面设备</b><ul><li>在团队里只发声</li><li>一次只有一台在说</li></ul></article>
            <ol className="en-body-rules">
              <li><b>团队结束，</b>每台设备回到原来的伙伴和单聊。</li>
              <li><b>团队里说的话，</b>不会被当成真事记进伙伴的记忆。</li>
              <li><b>参加团队的设备，</b>这一场结束前先不单聊。</li>
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
                <li><b>一步一步接话</b><p>没有排好的顺序：前一位说完，再决定下一位；正在想的那台显示「思考中」。</p></li>
                <li><b>一按就停</b><p>按下说话键，所有设备同时停下；没说完的半句不算数，旧话题不会再冒出来。</p></li>
                <li><b>私聊不带进团队</b><p>团队里只用这一场公开说过的话；你和伙伴的私聊、记忆都不会被带进来。</p></li>
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
            <div><p>IP 方提供角色设定与说话风格，用户家里已有的桌面设备就能开演。Eidolon One 负责多角色接话、跨设备呈现和权限；团队里的对话只属于这一场，用户的私聊和数据留在用户自己的主机上——不必为每个 IP 各做一套 App 和云端。</p></div>
          </div>
        </div>
      </section>

      <section className="en-section en-status">
        <div className="page-frame">
          <p className="en-label">GET STARTED</p>
          <h2>四步，<br />开一场团队。</h2>
          <ol className="en-start">
            <li><span>01</span><b>准备一台 Eidolon One</b><p>伙伴、角色和所有设备，都由这台主机统一托起。</p><a href="/one">了解 Eidolon One ↗</a></li>
            <li><span>02</span><b>选好成员</b><p>在手机上选几台已经有伙伴的桌面设备当成员，再选一个按键说话器用来开口。</p></li>
            <li><span>03</span><b>派本场角色</b><p>给每位成员填一个本场角色和角色说明；还可以写下交流目标、设好连续回复的次数。留空就用伙伴原来的身份。</p></li>
            <li><span>04</span><b>开始团队</b><p>点「开始团队」，按住说话键就能聊；聊完在手机上点「结束团队」。</p></li>
          </ol>
        </div>
      </section>

      <section className="closing-section compact-closing en-closing">
        <p>ONE HOST · ONE CAST · MANY DEVICES</p>
        <h2>一台 One，<br />托起整个角色团。</h2>
        <div className="actions"><a className="primary-action light" href="/one">认识 Eidolon One</a><a className="text-action on-dark" href="/smart-home">再看看智能家居 ↗</a></div>
      </section>
    </main>
  );
}
