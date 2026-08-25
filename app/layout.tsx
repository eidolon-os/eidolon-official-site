import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Eidolon OS | 个人 AI 操作系统";
const siteDescription =
  "Eidolon OS 为不同模型、产品与真实活动提供统一的个人 AI 运行时、系统服务与连续体验。";
const siteDescriptionEn =
  "The personal AI operating system across models, devices and real-world scenes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eidolon.aimanthor.com"),
  title: siteTitle,
  description: siteDescription,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: siteTitle, description: siteDescriptionEn, images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Eidolon OS — 个人 AI 操作系统" }] },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescriptionEn, images: ["/og-v2.png"] },
};

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
      </head>
      <body>{children}</body>
    </html>
  );
}
