import Image from "next/image";
import React from "react";

const Process = (props: {
  id: number;
  title: string;
  image: string;
  description: string;
}) => {
  const { id, title, image, description } = props;

  return (
    <div className="border-[#F2EFFF] bg-white shadow-sm shadow-[#020278] border-2 rounded-2xl p-4 mb-20 -mt-40">
      <div className="flex justify-between gap-x-10">
        <h1 className="text-[#F3F5FF] text-7xl md:text-9xl font-bold font-roboto">
          {id}
        </h1>
        <Image
          src={image}
          alt={title}
          width={150}
          height={160}
          className="w-[100px] h-[110px] md:w-[150px] md:h-[160px]"
        />
      </div>
      <div className="mt-10 space-y-3 font-roboto text-sm md:text-lg ">
        <h3 className="text-primaryred font-medium">{title}</h3>
        <p className="text-[#292929]">{description}</p>
      </div>
    </div>
  );
};

export default Process;
