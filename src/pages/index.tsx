import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import Social from "./Social";

import {
  CommandLineIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import HeroImage from "../../public/Me.svg";
import TransitionWave from "../../public/TransitionWave.svg";
import Laptop from "../../public/Laptop.svg";
import Sinbad from "../../public/Sinbad.svg";
import Sinbadude from "../../public/Sinbadude.svg";
import Conversions from "../../public/Conversions.svg";
import Letter from "../../public/Letter.svg";

import Instagram from "../../public/Instagram.svg";
import LinkedIn from "../../public/LinkedIn.svg";
import ArtStation from "../../public/ArtStation.svg";
import GitHub from "../../public/GitHub.svg";
import HeMan from "../../public/Heman.png";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Yuuns Tech</title>
        <meta
          name="description"
          content="Yunus Emre Kepenek portfolio website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className={`${inter.variable} mx-auto my-4 flex h-16 w-4/5 select-none flex-col items-center justify-center font-sans sm:h-32 md:my-0 md:h-24 md:flex-row md:justify-between`}
      >
        <div className="mx-auto flex h-full items-center justify-start gap-x-2 text-3xl font-bold text-primary-400 md:ml-0">
          <CommandLineIcon className="h-10 w-10" />
          <h1>ynsemr</h1>
        </div>
        <ul className="mx-auto hidden h-full items-center justify-center gap-x-20 font-semibold text-primary-500 sm:flex md:mr-0">
          <li className="relative after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-1/4 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary-500 after:duration-150 after:content-[''] hover:after:scale-x-100">
            <a href="#about">About me</a>
          </li>
          <li className="relative after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-1/4 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary-500 after:duration-150 after:content-[''] hover:after:scale-x-100">
            <a href="#projects">Projects</a>
          </li>
          <li className="relative after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-1/4 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary-500 after:duration-150 after:content-[''] hover:after:scale-x-100">
            <a href="#contact">Contact</a>
          </li>
          <li className="relative after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-1/4 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary-500 after:duration-150 after:content-[''] hover:after:scale-x-100">
            <a rel="noreferrer" target="_blank" href="/Resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </header>
      <main className={`${inter.variable} font-sans`}>
        <div className="group my-12 mx-auto flex w-4/5 flex-col items-center justify-center gap-x-20 sm:my-20 md:my-32 lg:flex-row">
          <figure className="mb-10 w-2/3 space-y-6 sm:w-80 lg:mb-0 xl:w-96">
            <Image
              src={HeroImage}
              alt="Picture of the author"
              className="select-none"
            />
            <div className="z-10 flex select-none justify-center gap-x-4">
              {socials.map(({ name, icon, link }) => (
                <Social name={name} icon={icon} link={link} key={name} />
              ))}
            </div>
          </figure>
          <article className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl">
              <span className="font-bold text-ternary-400">Hi, I&apos;m</span>
              <br />
              <span className="relative font-black text-primary-400 after:absolute after:-bottom-1 after:left-0 after:h-3 after:w-full after:origin-top after:scale-y-0 after:bg-primary-400 after:duration-150 after:content-[''] group-hover:after:scale-y-100">
                Yunus Emre
              </span>
              <br />
              <span className="text-base font-semibold text-ternary-400 sm:text-2xl lg:text-3xl">
                <span>Junior </span>
                <span className="relative after:absolute after:left-0 after:-bottom-7 after:origin-top after:scale-y-0 after:duration-150 after:content-['Designer'] group-hover:content-[''] group-hover:after:scale-y-100">
                  Full Stack Engineer
                </span>
              </span>
            </h1>
          </article>
        </div>
        <Image
          src={TransitionWave}
          alt="Wave image at the top"
          className="min-w-full select-none"
        />
        <div className="space-y-56 bg-primary-300 py-40">
          <div>
            <h1
              id="about"
              className="mx-auto mb-20 text-center text-6xl font-bold text-secondary"
            >
              About Me
            </h1>
            <div className="mx-auto flex w-7/12 items-center justify-center space-x-10 text-secondary">
              <article className="w-1/2 space-y-3">
                <p>
                  I am a software engineering student with a specialization in
                  web development. I am passionate about creating intuitive and
                  visually appealing websites that are both functional and
                  user-friendly.
                </p>
                <p>
                  Here are a few technologies I&apos;ve been working with
                  recently:
                </p>
                <ul className="grid w-3/4 grid-cols-2">
                  <li className="before:mr-2 before:content-['▸']">
                    JavaScript
                  </li>
                  <li className="before:mr-2 before:content-['▸']">
                    TypeScript
                  </li>
                  <li className="before:mr-2 before:content-['▸']">Tailwind</li>
                  <li className="before:mr-2 before:content-['▸']">React</li>
                  <li className="before:mr-2 before:content-['▸']">Node.js</li>
                  <li className="before:mr-2 before:content-['▸']">Astro</li>
                </ul>
              </article>
              <Image
                src={Laptop}
                alt="A picture of a laptop near a cup of coffee"
              />
            </div>
          </div>
          <div>
            <h1
              id="projects"
              className="mx-auto mb-20 text-center text-6xl font-bold text-secondary"
            >
              Some Things I’ve Built
            </h1>
            <div className="z-10 mx-auto flex w-7/12 flex-col space-y-5">
              <div className="group relative">
                <Image
                  src={Sinbadude}
                  alt="Mascot of Sinbad DigiBox"
                  className="absolute -left-44 -top-32 h-4/5 -rotate-12 "
                />
                <a
                  href="https://www.sinbaddigibox.com"
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 flex justify-between space-x-20 rounded-3xl bg-sky-50 p-12 duration-200 hover:bg-sky-100"
                >
                  <article>
                    <h1 className="text-2xl font-extrabold">Sinbad DigiBox</h1>
                    <h2 className="text-xl font-semibold">Lead & Web Mentor</h2>
                    <br />
                    <p>
                      Voluntary establishment by Ankara Science University
                      students to maintain a community of various software
                      engineering fields.
                    </p>
                    <p className="mt-3 before:mr-2 before:content-['▸']">
                      Developed the open-source website using <b>React</b>.
                    </p>
                  </article>
                  <Image
                    src={Sinbad}
                    alt="Sinbad DigiBox logo"
                    className="h-auto w-1/3"
                  />
                </a>
                <ArrowRightCircleIcon className="absolute right-0 top-0 bottom-0 z-0 my-auto h-14 text-sky-100 duration-200 group-hover:translate-x-16" />
              </div>
              <div className="group relative">
                <a
                  href="https://conversions.yuuns.tech/"
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 flex justify-between space-x-20 rounded-3xl bg-stone-800 p-12 text-secondary duration-200 hover:bg-stone-900"
                >
                  <article>
                    <h1 className="text-2xl font-extrabold">Conversions</h1>
                    <h2 className="text-xl font-semibold">Author</h2>
                    <br />
                    <p>
                      Multipurpose PDF editing web app that can split, rotate,
                      stamp, and convert PDF files.
                    </p>
                    <p className="mt-3 before:mr-2 before:content-['▸']">
                      Developed the open-source website using <b>React</b>.
                    </p>
                  </article>
                  <Image
                    src={Conversions}
                    alt="Conversions logo"
                    className="h-auto w-1/3"
                  />
                </a>
                <ArrowRightCircleIcon className="absolute right-0 top-0 bottom-0 z-0 my-auto h-14 text-stone-900 duration-200 group-hover:translate-x-16" />
              </div>
              <div className="group relative">
                <a
                  href="https://github.com/YuunsGit/legionary"
                  target="_blank"
                  rel="noreferrer"
                  className="relative z-10 flex justify-between space-x-20 rounded-3xl bg-cyan-50 p-12 text-ternary-500 duration-200 hover:bg-cyan-100"
                >
                  <article>
                    <h1 className="text-2xl font-extrabold">Legionary</h1>
                    <h2 className="text-xl font-semibold">Author</h2>
                    <br />
                    <p>
                      Discord bot developed using Discord.js library on Node.js
                      environment. Capable of various operations such as
                      spell-checking, reactions, essential commands and little
                      games.
                    </p>
                    <p className="mt-3 before:mr-2 before:content-['▸']">
                      Developed the open-source bot using <b>Node.js</b>.
                    </p>
                  </article>
                  <Image
                    src={HeMan}
                    alt="Conversions logo"
                    className="max-w-1/4 max-h-auto rounded-2xl"
                  />
                </a>
                <ArrowRightCircleIcon className="absolute right-0 top-0 bottom-0 z-0 my-auto h-14 text-cyan-100 duration-200 group-hover:translate-x-16" />
              </div>
            </div>
          </div>
          <div>
            <h1
              id="contact"
              className="mx-auto mb-20 text-center text-6xl font-bold text-secondary"
            >
              Get In Touch
            </h1>
            <div className="mx-auto flex w-7/12 items-center justify-center space-x-20 text-secondary">
              <Image
                src={Letter}
                alt="A picture of a laptop near a cup of coffee"
              />
              <article className="w-1/2 space-y-6 text-lg">
                <p>
                  I&apos;m always looking for new opportunities and my inbox is
                  always open. Whether you have a question or just want to say
                  hi, I’ll try my best to get back to you!
                </p>
                <a
                  href="mailto:yekepenek2002@hotmail.com"
                  className="inline-block space-x-2 rounded-lg bg-primary-400 px-6 py-4 duration-200 hover:bg-primary-500"
                >
                  <FaceSmileIcon className="inline w-7" />
                  <span>Say Hello</span>
                </a>
              </article>
            </div>
          </div>
        </div>
      </main>
      <footer
        className={`${inter.variable} bg-primary-300 py-6 text-center font-sans`}
      >
        <a
          href="https://github.com/YuunsGit/yuuns-tech"
          className="text-secondary duration-100 hover:text-primary-500"
        >
          Designed & Built by Yunus Emre Kepenek
        </a>
      </footer>
    </>
  );
}
