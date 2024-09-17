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
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { QueryKeys } from "@/data/queryKeys";

const NewUser = ({ user }: { user: any }) => {
  const { email, role, privateCustomer, businessCustomer } = user || {};
  const { dateOfBirth, name, address, city, postalNo, contactNo } =
    privateCustomer || {};
  const {
    dateOfBirth: dateOfBirthBusiness,
    contactPerson,
    companyName,
    organizationNo,
    address: businessAddress,
    city: businessCity,
    postalNo: businessPostalNo,
    contactNo: businessContactNo,
  } = businessCustomer || {};

  const { data: initialData, isLoading: initialDataLoading } = useQuery({
    queryFn: async () => {
      const data = await axiosInstance.get(`/admins`);
      return data.data;
    },
    queryKey: [QueryKeys.ADMIN],
  });

  return (
    <div className="flex flex-col md:flex-row border-[#FF9776] border rounded max-w-7xl mx-auto">
      <div className="bg-[#FF9776] py-4 md:py-14 px-2 basis-full md:basis-[4%]">
        <p className="text-center md:[writing-mode:vertical-lr] text-lg font-medium text-white">
          {role === "business_customer" ? "BEDRIFT" : "PRIVAT"}
        </p>
      </div>
      <div className="px-3 xl:px-6 py-4 space-y-8 basis-full md:basis-[27%] flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-medium space-y-4">
            <span className="text-[#0B5F7C]">
              {role === "business_customer" ? "Bedriftsnavn:" : "Navn:"}
            </span>
            <span className="text-black">
              {role === "business_customer" ? companyName : name}
            </span>
          </h2>
          <p className="text-sm text-[#0B5F7C]">
            {role === "business_customer"
              ? `Kontakt person: ${contactPerson}`
              : `Telefonnummer: ${contactNo}`}
          </p>
          <p className="text-sm text-[#0B5F7C]">
            Fødselsdato:
            {role === "business_customer" ? dateOfBirthBusiness : dateOfBirth}
          </p>
        </div>
        <Button className="bg-[#D6F5EC] xl:px-24 py-3 rounded-full h-auto w-auto text-[#008B65]">
          Godta
        </Button>
      </div>
      <div className="px-3 xl:px-6 py-4 space-y-8 basis-full md:basis-[27%] flex flex-col justify-between">
        <div className="space-y-1">
          <p className="text-sm text-[#0B5F7C]">
            {role === "business_customer"
              ? `Organisasjonsnummer: ${organizationNo}`
              : `Adresse: ${address}`}
          </p>
          {role === "private_customer" && (
            <p className="text-sm text-[#0B5F7C]">By: {city}</p>
          )}
          <p className="text-sm text-[#0B5F7C]">
            {role === "business_customer"
              ? `Mobilnummer: ${businessContactNo}`
              : `Postnummer: ${postalNo}`}
          </p>
          <p className="text-sm text-[#0B5F7C]">E-post: {email}</p>
        </div>
        <Button className="bg-[#FBD2D6] xl:px-24 py-3 rounded-full h-auto w-auto text-[#EE5462]">
          Avslå
        </Button>
      </div>
      <div
        className={cn(
          `px-3 xl:px-6 py-4 space-y-8 basis-full md:basis-[27%] flex flex-col`,
          role === "business_customer" ? "justify-between" : "justify-end"
        )}
      >
        {role === "business_customer" && (
          <div className="space-y-1">
            <p className="text-sm text-[#0B5F7C]">
              Gateadressen: {businessAddress}
            </p>
            <p className="text-sm text-[#0B5F7C]">
              Postnummer: {businessPostalNo}
            </p>
            <p className="text-sm text-[#0B5F7C]">By: {businessCity}</p>
          </div>
        )}
        <Select disabled={initialDataLoading}>
          <SelectTrigger className="xl:w-[320px] border-[#EEEEEE] rounded-full py-3 h-auto pl-8">
            <SelectValue placeholder="Velg rådgiver" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Velg rådgiver</SelectLabel>
              {initialData?.map((admin: any) => (
                <SelectItem
                  value={admin._id}
                >{`${admin.name.firstName} ${admin.name.lastName}`}</SelectItem>
              ))}
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

export default NewUser;
