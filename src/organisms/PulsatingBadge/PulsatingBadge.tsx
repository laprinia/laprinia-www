import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
    background-color: var(--accent-color);
  }
  50% {
    transform: scale(1.1);
    background-color: var(--way-darker-accent-color);
  }
  100% {
    transform: scale(1);
    background-color: var(--accent-color);
  }
`;

const outlinePulse = keyframes`
  0% {
    transform: scale(1);
    border-color: var(--darker-accent-color);
  }
  50% {
    transform: scale(1.5);
    border-color: var(--way-darker-accent-color);
  }
  100% {
    transform: scale(1);
    border-color: var(--accent-color);
  }
`;

const Container = styled.div`
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

const Circle = styled.div`
  position: relative;
  min-width: 16px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--accent-color);
  animation: ${pulse} 1.5s infinite;
  margin-right: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1.6px solid var(--accent-color);
    animation: ${outlinePulse} 1.5s infinite;
    z-index: -1;
  }
`;

const Text = styled.div`
  text-align: justify;
`;

const PulsatingBadge = () => {
  return (
    <Container
      role="status"
      aria-label="Availability status: Available for work"
    >
      <Circle />
      <Text>AVAILABLE FOR WORK</Text>
    </Container>
  );
};

export default PulsatingBadge;
