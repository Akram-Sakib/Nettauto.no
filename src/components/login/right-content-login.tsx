import Image from "next/image";
import React from "react";

const RightContentLogin = () => {
  return (
    <div className="bg-[#06063E] md:w-full lg:w-1/2 h-full hidden lg:block">
      <div className="flex justify-end items-end relative h-full">
        <Image
          src={"/login.png"}
          alt="Toyota Car"
          width={720}
          height={532}
          className="lg:w-[450px] lg:h-[390px] xl:w-[500px] xl:h-[430px] 2xl:w-[720px] 2xl:h-[532px]"
        />
      </div>
    </div>
  );
};

export default RightContentLogin;
