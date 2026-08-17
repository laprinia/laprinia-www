import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  StyledPill,
  type PillVariant,
  type PillSize,
} from "./Pill.styles";

export type PillProps = {
  variant?: PillVariant;
  size?: PillSize;
  asChild?: boolean;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"span">, "color">;

const Pill = forwardRef<HTMLSpanElement, PillProps>(function Pill(
  { variant = "filled", size = "md", asChild = false, children, ...rest },
  ref,
) {
  return (
    <StyledPill
      as={asChild ? Slot : undefined}
      ref={ref}
      $variant={variant}
      $size={size}
      {...rest}
    >
      {children}
    </StyledPill>
  );
});

export default Pill;
