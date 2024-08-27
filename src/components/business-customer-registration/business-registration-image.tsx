import Image from "next/image";
import React from "react";

const BusinessRegistrationImage = () => {
  return (
    <div className="h-full w-full basis-[30%] relative">
      <div className="z-10 bg-opacity-25 bg-[#06063E] h-full w-full absolute" />
      <Image
        className="h-full w-full"
        src={"/business-registration-img.png"}
        height={1000}
        width={1000}
        alt="Toyota Car"
      />
    </div>
  );
};

export default BusinessRegistrationImage;
