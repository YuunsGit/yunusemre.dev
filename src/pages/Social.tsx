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
        className="h-5 w-5 duration-150 sm:h-6 sm:w-6 sm:grayscale sm:hover:scale-125 sm:hover:grayscale-0"
      />
    </a>
  );
};

export default Socials;
