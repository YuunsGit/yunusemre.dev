"use client";

import Social from "./Social";
import Lottie from "lottie-react";
import MeAnimation from "../../public/assets/me.json";

import MeSvg from "../../public/assets/me.svg";
import LinkedIn from "../../public/socials/linkedin.svg";
import Mail from "../../public/socials/mail.svg";
import GitHub from "../../public/socials/github.svg";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

import React, { useState } from "react";
import Image from "next/image";
import Chat from "@/components/Chat";

const socials: { name: string; icon: React.FC; link: string }[] = [
  {
    name: "GitHub",
    icon: GitHub,
    link: "https://github.com/YuunsGit",
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/yekepenek/",
  },
  {
    name: "Mail",
    icon: Mail,
    link: "mailto:yunus.emre.kepenek@outlook.com",
  },
];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [chatOn, setChatOn] = useState(false);

  return (
    <div className="w-4/5 gap-x-16 my-12 mx-auto flex flex-col items-center justify-center sm:my-20 md:my-32 lg:flex-row">
      <div className="relative w-2/3 mb-10 space-y-6 sm:w-80 lg:mb-0 xl:w-96">
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
      <div
        className={`${
          chatOn ? "sm:w-[34rem] xl:w-[46rem]" : "w-[26rem]"
        } md:transition-all w-11/12`}
      >
        {chatOn ? (
          <Chat />
        ) : (
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
            <br />
            <button
              onClick={() => setChatOn(true)}
              className="text-lg bg-primary-300 text-white px-4 py-2 rounded-lg hover:bg-primary-200 transition-all flex items-center gap-x-2 mx-auto lg:mx-0"
            >
              <ChatBubbleOvalLeftEllipsisIcon className="text-white h-6 w-6" />
              <p>Talk to My AI Clone</p>
            </button>
          </article>
        )}
      </div>
    </div>
  );
};

export default Hero;
