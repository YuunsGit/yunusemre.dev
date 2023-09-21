import Head from "next/head";
import {
    Signika_Negative,
    Space_Grotesk,
} from "next/font/google";

import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

const signikaNegative = Signika_Negative({
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
                    content="Hi! I'm Yunus Emre, a software engineer who specializes in creating websites and applications. I like keeping up with the latest technology and design trends. Visit my portfolio to learn more about me."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" sizes="any"/>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
                <meta property="og:title" content="Yunus Emre Kepenek"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.yunusemre.dev/"/>
                <meta property="og:image" content="https://www.yunusemre.dev/assets/me.png"/>
                <meta
                    property="og:description"
                    content="Hi! I'm Yunus Emre, a software engineer who specializes in creating websites and applications. I like keeping up with the latest technology and design trends. Visit my portfolio to learn more about me."
                />
                <meta name="theme-color" content="#678273"/>
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
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
            </Head>
            <Header font={signikaNegative.variable}/>
            <Main font={signikaNegative.variable}/>
            <Footer font={grotesk.variable}/>
        </>
    );
}
