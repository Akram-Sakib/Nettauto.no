import LeftContentLogin from "@/components/login/left-content-login";
import RightContentLogin from "@/components/login/right-content-login";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex justify-between relative">
      <LeftContentLogin />
      <RightContentLogin />

      <div className="absolute inset-x-0 bottom-0">
        <p className=" text-[#FF003D]  text-center font-roboto text-[50px]">
          Enkleste måten for{" "}
          <span className=" text-[#FFFFFF]">salg & kjøp av bil</span>
        </p>
      </div>
    </div>
  );
};

export default page;
