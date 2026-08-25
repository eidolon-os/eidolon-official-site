"use client";

import { useState } from "react";

const scenes = [
  {
    key: "workday", tab: "连续创作的一天", number: "01", title: "灵感经过不同界面，仍然长成同一个作品。", quote: "“把昨晚的想法继续整理，等我坐下来时展开完整版本。”",
    outcome: "OS 保存任务状态和授权边界；不同产品只接管此刻最合适的交互。EID-X 负责发现设备、声明能力和完成交接。",
    steps: [
      { time: "07:20", place: "床边光幕", layer: "EID-X · GLANCE", text: "用三行摘要唤醒今天的创作线索" },
      { time: "08:08", place: "One Go", layer: "OS · VOICE", text: "在走动中继续推敲，只带当前片段" },
      { time: "08:40", place: "随行眼镜", layer: "EID-X · VISUAL", text: "在视野边缘确认结构与素材" },
      { time: "09:03", place: "One + Dock", layer: "OS · STUDIO", text: "展开文档、来源与完整创作台" },
    ], boundary: "不同界面只得到适合自己的片段，私人记录没有被整份复制",
  },
  {
    key: "travel", tab: "陌生空间继续工作", number: "02", title: "离开常用设备，也不离开自己的工作现场。", quote: "“我要离开两天，把需要的项目状态带上。”",
    outcome: "Eidolon OS 生成一份有期限的出差状态；One Go 与临时屏幕协作，回家后自动撤销酒店设备的访问。",
    steps: [
      { time: "15:10", place: "One + Dock", layer: "OS · WORK", text: "封装出差任务与必要资料" },
      { time: "17:30", place: "One Go", layer: "OS · MOBILE", text: "行程、路线和待办持续可用" },
      { time: "21:05", place: "临时屏幕", layer: "EID-X · TEMP", text: "借用空间里的显示能力，不写入身份" },
      { time: "+48h", place: "Eidolon One", layer: "OS · RETURN", text: "收回临时权限，合并任务结果" },
    ], boundary: "酒店设备只得到两小时显示租约，私人记忆与账户凭证不离开受信设备",
  },
  {
    key: "family", tab: "共同计划，各自保留", number: "03", title: "共享一件事，不等于共享彼此的全部。", quote: "“一起安排周末，让每个人都舒服。”",
    outcome: "每位成员拥有自己的 OS 状态；One Room 发起共同场景，系统只合并大家明确同意的时间、预算和偏好。",
    steps: [
      { time: "19:20", place: "你的设备", layer: "OS · PRIVATE", text: "选择可共享的日期和预算" },
      { time: "19:22", place: "One Room", layer: "OS · FAMILY", text: "建立家庭协作场景" },
      { time: "19:28", place: "成员设备", layer: "EID-X · CONSENT", text: "分别确认自己的建议" },
      { time: "19:35", place: "个人空间", layer: "OS · PRIVATE", text: "结果写回，私人上下文重新封存" },
    ], boundary: "健康记录、工作安排和私人对话没有进入家庭共同上下文",
  },
  {
    key: "robot", tab: "让想法成为现实动作", number: "04", title: "AI 进入现实行动，权限仍然属于人。", quote: "“帮我确认工作室的窗户，再给植物浇水。”",
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
