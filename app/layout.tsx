import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Eidolon OS | 由你拥有的个人 AI 操作系统";
const siteDescription =
  "你的 AI 不应属于任何模型、设备或平台。身份、记忆、权限与长期关系始终属于你。";
const siteDescriptionEn =
  "A sovereign personal AI operating system. Your identity, memory and authority remain yours while models and devices change.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eidolon.aimanthor.com"),
  title: siteTitle,
  description: siteDescription,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: siteTitle, description: siteDescriptionEn, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Eidolon OS — Your AI. Your memory. Your authority." }] },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescriptionEn, images: ["/og.png"] },
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
