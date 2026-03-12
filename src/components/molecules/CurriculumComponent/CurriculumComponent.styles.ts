import styled from "styled-components";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
`;

export const StyledScrollRoot = styled(ScrollAreaPrimitive.Root)`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const StyledScrollViewport = styled(ScrollAreaPrimitive.Viewport)`
  width: 100%;
  height: 100%;
`;

export const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  width: 6px;
  background: transparent;
`;

export const StyledThumb = styled(ScrollAreaPrimitive.Thumb)`
  flex: 1;
  background: var(--accent-color);
  border-radius: 6px;
  position: relative;
`;

export const LayoutWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 65%;
`;
