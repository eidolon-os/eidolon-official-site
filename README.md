# Eidolon OS official site

Eidolon OS 的官方愿景站点。

核心命题：**一个人的 AI，出现在每个需要它的时刻。**

- `/`：Eidolon OS、One 旗舰主机、EID-X 与家庭、办公、车载等真实使用示例
- `/os`：个人 AI 操作系统的能力、架构与设备运行模式
- `/one`：Eidolon OS 官方旗舰主机、One 外设产品家族与环境使用示例
- `/manifesto`：从设备互联到个人智能体连续存在的产品哲学
- `/protocol`：面向传感器、车载界面、专业工具与机器人的 EID-X 设备协议

完整产品思想见 [VISION.md](./VISION.md)。

## Local development

```bash
npm install
npm run dev
npm test
```

## 角色陪伴产品页

`/companions` 介绍主机联动、五位原创伙伴和从选择角色到设备表达配置的产品路径；当前为产品预览，不是已发售 SKU 清单。主导航与 `/one` 提供入口，静态部署脚本包含该页面。

官方人格内容由相邻 `eidolon_data` 仓库的 `resources/companion_presets` 管理。修改后运行 `npm run companions:sync` 更新本站公开字段快照，`npm run companions:check` 检查漂移。独立网站构建使用提交的 JSON，不要求 Data 服务在线或相邻仓库存在。

`public/companions/ASSET-PROVENANCE.md` 记录角色概念图的生成方式和提示词。图像不是设备外观承诺；当前不宣称角色专属音色。
