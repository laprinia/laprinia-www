import Link from "next/link";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;

export const HeroSection = styled.section`
  --hero-bio-width: 38vw;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100svh;
  padding: 1.25rem 1.5rem 2rem;
  justify-content: space-between;
  box-sizing: border-box;

  @media (min-width: 1001px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "identity nav"
      "lower lower";
    gap: 2rem;
    height: 100svh;
    padding: 2rem;
  }
`;

export const HeroName = styled.h1`
  ${visuallyHidden}

  @media (min-width: 1001px) {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip-path: none;
    white-space: normal;
    grid-area: identity;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 1.5rem;
    font-family: var(--font-heading);
    font-weight: 700;
    text-transform: lowercase;
    line-height: 0.85;
    color: var(--accent-color);
    font-size: var(--font-size-display);
  }
`;

export const HeroKicker = styled.span`
  font-size: var(--font-size-eyebrow);
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.1;
  text-transform: uppercase;
  color: var(--accent-color);
`;

export const HeroNameFilled = styled.span`
  color: var(--accent-color);
`;

export const HeroNameOutlined = styled.span`
  flex: 0 0 100%;
  color: var(--accent-color);

  /* stylelint-disable property-no-vendor-prefix -- no unprefixed equivalent */
  @supports (-webkit-text-stroke: 1px currentcolor) {
    color: transparent;
    -webkit-text-stroke: var(--text-stroke-width) var(--accent-color);
  }
  /* stylelint-enable property-no-vendor-prefix */
`;

export const HeroLower = styled(motion.div)`
  order: 2;
  position: relative;
  width: min(70%, 24rem);
  margin-inline: auto;

  @media (min-width: 1001px) {
    grid-area: lower;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    margin-inline: 0;
    gap: 2.5rem;
  }
`;

export const HeroPortrait = styled(motion.div)`
  position: absolute;
  top: -2rem;
  left: -6%;
  width: 58%;

  img {
    display: block;
    width: 100%;
    height: auto;
    transform: rotate(5deg);
  }

  @media (min-width: 1001px) {
    position: relative;
    top: auto;
    left: auto;
    z-index: 2;
    align-self: center;
    width: clamp(4.5rem, 7vw, 6.5rem);
    flex-shrink: 0;

    img {
      transform: none;
    }
  }
`;

export const HeroClip = styled(motion.div)`
  position: absolute;
  top: -1.1rem;
  left: 1rem;
  z-index: 3;
  width: clamp(1.6rem, 6vw, 2.8rem);
  color: var(--accent-color);
  pointer-events: none;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (min-width: 1001px) {
    top: -2.4rem;
    left: auto;
    right: -0.9rem;
  }
`;

export const HeroFolder = styled(motion.div)`
  position: relative;
  margin-top: 3rem;
  width: 100%;

  @media (min-width: 1001px) {
    margin-top: 0;
    z-index: 1;
    width: var(--hero-bio-width);
    flex-shrink: 0;
  }
`;

export const HeroBio = styled.p`
  color: var(--way-darker-accent-color);
`;

export const HeroCtaSlot = styled.div`
  order: 4;
  position: relative;
  z-index: 4;
  display: flex;
  justify-content: center;

  @media (min-width: 1001px) {
    order: 0;
    position: absolute;
    right: 2rem;
    bottom: 2rem;
  }
`;

export const HeroNav = styled.nav`
  order: 1;
  display: flex;
  justify-content: space-between;
  font-family: var(--font-heading);

  @media (min-width: 1001px) {
    order: 0;
    grid-area: nav;
    flex-direction: column;
    align-items: flex-end;
    justify-self: end;
    justify-content: flex-start;
  }
`;

export const HeroNavLink = styled(Link)`
  font-size: var(--font-size-nav);
  text-transform: lowercase;
  text-decoration: none;
  color: var(--accent-color);
  font-weight: var(--font-weight-regular);

  &:hover {
    color: var(--support-color);
    background-color: var(--neutral-700);
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 4px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0.5rem;
  }
`;
