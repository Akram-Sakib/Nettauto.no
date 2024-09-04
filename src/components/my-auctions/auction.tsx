import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Button } from "../ui/button";

const Auction = ({
  kilometer,
  images,
  brand,
  model,
  gearType,
  cylinderVolume,
  yearModel,
  fuel,
}: {
  kilometer: string;
  images: string[];
  brand: string;
  model: string;
  gearType: string;
  cylinderVolume: string;
  yearModel: string;
  fuel: string;
}) => {
  return (
    <div className="border border-[#CFCFCF] rounded-lg font-roboto">
      <Image
        src={images[0]}
        alt={brand}
        width={1000}
        height={250}
        className="mb-6 h-48 rounded-t-lg"
      />
      <div className="px-4 pb-4">
        <div className="flex justify-between items-start">
          <h3 className="text-navyblue font-medium text-lg md:text-xl">
            {/* Porsche 911 GT3 */}
            {brand}
          </h3>
          <p className="text-[#717171] self-end text-xs md:text-sm">
            {/* Back wheel */}
            {model}
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between text-[#717171] text-sm md:text-base">
          <p>
            {/* 13000 km */}
            {kilometer}
          </p>
          <p>
            {/* 2022 */}
            {yearModel}
          </p>
          <p>
            {/* Automatic */}
            {gearType}
          </p>
          <p>
            {/* 4.0 L */}
            {cylinderVolume}
          </p>
          <p>
            {/* Benzin */}
            {fuel}
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between text-primaryred text-sm md:text-base">
          <p>122 Bud</p>
          <p>Status</p>
          <p>Avsluttes om:</p>
        </div>
        <div className="flex justify-between text-navyblue mt-2 text-sm md:text-base">
          <p className="font-medium">122 Bud</p>
          <Button variant={"outline"} className="border-2">
            Live Now
          </Button>
          <p className="font-medium">Avsluttes om:</p>
        </div>
      </div>
    </div>
  );
};

export default Auction;
