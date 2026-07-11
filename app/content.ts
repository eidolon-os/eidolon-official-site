// 全站内容源 —— 科技产品叙事式（Linear/Vercel 语气）：干练、笃定、系统性。
// 已弃：认得我/记得我五瞬间、钤印宣纸、陪伴腔。文案与呈现分离。

export const site = {
  name: "Eidolon",
  fullName: "Eidolon OS",
  title: "Eidolon OS | Personal Sovereign Agent OS",
  positioningEn: "Personal Sovereign Agent OS",
  positioningZh: "个人智能体主权操作系统",
  description:
    "Eidolon 是一套个人智能体操作系统：一个属于你的长期 AI，带着你的身份、记忆和权限，在你所有设备上持续存在。本地优先，云可选。",
  descriptionEn:
    "Eidolon OS — a personal Agent OS you own. One identity, portable memory, governed permissions, running across all your devices. Local-first, cloud-optional.",
  github: "https://github.com/eidolon-os",
  githubLabel: "github.com/eidolon-os",
  mantraEn: "Own the agent. Keep the memory. Hold the keys.",
  mantraZh: "拥有智能体 · 留住记忆 · 掌握权限",
} as const;

export const nav = [
  { label: "是什么", href: "#what" },
  { label: "能力", href: "#capabilities" },
  { label: "开发者", href: "/protocol" },
  { label: "为什么是 Eidolon OS", href: "/manifesto" },
] as const;

// ── Hero ──────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "Personal Sovereign Agent OS · 个人智能体主权操作系统",
  lede:
    "个人 AI 时代的操作层——一个由你掌控的主权中枢：收拢你的身份、记忆与权限，调度所有 AI、设备与工具。硬件会换、模型会换，这一层始终归你。",
  ctaPrimary: { label: "看它怎么工作", href: "#what" },
  ctaSecondary: { label: "为什么是 Eidolon OS", href: "/manifesto" },
} as const;

// ── 1 · 现状：今天的 AI 不属于你 ──────────────────────────────────────
export const problem = {
  eyebrow: "现状",
  heading: "AI 越来越强，却始终不是你的。",
  lede:
    "模型每年翻倍地强。可它越是能替你记事、替你做事、走进你的家和工作，有几个被所有产品绕开的问题就越尖锐——而它们指向同一件事：这个越来越懂你的智能体，到底归谁。",
  items: [
    {
      title: "它到底归谁",
      body: "你把时间、习惯和信任都喂给了它，它却绑在平台账号上——换个 App 就重新做人，注销账号它就当没认识过你。你投入越深，反而越不属于你。",
    },
    {
      title: "记忆是你的资产，还是它的养料",
      body: "你沉淀的一切都存在厂商云里，成了平台的留存与推荐资产：你看不到全貌、改不了错、导不出来，也无法验证它真的删干净了。",
    },
    {
      title: "换台设备，它就断片",
      body: "它被锁在一台设备、一个入口里。换手机得从头再来，硬件一停服就只剩空壳——AI Pin 已经演示过：云一断，再贵的设备也丢了灵魂。",
    },
    {
      title: "它能动手了，边界却没人定",
      body: "当它开始调用工具、进入现实，问题就从「答得对不对」变成「谁授权、谁追责、能不能撤回」。今天只有两种选择：钥匙全交，或什么都不敢让它碰。",
    },
  ],
} as const;

// ── 2 · Eidolon 是什么（合并 总览+主张+为什么现在，前置）──────────────
export const whatIs = {
  eyebrow: "Eidolon",
  heading: "不是又一个 AI 应用，是一套你拥有的操作系统。",
  lede:
    "AI 正在变成个人生活的操作层——而这一层，还没人把主权交给用户。Eidolon 把身份、记忆、权限和设备调度收进一个由你掌控的中枢：上面的模型能力随便换，下面的设备随便加，中间这条归你的中枢稳定不变。",
  contrasts: [
    { not: "把聊天机器人塞进音箱或机器人", is: "把长期智能体放进你的中枢，再连接不同设备" },
    { not: "又一个陪伴 App、又一个办公 Agent", is: "让记忆、执行、感知共用同一套底座" },
    { not: "和大厂比模型谁更强", is: "把身份、记忆、权限、设备调度权留在你手里" },
    { not: "一台会说话的单机设备", is: "任何设备都只是它一具可替换的身体" },
  ],
  stack: {
    top: { label: "能力与模型", note: "本地 / 私有云 / 公有云——可选、可换" },
    waist: { label: "你的主权中枢", assets: ["身份", "记忆", "权限 · 审计"], note: "稳定不变，归你" },
    bottom: { label: "设备网格", note: "手机 · 音箱 · 桌面 · 摄像头 · 机器人——可增、可换" },
  },
} as const;

