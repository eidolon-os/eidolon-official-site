export const site = {
  name: "Eidolon",
  fullName: "Eidolon OS",
  title: "Eidolon OS | 个人 AI 操作系统",
  positioningEn: "The Personal AI Operating System",
  positioningZh: "让个人 AI 运行在现实世界的操作系统",
  description: "Eidolon OS 为不同模型、设备和生活场景提供统一的个人 AI 运行时、系统服务与连续体验。",
  descriptionEn: "The operating system for personal AI across models, devices and real-world scenes.",
  github: "https://github.com/eidolon-os",
  githubLabel: "github.com/eidolon-os",
  mantraEn: "Your AI. Your memory. Your authority.",
  mantraZh: "你的 AI，你的记忆，你的决定。",
} as const;

export const nav = [
  { label: "Eidolon OS", href: "/os" },
  { label: "生活场景", href: "/#life" },
  { label: "Eidolon One", href: "/one" },
  { label: "愿景", href: "/manifesto" },
  { label: "EID-X", href: "/protocol" },
] as const;

export const architecture = {
  eyebrow: "THE SOVEREIGN ARCHITECTURE",
  heading: "稳定的是你。变化的是智能与身体。",
  lead: "Eidolon 把最重要的东西留在中心：谁拥有它、它记得什么、它可以代表谁行动。模型与设备围绕这个中心工作，而不是反过来定义你。",
  layers: [
    { n: "01", en: "OWNER ROOT", k: "你拥有根权", d: "身份、密钥、恢复权与最终决定只属于你。任何模型、云服务和设备都无法把这一层带走。" },
    { n: "02", en: "SOVEREIGN CORE", k: "Eidolon 主权内核", d: "长期记忆、关系边界、权限策略、任务状态与行动账本在这里形成同一个连续的存在。" },
    { n: "03", en: "MINDS", k: "可替换的心智", d: "本地模型、云端模型与专业 Agent 按任务组合。更好的模型出现时可以接入，但不会要求你重新开始。" },
    { n: "04", en: "DEVICES & WORLDS", k: "可授权的设备与环境", d: "可穿戴、创作工具、共享终端、辅助设备和机器人只在被允许的范围与时间里看见、听见和行动。" },
  ],
} as const;

export const sovereignty = {
  eyebrow: "SOVEREIGNTY, MADE REAL",
  heading: "主权不是一句隐私承诺，而是四个随时可用的动作。",
  items: [
    { n: "01", verb: "带走", en: "PORT", title: "把身份与记忆完整带走。", d: "不因更换服务、模型或硬件丢失共同经历；导出的不是聊天文件，而是可继续运行的个人智能状态。" },
    { n: "02", verb: "更换", en: "SWITCH", title: "换掉心智，不换掉自己。", d: "同一个任务可以选择本地模型、云模型或专业 Agent；模型提供能力，但不占有你的长期身份。" },
    { n: "03", verb: "撤回", en: "REVOKE", title: "让任何设备立即失去权限。", d: "可穿戴、空间终端、应用和机器人获得的是有范围、有期限的能力租约。情境结束，授权随之收回。" },
    { n: "04", verb: "追溯", en: "AUDIT", title: "知道它为何行动，也知道结果去了哪里。", d: "每次读取、推理、调用与写回都保留来源和责任链；重要行动先确认，所有结果可解释、可纠正。" },
  ],
} as const;

export const continuity = {
  eyebrow: "ONE LIFE, MANY SCENES",
  heading: "活动在变化，边界也应该随之变化。",
  lead: "Eidolon 不把所有信息同步到所有设备。它在创造、沟通、学习、共享或行动时，只挂载此刻需要且允许出现的那部分自己。",
  scenes: [
    { time: "07:40", place: "床边光幕", en: "GLANCE", title: "创作线索已唤醒", d: "只出现日程和昨晚留下的三条提示；完整项目与私人记录保持封存。", state: "今日线索 · ON", sealed: "完整项目 · SEALED" },
    { time: "08:20", place: "One Go", en: "VOICE", title: "当前想法已接续", d: "用声音继续推敲结构，只携带正在处理的片段和必要来源。", state: "当前任务 · ON", sealed: "其他空间 · SEALED" },
    { time: "09:10", place: "创作台", en: "STUDIO", title: "完整工作台已展开", d: "文档、素材、专业 Agent 与创作工具开始协作；私人对话不会进入项目。", state: "创作能力 · ON", sealed: "私人关系 · SEALED" },
    { time: "19:00", place: "共享屏", en: "SHARE", title: "可分享结果已挂载", d: "Eidolon 只呈现准备分享的结果，不把创作过程和私密来源暴露给共同空间。", state: "分享结果 · ON", sealed: "创作过程 · UNMOUNTED" },
  ],
} as const;

export const product = {
  eyebrow: "ONE PRODUCT, MANY PRESENCES",
  heading: "不是一排助手产品，而是一套围绕人的个人 AI 系统。",
  lead: "Eidolon OS 提供个人 AI 运行时与系统服务；Eidolon One 定义官方旗舰体验；EID-X 让官方外设与第三方设备进入同一个兼容生态。",
  core: { name: "Eidolon Core", kind: "SOVEREIGN HUB", d: "运行于个人设备、家庭主机或私有环境。保存长期身份、记忆、关系、策略与行动账本；本地优先，云端按需。" },
  surfaces: [
    { name: "Console", en: "CONTROL SURFACE", d: "查看记忆来源、切换模型、管理身体、设置授权并审计行动。" },
    { name: "Presence", en: "LIFE INTERFACES", d: "可穿戴、创作工具、共享终端、辅助设备与机器人中的连续入口，不制造新的孤立身份。" },
    { name: "EID-X", en: "DEVICE PROTOCOL", d: "让硬件、机器人和服务声明能力，并通过身份、租约与场景边界接入。" },
  ],
} as const;

export const horizons = {
  eyebrow: "WHERE IT CAN GROW",
  heading: "从一个人的主权，向协作空间、现实工具与智能体社会生长。",
  items: [
    { phase: "NOW", k: "个人 Eidolon", d: "先让一个人真正拥有一个持续存在、可迁移、能被治理的长期智能体。" },
    { phase: "NEXT", k: "多人协作", d: "每位参与者保留自己的内核，再选择建立共同记忆、共同设备与协作关系。" },
    { phase: "THEN", k: "工具与具身", d: "创作设备、专业仪器、辅助工具与机器人不再各自养一个失忆助手，而成为个人 Eidolon 的受控能力。" },
    { phase: "LATER", k: "智能体契约", d: "Eidolon 可以代表人协商、协作和交换能力；身份、授权和责任仍能回到真实的人。" },
  ],
} as const;
