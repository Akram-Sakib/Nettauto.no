import Image from "next/image";
import React from "react";

const Right_ContentLogin = () => {
  return (
    <div className="  bg-[#06063E] w-1/2 ">
      <div className="flex justify-end items-end">
        <Image
          className=" w-[70%] mt-[385px] opacity-[45%]"
          src={"/login.png"}
          width={800}
          height={800}
          alt="Toyota Car"
        />
      </div>
    </div>
  );
};

export default Right_ContentLogin;
