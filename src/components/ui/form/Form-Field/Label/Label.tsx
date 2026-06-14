import  type { LabelHTMLAttributes } from "react";

type LabelProps =
  LabelHTMLAttributes<HTMLLabelElement>;

export const Label = ({
  children,
  className = "",
  ...props
}: LabelProps) => {
  return (
    <label
      className={`text-sm font-medium text-slate-700 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};