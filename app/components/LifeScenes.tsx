"use client";

import { useState } from "react";

const scenes = [
  {
    key: "workday", tab: "家 → 路上 → 车 → 工作", number: "01", title: "你换了四个场景，任务只继续了一次。", quote: "“把昨晚的方案，路上继续。到公司给我完整版本。”",
    outcome: "OS 保存任务状态和授权边界；不同产品只接管此刻最合适的交互。EID-X 负责发现设备、声明能力和完成交接。",
    steps: [
      { time: "07:20", place: "One Room", layer: "OS · HOME", text: "播报日程，载入家庭场景" },
      { time: "08:08", place: "One Go", layer: "OS · PERSONAL", text: "接续讨论，只携带当前任务" },
      { time: "08:26", place: "汽车", layer: "EID-X · DRIVE", text: "切换纯语音，收窄操作权限" },
      { time: "09:03", place: "One + Dock", layer: "OS · WORK", text: "恢复文档、来源与完整工作台" },
    ], boundary: "工作内容未同步给 Room；汽车只获得本次导航和语音能力",
  },
  {
    key: "travel", tab: "办公室 → 机场 → 酒店", number: "02", title: "离开常用设备，也不离开自己的工作现场。", quote: "“我要出差两天，把需要的项目状态带上。”",
    outcome: "Eidolon OS 生成一份有期限的出差状态；One Go 与临时屏幕协作，回家后自动撤销酒店设备的访问。",
    steps: [
      { time: "15:10", place: "One + Dock", layer: "OS · WORK", text: "封装出差任务与必要资料" },
      { time: "17:30", place: "One Go", layer: "OS · MOBILE", text: "值机、路线和待办持续可用" },
      { time: "21:05", place: "酒店屏幕", layer: "EID-X · TEMP", text: "临时投屏，不写入长期身份" },
      { time: "+48h", place: "Eidolon One", layer: "OS · RETURN", text: "收回临时权限，合并任务结果" },
    ], boundary: "酒店设备只得到两小时显示租约，私人记忆与账户凭证不离开受信设备",
  },
  {
    key: "family", tab: "个人 → 家庭 → 个人", number: "03", title: "共享一件事，不等于共享彼此的全部。", quote: "“周末一起出行，照顾到爸妈和孩子。”",
    outcome: "每位成员拥有自己的 OS 状态；One Room 发起共同场景，系统只合并大家明确同意的时间、预算和偏好。",
    steps: [
      { time: "19:20", place: "你的设备", layer: "OS · PRIVATE", text: "选择可共享的日期和预算" },
      { time: "19:22", place: "One Room", layer: "OS · FAMILY", text: "建立家庭协作场景" },
      { time: "19:28", place: "成员设备", layer: "EID-X · CONSENT", text: "分别确认自己的建议" },
      { time: "19:35", place: "个人空间", layer: "OS · PRIVATE", text: "结果写回，私人上下文重新封存" },
    ], boundary: "健康记录、工作安排和私人对话没有进入家庭共同上下文",
  },
  {
    key: "robot", tab: "计划 → 现实行动 → 追溯", number: "04", title: "AI 进入现实身体，权限仍然属于人。", quote: "“我不在家，帮我确认窗户并给植物浇水。”",
    outcome: "Eidolon OS 理解任务和风险；机器人通过 EID-X 声明视觉、移动与机械能力，完成后归还权限和行动记录。",
    steps: [
      { time: "12:04", place: "手机", layer: "OS · INTENT", text: "理解任务，列出需要的能力" },
      { time: "12:05", place: "家用机器人", layer: "EID-X · LEASE", text: "获得限定房间和动作租约" },
      { time: "12:11", place: "Eidolon OS", layer: "OS · REVIEW", text: "异常动作请求本人确认" },
      { time: "12:18", place: "行动记录", layer: "EID-X · TRACE", text: "任务完成，租约到期并写回结果" },
    ], boundary: "机器人不能进入未授权房间，也不能把视觉记录留作其他用途",
  },
] as const;

export function LifeScenes() {
  const [active, setActive] = useState(0);
  const scene = scenes[active];
  return (
    <div className="life-player life-player-v2">
      <div className="life-tabs" role="tablist" aria-label="Eidolon 多场景连续体验">
        {scenes.map((item, index) => <button key={item.key} type="button" role="tab" aria-selected={index === active} onClick={() => setActive(index)}><span>0{index + 1}</span>{item.tab}</button>)}
      </div>
      <article className="life-scene" key={scene.key}>
        <div className="life-story"><span className="chapter-number">{scene.number}</span><p className="scene-quote">{scene.quote}</p><h3>{scene.title}</h3><p>{scene.outcome}</p></div>
        <div className="life-journey">
          {scene.steps.map((step, index) => <div className="journey-stop" key={`${step.time}-${step.place}`}><div className="journey-meta"><span>{step.time}</span><b>{step.place}</b><small>{step.layer}</small></div><div className="journey-line"><i className={index === 0 ? "active" : ""} />{index < scene.steps.length - 1 && <span />}</div><p>{step.text}</p></div>)}
          <div className="privacy-seal"><i />边界仍在：{scene.boundary}</div>
        </div>
      </article>
    </div>
  );
}
