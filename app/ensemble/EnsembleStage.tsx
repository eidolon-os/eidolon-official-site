"use client";

import { useEffect, useRef, useState } from "react";
import { cast, type CastId } from "./cast";

type InputId = "ptt" | "phone";
type DeviceId = CastId | InputId;

type Step = {
  who: "you" | "note" | CastId;
  from?: DeviceId;
  to?: CastId[];
  thinking?: CastId[];
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
  steps: Step[];
};

const inputs: { id: InputId; name: string; role: string }[] = [
  { id: "ptt", name: "按键说话器", role: "按住开口 · 按下即停" },
  { id: "phone", name: "手机", role: "选成员 · 开始结束 · 看状态" },
];

// 团队里桌面设备只发声、不收音；每一步只决定一位成员，前一位说完再决定下一步。
const scenes: Scene[] = [
  {
    id: "named",
    label: "点名回应",
    title: "点到谁，谁就回应",
    summary: "在手边开口，被点名的那位在自己的设备上回应，其他几位不插嘴。",
    steps: [
      { who: "you", from: "ptt", host: "按住说话键 · 桌面设备都不收音", text: "悟空，帮我想想周末可以做点什么。" },
      { who: "note", thinking: ["wukong"], host: "点名悟空 · 只有他来想", text: "只有被点名的悟空开始想，另外三位不生成回答。" },
      { who: "wukong", to: ["wukong"], host: "按键说话器 → 悟空的设备", text: "去城外爬座小山！上午出发，下午回来，不耽误晚上歇着。" },
      { who: "note", host: "说话键只负责开口", text: "手里的说话键不用扮演谁；回应从悟空自己的桌面设备发出。" },
    ],
  },
  {
    id: "group",
    label: "一起出主意",
    title: "问一句，大家接着出主意",
    summary: "没有排好的发言顺序：前一位说完，再决定下一步由谁接、要不要接。不是每位都得开口。",
    steps: [
      { who: "note", from: "phone", host: "团队开始 · 四位成员", text: "在手机上选好四位成员，给他们派上本场角色，点「开始团队」。" },
      { who: "you", from: "ptt", host: "按住说话键 · 桌面设备都不收音", text: "明天只有半天，又不想太累，你们帮我想想怎么安排。" },
      { who: "note", thinking: ["wukong"], host: "这一步：悟空接话", text: "每一步只决定一位——这次是悟空先接。" },
      { who: "wukong", to: ["wukong"], host: "悟空说完 → 再决定下一步", text: "上午去近郊走一圈，腿脚活动开，中午前就回来！" },
      { who: "bajie", to: ["bajie"], host: "这一步：八戒接着补充", text: "猴哥这主意行，就是别走太远。走完吃顿好的，下午睡一觉，这半天才叫舒坦。" },
      { who: "note", host: "这一轮到此为止", text: "唐僧和沙僧这轮没开口，但都听得到大家公开说了什么。" },
    ],
  },
  {
    id: "discuss",
    label: "接着聊下去",
    title: "给个目标，让他们接着聊",
    summary: "写下交流目标、设好连续回复的次数，伙伴们会接着彼此的话说下去，到次数就停下来等你。",
    steps: [
      { who: "note", from: "phone", host: "交流目标 · 连续回复 3 次", text: "在手机上写下交流目标「定一个周末去处」，连续回复上限设为 3。" },
      { who: "you", from: "ptt", host: "按住说话键 · 桌面设备都不收音", text: "你们商量一下：爬山还是逛博物馆？" },
      { who: "wukong", to: ["wukong"], host: "第 1 次", text: "爬山痛快！出一身汗，回来睡得香。" },
      { who: "sha", to: ["sha"], host: "第 2 次 · 接着悟空的话", text: "大师兄说得是。不过要是下雨，博物馆更稳妥些。" },
      { who: "bajie", to: ["bajie"], host: "第 3 次 · 到次数，停下来等你", text: "那就看天气：晴天爬山，下雨逛馆，两头都不耽误。" },
      { who: "note", host: "等你开口", text: "伙伴之间用文字接话，不靠互相「听」。你再说一句，大家接着刚才的话题往下聊。" },
    ],
  },
  {
    id: "interrupt",
    label: "随时打断",
    title: "想插话？按下说话键就行",
    summary: "按下的那一刻，所有设备同时停下来听你。没说完的半句不算数，刚才那一轮也不会自己接着说。",
    steps: [
      { who: "bajie", to: ["bajie"], host: "八戒正在说", text: "要说吃的，那可多了：城东有家面馆，汤头熬了一整夜，还有……" },
      { who: "you", from: "ptt", stop: true, halt: true, host: "所有设备立刻停下", text: "按下说话键" },
      { who: "you", from: "ptt", host: "新的问题 · 旧话题作废", text: "先不说吃的，说说几点出发。" },
      { who: "tang", to: ["tang"], host: "唐僧回答新问题", text: "早上八点出发，路上不赶，中午前就能到。" },
      { who: "note", host: "一按就停", text: "打断不用等任何设备回话；八戒没说完的那半句，不会被当成已经说过的话。" },
    ],
  },
];

function nameOf(id: DeviceId) {
  return cast.find((c) => c.id === id)?.name ?? inputs.find((i) => i.id === id)?.name ?? id;
}

function viaOf(step: Step) {
  if (step.who === "you" && step.from) return step.stop ? nameOf(step.from) : step.from === "phone" ? "手机" : "按键说话器 · 语音";
  if (step.who !== "note" && step.who !== "you") return `${nameOf(step.who)}的设备 · 声音`;
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
    if (current.halt) return { tone: "halted", label: "已停下" };
    if (current.to?.includes(id)) return { tone: "speaking", label: "正在说" };
    if (current.thinking?.includes(id)) return { tone: "thinking", label: "思考中" };
    return { tone: "idle", label: "安静" };
  }

  return (
    <div className="en-stage" ref={rootRef}>
      <div className="en-stage-tabs" role="tablist" aria-label="一场团队里的四种聊法">
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
          <p className="en-floor-note">团队里，桌面设备只发声、不收音；一次只有一台在说。</p>
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
                        <p>{item.stop ? item.text : `“${item.text}”`}</p>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
          <footer>
            <button type="button" onClick={replay} disabled={animating}>{animating ? "播放中…" : "重播这一幕 ↺"}</button>
            <span>点选上方，切换四种聊法</span>
          </footer>
        </div>
      </div>
    </div>
  );
}
