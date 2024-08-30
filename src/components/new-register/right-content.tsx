import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const RightContent = () => {
  return (
    <div className="h-full basis-full lg:basis-1/2 flex items-center justify-center bg-[#06063E] drop-shadow-sm text-white py-40">
      <div className="text-center">
        <h1 className="xl:text-3xl text-2xl 2xl:text-5xl font-roboto font-bold">
          Bedrift
        </h1>
        <p className="font-roboto font-bold my-12">
          Vi gjør kjøp og salg enkelt for din bedrift
        </p>
        <ul className="font-roboto my-12 disc">
          <li>Egen auksjonsrådgiver.</li>
          <li>Åpen budlogg og dokumentert salg</li>
          <li>Annonsering FINN.no inkludert</li>
          <li>Vi hjelper deg med hele salgsprosessen</li>
        </ul>

        <Link href="/business-customer-registration">
          <Button className="text-base bg-[#FF003D] 2xl:w-[465px] py-6 mt-6 font-roboto">
            Registrer deg som bedrift
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RightContent;
