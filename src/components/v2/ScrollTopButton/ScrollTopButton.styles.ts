import styled from "styled-components";

export const FloatingTop = styled.a<{ $visible: boolean }>`
  position: fixed;
  right: clamp(var(--space-4), 3vw, var(--space-8));
  bottom: clamp(var(--space-4), 3vw, var(--space-8));
  z-index: 90;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: var(--radius-pill);
  background-color: var(--support-color);
  color: var(--neutral-800);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "0.5rem")});
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition:
    opacity 0.3s ease,
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    transform: translateY(-0.15rem);
  }

  &:focus-visible {
    outline: 2px solid var(--neutral-800);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: translateY(0);
    }
  }
`;
