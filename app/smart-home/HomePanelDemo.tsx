"use client";

import { useEffect, useRef, useState } from "react";

type RoomId = "living" | "master" | "study";
type Kind = "light" | "ac" | "curtain" | "sensor" | "purifier" | "tv" | "speaker" | "robot";
type Device = { id: string; name: string; room: RoomId; kind: Kind; on?: boolean; level?: number; target?: number; position?: number; volume?: number; muted?: boolean; running?: boolean };
type Source = "面板语音" | "触控" | "场景";
type Result =
  | { kind: "success"; heard: string; lines: string[]; path: "fast" | "llm"; note?: string; room: RoomId }
  | { kind: "ambiguous"; heard: string; candidates: string[]; utterance: string }
  | { kind: "missing" | "unrelated" | "error"; heard: string; message: string };

const rooms: { id: RoomId; name: string }[] = [
  { id: "living", name: "客厅" },
  { id: "master", name: "主卧" },
  { id: "study", name: "书房" },
];

const initialDevices: Device[] = [
  { id: "living-light", name: "客厅主灯", room: "living", kind: "light", on: true, level: 40 },
  { id: "living-ac", name: "客厅空调", room: "living", kind: "ac", on: false, target: 26 },
  { id: "living-curtain", name: "客厅窗帘", room: "living", kind: "curtain", position: 70 },
  { id: "living-sensor", name: "温湿度", room: "living", kind: "sensor" },
  { id: "living-purifier", name: "空气净化器", room: "living", kind: "purifier", on: true, level: 30 },
  { id: "living-tv", name: "电视", room: "living", kind: "tv", on: false },
  { id: "living-speaker", name: "智能音箱", room: "living", kind: "speaker", volume: 35, muted: false },
  { id: "master-light", name: "主卧灯", room: "master", kind: "light", on: false, level: 60 },
  { id: "master-ac", name: "主卧空调", room: "master", kind: "ac", on: false, target: 26 },
  { id: "master-curtain", name: "主卧窗帘", room: "master", kind: "curtain", position: 0 },
  { id: "study-light", name: "书房台灯", room: "study", kind: "light", on: false, level: 80 },
  { id: "study-robot", name: "扫地机器人", room: "study", kind: "robot", running: false },
];

const kindGlyph: Record<Kind, string> = { light: "灯", ac: "冷", curtain: "帘", sensor: "温", purifier: "净", tv: "视", speaker: "音", robot: "扫" };

const utterances = [
  { text: "打开空调", hint: "默认房间" },
  { text: "有点热", hint: "大模型理解" },
  { text: "把灯调暗一点", hint: "调节" },
  { text: "打开投影仪", hint: "家里没有" },
  { text: "今天天气怎么样", hint: "不是家居指令" },
];

const scenes: { name: string; apply: (d: Device) => Device }[] = [
  { name: "回家", apply: (d) => (d.id === "living-light" ? { ...d, on: true, level: 60 } : d.id === "living-ac" ? { ...d, on: true, target: 26 } : d.id === "living-curtain" ? { ...d, position: 70 } : d) },
  { name: "离家", apply: (d) => (d.kind === "light" || d.kind === "ac" || d.kind === "tv" ? { ...d, on: false } : d.kind === "robot" ? { ...d, running: true } : d) },
  { name: "观影", apply: (d) => (d.id === "living-light" ? { ...d, on: true, level: 15 } : d.id === "living-curtain" ? { ...d, position: 0 } : d.id === "living-tv" ? { ...d, on: true } : d) },
  { name: "睡眠", apply: (d) => (d.kind === "light" ? { ...d, on: false } : d.kind === "curtain" ? { ...d, position: 0 } : d.id === "master-ac" ? { ...d, on: true, target: 27 } : d) },
];

function statusOf(d: Device) {
  switch (d.kind) {
    case "light": return d.on ? `开 · ${d.level}%` : "关";
    case "ac": return d.on ? `制冷 ${d.target}°` : `关 · ${d.target}°`;
    case "curtain": return d.position ? `开 ${d.position}%` : "已关";
    case "sensor": return "24.5° · 48%";
    case "purifier": return d.on ? `运行 · ${d.level}%` : "关";
    case "tv": return d.on ? "开" : "关";
    case "speaker": return d.muted ? "静音" : `音量 ${d.volume}`;
    case "robot": return d.running ? "清扫中" : "已回充";
  }
}

