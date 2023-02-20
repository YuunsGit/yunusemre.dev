import Image from "next/image";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

import Letter from "../../public/Letter.svg";

const Contact = () => {
  return (
    <div>
      <h3
        id="contact"
        className="mx-auto mb-10 w-10/12 text-center text-4xl font-bold md:mb-20 md:text-6xl"
      >
        Get In Touch
      </h3>
      <div className="mx-auto flex w-7/12 max-w-7xl flex-col-reverse items-center justify-center gap-y-12 gap-x-20 md:flex-row">
        <Image src={Letter} alt="A picture of a laptop near a cup of coffee" />
        <article className="w-full space-y-6 text-center text-base md:w-1/2 md:text-left md:text-lg">
          <p>
            I&apos;m always looking for new opportunities and my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <a
            href="mailto:yunus.emre.kepenek@outlook.com"
            className="inline-block space-x-2 rounded-lg bg-primary-400 px-6 py-4 duration-200 hover:bg-primary-500"
          >
            <FaceSmileIcon className="inline w-7" />
            <span>Say Hello</span>
          </a>
        </article>
      </div>
    </div>
  );
};

export default Contact;
