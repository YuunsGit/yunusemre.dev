import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <h3
        id="projects"
        className="mx-auto mb-10 max-w-5xl px-8 text-center text-4xl font-bold md:mb-20 md:text-6xl"
      >
        Some Things I&apos;ve Built
      </h3>
      <div className="mx-auto flex max-w-7xl gap-8 px-8 sm:px-32 md:px-8 flex-wrap xl:px-0 justify-center">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="max-w-72 relative space-y-4 rounded-md bg-white bg-opacity-10 p-4 shadow transition-all hover:-translate-y-1">
            <Image
              src="/projects/blog.png"
              height={229}
              width={480}
              alt="Screenshot of my blog"
              className="rounded mx-auto"
            />
            <section className="space-y-2">
              <h3 className="text-2xl font-bold">Blog</h3>
              <p>My personal blog where I post regularly.</p>
            </section>
            <ul className="flex flex-wrap gap-2">
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-astro" />
                <span>Astro</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-typescript" />
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-tailwind" />
                <span>Tailwind</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-mdx" />
                <span>MDX</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-black" />
                <span>Vercel</span>
              </li>
            </ul>
            <div className="space-y-2">
              <a
                href="https://blog.yunusemre.dev/"
                target="_blank"
                rel="noreferrer noopener"
                className="block space-x-1.5 rounded-md bg-primary-500 py-1 text-center text-lg font-semibold uppercase transition-all hover:bg-opacity-80"
              >
                Visit
              </a>
              <a
                href="https://github.com/YuunsGit/blog"
                target="_blank"
                rel="noreferrer noopener"
                className="block space-x-1.5 rounded-md bg-primary-400 py-1 text-center font-semibold uppercase transition-all hover:bg-opacity-80"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="max-w-72 relative space-y-4 rounded-md bg-white bg-opacity-10 p-4 shadow transition-all hover:-translate-y-1">
            <Image
              src="/projects/portfolio.png"
              height={229}
              width={480}
              alt="Screenshot of my portfolio"
              className="rounded mx-auto"
            />
            <section className="space-y-2">
              <h3 className="text-2xl font-bold">Portfolio</h3>
              <p>My portfolio page which you are currently viewing.</p>
            </section>
            <ul className="flex flex-wrap gap-2">
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-black" />
                <span>Next.js</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-typescript" />
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-react" />
                <span>React</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-tailwind" />
                <span>Tailwind</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-black" />
                <span>Vercel</span>
              </li>
            </ul>
            <a
              href="https://github.com/YuunsGit/yunusemre.dev"
              target="_blank"
              rel="noreferrer noopener"
              className="block space-x-1.5 rounded-md bg-primary-400 py-1 text-center font-semibold uppercase transition-all hover:bg-opacity-80"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="max-w-72 relative space-y-4 rounded-md bg-white bg-opacity-10 p-4 shadow transition-all hover:-translate-y-1">
            <Image
              src="/projects/emogi.png"
              height={229}
              width={480}
              alt="Screenshot of emogi"
              className="rounded mx-auto"
            />
            <section className="space-y-2">
              <h3 className="text-2xl font-bold">Emogi</h3>
              <p>A little fun app that I built while learning Redis.</p>
            </section>
            <ul className="flex flex-wrap gap-2">
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-black" />
                <span>Next.js</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-typescript" />
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-redis" />
                <span>Redis</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-react" />
                <span>React</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-tailwind" />
                <span>Tailwind</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-black" />
                <span>Vercel</span>
              </li>
            </ul>
            <div className="space-y-2">
              <a
                href="https://emogi.yunusemre.dev/"
                target="_blank"
                rel="noreferrer noopener"
                className="block space-x-1.5 rounded-md bg-primary-500 py-1 text-center text-lg font-semibold uppercase transition-all hover:bg-opacity-80"
              >
                Visit
              </a>
              <a
                href="https://github.com/YuunsGit/emogi"
                target="_blank"
                rel="noreferrer noopener"
                className="block space-x-1.5 rounded-md bg-primary-400 py-1 text-center font-semibold uppercase transition-all hover:bg-opacity-80"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="max-w-72 relative space-y-4 rounded-md bg-white bg-opacity-10 p-4 shadow transition-all hover:-translate-y-1">
            <Image
              src="/projects/selfshelf.png"
              height={229}
              width={480}
              alt="Screenshot of my Self Shelf"
              className="rounded mx-auto"
            />
            <section className="space-y-2">
              <h3 className="text-2xl font-bold">Self Shelf</h3>
              <p>Simple library management app.</p>
            </section>
            <ul className="flex flex-wrap gap-2">
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-black" />
                <span>Next.js</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-typescript" />
                <span>TypeScript</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-react" />
                <span>React</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-tailwind" />
                <span>Tailwind</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-black" />
                <span>Vercel</span>
              </li>
            </ul>
            <div className="space-y-2">
              <a
                href="https://ss.yunusemre.dev/"
                target="_blank"
                rel="noreferrer noopener"
                className="block space-x-1.5 rounded-md bg-primary-500 py-1 text-center text-lg font-semibold uppercase transition-all hover:bg-opacity-80"
              >
                Visit
              </a>
              <a
                href="https://github.com/YuunsGit/selfshelf"
                target="_blank"
                rel="noreferrer noopener"
                className="block space-x-1.5 rounded-md bg-primary-400 py-1 text-center font-semibold uppercase transition-all hover:bg-opacity-80"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="max-w-72 relative space-y-4 rounded-md bg-white bg-opacity-10 p-4 shadow transition-all hover:-translate-y-1">
            <Image
              src="/projects/conversions.png"
              height={229}
              width={480}
              alt="Screenshot of Conversions"
              className="rounded mx-auto"
            />
            <section className="space-y-2">
              <h3 className="text-2xl font-bold">Conversions</h3>
              <p>Online PDF editor. Simple and fast.</p>
            </section>
            <ul className="flex flex-wrap gap-2">
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-cra" />
                <span>CRA 😳</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-javascript " />
                <span>JavaScript</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-react" />
                <span>React</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-tailwind" />
                <span>Tailwind</span>
              </li>
              <li className="flex items-center gap-x-1 rounded-md bg-white bg-opacity-60 px-2 py-0.5 font-semibold text-ternary-500">
                <span className="inline-block h-3 w-3 rounded-full bg-github" />
                <span>GitHub Pages</span>
              </li>
            </ul>
            <div className="space-y-2">
              <a
                href="https://conversions.yunusemre.dev/"
                target="_blank"
                rel="noreferrer noopener"
                className="block space-x-1.5 rounded-md bg-primary-500 py-1 text-center text-lg font-semibold uppercase transition-all hover:bg-opacity-80"
              >
                Visit
              </a>
              <a
                href="https://github.com/YuunsGit/conversions"
                target="_blank"
                rel="noreferrer noopener"
                className="block space-x-1.5 rounded-md bg-primary-400 py-1 text-center font-semibold uppercase transition-all hover:bg-opacity-80"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
