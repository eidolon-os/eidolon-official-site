"use client";

import { useEffect, useRef, useState } from "react";

type RoomId = "living" | "master" | "balcony";
type Kind = "light" | "ac" | "cover" | "fan" | "media" | "sensor" | "appliance";
type Device = { id: string; name: string; room: RoomId; kind: Kind; on?: boolean; level?: number; target?: number; position?: number };
type Source = "语音" | "触控";
type Pending = { heard: string; action: "on" | "dim"; candidates: string[]; question: string; hint: string };
type Feedback = { tone: "done" | "ask" | "info" | "error"; text: string };

// 设备取自手机里一键载入的示例户型。
const rooms: { id: RoomId; name: string }[] = [
  { id: "living", name: "客厅" },
  { id: "master", name: "主卧" },
  { id: "balcony", name: "阳台" },
];

const initialDevices: Device[] = [
  { id: "living-light", name: "客厅主灯", room: "living", kind: "light", on: true, level: 60 },
  { id: "living-ac", name: "客厅空调", room: "living", kind: "ac", on: false, target: 26 },
  { id: "living-curtain", name: "客厅窗帘", room: "living", kind: "cover", position: 70 },
  { id: "living-purifier", name: "空气净化器", room: "living", kind: "fan", on: true, level: 30 },
  { id: "living-tv", name: "电视", room: "living", kind: "media", on: false },
  { id: "living-thermo", name: "温湿度计", room: "living", kind: "sensor" },
  { id: "master-light", name: "主卧灯", room: "master", kind: "light", on: false, level: 60 },
  { id: "master-bedside", name: "床头灯", room: "master", kind: "light", on: false, level: 40 },
  { id: "master-ac", name: "主卧空调", room: "master", kind: "ac", on: false, target: 26 },
  { id: "master-humidifier", name: "加湿器", room: "master", kind: "fan", on: false, level: 40 },
  { id: "balcony-rack", name: "电动晾衣架", room: "balcony", kind: "cover", position: 0 },
  { id: "balcony-washer", name: "洗衣机", room: "balcony", kind: "appliance", on: false },
];

const kindGlyph: Record<Kind, string> = { light: "灯", ac: "冷", cover: "帘", fan: "风", media: "视", sensor: "温", appliance: "电" };

const utterances = [
  { text: "打开空调", hint: "默认房间" },
  { text: "打开卧室的灯", hint: "说不清时让你选" },
  { text: "把灯调暗一点", hint: "调节" },
  { text: "再暗一点", hint: "接着上一句" },
  { text: "算了", hint: "改主意" },
  { text: "打开投影仪", hint: "家里没有" },
  { text: "今天天气怎么样", hint: "不是家居指令" },
];

function statusOf(d: Device) {
  switch (d.kind) {
    case "light": return d.on ? `开 · ${d.level}%` : "关";
    case "ac": return d.on ? `制冷 ${d.target}°` : `关 · ${d.target}°`;
    case "cover": return d.position ? `开 ${d.position}%` : "已收起";
    case "fan": return d.on ? `运行 · ${d.level}%` : "关";
    case "media": return d.on ? "开" : "关";
    case "sensor": return "24.5° · 48%";
    case "appliance": return d.on ? "运行中" : "待机";
  }
}

function isActive(d: Device) {
  if (d.kind === "cover") return Boolean(d.position);
  if (d.kind === "sensor") return false;
  return Boolean(d.on);
}

