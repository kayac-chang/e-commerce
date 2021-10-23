import clsx from "clsx";
import { ReactNode, isValidElement, cloneElement } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};
function Base({ children, className }: Props) {
  if (!isValidElement(children))
    throw new Error(`should be valid react children.`);

  return cloneElement(children, {
    className: clsx(
      "rounded-full py-1 px-4 text-sm",
      children.props.className,
      className
    ),
  });
}

function Primary(props: Props) {
  return <Base className="bg-primary text-white" {...props} />;
}

function Default(props: Props) {
  return <Base className="text-gray-darker" {...props} />;
}

export const Badge = { Primary, Default };
