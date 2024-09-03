"use client";

import ProductSlide from "@/components/homepage/product-slide";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const EndOfAuctions = () => {
  return (
    <ScrollArea className="h-full bg-white pl-6 rounded-2xl">
      <div className="flex-1 space-y-20 p-4 md:p-8 pt-6">
        <div className="flex justify-end">
          <Link href="/dashboard/new-auction">
            <Button className="bg-[#FF003D] px-10">Ny auksjon</Button>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-normal tracking-tight font-neulis">
            Mine <span className="text-primaryred">auksjoner</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductSlide />
          <ProductSlide />
          <ProductSlide />
          <ProductSlide />
          <ProductSlide />
        </div>
      </div>
    </ScrollArea>
  );
};

export default EndOfAuctions;
