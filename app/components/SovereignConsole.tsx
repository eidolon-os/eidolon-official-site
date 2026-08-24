import { VesselMark } from "./brand";

const minds = ["LOCAL · QWEN", "CLOUD · CLAUDE", "RESEARCH · AGENT"];
const bodies = ["PHONE", "DESKTOP", "HOME", "CAR", "ROBOT"];

export function SovereignConsole() {
  return (
    <div className="console" aria-label="Eidolon 主权控制台：Owner 掌控身份、记忆、模型与设备授权">
      <div className="console-bar">
        <div className="console-title"><span className="status-dot" />EIDOLON · OWNER CONSOLE</div>
        <span>LOCAL CORE · ONLINE</span>
      </div>

      <div className="console-grid">
        <aside className="console-nav" aria-label="控制台分区">
          <b>OVERVIEW</b>
          <span>Memory</span>
          <span>Authority</span>
          <span>Minds</span>
          <span>Bodies</span>
          <span>Audit</span>
        </aside>

        <div className="console-main">
          <div className="owner-panel">
            <div className="owner-mark"><VesselMark size={58} breathe idSuffix="console" /></div>
            <div><small>OWNER ROOT</small><strong>Manson&apos;s Eidolon</strong><span>Identity held locally</span></div>
            <i>VERIFIED</i>
          </div>

          <div className="console-section">
            <div className="console-label"><span>ACTIVE MIND</span><small>可替换 · 不拥有记忆</small></div>
            <div className="mind-switch">
              {minds.map((mind, index) => <span key={mind} className={index === 0 ? "active" : ""}>{mind}</span>)}
            </div>
          </div>

          <div className="console-section">
            <div className="console-label"><span>MOUNTED BODIES</span><small>按场景授权</small></div>
            <div className="body-list">
              {bodies.map((body, index) => (
                <div key={body} className={index < 3 ? "mounted" : ""}>
                  <span className="body-status" />
                  <b>{body}</b>
                  <small>{index < 3 ? (index === 2 ? "HOME · 42 MIN" : "ACTIVE") : "OFFLINE"}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="audit-line">
            <span>LAST ACTION</span>
            <p><b>09:41</b> Project memory shared with Research Agent</p>
            <i>VIEW TRACE →</i>
          </div>
        </div>

        <aside className="console-vault">
          <div><span>MEMORY VAULT</span><b>12,840</b><small>owner-held records</small></div>
          <div><span>OPEN LEASES</span><b>03</b><small>all revocable</small></div>
          <div><span>PRIVATE MODE</span><b className="safe">ON</b><small>cloud optional</small></div>
          <button type="button">REVOKE ALL BODIES</button>
        </aside>
      </div>
    </div>
  );
}
