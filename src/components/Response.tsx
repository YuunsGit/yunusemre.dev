import React from "react";
import Loading from "../../public/assets/loading.svg";
import Image from "next/image";

const Response = ({ message, error }: { message: string; error?: boolean }) => {
  return (
    <div className="mr-auto flex items-center justify-start transition-all w-10/12 max-w-fit break-words rounded-xl rounded-tl-none px-4 py-2 text-xl bg-white border-2 border-primary-200">
      {!message ? (
        <Image
          src={Loading}
          width={35}
          height={35}
          alt="Message loading spinner"
        />
      ) : (
        <p
          className={`whitespace-pre-line text-base md:text-lg ${
            error ? "text-red-500" : "text-ternary-500"
          }`}
          dangerouslySetInnerHTML={{
            __html: message.replaceAll(
              /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*)[-A-Z0-9+&@#\/%=~_|])/gi,
              "<a href='$1' target='_blank' rel='noopener noreferrer' class='bg-primary-200 rounded-lg px-2 text-white hover:bg-primary-300 transition-all'>$3</a>",
            ),
          }}
        ></p>
      )}
    </div>
  );
};

export default Response;
