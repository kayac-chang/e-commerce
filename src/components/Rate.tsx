import { ReactNode } from "react";
import { Icon } from "@/components";

type RateProps = {
  children?: ReactNode;
};
export function Rate({ children }: RateProps) {
  return (
    <span className="inline-flex items-center gap-1">
      <Icon.Star className="w-4 text-accent" />

      <span>{children}</span>
    </span>
  );
}
