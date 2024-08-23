import Image from "next/image";
import React from "react";

const InfoSenterFeature = () => {
  return (
    <div className="hover:bg-primaryred/20 bg-white font-roboto flex flex-col justify-center items-center rounded-xl shadow-xl p-6 transition-all space-y-2 border">
      <Image
        src={"/address-svgrepo-com 1.png"}
        alt="Location"
        width={100}
        height={100}
      />
      <p className="text-lg text-black">Her finner du oss</p>
    </div>
  );
};

export default InfoSenterFeature;
