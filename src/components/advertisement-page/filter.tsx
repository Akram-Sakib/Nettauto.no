import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";

const FilterCheckBox = ({ id, label }: { id: string; label: string }) => {
  return (
    <div className="flex items-center space-x-2 cols-4 pl-4 py-3">
      <Checkbox id={id} className="h-6 w-6" />
      <label
        htmlFor={id}
        className="text-xl font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

const FilterAds = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="mt-10 shadow-lg py-3">
      <div className="flex gap-x-4 divide-x-2">
        <FilterCheckBox id="approved-ads" label="Show only approved ads" />
        <FilterCheckBox
          id="not-approve-ads"
          label="Show only not approved ads"
        />
        <FilterCheckBox id="waiting-ads" label="Show only waiting ads" />
        <div className="pl-6">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "min-w-[400px] justify-between text-left font-normal",
                  !date && "text-muted-foreground",
                  "py-6"
                )}
              >
                <div>
                  {date ? (
                    <span className="text-primaryred font-medium text-xl">
                      {format(date, "PPP")}
                    </span>
                  ) : (
                    <span className="text-xl">
                      Periode:
                    </span>
                  )}
                </div>
                <Image
                  src={"/calender-svgrepo-com.svg"}
                  width={20}
                  height={20}
                  alt="Calendar"
                  className="mr-2"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default FilterAds;
