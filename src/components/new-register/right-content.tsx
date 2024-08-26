import React from "react";
import { Button } from "../ui/button";

const RightContent = () => {
  return (
    <div className="h-full basis-1/2 flex items-center justify-center bg-[#06063E] drop-shadow-sm text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold font-roboto">Bedrift</h1>
        <p className="font-roboto font-bold my-12">
          Vi gjør kjøp og salg enkelt for din bedrift
        </p>
        <ul className="font-roboto my-12 disc">
          <li>Egen auksjonsrådgiver.</li>
          <li>Åpen budlogg og dokumentert salg</li>
          <li>Annonsering FINN.no inkludert</li>
          <li>Vi hjelper deg med hele salgsprosessen</li>
        </ul>

        <Button className="text-base bg-[#FF003D] w-[465px] py-6 rounded-tr-none rounded-bl-none rounded-tl-sm rounded-br-sm mt-6 font-roboto">
          Registrer deg som bedrift
        </Button>
      </div>
    </div>
  );
};

export default RightContent;
