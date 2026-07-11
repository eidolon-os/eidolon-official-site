import type { Metadata } from "next";
import { site, whyNow, constitution, planes } from "../content";

export const metadata: Metadata = {
  title: "宣言 · 为什么是现在 | Eidolon OS",
  description: "个人 AI 的价值正从「某一次回答」转移到「谁拥有这个智能体」。Eidolon 的战略论述、六条产品宪法与主权架构。",
};

export default function Manifesto() {
  return (
    <article className="doc">
      <a className="back" href="/">← 返回首页</a>
      <p className="eyebrow" style={{ marginTop: 32 }}>Manifesto · 为什么是现在</p>
      <h1 className="serif">价值正在从「某一次回答」，转移到「谁拥有这个智能体」。</h1>
      <p className="lede">{whyNow.lede}</p>

      <p>
        模型会更强，硬件会更新，入口会轮换。一旦 AI 开始承载长期记忆、任务权限、关系上下文和现实行动能力，
        竞争就不再停留在「谁的回答更好」，而落到三个更根本的问题上——
        <strong>谁拥有这个智能体、它如何持续存在、它以什么边界进入现实世界。</strong>
      </p>

      <h2 className="serif">两条路，两种优化目标</h2>
      <p>
        平台拥有的助手（{whyNow.contrast[0].term}）优化的是账号、生态、云服务、硬件闭环与商业留存；
        用户拥有的智能体 OS（{whyNow.contrast[1].term}）优化的是身份归属、记忆治理、权限撤销、身体调度与协议边界。
        Eidolon 选择后者：把身份、记忆、权限和身体调度权从平台云里拿回来，放进用户自己的主权中枢。
      </p>

      <h2 className="serif">六条产品宪法</h2>
      <ol>
        {constitution.map((c) => (
          <li key={c.n}>
            <strong>{c.title}</strong>——{c.body}
          </li>
        ))}
      </ol>

      <h2 className="serif">一个稳定不变的主权中枢</h2>
      <p>{planes.lede}</p>
      <ul>
        {planes.items.map((p) => (
          <li key={p.title}>
            <strong>{p.title}</strong>（{p.term}）——{p.body}
          </li>
        ))}
      </ul>

      <h2 className="serif">{whyNow.moatHeading}</h2>
      <ul>
        {whyNow.moats.map((m) => (
          <li key={m.title}>
            <strong>{m.title}</strong>——{m.body}
          </li>
        ))}
      </ul>

      <p style={{ marginTop: 48 }}>
        <a className="back" href={site.github} target="_blank" rel="noreferrer">↗ {site.githubLabel}</a>
        &nbsp;&nbsp;·&nbsp;&nbsp;
        <a className="back" href="/protocol">开发者协议 →</a>
      </p>
    </article>
  );
}
