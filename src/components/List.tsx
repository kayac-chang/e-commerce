import { ReactNode } from "react";
import clsx from "clsx";

type Props<T extends { id: string }> = {
  items: T[];
  className?: string;
  children: (item: T) => ReactNode;
};
export function List<T extends { id: string }>({
  className,
  children,
  items,
}: Props<T>) {
  return (
    <ul className={clsx("flex flex-nowrap overflow-auto", className)}>
      {items.map((item) => (
        <li key={item.id}>{children(item)}</li>
      ))}
    </ul>
  );
}
