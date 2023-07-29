import Image from "next/image";
import MetaCertificate from "../../public/Meta.png";

const About = () => {
  return (
    <div>
      <h3
        id="about"
        className="mx-auto mb-10 w-10/12 text-center text-4xl font-bold sm:mb-20 sm:text-6xl"
      >
        About Me
      </h3>
      <div className="z-0 mx-auto flex w-9/12 max-w-7xl flex-col-reverse items-center justify-center gap-y-12 md:w-7/12 lg:flex-row lg:gap-y-0 lg:space-x-10">
        <article className="space-y-6 sm:text-lg lg:w-1/2">
          <p>
            I am a results-driven Software Engineer with a focus on Full Stack Web Development. Currently working as a Full Stack Engineer at a leading cloud service provider in Türkiye, I am committed to continuous learning and staying at the forefront of web and design technologies.
          </p>
          <div className="space-y-2">
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="mx-auto grid w-full grid-cols-2 md:mx-0 md:w-3/4">
              <li className="before:mr-2 before:content-['•']">JavaScript</li>
              <li className="before:mr-2 before:content-['•']">TypeScript</li>
              <li className="before:mr-2 before:content-['•']">Tailwind</li>
              <li className="before:mr-2 before:content-['•']">React</li>
              <li className="before:mr-2 before:content-['•']">Node.js</li>
              <li className="before:mr-2 before:content-['•']">Next.js</li>
            </ul>
          </div>
        </article>
        <a
          href="https://www.credly.com/badges/ecb1c27a-f704-407b-a78e-0b956c17e12f/public_url"
          className="relative z-10 w-3/4 duration-150 before:absolute before:-z-10 before:h-full before:w-full before:rounded-2xl before:bg-primary-400 before:duration-150 before:content-[''] hover:translate-x-1 hover:rotate-3 hover:before:-translate-x-2 hover:before:-rotate-6 sm:w-1/2 xl:w-1/4"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={MetaCertificate}
            alt="Meta Front-End Developer Professional Certificate granted by Meta"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
