import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Container from "../ui/container";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:min-h-screen justify-center relative bg-gradient-to-r from-[#DBF4FF] to-[#F8FCFF] w-full">
      <Container className="flex flex-col-reverse lg:flex-row justify-center xl:gap-x-20 mt-32 sm:mt-0 pb-10 sm:pb-0">
        <div className="basis-full md:basis-[50%] mt-32 sm:mt-40 md:mt-60 lg:mt-0">
          <div className="p-2 text-3xl md:text-[40px] md:leading-10">
            <h1 className="text-black font-semibold mb-5 md:mb-10 font-neulis">
              Enkel bilsalg <br />
              <span className="text-[#FF003D]">med Nettauto.no</span>
            </h1>
            <p className="text-sm md:text-lg text-[#292929] font-roboto max-w-md">
              Få kontakt med over 500 + kjøpere, og selg din bil på 24 timer!
            </p>
          </div>
          <div className="text-center md:mt-20">
            <div className="flex gap-x-4 font-roboto mt-5 md:mt-10">
              <Input
                type="text"
                placeholder="Bilens regnr."
                className="bg-white border-[#EBEBEB] border-2 rounded py-6 text-[#717171] text-sm md:text-base"
              />
              <Input
                type="text"
                placeholder="Kilometer"
                className="bg-white border-[#EBEBEB] border-2 rounded py-6 text-[#717171] text-sm md:text-base"
              />
            </div>
            <Button className="text-sm md:text-base bg-[#FF003D] lg:px-32 xl:px-60 py-6 rounded-tr-none rounded-bl-none rounded-tl-sm rounded-br-sm mt-6">
              KOM I GANG
            </Button>
          </div>
        </div>
        <div className="relative basis-full md:basis-[50%] md:mt-24 lg:mt-0">
          <div className="bg-[#999999] absolute w-full lg:h-[250px] lg:w-[250px] xl:h-[400px] xl:w-[400px] rounded-full left-40 bottom-36 opacity-10" />
          <div className="relative lg:ml-32 xl:ml-60 mb-20">
            <Button className="bg-[#C51E46] rounded-xl absolute -top-20 -left-6">
              Bud 5: 120 000 kr{" "}
            </Button>
            <Button className="bg-[#C51E46] rounded-xl absolute -top-6 left-28">
              Bud 5: 120 000 kr{" "}
            </Button>
            <Button className="bg-[#C51E46] rounded-xl absolute top-6 -left-3">
              Bud 5: 120 000 kr{" "}
            </Button>
          </div>
          <Image
            src={"/cars.png"}
            alt="CarImage"
            width={796}
            height={266}
            className="absolute z-10 md:top-[20%] w-full lg:w-[796px] lg:h-[266px] md:h-[250px] sm:h-[200px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