function isActive(d: Device) {
  if (d.kind === "curtain") return Boolean(d.position);
  if (d.kind === "speaker") return !d.muted;
  if (d.kind === "robot") return Boolean(d.running);
  if (d.kind === "sensor") return false;
  return Boolean(d.on);
}

function describe(a: Device[], b: Device[]) {
  return b.filter((d, i) => statusOf(d) !== statusOf(a[i])).map((d) => `${d.name} ${statusOf(d)}`);
}

export function HomePanelDemo() {
  const [devices, setDevices] = useState(initialDevices);
  const [view, setView] = useState<RoomId | "all">("living");
  const [panelRoom, setPanelRoom] = useState<RoomId | null>("living");
  const [offline, setOffline] = useState(false);
  const [phase, setPhase] = useState<"idle" | "listening" | "processing">("idle");
  const [heard, setHeard] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [activity, setActivity] = useState<{ text: string; source: Source }>({ text: "客厅主灯 开 · 40%", source: "触控" });
  const timers = useRef<number[]>([]);
  const bezel = useRef<HTMLDivElement>(null);
  const live = useRef({ devices, panelRoom, offline });

  useEffect(() => {
    live.current = { devices, panelRoom, offline };
  }, [devices, panelRoom, offline]);

  useEffect(() => {
    if (!result || result.kind === "ambiguous") return;
    const timer = window.setTimeout(() => setResult(null), 6500);
    return () => window.clearTimeout(timer);
  }, [result]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((t) => window.clearTimeout(t));
  }, []);

  function later(fn: () => void, ms: number) {
    timers.current.push(window.setTimeout(fn, ms));
  }

  function commit(base: Device[], next: Device[], source: Source, summary?: string) {
    const changes = describe(base, next);
    setDevices(next);
    if (changes.length) setActivity({ text: summary ?? changes.join("，"), source });
    return changes;
  }

  function mutate(base: Device[], id: string, fn: (d: Device) => Device) {
    return base.map((d) => (d.id === id ? fn(d) : d));
  }

  function toggle(d: Device) {
    if (offline || d.kind === "sensor") return;
    commit(devices, mutate(devices, d.id, (x) => {
      if (x.kind === "curtain") return { ...x, position: x.position ? 0 : 100 };
      if (x.kind === "speaker") return { ...x, muted: !x.muted };
      if (x.kind === "robot") return { ...x, running: !x.running };
      return { ...x, on: !x.on };
    }), "触控");
  }

  function step(d: Device, delta: number) {
    if (offline) return;
    commit(devices, mutate(devices, d.id, (x) => {
      if (x.kind === "ac") return { ...x, on: true, target: Math.min(30, Math.max(16, (x.target ?? 26) + delta)) };
      if (x.kind === "curtain") return { ...x, position: Math.min(100, Math.max(0, (x.position ?? 0) + delta * 10)) };
      return { ...x, on: true, level: Math.min(100, Math.max(10, (x.level ?? 50) + delta * 10)) };
    }), "触控");
  }

  function runScene(scene: (typeof scenes)[number]) {
    if (offline) return;
    const next = devices.map(scene.apply);
    const count = describe(devices, next).length;
    commit(devices, next, "场景", `场景「${scene.name}」· ${count} 项已完成`);
  }

  function resolve(base: Device[], room: RoomId | null, utterance: string, targetId: string | null): { next: Device[]; result: Result } {
    const kind: Kind = utterance.includes("灯") ? "light" : "ac";
    const candidates = base.filter((d) => d.kind === kind && (targetId ? d.id === targetId : room ? d.room === room : true));
    if (candidates.length !== 1) {
      return { next: base, result: { kind: "ambiguous", heard: utterance, utterance, candidates: base.filter((d) => d.kind === kind).map((d) => d.id) } };
    }
    const target = candidates[0];
    let next = base;
    let note: string | undefined;
    if (utterance === "打开空调") next = mutate(base, target.id, (d) => ({ ...d, on: true }));
    if (utterance === "有点热") {
      next = mutate(base, target.id, (d) => ({ ...d, on: true, target: Math.max(16, (d.on ? d.target ?? 26 : 26) - 1) }));
      note = "理解为：调低温度";
    }
    if (utterance === "把灯调暗一点") next = mutate(base, target.id, (d) => ({ ...d, on: true, level: Math.max(10, (d.on ? d.level ?? 50 : 50) - 20) }));
    const updated = next.find((d) => d.id === target.id)!;
    return { next, result: { kind: "success", heard: utterance, lines: [`${updated.name} ${statusOf(updated)}`], path: utterance === "有点热" ? "llm" : "fast", note, room: updated.room } };
  }

  function speak(utterance: string) {
    if (phase !== "idle") return;
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current.length = 0;
    setResult(null);
    setHeard(utterance);
    setPhase("listening");
    const rect = bezel.current?.getBoundingClientRect();
    if (rect && (rect.top < 0 || rect.bottom > window.innerHeight)) {
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      bezel.current?.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "nearest" });
    }
    later(() => {
      setPhase("processing");
      const slow = utterance === "有点热";
      later(() => {
        setPhase("idle");
        const now = live.current;
        if (now.offline) return setResult({ kind: "error", heard: utterance, message: "主机不可达，这次没有执行" });
        if (utterance.includes("投影仪")) return setResult({ kind: "missing", heard: utterance, message: "家里没有「投影仪」" });
        if (utterance.includes("天气")) return setResult({ kind: "unrelated", heard: utterance, message: "这里只处理家里的设备" });
        const { next, result } = resolve(now.devices, now.panelRoom, utterance, null);
        if (result.kind === "success") applyVoice(now.devices, next, result.room);
        setResult(result);
      }, slow ? 1500 : 380);
    }, 1100);
  }

  function applyVoice(base: Device[], next: Device[], room: RoomId) {
    commit(base, next, "面板语音");
    setView((current) => (current === "all" || current === room ? current : room));
  }

  function choose(utterance: string, id: string) {
    const { next, result } = resolve(devices, panelRoom, utterance, id);
    if (result.kind === "success") applyVoice(devices, next, result.room);
    setResult(result);
  }

  const shown = view === "all" ? devices : devices.filter((d) => d.room === view);
  const roomName = (id: RoomId | null) => rooms.find((r) => r.id === id)?.name;

  return (
    <div className="sh-demo">
      <div className="sh-bezel" ref={bezel}>
        <div className={`sh-screen${offline ? " is-offline" : ""}`} role="group" aria-label="家居中控面板界面">
          <header className="sh-top">
            <b>我的家<span> · {panelRoom ? `面板在${roomName(panelRoom)}` : "未设置房间"}</span></b>
            <time>20:31</time>
            <span className="sh-link"><i />{offline ? "主机不可达" : "已连接"}</span>
            <button type="button" className={`sh-mic is-${phase}`} onClick={() => speak("打开空调")} aria-label="点按说话（示例：打开空调）"><i /></button>
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
                  <small>{offline ? "离线 · 上次状态" : statusOf(d)}</small>
                </button>
                {(d.kind === "light" || d.kind === "ac" || d.kind === "curtain") && (
                  <span className="sh-steps">
                    <button type="button" onClick={() => step(d, -1)} disabled={offline} aria-label={`${d.name}调低`}>−</button>
                    <button type="button" onClick={() => step(d, 1)} disabled={offline} aria-label={`${d.name}调高`}>+</button>
                  </span>
                )}
              </article>
            ))}
            {(phase !== "idle" || result) && (
              <div className={`sh-card is-${phase !== "idle" ? phase : result?.kind}`} aria-live="polite">
                {phase === "listening" && <><span className="sh-card-wave" aria-hidden="true"><i /><i /><i /><i /><i /></span><p>聆听中…</p></>}
                {phase === "processing" && <><p className="sh-card-heard">「{heard}」</p><p>处理中…</p></>}
                {phase === "idle" && result && (
                  <>
                    <p className="sh-card-heard">「{result.heard}」</p>
                    {result.kind === "success" && <><p className="sh-card-main">{result.note ? `${result.note} → ` : "→ "}{result.lines.join("，")}</p><small className={`is-${result.path}`}>{result.path === "fast" ? "快速识别" : "大模型理解"}</small></>}
                    {result.kind === "ambiguous" && <><p className="sh-card-main">要控制哪一台？</p><div className="sh-card-choices">{result.candidates.map((id) => <button key={id} type="button" onClick={() => choose(result.utterance, id)}>{devices.find((d) => d.id === id)?.name}</button>)}</div></>}
                    {(result.kind === "missing" || result.kind === "unrelated" || result.kind === "error") && <p className="sh-card-main">{result.message}</p>}
                  </>
                )}
              </div>
            )}
          </div>
          <footer className="sh-bottom">
            <div className="sh-scenes">{scenes.map((scene) => <button key={scene.name} type="button" onClick={() => runScene(scene)} disabled={offline}>{scene.name}</button>)}</div>
            <p><span>刚刚</span>{activity.text}<i>来自 {activity.source}</i></p>
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
