export const site = {
  name: "Eidolon",
  fullName: "Eidolon OS",
  title: "Eidolon OS | 个人 AI 操作系统",
  positioningEn: "The Personal AI Operating System",
  positioningZh: "让个人 AI 运行在现实世界的操作系统",
  description: "Eidolon OS 为不同模型、产品和真实活动提供统一的个人 AI 运行时、系统服务与连续体验。",
  descriptionEn: "The operating system for personal AI across models, products and real-world activity.",
  github: "https://github.com/eidolon-os",
  githubLabel: "github.com/eidolon-os",
  mantraEn: "Your AI. Your memory. Your authority.",
  mantraZh: "你的 AI，你的记忆，你的决定。",
} as const;

export const nav = [
  { label: "Eidolon OS", href: "/os" },
  { label: "Eidolon One", href: "/one" },
  { label: "角色陪伴", href: "/companions" },
  { label: "IP 角色团", href: "/ensemble" },
  { label: "智能家居", href: "/smart-home" },
  { label: "EID-X", href: "/protocol" },
  { label: "主权愿景", href: "/manifesto" },
] as const;

// Scenes that grow on one Eidolon One host; shared by the home page and /one.
export const oneScenes = [
  { n: "01", code: "COMPANIONS", name: "角色陪伴", desc: "五种性格的桌面伙伴，陪你聊天，也能安静待着。", adds: "桌面陪伴设备", host: "伙伴设定与各自的记忆", href: "/companions" },
  { n: "02", code: "IP ENSEMBLE", name: "IP 角色团", desc: "一个故事的角色住进多台设备，单聊、同台、传话都可以。", adds: "多台桌面设备 · 按键说话器", host: "多角色调度与轮流发声", href: "/ensemble" },
  { n: "03", code: "SMART HOME", name: "智能家居", desc: "一块面板按房间看全家，一句话控制家里的设备。", adds: "家居中控面板", host: "家的目录、指令理解与执行", href: "/smart-home" },
] as const;
