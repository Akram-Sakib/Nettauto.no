"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ComponentProps } from "react";

interface FormEquipmentsProps extends ComponentProps<"div"> {
  name: string;
  label?: string;
  equipments: string[];
  required?: boolean;
  disabled?: boolean;
}

const FormEquipments = ({
  name,
  label,
  equipments,
  required = false,
  disabled = false,
  ...props
}: FormEquipmentsProps) => {
  const { control, setValue } = useFormContext();
  setValue(name, equipments);
  // Function to chunk the equipments array into sub-arrays of four items each
  const chunkArray = (array: string[], chunkSize: number) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  // Split the equipments array into chunks of four
  const equipmentChunks = chunkArray(equipments, 4);

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          {label && (
            <FormLabel className="text-lg font-bold mb-5 block">
              {label} {required && <span className="text-red-500">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <div
              className={`grid grid-cols-4 gap-y-5 text-[#717171] ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              {...props}
            >
              {equipmentChunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex} className="space-y-4">
                  {chunk.map((equipment, index) => (
                    <p key={index}>{equipment}</p>
                  ))}
                </div>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormEquipments;
