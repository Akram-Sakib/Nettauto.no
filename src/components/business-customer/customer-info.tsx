import React from "react";
import { Button } from "../ui/button";

const CustomerInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row border-[#FF9776] border rounded max-w-72xl mx-auto">
      <div className="bg-[#FF9776] py-3 lg:py-14 px-2 basis-[2%]" />
      <div className="px-6 py-4 space-y-8 basis-[27%] flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-base xl:text-lg font-medium space-y-4">
            <span className="text-[#0B5F7C]">Bedriftsnavn:</span>
            <span className="text-black"> Aktiv Bilformidling AS</span>
          </h2>
          <p className="text-xs xl:text-sm text-[#0B5F7C]">
            Kontakt person: John Johnsen
          </p>
          <p className="text-xs xl:text-sm text-[#0B5F7C]">
            E-post: post@aktivbilformidling.no
          </p>
          <p className="text-xs xl:text-sm text-[#0B5F7C]">
            Mobilnummer: 00000000
          </p>
          <p className="text-xs xl:text-sm text-[#0B5F7C]">
            Fødselsdato: 18.feb.2021
          </p>
          <p className="text-xs xl:text-sm text-[#0B5F7C]">Rådgiver: John</p>
        </div>
      </div>
      <div className="px-6 py-4 space-y-8 basis-[27%] flex flex-col justify-center lg:items-center">
        <div className="space-y-1">
          <p className="text-xs xl:text-sm text-[#0B5F7C]">
            Organisasjonsnummer: 930722219
          </p>
          <p className="text-xs xl:text-sm text-[#0B5F7C]">
            Gateadressen: Vintergata 19
          </p>
          <p className="text-xs xl:text-sm text-[#0B5F7C]">By: Drammen</p>
          <p className="text-xs xl:text-sm text-[#0B5F7C]">Postnummer: 3048</p>
        </div>
      </div>
      <div className="px-6 py-4 basis-[27%] flex flex-col gap-y-4 justify-between">
        <Button className="bg-[#6BA5B8] 2xl:px-24 py-4 rounded-full h-auto w-auto text-[#6BA5B8] bg-opacity-40 text-xs xl:text-base">
          Sperre kunde
        </Button>
        <Button className="bg-[#6BA5B8] 2xl:px-24 py-4 rounded-full h-auto w-auto text-white text-xs xl:text-base">
          Historikk
        </Button>
        <Button className="bg-[#D6F5EC] 2xl:px-24 py-4 rounded-full h-auto w-auto text-[#008B65] text-xs xl:text-base">
          Endre info/passord/rådgiver
        </Button>
      </div>
      <div className="text-right basis-[15%] p-2 pb-4 flex flex-col gap-y-4 lg:gap-y-0 justify-center lg:justify-between ">
        <p className="text-xs xl:text-sm text-[#0B5F7C]">21.08.2024</p>
        <Button className="bg-[#FBD2D6] 2xl:px-24 py-4 rounded-full h-auto w-auto text-[#EE5462]">
          Avslå
        </Button>
      </div>
    </div>
  );
};

export default CustomerInfo;
