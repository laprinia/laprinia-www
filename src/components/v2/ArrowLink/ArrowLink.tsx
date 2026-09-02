import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { StyledArrowLink, type ArrowLinkSize } from "./ArrowLink.styles";

export type ArrowLinkProps = {
  href: string;
  external?: boolean;
  size?: ArrowLinkSize;
  iconSize?: number;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

const isAbsolute = (href: string) => /^https?:\/\//i.test(href);

const ArrowLink = ({
  href,
  external,
  size = "md",
  iconSize = 16,
  children,
  ...rest
}: ArrowLinkProps) => {
  const leavesSite = external ?? isAbsolute(href);
  const Icon = leavesSite ? ArrowUpRight : ArrowRight;

  return (
    <StyledArrowLink
      href={href}
      $external={leavesSite}
      $size={size}
      {...(leavesSite
        ? { target: "_blank", rel: "noopener noreferrer" }
        : null)}
      {...rest}
    >
      <span>{children}</span>
      <Icon size={iconSize} strokeWidth={2.5} aria-hidden="true" />
    </StyledArrowLink>
  );
};

export default ArrowLink;
