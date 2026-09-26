export type CastId = "tang" | "wukong" | "bajie" | "sha";

export const cast: { id: CastId; glyph: string; name: string; trait: string }[] = [
  { id: "tang", glyph: "唐", name: "唐僧", trait: "沉稳 · 把方向" },
  { id: "wukong", glyph: "悟", name: "悟空", trait: "机灵 · 先出主意" },
  { id: "bajie", glyph: "八", name: "八戒", trait: "乐天 · 补充享受" },
  { id: "sha", glyph: "沙", name: "沙僧", trait: "踏实 · 兜底细节" },
];
