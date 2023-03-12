import Image from "next/image";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import TransitionWave from "../../public/TransitionWave.svg";

const Main = ({ font }: { font: string }) => {
  return (
    <main className={`${font} font-sans`}>
      <Hero />
      <Image
        priority
        src={TransitionWave}
        alt="Wave picture for color transition"
        className="2xl:w-100 min-w-[300%] select-none md:min-w-[200%] lg:min-w-full"
        draggable="false"
      />
      <div className="space-y-32 bg-primary-300 py-24 text-white md:space-y-56 md:py-40">
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Main;
