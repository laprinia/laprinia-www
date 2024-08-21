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
  font-family: var(--font-heading);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-M);
  color: var(--accent-color);
  margin-bottom: 1rem;
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
`;

const ScrollingTextItem = styled.div`
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
`;

const Divider = styled.span`
  display: flex;
  margin: 0 0.5rem;
  transform: translateY(25%);
  font-size: var(--font-size-L-heading);
`;

const LoopingText = ({
  items,
  marqueeSpeed = "60s",
  isReverse = false,
  withDivider = false,
}: {
  items: string[];
  marqueeSpeed?: string;
  isReverse?: boolean;
  withDivider?: boolean;
}) => {
  return (
    <ScrollingTextContainer>
      <ScrollingTextInner marqueeSpeed={marqueeSpeed} isReverse={isReverse}>
        <ScrollingText>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ScrollingTextItem>{item}</ScrollingTextItem>
              {withDivider && index < items.length - 1 && <Divider>*</Divider>}
            </React.Fragment>
          ))}
          {items.map((item, index) => (
            <React.Fragment key={index + items.length}>
              <ScrollingTextItem>{item}</ScrollingTextItem>
              {withDivider && index < items.length - 1 && <Divider>*</Divider>}
            </React.Fragment>
          ))}
        </ScrollingText>
      </ScrollingTextInner>
    </ScrollingTextContainer>
  );
};

export default LoopingText;
