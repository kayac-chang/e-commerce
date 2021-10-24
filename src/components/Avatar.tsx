import clsx from "clsx";

type Props = {
  className?: string;
};
export function Avatar({ className }: Props) {
  return (
    <img
      className={clsx("rounded-full", className)}
      src="https://i.pravatar.cc/300"
      alt="avatar"
    />
  );
}
