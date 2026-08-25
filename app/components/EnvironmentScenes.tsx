"use client";

import { useState } from "react";

const environments = [
  {
    key: "home",
    tab: "家庭",
    en: "AT HOME",
    title: "One 在家中持续运行，设备只带来此刻需要的感知与行动。",
    intent: "“我回来了。把今天剩下的事接起来，也看看阳台的植物。”",
    result: "Eidolon OS 识别你、恢复未完成任务，并判断哪些设备可以参与；One 负责本地运行与确认。",
    nodes: [
      ["环境传感器", "温度与空气变化", "SENSE"],
      ["One Room", "远场对话与共享提醒", "TALK"],
      ["对话机器人", "陪伴与简单移动", "ACT"],
      ["灯光 / 屏幕", "只呈现当前内容", "SHOW"],
    ],
    lease: "机器人获得 15 分钟阳台行动权限；家庭成员的私人记忆不会进入共同空间。",
  },
  {
    key: "office",
    tab: "办公",
    en: "AT WORK",
    title: "到办公区，完整工作状态展开；共享设备仍然看不到你的全部。",
    intent: "“把上午的讨论整理成方案，会上只显示可以公开的部分。”",
    result: "One + Dock 恢复项目、来源和 Agent；会议记录器与共享屏通过 EID-X 获取不同范围的临时上下文。",
    nodes: [
      ["One + Dock", "项目与完整工作台", "HOST"],
      ["会议记录器", "声音与说话人线索", "LISTEN"],
      ["共享屏", "仅展示批准内容", "SHOW"],
      ["打印 / 会议机器人", "执行已确认动作", "ACT"],
    ],
    lease: "会议结束后，共享屏和记录器的访问自动到期；个人关系与其他项目继续封存。",
  },
  {
    key: "vehicle",
    tab: "车载",
    en: "IN VEHICLE",
    title: "进入车辆，接续的是这段行程，不是把整个人复制进车机。",
    intent: "“继续去客户那里，把需要确认的内容在停车后提醒我。”",
    result: "Eidolon OS 交接路线、日程和适合驾驶状态的交互；车载屏幕、音频与车辆能力获得行程租约。",
    nodes: [
      ["车载屏幕", "路线与必要提醒", "SHOW"],
      ["车内音频", "低干扰语音交互", "TALK"],
      ["车辆状态", "电量与行程信息", "SENSE"],
      ["方向盘按键", "驾驶中的明确确认", "CONFIRM"],
    ],
    lease: "车机只获得本次行程需要的信息；到达后权限收回，私人对话和长期记忆不留在车辆中。",
  },
  {
    key: "studio",
    tab: "创作",
    en: "IN STUDIO",
    title: "创作时，One 让相机、笔、控制器和 Agent 成为同一个工作台。",
    intent: "“沿用昨天的视觉方向，把刚拍的素材整理成三个版本。”",
    result: "OS 保持创作意图、版本关系与来源；One 调度本地素材和模型，外设提供更适合的输入与输出。",
    nodes: [
      ["相机握柄", "素材与拍摄参数", "CAPTURE"],
      ["触控笔", "草图与精细控制", "CREATE"],
      ["音乐控制器", "节奏与实时操作", "CONTROL"],
      ["机械臂", "受控的现实制作", "MAKE"],
    ],
    lease: "每件工具只接触当前作品需要的数据；发布、覆盖和机械动作仍需明确确认。",
  },
  {
    key: "care",
    tab: "照护",
    en: "IN CARE",
    title: "照护不是持续监视，而是在允许的边界里发现真正需要回应的变化。",
    intent: "“如果今晚状态异常，先提醒我；必要时再联系指定的人。”",
    result: "One 在本地汇总趋势，Eidolon OS 按预设规则判断提醒层级；传感器只提供信号，不拥有健康档案。",
    nodes: [
      ["睡眠传感器", "趋势而非原始录音", "SENSE"],
      ["手表 / 触觉手环", "提醒与确认", "FEEL"],
      ["药盒 / 环境节点", "状态与简单动作", "ACT"],
      ["远程照护屏", "经本人允许后联系", "CONNECT"],
    ],
    lease: "只有达到本人设定的条件才升级共享；所有读取、提醒和联系都留下可追溯记录。",
  },
] as const;

export function EnvironmentScenes() {
  const [active, setActive] = useState(0);
  const environment = environments[active];

  return (
    <div className="environment-player">
      <div className="environment-tabs" role="tablist" aria-label="Eidolon 在不同真实环境中的使用示例">
        {environments.map((item, index) => (
          <button key={item.key} type="button" role="tab" aria-selected={index === active} onClick={() => setActive(index)}>
            <span>0{index + 1}</span>{item.tab}
          </button>
        ))}
      </div>
      <article className="environment-story" key={environment.key}>
        <div className="environment-copy">
          <small>{environment.en}</small>
          <h3>{environment.title}</h3>
          <blockquote>{environment.intent}</blockquote>
          <p>{environment.result}</p>
        </div>
        <div className="environment-diagram">
          <div className="environment-host"><small>TRUSTED HOST</small><b>Eidolon One</b><span>RUNNING EIDOLON OS</span></div>
          <div className="environment-nodes">
            {environment.nodes.map(([name, detail, capability], index) => (
              <div className={`environment-node node-${index + 1}`} key={name}>
                <span>{capability}</span><b>{name}</b><small>{detail}</small>
              </div>
            ))}
          </div>
          <div className="environment-protocol"><b>EID-X LEASE</b><span>按任务发现、授权与收回</span></div>
        </div>
        <p className="environment-boundary"><i />主权边界：{environment.lease}</p>
      </article>
    </div>
  );
}
