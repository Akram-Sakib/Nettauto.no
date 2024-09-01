"use client";

import { useFormContext, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { PiCaretDownFill } from "react-icons/pi";

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface DateOfBirthProps {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

const DateOfBirth = ({
  name,
  label,
  required = false,
  ...props
}: DateOfBirthProps) => {
  const { control, setValue, watch } = useFormContext();
  const [day, month, year] = watch([
    `${name}.day`,
    `${name}.month`,
    `${name}.year`,
  ]);

  const [selectedDay, setSelectedDay] = useState<string>("01");
  const [selectedMonth, setSelectedMonth] = useState<string>("01");
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );
  const [days, setDays] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    // Calculate the number of days in the selected month and year
    if (selectedMonth && selectedYear) {
      const daysInMonth = new Date(
        Number(selectedYear),
        Number(selectedMonth),
        0
      ).getDate();
      const daysArray = Array.from({ length: daysInMonth }, (_, index) => {
        const day = index + 1;
        return {
          label: day.toString(),
          value: day < 10 ? `0${day}` : day.toString(),
        };
      });
      setDays(daysArray);
    }
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    if (selectedDay && selectedMonth && selectedYear) {
      const date = new Date(
        `${selectedYear}-${selectedMonth}-${selectedDay}`
      ).toISOString();
      setValue(name, date, { shouldValidate: true });
    }
  }, [selectedDay, selectedMonth, selectedYear, name, setValue]);

  const months = [
    { label: "Januar", value: "01" },
    { label: "Februar", value: "02" },
    { label: "Mars", value: "03" },
    { label: "April", value: "04" },
    { label: "Mai", value: "05" },
    { label: "Juni", value: "06" },
    { label: "Juli", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "Oktober", value: "10" },
    { label: "November", value: "11" },
    { label: "Desember", value: "12" },
  ];

  const years = Array.from({ length: 100 }, (_, index) => {
    const year = new Date().getFullYear() - index;
    return { label: year.toString(), value: year.toString() };
  });

  return (
    <FormItem>
      <FormLabel>
        {label}
        {required && <span className="text-red-500">*</span>}
      </FormLabel>
      <div className="flex items-center gap-2">
        <FormControl>
          <Controller
            control={control}
            name={`${name}.day`}
            render={({ field }) => (
              <div className="relative w-full lg:w-[100px]">
                <select
                  value={selectedDay}
                  onChange={(e) => {
                    setSelectedDay(e.target.value);
                    field.onChange(e.target.value);
                  }}
                  className="w-full border p-4 rounded-lg text-center appearance-none font-inter text-[#717171] cursor-pointer"
                >
                  <option value="" disabled>
                    Day
                  </option>
                  {days.map((day) => (
                    <option key={day.value} value={day.value}>
                      {day.label}
                    </option>
                  ))}
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
                  <PiCaretDownFill className="w-4 h-4" />
                </span>
              </div>
            )}
          />
        </FormControl>
        <FormControl>
          <Controller
            control={control}
            name={`${name}.month`}
            render={({ field }) => (
              <div className="relative w-full lg:w-[160px]">
                <select
                  value={selectedMonth}
                  onChange={(e) => {
                    setSelectedMonth(e.target.value);
                    field.onChange(e.target.value);
                  }}
                  className="w-full border p-4 rounded-lg text-center appearance-none font-inter text-[#717171] cursor-pointer"
                >
                  <option value="" disabled>
                    Month
                  </option>
                  {months.map((month) => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
                  <PiCaretDownFill className="w-4 h-4" />
                </span>
              </div>
            )}
          />
        </FormControl>
        <FormControl>
          <Controller
            control={control}
            name={`${name}.year`}
            render={({ field }) => (
              <div className="relative w-full lg:w-[160px]">
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                    field.onChange(e.target.value);
                  }}
                  className="w-full border p-4 rounded-lg text-center appearance-none font-inter text-[#717171] cursor-pointer"
                >
                  <option value="" disabled>
                    Year
                  </option>
                  {years.map((year) => (
                    <option key={year.value} value={year.value}>
                      {year.label}
                    </option>
                  ))}
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
                  <PiCaretDownFill className="w-4 h-4" />
                </span>
              </div>
            )}
          />
        </FormControl>
      </div>
      <FormMessage />
    </FormItem>
  );
};

export default DateOfBirth;