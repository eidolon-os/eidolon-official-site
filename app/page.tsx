const planes = [
  {
    name: "Sovereign Kernel",
    label: "主权内核",
    body: "Owner、Human、Agent、Space、Device、Scope、Policy、Audit 从用户主权根出发，而不是平台账号。",
  },
  {
    name: "Agent Runtime",
    label: "智能体运行时",
    body: "人格、推理、模型路由、工具调用、主动事件、长任务分派运行在同一个跨身体执行层。",
  },
  {
    name: "Living Memory Fabric",
    label: "可治理长期记忆",
    body: "情节、语义、关系、程序和空间记忆带来源、时效、纠错、遗忘、导出和迁移能力。",
  },
  {
    name: "Body Mesh",
    label: "多身体网络",
    body: "ESP32、Web、房间节点、视觉节点、车机、机器人和第三方硬件都是可替换身体。",
  },
  {
    name: "Context & Scene Graph",
    label: "场景图",
    body: "地点、在场者、隐私模式、能力占用、声学与视觉上下文被组合成当前世界状态。",
  },
  {
    name: "Extension & Governance",
    label: "扩展与治理平面",
    body: "EID-* 协议、能力声明、认证、租约、审计、撤销和健康监控定义生态边界。",
  },
];

const chain = [
  "Perception Ingress",
  "Trust Gate",
  "Context Assembly",
  "Agent Deliberation",
  "Action Dispatch",
  "Memory Commit",
  "Feedback & Handoff",
];

const moats = [
  ["身份与身体解耦", "Human、Agent、Body、Scene 分离建模；换硬件不换人格、记忆和关系。"],
  ["可治理长期记忆", "记忆不是向量库堆积，而是带归属、来源、确认、删除和迁移的个人资产。"],
  ["本地主权信任内核", "Hub、声纹、私密模式、敏感授权和审计日志构成默认在用户侧的信任根。"],
  ["多身体实时编排", "LiveKit/WebRTC 处理媒体，Hub 处理 floor、场景、权限和身体迁移。"],
  ["Agent 到工具闭环", "从对话进入 Cowork、文件、任务、设备动作，再把结果写回主权数据层。"],
  ["协议化生态接口", "EID-Pair、Room、Media、Tools、State、Vision、Task、Memory、OTA 定义可认证生态。"],
];

const protocols = [
  ["EID-Pair", "设备身份、绑定、权限令牌", "已实现"],
  ["EID-Media", "低延迟语音、PTT、barge-in、TTS/STT", "已实现"],
  ["EID-Memory", "记忆写入、召回、归属、审计", "已实现"],
  ["EID-Task", "长任务、后台执行、文件产出", "已实现"],
  ["EID-Room", "场景、房间、floor 发言权", "部分"],
  ["EID-State", "状态、遥测、存在性", "部分"],
  ["EID-Tools", "设备能力发现与调用", "部分"],
  ["EID-Capability", "通用能力租约、epoch、priority、ttl", "规划"],
  ["EID-Vision", "按需拍照、场景摘要、隐私灯", "规划"],
];

const council = [
  ["2.06 PTT", "主人的随身控制器", "私密确认、授权按钮、任务状态"],
  ["BOX-3 Xiao Yi", "陪伴 / 记忆 Agent", "情绪承接、长期关系、主动关怀"],
  ["BOX-3 A Ce", "分析 / 执行 Agent", "拆解问题、生成方案、派发任务"],
  ["Vision Node", "空间感知节点", "按需看见桌面、便签、设备和房间状态"],
  ["Cowork Node", "后台执行器", "操作软件、整理文件、跑长任务、回报结果"],
];

const scenarios = [
  ["家庭陪伴", "家里的长期数字成员，认得主人、记得关系，也知道什么时候不该外放。"],
  ["工作执行", "把口头交代变成文件、流程和软件操作，任务状态能回报、能追踪、能沉淀。"],
  ["创作助手", "随说随记、能看现场、能整理素材，长期理解创作者的风格和项目脉络。"],
  ["空间感知", "摄像头和房间节点成为受授权的眼睛，视觉上下文进入 Scene Graph。"],
  ["移动身体", "同一个 Companion 可以换上机器人身体，在安全租约下移动、靠近、巡检。"],
  ["开发者生态", "第三方 Body、Sensor、Actuator 通过 EID-* 接入，但身份和记忆仍归用户 Hub。"],
];

