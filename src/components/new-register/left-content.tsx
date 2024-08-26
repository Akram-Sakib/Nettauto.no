import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const LeftContent = () => {
  return (
    <div className="w-full basis-1/2 relative">
      <Link href="/">
        <Image
          className="ml-[133px] mt-[28px] fixed"
          src={"/logo.png"}
          alt="Anne"
          width={300}
          height={57.47}
        />
      </Link>
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-navyblue text-5xl font-roboto font-bold">
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
          <Button className="text-base font-roboto bg-[#FF003D] w-[465px] py-6 rounded-tr-none rounded-bl-none rounded-tl-sm rounded-br-sm mt-6">
            Registrer deg som privat person
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
