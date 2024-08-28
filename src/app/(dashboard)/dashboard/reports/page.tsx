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
    <ScrollArea className="h-full pl-6 m-10">
      <h2 className="text-3xl font-bold tracking-tight font-roboto mb-4">
        Rapporter
      </h2>
      <div className="flex-1 space-y-10 p-4 md:p-8 pt-6 bg-white rounded-md">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <PiechartTotal />
              <PiechartTotal />
              <PiechartTotal />
            </div>
            <div className="flex gap-x-6 justify-between">
              <Card className="basis-[80%]">
                <CardHeader>
                  <CardTitle>Weekly Traffic Statistics</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <div>
                <Card className="basis-[20%] font-inter text-center">
                  <CardHeader>
                    <h1 className="text-xl">Filter By Date</h1>
                  </CardHeader>
                  <CardContent>
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
      </div>
    </ScrollArea>
  );
}
