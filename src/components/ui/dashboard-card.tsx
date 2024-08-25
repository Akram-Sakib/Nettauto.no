import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function DashboardCard() {
  return (
    <Card className="w-[250px] mt-10">
      <CardHeader>
        <CardTitle className="font-neulis text-[#0B5F7C] text-base">
          Min Auksjonsrådgiver
        </CardTitle>
      </CardHeader>
      <CardContent className="flex ">
        <div className="border rounded-full p-2 inline-block mx-auto">
          <Image
            src={"/cammy-lin-ux-designer-circle-picture-profile.png"}
            alt="Profile"
            width={77}
            height={77}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-base font-medium space-y-4">
          <span className="text-[#0B5F7C]">Navn:</span>
          <span className="text-black"> John Olsen</span>
        </p>
        <p className="text-base font-medium space-y-4">
          <span className="text-[#0B5F7C]">E-post:</span>
          <span className="text-black"> john@nettauto.no</span>
        </p>
      </CardFooter>
    </Card>
  );
}