function StatusBadge({ status }: { status: string }) {
  const className =
    status === "已实现"
      ? "status status-live"
      : status === "部分"
        ? "status status-partial"
        : "status status-planned";

  return <span className={className}>{status}</span>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="Eidolon home">
          <img src="/brand/seal/logo-full-lacquer.svg" alt="Eidolon" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#architecture">架构</a>
          <a href="#moat">壁垒</a>
          <a href="#protocol">协议</a>
          <a href="#council">Council</a>
          <a href="https://github.com/eidolon-os" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <section id="top" className="hero-section section-band">
        <div className="hero-copy">
          <p className="eyebrow">Personal Sovereign Agent OS</p>
          <h1>让长期智能体住在用户自己的主权中枢里。</h1>
          <p className="hero-lede">
            Eidolon OS 不是一个聊天入口，也不是一台 AI 硬件。它是身份、记忆、权限、身体、场景、工具和云端算力之间的个人主权控制平面。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://github.com/eidolon-os" target="_blank" rel="noreferrer">
              <span className="button-mark">↗</span>
              Open Source
            </a>
            <a className="button button-secondary" href="#architecture">
              <span className="button-mark">↓</span>
              Explore Architecture
            </a>
          </div>
          <div className="hero-proof">
            <span>Local-first</span>
            <span>Cloud-optional</span>
            <span>Owner-owned identity</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Eidolon sovereign control plane visualization">
          <div className="control-plane">
            <div className="axis axis-x" />
            <div className="axis axis-y" />
            <div className="ring ring-one" />
            <div className="ring ring-two" />
            <div className="ring ring-three" />
            <img className="core-mark" src="/brand/cyber/mark-neon.svg" alt="" />
            <div className="orbit-node node-owner">Owner</div>
            <div className="orbit-node node-agent">Companion</div>
            <div className="orbit-node node-memory">Memory Realm</div>
            <div className="orbit-node node-body">Body Mesh</div>
            <div className="orbit-node node-policy">Policy / Audit</div>
          </div>
          <div className="identity-envelope">
            <p>Runtime Identity Envelope</p>
            <code>owner_id → companion_id → memory_realm_id → genome_id → body/session → policy/event</code>
          </div>
        </div>
      </section>

      <section className="thesis-band section-band">
        <div className="section-heading">
          <p className="eyebrow">Why now</p>
          <h2>AI 正在 OS 化，但个人主权层还没有被定义。</h2>
        </div>
        <div className="thesis-grid">
          <div className="thesis-item">
            <span>01</span>
            <h3>缺的不是更强聊天入口</h3>
            <p>模型、设备、入口和云服务会持续变化；真正稀缺的是长期智能体的归属、边界和连续性。</p>
          </div>
          <div className="thesis-item">
            <span>02</span>
            <h3>大厂默认会做平台助手</h3>
            <p>平台助手天然服务账号、生态、硬件闭环和云服务。Eidolon 默认服务用户拥有的身份、记忆、权限和设备调度权。</p>
          </div>
          <div className="thesis-item">
            <span>03</span>
            <h3>硬件不是灵魂，身体只是投影</h3>
            <p>AI Pin 式云绑定硬件会随服务消失而失魂；Eidolon 把长期身份与记忆放在身体之上。</p>
          </div>
        </div>
      </section>

      <section id="architecture" className="architecture-band section-band">
        <div className="section-heading wide-heading">
          <p className="eyebrow">System architecture</p>
          <h2>六个平面，收敛到一个用户拥有的 Sovereign Control Plane。</h2>
          <p>
            工程实现可以替换，模型、传输、设备、UI 都可以演进；不能被替换的是 owner、companion、memory realm、body、policy、event 这条主权窄腰。
          </p>
        </div>
        <div className="plane-grid">
          {planes.map((plane, index) => (
            <article className="plane-card" key={plane.name}>
              <div className="plane-index">{String(index + 1).padStart(2, "0")}</div>
              <h3>{plane.name}</h3>
              <strong>{plane.label}</strong>
              <p>{plane.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="runtime-band section-band">
        <div className="section-heading">
          <p className="eyebrow">Runtime path</p>
          <h2>一次交互不是音频进模型，而是穿过完整 OS 边界。</h2>
        </div>
        <div className="runtime-flow" aria-label="Runtime interaction path">
          {chain.map((step, index) => (
            <div className="runtime-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="moat" className="moat-band section-band">
        <div className="section-heading wide-heading">
          <p className="eyebrow">Technical moat</p>
          <h2>壁垒不在某个模型或硬件，而在把算法、设备和工具编排进主权化多身体 OS。</h2>
        </div>
        <div className="moat-grid">
          {moats.map(([title, body]) => (
            <article className="moat-card" key={title}>
              <div className="moat-dot" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="research-strip">
          <div>
            <span>Flagship bet</span>
            <strong>可审计遗忘的主权记忆</strong>
          </div>
          <div>
            <span>Protocol bet</span>
            <strong>主权 Floor 协议形式化</strong>
          </div>
          <div>
            <span>Next wave</span>
            <strong>多人格仲裁 · 自组织麦阵 · 跨身体人格连续性</strong>
          </div>
        </div>
      </section>

      <section id="protocol" className="protocol-band section-band">
        <div className="section-heading">
          <p className="eyebrow">EID-* Protocol Family</p>
          <h2>开放的是身体和能力，保留的是身份、记忆、权限和审计。</h2>
        </div>
        <div className="protocol-table" role="table" aria-label="EID protocol family">
          {protocols.map(([name, role, status]) => (
            <div className="protocol-row" role="row" key={name}>
              <div className="protocol-name" role="cell">{name}</div>
              <div className="protocol-role" role="cell">{role}</div>
              <div className="protocol-status" role="cell"><StatusBadge status={status} /></div>
            </div>
          ))}
        </div>
      </section>

      <section id="council" className="council-band section-band">
        <div className="council-visual">
          <img src="/brand/seal/mark-paper-card.svg" alt="Eidolon seal mark" />
          <div className="council-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="section-heading council-heading">
          <p className="eyebrow">Product lighthouse</p>
          <h2>Eidolon Council：一个 owner，多个 companion，多个 body，一个 Hub，一份 memory，一个 Cowork 执行器。</h2>
          <p>
            Council 把抽象 OS 能力翻译成五个用户能感知的瞬间：认得我、记得我、会分身、看得见、做得完。
          </p>
        </div>
        <div className="council-list">
          {council.map(([device, role, value]) => (
            <article className="council-item" key={device}>
              <span>{device}</span>
              <h3>{role}</h3>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scenario-band section-band">
        <div className="section-heading wide-heading">
          <p className="eyebrow">Scenes</p>
          <h2>从陪伴到执行，从桌面到房间，从软件工具到机器人身体。</h2>
        </div>
        <div className="scenario-grid">
          {scenarios.map(([title, body]) => (
            <article className="scenario-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="developer-band section-band">
        <div className="developer-copy">
          <p className="eyebrow">For builders and believers</p>
          <h2>开发者接入身体，投资人看到 OS 级窄腰。</h2>
          <p>
            Eidolon 的生态不是“开放一个 API”，而是把设备注册、能力声明、认证、租约、撤销、OTA、审计和记忆边界变成可验证协议。第三方贡献传感和执行能力，用户保留最终授权、迁移、删除和主权归属。
          </p>
          <a className="button button-primary" href="https://github.com/eidolon-os" target="_blank" rel="noreferrer">
            <span className="button-mark">↗</span>
            github.com/eidolon-os
          </a>
        </div>
        <div className="developer-stack">
          <div>Reference SDK</div>
          <div>Conformance Tests</div>
          <div>Capability Manifest</div>
          <div>Works with Eidolon</div>
          <div>Trusted Body</div>
          <div>Actuator Safe</div>
        </div>
      </section>

      <footer className="site-footer">
        <img src="/brand/seal/seal-badge.svg" alt="" />
        <p>Eidolon OS</p>
        <span>Identity before body. Memory as asset. Sovereignty as the control plane.</span>
      </footer>
    </main>
  );
}
