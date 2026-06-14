import type { ReactNode } from "react";

interface FormFieldProps {
  children: ReactNode;
}

export const FormField = ({
  children,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      {children}
    </div>
  );
};