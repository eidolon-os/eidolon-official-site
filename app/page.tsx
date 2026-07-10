const principles = [
  {
    title: "Identity before body",
    body: "Companion 是长期主体；桌面、手机、房间节点、机器人和网页只是它的投影。",
  },
  {
    title: "Memory as asset",
    body: "记忆带归属、来源、时效、纠错、导出和遗忘权，不被锁进某个云账号。",
  },
  {
    title: "Governance before action",
    body: "任何工具、设备、传感器和执行器都必须穿过 policy、scope、lease 与 audit。",
  },
];

const planes = [
  ["Sovereign Kernel", "Owner / Human / Agent / Space / Device / Policy / Audit 的信任根。"],
  ["Agent Runtime", "人格、推理、模型路由、工具调用、主动事件和长任务的跨身体运行时。"],
  ["Living Memory Fabric", "情节、语义、关系、程序和空间记忆被治理成可迁移资产。"],
  ["Body Mesh", "物理身体、虚拟身体、传感器、执行器、车机、机器人都是可替换节点。"],
  ["Context & Scene Graph", "地点、在场者、隐私状态、设备能力、环境事件组成当前世界边界。"],
  ["Extension & Governance", "EID-*、能力声明、认证、租约、撤销、OTA、审计和开发者接入。"],
];

const runtimePath = [
  "Perception Ingress",
  "Trust Gate",
  "Context Assembly",
  "Agent Deliberation",
  "Action Dispatch",
  "Memory Commit",
  "Feedback & Handoff",
];

const controlQuestions = [
  ["Who speaks?", "owner / speaker / device / session 被解析；麦克风输入不是身份。"],
  ["Who responds?", "companion 是长期主体；persona genome 是版本化状态；body 只是投影。"],
  ["Where does memory go?", "memory realm 归属 owner + companion；device 只作为来源维度。"],
  ["What can act?", "tool、body、task、actuator 都经 policy、scope、audit 与事件记录。"],
];

const moats = [
  {
    title: "身份与身体解耦",
    hard: "Human、Agent、Body、Scene 必须从系统第一天拆开；后补会牵动权限、记忆、路由和体验。",
    value: "换设备不换人，增加身体只是扩大同一个 Eidolon 的在场范围。",
  },
  {
    title: "可治理长期记忆",
    hard: "不是向量库检索，而是身份、来源、时间、敏感度、纠错、迁移和可审计遗忘的复合系统。",
    value: "用户相信它会记住，也相信自己能纠正、撤回、导出和删除。",
  },
  {
    title: "本地主权信任内核",
    hard: "声纹、私密模式、设备权限、敏感授权和审计要在本地优先的架构里稳定闭环。",
    value: "AI 可以进入家庭与工作空间，但控制权仍在用户手里。",
  },
  {
    title: "多身体实时编排",
    hard: "多麦、barge-in、floor、场景路由、身体迁移和状态同步比单聊天窗口复杂得多。",
    value: "一个智能体能从桌面说、从随身控、从房间看、从执行器做。",
  },
  {
    title: "Agent 到工具执行闭环",
    hard: "从回答到产出真实文件和动作，需要异步任务、权限、失败处理和结果写回记忆。",
    value: "用户交代的事情能被完成、回报、追踪和沉淀。",
  },
  {
    title: "协议化生态接口",
    hard: "设备生态不是开放 API，而是定义身份、能力、状态、租约、升级和认证全过程。",
    value: "第三方硬件和软件可以接入，但抢不走用户身份和记忆主权。",
  },
];

const eidSteps = [
  ["01", "Discover", "Hub 发现第三方身体、传感器、执行器或软件节点。"],
  ["02", "Declare", "节点提交 Capability Manifest，标注 exclusive/shared 与 safe/sensitive。"],
  ["03", "Authorize", "Owner 在场景边界内授予 scope、房间、companion 与有效期。"],
  ["04", "Lease", "独占或敏感能力经 Hub 获得 lease + epoch + priority + ttl。"],
  ["05", "Act", "Agent 只能发意图；物理动作由主权控制平面授予。"],
  ["06", "Audit", "每次调用留下 who / what / when / where / why 的可解释轨迹。"],
  ["07", "Remember", "结果按来源、归属、权限和遗忘策略写回 memory realm。"],
];

