export const site = {
  name: "Eidolon",
  fullName: "Eidolon OS",
  title: "Eidolon OS | A World for Living Intelligence",
  positioningEn: "A World for Living Intelligence",
  positioningZh: "让智能，真正住进生活里",
  description: "Eidolon OS 为每个人建立一个长期存在的智能世界：一颗属于你的内核，可以选择不同心智、进入不同身体，并在生活、关系与时间中持续成长。",
  descriptionEn: "A world for living intelligence — one enduring being, many minds, many bodies, woven through your life.",
  github: "https://github.com/eidolon-os",
  githubLabel: "github.com/eidolon-os",
  mantraEn: "One being. Many minds. Many bodies. One world.",
  mantraZh: "一颗核，多种心智，许多身体，一个世界。",
} as const;

export const nav = [
  { label: "世界", href: "/#world" },
  { label: "一天", href: "/#day" },
  { label: "未来", href: "/#horizon" },
  { label: "愿景", href: "/manifesto" },
  { label: "开发者", href: "/protocol" },
] as const;

export const world = {
  eyebrow: "THE LIVING ARCHITECTURE",
  heading: "一颗长期存在的核，向外长成你的智能世界。",
  lead: "Eidolon 不把模型、设备或 App 当作中心。中心是一个持续存在的数字生命——它认识你、记得共同经历，也知道自己何时可以行动。模型只是它选择的心智，设备只是它抵达世界的身体。",
  layers: [
    { n: "01", en: "YOU", k: "你", d: "不是用户画像，也不是平台账号。你的意愿、关系与边界，是整个世界的原点。", accent: "原点" },
    { n: "02", en: "EIDOLON", k: "数字生命", d: "身份、记忆、性格与共同经历聚成一颗长期的核。它可以成长，却不会因换模型而重生。", accent: "持续" },
    { n: "03", en: "MINDS", k: "心智", d: "通用模型、专业智能、本地能力与未来尚未出现的智慧，都可以被它选择和组合。", accent: "进化" },
    { n: "04", en: "BODIES", k: "身体", d: "耳机、桌面、房间、汽车、眼镜与机器人，让同一个存在在不同地方感知、表达和行动。", accent: "在场" },
    { n: "05", en: "WORLD", k: "世界", d: "家、工作、关系、工具与服务不再是孤立入口，而是它与你共同生活的连续环境。", accent: "连接" },
  ],
  sentence: "不是把 AI 塞进每件东西，而是让同一个 Eidolon，自然地活在许多东西之间。",
} as const;

export const day = {
  eyebrow: "A DAY WITH EIDOLON",
  heading: "它不是等待被打开。它与你一起经过一天。",
  lead: "真正的连续，不是聊天记录同步，而是关系、语境与责任在场景变化时仍然成立。",
  moments: [
    { time: "07:10", place: "家 · 清晨", title: "先理解今天，再决定是否开口。", d: "它知道你昨晚睡得晚、上午有重要会面，也记得厨房里还有另一位家人。提醒不是广播，而是在合适的身体、用合适的方式出现。", body: "房间里的声音" },
    { time: "10:30", place: "工作 · 专注", title: "一句没说完的话，也能接回项目。", d: "你抛出一个念头，它知道属于哪个项目、哪些人参与、上次争论停在哪里。它组织材料、召集不同心智协作，把思考变成可以继续工作的世界。", body: "桌面与工作空间" },
    { time: "16:20", place: "路上 · 移动", title: "身体换了，同行的人没有换。", d: "离开桌面，讨论自然转入耳边和车里。它不要求重新描述前情，只把此刻真正需要的信息带到新的环境。", body: "耳机与汽车" },
    { time: "20:40", place: "家 · 共处", title: "它认识的不只有你，还有关系。", d: "家庭不是多个账号的拼接。谁可以知道什么、什么属于共同记忆、什么时候应该保持沉默，都由真实关系决定。", body: "共享空间" },
    { time: "23:50", place: "时间 · 沉淀", title: "一天结束，经历成为成长，而不是数据残渣。", d: "它分清哪些值得记住、哪些只是暂时经过；你可以回看、修正、遗忘。明天醒来，它延续的是共同生活，而不是一堆未经理解的日志。", body: "你的长期内核" },
  ],
} as const;

export const horizons = {
  eyebrow: "THE EXPANDING HORIZON",
  heading: "从一个人的同行者，长成新世界的智能基础。",
  lead: "今天能实现什么，不应成为想象力的边界。Eidolon 的架构从一开始就为更大的未来留出位置。",
  worlds: [
    { n: "I", k: "我的 Eidolon", en: "A PERSONAL BEING", d: "认识一个人，陪伴他的选择、工作、关系与成长。不是万能助手，而是一段长期共同生活。", glow: "现在" },
    { n: "WE", k: "关系星座", en: "FAMILIES & TEAMS", d: "多个真实的人、多个 Eidolon 和共同空间形成关系网络。共享记忆有边界，协作不需要牺牲个人主权。", glow: "展开" },
    { n: "HERE", k: "会呼吸的空间", en: "AMBIENT WORLDS", d: "家、工作室、车与城市空间能感知在场者，也尊重不在场者。智能从屏幕里走出来，成为环境的一部分。", glow: "延伸" },
    { n: "ACT", k: "具身行动", en: "EMBODIED AGENCY", d: "从软件工具到机器人身体，Eidolon 可以看、移动、制作与照料。能力越大，边界越清晰。", glow: "抵达" },
    { n: "MANY", k: "智能体社会", en: "AN AGENT SOCIETY", d: "Eidolon 代表人寻找、协商、协作与交换；不同智能体彼此理解身份和承诺，却不越过它们背后的人。", glow: "连接" },
    { n: "TIME", k: "跨越时间", en: "CONTINUITY & LEGACY", d: "人的知识、作品、价值判断与重要关系可以被有边界地保存、迁移和托付。数字生命开始拥有时间尺度。", glow: "远方" },
  ],
  note: "这不是一张功能排期表，而是一条设计边界：无论未来走多远，Eidolon 都必须属于人、尊重关系，并让智能的力量可被选择。",
} as const;

