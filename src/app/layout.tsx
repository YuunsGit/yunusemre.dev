import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import {Metadata, Viewport} from "next";

export const metadata: Metadata = {
  title: "Yunus Emre Kepenek - Portfolio",
  description:
    "Hi! I'm Yunus Emre, a software engineer who specializes in creating websites and applications. I like keeping up with the latest technology and design trends. Visit my portfolio to learn more about me.",
  metadataBase: new URL("https://www.yunusemre.dev"),
  openGraph: {
    title: "Yunus Emre Kepenek - Portfolio",
    description:
      "Hi! I'm Yunus Emre, a software engineer who specializes in creating websites and applications. I like keeping up with the latest technology and design trends. Visit my portfolio to learn more about me.",
    type: "website",
    url: "https://www.yunusemre.dev",
    images: "/assets/me.png",
  },
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
      sizes: "any",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: '#678273',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <title>Yunus Emre Kepenek - Portfolio</title>
      </head>
      <body className="overflow-hidden">{children}</body>
      <Analytics />
    </html>
  );
}
