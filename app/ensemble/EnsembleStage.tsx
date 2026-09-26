"use client";

import { useEffect, useRef, useState } from "react";
import { cast, type CastId } from "./cast";

type InputId = "ptt" | "phone";
type DeviceId = CastId | InputId;
type Mode = "voice" | "text" | "face";
type Caps = { mic: boolean; voice: boolean; text: boolean; face: boolean };

type Step = {
  who: "you" | "note" | CastId;
  from?: DeviceId;
  to?: CastId[];
  mode?: Mode;
  thinking?: CastId[];
  waiting?: CastId[];
  halt?: boolean;
  stop?: boolean;
  host?: string;
  text: string;
};

type Scene = {
  id: string;
  label: string;
  title: string;
  summary: string;
  // 一起聊时只有说话键收音，桌面设备的麦克风全部关闭。
  together?: boolean;
  devices?: Partial<Record<CastId, { status?: "listen" | "offline"; caps?: Partial<Caps> }>>;
  steps: Step[];
};

const inputs: { id: InputId; name: string; role: string }[] = [
  { id: "ptt", name: "按键说话器", role: "按住开口 · 按下即停" },
  { id: "phone", name: "手机", role: "选伙伴 · 开始结束 · 看状态" },
];

const scenes: Scene[] = [
  {
    id: "solo",
    label: "单独聊",
    title: "只想和一位伙伴聊聊",
    summary: "明确找人，单独相处。其他伙伴不会抢答，也不会默认得知这段私聊。",
    steps: [
      { who: "you", from: "wukong", host: "单独聊 · 悟空", text: "今天做什么都不顺，陪我聊一会儿。" },
      { who: "wukong", to: ["wukong"], mode: "voice", host: "单独聊 · 悟空", text: "行，俺老孙陪你。先说说，哪件事最堵心？" },
      { who: "note", host: "私聊只属于你和悟空", text: "其他三位不参与这段对话，也看不到内容。你随时可以结束，不影响其他设备。" },
    ],
  },
  {
    id: "named",
    label: "点名回应",
    title: "在手边开口，被点名的那位回应",
    summary: "说话的位置和回答的位置可以不同。点到谁，谁就在自己的设备上回应，其他几位不插嘴。",
    together: true,
    steps: [
      { who: "you", from: "ptt", host: "按住说话键 · 桌面设备都不收音", text: "悟空，帮我想想周末可以做点什么。" },
      { who: "note", thinking: ["wukong"], host: "点名悟空 · 只有他回应", text: "只有被点名的悟空开始思考，另外三位不生成回答。" },
      { who: "wukong", to: ["wukong"], mode: "voice", host: "按键说话器 → 悟空", text: "去城外爬座小山！上午出发，下午回来，不耽误晚上歇着。" },
      { who: "note", host: "说话键只负责开口", text: "手里的说话键不用扮演悟空；回应从悟空自己的桌面设备发出。" },
    ],
  },
  {
    id: "group",
    label: "一起聊",
    title: "把几位叫到一起，听听不同想法",
    summary: "谁先说、谁补充，由话题决定；不必每句手工点名，也不是每位每轮都要开口。",
    together: true,
    devices: { sha: { status: "listen" } },
    steps: [
      { who: "note", from: "phone", host: "一起聊 · 四位成员", text: "在手机上选好四位伙伴，开始一起聊。" },
      { who: "you", from: "ptt", host: "按住说话键 · 桌面设备都不收音", text: "明天只有半天，又不想太累，你们帮我想想怎么安排。" },
      { who: "note", thinking: ["wukong"], waiting: ["bajie", "tang"], host: "悟空先说 → 八戒补充 → 唐僧收尾", text: "悟空开始思考，八戒和唐僧排队等待；沙僧这轮旁听，不发言。" },
      { who: "wukong", to: ["wukong"], mode: "voice", waiting: ["bajie", "tang"], host: "悟空发言 · 两位等待中", text: "上午去近郊走一圈，腿脚活动开，中午前就回来！" },
      { who: "bajie", to: ["bajie"], mode: "voice", waiting: ["tang"], host: "悟空说完 → 八戒接着补充", text: "猴哥这主意行，就是别走太远。走完吃顿好的，下午睡一觉，这半天才叫舒坦。" },
      { who: "tang", to: ["tang"], mode: "voice", host: "八戒说完 → 唐僧收个尾", text: "不必贪多。挑一处真正想去的地方，慢慢走就好。" },
    ],
  },
  {
    id: "discuss",
    label: "放手讨论",
    title: "让伙伴们接着讨论，你在一旁听",
    summary: "伙伴会接着彼此的观点说下去，讨论几轮就停下来等你，不会没完没了。",
    together: true,
    steps: [
      { who: "note", from: "phone", host: "允许讨论 · 有轮数上限", text: "在手机上选择「允许讨论」。" },
      { who: "you", from: "ptt", host: "按住说话键 · 桌面设备都不收音", text: "你们先讨论一下：爬山和逛博物馆，各有什么好处？我听听。" },
      { who: "wukong", to: ["wukong"], mode: "voice", waiting: ["sha"], host: "悟空先开个头", text: "爬山痛快！出一身汗，回来睡得香。" },
      { who: "sha", to: ["sha"], mode: "voice", waiting: ["bajie"], host: "沙僧接着悟空的话", text: "大师兄说得是。不过要是下雨，博物馆更稳妥些。" },
      { who: "bajie", to: ["bajie"], mode: "voice", host: "讨论到位 → 停下来等你", text: "那就看天气：晴天爬山，下雨逛馆，两头都不耽误。" },
      { who: "note", host: "等你开口", text: "伙伴之间用文字接话，不靠互相「听」；讨论告一段落，就安静下来等你。" },
    ],
  },
  {
    id: "interrupt",
    label: "随时打断",
    title: "想插话？按下说话键就行",
    summary: "按下的那一刻，所有设备同时停下来听你。正在说的停下，排队的取消，刚才的话题不会再冒出来。",
    together: true,
    steps: [
      { who: "bajie", to: ["bajie"], mode: "voice", waiting: ["tang"], host: "八戒正在说 · 唐僧排队", text: "要说吃的，那可多了：城东有家面馆，汤头熬了一整夜，还有……" },
      { who: "you", from: "ptt", stop: true, halt: true, host: "所有设备立刻停下", text: "按下说话键" },
      { who: "you", from: "ptt", host: "新的问题 · 旧话题作废", text: "先不说吃的，说说几点出发。" },
      { who: "tang", to: ["tang"], mode: "voice", host: "唐僧回答新问题", text: "早上八点出发，路上不赶，中午前就能到。" },
      { who: "note", host: "一按就停", text: "打断不用等任何设备回话；即使松开时什么也没说，旧的一轮也不会自己接着说下去。" },
    ],
  },
  {
    id: "quiet",
    label: "安静陪伴",
    title: "需要陪伴，但现在不适合出声",
    summary: "声音、文字、表情分别开关。不用在「全部打开」和「完全关掉」之间二选一。",
    together: true,
    devices: {
      tang: { caps: { voice: false } },
      wukong: { caps: { voice: false, text: false } },
      bajie: { caps: { voice: false } },
      sha: { caps: { voice: false } },
    },
    steps: [
      { who: "you", from: "ptt", host: "夜间 · 声音关闭，只留文字和表情", text: "睡不着，陪我待一会儿。" },
      { who: "sha", to: ["sha"], mode: "text", host: "沙僧 · 只显示文字", text: "我在。不说话也没关系，想说的时候按住键，小声说就好。" },
      { who: "wukong", to: ["wukong"], mode: "face", host: "悟空 · 只保留表情", text: "安静地眨了眨眼" },
      { who: "note", host: "表情不冒充详细回答", text: "只有表情时，设备用表情回应；需要完整内容，就选择能显示文字的设备。" },
    ],
  },
];

