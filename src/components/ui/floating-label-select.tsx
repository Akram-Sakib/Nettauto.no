import * as React from "react";
import { SelectHTMLAttributes } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { MdOutlineArrowDropDown } from "react-icons/md";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const FloatingSelect = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "peer w-full appearance-none bg-transparent py-2 pl-3 pr-10 text-sm focus:outline-none border",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <MdOutlineArrowDropDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
      </div>
    );
  }
);
FloatingSelect.displayName = "FloatingSelect";

const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return (
    <Label
      className={cn(
        "peer-focus:secondary peer-focus:dark:secondary absolute start-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-background px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-background rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
FloatingLabel.displayName = "FloatingLabel";

type FloatingLabelSelectProps = SelectProps & { label?: string };

const FloatingLabelSelect = React.forwardRef<
  React.ElementRef<typeof FloatingSelect>,
  React.PropsWithoutRef<FloatingLabelSelectProps>
>(({ id, label, children, ...props }, ref) => {
  return (
    <div className="relative">
      <FloatingSelect ref={ref} id={id} {...props}>
        {children}
      </FloatingSelect>
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
    </div>
  );
});
FloatingLabelSelect.displayName = "FloatingLabelSelect";

export { FloatingSelect, FloatingLabelSelect };
