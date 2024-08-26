import Image from "next/image";
import React from "react";

const PrivateRegistrationImage = () => {
  return (
    <div className="max-h-min basis-1/2 relative">
      <div
        className="w-full h-full bg-gradient-to-r bg-white absolute z-20"
        style={{
          clipPath: "polygon(0 0, 25% 0, 0 100%, 0 100%)",
        }}
      />
      <Image
        className=""
        src={"/Group 127.png"}
        width={946}
        height={1162}
        alt="Toyota Car"
      />
    </div>
  );
};

export default PrivateRegistrationImage;
