import Image from "next/image";

const AfterLogin = () => {
  return (
    <div>
      <div className=" mt-7 pl-36">
        <Image src={"/logo.png"} alt="Anne" width={400} height={57.47} />
      </div>

      <div className=" flex justify-between">
        <div className="w-1/2  ">
          <div className="my-10 ">
            <h1 className="text-black font-neulis text-5xl text-right font-semibold mr-4">
              {" "}
              HVA ØNSKER{" "}
            </h1>
          </div>
          {/* selge img side  */}
          <div className="flex justify-center items-center h-screen ml-9">
            <Image src={"/selge.png"} alt="Anne" width={400} height={57.47} />
          </div>
        </div>
        <div className="w-1/2 bg-[#06063E]">
          <div className="my-10 ">
            <h1 className="font-neulis text-white text-5xl text-left ml-4 font-semibold mr-4">
              {" "}
              DU Å GJØRE?{" "}
            </h1>
          </div>
          {/* selge img side  */}
          <div className="flex justify-center items-center h-screen ml-9">
            <Image src={"/kjope.png"} alt="Anne" width={400} height={57.47} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterLogin;
