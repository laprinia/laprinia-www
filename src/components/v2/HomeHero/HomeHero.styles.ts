import Link from "next/link";
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
  --hero-bio-width: 30vw;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: calc(100vh - 5rem);
  padding: 1.25rem 1.5rem 1.5rem;
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
    font-size: clamp(3rem, 9.5vw, 11rem);
  }
`;

export const HeroKicker = styled.span`
  font-size: clamp(0.7rem, 1vw, 1.1rem);
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
    -webkit-text-stroke: clamp(1.5px, 0.2vw, 3px) var(--accent-color);
  }
  /* stylelint-enable property-no-vendor-prefix */
`;

export const HeroLower = styled.div`
  display: contents;

  @media (min-width: 1001px) {
    grid-area: lower;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
  }
`;

export const HeroPortrait = styled.div`
  order: 2;
  align-self: center;
  margin-block: auto;
  width: clamp(8rem, 45vw, 14rem);

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (min-width: 1001px) {
    order: 0;
    margin-block: 0;
    width: clamp(4rem, 8vw, 8rem);
    flex-shrink: 0;
  }
`;

export const HeroIntro = styled.div`
  order: 3;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  @media (min-width: 1001px) {
    order: 0;
    height: auto;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 1.25rem;
    text-align: left;
    width: var(--hero-bio-width);
    flex-shrink: 0;
  }
`;

export const HeroBio = styled.p`
  color: var(--neutral-900);

  @media (min-width: 1001px) {
    color: var(--accent-color);
    text-align: justify;
  }
`;

export const HeroCtaSlot = styled.div`
  display: inline-flex;

  @media (min-width: 1001px) {
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
  font-size: var(--font-size-heading1-phone);
  text-transform: lowercase;
  text-decoration: none;
  color: var(--neutral-900);
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

  @media (min-width: 768px) {
    font-size: var(--font-size-heading1-tablet);
  }

  @media (min-width: 1001px) {
    color: var(--accent-color);
  }

  @media (min-width: 1024px) {
    margin-bottom: 0.5rem;
    font-size: 1.75rem;
  }

  @media (min-width: 1800px) {
    font-size: 2rem;
  }
`;
