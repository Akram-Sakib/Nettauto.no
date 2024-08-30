import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const AdminCard = () => {
  return (
    <div className="flex justify-between border-[#FF9776] border rounded max-w-7xl mx-auto">
      <div className="bg-[#FF9776] py-14 px-2 basis-[2%]" />
      <div className="px-6 py-4 basis-[45%] flex gap-x-6 items-center ">
        <div className="border rounded-full p-2">
          <Image
            src={"/cammy-lin-ux-designer-circle-picture-profile.png"}
            alt="Profile"
            width={147}
            height={145}
            className="lg:w-40 lg:h-36"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium space-y-4">
              <span className="text-[#0B5F7C]">Navn:</span>
              <span className="text-black"> John Olsen</span>
            </h2>
            <p className="text-sm text-[#0B5F7C]">Rolle: User</p>
          </div>
          <div className="space-y-1 ">
            <p className="text-sm text-[#0B5F7C]">
              E-post: post@aktivbilformidling.no
            </p>
            <p className="text-sm text-[#0B5F7C]">Mobilnummer: 00000000</p>
            <p className="text-sm text-[#0B5F7C]">Person nr: 06118927665</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4 basis-[32%] flex flex-col justify-end">
        <Button className="bg-[#D6F5EC] 2xl:px-24 py-4 rounded-full h-auto w-auto text-[#008B65]">
          Endre info/passord/rådgiver
        </Button>
      </div>
      <div className="text-right basis-[25%] p-2 pb-4 flex flex-col justify-between">
        <p className="text-sm text-[#0B5F7C]">Min profil</p>
        <Button className="bg-[#FBD2D6] 2xl:px-24 py-4 rounded-full h-auto w-auto text-[#EE5462]">
          Avslå
        </Button>
      </div>
    </div>
  );
};

export default AdminCard;
