import React from "react";
import styled, { keyframes } from "styled-components";

const scroll = (isReverse: boolean) => keyframes`
  0% {
    transform: translateX(${isReverse ? "-50%" : "0%"});
  }
  100% {
    transform: translateX(${isReverse ? "0%" : "-50%"});
  }
`;

const ScrollingTextContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  font-weight: var(--font-weight-regular);
  color: var(--accent-color);
`;

const ScrollingTextInner = styled.div<{
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

const ScrollingText = styled.div`
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

const ScrollingTextItem = styled.div<{ padding: string }>`
  padding: 0 ${(props) => props.padding};
  display: flex;
  align-items: center;
`;

const Divider = styled.span`
  display: flex;
  margin: 0 0.5rem;
  transform: translateY(25%);
  color: var(--darker-accent-color);

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

const LoopingText = ({
  items,
  marqueeSpeed = "60s",
  padding = "1.5rem",
  isReverse = false,
  withDivider = false,
}: {
  items: string[];
  marqueeSpeed?: string;
  padding?: string;
  isReverse?: boolean;
  withDivider?: boolean;
}) => {
  return (
    <ScrollingTextContainer>
      <ScrollingTextInner marqueeSpeed={marqueeSpeed} isReverse={isReverse}>
        <ScrollingText>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ScrollingTextItem padding={padding}>{item}</ScrollingTextItem>
              {withDivider && <Divider>*</Divider>}
            </React.Fragment>
          ))}
          {items.map((item, index) => (
            <React.Fragment key={index + items.length}>
              <ScrollingTextItem padding={padding}>{item}</ScrollingTextItem>
              {withDivider && index < items.length - 1 && <Divider>*</Divider>}
            </React.Fragment>
          ))}
        </ScrollingText>
      </ScrollingTextInner>
    </ScrollingTextContainer>
  );
};

export default LoopingText;
