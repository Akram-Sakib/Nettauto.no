"use client";

import { FaChevronDown } from "react-icons/fa6";

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
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { InputButton } from "@/components/ui/input-button";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Employee from "@/components/notfication/employee";

const Notification = () => {
  return (
    <ScrollArea className="h-full bg-white pl-6">
      <div className="flex-1 space-y-10 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight font-neulis">
            Nye godkjenninger
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
          <div className="max-w-lg mx-auto">
            <InputButton
              endIcon={Search}
              placeholder="Organisasjonsnr / Bedriftsnavn / Navn/ Telefon nr"
              className="border-black border rounded-full py-7 px-6 text-black"
            />
          </div>
          <Separator className="my-4 bg-[#EEEEEE]" />
          <div className="space-y-10 mt-10">
            <Employee />
            <Employee />
            <Employee />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Notification;
