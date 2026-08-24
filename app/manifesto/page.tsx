import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { VesselMark } from "../components/brand";
import { site, sources } from "../content";

export const metadata: Metadata = {
  title: "战略、壁垒与投资论证 | Eidolon OS",
  description: "Eidolon OS 的设计哲学、数据战略、产品切口、复利壁垒与未来 18 个月必须交付的投资证据。",
};

const copyable = ["语音对话", "向量记忆", "工具调用", "设备面板", "模型路由", "本地部署脚本"];
const slow = [
  ["经验证的长期状态", "被用户纠正过的记忆、授权史和结果史，必须随真实使用形成。"],
  ["跨域一致性", "身份、设备、会话、记忆和执行由不同权威面协作，失败与恢复要保持一致。"],
  ["可信评测系统", "性能、隐私、权限和多设备回归需要长期故障语料与真机纪律。"],
  ["中立生态位置", "不绑定某个模型或本体，才能成为多个硬件厂商都愿意接入的主权层。"],
  ["分发与认证", "OEM 集成、硬件认证、售后与行业信任不是复制代码可以获得的。"],
];

const laws = [
  ["连续性先于能力", "一次更聪明的回答不如多年不丢失的身份、记忆和责任边界。"],
  ["主权不是数据孤岛", "用户可以查看、纠正、导出和删除。防御来自服务价值，不来自扣住数据。"],
  ["本地优先不是拒绝云", "身份、记忆与权限以本地为事实源；云是可替换的算力、同步和备份。"],
  ["每项能力必须可治理", "记忆要有来源，工具要有授权，动作要有回执，失败要能回滚。"],
  ["身体是端点，不是灵魂", "硬件可替换、可扩展；长期 companion 不应被一台设备带走。"],
  ["证据高于愿景", "已实现、正在闭环、研究中必须明确标注；性能数字必须有样本与口径。"],
];

const scorecard = [
  { k: "激活", metric: "24 小时内完成一次“正确回忆 + 真实行动”", why: "证明不是普通聊天入口。" },
  { k: "留存", metric: "8 周付费留存与每周主动回访", why: "证明连续性形成习惯而非新鲜感。" },
  { k: "结果", metric: "每活跃用户每周可信完成任务数", why: "把关系价值转化为可量化 ROI。" },
  { k: "信任", metric: "误授权事件为 0；纠错、撤销与删除成功率", why: "证明主权是机制，不是文案。" },
  { k: "多身体", metric: "跨设备迁移成功率与重复应答率", why: "证明身份—身体解耦在体验上成立。" },
  { k: "生态", metric: "第三方身体接入天数与一致性通过率", why: "证明系统能从产品走向平台。" },
];

const program = [
  {
    phase: "0—90 天",
    title: "把工程证据产品化",
    actions: ["建立公开 Evidence Ledger：性能、回归、失败与成熟度", "锁定桌面数字同事唯一首发旅程", "招募 20–30 名设计伙伴，定义付费与信任基线"],
    gate: "不是 Demo 漂亮，而是连续 4 周产生可信完成任务。",
  },
  {
    phase: "3—9 个月",
    title: "用一个垂直切口证明留存",
    actions: ["围绕创作者 / 顾问收敛语音—记忆—执行闭环", "把 Memory Inspector 与 Permission Ledger 做成核心产品面", "建立可选择加入的本地评测与匿名故障回传"],
    gate: "8 周付费留存、任务完成、信任事件同时过线。",
  },
  {
    phase: "6—18 个月",
    title: "把证据卖给硬件厂商",
    actions: ["选择 1 类陪伴硬件和 1 类桌面机器人做参考接入", "发布 EID-* 一致性套件与安全等级", "以记忆治理、合规和跨身体连续性收取授权费"],
    gate: "至少两个独立厂商、两类身体、可重复的接入周期。",
  },
  {
    phase: "之后",
    title: "从 OS 授权走向认证网络",
    actions: ["认证 Trusted Body / Private Sensor / Actuator Safe", "兼容 MCP、A2A、Matter，而非另造封闭连接层", "研究可审计遗忘、联邦评测与跨中枢漫游"],
    gate: "第三方生态带来的能力和收入超过自研身体。",
  },
];

