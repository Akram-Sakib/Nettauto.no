import Image from "next/image";
import React from "react";

const ForgotPassImage = () => {
  return (
    <div className="h-full w-full basis-[40%] relative">
      <div className="z-10 bg-opacity-25 bg-[#06063E] h-full w-full absolute" />
      <Image
        className="h-full w-full"
        src={"/notebook.png"}
        height={1000}
        width={1000}
        alt="Toyota Car"
      />
    </div>
  );
};

export default ForgotPassImage;
