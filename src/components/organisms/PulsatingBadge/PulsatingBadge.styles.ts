import styled, { keyframes } from "styled-components";

export const pulse = keyframes`
  0% {
    transform: scale(1);
    background-color: var(--support-color);
  }
  50% {
    transform: scale(1.1);
    background-color: var(--neutral-700);
  }
  100% {
    transform: scale(1);
    background-color: var(--support-color);
  }
`;

export const outlinePulse = keyframes`
  0% {
    transform: scale(1);
    border-color: var(--support-color);
  }
  50% {
    transform: scale(1.5);
    border-color: var(--neutral-500);
  }
  100% {
    transform: scale(1);
    border-color: var(--support-color);
  }
`;

export const Container = styled.section`
  display: flex;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
`;

export const Circle = styled.section`
  position: relative;
  min-width: 16px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--support-color);
  animation: ${pulse} 1.5s infinite;
  margin-right: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    top: -5.5px;
    left: -5.5px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1.6px solid var(--support-color);
    animation: ${outlinePulse} 1.5s infinite;
    z-index: -1;
  }
`;

export const Text = styled.article``;