export default function Manifesto() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="subhero band-dark manifesto-hero">
        <div className="page-width">
          <p className="eyebrow">Strategy & investment thesis</p>
          <h1>工程可复刻。<br /><span>复利系统不可速成。</span></h1>
          <p className="subhero-lead">不要把“技术壁垒”定义成别人看不懂的代码。Eidolon 的目标，是让每次真实使用同时积累状态、评测、信任、生态与分发——攻击者可以复制功能，但不能把这些慢变量一起压缩。</p>
          <div className="thesis-strip"><b>核心公式</b><span>主权控制面</span><i>×</i><span>纵向状态</span><i>×</i><span>可信执行</span><i>×</i><span>身体生态</span><strong>= 持续复利</strong></div>
        </div>
      </section>

      <section className="section band-paper">
        <div className="page-width">
          <div className="section-intro"><p className="eyebrow">Start with the uncomfortable truth</p><h2>大厂当然能复制 Eidolon 的绝大多数功能。</h2><p className="section-lead">真正可信的战略，不应建立在“大厂不会做”上。平台厂商有模型、入口、账号和分发优势；Eidolon 必须利用的是跨平台中立、用户主权和垂直速度，而不是低估对手。</p></div>
          <div className="copy-contrast">
            <div className="copy-fast"><span>可以快速复制</span>{copyable.map((item) => <b key={item}>{item}</b>)}<p>这部分不是壁垒，只是入场券。</p></div>
            <div className="copy-slow"><span>无法同时压缩</span>{slow.map(([k, d], i) => <article key={k}><i>0{i + 1}</i><div><b>{k}</b><p>{d}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <section className="section band-dark">
        <div className="page-width">
          <div className="section-intro"><p className="eyebrow">Six design laws</p><h2>从产品宪法开始，而不是从功能列表开始。</h2></div>
          <div className="law-grid">
            {laws.map(([k, d], i) => <article key={k}><span>{String(i + 1).padStart(2, "0")}</span><h3>{k}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section band-sand">
        <div className="page-width">
          <div className="section-intro"><p className="eyebrow">Investor evidence stack</p><h2>下一轮融资不该再靠“OS”这个词。要靠六类连续证据。</h2><p className="section-lead">代码量、服务数量和架构图只能证明团队能做工程。投资人真正需要看到的是：用户是否留下、任务是否完成、边界是否可信、生态是否能扩张。</p></div>
          <div className="scorecard">
            <div className="score-head"><span>证据</span><span>下一阶段指标</span><span>它回答什么</span></div>
            {scorecard.map((row) => <article key={row.k}><h3>{row.k}</h3><b>{row.metric}</b><p>{row.why}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section band-paper">
        <div className="page-width">
          <div className="section-intro"><p className="eyebrow">Focused execution</p><h2>未来 18 个月，只围绕一条证据链推进。</h2><p className="section-lead">参考产品不是另一个业务方向，而是 OEM 与协议平台的证据发生器。每一阶段都设置“没有过线就不扩张”的门。</p></div>
          <div className="program">
            {program.map((item) => (
              <article key={item.phase}>
                <div className="program-time"><span>{item.phase}</span><i /></div>
                <div className="program-body"><h3>{item.title}</h3><ul>{item.actions.map((action) => <li key={action}>{action}</li>)}</ul><p><b>Gate</b>{item.gate}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-dark">
        <div className="page-width">
          <div className="section-intro"><p className="eyebrow">External coordinates</p><h2>五个外部信号，指向同一个空白层。</h2></div>
          <div className="source-grid dark-sources">
            {sources.map((source) => <a href={source.href} target="_blank" rel="noreferrer" key={source.k}><span>{source.src}</span><h3>{source.k}</h3><p>{source.d}</p><b>原始资料 ↗</b></a>)}
          </div>
        </div>
      </section>

      <section className="manifesto-close band-paper">
        <div className="page-width">
          <VesselMark size={72} tone="ink" idSuffix="manifesto" />
          <p>最终判断</p>
          <h2>不要证明别人抄不了代码。<br />证明他们抄完代码，仍然没有你的状态、证据、信任与生态。</h2>
          <a className="button ink-button" href={site.github} target="_blank" rel="noreferrer">审阅项目代码 ↗</a>
        </div>
      </section>
    </main>
  );
}
