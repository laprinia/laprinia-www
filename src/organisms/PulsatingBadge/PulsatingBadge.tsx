import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

const outlinePulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  overflow-x: visible;
`;

const Circle = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--accent-color);
  animation: ${pulse} 1.5s infinite;
  margin-right: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    top: -0.25rem;
    left: -0.25rem;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    border: 0.1rem solid var(--accent-color);
    animation: ${outlinePulse} 1.5s infinite;
    z-index: -1;
  }
`;

const Text = styled.div`
  white-space: nowrap;
`;

const PulsatingBadge = () => {
  return (
    <Container
      role="status"
      aria-label="Availability status: Available for work"
    >
      <Circle aria-label="Pulsating blue circle indicating availability" />
      <Text>AVAILABLE FOR WORK</Text>
    </Container>
  );
};

export default PulsatingBadge;
