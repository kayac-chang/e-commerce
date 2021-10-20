import { ReactNode } from "react";
import { Icon } from "@/components";

type Props = {
  href?: string;
  children?: ReactNode;
};
function Base({ href, children }: Props) {
  return (
    <a href={href}>
      <div className="bg-white rounded-lg w-12 h-12 p-4 flex justify-center items-center">
        {children}
      </div>
    </a>
  );
}

function Apple() {
  return (
    <Base href="#">
      <Icon.Apple />
    </Base>
  );
}

function FaceBook() {
  return (
    <Base href="#">
      <Icon.FaceBook />
    </Base>
  );
}

function Google() {
  return (
    <Base href="#">
      <Icon.Google />
    </Base>
  );
}

export const SocialMedia = { Apple, FaceBook, Google };
