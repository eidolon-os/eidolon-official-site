import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Eidolon OS | 一个真正属于你的个人 AI";
const siteDescription =
  "Eidolon 记得你的生活，接住没做完的事，并在手机、家、车与工作之间继续陪你。换模型、换设备，它都还是它。";
const siteDescriptionEn =
  "A personal AI that remembers you, carries work across places, and remains yours as models and devices change.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eidolon.aimanthor.com"),
  title: siteTitle,
  description: siteDescription,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: siteTitle, description: siteDescriptionEn, images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Eidolon OS — 一个真正属于你的 AI" }] },
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
