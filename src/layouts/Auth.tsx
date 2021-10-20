import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
export default function Auth({ children }: Props) {
  return (
    <main className="bg-auth flex flex-col h-screen p-8 text-white text-sm text-center">
      <header className="space-y-4 mt-20">
        <h1 className="text-6xl">Audio</h1>

        <p>It's modular and designed to last</p>
      </header>

      <form className="flex-1 flex flex-col gap-6 py-12">{children}</form>
    </main>
  );
}
