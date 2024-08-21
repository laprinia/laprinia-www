import styled from "styled-components";
import React from "react";

const Looping = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: scroll 30s linear infinite;
  font-size: var(--font-size-M);
  font-weight: var(--font-weight-bold);
  color: var(--accent-color);
  position: absolute;
  will-change: transform;

  span {
    display: inline-flex;
    align-items: end;
  }

  .asterisk {
    margin: 0 0.5rem;
    transform: translateY(35%);
    font-size: var(--font-size-L);
  }

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const LoopingText = ({
  loopingTextContent,
}: {
  loopingTextContent: React.ReactNode;
}) => {
  return <Looping>{loopingTextContent}</Looping>;
};

export default LoopingText;
