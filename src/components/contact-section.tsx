import React from "react";

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center text-[#06063E]">
          <h1 className="text-2xl mb-2">
            Ønsker du at vi tar kontakt med deg?
          </h1>
          <p className="text-sm">
            Fyll inn skjema, så tar en av våre rådgivere kontakt med deg snart.
          </p>
        </div>
        <div className="bg-slate-100 rounded-lg p-8 mt-10 max-w-[90%] mx-auto space-y-6 text-black">
          <div className="flex gap-x-5">
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
          <div className="flex gap-x-5">
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
          <div className="flex gap-x-5">
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
          <div className="flex gap-x-5">
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
          <div className="flex justify-center mt-10">
            <button className="rounded-full px-40 py-3 bg-[#FF003D] text-white mx-auto">
              Kontakt meg
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
