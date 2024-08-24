"use client";

import FilterAds from "@/components/advertisement-page/filter";
import Product from "@/components/homepage/product";
import { InputButton } from "@/components/ui/input-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

const Advertisements = () => {
  return (
    <ScrollArea className="h-full bg-white pl-6 m-10 rounded-2xl">
      <div className="flex-1 space-y-10 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight font-neulis">
            Alle Auksjoner
          </h2>
        </div>

        <div className="">
          <div className="max-w-4xl ml-auto flex gap-x-2 items-center">
            <h4 className="basis-[50%] text-xl">
              <span className="font-bold">Søk etter:</span>{" "}
              <span>Reg nr/ Auksjon ID eller Rådgiver</span>
            </h4>
            <div className="basis-[50%]">
              <InputButton
                endIcon={Search}
                placeholder=""
                className="border-[#EEEEEE] border rounded-3xl py-7 px-6 text-black"
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
