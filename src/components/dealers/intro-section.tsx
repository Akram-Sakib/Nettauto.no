import Image from "next/image";
import React from "react";
import Container from "../ui/container";

const IntroSection = () => {
  return (
    <section className="py-20">
      <Container className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 gap-x-6 justify-between">
        <div className="order-2 lg:order-1">
          <div className="border-2 border-[#F2EFFF] rounded-2xl p-4 flex items-center justify-center">
            <Image src={"/Anne.png"} alt="Anne" width={325} height={325} className="lg:w-[325px] lg:h-[250px] w-[200px] h-[200px]" />
          </div>
          <p className="text-[#FF003D] text-center font-semibold text-xl lg:text-3xl">
            Anne
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-[#FF003D] text-center font-semibold text-base lg:text-lg mt-4 mb-12">
            ELLER
          </h2>
          <p className="text-[#06063E] text-center font-semibold text-xl lg:text-2xl mt-4 mb-8">
            Kontakt oss
          </p>
          <p className="text-[#292929] text-sm lg:text-base text-center font-roboto">
            Våre eksperter hjelper deg mer enn gjerne med spørsmål angående
            bilsalg og andre forhold angående våre tjenester.
          </p>
          <div className="text-black mt-10 lg:mt-32 text-center space-y-1 font-roboto text-sm lg:text-base">
            <p>Du når oss på telefon på hverdager mellom</p>
            <p>09.00 og 18.00</p>
            <p>Telefon: +47 0000000</p>
            <p>Send e-post: support@nettauto.no</p>
          </div>
        </div>
        <div className="order-3 lg:order-3">
          <div className="border-2 border-[#F2EFFF] rounded-2xl p-4 flex items-center justify-center">
            <Image src={"/paul.png"} alt="Paul" width={325} height={325} className="lg:w-[325px] lg:h-[250px] w-[200px] h-[200px]" />
          </div>
          <p className="text-[#FF003D] text-center font-semibold text-xl lg:text-3xl">
            Paul
          </p>
        </div>
      </Container>
    </section>
  );
};

export default IntroSection;
