import React from "react";
import Container from "../ui/container";
import { Button } from "../ui/button";
import Image from "next/image";

const ContactUs = () => {
  return (
    <section>
      <Container className="flex flex-col justify-center">
        <div className="text-center">
          <Button className="text-2xl bg-[#4A4458] border rounded-full px-20 py-7 my-10 h-auto inline-block">
            Lag gratis konto for å komme i gang
          </Button>
        </div>

        <div
          className="bg-slate-100 rounded-lg p-8 mt-10 max-w-[90%] mx-auto space-y-6 text-black font-roboto px-20"
          style={{
            background: "url('Rectangle 9.png') no-repeat center",
          }}
        >
          <div className="">
            <h1 className="text-[#06063E] text-center font-semibold text-2xl mt-4 mb-8">
              Kontakt oss
            </h1>
            <p className="text-[#292929] text-base text-center font-roboto max-w-xl mx-auto">
              Våre eksperter hjelper deg mer enn gjerne med spørsmål angående
              bilsalg og andre forhold angående våre tjenester.
            </p>
          </div>
          <div className="flex justify-center gap-x-20">
            <div className="">
              <div className="border-2 bg-white border-[#F2EFFF] rounded-2xl p-4  drop-shadow-md shadow-[#020278]">
                <Image src={"/Anne.png"} alt="Anne" width={325} height={325} />
              </div>
              <p className="text-[#FF003D] text-center font-semibold text-3xl">
                Anne
              </p>
            </div>
            <div className="">
              <div className="border-2 border-[#F2EFFF] bg-white rounded-2xl p-4 drop-shadow-md shadow-[#020278]">
                <Image src={"/Anne.png"} alt="Anne" width={325} height={325} />
              </div>
              <p className="text-[#FF003D] text-center font-semibold text-3xl">
                Paul
              </p>
            </div>
          </div>
          <div className="text-black mt-32 text-center space-y-1 font-roboto">
            <p>Du når oss på telefon på hverdager mellom</p>
            <p>09.00 og 18.00</p>
            <p>Telefon: +47 0000000</p>
            <p>Send e-post: support@nettauto.no</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
