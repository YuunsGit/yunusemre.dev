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
        className="h-5 grayscale duration-150 hover:scale-125 hover:grayscale-0 sm:h-6 sm:w-6"
      />
    </a>
  );
};

export default Socials;
