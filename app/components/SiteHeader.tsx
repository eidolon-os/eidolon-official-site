// 全站统一顶栏 —— 首页与子页复用，导航锚点用 /#… 跨页可达。
/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import { site, nav } from "../content";

export function SiteHeader() {
  return (
    <header className="topbar">
      <a className="brand-lockup" href="/#top" aria-label="Eidolon OS 首页">
        <img className="logo-on-dark" src="/brand/seal/logo-full-lacquer.svg" alt="Eidolon" />
        <img className="logo-on-light" src="/brand/seal/logo-full-paper.svg" alt="" aria-hidden="true" />
      </a>
      <nav className="nav-links" aria-label="主导航">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className="nav-hide">
            {item.label}
          </a>
        ))}
        <a className="nav-github" href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </header>
  );
}
