import React from "react";
import Container from "../ui/container";
import Image from "next/image";
import Process from "./process";

const CountAchievement = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-7xl rounded-tl-3xl rounded-br-3xl bg-[#06063E] relative px-20 flex justify-around">
          <div className="text-white space-y-2 py-10 text-center">
            <h3 className="text-[40px]">5000 +</h3>
            <p className="text-2xl">Biler solgt</p>
          </div>
          <div className="text-white space-y-2 py-10 text-center">
            <h3 className="text-[40px]">500 +</h3>
            <p className="text-2xl">Kjøpere registrert</p>
          </div>
          <div className="text-white space-y-2 py-10 text-center">
            <h3 className="text-[40px]">30,000+</h3>
            <p className="text-2xl">Innkommende bud</p>
          </div>
          <div className="text-white space-y-2 py-10 text-center">
            <h3 className="text-[40px]">5000+</h3>
            <p className="text-2xl">Fornøyde selgere</p>
          </div>
        </div>
        <div className="mt-20 text-center">
          <h1 className="text-[#06063E] text-3xl font-medium">
            Vi hjelper deg med å selges din bil!
          </h1>
          <h3 className="text-[#FF003D] text-3xl font-medium mt-4">
            Trygt og enkelt
          </h3>
          <h3 className="text-lg mt-10 uppercase font-semibold">
            <span className="text-[#FF003D]">Hvordan fungerer</span>{" "}
            <span className="text-navyblue">nETTAUTO.NO</span>
          </h3>
        </div>
      </Container>
      <div className="bg-navyblue mt-52">
        <Container className="flex gap-x-8">
          <Process />
          <Process />
          <Process />
          <Process />
        </Container>
      </div>
    </section>
  );
};

export default CountAchievement;
