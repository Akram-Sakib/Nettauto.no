import Image from "next/image";
import React from "react";

const InfoSenterBreadCrumb = () => {
  return (
    <section className="h-40 justify-center relative bg-gradient-to-r from-[#DBF4FF] to-[#F8FCFF]">
      <div className="flex items-end justify-center gap-x-5 relative h-full">
        <Image
          src={"/Layer 2.png"}
          alt="Car"
          width={176}
          height={115}
          className="-mb-4 lg:w-[176px] lg:h-[115px] md:w-[176px] md:h-[115px] w-[90px] h-[60px]"
        />
        <h1 className="font-medium text-2xl md:text-3xl lg:text-5xl text-black pb-4">
          INFO<span className="text-primaryred">SENTER</span>
        </h1>
      </div>
    </section>
  );
};

export default InfoSenterBreadCrumb;
