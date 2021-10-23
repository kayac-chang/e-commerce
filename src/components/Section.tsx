import { ReactNode } from "react";

type Props = {
  title: string;
  option: ReactNode;
  children: ReactNode;
};
export function Section({ title, option, children }: Partial<Props>) {
  return (
    <section className="flex flex-col">
      <header className="flex justify-between pb-4">
        <h2 className="mb-4">{title}</h2>

        {option}
      </header>

      {children}
    </section>
  );
}
