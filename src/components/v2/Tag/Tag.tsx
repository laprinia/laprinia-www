import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { StyledTag, type TagVariant, type TagSize } from "./Tag.styles";

export type TagProps = {
  variant?: TagVariant;
  size?: TagSize;
  as?: ElementType;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"li">, "color">;

const Tag = ({
  variant = "outline",
  size = "sm",
  as,
  children,
  ...rest
}: TagProps) => (
  <StyledTag as={as} $variant={variant} $size={size} {...rest}>
    <span>{children}</span>
  </StyledTag>
);

export default Tag;
