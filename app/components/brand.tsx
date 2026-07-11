// 品牌图形（内联 SVG）—— 墨器承朱核。
// 六边形墨器 path 取自品牌手册（顶部开口）；朱砂核径向渐变 + 呼吸光晕。

const HEX = "M72.12 33 L94.64 46 L94.64 86 L60 106 L25.36 86 L25.36 46 L47.88 33";

type MarkProps = {
  size?: number | string;
  breathe?: boolean;
  className?: string;
  /** 深底(骨白器身) 或 纸面(墨色器身) */
  tone?: "bone" | "ink";
  idSuffix?: string;
};

export function VesselMark({
  size = 120,
  breathe = false,
  className,
  tone = "bone",
  idSuffix = "m",
}: MarkProps) {
  const stroke = tone === "bone" ? "#EDE6D6" : "#23242B";
  const core = tone === "bone"
    ? { a: "#FFD8C4", b: "#FF6242", c: "#B62E19" }
    : { a: "#FFD3BE", b: "#EF4E2E", c: "#A62815" };
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Eidolon"
    >
      <defs>
        <radialGradient id={`core-${idSuffix}`} cx="0.38" cy="0.32" r="0.85">
          <stop offset="0" stopColor={core.a} />
          <stop offset="0.55" stopColor={core.b} />
          <stop offset="1" stopColor={core.c} />
        </radialGradient>
        <radialGradient id={`halo-${idSuffix}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={core.b} stopOpacity="0.32" />
          <stop offset="1" stopColor={core.b} stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d={HEX}
        fill="none"
        stroke={stroke}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="60"
        cy="50"
        r="26"
        fill={`url(#halo-${idSuffix})`}
        className={breathe ? "breathe" : undefined}
        style={{ transformOrigin: "60px 50px" }}
      />
      <circle cx="60" cy="50" r="10.5" fill={`url(#core-${idSuffix})`} />
    </svg>
  );
}

/** 朱砂方印（白文），用于三元「印」的图示 */
export function SealGlyph({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 56 56" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <linearGradient id="seal-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#D8452C" />
          <stop offset="1" stopColor="#A82815" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="40" height="40" rx="7" fill="url(#seal-g)" />
      <rect x="19" y="19" width="18" height="18" rx="3" fill="none" stroke="#F5EFE3" strokeWidth="3.4" />
    </svg>
  );
}

/** 悬浮朱砂核（三元「核」）*/
export function CoreGlyph({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 56 56" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <radialGradient id="core-glyph" cx="0.38" cy="0.32" r="0.85">
          <stop offset="0" stopColor="#FFD3BE" />
          <stop offset="0.55" stopColor="#EF4E2E" />
          <stop offset="1" stopColor="#A62815" />
        </radialGradient>
      </defs>
      <circle cx="28" cy="28" r="13" fill="url(#core-glyph)" />
    </svg>
  );
}