// ── 3 · 你真正拥有的（主权资产，平台 → 你）────────────────────────────
export const assets = {
  eyebrow: "主权资产",
  heading: "交给别人的，现在归你。",
  lede: "平台默认把这些握在自己手里；Eidolon 把它们交回你手上。",
  items: [
    { title: "身份", plat: "绑在平台账号上", you: "一个从始至终属于你的智能体" },
    { title: "记忆", plat: "锁在厂商云里", you: "可查、可改、可导出、可删，换产品也带得走" },
    { title: "设备调度", plat: "锁死在一台设备", you: "同一个智能体，在你所有设备间连续存在" },
    { title: "权限", plat: "一次授权、之后不透明", you: "每个动作都要授权、留痕、可随时撤销" },
    { title: "数据", plat: "默认先上厂商云", you: "默认跑在你自己的设备上，云只是可选算力" },
  ],
} as const;

// ── 4 · 能力 ×4（替换五瞬间；每块配产品 UI，左右交替）────────────────
export const capabilities = {
  eyebrow: "能力",
  heading: "一个操作系统该有的能力，围绕「你」重建。",
  lede:
    "记忆、多设备、执行、治理——单拎出一项，别的 AI 也在做。真正的差别是：在 Eidolon 上，它们都长在一个由你拥有的主权底座上，那正是平台在结构上不愿交给你的那一半。",
  blocks: [
    {
      id: "memory",
      tag: "Living Memory · 归你的记忆",
      title: "记忆不再是它的养料，而是你的资产。",
      body: "别的 AI 也有记忆，但存在它的云里、服务于它的留存。Eidolon 的记忆带来源、置信度与归属：你能看、能改、能导出、能删，换产品也带得走。可治理的记忆，才敢真的托付。",
    },
    {
      id: "devices",
      tag: "Body Mesh · 附体迁移",
      title: "换设备不换人，走到哪它跟到哪。",
      body: "不是每台设备各装一个助手，而是同一个智能体在多具身体间连续存在：几台同时听见，只应答一次；走进另一个房间换台设备接着说，上下文不断线。身份和对话权，从不被某台硬件带走。",
    },
    {
      id: "task",
      tag: "Agent Runtime · 到执行的闭环",
      title: "交办的事，带着你的上下文做完。",
      body: "它能拆任务、调工具、跑后台长任务，把结果落成真实文件和动作。差别在于：它长期懂你、握着你的记忆与权限，交办不必每次从头解释，做完还按归属和权限写回记忆——不是一个转身就失忆的通用 Agent。",
    },
    {
      id: "govern",
      tag: "Trust Kernel · 本地主权",
      title: "它进得了你的家，因为钥匙一直在你手里。",
      body: "声纹、私密模式、敏感授权与审计都在本地优先地闭环——不是「承诺不看」，而是从架构上把身份、权限和记忆放进你的中枢。每次动手都要授权、留痕、可随时撤销；云端只是可选算力，不是默认的事实源。",
    },
  ],
} as const;

