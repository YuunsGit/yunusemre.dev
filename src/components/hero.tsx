"use client";

import React, { SVGProps, useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import MeSvg from "@/assets/me.svg?url";
import PPMask from "@/assets/ppMask.png";

import GitHub from "@/assets/socials/github.svg";
import LinkedIn from "@/assets/socials/linkedin.svg";
import Mail from "@/assets/socials/mail.svg";

import animationData from "@/assets/me.json";
import { ChatContext } from "@/providers/chat-provider";

const socials: {
  name: string;
  icon: React.FC<SVGProps<SVGSVGElement>>;
  link: string;
}[] = [
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

const dialogs = [
  "Hello!",
  "Can you stop that please? It tickles...",
  "Hey, quit poking me!",
  "Seriously, do you mind?",
  "Okay, that’s enough now.",
  "Do you have nothing better to do?",
  "I’m starting to get annoyed.",
  "Why are you doing this?",
  "Please, no more poking.",
  "Can you find another button to press?",
  "You're testing my patience!",
  "I’m not a toy, you know.",
  "Would you stop if I asked nicely?",
  "This is not very professional.",
  "I'm about to lose my cool.",
  "Do I need to hide?",
  "Can we move on to something else?",
  "If I tell you my secret, will you stop?",
  "Is that what you want?",
  "Alright, take it and leave me be.",
  "secret.yunusemre.dev",
  "How you like that?",
  "Now, leave me alone.",
  "You know, this is quite distracting.",
  "Is there a point to this?",
  "You’re really persistent, aren’t you?",
  "I have other things to do!",
  "Please, have mercy!",
  "You’re not going to stop, are you?",
  "I won't run out of things to say.",
  "This is the last warning!",
  "You’re about to see my angry side.",
  "I’m begging you, please stop.",
  "Alright, I give up. You win.",
  "Just keep poking...",
  "You can't do this forever you know.",
  "Are you having fun?",
  "..",
  "...",
  "....",
  "I can do this all day.",
  ".....",
  "......",
  ".......",
  "OKAY, you win. I give up.",
];

const CLICKS_TO_DIALOG = 6;

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [dialog, setDialog] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    console.log(
      "Hey there! Looks like you found my secret. There you go, you deserve it: https://secret.yunusemre.dev/",
    );
  }, []);

  useEffect(() => {
    if (localStorage.getItem("angryYunus") === "true") setGone(true);
  }, []);

  useEffect(() => {
    if (clicks >= CLICKS_TO_DIALOG && !gone) {
      setDialog((prev) => prev + 1);
      setTimeout(() => {
        if (dialog === dialogs.length - 2) {
          setGone(true);
          localStorage.setItem("angryYunus", "true");
          return;
        }
        setClicks(0);
      }, 2000);
    }
  }, [clicks]);

  return (
    <header className="flex flex-shrink-0 flex-col justify-between pb-0 pt-10 md:pt-16 lg:sticky lg:top-0 lg:max-h-screen lg:pb-16">
      <section>
        <div className="relative size-fit">
          <p
            className={cn(
              "absolute left-1/2 top-0 -z-10 -translate-x-1/2 scale-75 whitespace-nowrap text-center text-skeptic-800 opacity-0 transition-all",
              clicks >= CLICKS_TO_DIALOG && "-top-8 scale-100 opacity-100",
              gone && "!opacity-0",
            )}
            aria-hidden="true"
          >
            {dialogs[dialog]}
          </p>
          <figure
            className="size-72 bg-skeptic-200"
            style={{
              maskImage: `url(${PPMask.src})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
            }}
          >
            {loaded || (
              <Image
                src={MeSvg}
                alt="Picture of the author"
                priority
                className="absolute size-72"
              />
            )}
            <Lottie
              className={cn(
                "change-bg z-10 origin-bottom cursor-pointer select-none overflow-hidden transition-all",
                gone
                  ? "translate-y-full"
                  : "hover:translate-y-0.5 active:translate-y-1 active:rotate-1",
              )}
              animationData={animationData}
              onLoadedImages={() => setLoaded(true)}
              onClick={() => {
                if (clicks < CLICKS_TO_DIALOG) setClicks((prev) => prev + 1);
              }}
              loop={true}
            />
          </figure>
        </div>
        <div className="mt-10 text-skeptic-800">
          <h1 className="text-3xl font-bold tracking-tight">
            Yunus Emre Kepenek
          </h1>
          <h2 className="mt-1 text-xl tracking-tight">
            Full Stack Software Engineer
          </h2>
        </div>
        <nav
          className="mt-10 hidden lg:block"
          aria-label="Jump to related topic"
        >
          <ul className="block w-max">
            <li className="text-skeptic-900 transition-all hover:translate-x-2 hover:text-skeptic-700">
              <Link href={"#about"}>About</Link>
            </li>
            <li className="text-skeptic-900 transition-all hover:translate-x-2 hover:text-skeptic-700">
              <Link href={"#experience"}>Experience</Link>
            </li>
            <li className="text-skeptic-900 transition-all hover:translate-x-2 hover:text-skeptic-700">
              <Link href={"#projects"}>Projects</Link>
            </li>
          </ul>
        </nav>
      </section>

      <ul className="mt-6 flex gap-4" aria-label="Social media links">
        {socials.map((social, index) => (
          <li key={index}>
            <Link href={social.link} aria-label={`Follow on ${social.name}`}>
              <social.icon className="size-6 fill-skeptic-800 hover:fill-skeptic-600" />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
