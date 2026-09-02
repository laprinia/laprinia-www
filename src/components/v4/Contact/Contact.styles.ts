import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100svh;
  padding: calc(var(--nav-height) + clamp(var(--space-6), 4vw, var(--space-12)))
    clamp(var(--space-4), 5vw, var(--space-10))
    clamp(var(--space-10), 6vw, var(--space-16));
`;

export const Sheet = styled.div`
  width: 100%;
  max-width: 38rem;
`;

export const Letter = styled.div`
  --section-ink: var(--accent-color);

  position: relative;
  overflow: hidden;
  padding: clamp(var(--space-6), 4vw, var(--space-10))
    clamp(var(--space-6), 4vw, var(--space-10))
    clamp(var(--space-6), 4vw, var(--space-10))
    clamp(var(--space-10), 7vw, var(--space-18));
  background-color: var(--paper-surface);
  box-shadow: var(--lift-3);

  input,
  textarea {
    color: var(--foreground-color);
  }
`;

export const MarginRule = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: clamp(var(--space-8), 5vw, var(--space-12));
  width: 2px;
  background-color: var(--support-color);
  pointer-events: none;
`;

export const Holes = styled.div`
  position: absolute;
  top: clamp(var(--space-6), 4vw, var(--space-10));
  bottom: clamp(var(--space-6), 4vw, var(--space-10));
  left: clamp(var(--space-3), 2vw, var(--space-5));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: clamp(var(--space-2), 1.2vw, var(--space-3));
  pointer-events: none;
`;

export const Hole = styled.span`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: var(--paper-inset);
  box-shadow: inset 0 2px 4px rgb(var(--lift-tint) / 18%);
`;

export const Meta = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin: var(--space-5) 0 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  color: var(--section-muted);
`;
