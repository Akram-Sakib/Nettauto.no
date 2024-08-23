import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div className="flex border-2 border-[#FF003D] rounded">
      <Image
        className="basis-[20%]"
        src={"/car1.png"}
        width={232}
        height={189}
        alt="Toyota Car"
      />
      <div className="basis-[80%] p-3">
        {/* Upper Div */}
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl text-[#06063E] font-medium">Porsche Panamera</h3>
            <p className="text-sm text-[#06063E] mb-6">Brown - ACC - Coating</p>
            <div className="flex gap-x-2 text-[#717171] text-[14px]">
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
        <div className="flex justify-between">
          <div>
            <button className="w-[122px] rounded-full border border-[#06063E] bg-[rgba(2, 2, 120, 0.098)] h-8">AB 12345</button>
          </div>
          <div className="flex gap-x-4 text-white font-semibold">
            <button className="bg-[#FF003D] w-[118px] h-[42px] rounded">+ 1000 kr</button>
            <button className="bg-[#FF003D] w-[118px] h-[42px] rounded">+ 1000 kr</button>
            <button className="bg-[#FF003D] w-[118px] h-[42px] rounded">+ 1000 kr</button>
          </div>
          <div className="flex gap-x-4 items-center">
            <button className="text-base text-[#0A0A0A]">Høyeste bud</button>
            <button className="border-2 p-3 border-[#EBEBEB] text-[#0A0A0A] rounded">650 000 kr</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
