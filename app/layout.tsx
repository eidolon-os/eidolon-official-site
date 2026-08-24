import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Eidolon OS | Personal AI Continuity Infrastructure";
const siteDescription =
  "Eidolon OS 是个人 AI 的连续性基础设施：由你拥有的身份、记忆、权限、身体与行动结果。Local-first，云可选。";
const siteDescriptionEn =
  "The continuity layer for personal AI: owner-controlled identity, memory, authority, bodies, and outcomes. Local-first, cloud-optional.";

const metadataBase = new URL("https://eidolon.aimanthor.com/");

export const metadata: Metadata = {
  metadataBase,
  title: siteTitle,
  description: siteDescription,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: siteTitle,
    description: siteDescriptionEn,
    images: [{ url: "/og-continuity.png", width: 1732, height: 908, alt: siteTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescriptionEn,
    images: ["/og-continuity.png"],
  },
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
