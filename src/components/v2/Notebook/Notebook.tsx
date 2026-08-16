import type { CSSProperties, ElementType, ReactNode } from "react";
import { NotebookPanel, NotebookContent } from "./Notebook.styles";

export type NotebookProps = {
  children: ReactNode;
  as?: ElementType;
  id?: string;
  className?: string;
  holeRadius?: string;
  holeGap?: string;

  gutter?: string;

  lineWidth?: string;
  margin?: string;
  holesTop?: string;
  holesBottom?: string;
  paddingBlock?: string;
  paddingInline?: string;
  background?: string;
  color?: string;
  radius?: string;

  minHeight?: string;
} & Record<string, unknown>;

const toCssVars = (props: Partial<NotebookProps>): CSSProperties => {
  const pairs: [string, string | undefined][] = [
    ["--notebook-hole-radius", props.holeRadius],
    ["--notebook-hole-gap", props.holeGap],
    ["--notebook-gutter", props.gutter],
    ["--notebook-line-width", props.lineWidth],
    ["--notebook-margin", props.margin],
    ["--notebook-holes-top", props.holesTop],
    ["--notebook-holes-bottom", props.holesBottom],
    ["--notebook-padding-block", props.paddingBlock],
    ["--notebook-padding-inline", props.paddingInline],
    ["--notebook-background", props.background],
    ["--notebook-color", props.color],
    ["--notebook-radius", props.radius],
    ["--notebook-min-height", props.minHeight],
  ];

  return Object.fromEntries(
    pairs.filter(([, value]) => value !== undefined),
  ) as CSSProperties;
};

const Notebook = ({
  children,
  as = "div",
  id,
  className,
  style,
  holeRadius,
  holeGap,
  gutter,
  lineWidth,
  margin,
  holesTop,
  holesBottom,
  paddingBlock,
  paddingInline,
  background,
  color,
  radius,
  minHeight,
  ...rest
}: NotebookProps & { style?: CSSProperties }) => {
  const cssVars = toCssVars({
    holeRadius,
    holeGap,
    gutter,
    lineWidth,
    margin,
    holesTop,
    holesBottom,
    paddingBlock,
    paddingInline,
    background,
    color,
    radius,
    minHeight,
  });

  return (
    <NotebookPanel
      as={as}
      id={id}
      className={className}
      style={{ ...cssVars, ...style }}
      {...rest}
    >
      <NotebookContent>{children}</NotebookContent>
    </NotebookPanel>
  );
};

export default Notebook;
