import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="flex flex-col min-h-screen justify-center relative bg-gradient-to-r from-[#F8FCFF] to-[#DBF4FF]">
      <div className="container mx-auto flex justify-center gap-x-20">
        <div className="basis-[45%]">
          <div className="p-2 text-[40px] leading-10">
            <h1 className="text-black font-semibold mb-10">
              Enkel bilsalg <br />
              <span className="text-[#FF003D]">med Nettauto.no</span>
            </h1>
            <p className="text-lg text-[#292929] font-roboto max-w-md">
              Få kontakt med over 500 + kjøpere, og selg din bil på 24 timer!
            </p>
          </div>
          <div className="text-center mt-20">
            <div className="flex gap-x-4 font-roboto mt-10">
              <Input
                type="text"
                placeholder="Bilens regnr."
                className="bg-white border-[#EBEBEB] border-2 rounded py-6 text-[#717171] text-base"
              />
              <Input
                type="text"
                placeholder="Kilometer"
                className="bg-white border-[#EBEBEB] border-2 rounded py-6 text-[#717171] text-base"
              />
            </div>
            <Button className="text-base bg-[#FF003D] px-60 py-6 rounded-tr-none rounded-bl-none rounded-tl-sm rounded-br-sm mt-6">
              KOM I GANG
            </Button>
          </div>
        </div>
        <div className="relative basis-[55%]">
          <div className="bg-[#999999] absolute h-[400px] w-[400px] rounded-full left-40  bottom-36" />
          <Image
            src={"/cars.png"}
            alt="CarImage"
            width={796}
            height={266}
            className="absolute z-10 top-[20%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
