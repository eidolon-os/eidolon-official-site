export function PlatformArchitecture({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`platform-architecture${compact ? " compact" : ""}`} aria-label="Eidolon OS 与 EID-X 支撑官方旗舰、官方外设和生态设备的系统架构">
      <div className="pa-label"><span>PRODUCTS &amp; EXPERIENCES</span><b>产品可以不同，系统体验保持一致</b></div>
      <div className="pa-products">
        <article className="pa-one"><small>OFFICIAL FLAGSHIP</small><h3>Eidolon One</h3><p>官方定义的旗舰个人 AI 设备</p></article>
        <article><small>OFFICIAL FAMILY</small><h3>One Peripherals</h3><p>Go · Room · Dock · Link</p></article>
        <article><small>PARTNER ECOSYSTEM</small><h3>Compatible Devices</h3><p>可穿戴 · 创作工具 · 空间终端 · 无障碍设备 · 机器人</p></article>
      </div>
      <div className="pa-os">
        <header><small>THE OPERATING SYSTEM</small><h3>Eidolon OS</h3><p>让个人 AI 能在不同产品上运行、迁移和连续协作</p></header>
        <div className="pa-services"><span>Personal AI Runtime</span><span>Memory &amp; Identity</span><span>Agent &amp; Model Fabric</span><span>Experience &amp; Context</span><span>Security &amp; Authority</span></div>
      </div>
      <div className="pa-eidx"><b>EID-X</b><span>设备发现 · 身份认证 · 能力声明 · 任务交接 · 权限与追溯</span></div>
      <div className="pa-hardware"><span>Compute</span><span>Sensors</span><span>Displays</span><span>Instruments</span><span>Robotics</span></div>
    </div>
  );
}
