import styled from "styled-components";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export const ScrollRoot = styled(ScrollAreaPrimitive.Root)`
  flex: 1;
  overflow: hidden;
`;

export const ScrollViewport = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
`;

export const ScrollBar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  width: 8px;
  background: transparent;
`;

export const ScrollThumb = styled(ScrollAreaPrimitive.Thumb)`
  flex: 1;
  background: var(--accent-color);
  border-radius: 8px;
  position: relative;
`;
