import React from "react";

import Link from "next/link";
import Image from "next/image";

import BlogPosts from "@/components/blog-posts";
import { cn } from "@/lib/utils";

import tanitim from "@/assets/projects/tanitim.png";
import selfshelf from "@/assets/projects/selfshelf.png";
import emogi from "@/assets/projects/emogi.png";
import conversions from "@/assets/projects/conversions.png";

import Arrow from "@/assets/icons/arrow.svg";
import Chat from "@/components/chat";
import ButtonGroup from "@/components/button-group";

const experience = [
  {
    title: "Full Stack Engineer",
    company: "Radity",
    link: "https://radity.com/",
    date: {
      start: "Sep 2023",
      end: "Present",
    },
    description:
      "Build, style, and ship high-quality insurance portals for a diverse array of clients including THREE Insurance by Berkshire Hathaway. Entirely redesigned and developed Radity's website which resulted in an increase in user engagement.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "WordPress",
      "Material UI",
      "Figma",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "DT Cloud",
    link: "https://dtcloudnow.com/",
    date: {
      start: "Apr 2023",
      end: "Sep 2023",
    },
    description:
      "Developed high-end cloud services, including IaaS and PaaS solutions, and implemented client-requested features. Worked alongside product and project managers, designers, and other engineers to transform business concepts into complex cloud service platforms on an agile cadence.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Express",
      "Chakra UI",
      "Figma",
    ],
  },
  {
    title: "OOP & Java Mentor",
    company: "Ankara Science University",
    link: "https://ankarabilim.edu.tr/",
    date: {
      start: "Mar 2022",
      end: "Jun 2022",
    },
    description:
      "Guided and tutored computer engineering students at Ankara Science University in OOP and Java, resulting in all students passing. Through detailed explanations and relatable examples, helped students grasp the fundamental concepts of Object-Oriented Programming (OOP) and the Java programming language.",
    skills: ["OOP", "Java", "Mentorship"],
  },
];

const projects = [
  {
    title: "Ankara Science University Promo Site",
    link: "https://tanitim.ankarabilim.edu.tr/",
    thumbnail: tanitim,
    wip: true,
    description:
      "Website built for the promotion of Ankara Science University, featuring a context-aware AI assistant powered by OpenAI's GPT-3.5 model and Assistants API.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Next UI",
      "Framer Motion",
    ],
  },
  {
    title: "Self Shelf Library App",
    link: "https://ss.yunusemre.dev/",
    thumbnail: selfshelf,
    wip: false,
    description:
      "Simple library application utilizing full-stack web development skills, featuring a responsive design and a user-friendly interface.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    title: "Emogi Emotion Sharing App",
    link: "https://emogi.yunusemre.dev/",
    thumbnail: emogi,
    wip: false,
    description:
      "A small app that allows users to share their emotions with emojis, built as a demonstration of the in-memory database Redis.",
    skills: ["TypeScript", "React", "Next.js", "Tailwind", "Redis"],
  },
  {
    title: "Conversions PDF Editor",
    link: "https://conversions.yunusemre.dev/",
    thumbnail: conversions,
    wip: false,
    description:
      "PDF editor that allows users to split and rotate PDF files. This was my first project using React, which helped me grasp the complex concepts of React.",
    skills: ["JavaScript", "React", "CRA 😳", "Tailwind"],
  },
];

