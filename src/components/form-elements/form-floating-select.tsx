import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { FloatingLabelSelect } from "../ui/floating-label-select";
import { cn } from "@/lib/utils";
import { FloatingLabel } from "../ui/floating-label-input";

interface Option {
  label: string;
  value: string;
}

interface FormFloatingSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  options: Option[];
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  selectClassName?: string;
  disabled?: boolean;
}

const FormFloatingSelect = ({
  name,
  label,
  options,
  placeholder = "Select an option",
  disabled = false,
  className = "",
  labelClassName = "",
  selectClassName = "",
  ...props
}: FormFloatingSelectProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormControl>
              <div className={cn("relative", className)}>
                <FloatingLabelSelect
                  id={name}
                  disabled={disabled}
                  {...field}
                  {...props}
                  className={selectClassName}
                >
                  <option value="">{placeholder}</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </FloatingLabelSelect>
                <FloatingLabel id={name} className={labelClassName}>
                  {label}
                </FloatingLabel>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormFloatingSelect;
