import React from "react";

const NormalBid = () => {
  return (
    <div className=" min-h-screen bg-[#E9E9E9]">
      <h1 className="  text-center my-10 text-5xl font-semibold font-neulis text-[#263238]">
        Du er i ferd med å avgi bud på
      </h1>
      <div>
        <h2 className="font-semibold text-black font-roboto text-4xl text-center">
          Mercedes GLC
        </h2>
        <p className=" text-[#06063E] text-center my-3 font-medium">
          Hvit - Cruise Control - Coating
        </p>
        <div className=" flex justify-center ">
          <button className="bg-[#02027819] font-medium rounded-xl text-[#06063E] px-6 py-3 border-2 border-[#06063E]  hover:bg-slate-50  ">
            BS 12345
          </button>
        </div>
      </div>

      <div className="mt-12 flex justify-center ">
        <div className=" w-[960px] bg-slate-400 rounded-md border-y-4 ">
          <div className=" italic border-2 rounded-t-xl border-[#D9D9D9]">
            <h1 className="text-black py-2  bg-[#D9D9D9] px-3 ">
              Auction id: 4556789
            </h1>
          </div>
          <div className="">
            <div className="bg-white px-16 flex justify-between pt-6">
              <h3 className=" font-roboto text-xl font-medium">Ditt</h3>
              <p className=" font-medium text-xl">150 000 Kr</p>
            </div>
            <div className="bg-white px-16 flex justify-between pt-3 pb-3 ">
              <h3 className=" font-roboto text-xl font-medium">
                Auksjonsgebyr
              </h3>
              <p className=" font-medium text-xl  ">5000 kr</p>
            </div>
          </div>

          <div className="bg-white px-16 flex justify-between pt-6 pb-10 border-t-[3px] border-solid  border-[#E0E0E0] ">
            <h3 className=" font-roboto text-xl font-medium ">Total</h3>
            <p className=" font-medium text-xl ">155 000 kr</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mx-48 mt-4">
        <input type="checkbox" name="" id="" className="" />
        <h1 className=" mx-4 font-roboto font-medium text-[#FF003D]">
          Vennligst bekreft at du har lest og aksepterer alle opplysninger i
          annonsen med bilder og vedlegg, samt våre vilkår. Dette må kun utføres
          en gang per auksjon.
        </h1>
      </div>

      <div className=" flex justify-around mb-20 mt-4 mx-10">
        <button className=" text-[#FFFFFF] rounded-sm font-roboto uppercase font-medium py-3 px-12 bg-[#30BC55]">
          BEKREFT
        </button>
        <button className=" text-[#FFFFFF] rounded-sm font-roboto uppercase font-medium py-3 px-12 bg-[#FF003D]">
          AVBRUTT
        </button>
      </div>
    </div>
  );
};

export default NormalBid;
