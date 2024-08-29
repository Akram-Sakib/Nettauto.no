import Image from "next/image";
import { Button } from "../ui/button";
import Container from "../ui/container";
import { Separator } from "../ui/separator";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:min-h-screen justify-center relative bg-gradient-to-r from-[#DBF4FF] to-[#F8FCFF] py-10 md:py-20 lg:py-0">
      <Container className="flex flex-col-reverse md:items-center md:flex-row justify-center gap-x-20">
        <div className="basis-full lg:basis-[50%] text-center lg:text-left">
          <div className="p-2 font-neulis font-bold text-xl md:text-2xl lg:text-[40px] lg:leading-[64px]">
            <h1 className="text-black">SELG KOSTNADSFRITT HOS OSS</h1>
            <h1 className="text-[#FF003D]">Selg raskt, trygt og enkelt.</h1>
          </div>
          <Button className="rounded bg-primaryred md:mt-8 lg:mt-12 lg:ml-[101px] font-roboto">
            OPPRETT KONTO I DAG
          </Button>
        </div>
        <div className="relative flex flex-col md:hidden lg:block justify-center basis-full lg:basis-[50%]">
          {/* Card 1*/}
          <div className="flex relative">
            <div className="border border-[#CFCFCF] rounded-lg font-roboto inline-block absolute bottom-0 left-0 bg-white">
              <Image
                src={"/white-car.png"}
                alt="car1"
                width={1000}
                height={250}
                className="mb-6 w-full h-[200px]"
              />
              <div className="px-4 pb-4">
                <div className="flex gap-x-4 items-start">
                  <h3 className="text-navyblue font-medium text-sm md:text-base">
                    Porsche 911 GT3
                  </h3>
                  <p className="text-[#717171] self-end text-xs">Back wheel</p>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-x-4 text-[#717171] text-sm">
                  <p>13000 km</p>
                  <p>2022</p>
                  <p>Automatic</p>
                  <p>4.0 L</p>
                  <p>Benzin</p>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-x-4 text-primaryred text-sm">
                  <p>122 Bud</p>
                  <p>Status</p>
                  <p>Avsluttes om:</p>
                </div>
                <div className="flex gap-x-4 items-center text-navyblue mt-2 text-sm">
                  <p className="font-medium">122 Bud</p>
                  <Button variant={"outline"} className="border-2">
                    Live Now
                  </Button>
                  <p className="font-medium">Avsluttes om:</p>
                </div>
              </div>
            </div>
            <div className="border border-[#CFCFCF] rounded-lg font-roboto inline-block absolute -top-20 left-64 z-10 bg-white">
              <Image
                src={"/white-car.png"}
                alt="car1"
                width={1000}
                height={250}
                className="mb-6 w-full h-[200px]"
              />
              <div className="px-4 pb-4">
                <div className="flex gap-x-4 items-start">
                  <h3 className="text-navyblue font-medium text-sm md:text-base">
                    Porsche 911 GT3
                  </h3>
                  <p className="text-[#717171] self-end text-xs">Back wheel</p>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-x-4 text-[#717171] text-sm">
                  <p>13000 km</p>
                  <p>2022</p>
                  <p>Automatic</p>
                  <p>4.0 L</p>
                  <p>Benzin</p>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-x-4 text-primaryred text-sm">
                  <p>122 Bud</p>
                  <p>Status</p>
                  <p>Avsluttes om:</p>
                </div>
                <div className="flex gap-x-4 items-center text-navyblue mt-2 text-sm">
                  <p className="font-medium">122 Bud</p>
                  <Button variant={"outline"} className="border-2">
                    Live Now
                  </Button>
                  <p className="font-medium">Avsluttes om:</p>
                </div>
              </div>
            </div>
            <div className="border border-[#CFCFCF] rounded-lg font-roboto inline-block absolute -bottom-40 left-[90%] bg-white">
              <Image
                src={"/white-car.png"}
                alt="car1"
                width={1000}
                height={250}
                className="mb-6 w-full h-[200px]"
              />
              <div className="px-4 pb-4">
                <div className="flex gap-x-4 items-start">
                  <h3 className="text-navyblue font-medium text-sm md:text-base">
                    Porsche 911 GT3
                  </h3>
                  <p className="text-[#717171] self-end text-xs">Back wheel</p>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-x-4 text-[#717171] text-sm">
                  <p>13000 km</p>
                  <p>2022</p>
                  <p>Automatic</p>
                  <p>4.0 L</p>
                  <p>Benzin</p>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-x-4 text-primaryred text-sm">
                  <p>122 Bud</p>
                  <p>Status</p>
                  <p>Avsluttes om:</p>
                </div>
                <div className="flex gap-x-4 items-center text-navyblue mt-2 text-sm">
                  <p className="font-medium">122 Bud</p>
                  <Button variant={"outline"} className="border-2">
                    Live Now
                  </Button>
                  <p className="font-medium">Avsluttes om:</p>
                </div>
              </div>
            </div>
          </div>

          {/* <Image
            src={"/image3.png"}
            alt="CarImage"
            width={373}
            height={417}
            className="lg:absolute top-[-300px] left-[0px] z-10 md:w-[100px] md:h-[150px] lg:w-[373px] lg:h-[417]"
          />
          <Image
            src={"/image.png"}
            alt="CarImage"
            width={373}
            height={417}
            className="lg:absolute top-[-30px] left-[200px] z-20 md:w-[100px] md:h-[150px] lg:w-[373px] lg:h-[417]"
          />
          <Image
            src={"/image2.png"}
            alt="CarImage"
            width={373}
            height={417}
            className="lg:absolute top-[-150px] left-[540px] z-10 md:w-[100px] md:h-[150px] lg:w-[373px] lg:h-[417]"
          /> */}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
