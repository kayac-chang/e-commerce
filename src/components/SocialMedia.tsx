import { ReactNode } from "react";

type SocialMediaProps = {
  href?: string;
  children?: ReactNode;
};
export function SocialMedia({ href, children }: SocialMediaProps) {
  return (
    <a href={href}>
      <div className="bg-white rounded-lg w-12 h-12 p-4 flex justify-center items-center">
        {children}
      </div>
    </a>
  );
}
