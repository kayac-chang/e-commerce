import { Icon } from "@/components";

export function Nav() {
  return (
    <nav className="flex justify-between items-center px-8 py-2">
      <button>
        <Icon.MenuVariant className="w-5" />
      </button>

      <span className="inline-flex gap-1 text-xl">
        <Icon.Logo className="w-5" />

        <strong>Audio</strong>
      </span>

      <img
        className="w-9 rounded-full"
        src="https://i.pravatar.cc/300"
        alt="avatar"
      />
    </nav>
  );
}
