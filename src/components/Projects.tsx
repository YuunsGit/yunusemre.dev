import Image from "next/image";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

import Sinbad from "../../public/Sinbad.svg";
import Sinbadude from "../../public/Sinbadude.svg";
import Conversions from "../../public/Conversions.svg";
import HeMan from "../../public/Heman.svg";

const Projects = () => {
  return (
    <div>
      <h3
        id="projects"
        className="mx-auto mb-10 w-10/12 text-center text-4xl font-bold md:mb-20 md:text-6xl"
      >
        Some Things I&apos;ve Built
      </h3>
      <div className="z-10 mx-auto flex w-10/12 max-w-7xl flex-col space-y-5 lg:w-7/12">
        <a
          href="https://sinbad.yuuns.tech"
          target="_blank"
          rel="noreferrer"
          className="group relative"
        >
          <Image
            src={Sinbadude}
            alt="Mascot of Sinbad DigiBox"
            className="absolute -left-44 -top-32 hidden h-4/5 -rotate-12 lg:block"
          />
          <div className="relative z-10 flex flex-col-reverse justify-between gap-x-0 gap-y-8 rounded-3xl bg-sky-50 px-7 py-9 text-center text-ternary-500 duration-200 group-hover:bg-sky-100 sm:p-12 md:flex-row md:gap-x-20 md:gap-y-0 md:text-left">
            <article>
              <h4 className="text-2xl font-extrabold">Sinbad DigiBox</h4>
              <h5 className="text-xl font-semibold">Lead & Web Mentor</h5>
              <br />
              <p>
              Provides valuable guidance to computer science students. Collaborating closely with the Sinbad Core team, leads and contributes to web development projects, fostering a collaborative and growth-oriented environment.
              </p>
              <p className="mt-3 before:mr-2 before:content-['▸']">
                Developed the open-source website using <b>React</b>.
              </p>
              <p className="mt-3 block underline md:hidden">
                Click here to visit.
              </p>
            </article>
            <Image
              src={Sinbad}
              alt="Sinbad DigiBox logo"
              className="mx-auto h-auto w-10/12 md:w-1/3"
            />
          </div>
          <ArrowRightCircleIcon className="absolute bottom-0 right-0 top-0 z-0 my-auto hidden h-14 text-sky-100 duration-200 group-hover:translate-x-16 md:block" />
        </a>
        <a
          href="https://conversions.yuuns.tech/"
          target="_blank"
          rel="noreferrer"
          className="group relative"
        >
          <div className="relative z-10 flex flex-col-reverse justify-between gap-x-0 gap-y-8 rounded-3xl bg-stone-800 px-7 py-9 text-center duration-200 group-hover:bg-stone-900 sm:p-12 md:flex-row md:gap-x-20 md:gap-y-0 md:text-left">
            <article>
              <h4 className="text-2xl font-extrabold">Conversions</h4>
              <h5 className="text-xl font-semibold">Author</h5>
              <br />
              <p>
              A user-friendly PDF editing website built using React that demonstrates a variety of key React concepts. Using a straightforward interface and a variety of operations, users may simply modify PDF documents.
              </p>
              <p className="mt-3 before:mr-2 before:content-['▸']">
                Developed the open-source website using <b>React</b>.
              </p>
              <p className="mt-3 block underline md:hidden">
                Click here to visit.
              </p>
            </article>
            <Image
              src={Conversions}
              alt="Conversions logo"
              className="mx-auto h-auto w-10/12 md:w-1/3"
            />
          </div>
          <ArrowRightCircleIcon className="absolute bottom-0 right-0 top-0 z-0 my-auto hidden h-14 text-stone-900 duration-200 group-hover:translate-x-16 md:block" />
        </a>
        <a
          href="https://github.com/YuunsGit/legionary"
          target="_blank"
          rel="noreferrer"
          className="group relative"
        >
          <div className="relative z-10 flex flex-col-reverse justify-between gap-x-0 gap-y-8 rounded-3xl bg-stone-100 px-7 py-9 text-center text-ternary-500 duration-200 group-hover:bg-stone-200 sm:p-12 md:flex-row  md:gap-x-20 md:gap-y-0 md:text-left">
            <article>
              <h4 className="text-2xl font-extrabold">Legionary</h4>
              <h5 className="text-xl font-semibold">Author</h5>
              <br />
              <p>
                Discord bot that is capable of various operations such as
                spell-checking, reactions, essential commands and little games.
              </p>
              <p className="mt-3 before:mr-2 before:content-['▸']">
                Developed the open-source bot using <b>Node.js</b>.
              </p>
              <p className="mt-3 block underline md:hidden">
                Click here to visit.
              </p>
            </article>
            <Image
              src={HeMan}
              alt="Legionary logo"
              className="mx-auto my-auto w-10/12 md:w-1/3"
            />
          </div>
          <ArrowRightCircleIcon className="absolute bottom-0 right-0 top-0 z-0 my-auto hidden h-14 text-stone-200 duration-200 group-hover:translate-x-16 md:block" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
