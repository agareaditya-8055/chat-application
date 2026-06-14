import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";

type InputProps =
  InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`
        w-full
        rounded-xl
        border
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-black
        ${className}
      `}
      {...props}
    />
  );
});

Input.displayName = "Input";