const allOn: Caps = { mic: true, voice: true, text: true, face: true };
const capLabels: [keyof Caps, string][] = [["mic", "收音"], ["voice", "声音"], ["text", "文字"], ["face", "表情"]];
const modeLabel: Record<Mode, string> = { voice: "声音", text: "文字", face: "表情" };

function nameOf(id: DeviceId) {
  return cast.find((c) => c.id === id)?.name ?? inputs.find((i) => i.id === id)?.name ?? id;
}

function viaOf(step: Step) {
  if (step.who === "you" && step.from) {
    if (step.stop) return nameOf(step.from);
    return step.from === "phone" ? "手机" : step.from === "ptt" ? "按键说话器 · 语音" : `${nameOf(step.from)}的设备 · 语音`;
  }
  if (step.who !== "note" && step.who !== "you" && step.mode) return `${nameOf(step.who)}的设备 · ${modeLabel[step.mode]}`;
  return "";
}

export function EnsembleStage() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const scene = scenes[sceneIndex];
  const [step, setStep] = useState(scene.steps.length - 1);
  const [playing, setPlaying] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = rootRef.current;
    if (!node || reduced.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setStep(0);
        setPlaying(true);
      },
      { rootMargin: "0px 0px 160px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || step >= scene.steps.length - 1) return;
    const timer = window.setTimeout(() => setStep((s) => s + 1), step === 0 ? 1900 : 2500);
    return () => window.clearTimeout(timer);
  }, [playing, step, scene.steps.length]);

  function choose(index: number) {
    setSceneIndex(index);
    if (reduced.current) {
      setStep(scenes[index].steps.length - 1);
      setPlaying(false);
    } else {
      setStep(0);
      setPlaying(true);
    }
  }

  function replay() {
    setStep(0);
    setPlaying(true);
  }

  const current = scene.steps[step];
  const animating = playing && step < scene.steps.length - 1;

  function stateOf(id: CastId) {
    const config = scene.devices?.[id];
    const caps = { ...allOn, ...(scene.together ? { mic: false } : null), ...config?.caps };
    if (config?.status === "offline") return { caps, tone: "offline", label: "离线" };
    if (current.halt) return { caps, tone: "halted", label: "已停下" };
    if (current.to?.includes(id)) return { caps, tone: "speaking", label: current.mode === "text" ? "显示文字" : current.mode === "face" ? "表情回应" : "正在说" };
    if (current.from === id) return { caps, tone: "input", label: "收音中" };
    if (current.thinking?.includes(id)) return { caps, tone: "thinking", label: "思考中" };
    if (current.waiting?.includes(id)) return { caps, tone: "waiting", label: "等待中" };
    if (config?.status === "listen") return { caps, tone: "listen", label: "旁听" };
    return { caps, tone: "idle", label: "待命" };
  }

  return (
    <div className="en-stage" ref={rootRef}>
      <div className="en-stage-tabs" role="tablist" aria-label="角色团的六种交流方式">
        {scenes.map((item, index) => (
          <button key={item.id} type="button" role="tab" aria-selected={index === sceneIndex} aria-controls="en-stage-panel" onClick={() => choose(index)}>
            <span>0{index + 1}</span>{item.label}
          </button>
        ))}
      </div>

      <div className="en-stage-body" id="en-stage-panel" role="tabpanel">
        <div className="en-stage-floor" aria-label={`${scene.label}：设备状态`}>
          <div className="en-cast-row">
            {cast.map((member) => {
              const state = stateOf(member.id);
              return (
                <article key={member.id} className={`en-device en-${member.id} is-${state.tone}`}>
                  <div className="en-device-screen">
                    <span className="en-glyph">{member.glyph}</span>
                    {state.tone === "speaking" && <span className="en-wave" aria-hidden="true"><i /><i /><i /><i /></span>}
                    {state.tone === "thinking" && <span className="en-dots" aria-hidden="true"><i /><i /><i /></span>}
                  </div>
                  <b>{member.name}</b>
                  <small>{state.label}</small>
                  <ul className="en-caps" aria-label={`${member.name}设备的表达设置`}>
                    {capLabels.map(([key, label]) => <li key={key} className={state.caps[key] ? "on" : "off"}>{label}</li>)}
                  </ul>
                  <i className="en-wire" aria-hidden="true" />
                </article>
              );
            })}
          </div>

          <div className="en-host">
            <span>EIDOLON ONE</span>
            <b>{current.host ?? scene.label}</b>
          </div>

          <div className="en-input-row">
            {inputs.map((device) => {
              const active = current.from === device.id;
              return (
                <article key={device.id} className={`en-input en-input-${device.id}${active ? " is-input" : ""}`}>
                  <i className="en-wire" aria-hidden="true" />
                  <span className="en-input-icon" aria-hidden="true" />
                  <div><b>{device.name}</b><small>{active ? (current.stop ? "已按下 · 全部停下" : current.who === "note" ? "设置中" : "收音中") : device.role}</small></div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="en-transcript">
          <header>
            <small>{String(sceneIndex + 1).padStart(2, "0")} · {scene.label}</small>
            <h3>{scene.title}</h3>
            <p>{scene.summary}</p>
          </header>
          <ol aria-live="polite">
            {scene.steps.map((item, index) => {
              const hidden = index > step;
              const member = cast.find((c) => c.id === item.who);
              return (
                <li key={`${scene.id}-${index}`} className={`en-line en-line-${item.who}${item.stop ? " is-stop" : ""}${hidden ? " is-pending" : ""}${index === step ? " is-current" : ""}`} aria-hidden={hidden}>
                  {item.who === "note" ? (
                    <p>{item.text}</p>
                  ) : (
                    <>
                      <span className="en-line-who">{item.who === "you" ? "你" : member?.glyph}</span>
                      <div>
                        <small>{item.who === "you" ? "你" : member?.name}<i>{viaOf(item)}</i></small>
                        <p>{item.mode === "face" ? `（${item.text}）` : item.stop ? item.text : `“${item.text}”`}</p>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
          <footer>
            <button type="button" onClick={replay} disabled={animating}>{animating ? "播放中…" : "重播这一幕 ↺"}</button>
            <span>点选上方，切换六种交流方式</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
