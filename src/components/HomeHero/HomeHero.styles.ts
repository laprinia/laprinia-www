import styled, { keyframes } from "styled-components";
import { media } from "../../styles/breakpoints";

const sweep = keyframes`
  from { background-size: 0% 0.42em; }
  to   { background-size: 100% 0.42em; }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Header = styled.header`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 1fr auto;
  gap: var(--space-8) clamp(var(--space-4), 3vw, var(--space-12));
  align-items: stretch;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: calc(var(--nav-height) + var(--space-4))
    clamp(var(--space-5), 4vw, var(--space-12)) var(--space-10);

  ${media.lg} {
    grid-template-columns: minmax(0, 1fr) minmax(0, auto);
    gap: clamp(var(--space-4), 3vh, var(--space-8))
      clamp(var(--space-4), 3vw, var(--space-12));
    height: 100svh;
    min-height: 520px;
    padding-block: var(--nav-height)
      clamp(var(--space-4), 2.5vh, var(--space-8));
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  min-width: 0;

  ${media.lg} {
    justify-content: center;
    gap: clamp(var(--space-4), 2.5vh, var(--space-8));
  }
`;

export const Ribbon = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  font-family: var(--font-mono);
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--foreground-color);

  ${media.lg} {
    flex-flow: row wrap;
    gap: var(--space-2) var(--space-4);
  }
`;

export const Position = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
  margin: 0;

  ${media.lg} {
    display: contents;
  }
`;

export const Availability = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);

  ${media.lg} {
    display: contents;
  }
`;

export const RibbonRole = styled.span`
  background-image: linear-gradient(var(--support-color), var(--support-color));
  background-repeat: no-repeat;
  background-position: 0 92%;
  background-size: 100% 0.5em;
`;

export const RibbonPlace = styled.span`
  color: var(--section-muted);
`;

export const RibbonStatus = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--accent-color);

  &::before {
    content: "";
    width: var(--space-2);
    height: var(--space-2);
    border-radius: 50%;
    background-color: var(--accent-color);
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  min-width: 0;

  ${media.lg} {
    gap: clamp(var(--space-4), 3vh, var(--space-10));
  }
`;

export const Name = styled.h1`
  margin: 0;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-light);
  font-size: clamp(2.25rem, 12vw, 4.5rem);
  line-height: 0.88;
  letter-spacing: -0.02em;
  color: var(--accent-color);

  ${media.lg} {
    font-size: min(9.5vw, 15svh, 10rem);
  }
`;

export const Tagline = styled.p`
  margin: 0;
  max-width: 34ch;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-light);
  font-size: clamp(1.125rem, 4.5vw, 1.5rem);
  line-height: 1.25;
  color: var(--foreground-color);
  text-wrap: pretty;
  animation: ${fadeUp} 0.9s var(--ease-out) 0.15s both;

  ${media.lg} {
    font-size: min(2.4vw, 4.2svh, 2.25rem);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Shipped = styled.strong`
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 0.82em;
  color: var(--foreground-color);
  background-image: linear-gradient(var(--support-color), var(--support-color));
  background-repeat: no-repeat;
  background-position: 0 88%;
  background-size: 0% 0.42em;
  box-decoration-break: clone;
  animation: ${sweep} 1.4s cubic-bezier(0.45, 0, 0.25, 1) 1.15s forwards;

  /* stylelint-disable property-no-vendor-prefix -- Safari needs the prefix */
  -webkit-box-decoration-break: clone;
  /* stylelint-enable property-no-vendor-prefix */

  @media (prefers-reduced-motion: reduce) {
    background-size: 100% 0.42em;
    animation: none;
  }
`;

export const InlineStrip = styled.figure`
  display: flex;
  justify-content: flex-start;
  margin: 0;

  img {
    display: block;
    width: clamp(7rem, 32vw, 10rem);
    height: auto;
    filter: drop-shadow(0 14px 28px rgb(var(--lift-tint) / 16%));
  }

  ${media.lg} {
    display: none;
  }
`;

export const Strip = styled.figure`
  display: none;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;
  min-height: 0;
  margin: 0;

  img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: min(58svh, 520px);
    padding: clamp(0.4rem, 0.8vh, 0.7rem);
    object-fit: contain;
    filter: drop-shadow(0 14px 28px rgb(var(--lift-tint) / 16%));
  }

  ${media.lg} {
    display: flex;
  }
`;

export const RibbonRow = styled.div`
  display: flex;
  grid-column: 1 / -1;
  align-items: center;
  min-width: 0;
  padding-top: var(--space-6);
  border-top: 1px solid var(--neutral-300);
  overflow: hidden;

  ${media.lg} {
    padding-top: 0;
    border-top: 0;
  }
`;
