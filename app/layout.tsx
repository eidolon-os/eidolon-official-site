import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Eidolon OS | A World for Living Intelligence";
const siteDescription =
  "让智能，真正住进生活里。Eidolon OS 为每个人建立一个长期存在的智能世界：一颗核，多种心智，许多身体，一个世界。";
const siteDescriptionEn =
  "A world for living intelligence — one enduring being, many minds, many bodies, woven through your life.";

export const metadata: Metadata = {
  metadataBase: new URL("https://eidolon.aimanthor.com"),
  title: siteTitle,
  description: siteDescription,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: siteTitle, description: siteDescriptionEn, images: [{ url: "/og.png", width: 1672, height: 941, alt: "让智能，真正住进生活里。EIDOLON OS" }] },
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
