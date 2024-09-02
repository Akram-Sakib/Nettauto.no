import {
    FormControl,
    FormField,
    FormItem,
    FormLabel
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
interface FormCheckBoxProps {
  name: string;
  label?: string;
  required?: boolean;
}

const FormCheckBox = ({
  name,
  label,
  required = false,
  ...props
}: FormCheckBoxProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
          </div>
        </FormItem>
      )}
    />
  );
};

export default FormCheckBox;
