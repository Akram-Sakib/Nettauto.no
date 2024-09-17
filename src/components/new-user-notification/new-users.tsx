"use client";

import React from "react";
import { InputButton } from "../ui/input-button";
import NewUser from "./new-user";
import { Separator } from "../ui/separator";
import { Search } from "lucide-react";
import { QueryKeys } from "@/data/queryKeys";
import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const NewUsers = () => {
  const { data: initialData, isLoading: initialDataLoading } = useQuery({
    queryFn: async () => {
      const data = await axiosInstance.get(`/users`);
      return data.data;
    },
    queryKey: [QueryKeys.USER],
  });


  // const contactName = initialData?.companyName;
  // decide what to render
  let content = null;
  if (initialDataLoading) {
    content = <div>Loading...</div>;
  }
  if (!initialDataLoading && initialData.length === 0) {
    content = <div>No Data Founded...</div>;
  }
  if (!initialDataLoading && initialData.length > 0) {
    content = initialData?.map((user: any) => (
      <NewUser key={user.email} user={user} />
    ));
  }
  return (
    <div className="">
      <div className="md:max-w-lg mx-auto">
        <InputButton
          endIcon={Search}
          placeholder="Organisasjonsnr / Bedriftsnavn / Navn/ Telefon nr"
          className="border-black border rounded-full py-7 px-6 text-black"
        />
      </div>
      <Separator className="my-4 bg-[#EEEEEE]" />
      <div className="space-y-10 mt-10">
        {content}
        {/* <Employee />
        <Employee />
        <Employee /> */}
      </div>
    </div>
  );
};

export default NewUsers;
