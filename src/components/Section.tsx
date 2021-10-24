import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  title: string;
  option: ReactNode;
  children: ReactNode;
  className: string;
};
export function Section({
  title,
  option,
  children,
  className,
}: Partial<Props>) {
  return (
    <section className={clsx("flex flex-col", className)}>
      <header className="flex justify-between pb-4">
        <h2>{title}</h2>

        {option}
      </header>

      {children}
    </section>
  );
}
