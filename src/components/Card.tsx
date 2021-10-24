import { ReactNode, isValidElement, cloneElement } from "react";
import clsx from "clsx";

type Props = {
  className: string;
  children: ReactNode;
};
export function Card({ className, children }: Partial<Props>) {
  const card = "bg-white rounded-xl";

  if (isValidElement(children)) {
    return cloneElement(children, {
      className: clsx(card, className, children.props.className),
    });
  }

  return <div className={clsx(card, className)}>{children}</div>;
}
