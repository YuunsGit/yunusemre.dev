"use client";

import React from "react";
import Loading from "../../public/assets/loading.svg";
import Image from "next/image";

interface Props {
  message: string;
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <div className="ml-auto flex items-center justify-start w-8/12 max-w-fit break-words rounded-xl rounded-br-none bg-primary-300 px-4 py-2 text-xl transition-all">
      <p className="whitespace-pre-line text-white text-base md:text-lg">
        {message}
      </p>
    </div>
  );
};

export default Message;
