import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  StyledButton,
  ButtonIcon,
  type ButtonVariant,
  type ButtonSize,
} from "./Button.styles";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "start" | "end";

  iconOnly?: boolean;
  fullWidth?: boolean;
  loading?: boolean;

  asChild?: boolean;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "color">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "solid",
    size = "md",
    icon,
    iconPosition = "end",
    iconOnly = false,
    fullWidth = false,
    loading = false,
    asChild = false,
    disabled,
    children,
    ...rest
  },
  ref,
) {
  const isDisabled = disabled || loading;

  const label =
    iconOnly && !asChild ? (
      <VisuallyHidden.Root>{children}</VisuallyHidden.Root>
    ) : (
      children
    );

  const decoration = icon ? (
    <ButtonIcon aria-hidden="true">{icon}</ButtonIcon>
  ) : null;

  return (
    <StyledButton
      as={asChild ? Slot : undefined}
      ref={ref}
      $variant={variant}
      $size={size}
      $iconOnly={iconOnly}
      $fullWidth={fullWidth}
      disabled={asChild ? undefined : isDisabled}
      aria-disabled={asChild && isDisabled ? true : undefined}
      data-loading={loading || undefined}
      {...rest}
    >
      {iconPosition === "start" ? decoration : null}
      <Slottable>{label}</Slottable>
      {iconPosition === "end" ? decoration : null}
    </StyledButton>
  );
});

export default Button;
