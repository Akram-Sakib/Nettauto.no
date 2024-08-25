"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const EndOfAuctions = () => {
  return (
    <ScrollArea className="h-full bg-white pl-6 rounded-2xl">
      <div className="flex-1 space-y-20 p-4 md:p-8 pt-6">
        <div className="flex justify-end">
          <Button className="bg-[#FF003D] px-10">Ny auksjon</Button>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-normal tracking-tight font-neulis">
            Varsler
          </h2>
        </div>

        <div className="space-y-8 mt-14">
          <Alert className="bg-[#EFEFEF] px-8">
            <AlertDescription className="text-lg text-black">
              Du har mottatt ny bud på{" "}
              <span className="text-primaryred">2022 Toyota Corolla</span>.
            </AlertDescription>
          </Alert>
          <Alert className="bg-[#EFEFEF] px-8">
            <AlertDescription className="text-lg text-black">
              GRATULERER {`:)`}{" "}
              <span className="text-primaryred">2022 Toyota Corolla</span> er
              avsluttet. Høyeste bud du har mottatt eR 200 000 kr. Vennligst gå
              til annonse for og godkjenne eller avslå bud. .
            </AlertDescription>
          </Alert>
          <Alert className="bg-[#EFEFEF] px-8">
            <AlertDescription className="text-lg text-black">
              GRATULERER!Din bil{" "}
              <span className="text-primaryred">2022 Toyota Corolla</span> er
              blitt solgt til høyeste bud. .
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </ScrollArea>
  );
};

export default EndOfAuctions;
