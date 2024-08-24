import Left_ContentLogin from "@/components/login/Left_ContentLogin";
import Right_ContentLogin from "@/components/login/Right_ContentLogin";
import React from "react";

const page = () => {
  return (
    <div className=" h-[900px] flex justify-between relative">
      <Left_ContentLogin />
      <Right_ContentLogin />

      <div className=" absolute top-[820px] left-[250px]">
        <p className=" text-[#FF003D]  text-center font-roboto text-[50px]">
          Enkleste måten for{" "}
          <span className=" text-[#FFFFFF]">salg & kjøp av bil</span>
        </p>
      </div>
    </div>
  );
};

export default page;
