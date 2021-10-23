import { ReactNode, isValidElement, cloneElement } from "react";
import clsx from "clsx";

type Props = {
  className: string;
  children: ReactNode;
};
export function Card({ className, children }: Partial<Props>) {
  className = clsx(className, "bg-white rounded-xl");

  if (isValidElement(children)) {
    return cloneElement(children, { className });
  }

  return <div className={className}>{children}</div>;
}
