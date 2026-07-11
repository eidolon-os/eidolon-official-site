// 能力块的产品 UI mock —— 把每项能力做成一块真实感的界面面板。
// 统一深色窗口框（.fui-win），内部各自不同。

function Win({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="fui-win">
      <div className="fui-bar">
        <span className="fui-title">{title}</span>
        <span className="fui-dots" aria-hidden="true"><i /><i /><i /></span>
      </div>
      <div className="fui-body">{children}</div>
    </div>
  );
}

function MemoryUI() {
  const mem = [
    { t: "周四给妈妈打生日电话", src: "客厅音箱", tag: "" },
    { t: "在做的项目 · Eidolon 官网", src: "桌面", tag: "" },
    { t: "对花生过敏", src: "手机", tag: "敏感" },
  ];
  return (
    <Win title="记忆库 · 今天记住">
      {mem.map((m) => (
        <div className="fui-mem" key={m.t}>
          <span className="fui-memdot" />
          <p>{m.t}</p>
          {m.tag && <span className="fui-badge warn">{m.tag}</span>}
          <span className="fui-src">{m.src}</span>
        </div>
      ))}
      <div className="fui-foot">
        <button type="button" className="fui-mini">纠错</button>
        <button type="button" className="fui-mini">导出</button>
        <button type="button" className="fui-mini">删除</button>
        <span className="fui-note">归属：你 · 可携带</span>
      </div>
    </Win>
  );
}

function DevicesUI() {
  const dev = [
    { n: "手机", on: true, now: false },
    { n: "客厅音箱", on: true, now: true },
    { n: "桌面", on: true, now: false },
    { n: "机器人", on: false, now: false },
  ];
  return (
    <Win title="设备 · 4 具在线">
      {dev.map((d) => (
        <div className={`fui-dev${d.now ? " now" : ""}`} key={d.n}>
          <span className={`fui-dot ${d.on ? "on" : "off"}`} />
          <span className="fui-devname">{d.n}</span>
          {d.now && <span className="fui-badge">当前出面</span>}
        </div>
      ))}
      <div className="fui-flow">
        <span className="fui-flowdot" />一份记忆 · 已同步到 4 具身体
      </div>
    </Win>
  );
}

function TaskUI() {
  const steps = [
    { t: "收集 3 场会议录音", s: "done" },
    { t: "生成会议纪要", s: "done" },
    { t: "起草群发邮件", s: "run" },
    { t: "待你确认后发送", s: "wait" },
  ];
  return (
    <Win title="任务 · 整理上周会议纪要">
      {steps.map((st) => (
        <div className={`fui-step ${st.s}`} key={st.t}>
          <span className="fui-check" aria-hidden="true">
            {st.s === "done" ? "✓" : st.s === "run" ? "⟳" : ""}
          </span>
          <span>{st.t}</span>
        </div>
      ))}
      <div className="fui-file"><span className="fui-fileicon">▤</span>会议纪要 · 2026-07.md<span className="fui-src">已产出</span></div>
    </Win>
  );
}

function GovernUI() {
  const log = [
    { t: "阿策 读取 · 日历", meta: "2 分钟前 · 你已允许", ok: true },
    { t: "小忆 写入 · 记忆", meta: "今天 · 常规授权", ok: true },
    { t: "音箱 外放 · 私密内容", meta: "已被你撤销", ok: false },
  ];
  return (
    <Win title="权限与审计">
      <div className="fui-pending">
        <p><b>阿策</b> 想访问你的<b>日历</b></p>
        <div className="fui-btns">
          <button type="button" className="fui-ok">允许一次</button>
          <button type="button" className="fui-ghost">问我</button>
        </div>
      </div>
      <div className="fui-label">审计日志</div>
      {log.map((l) => (
        <div className="fui-logrow" key={l.t}>
          <span className={`fui-dot ${l.ok ? "on" : "revoked"}`} />
          <span className="fui-logtext">{l.t}</span>
          <span className="fui-src">{l.meta}</span>
        </div>
      ))}
    </Win>
  );
}

export function FeatureUI({ id }: { id: string }) {
  switch (id) {
    case "memory": return <MemoryUI />;
    case "devices": return <DevicesUI />;
    case "task": return <TaskUI />;
    case "govern": return <GovernUI />;
    default: return null;
  }
}
