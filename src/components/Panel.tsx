import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children?: ReactNode;
};
export function Panel({ children }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col flex-1",
        "p-6 gap-2",
        "rounded-t-3xl bg-gray-light"
      )}
    >
      {children}
    </div>
  );
}
