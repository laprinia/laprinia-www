import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import {
  StyledTag,
  type TagShape,
  type TagTone,
  type TagSize,
} from "./Tag.styles";

export type TagProps = {
  shape?: TagShape;
  tone?: TagTone;
  size?: TagSize;
  as?: ElementType;
  active?: boolean;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"li">, "color"> &
  Pick<ComponentPropsWithoutRef<"button">, "type" | "disabled">;

const Tag = ({
  shape = "pill",
  tone = "accent",
  size = "sm",
  as,
  active,
  children,
  ...rest
}: TagProps) => (
  <StyledTag
    as={as}
    $shape={shape}
    $tone={tone}
    $size={size}
    aria-pressed={active === undefined ? undefined : active}
    {...rest}
  >
    <span>{children}</span>
  </StyledTag>
);

export default Tag;
