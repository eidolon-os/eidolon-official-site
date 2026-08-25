# Eidolon 产品与系统架构

## 一句话定位

**Eidolon OS 是个人 AI 的操作系统；Eidolon One 是由官方完整定义软硬件体验的旗舰设备；One 外设与第三方设备都构建在 Eidolon OS 与 EID-X 协议之上。**

可以用一个直观类比理解：Android 是可运行于多种硬件的移动操作系统，旗舰手机负责定义这一代系统的最佳体验。相应地，Eidolon OS 是系统平台，Eidolon One 是旗舰个人 AI 产品。类比只用于解释产品层级；Eidolon 的核心差异仍是个人 AI 的长期连续性与主权。

## 四个层级

### 1. Eidolon OS：操作系统

OS 提供所有产品共同需要的个人 AI 系统能力：

- 个人 AI 运行时：身份、记忆、关系、任务与长期状态；
- 智能与 Agent 系统：本地模型、云模型、工具与专业 Agent；
- 体验与场景框架：语音、屏幕、空间、主动服务与任务接力；
- 主权与安全服务：数据边界、设备身份、授权、确认、审计与恢复；
- 设备协作：通过 EID-X 发现设备、调用能力并完成场景交接。

Eidolon OS 不是某台主机的固件，也不是 Eidolon One 的别名。它可以运行于官方旗舰、未来的兼容整机和不同形态的个人 AI 设备。

### 2. Eidolon One：官方旗舰

Eidolon One 是由官方共同定义硬件、系统、交互和安全体验的旗舰个人 AI 设备。它承担三个角色：

1. 让普通用户直接购买并体验完整的 Eidolon OS；
2. 建立系统在本地计算、交互连续性、隐私和外设协作上的体验标准；
3. 为合作伙伴和生态设备提供清晰的参考产品。

One 的价值不是“只有它能够运行 Eidolon”，而是“由官方把 Eidolon OS 做到最好”。用户状态可以迁移和恢复，兼容设备也可以运行系统或加入生态。

### 3. One Family：官方外设家族

One Go、One Room、One Dock、One Link 是围绕 Eidolon One 设计的官方外设方向，但它们并非脱离系统的被动附件。每件产品都建立在 Eidolon OS 的场景框架和 EID-X 的设备协议之上。

- **One Go**：随身语音、轻量感知与移动交互；
- **One Room**：家庭与房间中的空间交互；
- **One Dock**：桌面显示、输入、音频、存储和工作设备扩展；
- **One Link**：既有汽车、机器人和其他硬件的连接桥。

### 4. EID-X Ecosystem：兼容设备生态

第三方厂商不需要复制 Eidolon One。它们可以选择三种接入方式：

- 运行完整 Eidolon OS，形成独立的兼容个人 AI 产品；
- 运行轻量 Companion 能力，与主设备共同呈现体验；
- 只实现 EID-X，向系统提供传感器、显示、车辆或机械能力。

EID-X 定义设备身份、能力声明、上下文范围、授权租约、场景交接和行动追溯。它是系统与现实硬件之间的共同语言。

## 产品架构

```text
Eidolon One      One Family      Partner Devices
       \              |              /
        ─────── Eidolon OS ─────────
  Runtime · Memory · Agent · Scene · Authority
        ───────── EID-X ────────────
 Sensors · Displays · Vehicles · Robotics
```

这张图表达三件事：

1. One、官方外设和第三方设备属于产品层；
2. Eidolon OS 是所有产品复用的系统层；
3. EID-X 是设备发现、能力调用和场景交接的协议层。

个人主权贯穿 OS 与协议，而不是只存在于 Eidolon One 的硬件设置中。

## 场景连续性

Eidolon 的场景融合不是把同一界面复制到每台设备，而是让任务状态、交互方式和权限边界随着人移动。

### 工作日接力

早晨 One Room 进入家庭场景；离家后 One Go 接续当前讨论；上车后，汽车通过 EID-X 提供麦克风、音响和导航，OS 自动切换为驾驶交互并锁定高风险操作；到公司后 One 与 Dock 恢复完整文档、来源和 Agent 工作台。

连续的是任务状态，变化的是产品、界面和权限。

### 临时出差

One 将必要项目状态准备为有期限的出差上下文。One Go 在移动中继续任务，酒店屏幕只获得临时显示权限。回家后，OS 合并结果并撤销酒店设备访问。

迁移的是工作状态，不是整份私人数据。

### 家庭协作

每位成员保有自己的 Eidolon OS 状态。One Room 发起共同计划时，只合并成员同意共享的时间、预算和偏好。计划结束后，家庭结果分别写回个人空间，工作、健康和私人对话继续封存。

### 机器人任务

OS 理解任务和风险，机器人通过 EID-X 声明视觉、移动与机械能力，获得限定房间、动作和时间的租约。异常动作需要本人确认；任务结束，租约到期，结果与责任链写回。

## 设计哲学

### 属于你

个人 AI 的身份、长期记忆、权限和恢复权由 Owner 掌握。它是 Eidolon OS 的系统原则，不是 One 的独家卖点。

### 跟随你

任务和关系可以在不同产品与场景中延续。设备负责当下体验，OS 负责连续状态，EID-X 负责交接。

### 不被单一产品锁定

模型可以替换，硬件可以升级，Eidolon One 可以换代，兼容设备可以加入。个人 AI 不因某一件产品离开而归零。

## 官网信息架构

- **首页 `/`**：先讲 OS、One、One Family、EID-X 的产品层级，再展示系统能力、产品矩阵和多场景连续体验。
- **OS `/os`**：解释操作系统的服务层、技术结构、三种设备运行模式和场景交接机制。
- **One `/one`**：解释官方旗舰角色、旗舰体验标准、官方外设家族和 One 场景接力。
- **EID-X `/protocol`**：解释协议在架构中的位置、六项契约与厂商接入路径。
- **愿景 `/manifesto`**：解释为什么个人 AI 需要独立操作系统，以及主权如何成为系统规则。

## 公司与增长路径

### One 建立旗舰体验

通过官方整机让用户直接理解产品，为系统能力、交互范式和安全边界建立标杆。

### OS 形成平台复用

把个人 AI 运行时、Agent、记忆、场景和主权能力复用到更多官方产品与合作伙伴设备。

### EID-X 扩大现实场景

让不同品牌的汽车、空间、家电与机器人接入同一用户关系，形成兼容认证、开发服务、OEM 合作和能力生态。

功能可以被复刻，但跨产品积累的系统能力、兼容标准、开发生态、长期用户状态和经过验证的信任关系不会被一次性复制。

## 外部方向证据

- [Solid Project](https://solidproject.org/about) 验证了应用与个人数据解耦、由个人数据空间授予访问的长期方向。
- [W3C DID Core](https://www.w3.org/TR/did-core/) 为可迁移、可验证且不依附单一平台的身份提供了标准基础。
- [NIST software agent identity and authorization concept paper](https://www.nist.gov/news-events/news/2026/02/new-concept-paper-identity-and-authority-software-agents) 说明智能体身份、授权与责任链正在成为现实基础设施问题。
- [Apple Private Cloud Compute](https://security.apple.com/documentation/private-cloud-compute/) 表明“本地优先、云端按需并可验证”正在成为高信任 AI 的产品要求。
- [EU DMA end-user data portability](https://digital-markets-act.ec.europa.eu/developer-portal/end-user-data-portability_en) 让持续、实时的数据可携带性逐渐成为平台义务。