// ── 为什么是现在（战略帧：位移 + 三问 + 窗口 + 归属，融合蓝图 §摘要/§2）──
export const thesis = {
  eyebrow: "为什么是现在",
  heading: "AI 正在 OS 化，窗口才刚打开。",
  lead: "过去，「拥有一个属于自己的 AI」更像口号——智能全住在别人的云里，无从谈起。而此刻，三股力量同时到位，把它第一次变成能落地的工程：",
  drivers: [
    { n: "01", k: "AI 正在 OS 化", d: "它不再是某个应用里的聊天框，而开始跨设备、跨工具地承载你的记忆、权限、关系和现实行动。" },
    { n: "02", k: "端侧刚跨过拐点", d: "本地模型的能力与成本第一次让 AI 能常驻在你自己的设备上，而不必把一切都上交云端。" },
    { n: "03", k: "入口正在重新洗牌", d: "家庭语音 LLM 化、办公 Agent 能执行、随身硬件与家用机器人集中放量——个人 AI 的入口正被整体重写一遍。" },
  ],
  punch: "但个人主权层，还没人定义。",
  punchSub: "别人的 AI 属于平台——Eidolon 属于你。",
} as const;

// ── 四个关键词（名字即架构，融合蓝图 §1.1）——核心价值 ────────────────
export const keywords = {
  eyebrow: "拆开这个名字",
  heading: "四个词，每个都是一根承重柱。",
  lede: "「个人智能体主权操作系统」不是堆形容词，是四层缺一不可的主张。",
  items: [
    { k: "个人", en: "Personal", d: "AI 时代的基本单位不再是账号或设备，而是一个人所拥有的长期智能体宇宙——家庭、团队、车、机器人都是它的延展。" },
    { k: "智能体", en: "Agent", d: "不是聊天窗口，而是有记忆、有人格、能调用工具、能持续完成目标的长期数字成员。" },
    { k: "主权", en: "Sovereign", d: "当 AI 承载你的记忆、关系和生活轨迹，控制权本身就是价值——身份、记忆、权限、数据、身体调度权都归你。" },
    { k: "操作系统", en: "OS", d: "不是一个 App 或一台硬件，而是连接智能、身体、工具、记忆和场景的底层调度层，所有入口都跑在同一个 Eidolon 上。" },
  ],
} as const;

// ── 收尾 · 走向（只留前瞻 + CTA）──────────────────────────────────────
export const closing = {
  eyebrow: "走向 · Where it goes",
  heading: "这一层，该由你拥有。",
  sub: "AI 正在变成个人生活的操作层——我们把它开源，和你一起定义。",
  cta: { label: "在 GitHub 上开源", href: site.github },
} as const;

// ── 子页复用：产品宪法 / 六平面 / 协议 / 壁垒 / 术语 ─────────────────────
export const constitution = [
  { n: "01", title: "主权高于便利", body: "当便利与主权冲突时，先保主权。宁可多问一句，也不替用户把权限让渡出去。" },
  { n: "02", title: "身份先于身体", body: "先有长期的智能体，再谈它用什么设备在场。换设备、加机器人，都不改变它是谁。" },
  { n: "03", title: "记忆成为资产", body: "记忆带归属、来源、时效、纠错、导出与遗忘权，归用户所有，可携带、可审计。" },
  { n: "04", title: "编排高于入口", body: "价值不在多一个入口，而在把身份、记忆、权限、设备与工具编排起来。" },
  { n: "05", title: "关系驱动能力生长", body: "它对你的理解越深，能替你做的越多；能力从关系里长出来，而非堆砌功能。" },
  { n: "06", title: "协议定义生态边界", body: "用开放协议接入第三方能力，用身份与记忆主权划定不可让渡的边界。" },
] as const;

export const planes = {
  lede: "模型、设备、传输、界面都可以换；不能换的是这条中枢——它回答四个问题：谁在说、谁来答、记忆去哪、什么能动手。",
  items: [
    { title: "主权内核", term: "Sovereign Kernel", body: "身份、策略、审计的信任根——谁是「根」由你定。" },
    { title: "智能体运行时", term: "Agent Runtime", body: "人格、推理、模型路由、工具调用的跨设备运行时。" },
    { title: "活记忆织体", term: "Living Memory Fabric", body: "一本带来源和时间戳的记忆账本：可查、可改、可导出、可删。" },
    { title: "身体网格", term: "Body Mesh", body: "手机、音箱、车机、机器人，都是可替换的身体节点。" },
    { title: "场景图", term: "Context & Scene Graph", body: "地点、在场者、隐私状态，构成此刻的世界边界。" },
    { title: "扩展与治理", term: "Extension & Governance", body: "开放协议、能力、租约、审计与开发者接入。" },
  ],
} as const;

