"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

interface FormButtonSelectionProps {
  name: string;
  label?: string;
  options: string[];
  required?: boolean;
  disabled?: boolean;
}

const FormButtonSelection = ({
  name,
  label,
  options,
  required = false,
  disabled = false,
}: FormButtonSelectionProps) => {
  const { control, setValue } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-lg text-navyblue block">
            {label} {required && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <div className="flex gap-x-5 pl-52">
              {options.map((option, index) => (
                <Button
                  key={index}
                  className={`text-xs hover:bg-[#008B65] bg-navyblue h-auto px-8 rounded-lg ${
                    field.value === option ? "bg-[#008B65]" : ""
                  }`}
                  onClick={() => {
                    setValue(name, option, { shouldValidate: true });
                    field.onChange(option);
                  }}
                  type="button"
                  disabled={disabled}
                >
                  {option}
                </Button>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormButtonSelection;