export default function Main() {
  return (
    <main className="pb-10 pt-24 text-skeptic-800 md:pb-16 lg:max-w-prose lg:py-16">
      <Chat />

      <section id="about" className="mb-24 scroll-mt-16" aria-label="About me">
        <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
        <p className="mt-5 text-skeptic-900">
          Nearly 10 years ago, in 2015, I leapt into the software development
          world by developing simple Minecraft plugins with Java and building
          hobby projects with Arduino.
        </p>
        <p className="mt-3 text-skeptic-900">
          Now, I&apos;ve been developing user-friendly websites and full-stack
          web applications for{" "}
          <strong className="font-bold">over 2 years</strong> using modern
          technologies. I contributed to the development and deployment of{" "}
          <strong className="font-bold">high-end insurance portals</strong> and{" "}
          <strong className="font-bold">IaaS-PaaS cloud applications</strong>{" "}
          serving thousands of users.
        </p>
        <p className="mt-3 text-skeptic-900">
          I enjoy keeping up with technology and design trends, creating
          illustrations and animations like the one in this page, and developing
          simple games.
        </p>
        <ButtonGroup />
      </section>

      <section
        id="experience"
        className="mb-24 scroll-mt-16"
        aria-label="Professional work experience"
      >
        <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
        <ul className="ml-1 mt-5 flex flex-col text-skeptic-900">
          {experience.map((exp, index) => (
            <li
              className={cn(
                "relative ml-3 pl-5 before:absolute before:-left-2 before:top-2 before:h-full before:w-0.5 before:rounded-full before:bg-slate-300 before:content-[''] after:absolute after:-left-[0.93rem] after:top-1 after:size-4 after:rounded-full after:bg-slate-300 after:content-['']",
                index !== experience.length - 1 && "pb-10",
                index === 0 && "after:bg-skeptic-700",
              )}
              key={index}
            >
              <div className="flex flex-col-reverse justify-between gap-y-1 sm:flex-row">
                <h3 className="relative flex flex-col leading-snug">
                  <span className="font-bold">{exp.title}</span>
                  <Link
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group font-medium hover:text-skeptic-700"
                  >
                    {exp.company}
                    <Arrow className="my-auto ml-1.5 inline-block size-3 stroke-[3px] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </h3>
                <aside
                  className="flex-shrink-0"
                  aria-label={`Worked from ${exp.date.start} to ${exp.date.end}`}
                >
                  <p className="text-xs text-skeptic-800 sm:text-sm">
                    {exp.date.start} &mdash; {exp.date.end}
                  </p>
                </aside>
              </div>
              <div className="mt-3 text-skeptic-950">
                <p className="text-sm">{exp.description}</p>
                <ul
                  className="mr-14 mt-3 flex flex-wrap gap-1.5 tracking-wide sm:gap-2"
                  aria-label="Technology stack"
                >
                  {exp.skills.map((skill) => (
                    <li
                      className="rounded-full bg-skeptic-700 px-3 py-1 text-xs text-skeptic-50"
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="projects"
        className="mb-24 scroll-mt-16"
        aria-label="Projects I've worked on"
      >
        <h2 className="text-2xl font-bold tracking-tight">
          Some Things I&apos;ve Built
        </h2>
        <ul className="mt-8 flex flex-col gap-14 text-skeptic-900">
          {projects.map((project) => (
            <li
              className="group relative z-0 flex flex-col gap-4 sm:flex-row"
              key={project.title}
            >
              <div
                className="absolute inset-x-0 inset-y-0 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:block lg:group-hover:scale-x-105 lg:group-hover:scale-y-125 lg:group-hover:bg-skeptic-200"
                aria-hidden="true"
              />
              <div className="relative size-fit flex-shrink-0 rounded">
                {project.wip && (
                  <div
                    className="absolute inset-0 z-10 flex size-full items-center justify-center rounded bg-opacity-50 bg-wip-overlay text-xl font-bold tracking-wider text-skeptic-50 transition-all lg:group-hover:opacity-0"
                    aria-label="Work in progress"
                  >
                    &mdash; WIP &mdash;
                  </div>
                )}
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={180}
                  quality={100}
                  className="relative rounded border border-skeptic-400"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold leading-none">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>{project.title}</span>
                    <Arrow className="my-auto ml-1.5 inline-block size-3 stroke-[4px] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span
                      className="absolute -inset-x-4 -inset-y-2.5 z-20 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                      aria-hidden="true"
                    />
                  </Link>
                </h3>
                <div className="mt-3 text-skeptic-950">
                  <p className="text-sm">{project.description}</p>
                  <ul
                    className="mr-14 mt-3 flex flex-wrap gap-1.5 tracking-wide sm:gap-2"
                    aria-label="Technology stack"
                  >
                    {project.skills.map((skill) => (
                      <li
                        className="rounded-full bg-skeptic-700 px-3 py-1 text-xs text-skeptic-50"
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="blog"
        className="mb-24 scroll-mt-16"
        aria-label="Recent blog posts"
      >
        <BlogPosts />
      </section>

      <footer className="flex flex-col items-start justify-between gap-y-6 sm:flex-row sm:items-end">
        <Link
          href="https://github.com/YuunsGit/yunusemre.dev/"
          rel="noreferrer noopener"
          target="_blank"
          className="group text-skeptic-800 group-hover:text-skeptic-600"
        >
          <span>
            Illustrated, Designed & Built
            <br />
            by Yunus Emre Kepenek
          </span>
          <Arrow className="my-auto ml-1.5 inline-block size-3 stroke-[3px] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
        <Link
          href="https://v2.yunusemre.dev/"
          rel="noreferrer noopener"
          target="_blank"
          className="group text-skeptic-800 group-hover:text-skeptic-600"
        >
          <span>Time Machine</span>
          <Arrow className="my-auto ml-1.5 inline-block size-3 stroke-[3px] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </footer>
    </main>
  );
}
