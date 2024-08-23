import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col min-h-screen justify-center relative bg-gradient-to-r from-[#F8FCFF] to-[#DBF4FF]">
      <div className="px-40 flex justify-center gap-x-20">
        <div className="basis-[45%]">
          <div className="p-2 text-[40px] leading-[64px]">
            <h1 className="text-black">SELG KOSTNADSFRITT HOS OSS</h1>
            <h1 className="text-[#FF003D]">Selg raskt, trygt og enkelt.</h1>
          </div>
          <button className="w-[149px] h-[46px] rounded bg-[#FF003D] mt-[53px] ml-[101px]">
            Registerer deg
          </button>
        </div>
        <div className="relative basis-[55%]">
          <Image
            src={"/image3.png"}
            alt="CarImage"
            width={373}
            height={417}
            className="absolute top-[-300px] left-[0px] z-10"
          />
          <Image
            src={"/image.png"}
            alt="CarImage"
            width={373}
            height={417}
            className="absolute top-[-30px] left-[200px] z-20"
          />
          <Image
            src={"/image2.png"}
            alt="CarImage"
            width={373}
            height={417}
            className="absolute top-[-150px] left-[540px] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
