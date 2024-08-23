import Image from "next/image";
import React from "react";

const Process = () => {
  return (
    <div className="border-[#F2EFFF] bg-white shadow-sm shadow-[#020278] border-2 rounded-2xl p-4 mb-20 -mt-40">
      <div className="flex gap-x-10">
        <h1 className="text-[#F3F5FF] text-9xl font-bold font-roboto">1</h1>
        <Image
          src={"/guy-with-car.svg"}
          alt="Guy with Car"
          width={150}
          height={160}
        />
      </div>
      <div className="mt-10 space-y-3 font-roboto text-lg ">
        <h3 className="text-primaryred font-medium">FORTELL OSS OM DIN BIL</h3>
        <p className="text-[#292929]">
          Du lager enkelt en auksjon. Last opp bilder, legger inn beskrivelse og
          informasjon. Velg så en ønsket, men realistisk pris for gjenstanden og
          send auksjonen til godkjenning.
        </p>
      </div>
    </div>
  );
};

export default Process;
