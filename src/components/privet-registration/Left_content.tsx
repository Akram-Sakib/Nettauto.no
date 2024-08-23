import React from "react";

const Left_content = () => {
  return (
    <div className="w-1/2">
      <div>image</div>
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
      {/* validetion  */}
      <div className=" text-black ml-6 m-2">
        <h2 className=" mt-4">
          <span>1</span>Minst 12 tegn
        </h2>
        <h2 className=" mt-4">
          <span></span>Middels eller sterkt passord
        </h2>
        <h2 className=" mt-4">
          {" "}
          <span></span>Minst 1 liten bokstav
        </h2>
        <h2 className=" mt-4">
          {" "}
          <span></span>Minst 1 stor bokstav
        </h2>
        <h2 className=" mt-4">
          {" "}
          <span></span>Minst 1 tall
        </h2>

        {/* <h2> <span></span>Minst 1 symbol (`!“#$%&‘()*+,-./:;<=>?@[]^_`{|}~`)</h2> */}
      </div>
    </div>
  );
};

export default Left_content;
