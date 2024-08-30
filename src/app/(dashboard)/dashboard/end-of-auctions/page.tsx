"use client";

import FilterAds from "@/components/advertisement-page/filter";
import CarAuction from "@/components/end-of-auctions/car-auction";
import { InputButton } from "@/components/ui/input-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

const EndOfAuctions = () => {
  return (
    <ScrollArea className="h-full bg-white pl-6 m-10 rounded-2xl">
      <div className="flex-1 space-y-10 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight font-neulis">
            Endt <span className="text-primaryred">auksjoner</span>
          </h2>
        </div>

        <div className="">
          <div className="w-full lg:max-w-4xl lg:ml-auto flex flex-col lg:flex-row lg:gap-x-2 items-center gap-y-4 lg:gap-y-0">
            <h4 className="basis-full lg:basis-[50%] text-sm md:text-base lg:text-lg xl:text-xl w-full lg:w-auto">
              <span className="font-bold">Søk etter:</span>{" "}
              <span>Reg nr/ Auksjon ID eller Rådgiver</span>
            </h4>
            <div className="w-full lg:w-auto basis-full lg:basis-[50%]">
              <InputButton
                endIcon={Search}
                placeholder=""
                className="border-[#EEEEEE] border rounded-3xl py-7 lg:px-6 text-black xl:py-7 pr-0 focus:border-[#EEEEEE]"
              />
            </div>
          </div>
          <FilterAds />

          <div className="space-y-10 mt-10">
            <CarAuction />
            <CarAuction />
            <CarAuction />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default EndOfAuctions;
