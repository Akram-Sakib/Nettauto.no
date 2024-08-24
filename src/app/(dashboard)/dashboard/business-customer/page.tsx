"use client";

import CustomerInfo from "@/components/business-customer/customer-info";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InputButton } from "@/components/ui/input-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

const Notification = () => {
  return (
    <ScrollArea className="h-full bg-white pl-6 m-10 rounded-2xl">
      <div className="flex-1 space-y-10 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight font-neulis">
            Bedriftskunder
          </h2>
          <div className="flex gap-x-14">
            <p className="text-[#0B5F7C] font-roboto font-medium">
              Loggin as: Elisabeth
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={"/avatar.png"} alt={"avatar"} />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Elisabeth
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      elisabeth@gmail.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href={"/dashboard/profile"}>Profile</Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
              <FaChevronDown size={16} />
            </DropdownMenu>
          </div>
        </div>

        <div className="">
          <div className="flex gap-x-10">
            <Select>
              <SelectTrigger className="basis-1/2 border-[#EEEEEE] rounded-full py-3 h-auto pl-8">
                <SelectValue placeholder="Filter By: Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Velg rådgiver</SelectLabel>
                  <SelectItem value="apple">rådgiver</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="basis-1/2">
              <InputButton
                endIcon={Search}
                placeholder="Navn/ Telefon nr/Adresse"
                className="border-[#EEEEEE] border rounded-full py-7 px-6 text-black"
              />
            </div>
          </div>
          <Separator className="my-4 bg-[#EEEEEE]" />
          <div className="space-y-10 mt-10">
            <CustomerInfo />
            <CustomerInfo />
            <CustomerInfo />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Notification;
