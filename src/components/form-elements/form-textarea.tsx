import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";

interface FormInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const FormTextArea = ({
  name,
  label,
  placeholder,
  required = false,
  disabled = false,
  ...props
}: FormInputProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>
              {label} {required && <span className="text-red-500">*</span>}
            </FormLabel>
            <FormControl>
              <Textarea
                placeholder={placeholder}
                disabled={disabled}
                {...field}
                {...props}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormTextArea;
