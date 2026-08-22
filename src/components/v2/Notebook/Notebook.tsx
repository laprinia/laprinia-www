import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
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
  contentGap?: string;
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
    ["--notebook-content-gap", props.contentGap],
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
  contentGap,
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
    contentGap,
    paddingBlock,
    paddingInline,
    background,
    color,
    radius,
    minHeight,
  });

  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = panelRef.current;
    if (!node) return;

    // Custom properties resolve to their authored token stream, so a clamp()
    // reads back verbatim and has to be measured through a real layout box.
    const probe = document.createElement("div");
    probe.style.cssText =
      "position:absolute;visibility:hidden;pointer-events:none;height:0";
    document.body.appendChild(probe);

    const toPx = (value: string): number | null => {
      const raw = value.trim();
      if (!raw) return null;
      probe.style.width = "0px";
      probe.style.width = raw;
      const px = parseFloat(getComputedStyle(probe).width);
      return Number.isFinite(px) ? px : null;
    };

    const syncBandEnd = () => {
      const styles = getComputedStyle(node);
      const radius = toPx(styles.getPropertyValue("--notebook-hole-radius"));
      const gap = toPx(styles.getPropertyValue("--notebook-hole-gap"));
      const top = toPx(styles.getPropertyValue("--notebook-holes-top"));
      const bottom = toPx(styles.getPropertyValue("--notebook-holes-bottom"));
      if (radius === null || gap === null || top === null || bottom === null) {
        return;
      }

      const pitch = radius * 2 + gap;
      const span = node.offsetHeight - bottom - top - radius * 2;
      if (span < 0) return;

      const lastHoleEnd = top + radius * 2 + Math.floor(span / pitch) * pitch;
      node.style.setProperty("--notebook-band-end", `${lastHoleEnd}px`);
    };

    syncBandEnd();
    const observer = new ResizeObserver(syncBandEnd);
    observer.observe(node);

    return () => {
      observer.disconnect();
      probe.remove();
    };
  }, []);

  return (
    <NotebookPanel
      ref={panelRef}
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
