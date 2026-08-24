export const site = {
  name: "Eidolon",
  fullName: "Eidolon OS",
  title: "Eidolon OS | Personal AI Continuity Infrastructure",
  positioningEn: "Personal AI Continuity Infrastructure",
  positioningZh: "个人 AI 连续性基础设施",
  description: "Eidolon OS 把身份、记忆、权限、设备状态与行动结果留在一个由你拥有的中枢里。模型会换，身体会换；你的连续性不必重新开始。",
  descriptionEn: "The continuity layer for personal AI: owner-controlled identity, memory, authority, bodies, and outcomes. Local-first, cloud-optional.",
  github: "https://github.com/eidolon-os",
  githubLabel: "github.com/eidolon-os",
  mantraEn: "Identity before body. Continuity before capability.",
  mantraZh: "身份先于身体，连续性先于能力。",
} as const;

export const nav = [
  { label: "产品", href: "/#product" },
  { label: "壁垒", href: "/#moat" },
  { label: "证据", href: "/#evidence" },
  { label: "研究与投资", href: "/manifesto" },
  { label: "开发者", href: "/protocol" },
] as const;

export const continuity = {
  eyebrow: "The continuity stack",
  heading: "真正会复利的，不是模型能力。是每一次被验证过的连续状态。",
  lead: "大模型把能力普及了，也把单点功能的半衰期压到了最低。Eidolon 把竞争面从“这次回答有多强”移到“多年以后，它仍知道自己是谁、代表谁、记得什么、能做什么”。",
  layers: [
    { n: "01", k: "身份", en: "Identity", d: "一个 owner、一个长期 companion。身份不绑定某台硬件，也不随模型供应商变化。", state: "稳定根" },
    { n: "02", k: "记忆", en: "Memory", d: "带来源、时间、置信度、纠错和删除语义的个人知识资产，而不是一袋聊天向量。", state: "持续校正" },
    { n: "03", k: "权限", en: "Authority", d: "谁允许了什么、在何种场景下允许、何时撤销，形成可审计的行动边界。", state: "逐次验证" },
    { n: "04", k: "身体", en: "Bodies", d: "手机、桌面、音箱、视觉节点和机器人只是可替换端点，共享同一身份与上下文。", state: "不断扩展" },
    { n: "05", k: "结果", en: "Outcomes", d: "完成、失败、确认与回滚都写回系统，下一次执行继承经验，而不是重新猜一次。", state: "形成经验" },
  ],
} as const;

export const product = {
  eyebrow: "Product wedge",
  heading: "先做一位真正交付结果的桌面数字同事。",
  lead: "不从“全能家庭管家”开始。第一战场是创作者、顾问与小团队主理人的桌面：高频语音输入、长项目记忆、跨工具执行和明确的时间回报，在一个场景里同时验证连续性、信任与付费意愿。",
  moments: [
    { n: "01", k: "说出来", d: "随口交代想法、承诺与任务，不需要重新组织成 prompt。" },
    { n: "02", k: "接得住", d: "识别项目、人物与前情，知道哪些记忆可信、哪些需要确认。" },
    { n: "03", k: "做下去", d: "拆任务、调工具、产出文件；敏感动作在权限门前停下。" },
    { n: "04", k: "带回来", d: "主动汇报结果、失败与下一步，把真实产出写回项目脉络。" },
    { n: "05", k: "换身体", d: "从桌面到手机再到机器人，身份、上下文和责任链保持连续。" },
  ],
  focus: [
    { k: "首批用户", v: "创作者 / 顾问 / 小团队主理人", d: "任务密度高、上下文长、时间价值明确。" },
    { k: "北极星指标", v: "每周被可信完成的任务数", d: "不是消息量、token 或陪聊时长。" },
    { k: "付费理由", v: "更低的交代成本 + 可验证的结果", d: "关系连续性必须转化成执行 ROI。" },
  ],
} as const;

export const evidence = {
  eyebrow: "Evidence, not adjectives",
  heading: "把“系统”从一个称呼，变成一组可复核的证据。",
  lead: "下面是当前工程基线，不是市场成绩，也不伪装成已经完成的产品成熟度。下一阶段的核心任务，是让性能证据继续长出留存、信任、付费与生态证据。",
  metrics: [
    { value: "96.1%", label: "LongMemEval 检索 Recall@5", note: "500 题公开基准复现 · 零 LLM 调用" },
    { value: "98.9 ms", label: "记忆召回端到端 p50", note: "49 次真实链路查询 · 300 ms 预算" },
    { value: "664 ms", label: "语音结束到首帧语音 p50", note: "真机重复会话基线 · p95 777 ms" },
  ],
  maturity: [
    { state: "已形成", k: "主权控制面", d: "Owner / Companion / Device / Mount 的权威边界与审计路径已经落到独立服务。" },
    { state: "已形成", k: "长期记忆热路径", d: "向量召回、双时序知识图谱、来源与隐私语义、灾备重放均有实现与评测。" },
    { state: "正在闭环", k: "多身体连续体验", d: "设备准入、会话、语音链路已通；Floor 权威与附体迁移仍需产品级验收。" },
    { state: "必须证明", k: "市场证据", d: "付费留存、任务完成率、信任事件、OEM 接入周期与单位经济尚待真实用户验证。" },
  ],
} as const;

