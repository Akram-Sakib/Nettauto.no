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
import Image from "next/image";

const FilterCheckBox = ({
  id,
  label,
  labelClassName,
  inputClassName,
}: {
  id: string;
  label: string;
  labelClassName?: string;
  inputClassName?: string;
}) => {
  return (
    <div className="flex items-center space-x-2 cols-4 pl-4 py-3">
      <Checkbox id={id} className={cn("h-6 w-6", inputClassName)} />
      <label
        htmlFor={id}
        className={cn(
          "text-xl font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          labelClassName
        )}
      >
        {label}
      </label>
    </div>
  );
};

const FilterAds = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="mt-4 lg:mt-10 shadow-lg py-3">
      <div className="flex flex-col lg:flex-row gap-x-4 lg:divide-x-2">
        <FilterCheckBox
          id="approved-ads"
          label="Show only approved ads"
          labelClassName="text-sm lg:text-lg xl:text-xl"
          inputClassName="lg:h-6 lg:w-6 w-4 h-4"
        />
        <FilterCheckBox
          id="not-approve-ads"
          label="Show only not approved ads"
          labelClassName="text-sm lg:text-lg xl:text-xl"
          inputClassName="lg:h-6 lg:w-6 w-4 h-4"
        />
        <FilterCheckBox
          id="waiting-ads"
          label="Show only waiting ads"
          labelClassName="text-sm lg:text-lg xl:text-xl"
          inputClassName="lg:h-6 lg:w-6 w-4 h-4"
        />
        <div className="lg:pl-6 px-3 lg:px-0">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full lg:w-auto mt-5 lg:mt-0 lg:min-w-[400px] justify-between text-left font-normal",
                  !date && "text-muted-foreground",
                  "py-6"
                )}
              >
                <div>
                  {date ? (
                    <span className="text-primaryred font-medium text-base lg:text-lg xl:text-xl">
                      {format(date, "PPP")}
                    </span>
                  ) : (
                    <span className="text-base lg:text-lg xl:text-xl">Periode:</span>
                  )}
                </div>
                <Image
                  src={"/calender-svgrepo-com.svg"}
                  width={20}
                  height={20}
                  alt="Calendar"
                  className="mr-2 lg:w-5 lg:h-5 w-4 h-4"
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
