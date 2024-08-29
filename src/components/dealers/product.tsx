import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Product = () => {
  return (
    <div className="flex flex-col md:flex-row border-2 border-[#FF003D] rounded pb-4 md:pb-0">
      <Image
        src={"/white-car.png"}
        width={232}
        height={189}
        className="basis-full lg:basis-[20%] h-[100px] md:h-auto w-full lg:w-[232px] lg:h-[189px]"
        alt="Toyota Car"
      />
      <div className="basis-full md:basis-[80%] px-3 pt-2">
        {/* Upper Div */}
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-2xl text-[#06063E] font-medium">
              Porsche Panamera
            </h3>
            <p className="text-sm text-[#06063E] mb-6">Brown - ACC - Coating</p>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-2 text-[#717171] text-[14px]">
              <p>67000 km</p>
              <p>2022</p>
              <p>Automatic</p>
              <p>4.2 L</p>
              <p>Bensin/Hybrid</p>
              <p>Firehjulsdrift</p>
            </div>
          </div>
          <div className="">
            <button>OVERBUDT</button>
            <p>Avsluttes om:</p>
            <p>02:46:58</p>
          </div>
        </div>
        <div className="border w-full border-gray-400 mt-4 mb-3"></div>
        {/* Bottom Div */}
        <div className="flex flex-col md:flex-row md:items-center lg:items-start justify-between">
          <div className="space-x-4 lg:space-x-4 md:space-x-0 md:flex-col md:flex md:items-center md:gap-y-3 lg:block">
            <Button className="px-6 rounded-full border border-[#06063E] bg-[#020278] bg-opacity-10 h-auto text-navyblue">
              AB 12345
            </Button>
            <span className="font-roboto text-sm text-navyblue inline">Bergen</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-4 text-white font-semibold my-4 lg:my-0">
            <Button className="bg-[#FF003D] lg:w-[118px] lg:h-[42px] rounded">
              + 1000 kr
            </Button>
            <Button className="bg-[#FF003D] lg:w-[118px] lg:h-[42px] rounded">
              + 1000 kr
            </Button>
            <Button className="bg-[#FF003D] lg:w-[118px] lg:h-[42px] rounded">
              + 1000 kr
            </Button>
          </div>
          <div className="flex md:flex-col lg:flex-row gap-x-4 md:items-center">
            <button className="text-base text-[#0A0A0A]">Høyeste bud</button>
            <button className="border-2 border-[#EBEBEB] text-[#0A0A0A] rounded p-2">
              650 000 kr
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
