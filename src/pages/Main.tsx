import Image from "next/image";

import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

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