export const dataStrategy = {
  eyebrow: "A data advantage without data possession",
  heading: "数据不必归公司，系统仍然可以变得更难复制。",
  lead: "如果“主权”最后变成把用户数据集中到另一朵云里，Eidolon 就失去了存在理由。数据飞轮必须被重新设计：原始个人数据留在用户侧；公司积累的是经同意、去身份化或在本地完成计算后得到的系统证据。",
  lanes: [
    { k: "用户持有", en: "OWNER-HELD", items: ["原始对话与声像", "长期记忆与个人图谱", "权限与关系边界", "完整导出与删除权"] },
    { k: "本地派生", en: "EDGE-DERIVED", items: ["匿名失败类别", "延迟与资源曲线", "策略命中/拒绝统计", "设备兼容结果"] },
    { k: "公司复利", en: "COMPANY-COMPOUNDED", items: ["评测与红队语料", "协议一致性套件", "场景策略包", "认证与部署知识"] },
  ],
  rule: "不上传原始个人数据，也能让每一次部署改善下一次部署。",
} as const;

export const moats = {
  eyebrow: "Compounding moat",
  heading: "六层壁垒，只有第一层能被快速抄走。",
  lead: "功能会被复制，架构也会被研究。真正的防御来自多个慢变量叠加：时间、真实状态、评测纪律、生态接入、可信品牌和分发关系。",
  items: [
    { speed: "周", k: "功能与界面", d: "记忆、语音、任务、设备面板都可以被复刻。", kind: "copy" },
    { speed: "月", k: "跨域系统闭环", d: "身份、记忆、权限、设备与执行的一致性，需要真实失败才能磨合。", kind: "build" },
    { speed: "季", k: "评测与故障语料", d: "跨模型、跨硬件、跨场景的回归基线由每一次事故和修复累积。", kind: "compound" },
    { speed: "年", k: "用户连续状态", d: "被纠正过的记忆、授权史和任务结果形成个体经验；可迁移，但不能凭空生成。", kind: "compound" },
    { speed: "年", k: "OEM 与身体生态", d: "接入、认证、售后与渠道关系带来分发和切换成本。", kind: "network" },
    { speed: "长期", k: "主权信任品牌", d: "愿意把家庭、工作和行动权限交给谁，只能用长期无事故记录赢得。", kind: "trust" },
  ],
} as const;

export const route = {
  eyebrow: "Route to market",
  heading: "一个产品切口，三层价值放大。",
  phases: [
    { n: "L1", title: "参考产品", en: "Desktop colleague", d: "用桌面数字同事跑通高频使用、可信任务完成与跨设备连续性。它不是最终市场，是所有后续承诺的证据机。", proof: "付费留存 · 每周可信完成任务 · 多身体迁移成功率" },
    { n: "L2", title: "OEM 主权层", en: "Companion infrastructure", d: "向陪伴硬件、桌面机器人和私有化智能体厂商提供身份、记忆、权限、合规与设备接入底座。", proof: "首个第三方身体 · 接入周期 · 单台授权收入" },
    { n: "L3", title: "协议与认证", en: "Body ecosystem", d: "把 EID-* 变成“身体接入即受治理”的契约与认证体系；第三方贡献能力，中枢保留主权根。", proof: "认证设备数 · 活跃能力数 · 生态收入" },
  ],
} as const;

export const sources = [
  { k: "Agent 身份与授权成为标准议题", d: "NIST 在 2026 年启动 AI Agent Standards Initiative，并把 agent identity、authorization、audit 与 non-repudiation 列为核心问题。", href: "https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative", src: "NIST · 2026" },
  { k: "工具与 Agent 互联正在标准化", d: "Linux Foundation 已托管 MCP、A2A 等开放项目；连接层会逐步商品化，治理层反而更重要。", href: "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation", src: "Linux Foundation · 2025–2026" },
  { k: "长期记忆仍远未解决", d: "LongMemEval 显示，持续交互中的信息抽取、时间推理、知识更新与拒答仍是商用助手的显著难题。", href: "https://arxiv.org/abs/2410.10813", src: "LongMemEval · ICLR 2025" },
  { k: "监管正把连续交互变成治理问题", d: "中国《人工智能拟人化互动服务管理暂行办法》已于 2026 年 7 月施行，覆盖数据安全、用户权益、人机边界与风险干预。", href: "https://www.cac.gov.cn/2026-04/10/c_1777558395078289.htm", src: "国家网信办 · 2026" },
  { k: "可携带与互操作正在变成制度方向", d: "欧盟 DMA 要求守门人提供数据可携带与 OS 能力互操作，说明封闭平台的控制点正受到持续约束。", href: "https://digital-markets-act.ec.europa.eu/developer-portal/interoperability_en", src: "European Commission · DMA" },
] as const;

export const protocol = {
  eyebrow: "For developers",
  heading: "Build a body, not another silo.",
  lead: "EID-* 不试图替代 MCP、A2A 或 Matter。它定义一件更窄也更关键的事：一个设备或能力如何进入某个人的 Agent OS，并在身份、权限、租约与审计之下工作。",
  lifecycle: ["Discover", "Declare", "Authorize", "Lease", "Act", "Audit", "Remember"],
  families: [
    { k: "Pair", d: "设备身份、准入、Owner 归属与撤销。", state: "implemented" },
    { k: "Media", d: "实时语音、PTT、打断与会话媒体。", state: "implemented" },
    { k: "Task", d: "长任务、状态、结果与主动回推。", state: "implemented" },
    { k: "Memory", d: "写入、召回、来源、隐私与审计。", state: "implemented" },
    { k: "Room", d: "空间、在场、发言权与身体迁移。", state: "partial" },
    { k: "Tools", d: "能力发现、调用与风险分级。", state: "partial" },
    { k: "State", d: "设备状态、遥测与事实投影。", state: "partial" },
    { k: "Capability", d: "通用能力租约与物理执行安全。", state: "research" },
  ],
} as const;
