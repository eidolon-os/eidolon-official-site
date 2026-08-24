import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Eidolon OS | Personal Agent OS for Human, Car, Home & Work";
const siteDescription =
  "一个 Eidolon，贯穿人、车、家与工作。同一个长期智能体在随身设备、汽车、家庭、工作空间和机器人之间自然接续。";
const siteDescriptionEn =
  "One personal agent, continuous across your devices, car, home, work and future bodies.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eidolon.aimanthor.com"),
  title: siteTitle,
  description: siteDescription,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: siteTitle, description: siteDescriptionEn, images: [{ url: "/og.png", width: 1672, height: 941, alt: "一个 Eidolon，贯穿人、车、家与工作。" }] },
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
