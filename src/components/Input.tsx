import { ReactNode } from "react";
import clsx from "clsx";

type InputProps = {
  type?: "text" | "password";
  icon?: ReactNode;
  placeholder?: string;
  className?: string;
};
export function Input({
  type = "text",
  icon,
  placeholder,
  className,
}: InputProps) {
  return (
    <label
      className={clsx(
        "flex items-center gap-2",
        "p-3 bg-white rounded-lg",
        "focus-within:ring ring-primary",
        className
      )}
    >
      {icon}

      <input
        type={type}
        className="w-full outline-none"
        placeholder={placeholder}
      />
    </label>
  );
}
