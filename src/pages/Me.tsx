import Lottie from "lottie-react";
import MeAnimation from "../../public/Me.json";

export const Me = () => {
  return (
    <Lottie
      className="z-10 select-none overflow-hidden rounded-full"
      animationData={MeAnimation}
      loop={true}
    />
  );
};
