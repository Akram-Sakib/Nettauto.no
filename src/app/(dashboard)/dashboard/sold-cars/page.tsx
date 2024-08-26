"use client";

import ProductSlide from "@/components/dealers/product-slide";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const EndOfAuctions = () => {
  return (
    <ScrollArea className="h-full bg-white pl-6 rounded-2xl">
      <div className="flex-1 space-y-20 p-4 md:p-8 pt-6">
        <div className="flex justify-end">
          <Button className="bg-[#FF003D] px-10">Ny auksjon</Button>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-normal tracking-tight font-neulis">
            Solgte <span className="text-primaryred">biler</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <ProductSlide />
        </div>
      </div>
    </ScrollArea>
  );
};

export default EndOfAuctions;
