"use client";

import { useState } from "react";

const scenes = [
  {
    id: "home",
    label: "家庭",
    code: "AT HOME",
    title: "One 持续运行，房间设备只负责听见、看见与回应。",
    moment: "你回到家，客厅恢复正在做的事；阳台传感器提示植物缺水，对话机器人获得一次短时行动许可。",
    lease: "共同空间只得到家庭任务与成员关系；私人记忆仍留在 One。",
    devices: [
      ["ROOM", "One Room", "远场对话"],
      ["SENSE", "Presence Node", "存在 / 空气"],
      ["ACT", "Dialogue Bot", "移动与取物"],
      ["SHOW", "Ambient Display", "日程 / 提醒"],
    ],
  },
  {
    id: "office",
    label: "办公",
    code: "AT WORK",
    title: "One 带来项目状态，Dock 把它展开成完整工作台。",
    moment: "入座后，提案、会议关系和待确认问题恢复；会议结束，公共音视频设备不保留个人上下文。",
    lease: "办公区只得到当前项目和会议身份；账户凭证、私人关系与其他项目继续封存。",
    devices: [
      ["DESK", "One Dock", "显示 / 输入 / 存储"],
      ["MEET", "Meeting Bar", "镜头 / 麦克风"],
      ["READ", "E-ink Board", "提纲 / 批注"],
      ["CTRL", "Control Dial", "Agent / 工具快捷操作"],
    ],
  },
  {
    id: "vehicle",
    label: "车载",
    code: "IN VEHICLE",
    title: "车辆获得一段行程，不会变成另一个拥有你的 AI。",
    moment: "上车后继续路线、播客和待确认事项；驾驶中只保留低干扰交互，到达后结果回到 One。",
    lease: "车辆只得到本次路线、到达时间和驾驶中允许的提醒，行程结束自动收回。",
    devices: [
      ["BRIDGE", "One Link Auto", "车端可信接入"],
      ["SHOW", "Vehicle Display", "路线 / 提醒"],
      ["TALK", "Cabin Audio", "低干扰对话"],
      ["CTRL", "Wheel Control", "确认 / 取消"],
    ],
  },
  {
    id: "studio",
    label: "创作",
    code: "IN STUDIO",
    title: "素材、控制器和机器人围绕当前作品临时组成一套工具。",
    moment: "相机素材进入当前项目，控制台切换 Agent 与时间线，机械臂只执行已经确认的拍摄动作。",
    lease: "每件工具只读取当前作品；发布权、未公开素材和危险动作仍由本人确认。",
    devices: [
      ["DESK", "One Dock Studio", "完整创作上下文"],
      ["CAPTURE", "Camera Grip", "画面 / 现场声音"],
      ["CTRL", "Creator Console", "时间线 / Agent"],
      ["ACT", "Robot Link", "机械臂 / 灯光"],
    ],
  },
  {
    id: "care",
    label: "照护",
    code: "FOR CARE",
    title: "照护设备看见趋势，但不把生活变成无限期监控。",
    moment: "睡眠与活动趋势触发温和提醒；需要帮助时，辅助按钮和陪护设备把明确事件交给指定的人。",
    lease: "健康趋势按对象、目的和期限共享；原始流与私人对话不默认扩散。",
    devices: [
      ["ROOM", "One Room Care", "低打扰对话"],
      ["SENSE", "Sleep Node", "睡眠 / 呼吸趋势"],
      ["ACCESS", "Tactile Switch", "一键求助 / 确认"],
      ["ACT", "Care Companion", "提醒 / 陪同行动"],
    ],
  },
] as const;

export function OneSceneMatrix() {
  const [active, setActive] = useState(0);
  const scene = scenes[active];

  return (
    <div className="one-scene-player">
      <div className="one-scene-tabs" role="tablist" aria-label="Eidolon One 产品矩阵在不同环境中的组合">
        {scenes.map((item, index) => (
          <button key={item.id} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
            <span>0{index + 1}</span>{item.label}
          </button>
        ))}
      </div>
      <div className="one-scene-body" key={scene.id}>
        <div className="one-scene-copy">
          <small>{scene.code}</small>
          <h3>{scene.title}</h3>
          <p>{scene.moment}</p>
          <div><span>LEASE BOUNDARY</span><b>{scene.lease}</b></div>
        </div>
        <div className="one-scene-composition" aria-label={`${scene.label}环境产品组合`}>
          <div className="scene-host-product"><small>TRUSTED HOST</small><b>Eidolon One</b><span>Eidolon OS</span></div>
          {scene.devices.map(([code, name, role], index) => (
            <article className={`scene-product scene-product-${index + 1}`} key={name}>
              <small>{code}</small><b>{name}</b><span>{role}</span>
            </article>
          ))}
          <div className="scene-lease-ring"><span>EID-X · DISCOVER · VERIFY · LEASE · RETURN</span></div>
        </div>
      </div>
    </div>
  );
}
