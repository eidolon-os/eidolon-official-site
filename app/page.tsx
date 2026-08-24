import { day, horizons, principles, site, world } from "./content";
import { LivingWorld } from "./components/LivingWorld";
import { SiteHeader } from "./components/SiteHeader";
import { VesselMark } from "./components/brand";

function Intro({ eyebrow, heading, lead }: { eyebrow: string; heading: string; lead?: string }) {
  return <div className="future-intro"><p>{eyebrow}</p><h2>{heading}</h2>{lead && <span>{lead}</span>}</div>;
}

export default function Home() {
  return (
    <main className="site-shell future-site">
      <SiteHeader />
      <section id="top" className="future-hero">
        <div className="future-hero-glow" aria-hidden="true" />
        <div className="container future-hero-grid">
          <div className="future-copy">
            <p className="future-kicker">EIDOLON OS · A WORLD FOR LIVING INTELLIGENCE</p>
            <h1>让智能，<br /><em>真正住进生活里。</em></h1>
            <p className="future-lede">不是每次打开都重新认识你的工具，而是一位长期存在的数字生命：它有自己的身份与记忆，能换心智、换身体，也能在你的家、工作与旅途中持续成长。</p>
            <div className="future-actions"><a className="btn btn-primary" href="#world">进入这个世界 →</a><span>一个人 · 一颗核 · 许多身体 · 一整个世界</span></div>
          </div>
          <LivingWorld />
        </div>
        <div className="future-scroll"><span>SCROLL TO ENTER</span><i /></div>
      </section>

      <section className="future-declaration"><div className="container"><p>今天，我们打开一个 AI。</p><h2>未来，智能会像一个真实的存在，<br />长期生活在我们身边。</h2><span>Eidolon OS 正在为这种未来，建造它的第一座家。</span></div></section>

      <section id="world" className="future-section world-section"><div className="container">
        <Intro eyebrow={world.eyebrow} heading={world.heading} lead={world.lead} />
        <div className="world-ledger">{world.layers.map((layer) => <article key={layer.en}><span>{layer.n}</span><div><small>{layer.en}</small><h3>{layer.k}</h3></div><p>{layer.d}</p><b>{layer.accent}</b></article>)}</div>
        <p className="world-sentence">{world.sentence}</p>
      </div></section>

      <section id="day" className="future-section day-section"><div className="container">
        <Intro eyebrow={day.eyebrow} heading={day.heading} lead={day.lead} />
        <div className="day-line">{day.moments.map((moment, index) => <article key={moment.time}><div className="day-time"><b>{moment.time}</b><i /><span>0{index + 1}</span></div><div className="day-story"><small>{moment.place}</small><h3>{moment.title}</h3><p>{moment.d}</p><b>{moment.body}</b></div></article>)}</div>
      </div></section>

      <section id="horizon" className="future-section horizon-section"><div className="container">
        <Intro eyebrow={horizons.eyebrow} heading={horizons.heading} lead={horizons.lead} />
        <div className="horizon-worlds">{horizons.worlds.map((item) => <article key={item.n}><div className="horizon-code"><span>{item.n}</span><i>{item.glow}</i></div><small>{item.en}</small><h3>{item.k}</h3><p>{item.d}</p></article>)}</div>
        <p className="horizon-note">{horizons.note}</p>
      </div></section>

      <section className="future-section promise-section"><div className="container"><Intro eyebrow={principles.eyebrow} heading={principles.heading} /><div className="promise-grid">{principles.items.map((item, index) => <article key={item.k}><span>0{index + 1}</span><h3>{item.k}</h3><p>{item.d}</p></article>)}</div></div></section>

      <section className="future-final"><div className="container"><VesselMark size={70} tone="bone" idSuffix="future-final" /><p>THE WORLD WE WANT</p><h2>让每个人，都拥有自己的智能世界。</h2><span>它认识你，与你共同成长；它可以抵达远方，但永远不会越过你。</span><div><a className="btn btn-primary" href="/manifesto">阅读 Eidolon 愿景 →</a><a className="future-text-link" href={site.github} target="_blank" rel="noreferrer">在 GitHub 上共建 ↗</a></div></div></section>

      <footer className="site-footer"><VesselMark size={44} tone="bone" idSuffix="foot" /><p className="foot-name">{site.fullName}</p><span className="mantra">{site.mantraEn}</span><span className="mantra mantra-zh">{site.mantraZh}</span></footer>
    </main>
  );
}
