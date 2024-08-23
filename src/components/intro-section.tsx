import Image from "next/image";
import React from "react";

const IntroSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto flex gap-x-6 justify-between">
        <div className="">
          <div className="border-2 border-[#F2EFFF] rounded-2xl p-4">
            <Image src={"/Anne.png"} alt="Anne" width={325} height={325} />
          </div>
          <p className="text-[#FF003D] text-center font-semibold text-3xl">
            Anne
          </p>
        </div>
        <div>
          <h2 className="text-[#FF003D] text-center font-semibold text-lg mt-4 mb-12">
            ELLER
          </h2>
          <p className="text-[#06063E] text-center font-semibold text-2xl mt-4 mb-8">
            Kontakt oss
          </p>
          <p className="text-[#292929] text-base text-center font-roboto">
            Våre eksperter hjelper deg mer enn gjerne med spørsmål angående
            bilsalg og andre forhold angående våre tjenester.
          </p>
          <div className="text-black mt-32 text-center space-y-1 font-roboto">
            <p>Du når oss på telefon på hverdager mellom</p>
            <p>09.00 og 18.00</p>
            <p>Telefon: +47 0000000</p>
            <p>Send e-post: support@nettauto.no</p>
          </div>
        </div>
        <div className="">
          <div className="border-2 border-[#F2EFFF] rounded-2xl p-4">
            <Image src={"/Anne.png"} alt="Anne" width={325} height={325} />
          </div>
          <p className="text-[#FF003D] text-center font-semibold text-3xl">
            Paul
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
