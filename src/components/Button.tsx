import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

function Base({ className, children }: Props) {
  return <button className={className}>{children}</button>;
}

function Primary({ className, children }: Props) {
  return (
    <Base className={clsx("bg-primary rounded-lg py-3", className)}>
      {children}
    </Base>
  );
}

export const Button = { Primary };
