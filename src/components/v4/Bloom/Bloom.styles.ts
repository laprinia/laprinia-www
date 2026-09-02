import styled from "styled-components";

export const Orb = styled.div`
  position: absolute;
  z-index: 0;
  aspect-ratio: 1;
  border-radius: 50%;
  mix-blend-mode: multiply;
  pointer-events: none;
`;

export const Spotlight = styled(Orb)`
  position: fixed;
  width: 44vw;
  background-color: var(--bloom-lime);
  filter: blur(90px);
  opacity: 0.55;
  transform: translate(-50%, -50%);
  transition:
    left var(--dur-slow) var(--ease-out),
    top var(--dur-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Drift = styled(Orb)`
  background-color: var(--bloom-blue);
`;
