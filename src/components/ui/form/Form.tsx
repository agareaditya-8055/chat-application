import type { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  className?: string;
}

export const Form = ({
  children,
  onSubmit,
  className = "",
}: FormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`space-y-5 ${className}`}
    >
      {children}
    </form>
  );
};