import React from "react";
import { Button } from "../ui/button";

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center text-[#06063E]">
          <h1 className="text-2xl mb-2 font-semibold">
            Ønsker du at vi tar kontakt med deg?
          </h1>
          <p className="text-sm font-roboto">
            Fyll inn skjema, så tar en av våre rådgivere kontakt med deg snart.
          </p>
        </div>
        <div className="bg-slate-100 rounded-lg mt-10 md:max-w-[90%] mx-auto space-y-6 text-black font-roboto p-2 py-5 md:p-8 ">
          <div className="flex flex-col gap-y-5 md:gap-y-0 md:flex-row gap-x-5">
            <div className="basis-[25%]">
              <label htmlFor="" className="text-xl text-black block">
                Fornavn*
              </label>
              <input
                type="text"
                className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
              />
            </div>
            <div className="basis-[25%]">
              <label htmlFor="" className="text-xl text-black block">
                Etternavn:
              </label>
              <input
                type="text"
                className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
              />
            </div>
            <div className="basis-[50%]">
              <label htmlFor="" className="text-xl text-black block">
                Bedriftnavn
              </label>
              <input
                type="text"
                className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-5 md:gap-y-0 gap-x-5 md:flex-row">
            <div className="basis-[10%]">
              <label htmlFor="" className="text-xl text-black block">
                Telefonnummer
              </label>
              <input
                type="text"
                value={"NO +47"}
                className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full text-black px-4"
              />
            </div>
            <div className="basis-[40%]">
              <label htmlFor="" className="text-xl text-black block invisible">
                Etternavn:
              </label>
              <input
                type="text"
                className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-5 md:gap-y-0 gap-x-5 md:flex-row">
            <div className="basis-[50%]">
              <label htmlFor="" className="text-xl text-black block">
                E-post*
              </label>
              <input
                type="text"
                className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-5 md:gap-y-0 gap-x-5 md:flex-row">
            <div className="basis-full">
              <label htmlFor="" className="text-xl text-black block">
                Hva gjelder henvendelsen?*{" "}
              </label>
              <textarea
                rows={6}
                className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center mt-10 md:flex-row">
            <Button className="rounded-full md:px-40 h-auto md:py-3 bg-[#FF003D] text-white mx-auto font-neulis">
              Kontakt meg
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
