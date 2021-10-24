import { ReactNode } from "react";

type TabProps = {
  children?: ReactNode;
};
function Tab({ children }: TabProps) {
  return (
    <a href="#">
      <div className="py-3">{children}</div>
    </a>
  );
}

export function Tabs() {
  return (
    <nav className="relative">
      <ul className="flex gap-8">
        <li>
          <Tab>Overview</Tab>
        </li>
        <li>
          <Tab>Features</Tab>
        </li>
        <li>
          <Tab>Specification</Tab>
        </li>
      </ul>

      <i className="absolute bottom-0 bg-primary w-8 h-1 rounded-3xl" />
    </nav>
  );
}
