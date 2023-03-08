import Head from "next/head";
import { Overpass, Space_Grotesk } from "next/font/google";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Yunus Emre Kepenek - Portfolio</title>
        <meta
          name="description"
          content="Yunus Emre is a software engineering student who specializes in full stack development and designing."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta property="og:title" content="Yuuns Tech" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yuuns.tech/" />
        <meta property="og:image" content="https://www.yuuns.tech/Me.png" />
        <meta
          property="og:description"
          content="Yunus Emre's portfolio website"
        />
        <meta name="theme-color" content="#678273" />
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
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <Header font={overpass.variable} />
      <Main font={overpass.variable} />
      <Footer font={grotesk.variable} />
    </>
  );
}
