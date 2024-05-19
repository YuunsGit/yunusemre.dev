import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Yunus Emre Kepenek - Software Engineer",
  description:
    "Hi! I'm Yunus Emre, a software engineer who specializes in creating websites and applications. I like keeping up with the latest technology and design trends. Visit my portfolio to learn more about me.",
  metadataBase: new URL("https://www.yunusemre.dev"),
  openGraph: {
    title: "Yunus Emre Kepenek - Software Engineer",
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
  themeColor: "#678273",
};

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-50">
      <body
        className={cn(openSans.variable, "bg-slate-50 font-body antialiased")}
      >
        <script
          dangerouslySetInnerHTML={{
            __html:
              "<!-- Hey there! Looks like you found my secret. There you go, you deserve it: secret.yunusemre.dev -->",
          }}
        />
        <Providers>{children}</Providers>
      </body>
      <Analytics />
    </html>
  );
}
