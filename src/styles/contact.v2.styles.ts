import styled from "styled-components";

export const ContactGround = styled.div`
  --section-ink: var(--accent-color);
  --section-surface: var(--background-color);

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100svh;
  padding: calc(var(--nav-height) + clamp(var(--space-6), 4vw, var(--space-12)))
    clamp(var(--space-4), 5vw, var(--space-10))
    clamp(var(--space-10), 6vw, var(--space-16));
  box-sizing: border-box;
  background-color: var(--section-surface);
`;

export const ContactPanel = styled.div`
  width: 100%;
  max-width: 38rem;
`;
