import { Avatar, Icon } from "@/components";
import { ReactNode } from "react";

type Props = {
  name: string;
  rate: number;
  time: string;
  children?: ReactNode;
};
export function Review({ name, rate, time, children }: Props) {
  return (
    <section className="flex gap-4">
      <div className="flex-1">
        <Avatar />
      </div>

      <div className="flex-[5] flex flex-col gap-4">
        <header className="flex flex-col gap-1">
          <div className="flex justify-between items-baseline">
            <strong>{name}</strong>

            <time className="text-xs text-gray-darker">{time}</time>
          </div>

          <div className="flex gap-1 text-accent">
            <Icon.Star className="w-5" />
            <Icon.Star className="w-5" />
            <Icon.Star className="w-5" />
            <Icon.Star className="w-5" />
            <Icon.Star className="w-5" />
          </div>
        </header>

        <p className="text-sm">{children}</p>
      </div>
    </section>
  );
}
