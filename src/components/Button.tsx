import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

function Base({ className, children }: Props) {
  return <button className={className}>{children}</button>;
}

function Primary({ children }: Props) {
  return <Base className="bg-primary rounded-lg py-3">{children}</Base>;
}

export const Button = { Primary };
