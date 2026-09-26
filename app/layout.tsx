import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Eidolon OS | 个人 AI 操作系统";
const siteDescription =
  "Eidolon OS 为不同模型、产品与真实活动提供统一的个人 AI 运行时、系统服务与连续体验。";
const siteDescriptionEn =
  "The personal AI operating system across models, products and real-world environments.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eidolon.aimanthor.com"),
  title: siteTitle,
  description: siteDescription,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: siteTitle, description: siteDescriptionEn, images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Eidolon OS — 个人 AI 操作系统" }] },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescriptionEn, images: ["/og-v2.png"] },
};

// 静态部署没有 RSC 数据文件：页内锚点若触发框架的 popstate 导航，会反复请求并拉回滚动位置。
// 这段脚本先于框架执行，自行处理页内锚点滚动，并拦下只改动 # 的 popstate。
const hashNavigationScript = `(()=>{
var docPath=location.pathname+location.search;
var strip=function(p){return p.length>1?p.replace(/\\/$/,""):p};
var targetOf=function(hash){if(!hash||hash==="#")return null;try{return document.getElementById(decodeURIComponent(hash.slice(1)))}catch(e){return null}};
var scrollToHash=function(hash,smooth){var behavior=smooth&&!matchMedia("(prefers-reduced-motion: reduce)").matches?"smooth":"auto";var el=targetOf(hash);if(el)el.scrollIntoView({behavior:behavior,block:"start"});else if(!hash||hash==="#")window.scrollTo({top:0,behavior:behavior})};
document.addEventListener("click",function(e){
if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
var a=e.target instanceof Element?e.target.closest("a[href*='#']"):null;
if(!a||(a.target&&a.target!=="_self")||a.hasAttribute("download"))return;
var url=new URL(a.href,location.href);
if(url.origin!==location.origin||strip(url.pathname)!==strip(location.pathname)||url.search!==location.search)return;
if(url.hash&&url.hash!=="#"&&!targetOf(url.hash))return;
e.preventDefault();
scrollToHash(url.hash,true);
history.replaceState(history.state,"",url.hash||location.pathname+location.search);
});
window.addEventListener("popstate",function(e){
if(location.pathname+location.search!==docPath)return;
e.stopImmediatePropagation();
scrollToHash(location.hash,false);
},true);
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          rel="preload"
          href="/fonts/noto-serif-sc-headings.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/newsreader-headings.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script dangerouslySetInnerHTML={{ __html: hashNavigationScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