export const protocol = {
  heading: "开放的是身体和能力，保留的是身份、记忆、权限和审计。",
  lede:
    "第三方硬件和软件可以贡献感知与执行能力；Eidolon Hub 保留身份、记忆、权限、审计与调度权。这是一套稳定的接入契约。",
  steps: [
    { n: "01", title: "Discover", body: "Hub 发现第三方身体、传感器、执行器或软件节点。" },
    { n: "02", title: "Declare", body: "节点提交能力清单，标注独占/共享、安全/敏感。" },
    { n: "03", title: "Authorize", body: "你在场景边界内授予范围、房间、伙伴与有效期。" },
    { n: "04", title: "Lease", body: "独占或敏感能力经 Hub 获得租约：epoch + 优先级 + 时限。" },
    { n: "05", title: "Act", body: "智能体只能发意图；物理动作由主权控制平面授予。" },
    { n: "06", title: "Audit", body: "每次调用留下 who / what / when / where / why 的可解释轨迹。" },
    { n: "07", title: "Remember", body: "结果按来源、归属、权限与遗忘策略写回记忆。" },
  ],
} as const;

export const whyNow = {
  heading: "价值正在从「某一次回答」，转移到「谁拥有这个智能体」。",
  lede:
    "当 AI 开始承载长期记忆、任务权限、关系上下文和现实行动能力，真正稀缺的不再是模型，而是：谁拥有它、它如何持续存在、它以什么边界进入现实世界。",
  trigger:
    "为什么是现在：端侧模型的能力与成本刚跨过拐点，消费级 AI 硬件开始放量——AI 第一次可以常驻在你自己的设备上，「拥有一个智能体」从理念变成了可落地的工程。",
  contrast: [
    { side: "平台拥有的助手", term: "Platform-owned Assistant", body: "优化账号、生态、云服务、硬件闭环和商业留存。" },
    { side: "用户拥有的智能体 OS", term: "User-owned Agent OS", body: "优化身份归属、记忆治理、权限撤销、设备调度和协议边界。" },
  ],
  moatHeading: "壁垒不在某个模型或硬件，而在把它们编排进一个主权化的多设备 OS。",
  moats: [
    { title: "身份与设备解耦", body: "换设备不换人，加设备只是扩大同一个智能体的在场范围。这必须从第一天拆开，后补会牵动全局。" },
    { title: "可治理的长期记忆", body: "带归属、来源、时效、纠错、迁移与可审计遗忘，用户才敢真的信任，也才敢放心把更多交给它。" },
    { title: "本地主权信任内核", body: "声纹、私密模式、敏感授权与审计在本地优先地闭环，AI 才进得了家庭和工作空间。" },
    { title: "多设备实时编排", body: "多麦、抢话、场景路由、身体迁移与状态同步，远比单聊天窗口复杂。" },
    { title: "到执行的闭环", body: "从回答到产出真实文件与动作，需要异步任务、权限、失败处理与结果写回。" },
    { title: "协议化生态接口", body: "第三方接得进来，却抢不走用户的身份与记忆主权。" },
  ],
} as const;

export const glossary = [
  { term: "主权 Sovereignty", plain: "最终说了算的是你：身份、记忆、权限、审计都从你出发。" },
  { term: "主权中枢 Control plane", plain: "上面各种能力、下面各种设备，都收束到中间一个由你掌控的枢纽。" },
  { term: "身体 Body", plain: "手机、音箱、车机、机器人——智能体用来在场和动手的可替换外壳。" },
  { term: "记忆域 Memory realm", plain: "属于你、可携带的长期记忆空间；能查、能改、能导出、能删。" },
  { term: "租约 Lease", plain: "设备或工具想动手，得先申请、被授权、有时限、留记录。" },
  { term: "审计 Audit", plain: "每一次动作都留下可解释的轨迹：谁、做了什么、何时、何地、为什么。" },
  { term: "EID-*", plain: "一套开放协议：第三方接得进来贡献能力，却拿不走你的身份和记忆。" },
] as const;
