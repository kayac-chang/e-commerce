import { Avatar, Icon } from "@/components";
import clsx from "clsx";
import { ReactNode } from "react";

type BaseProps = {
  className: string;
  children: ReactNode;
};
function Base({ children, className }: Partial<BaseProps>) {
  return (
    <nav
      className={clsx("flex justify-between items-center px-8 py-4", className)}
    >
      {children}
    </nav>
  );
}

function Home() {
  return (
    <Base>
      <button>
        <Icon.MenuVariant className="w-5" />
      </button>

      <span className="inline-flex gap-1 text-xl">
        <Icon.Logo className="w-5" />

        <strong>Audio</strong>
      </span>

      <Avatar />
    </Base>
  );
}

type CartProps = {
  title?: string;
};
function Cart({ title }: CartProps) {
  return (
    <Base>
      <button>
        <Icon.ChevronLeft className="w-5" />
      </button>

      {title && <strong>{title}</strong>}

      <button>
        <Icon.ShoppingCart className="w-5" />
      </button>
    </Base>
  );
}

export const Nav = { Home, Cart };
