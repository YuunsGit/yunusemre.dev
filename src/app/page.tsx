import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { Signika_Negative, Space_Grotesk } from "next/font/google";

const signikaNegative = Signika_Negative({
  subsets: ["latin"],
  variable: "--font-overpass",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export default async function Home() {
  return (
    <>
      <Header font={signikaNegative.variable} />
      <Main font={signikaNegative.variable} />
      <Footer font={grotesk.variable} />
    </>
  );
}
