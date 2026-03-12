import styled from "styled-components";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export const MobileScrollRoot = styled(ScrollAreaPrimitive.Root)`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 4rem);
  overflow: hidden;
`;

export const MobileScrollViewport = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-sizing: border-box;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

export const MobileScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  width: 6px;
  background: transparent;
`;

export const MobileThumb = styled(ScrollAreaPrimitive.Thumb)`
  flex: 1;
  background: var(--accent-color);
  border-radius: 6px;
  position: relative;
`;
