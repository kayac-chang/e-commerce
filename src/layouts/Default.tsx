import { ReactNode } from "react";
import { Nav } from "@/components";

type LayoutProps = {
  children?: ReactNode;
};
export default function Default({ children }: LayoutProps) {
  return (
    <main className="h-screen overflow-hidden flex flex-col gap-4">
      <Nav.Cart />

      {children}
    </main>
  );
}
