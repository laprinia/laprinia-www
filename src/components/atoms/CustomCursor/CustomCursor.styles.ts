import styled from "styled-components";

export const CURSOR_SIZE = 4;

export const Wrapper = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.15s ease;
  will-change: transform;

  @media (hover: none) {
    display: none;
  }
`;

export const Asterisk = styled.span<{ $hidden: boolean; $active: boolean }>`
  position: absolute;
  transform: translate(-50%, -50%)
    scale(${({ $hidden, $active }) => ($hidden ? 0.3 : $active ? 0.5 : 1)});
  opacity: ${({ $hidden, $active }) => ($hidden || $active ? 0 : 1)};
  transition:
    opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-size: ${CURSOR_SIZE}rem;
  font-weight: var(--font-weight-bold);
  line-height: 1;
  color: var(--accent-color);
  -webkit-text-stroke: 2px var(--neutral-000);
  text-stroke: 1px var(--neutral-000);
  user-select: none;
`;

export const Pill = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%)
    scale(${({ $visible }) => ($visible ? 1 : 0.5)});
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.3s ease;
  background: var(--accent-color);
  color: var(--neutral-000);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: var(--font-weight-regular);
  padding: 0.4em 0.9em;
  border-radius: 1em;
  white-space: nowrap;
  letter-spacing: 0.02em;
`;
