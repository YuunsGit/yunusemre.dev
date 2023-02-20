import Image from "next/image";
import Laptop from "../../public/Laptop.svg";

const About = () => {
  return (
    <div>
      <h3
        id="about"
        className="mx-auto mb-10 w-10/12 text-center text-4xl font-bold sm:mb-20 sm:text-6xl"
      >
        About Me
      </h3>
      <div className="mx-auto flex w-9/12 max-w-7xl flex-col-reverse items-center justify-center gap-y-12 md:w-7/12 lg:flex-row lg:gap-y-0 lg:space-x-10">
        <article className="space-y-6 sm:text-lg lg:w-1/2">
          <p>
            I am a software engineering student who specializes in web
            development. I am passionate about creating intuitive and visually
            appealing websites that are both functional and user-friendly.
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
              <li className="before:mr-2 before:content-['•']">Astro</li>
            </ul>
          </div>
        </article>
        <Image src={Laptop} alt="A picture of a laptop near a cup of coffee" />
      </div>
    </div>
  );
};

export default About;
