import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const LeftContent = () => {
  return (
    <div className="w-full basis-full lg:basis-1/2 relative">
      <Link href="/">
        <Image
          className="ml-[133px] mt-[28px] lg:fixed"
          src={"/logo.png"}
          alt="Anne"
          width={300}
          height={57.47}
        />
      </Link>
      <div className="h-full flex items-center justify-center py-32 lg:py-0">
        <div className="text-center">
          <h1 className="text-navyblue xl:text-3xl text-2xl 2xl:text-5xl font-roboto font-bold">
            Privat
          </h1>
          <p className="text-navyblue font-roboto font-bold my-12">
            Kom kjapt i gang med kjøp og salg hos oss!
          </p>
          <ul className="text-navyblue font-roboto mb-12">
            <li>Gratis salg i en kampanjeperiode</li>
            <li>Annonsering FINN.no inkludert</li>
            <li>Trygg betalingsløsning</li>
            <li>Slipp pruting og mas</li>
          </ul>

          <Link href="/private-registration">
            <Button className="text-base font-roboto bg-[#FF003D] 2xl:w-[465px] py-6 mt-6">
              Registrer deg som privat person
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
