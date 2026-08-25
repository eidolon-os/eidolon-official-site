export function PlatformArchitecture({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`architecture-rail${compact ? " compact" : ""}`} aria-label="Eidolon 产品、操作系统、协议与硬件能力的四层架构">
      <div className="architecture-row products-row">
        <span>PRODUCTS</span>
        <article><small>官方旗舰主机</small><b>Eidolon One</b></article>
        <article><small>官方外设</small><b>One Family</b></article>
        <article><small>生态产品</small><b>Partner Devices</b></article>
      </div>
      <div className="architecture-row os-row">
        <span>OPERATING SYSTEM</span>
        <strong>Eidolon OS</strong>
        <p>个人 AI 运行时 · 身份与记忆 · Agent 与模型 · 情境与任务 · 主权与安全</p>
      </div>
      <div className="architecture-row protocol-row"><span>PROTOCOL</span><strong>EID-X</strong><p>设备发现 · 身份认证 · 能力声明 · 授权租约 · 任务交接 · 行动追溯</p></div>
      <div className="architecture-row hardware-row"><span>CAPABILITIES</span><p>Compute</p><p>Sensors</p><p>Displays</p><p>Vehicles</p><p>Robotics</p></div>
    </div>
  );
}
