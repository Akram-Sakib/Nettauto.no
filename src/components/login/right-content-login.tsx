import Image from "next/image";
import React from "react";

const RightContentLogin = () => {
  return (
    <div className="bg-[#06063E] w-1/2">
      <div className="flex justify-end items-end relative h-full">
        <Image
          className=""
          src={"/login.png"}
          alt="Toyota Car"
          width={720}
          height={532}
        />
      </div>
    </div>
  );
};

export default RightContentLogin;
