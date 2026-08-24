"use client";

import { useState } from "react";

const scenes = [
  { key: "create", tab: "灵感 → 成果", number: "01", title: "睡前一句话，醒来是一份能继续工作的方案。", quote: "“这个想法别丢。明早帮我整理成一页方案。”", outcome: "Eidolon 记得你正在做什么，也知道哪些资料可以用。它在夜里继续整理，早晨把方案和仍需你决定的问题一起交还。", steps: [{ time: "23:48", place: "手机", text: "收下想法与意图", accent: true }, { time: "00:12", place: "Eidolon One", text: "调用项目记忆与合适模型" }, { time: "07:40", place: "桌面", text: "交付方案；发送前仍由你确认" }], private: "私人日记没有进入项目上下文" },
  { key: "move", tab: "耳机 → 车 → 桌面", number: "02", title: "你在移动，事情不需要重新开始。", quote: "“把昨天没定下来的三件事，路上继续。”", outcome: "耳机里开始的讨论，上车后自动切成驾驶友好的语音，到公司时相关文档与待确认项已经停在桌面。", steps: [{ time: "08:08", place: "耳机", text: "唤起昨天的讨论", accent: true }, { time: "08:26", place: "车", text: "只保留语音与低风险动作" }, { time: "09:03", place: "桌面", text: "恢复完整工作现场" }], private: "驾驶中付款、发信和复杂编辑保持锁定" },
  { key: "family", tab: "个人 ↔ 家庭", number: "03", title: "共享一个家，不必共享彼此的全部。", quote: "“周末一起去哪里？照顾到爸妈和孩子。”", outcome: "每个人拥有自己的 Eidolon；家庭只共享被同意的日程、偏好与设备。它能一起计划，也知道什么不该说。", steps: [{ time: "19:20", place: "你", text: "分享可用周末与预算", accent: true }, { time: "19:22", place: "家庭空间", text: "形成共同计划" }, { time: "19:30", place: "每位成员", text: "分别确认自己的部分" }], private: "工作内容、健康记录与私人对话仍各自封存" },
] as const;

export function LifeScenes() {
  const [active, setActive] = useState(0);
  const scene = scenes[active];
  return (
    <div className="life-player">
      <div className="life-tabs" role="tablist" aria-label="Eidolon 生活场景">
        {scenes.map((item, index) => <button key={item.key} type="button" role="tab" aria-selected={index === active} onClick={() => setActive(index)}><span>0{index + 1}</span>{item.tab}</button>)}
      </div>
      <article className="life-scene" key={scene.key}>
        <div className="life-story"><span className="chapter-number">{scene.number}</span><p className="scene-quote">{scene.quote}</p><h3>{scene.title}</h3><p>{scene.outcome}</p></div>
        <div className="life-journey">
          {scene.steps.map((step, index) => <div className="journey-stop" key={step.time}><div className="journey-meta"><span>{step.time}</span><b>{step.place}</b></div><div className="journey-line"><i className={step.accent ? "active" : ""} />{index < scene.steps.length - 1 && <span />}</div><p>{step.text}</p></div>)}
          <div className="privacy-seal"><i />边界仍在：{scene.private}</div>
        </div>
      </article>
    </div>
  );
}
