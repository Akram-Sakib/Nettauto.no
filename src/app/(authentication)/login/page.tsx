import LeftContentLogin from "@/components/login/left-content-login";
import RightContentLogin from "@/components/login/right-content-login";
import React from "react";

const page = () => {
  return (
    <div className="lg:h-full min-h-screen 2xl:h-screen flex flex-col lg:flex-row justify-between relative px-6 lg:px-0">
      <LeftContentLogin />
      <RightContentLogin />

      <div className="absolute inset-x-0 bottom-0 pb-4 hidden lg:block">
        <p className=" text-[#FF003D] text-center font-roboto text-xl lg:text-3xl xl:text-4xl 2xl:text-[50px]">
          Enkleste måten for{" "}
          <span className=" text-[#FFFFFF]">salg & kjøp av bil</span>
        </p>
      </div>
    </div>
  );
};

export default page;
