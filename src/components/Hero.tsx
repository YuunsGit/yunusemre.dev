import Social from "./Social";
import Lottie from "lottie-react";
import MeAnimation from "../../public/assets/me.json";

import MeSvg from "../../public/assets/me.svg";
import Instagram from "../../public/socials/instagram.svg";
import LinkedIn from "../../public/socials/linkedin.svg";
import ArtStation from "../../public/socials/artstation.svg";
import GitHub from "../../public/socials/github.svg";
import { useState } from "react";
import Image from "next/image";

const socials: { name: string; icon: React.FC; link: string }[] = [
  {
    name: "GitHub",
    icon: GitHub,
    link: "https://github.com/YuunsGit",
  },
  {
    name: "ArtStation",
    icon: ArtStation,
    link: "https://www.artstation.com/yuuns",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/yemrekpnk/",
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/yekepenek/",
  },
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="my-12 mx-auto flex w-4/5 flex-col items-center justify-center gap-x-20 sm:my-20 md:my-32 lg:flex-row">
      <div className="relative mb-10 w-2/3 space-y-6 sm:w-80 lg:mb-0 xl:w-96">
        <div className="aspect-square w-full">
          {loaded || (
            <Image
              src={MeSvg}
              alt="Picture of the author"
              priority
              className="absolute rounded-full"
            />
          )}
          <Lottie
            className="z-10 select-none overflow-hidden rounded-full"
            animationData={MeAnimation}
            onLoadedImages={() => setLoaded(true)}
            loop={true}
          />
        </div>
        <div className="z-10 flex select-none justify-center gap-x-3 sm:gap-x-4">
          {socials.map(({ name, icon, link }) => (
            <Social name={name} icon={icon} link={link} key={name} />
          ))}
        </div>
      </div>
      <article className="text-center lg:text-left">
        <h1>
          <span className="text-4xl font-bold text-ternary-400 sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
          </span>
          <br />
          <span className="relative text-4xl font-black text-primary-400 sm:text-6xl lg:text-7xl">
            Yunus Emre.
          </span>
        </h1>
        <br />
        <h2>
          <span className="text-lg font-semibold text-ternary-400 sm:text-2xl lg:text-3xl">
            Full Stack Engineer{" "}
          </span>
          <br />
          <span className="text-lg font-semibold text-ternary-400 sm:text-2xl lg:text-3xl">
            Designer
          </span>
        </h2>
      </article>
    </div>
  );
};

export default Hero;
