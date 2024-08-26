import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { FloatingInput, FloatingLabel } from "../ui/floating-label-input";
import { cn } from "@/lib/utils";

interface FormFloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  disabled?: boolean;
}

const FormFloatingInput = ({
  name,
  label,
  placeholder,
  type = "text",
  disabled = false,
  className = "",
  labelClassName = "",
  inputClassName = "",
  ...props
}: FormFloatingInputProps) => {
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
                <FloatingInput
                  id="floating-customize"
                  type={type}
                  placeholder={placeholder}
                  disabled={disabled}
                  {...field}
                  {...props}
                  className={inputClassName}
                />
                <FloatingLabel
                  id="floating-customize"
                  className={labelClassName}
                >
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

export default FormFloatingInput;
