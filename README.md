# Eidolon OS official site

Eidolon OS 的官方愿景站点。

核心命题：**一个人的 AI，出现在每个需要它的时刻。**

- `/`：Eidolon OS、One 旗舰主机、EID-X 与家庭、办公、车载等真实使用示例
- `/os`：个人 AI 操作系统的能力、架构与设备运行模式
- `/one`：Eidolon OS 官方旗舰主机：一台主机按需长出各个场景、One 外设产品家族与环境使用示例
- `/companions`：五位原创角色伙伴的桌面陪伴
- `/ensemble`：IP 角色团——一组角色分住多台设备的会话体验（单聊、一起聊、换处回应、传话、安静陪伴）
- `/smart-home`：智能家居——手机整理、One 保存与执行、家居中控面板显示与语音输入
- `/manifesto`：从设备互联到个人智能体连续存在的产品哲学
- `/protocol`：面向传感器、车载界面、专业工具与机器人的 EID-X 设备协议

完整产品思想见 [VISION.md](./VISION.md)。

## Local development

```bash
npm install
npm run dev
npm test
```

## 文案原则

官网面向客户与用户。页面用现在时讲产品能做什么、用起来怎样，不写"产品预览、开发中、待测试、首个版本、尚未公布"等研发进度或免责口吻，也不出现内部代号、开发板或芯片型号；`tests/rendered-html.test.mjs` 会检查 `app/` 源码中的这类用语。研发进度与验收状态记录在 `docs/` 的方案文档里，不写进官网。

## 场景子页

`/ensemble` 与 `/smart-home` 是 Eidolon One 的场景子页，内容分别依据 `docs/跨系统/Eidolon统一文本入口与多设备陪伴团队方案-20260923.md` 与 `docs/跨系统/Korvo-1家居中控终端与智能家居能力接入方案-20260925.md` 的产品体验部分。页面上的交互演示只在浏览器内运行，不连接设备或服务。IP 角色团的示例角色取材自古典名著《西游记》（公版），只用文字字形呈现，不使用任何影视或动画形象。

## 角色陪伴产品页

`/companions` 介绍主机联动、五位原创伙伴和从选择角色到设备表达配置的产品路径。主导航与 `/one` 提供入口，静态部署脚本包含该页面。

官方人格内容由相邻 `eidolon_data` 仓库的 `resources/companion_presets` 管理。修改后运行 `npm run companions:sync` 更新本站公开字段快照，`npm run companions:check` 检查漂移。独立网站构建使用提交的 JSON，不要求 Data 服务在线或相邻仓库存在。

`public/companions/ASSET-PROVENANCE.md` 记录角色形象图的生成方式和提示词。
