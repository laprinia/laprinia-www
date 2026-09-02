import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import {
  StyledArrowLink,
  type ArrowLinkSize,
  type ArrowLinkDirection,
} from "./ArrowLink.styles";

export type ArrowLinkProps = {
  href: string;
  direction?: Exclude<ArrowLinkDirection, "external">;
  external?: boolean;
  mono?: boolean;
  size?: ArrowLinkSize;
  iconSize?: number;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

const icons = {
  forward: ArrowRight,
  back: ArrowLeft,
  up: ArrowUp,
  external: ArrowUpRight,
} satisfies Record<ArrowLinkDirection, typeof ArrowRight>;

const isAbsolute = (href: string) => /^https?:\/\//i.test(href);

const ArrowLink = ({
  href,
  direction = "forward",
  external,
  mono = false,
  size = "md",
  iconSize = 16,
  children,
  ...rest
}: ArrowLinkProps) => {
  const leavesSite = external ?? isAbsolute(href);
  const resolved: ArrowLinkDirection = leavesSite ? "external" : direction;
  const Icon = icons[resolved];
  const iconFirst = resolved === "back";

  const icon = <Icon size={iconSize} strokeWidth={2.5} aria-hidden="true" />;

  return (
    <StyledArrowLink
      href={href}
      $direction={resolved}
      $size={size}
      $mono={mono}
      {...(leavesSite
        ? { target: "_blank", rel: "noopener noreferrer" }
        : null)}
      {...rest}
    >
      {iconFirst ? icon : null}
      <span>{children}</span>
      {iconFirst ? null : icon}
    </StyledArrowLink>
  );
};

export default ArrowLink;
