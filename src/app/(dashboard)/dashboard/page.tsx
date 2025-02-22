"use client";
import { CiCirclePlus } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";

import { Overview } from "@/components/charts/overview";
import PiechartTotal from "@/components/dashboard/piecharts-total";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const navMenu = [
  {
    id: 1,
    title: "Nyeste annonse for godkjenning",
    icon: "/notification.svg",
  },
  {
    id: 2,
    title: "Endte auksjoner",
    icon: "/notification.svg",
  },
  {
    id: 3,
    title: "Kunde godkjenninger",
    icon: "/notification.svg",
  },
];

export default function DashboardPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <ScrollArea className="h-full pl-6">
      <div className="flex-1 space-y-10 p-4 md:p-8 pt-6">
        <div className="flex flex-col md:flex-row justify-center gap-x-4">
          {navMenu.map(({ id, title, icon }) => (
            <Fragment key={id}>
              <div className="flex gap-x-3 items-center">
                <p className="text-lg text-navyblue">{title}</p>
                <Image src={icon} width={23} height={23} alt={title} />
              </div>
            </Fragment>
          ))}
        </div>
        <div className="flex flex-col-reverse gap-y-6 md:gap-y-0 md:flex-row items-start md:items-center justify-between">
          <h2 className="text-xl md:text-3xl font-bold tracking-tight font-neulis">
            Dashboard
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
                  <FaChevronDown />
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
            </DropdownMenu>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <PiechartTotal />
              <PiechartTotal />
              <PiechartTotal />
            </div>
            <div className="flex flex-col gap-y-6 md:gap-y-0 md:flex-row gap-x-6 md:justify-between">
              <Card className="basis-full md:basis-[80%]">
                <CardHeader>
                  <CardTitle>Weekly Traffic Statistics</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <div className="">
                <Card className="basis-full md:basis-[20%] font-inter text-center">
                  <CardHeader>
                    <h1 className="text-xl">Filter By Date</h1>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-6 justify-end">
          <Card className="bg-white px-4 py-2">
            <CardHeader>
              <div className="flex items-center gap-x-6">
                <Image
                  src={"/stop-palm-svgrepo-com.svg"}
                  width={48}
                  height={53}
                  alt="Stop-palm"
                />
                <div className="flex items-start gap-x-2">
                  <Checkbox className="mt-2"/>
                  <p className="text-lg font-roboto text-navyblue max-w-60">
                    Deactivate functionto post auction
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>Add message that will show up in seller section</p>
            </CardContent>
          </Card>
          <Card className="bg-white px-10 py-2 rounded">
            <CardHeader>
              <div className="flex items-center gap-x-10">
                <Image
                  src={"/icons 5.png"}
                  width={48}
                  height={53}
                  alt="Stop-palm"
                />
                <p className="text-lg font-roboto text-navyblue max-w-40">
                  Ny bruker
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <Button variant={"outline"} className="space-x-4">
                <span>Lagg ny bruker</span>{" "}
                <CiCirclePlus className="mr-2 h-6 w-6" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
