import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Left_Content = () => {
  return (
    <div className="h-full w-1/2 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-black text-[50px] font-roboto">Privat</h1>
        <p className="text-black font-roboto my-[47px]">
          Kom kjapt i gang med kjøp og salg hos oss!
        </p>
        <ul className="text-black font-roboto mb-[52px]">
          <li>Gratis salg i en kampanjeperiode</li>
          <li>Annonsering FINN.no inkludert</li>
          <li>Trygg betalingsløsning</li>
          <li>Slipp pruting og mas</li>
        </ul>
        <Button className="text-base font-roboto bg-[#FF003D] w-[465px] py-6 rounded-tr-none rounded-bl-none rounded-tl-sm rounded-br-sm mt-6">
          Registrer deg som privat person
        </Button>
      </div>
    </div>
  );
};

export default Left_Content;
