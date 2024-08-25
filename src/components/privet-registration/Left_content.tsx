import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import Image from "next/image";
const Left_content = () => {
  return (
    <div className="w-[40%]">
      <div className=" flex justify-center items-center mb-10">
        <Image src={"/logo.png"} alt="Anne" width={300} height={57.47} />
      </div>
      <div className="flex gap-x-9">
        <div className="basis-[60%]">
          <label htmlFor="" className="text-xl text-black block">
            Navn
          </label>
          <input
            type="text"
            className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
          />
        </div>
        <div className="basis-[35%]">
          <label htmlFor="" className="text-xl text-black block">
            Telefon nr
          </label>
          <input
            type="text"
            className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
          />
        </div>
      </div>
      {/* Addresse & Postnr*/}
      <div className="flex gap-x-9 my-9">
        <div className="basis-[20%]">
          <label htmlFor="" className="text-xl text-black block">
            Postnr
          </label>
          <input
            type="text"
            className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
          />
        </div>
        <div className="basis-[75%]">
          <label htmlFor="" className="text-xl text-black block">
            Addresse
          </label>
          <input
            type="text"
            className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
          />
        </div>
      </div>
      {/* by  */}
      <div>
        <label htmlFor="" className="text-xl text-black block">
          By
        </label>
        <input
          type="text"
          className="bg-white rounded-lg border-2 border-gray-100 py-4 w-[80%]"
        />
      </div>
      {/* E-port & versler*/}
      <div className="flex gap-x-9 my-9">
        <div className="basis-[50%]">
          <label htmlFor="" className="text-xl text-black block">
            E-port
          </label>
          <input
            type="text"
            className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
          />
        </div>
        <div className="basis-[50%]">
          <label htmlFor="" className="text-xl text-black block">
            E-port for verslar
          </label>
          <input
            type="text"
            className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
          />
        </div>
      </div>
      {/* passord  */}
      <div className="flex gap-x-9 my-8">
        <div className="basis-[50%]">
          <label htmlFor="" className="text-xl text-black block">
            Passord
          </label>
          <input
            type="text"
            className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
          />
        </div>
        <div className="basis-[50%]">
          <label htmlFor="" className="text-xl text-black block">
            Backreft Passord
          </label>
          <input
            type="text"
            className="bg-white rounded-lg border-2 border-gray-100 py-4 w-full"
          />
        </div>
      </div>
      {/* >>>>>>>>>> */}
      <div className="">
        {/* validetion  */}
        <div className=" text-black ml-6 m-2">
          <div className="mt-4 flex items-center gap-1">
            <span>
              <AiFillCheckCircle className=" text-gray-400" />
            </span>
            Minst 12 tegn
          </div>
          <div className="mt-4 flex items-center gap-1">
            <span>
              <AiFillCheckCircle className=" text-gray-400" />
            </span>
            Middels eller sterkt passord
          </div>
          <div className="mt-4 flex items-center gap-1">
            {" "}
            <span>
              <AiFillCheckCircle className=" text-gray-400" />
            </span>
            Minst 1 liten bokstav
          </div>
          <div className="mt-4 flex items-center gap-1">
            {" "}
            <span>
              <AiFillCheckCircle className=" text-gray-400" />
            </span>
            Minst 1 stor bokstav
          </div>
          <div className="mt-4 flex items-center gap-1">
            {" "}
            <span>
              <AiFillCheckCircle className=" text-gray-400" />
            </span>
            Minst 1 tall
          </div>

          {/* <h2> <span></span>Minst 1 symbol (`!“#$%&‘()*+,-./:;<=>?@[]^_`{|}~`)</h2> */}
        </div>
        <div className="mt-[9px]">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Ved å registrere deg aksepterer du
              våre brukerbetingelser og personvernpolicy
            </label>
          </div>
          <Button className="text-base bg-[#FF003D] w-[465px] py-6 rounded-tr-none rounded-bl-none rounded-tl-sm rounded-br-sm mt-6">
            Registrer meg
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Left_content;
