import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const siteTitle = "Eidolon OS | Personal Sovereign Agent OS";
const siteDescription =
  "Eidolon OS is a local-first, cloud-optional sovereign control plane for personal agents, living memory, body mesh, EID-* protocols, and real-world tool execution.";

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
  const ogImage = new URL("/og.png", metadataBase).toString();

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
      description:
        "A user-owned Agent OS for identity, memory, permissions, bodies, scenes, tools, and optional cloud compute.",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description:
        "A user-owned Agent OS for identity, memory, permissions, bodies, scenes, tools, and optional cloud compute.",
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
      <body>{children}</body>
    </html>
  );
}
