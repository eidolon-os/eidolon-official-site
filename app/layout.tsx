import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const siteTitle = "Eidolon OS | Personal Sovereign Agent OS";
const siteDescription =
  "Eidolon 是一个由你拥有的长期 AI 伙伴：它记得你、听你调度、能跨设备持续存在。一个 local-first、云可选的个人智能体主权操作系统。";
const siteDescriptionEn =
  "A personal AI companion you own — one identity, portable memory, governed permissions, and many bodies. Local-first, cloud-optional.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3001";
  const proto =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${proto}://${host}`);
  const ogImage = new URL("/og.jpg", metadataBase).toString();

  return {
    metadataBase,
    title: siteTitle,
    description: siteDescription,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: siteTitle,
      description: siteDescriptionEn,
      images: [{ url: ogImage, width: 1200, height: 1200, alt: siteTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescriptionEn,
      images: [ogImage],
    },
  };
}

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
