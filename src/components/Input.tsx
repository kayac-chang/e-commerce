import { cloneElement, isValidElement, ReactNode } from "react";
import { Icon } from "@/components";
import clsx from "clsx";

type Props = {
  type: "text" | "password" | "search";
  icon: ReactNode;
  placeholder: string;
  className: string;
};
function Base({ type = "text", icon, placeholder, className }: Partial<Props>) {
  return (
    <label
      className={clsx(
        "flex items-center gap-2",
        "p-3 bg-white rounded-lg",
        "focus-within:ring ring-primary",
        className
      )}
    >
      {isValidElement(icon) &&
        cloneElement(icon, { className: "w-5 text-gray-dark" })}

      <input
        type={type}
        className="w-full outline-none text-black"
        placeholder={placeholder}
      />
    </label>
  );
}

function Email(props: Partial<Props>) {
  return <Base icon={<Icon.Mail />} placeholder="Email" {...props} />;
}

function Password(props: Partial<Props>) {
  return <Base icon={<Icon.Lock />} placeholder="Password" {...props} />;
}

function Search(props: Partial<Props>) {
  return (
    <Base icon={<Icon.Search />} placeholder="Search headphone" {...props} />
  );
}

export const Input = { Email, Password, Search };