const scenes = [
  ["Home", "家里的长期数字成员：认得主人、记得关系、知道什么时候不该外放。"],
  ["Work", "从一句口头交代进入文件、流程、软件和长任务执行。"],
  ["Studio", "能听见想法、按需看见现场、沉淀风格和项目脉络。"],
  ["Care", "尊重隐私边界的低打扰陪伴、提醒与安全感。"],
  ["Robotics", "机器人是身体层；同一个 companion 可以换上移动身体。"],
  ["Ecosystem", "开发者接入能力，用户保留身份、记忆、权限和审计根。"],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="Eidolon OS home">
          <img src="/brand/seal/logo-full-lacquer.svg" alt="Eidolon" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#thesis">Thesis</a>
          <a href="#architecture">Architecture</a>
          <a href="#moat">Moat</a>
          <a href="#protocol">Protocol</a>
          <a href="#scenes">Scenes</a>
          <a href="https://github.com/eidolon-os" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Personal Sovereign Agent OS</p>
          <h1>个人 AI 时代的主权操作层。</h1>
          <p className="hero-lede">
            Eidolon OS 把身份、长期记忆、权限、身体、场景、工具和可选云算力收敛到用户拥有的 Sovereign Control Plane。
            它不是更强聊天入口，而是长期智能体连续存在的底座。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#architecture">
              <span aria-hidden="true">↓</span>
              Explore the blueprint
            </a>
            <a className="button button-secondary" href="https://github.com/eidolon-os" target="_blank" rel="noreferrer">
              <span aria-hidden="true">↗</span>
              github.com/eidolon-os
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Sovereign control plane system map">
          <div className="atlas-frame">
            <div className="atlas-header">
              <span>Runtime Identity Envelope</span>
              <span>local-first / cloud-optional</span>
            </div>
            <div className="atlas-body">
              <div className="atlas-ring atlas-ring-one" />
              <div className="atlas-ring atlas-ring-two" />
              <div className="atlas-ring atlas-ring-three" />
              <div className="atlas-axis atlas-axis-x" />
              <div className="atlas-axis atlas-axis-y" />
              <img className="atlas-mark" src="/brand/cyber/mark-neon.svg" alt="" />
              <div className="atlas-node atlas-owner">Owner root</div>
              <div className="atlas-node atlas-agent">Companion</div>
              <div className="atlas-node atlas-memory">Memory realm</div>
              <div className="atlas-node atlas-policy">Policy / audit</div>
              <div className="atlas-node atlas-body-node">Body mesh</div>
              <div className="atlas-node atlas-tools">Tools / actuators</div>
            </div>
            <div className="identity-chain">
              <code>owner_id → companion_id → memory_realm_id → genome_id → body/session → policy/event</code>
            </div>
          </div>
        </div>

        <div className="hero-principles">
          {principles.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="thesis" className="manifesto-section section-band">
        <div className="chapter-kicker">Why now</div>
        <div className="manifesto-copy">
          <p>
            AI 正在从“应用里的能力”升级为个人生活和工作的操作层。模型、硬件、入口和云服务都会持续变化；
            一旦 AI 开始承载长期记忆、任务权限、关系上下文和现实行动能力，真正稀缺的就变成：
          </p>
          <h2>谁拥有这个智能体，它如何持续存在，它能以什么边界进入现实世界。</h2>
        </div>
        <div className="comparison-board">
          <div>
            <span>Platform-owned Assistant</span>
            <p>优化账号、生态、云服务、硬件闭环和商业留存。</p>
          </div>
          <div>
            <span>User-owned Agent OS</span>
            <p>优化身份归属、记忆治理、权限撤销、身体调度和协议边界。</p>
          </div>
        </div>
      </section>

      <section id="architecture" className="architecture-section section-band">
        <div className="section-heading">
          <p className="eyebrow">OS architecture blueprint</p>
          <h2>六个平面，围绕一个稳定主权窄腰。</h2>
          <p>
            工程实现只是架构图的投影。模型、设备、传输、数据库和 UI 都可以替换；不能替换的是 owner、companion、memory realm、body、policy、event。
          </p>
        </div>

        <div className="architecture-plate">
          <div className="kernel-column">
            <span>Root invariant</span>
            <h3>Owner is root.</h3>
            <p>身份、记忆、设备、权限和审计都从用户或用户授权的家庭/团队空间出发。</p>
          </div>
          <div className="plane-stack">
            {planes.map(([title, body], index) => (
              <article className="plane-layer" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="runtime-strip" aria-label="Runtime interaction path">
          {runtimePath.map((step, index) => (
            <div className="runtime-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="control-section section-band">
        <div className="section-heading inverted-heading">
          <p className="eyebrow">Sovereign Control Plane</p>
          <h2>窄腰回答四个 OS 级问题。</h2>
          <p>
            这是 Eidolon 真正的系统资产：同一个 envelope 把多个入口、多个身体、多个运行时能力收敛到用户拥有的身份边界。
          </p>
        </div>
        <div className="control-map">
          <div className="control-spine">
            <span>owner_id</span>
            <span>companion_id</span>
            <span>memory_realm_id</span>
            <span>genome_id</span>
            <span>body / session</span>
            <span>policy / audit / event</span>
          </div>
          <div className="question-grid">
            {controlQuestions.map(([question, answer]) => (
              <article key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="moat" className="moat-section section-band">
        <div className="section-heading">
          <p className="eyebrow">Technical moat</p>
          <h2>壁垒不在某个模型或硬件，而在把算法、设备和工具编排进主权化多身体 OS。</h2>
        </div>
        <div className="moat-matrix">
          {moats.map((moat, index) => (
            <article key={moat.title}>
              <div className="matrix-index">{String(index + 1).padStart(2, "0")}</div>
              <h3>{moat.title}</h3>
              <dl>
                <dt>Why hard</dt>
                <dd>{moat.hard}</dd>
                <dt>User value</dt>
                <dd>{moat.value}</dd>
              </dl>
            </article>
          ))}
        </div>
        <div className="research-rail">
          <span>Research bets</span>
          <p>可审计遗忘的主权记忆 / 主权 Floor 协议形式化 / 多人格仲裁 / 自组织麦阵 / 跨身体人格连续性</p>
        </div>
      </section>

      <section id="protocol" className="protocol-section section-band">
        <div className="section-heading inverted-heading">
          <p className="eyebrow">EID-* Protocol Family</p>
          <h2>开放的是身体和能力，保留的是身份、记忆、权限和审计。</h2>
          <p>
            EID-* 的意义类似 OS 的稳定接口契约：第三方设备贡献传感和执行能力；Eidolon Hub 保留身份、记忆、权限、审计和调度权。
          </p>
        </div>
        <div className="protocol-flow">
          {eidSteps.map(([num, title, body]) => (
            <article key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lighthouse-section section-band">
        <div className="lighthouse-visual" aria-hidden="true">
          <img src="/brand/seal/mark-paper-card.svg" alt="" />
          <span className="pulse-line pulse-one" />
          <span className="pulse-line pulse-two" />
          <span className="pulse-line pulse-three" />
        </div>
        <div className="lighthouse-copy">
          <p className="eyebrow">Product lighthouse</p>
          <h2>Council 只是第一束光，不是边界本身。</h2>
          <p>
            一个 owner，多个 companion，多个 body，一个 Hub，一份 memory，一个 Cowork 执行器。
            它把抽象 OS 能力翻译成五个用户能感知的瞬间：认得我、记得我、会分身、看得见、做得完。
          </p>
          <div className="moment-list">
            <span>Recognize me</span>
            <span>Remember me</span>
            <span>Split bodies</span>
            <span>See on demand</span>
            <span>Finish the task</span>
          </div>
        </div>
      </section>

      <section id="scenes" className="scenes-section section-band">
        <div className="section-heading">
          <p className="eyebrow">Scene horizon</p>
          <h2>从陪伴到执行，从房间到机器人，从个人到生态。</h2>
        </div>
        <div className="scene-timeline">
          {scenes.map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-section section-band">
        <div>
          <p className="eyebrow">For builders and believers</p>
          <h2>开发者看到的是可扩展 OS 接口；投资人看到的是个人 AI 时代的主权窄腰。</h2>
        </div>
        <a className="button button-primary" href="https://github.com/eidolon-os" target="_blank" rel="noreferrer">
          <span aria-hidden="true">↗</span>
          Open source on GitHub
        </a>
      </section>

      <footer className="site-footer">
        <img src="/brand/seal/seal-badge.svg" alt="" />
        <p>Eidolon OS</p>
        <span>Identity before body. Memory as asset. Sovereignty as the control plane.</span>
      </footer>
    </main>
  );
}
