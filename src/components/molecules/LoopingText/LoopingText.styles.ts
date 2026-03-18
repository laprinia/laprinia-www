import styled, { keyframes } from "styled-components";

export const scroll = (isReverse: boolean) => keyframes`
  0% {
    transform: translateX(${isReverse ? "-50%" : "0%"});
  }
  100% {
    transform: translateX(${isReverse ? "0%" : "-50%"});
  }
`;

export const ScrollingTextContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  font-weight: var(--font-weight-regular);
  color: var(--accent-color);
`;

export const ScrollingTextInner = styled.div<{
  marqueeSpeed: string;
  isReverse: boolean;
}>`
  display: flex;
  width: max-content;
  animation: ${(props) => scroll(props.isReverse)}
    ${(props) => props.marqueeSpeed} linear infinite;
  white-space: nowrap;

  &:hover {
    animation-play-state: paused;
  }
`;

export const ScrollingText = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--font-heading);

  font-size: var(--font-size-body-desktop);

  @media (max-width: 1024px) {
    font-size: var(--font-size-body-tablet);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-body-phone);
  }

  @media (min-width: 1800px) {
    font-size: var(--font-size-body-xl);
  }
`;

export const ScrollingTextItem = styled.div<{ padding: string }>`
  padding: 0 ${(props) => props.padding};
  display: flex;
  align-items: center;
`;

export const Divider = styled.span`
  display: flex;
  margin: 0 0.5rem;
  transform: translateY(25%);
  color: var(--support-color);

  font-size: var(--font-size-heading1-desktop);

  @media (max-width: 1024px) {
    font-size: var(--font-size-heading1-tablet);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-heading1-phone);
  }

  @media (min-width: 1800px) {
    font-size: var(--font-size-heading1-xl);
  }
`;
