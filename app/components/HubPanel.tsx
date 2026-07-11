// Hero 双图（同一行）——重设计为「有层次、有关联、有流向」的示意，而非一列相同的横框。
//
// 图 A · 技术架构：按真正的 OS 视角分两个空间带（用户态 / 内核态），中间一道 syscall 膜；
//   主权内核是主体块，内核服务嵌在内核里（包含关系）；EID-* 协议画成一条总线母线（bus），
//   身体作为芯片挂在总线下方；算力/数据面是最底的基座。信号自上而下穿过内核。
// 图 B · 能力与场景：一颗朱砂核向下分叉成两簇能力（关系内核 / 行动延伸），
//   再顺流落进具体场景。核 → 能力 → 场景，成长与关联可见。
import { SealGlyph, CoreGlyph } from "./brand";

// —— 图 A 数据 ——
const USER = [
  { cn: "应用", en: "APPS", tags: ["Council", "companion"] },
  { cn: "运行时", en: "AGENT RUNTIME", tags: ["推理", "规划", "工具", "模型路由"] },
];
const KERNEL_TAGS = ["身份", "权限 policy", "审计", "信任根 root"];
const KERNEL_SVCS = ["活记忆 Living Memory", "场景图 Scene Graph"];
const PROTOCOL = ["Pair", "Media", "Tools", "State", "Task", "Memory"];
const BODIES = ["桌面", "手机", "音箱", "车机", "机器人"];

// —— 图 B 数据 ——
const CLUSTERS = [
  {
    title: "关系内核", en: "IDENTITY CORE",
    caps: [
      { k: "陪伴 · 关系", d: "认得你、记得关系，越处越懂" },
      { k: "记忆 · 资产", d: "带来源与时效，可查改导删、带得走" },
      { k: "性格演化", d: "人格版本化，跨身体一致不漂移" },
    ],
  },
  {
    title: "行动延伸", en: "ACTION REACH",
    caps: [
      { k: "感知 · 看见", d: "按需看现场，看完留痕即止" },
      { k: "执行 · 交付", d: "拆任务、调工具、产出真实文件" },
      { k: "多身体", d: "跨设备连续，换身体不换人" },
    ],
  },
];
const SCENES = ["车机路上", "会议纪要", "书房创作", "儿童陪学", "居家看护", "机器人巡检"];

export function HubPanel() {
  return (
    <div className="arch2" aria-label="Eidolon 架构与能力总览">
      <div className="arch-glow" aria-hidden="true" />

      {/* ── 图 A · 技术架构（OS 分层）── */}
      <div className="arch-card">
        <div className="arch-head">
          <span className="arch-title"><SealGlyph size={16} />技术架构 · Architecture</span>
          <span className="arch-tag">OS · 分层栈</span>
        </div>
        <div className="arch-body os2">

          {/* 用户态 */}
          <div className="os-zone">
            <span className="zone-tag">用户态 · USER SPACE</span>
            <div className="os-cells">
              {USER.map((l) => (
                <div className="os-cell" key={l.en}>
                  <div className="cell-h"><b>{l.cn}</b><em>{l.en}</em></div>
                  <div className="cell-tags">{l.tags.map((t) => <i key={t}>{t}</i>)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* syscall 膜 —— 用户态 / 内核态 的分界 */}
          <div className="os-membrane" aria-hidden="true">
            <span className="mem-line" />
            <span className="mem-tag">syscall<i>用户态 ↓ 内核态</i></span>
            <span className="mem-line" />
          </div>

          {/* 内核态 */}
          <div className="os-zone kernelspace">
            <span className="zone-tag warm">内核态 · KERNEL SPACE</span>
            <div className="os-kernel">
              <div className="kern-h">
                <span className="kern-cn">主权内核</span>
                <span className="kern-en">SOVEREIGN KERNEL</span>
                <span className="kern-ring">RING 0 · 特权</span>
              </div>
              <div className="kern-tags">{KERNEL_TAGS.map((t) => <i key={t}>{t}</i>)}</div>
              <div className="kern-svc">
                <span className="svc-k">内核服务</span>
                <div className="svc-tags">{KERNEL_SVCS.map((s) => <i key={s}>{s}</i>)}</div>
              </div>
            </div>
          </div>

          {/* EID-* 协议：一条总线母线，身体挂在其下 */}
          <div className="os-bus">
            <span className="bus-arrow" aria-hidden="true" />
            <div className="bus-bar">
              <span className="bus-h">EID-* 协议<i>PROTOCOL · ABI</i></span>
              <div className="bus-tags">{PROTOCOL.map((p) => <i key={p}>{p}</i>)}</div>
            </div>
            <div className="hal">
              <span className="hal-k">身体抽象 · HAL</span>
              <div className="hal-bodies">
                {BODIES.map((b) => <i key={b}>{b}</i>)}
                <i className="opt">可插拔</i>
              </div>
            </div>
          </div>

          {/* 基座：算力面 + 数据面 */}
          <div className="os-ground">
            <div className="ground-cell"><b>算力面</b><em>COMPUTE</em><small>本地 / 私有云 / 公有云</small></div>
            <div className="ground-cell"><b>数据面</b><em>DATA</em><small>本地优先存储</small></div>
          </div>
        </div>
        <div className="arch-foot">一切访问穿内核与协议 · 内核稳定、上下可换</div>
      </div>

      {/* ── 图 B · 能力与场景（核 → 能力 → 场景）── */}
      <div className="arch-card">
        <div className="arch-head">
          <span className="arch-title">能力与场景 · Capabilities</span>
          <span className="arch-tag">关系驱动 · 越用越长</span>
        </div>
        <div className="arch-body cap2">

          {/* 一颗核（顶部锚点）*/}
          <div className="cap-core">
            <CoreGlyph size={38} className="core-glyph" />
            <p>同一颗核，长成你要的能力——<br /><b>关系越深，它能做的越多。</b></p>
          </div>

          {/* 分叉连线 · 核 → 两簇 */}
          <svg className="cap-branch" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
            <path d="M50 0 C50 17 25 9 25 30" />
            <path d="M50 0 C50 17 75 9 75 30" />
          </svg>

          {/* 两簇能力 */}
          <div className="cap-clusters">
            {CLUSTERS.map((cl) => (
              <div className="cap-cluster" key={cl.en}>
                <div className="cl-h"><b>{cl.title}</b><em>{cl.en}</em></div>
                <div className="cl-caps">
                  {cl.caps.map((c) => (
                    <div className="cl-cap" key={c.k}><b>{c.k}</b><span>{c.d}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 短连接 → 落进场景带（与左图 ▼ 一致，不再留大空档）*/}
          <div className="cap-flow" aria-hidden="true">
            <span className="flow-label">落进真实场景</span>
            <span className="flow-arrow" />
          </div>
          <div className="cap-scenes">
            {SCENES.map((s) => <i key={s}>{s}</i>)}
          </div>
        </div>
        <div className="arch-foot">归你 · 可迁移 · 可撤销</div>
      </div>
    </div>
  );
}
