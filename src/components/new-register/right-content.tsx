import React from "react";
import { Button } from "../ui/button";

const RightContent = () => {
  return (
    <div className="h-full w-1/2 flex items-center justify-center bg-[#06063E]">
      <div className="text-center">
        <h1 className="  text-[50px] font-roboto">Bedrift</h1>
        <p className=" font-roboto my-[47px]">
          Vi gjør kjøp og salg enkelt for din bedrift
        </p>
        <ul className=" font-roboto mb-[52px]">
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
