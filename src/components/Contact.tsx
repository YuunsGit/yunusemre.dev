import Image from "next/image";
import { FaceSmileIcon } from "@heroicons/react/24/solid";

import Letter from "../../public/Letter.svg";

const Contact = () => {
  return (
    <div>
      <h3
        id="contact"
        className="mx-auto mb-10 max-w-5xl text-center text-4xl font-bold md:mb-20 md:text-6xl"
      >
        Get In Touch
      </h3>
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center justify-center gap-y-12 gap-x-20 md:flex-row px-8 md:px-0">
        <Image
          src={Letter}
          alt="Picture of an open envelope with a paper inside it"
          className="-rotate-6"
        />
        <article className="w-full space-y-6 text-center text-base md:w-1/2 md:text-left md:text-lg">
          <p>
            I&apos;m always looking for new opportunities and my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <a
            href="mailto:yunus.emre.kepenek@outlook.com"
            className="inline-flex items-center space-x-2 rounded-lg bg-primary-500 px-4 py-2 duration-200 bg-opacity-90 hover:bg-opacity-60"
          >
            <FaceSmileIcon className="inline w-6 h-6" />
            <span>Say Hello</span>
          </a>
        </article>
      </div>
    </div>
  );
};

export default Contact;
