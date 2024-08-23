import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Button } from "../ui/button";

const ProductSlide = () => {
  return (
    <div className="border border-[#CFCFCF] rounded-lg font-roboto">
      <Image src={"/car1.png"} alt="car1" width={1000} height={250} />
      <div className="px-4 pb-4">
        <div className="flex justify-between items-start">
          <h3 className="text-navyblue font-medium text-xl">Porsche 911 GT3</h3>
          <p className="text-[#717171] self-end text-sm">Back wheel</p>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between text-[#717171]">
          <p>13000 km</p>
          <p>2022</p>
          <p>Automatic</p>
          <p>4.0 L</p>
          <p>Benzin</p>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between text-primaryred">
          <p>122 Bud</p>
          <p>Status</p>
          <p>Avsluttes om:</p>
        </div>
        <div className="flex justify-between text-navyblue mt-2">
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

export default ProductSlide;
