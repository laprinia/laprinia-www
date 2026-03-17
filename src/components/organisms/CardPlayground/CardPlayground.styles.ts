import styled from "styled-components";

export const PlaygroundContainer = styled.div<{ $interactive?: boolean }>`
  position: relative;
  flex: 1;
  min-height: 280px;
  width: 100%;
  overflow: hidden;
  perspective: 800px;
  cursor: default;
  user-select: none;

  &:active {
    cursor: ${({ $interactive = true }) =>
      $interactive ? "grabbing" : "default"};
  }
`;
