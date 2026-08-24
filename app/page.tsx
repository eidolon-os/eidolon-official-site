import { SiteHeader } from "./components/SiteHeader";
import { EidolonOne } from "./components/EidolonOne";
import { LifeScenes } from "./components/LifeScenes";
import { VesselMark } from "./components/brand";
import { site } from "./content";

export default function Home() {
  return (
    <main className="site-shell product-story">
      <SiteHeader />

      <section id="top" className="product-hero">
        <div className="product-hero-copy">
          <p className="story-kicker">EIDOLON OS · YOUR PERSONAL AI</p>
          <h1>一个真正<br /><em>属于你的 AI。</em></h1>
          <p className="hero-deck">Eidolon OS 让同一个 AI 记得你的生活，接住没做完的事，并在手机、家、车与工作之间继续陪你。换模型、换设备，它都还是它。</p>
          <div className="story-actions"><a className="story-button" href="#os">了解 Eidolon OS</a><a className="story-link" href="/one">认识 One 主机 <i>↗</i></a></div>
          <div className="hero-promises" aria-label="Eidolon 的三个承诺"><span><b>认识你</b>共同经历不会归零</span><span><b>跟随你</b>事情在场景间继续</span><span><b>属于你</b>记忆与决定由你掌握</span></div>
        </div>
        <EidolonOne />
      </section>

      <section className="category-statement">
        <p>今天的 AI 住在一个个 App 里。每次打开，都像第一次见你。</p>
        <h2>Eidolon OS 不再造一个新的助手。<br />它让你第一次拥有<em>同一个 AI。</em></h2>
        <div className="category-change" aria-label="产品范式变化"><span>一堆彼此失忆的助手</span><i>→</i><b>一个持续存在的 Eidolon</b></div>
      </section>

      <section id="philosophy" className="philosophy-section">
        <header className="story-heading"><span>01 · THE EIDOLON PRINCIPLE</span><h2>产品的中心不是模型。<br />是一个真实的人。</h2><p>所以我们用三个简单原则做所有决定。它们既是用户得到的体验，也是 Eidolon 不会越过的边界。</p></header>
        <div className="principle-run">
          <article><span>01</span><h3>认识你</h3><p>记得共同经历、你的偏好与正在进行的事。不是把所有数据塞进提示词，而是知道什么在此刻真正相关。</p><small>LONG-TERM MEMORY</small></article>
          <article><span>02</span><h3>跟随你</h3><p>同一件事从手机到车、从耳机到桌面自然继续。设备只是入口，不会各自养出一个新的、失忆的你。</p><small>CONTINUITY ACROSS PLACES</small></article>
          <article><span>03</span><h3>属于你</h3><p>你能带走记忆、换掉模型、撤回设备、看见行动依据。能力可以越来越强，权力不能越过你的允许。</p><small>USER SOVEREIGNTY</small></article>
        </div>
      </section>

      <section id="life" className="life-section">
        <header className="story-heading light"><span>02 · ONE LIFE, ONE CONTINUITY</span><h2>不是“人、车、家”三套 AI。<br />是同一个 Eidolon，接住你的一天。</h2><p>它跟随的是事情的前因后果，不是把所有隐私复制到所有设备。</p></header>
        <LifeScenes />
      </section>

      <section id="os" className="one-section os-section">
        <header className="story-heading"><span>03 · THE PRODUCT</span><h2>Eidolon OS<br />一个 AI，多种存在方式。</h2><p>OS 是完整产品；One 是承载它的主机。手机、桌面、耳机、车与机器人则是同一个 Eidolon 获得的入口与身体。</p></header>
        <div className="os-product-map">
          <div className="os-presence"><span>PRESENCE</span><h3>随你出现</h3><p>手机 · 桌面 · 耳机</p><small>交互入口随场景改变，但不会产生新的身份。</small></div>
          <div className="os-core-product"><VesselMark size={76} tone="bone" idSuffix="os-product" /><span>EIDOLON OS</span><h3>记忆、关系与决定<br />都在这一层连续</h3><p>Core · Memory · Authority · Tasks</p></div>
          <div className="os-connect"><span>CONNECT</span><h3>进入现实</h3><p>家 · 车 · 机器人</p><small>设备按范围取得能力，离开场景即可撤回。</small></div>
        </div>
        <div className="one-home-teaser">
          <div><span>THE FIRST HOST</span><h3>Eidolon One</h3><p>一台具体的个人 AI 主机，把 Eidolon OS 的长期状态安放在你掌握的设备里。</p><a className="story-link" href="/one">查看 One 与外设产品设想 <i>↗</i></a></div>
          <EidolonOne />
        </div>
      </section>

      <section id="architecture" className="plain-architecture">
        <header className="story-heading"><span>04 · HOW IT WORKS</span><h2>Eidolon 不是模型。<br />它是不会换主人的那一层。</h2><p>架构只服务一个直观结果：模型可以升级，设备可以更换，属于你的连续性不能被带走。</p></header>
        <div className="relation-map">
          <div className="relation-owner"><span>OWNER</span><h3>你</h3><p>拥有、恢复、决定</p></div>
          <i className="relation-arrow" />
          <div className="relation-core"><VesselMark size={68} tone="bone" idSuffix="map" /><span>EIDOLON CORE</span><h3>记忆你，代表你，向你负责</h3><p>长期记忆 · 身份与关系 · 权限边界 · 任务状态 · 行动记录</p></div>
          <i className="relation-arrow" />
          <div className="relation-world"><div><span>MINDS</span><b>本地模型 / 云模型 / Agents</b></div><div><span>PLACES</span><b>手机 / 家 / 车 / 工作 / 机器人</b></div><p>它们提供能力与身体，但不拥有你。</p></div>
        </div>
        <p className="architecture-plain">每个场景得到的不是你的全部数据，而是一份有范围、有期限、可随时收回的能力。Eidolon 知道信息从哪里来、为何被使用、结果去了哪里。</p>
      </section>

      <section id="company" className="company-section">
        <header className="story-heading light"><span>05 · WHY THIS BECOMES A PLATFORM</span><h2>从一个人每天离不开，<br />到所有智能设备都愿意接入。</h2><p>这是 Eidolon 对投资人的产品逻辑：先用“连续的个人 AI”建立高频关系，再把这份关系带进家庭与现实世界。</p></header>
        <div className="growth-path">
          <article><span>ENTER</span><h3>个人</h3><p>以记忆、任务接力与主权控制切入，成为每天真正使用的个人 AI。</p><b>Core 软件 / Eidolon One</b></article><i>→</i>
          <article><span>EXPAND</span><h3>家庭与场景</h3><p>家人建立共同空间；汽车、空间和设备成为同一个 Eidolon 的新入口。</p><b>家庭方案 / 场景服务</b></article><i>→</i>
          <article><span>PLATFORM</span><h3>身体网络</h3><p>品牌与开发者不用再从零训练一个助手，而是安全接入用户已经拥有的关系。</p><b>EID-* 协议 / OEM 授权</b></article>
        </div>
        <div className="moat-statement">
          <p>大厂可以复刻功能，<br />却很难成为跨模型、跨品牌的中立层。</p>
          <div><h3>壁垒会随使用共同生长</h3><span>更深的个人语境</span><i>×</i><span>更明确的授权关系</span><i>×</i><span>更多可用的现实身体</span><i>×</i><span>更长期的信任</span><small>这些资产由用户拥有，却让 Eidolon 成为最值得托付的承载方式。开放不是削弱壁垒，而是建立中立地位的前提。</small></div>
        </div>
      </section>

      <section className="future-section">
        <p>从一个人的 AI 主权开始</p>
        <div className="future-line"><span>个人 Eidolon</span><i /><span>家庭共同空间</span><i /><span>车与具身设备</span><i /><span>代表人的智能体社会</span></div>
        <h2>未来不是每件设备都有一个 AI。<br />而是每个人，都真正拥有一个。</h2>
        <div className="story-actions"><a className="story-button light" href="/manifesto">阅读完整愿景</a><a className="story-link on-dark" href="/protocol">了解 EID-* 协议 ↗</a></div>
      </section>

      <footer className="story-footer"><VesselMark size={36} tone="bone" idSuffix="footer-new" /><p>{site.fullName}</p><span>Your AI. Your memory. Your authority.</span><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a></footer>
    </main>
  );
}
