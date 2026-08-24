const bodies = ["耳边", "桌面", "房间", "车里", "机器人"];
const worlds = ["家", "工作", "旅途", "创作"];

export function LivingWorld() {
  return (
    <div className="living-world" aria-label="Eidolon：一颗长期内核连接多种心智、身体与生活空间">
      <div className="world-aura" />
      <div className="world-orbit world-orbit-outer">
        {worlds.map((world, index) => (
          <span className={`world-place world-place-${index + 1}`} key={world}>{world}</span>
        ))}
      </div>
      <div className="world-orbit world-orbit-middle">
        {bodies.map((body, index) => (
          <span className={`world-body world-body-${index + 1}`} key={body}>{body}</span>
        ))}
      </div>
      <div className="world-orbit world-orbit-inner" />
      <div className="world-mind"><span>心智</span><small>可选择 · 可进化</small></div>
      <div className="world-core">
        <i />
        <b>EIDOLON</b>
        <span>身份 · 记忆 · 关系 · 边界</span>
      </div>
      <p className="world-caption"><span>一颗长期存在的核</span><b>穿过许多身体，生活在你的世界里。</b></p>
    </div>
  );
}
