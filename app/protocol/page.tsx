import type { Metadata } from "next";
import { devPreview } from "../content";
import { SiteHeader } from "../components/SiteHeader";
import { CoreGlyph } from "../components/brand";

export const metadata: Metadata = {
  title: "开发者 · 即将上线 | Eidolon OS",
  description:
    "EID-* 协议家族与接入 SDK 正在快速成形，即将开源。先在 GitHub 关注进展、参与共建。",
};

export default function Developers() {
  const hint = devPreview.willInclude.map((w) => w.k).join("　·　");
  return (
    <>
      <SiteHeader />
      <main className="coming2 band-lacquer grain">
        <div className="coming2-glow" aria-hidden="true" />
        <div className="coming2-inner">
          <CoreGlyph size={60} className="coming2-glyph" />
          <span className="coming-badge"><i />Coming soon · 即将上线</span>
          <p className="eyebrow">{devPreview.eyebrow}</p>
          <h1 className="coming2-title">开发者文档，<br />正在成形。</h1>
          <p className="coming2-lede">{devPreview.lede}</p>
          <p className="coming2-hint">将包含　{hint}</p>
          <div className="coming-actions">
            <a className="btn btn-primary" href={devPreview.cta.href} target="_blank" rel="noreferrer">
              ↗ {devPreview.cta.label}
            </a>
            <a className="coming-back" href="/">← 返回首页</a>
          </div>
        </div>
      </main>
    </>
  );
}
