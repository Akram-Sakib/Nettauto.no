import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const LeftContentLogin = () => {
  return (
    <div className=" w-1/2">
      <div className="mt-[28px] ml-[133px] flex justify-center items-center mb-10">
        <Image src={"/logo.png"} alt="Anne" width={400} height={57.47} />
      </div>
      <h1 className="text-black font-roboto text-3xl mb-4 text-left ml-[200px] mt-[242px]">
        Logg inn på Nettauto.no
      </h1>
      <div className="right-0 top-1/2 w-[565px] pr-2 flex justify-end items-center mt-[19px]">
        <div>
          <div>
            {/* 1st input */}
            <div className="mb-4">
              <label
                htmlFor=""
                className="text-sm text-black block font-roboto"
              >
                Brukernavn (e-postadresse)
              </label>
              <input
                type="text"
                className="bg-white rounded-lg border-2 border-gray-100 py-3 w-[300px] text-black"
              />
            </div>
            {/* 2nd input */}
            <div>
              <label
                htmlFor=""
                className=" text-black block font-roboto text-sm"
              >
                Passord
              </label>
              <input
                type="password"
                className="bg-white text-black rounded-lg border-2 border-gray-100 py-3 w-full"
              />
              <p className="text-end cursor-pointer mt-1 text-[#FF003D] text-xs">
                Glemt passord
              </p>
              <Button className="text-base bg-[#FF003D]  w-[300px] py-6 rounded-tr-none rounded-bl-none rounded-tl-sm rounded-br-sm mt-6">
                LOGG INN
              </Button>
              <p className="text-center text-black mt-[19px]">
                Har du ikke konto?{" "}
                <span className=" cursor-pointer text-[#FF003D]">
                  Registrer deg
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="w-1/2">
    //   <div className="mt-[28px] ml-[133px] flex justify-center items-center mb-10">
    //     <Image src={"/logo.png"} alt="Anne" width={400} height={57.47} />
    //   </div>
    //   <div className=" ">
    //     <h1 className="text-black font-roboto text-3xl mb-4 text-left ml-[150px] mt-[242px]">
    //       Logg inn på Nettauto.no
    //     </h1>
    //     <div className="ml-auto w-[565px] p-4">
    //       <div>
    //         {/* 1st input */}
    //         <div className="mb-4">
    //           <label htmlFor="" className="text-xl text-black block">
    //             Postnr
    //           </label>
    //           <input
    //             type="text"
    //             className="bg-white rounded-lg border-2 border-gray-100 py-3 w-full"
    //           />
    //         </div>
    //         {/* 2nd input */}
    //         <div>
    //           <label htmlFor="" className="text-xl text-black block">
    //             Postnr
    //           </label>
    //           <input
    //             type="text"
    //             className="bg-white rounded-lg border-2 ml-auto border-gray-100 py-3 w-full"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LeftContentLogin;
