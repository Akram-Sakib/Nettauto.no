import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const CarAuction = () => {
  return (
    <div className="flex border-2 border-[#FF003D] rounded">
      <Image
        className="basis-[20%]"
        src={"/car1.png"}
        width={232}
        height={189}
        alt="Toyota Car"
      />
      <div className="basis-[80%] p-3 flex justify-between">
        <div className="space-y-6 basis-[90%]">
          {/* Upper Div */}
          <div className="flex justify-between">
            <div>
              <h3 className="text-2xl text-[#06063E] font-medium">
                Porsche Panamera
              </h3>
              <p className="text-sm text-[#06063E]">
                White - Cruise Control - Polish
              </p>
            </div>
            <div className="">
              <p className="text-primaryred text-xs">Vinnerbudet</p>
              <p className="text-base font-medium">1 200 000 kr</p>
            </div>
            <div className="">
              <p className="text-primaryred text-xs">Status</p>
              <p className="text-base font-medium">Utlevert</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-x-2 text-[#717171] text-[14px]">
              <p>67000 km</p>
              <p>2022</p>
              <p>Automatic</p>
              <p>4.2 L</p>
              <p>Bensin/Hybrid</p>
              <p>Firehjulsdrift</p>
            </div>
            <p className="font-roboto text-base font-medium">
              05.08.2024 - 13.36.55
            </p>
          </div>
          {/* Bottom Div */}
          <div className="flex justify-between">
            <div className="space-x-4">
              <Button className="px-6 rounded-full border border-[#06063E] bg-[#020278] bg-opacity-10 h-auto text-navyblue">
                01-750-VD
              </Button>
              <span className="font-roboto text-sm text-navyblue">Oslo</span>
            </div>
            <p className="text-[#717171]">Rådgiver: John</p>
            <div className="flex gap-x-4 text-white font-semibold">
              <Button className="bg-[#FF003D] px-10 py-2 rounded-lg h-auto w-auto">
                Legg ut på nytt
              </Button>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 basis-[10%] flex flex-col gap-y-4 text-white">
          <Button className="bg-[#FF003D] px-10 py-2 rounded-lg h-auto w-auto">
            Budhistorikk
          </Button>
          <Button className="bg-[#32ADE6] px-10 py-2 rounded-lg h-auto w-auto">
            Merk som ikke utlevert
          </Button>
          <Button className="bg-[#1B1F26] bg-opacity-70 px-10 py-2 rounded-lg h-auto w-auto ">
            Sjekk logg
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarAuction;
