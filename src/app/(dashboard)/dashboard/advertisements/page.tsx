"use client";

import FilterAds from "@/components/advertisement-page/filter";
import Product from "@/components/dealers/product";
import { InputButton } from "@/components/ui/input-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

const Advertisements = () => {
  return (
    <ScrollArea className="h-full bg-white lg:pl-6 m-10 rounded-2xl">
      <div className="flex-1 space-y-4 lg:space-y-10 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base lg:text-lg xl:text-3xl font-bold tracking-tight font-neulis">
            Alle Auksjoner
          </h2>
        </div>

        <div className="">
          <div className="w-full lg:max-w-4xl lg:ml-auto flex flex-col lg:flex-row lg:gap-x-2 items-center gap-y-4 lg:gap-y-0">
            <h4 className="basis-full lg:basis-[50%] text-sm md:text-base lg:text-lg xl:text-xl w-full lg:w-auto">
              <span className="font-bold">Søk etter:</span>{" "}
              <span>Reg nr/ Auksjon ID eller Rådgiver</span>
            </h4>
            <div className="w-full lg:w-auto basis-full lg:basis-[50%] [&>div>div>svg]:text-white [&>div>div]:bg-primaryred [&>div>div]:h-full [&>div>div]:w-[20%] [&>div>div]:right-0 [&>div>div]:flex [&>div>div]:items-center [&>div>div]:justify-center [&>div>div]:rounded-tr-3xl [&>div>div]:rounded-br-3xl [&>div>div]:rounded-tl-xl [&>div>div]:rounded-bl-xl">
              <InputButton
                endIcon={Search}
                placeholder=""
                className="border-[#EEEEEE] border rounded-3xl py-5 xl:py-7 px-6 text-black pr-0 focus:border-[#EEEEEE]"
              />
            </div>
          </div>
          <FilterAds />

          <div className="space-y-10 mt-10">
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Advertisements;
