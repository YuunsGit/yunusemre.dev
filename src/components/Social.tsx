import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  icon: any;
  link: string;
}

const Socials: React.FC<Props> = ({ name, link, icon }) => {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <Image
        src={icon}
        alt={`My ${name} account`}
        height={24}
        width={24}
        className="h-5 w-5 duration-150 sm:h-6 sm:w-6 sm:grayscale sm:hover:rotate-12 sm:hover:grayscale-0"
        priority
      />
    </a>
  );
};

export default Socials;
