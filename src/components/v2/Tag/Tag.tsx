import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { StyledTag, type TagVariant, type TagSize } from "./Tag.styles";

export type TagProps = {
  variant?: TagVariant;
  size?: TagSize;
  as?: ElementType;
  active?: boolean;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"li">, "color"> &
  Pick<ComponentPropsWithoutRef<"button">, "type" | "disabled">;

const Tag = ({
  variant = "outline",
  size = "sm",
  as,
  active,
  children,
  ...rest
}: TagProps) => (
  <StyledTag
    as={as}
    $variant={variant}
    $size={size}
    aria-pressed={active === undefined ? undefined : active}
    {...rest}
  >
    <span>{children}</span>
  </StyledTag>
);

export default Tag;