export function HomePanelDemo() {
  const [devices, setDevices] = useState(initialDevices);
  const [view, setView] = useState<RoomId | "all">("living");
  const [panelRoom, setPanelRoom] = useState<RoomId | null>("living");
  const [offline, setOffline] = useState(false);
  const [phase, setPhase] = useState<"idle" | "listening" | "processing">("idle");
  const [heard, setHeard] = useState("");
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [pending, setPending] = useState<Pending | null>(null);
  const [lastTarget, setLastTarget] = useState<string | null>(null);
  const [activity, setActivity] = useState<{ text: string; source: Source } | null>(null);
  const timers = useRef<number[]>([]);
  const bezel = useRef<HTMLDivElement>(null);
  const live = useRef({ devices, panelRoom, offline, pending, lastTarget });

  useEffect(() => {
    live.current = { devices, panelRoom, offline, pending, lastTarget };
  }, [devices, panelRoom, offline, pending, lastTarget]);

  useEffect(() => {
    if (!feedback || feedback.tone === "ask") return;
    const timer = window.setTimeout(() => setFeedback(null), 6500);
    return () => window.clearTimeout(timer);
  }, [feedback]);

  useEffect(() => {
    const pendingTimers = timers.current;
    return () => pendingTimers.forEach((t) => window.clearTimeout(t));
  }, []);

  function later(fn: () => void, ms: number) {
    timers.current.push(window.setTimeout(fn, ms));
  }

  function apply(id: string, fn: (d: Device) => Device, source: Source) {
    const next = live.current.devices.map((d) => (d.id === id ? fn(d) : d));
    const updated = next.find((d) => d.id === id)!;
    setDevices(next);
    setActivity({ text: `${updated.name} ${statusOf(updated)}`, source });
    if (source === "语音") setView((current) => (current === "all" || current === updated.room ? current : updated.room));
    return updated;
  }

  function toggle(d: Device) {
    if (offline || d.kind === "sensor") return;
    apply(d.id, (x) => (x.kind === "cover" ? { ...x, position: x.position ? 0 : 100 } : { ...x, on: !x.on }), "触控");
  }

  function step(d: Device, delta: number) {
    if (offline) return;
    apply(d.id, (x) => {
      if (x.kind === "ac") return { ...x, on: true, target: Math.min(30, Math.max(16, (x.target ?? 26) + delta)) };
      if (x.kind === "cover") return { ...x, position: Math.min(100, Math.max(0, (x.position ?? 0) + delta * 10)) };
      return { ...x, on: true, level: Math.min(100, Math.max(10, (x.level ?? 50) + delta * 10)) };
    }, "触控");
  }

  function run(action: Pending["action"], id: string, said: string) {
    const updated = apply(id, (d) => (action === "on" ? { ...d, on: true } : { ...d, on: true, level: Math.max(10, (d.on ? d.level ?? 50 : 50) - 20) }), "语音");
    if (updated.kind === "light") setLastTarget(updated.id);
    setPending(null);
    setFeedback({ tone: "done", text: `${said} → ${updated.name} ${statusOf(updated)}` });
  }

  function interpret(utterance: string) {
    const now = live.current;
    const byKind = (kind: Kind, room?: RoomId | null) => now.devices.filter((d) => d.kind === kind && (!room || d.room === room));
    if (now.offline) return setFeedback({ tone: "error", text: "主机不可达，这次没有执行" });
    if (!utterance.endsWith("那个")) setPending(null);
    if (utterance === "算了") {
      return setFeedback({ tone: "info", text: "「算了」→ 好的，什么都不动" });
    }
    if (utterance.includes("投影仪")) return setFeedback({ tone: "info", text: "家里没有「投影仪」" });
    if (utterance.includes("天气")) return setFeedback({ tone: "info", text: "这里只处理家里的设备" });
    if (utterance.endsWith("那个")) {
      const key = utterance.replace("那个", "");
      const match = now.pending?.candidates.map((id) => now.devices.find((d) => d.id === id)!).find((d) => d.name.includes(key));
      if (now.pending && match) return run(now.pending.action, match.id, `「${now.pending.heard}」「${utterance}」`);
      return setFeedback({ tone: "info", text: "要控制哪一台？先说说想做什么" });
    }
    if (utterance === "再暗一点") {
      const target = now.devices.find((d) => d.id === now.lastTarget);
      if (!target) return setFeedback({ tone: "info", text: "要调哪一盏？先说说是哪盏灯" });
      return run("dim", target.id, `「${utterance}」`);
    }
    if (utterance === "打开空调") {
      const list = byKind("ac", now.panelRoom);
      if (list.length === 1) return run("on", list[0].id, `「${utterance}」`);
      const all = byKind("ac");
      setPending({ heard: utterance, action: "on", candidates: all.map((d) => d.id), question: "要开哪一台？", hint: "客厅那个" });
      return setFeedback({ tone: "ask", text: `「${utterance}」· 要开哪一台？` });
    }
    if (utterance === "打开卧室的灯") {
      const list = byKind("light", "master");
      setPending({ heard: utterance, action: "on", candidates: list.map((d) => d.id), question: "要开哪一盏？", hint: "床头那个" });
      return setFeedback({ tone: "ask", text: `「${utterance}」· 要开哪一盏？` });
    }
    if (utterance === "把灯调暗一点") {
      const list = byKind("light", now.panelRoom).filter((d) => d.on || !now.panelRoom);
      if (list.length === 1) return run("dim", list[0].id, `「${utterance}」`);
      setPending({ heard: utterance, action: "dim", candidates: byKind("light").map((d) => d.id), question: "要调哪一盏？", hint: "客厅那个" });
      return setFeedback({ tone: "ask", text: `「${utterance}」· 要调哪一盏？` });
    }
  }

  function speak(utterance: string) {
    if (phase !== "idle") return;
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current.length = 0;
    setFeedback(null);
    setHeard(utterance);
    setPhase("listening");
    const rect = bezel.current?.getBoundingClientRect();
    if (rect && (rect.top < 0 || rect.bottom > window.innerHeight)) {
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      bezel.current?.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "nearest" });
    }
    later(() => {
      setPhase("processing");
      later(() => {
        setPhase("idle");
        interpret(utterance);
      }, 450);
    }, 1000);
  }

  function choose(id: string) {
    if (!pending || offline) return;
    run(pending.action, id, `「${pending.heard}」`);
  }

  const shown = view === "all" ? devices : devices.filter((d) => d.room === view);
  const roomName = (id: RoomId | null) => rooms.find((r) => r.id === id)?.name;
  const statusLine =
    phase === "listening" ? "正在聆听…" :
    phase === "processing" ? `正在理解「${heard}」…` :
    feedback ? feedback.text :
    activity ? `刚刚 · ${activity.text} · 来自${activity.source}` : "点右下角的麦克风，说一句话";

  return (
    <div className="sh-demo">
      <div className="sh-bezel" ref={bezel}>
        <div className={`sh-screen${offline ? " is-offline" : ""}`} role="group" aria-label="家居中控面板界面">
          <header className="sh-top">
            <b>我的家<span> · {panelRoom ? `面板在${roomName(panelRoom)}` : "未设置房间"}</span></b>
            <time>20:31</time>
            <span className="sh-link"><i />{offline ? "离线 · 显示上次状态" : "已连接"}</span>
          </header>
          <nav className="sh-rooms" aria-label="房间">
            {[{ id: "all" as const, name: "全部" }, ...rooms].map((room) => (
              <button key={room.id} type="button" aria-pressed={view === room.id} onClick={() => setView(room.id)}>{room.name}</button>
            ))}
          </nav>
          <div className="sh-tiles">
            {shown.map((d) => (
              <article key={d.id} className={`sh-tile sh-${d.kind}${isActive(d) ? " is-on" : ""}`}>
                <button type="button" className="sh-tile-main" onClick={() => toggle(d)} disabled={offline || d.kind === "sensor"} aria-label={`${d.name}，${statusOf(d)}`}>
                  <span className="sh-tile-icon">{kindGlyph[d.kind]}</span>
                  <b>{d.name}</b>
                  <small>{statusOf(d)}</small>
                </button>
                {(d.kind === "light" || d.kind === "ac" || d.kind === "cover") && (
                  <span className="sh-steps">
                    <button type="button" onClick={() => step(d, -1)} disabled={offline} aria-label={`${d.name}调低`}>−</button>
                    <button type="button" onClick={() => step(d, 1)} disabled={offline} aria-label={`${d.name}调高`}>+</button>
                  </span>
                )}
              </article>
            ))}
            {pending && phase === "idle" && !offline && (
              <div className="sh-card is-ambiguous" aria-live="polite">
                <p className="sh-card-heard">「{pending.heard}」</p>
                <p className="sh-card-main">{pending.question}</p>
                <div className="sh-card-choices">{pending.candidates.map((id) => <button key={id} type="button" onClick={() => choose(id)}>{devices.find((d) => d.id === id)?.name}</button>)}</div>
                <button type="button" className="sh-card-say" onClick={() => speak(pending.hint)}>也可以直接说「{pending.hint}」</button>
              </div>
            )}
          </div>
          <footer className={`sh-status is-${phase !== "idle" ? phase : feedback?.tone ?? "idle"}`}>
            {phase === "listening" && <span className="sh-status-wave" aria-hidden="true"><i /><i /><i /><i /><i /></span>}
            <p aria-live="polite">{statusLine}</p>
            <button type="button" className={`sh-mic is-${phase}`} onClick={() => speak("打开空调")} aria-label="点按说话（示例：打开空调）"><i /></button>
          </footer>
        </div>
      </div>

      <div className="sh-console">
        <div className="sh-console-say">
          <span>试着对面板说</span>
          <div>{utterances.map((u) => <button key={u.text} type="button" onClick={() => speak(u.text)} disabled={phase !== "idle"}>「{u.text}」<small>{u.hint}</small></button>)}</div>
        </div>
        <div className="sh-console-set">
          <div role="radiogroup" aria-label="面板所在房间">
            <span>面板所在房间</span>
            <button type="button" role="radio" aria-checked={panelRoom === "living"} onClick={() => setPanelRoom("living")}>客厅</button>
            <button type="button" role="radio" aria-checked={panelRoom === null} onClick={() => setPanelRoom(null)}>未设置</button>
          </div>
          <label><input type="checkbox" checked={offline} onChange={(e) => setOffline(e.target.checked)} />模拟主机断开</label>
        </div>
      </div>
    </div>
  );
}