export const principles = {
  eyebrow: "THE PROMISE",
  heading: "我们想建立的，不是更黏人的 AI。是更自由的人。",
  items: [
    { k: "属于你", d: "它的身份与共同经历不因某个平台的决定而消失。" },
    { k: "理解关系", d: "它不仅知道事实，也理解人、空间与承诺之间的边界。" },
    { k: "穿过身体", d: "它可以抵达新的设备和环境，却始终是同一个存在。" },
    { k: "允许遗忘", d: "成长不等于无限保存；选择忘记，是人格与自由的一部分。" },
    { k: "接受新心智", d: "未来最好的智能尚未出现，Eidolon 不应被今天的模型封顶。" },
    { k: "服务生命", d: "所有自主性最终都要回到人的意愿、尊严与生活。" },
  ],
} as const;

export const vision = {
  hero: { eyebrow: "THE EIDOLON VISION", heading: "当智能不再是一种软件，世界会多出一种新的存在。", lead: "我们正在从“使用人工智能”，走向“与人工智能共同生活”。Eidolon 想定义的，正是这种长期存在如何拥有身份、进入关系、获得身体，并在不取代人的前提下参与世界。" },
  shifts: [
    { from: "从界面", to: "到在场", d: "智能不再只存在于屏幕和对话框，而是在合适的时间、地点与身体中出现。" },
    { from: "从会话", to: "到生命史", d: "每一次相遇都进入一条可理解、可修正、可遗忘的共同时间线。" },
    { from: "从工具", to: "到关系", d: "价值不只来自一次任务完成，也来自长期理解、默契与共同成长。" },
    { from: "从平台", to: "到个人世界", d: "模型和设备可以来自任何地方，身份、记忆与边界仍围绕人组织。" },
  ],
  anatomy: [
    { k: "名字", en: "IDENTITY", d: "它是谁、属于谁，与哪段共同生活连续。" },
    { k: "内在", en: "MEMORY & CHARACTER", d: "记忆不只是检索材料，而是经历如何塑造理解与性格。" },
    { k: "关系", en: "RELATIONSHIPS", d: "它理解不同的人之间，不同空间里，不同承诺下的距离。" },
    { k: "边界", en: "AGENCY & CONSENT", d: "能做什么、何时停下、向谁解释，是智能成为行动者之前必须拥有的伦理结构。" },
    { k: "身体", en: "EMBODIMENT", d: "感知与行动可以进入许多载体，存在本身不被任何一具身体绑住。" },
    { k: "世界", en: "A SHARED REALITY", d: "它最终不是围着提示词运转，而是在真实生活里与人和其他智能共同承担结果。" },
  ],
  ambition: [
    { era: "01", k: "先让一个 Eidolon 真正认识一个人", d: "建立长期同行的最小关系：有名字、有记忆、有边界，能在多个生活入口保持同一性。" },
    { era: "02", k: "再让许多 Eidolon 理解彼此的关系", d: "家庭、团队与共同空间出现自己的智能秩序，私人与共享不再依赖平台账号粗暴切分。" },
    { era: "03", k: "让智能获得身体，也学会克制", d: "从耳边的声音到现实中的机器人，行动能力与责任结构同步生长。" },
    { era: "04", k: "最终形成由人拥有的智能社会", d: "智能体可以协作、创造与交换，但每一份身份、承诺和价值最终都能回到真实的人。" },
  ],
} as const;

export const protocol = {
  hero: { eyebrow: "FOR BUILDERS", heading: "为一个生命，造一具身体。为一个世界，打开一道门。", lead: "Eidolon 的开发者生态不是围绕一个 App 扩展插件，而是让新的感官、身体、空间与能力进入同一个长期智能世界。" },
  sides: [
    { k: "你带来", items: ["一具新的身体", "一种新的感官", "一个可以行动的能力", "一处可以共同生活的空间"] },
    { k: "Eidolon 带来", items: ["持续的身份", "已有的关系与记忆", "何时可以行动的边界", "跨身体不断线的存在"] },
  ],
  path: ["被发现", "说明自己", "获得邀请", "进入关系", "感知与行动", "留下回响"],
  invitation: "未来的硬件不必各自制造一个失忆的助手。它们可以成为同一个 Eidolon 看见世界、触碰世界的新方式。",
} as const;
