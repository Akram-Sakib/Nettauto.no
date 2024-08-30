import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Employee = () => {
  return (
    <div className="flex flex-col md:flex-row border-[#FF9776] border rounded max-w-7xl mx-auto">
      <div className="bg-[#FF9776] py-4 md:py-14 px-2 basis-full md:basis-[4%]">
        <p className="text-center md:[writing-mode:vertical-lr] text-lg font-medium text-white">
          BEDRIFT
        </p>
      </div>
      <div className="px-3 xl:px-6 py-4 space-y-8 basis-full md:basis-[27%] flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-medium space-y-4">
            <span className="text-[#0B5F7C]">Bedriftsnavn:</span>
            <span className="text-black"> Aktiv Bilformidling AS</span>
          </h2>
          <p className="text-sm text-[#0B5F7C]">Kontakt person: John Johnsen</p>
          <p className="text-sm text-[#0B5F7C]">Fødselsdato: 18.feb.2021</p>
        </div>
        <Button className="bg-[#D6F5EC] xl:px-24 py-3 rounded-full h-auto w-auto text-[#008B65]">
          Godta
        </Button>
      </div>
      <div className="px-3 xl:px-6 py-4 space-y-8 basis-full md:basis-[27%] flex flex-col justify-between">
        <div className="space-y-1">
          <p className="text-sm text-[#0B5F7C]">
            Organisasjonsnummer: 930722219
          </p>
          <p className="text-sm text-[#0B5F7C]">Mobilnummer: 92111551</p>
          <p className="text-sm text-[#0B5F7C]">
            E-post: post@aktivbilformidling.no
          </p>
        </div>
        <Button className="bg-[#FBD2D6] xl:px-24 py-3 rounded-full h-auto w-auto text-[#EE5462]">
          Avslå
        </Button>
      </div>
      <div className="px-3 xl:px-6 py-4 space-y-8 basis-full md:basis-[27%] flex flex-col justify-between">
        <div className="space-y-1">
          <p className="text-sm text-[#0B5F7C]">Gateadressen: Vintergata 19</p>
          <p className="text-sm text-[#0B5F7C]">Postnummer: 3048</p>
          <p className="text-sm text-[#0B5F7C]">By: Drammen</p>
        </div>
        <Select>
          <SelectTrigger className="xl:w-[320px] border-[#EEEEEE] rounded-full py-3 h-auto pl-8">
            <SelectValue placeholder="Velg rådgiver" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Velg rådgiver</SelectLabel>
              <SelectItem value="apple">rådgiver</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="text-right basis-full md:basis-[15%] p-2">
        <p className="text-sm text-[#0B5F7C]">21.08.2024</p>
      </div>
    </div>
  );
};

export default Employee;
