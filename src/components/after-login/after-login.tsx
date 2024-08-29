import Image from "next/image";

const AfterLogin = () => {
  return (
    <section>
      <div className="flex justify-between h-screen">
        <div className="w-1/2 relative h-full">
          <div className="mt-7 pl-36 fixed">
            <Image src={"/logo.png"} alt="Anne" width={400} height={57} />
            <h3 className="font-neulis text-2xl font-semibold text-navyblue mt-10 ml-10">
              Velkommen, (USERNAME)
            </h3>
          </div>
          <h3 className="text-black font-neulis text-5xl font-semibold mr-4 absolute right-0 top-1/2 bottom-1/2">
            HVA ØNSKER{" "}
          </h3>
          {/* selge img side  */}
          <div className="flex flex-col justify-center items-center gap-y-4 h-full">
            <Image src={"/selge.png"} alt="Anne" width={294} height={300} />
            <h3 className="text-5xl font-bold font-roboto">SELGE</h3>
          </div>
        </div>
        <div className="w-1/2 bg-[#06063E] h-full relative">
          <h1 className="font-neulis text-white text-5xl ml-4 font-semibold mr-4 absolute left-0 top-1/2 bottom-1/2">
            DU Å GJØRE?{" "}
          </h1>
          {/* selge img side  */}
          <div className="flex flex-col justify-center items-center gap-y-4 h-full">
            <Image src={"/kjope.png"} alt="Anne" width={294} height={300} />
            <h3 className="text-5xl font-bold font-roboto text-white">KJØPE</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterLogin;
