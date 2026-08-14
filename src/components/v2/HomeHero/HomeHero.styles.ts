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
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: calc(100vh - 5rem);
  padding: 1.25rem 1.5rem 1.5rem;
  box-sizing: border-box;

  @media (min-width: 1001px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "identity nav"
      "intro role";
    gap: 0;
    height: 100svh;
    padding: 2rem;
  }
`;

export const HeroCanvasSlot = styled.div`
  order: 2;
  width: 100%;
  height: 60%;
  display: flex;
  align-items: flex-end;

  @media (min-width: 1001px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 68vmin;
    height: 68vmin;
    z-index: 1;
    display: block;
    border-radius: 0.5rem;
    overflow: hidden;
  }
`;

export const HeroIdentity = styled.div`
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
    align-self: start;
  }
`;

export const HeroName = styled.h1`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-light);
  text-transform: uppercase;
  line-height: 0.95;
  color: var(--neutral-900);

  /* Fixed 5rem, matching the live hero exactly. */
  @media (min-width: 1001px) {
    font-size: 5rem;
  }

  span {
    display: block;
  }
`;

export const HeroRole = styled.p`
  ${visuallyHidden}

  @media (min-width: 1001px) {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip-path: none;
    white-space: normal;
    grid-area: role;
    align-self: end;
    justify-self: end;
    text-align: right;
    font-family: var(--font-heading);
    font-weight: var(--font-weight-light);
    text-transform: uppercase;
    line-height: 0.95;
    color: var(--neutral-900);
    font-size: 5rem;
  }

  span {
    display: block;
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

  /*
   * Width mirrors the live BottomAlignedBoxContent (50% below 1024, 40% above)
   * rather than a ch-based measure. The narrow justified column is what gives
   * the intro its characteristic line breaking — widening it flattens them out.
   */
  @media (min-width: 1001px) {
    grid-area: intro;
    width: 50%;
    height: 100%;
    align-self: end;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 1.25rem;
    text-align: left;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }

  @media (min-width: 1800px) {
    font-size: 2rem;
  }
`;

export const HeroBio = styled.p`
  color: var(--neutral-900);

  @media (min-width: 1001px) {
    color: var(--neutral-700);
    text-align: justify;
  }
`;

export const HeroNav = styled.nav`
  order: 1;
  display: flex;
  justify-content: space-between;
  font-family: var(--font-heading);

  @media (min-width: 1001px) {
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

  @media (min-width: 1024px) {
    margin-bottom: 0.5rem;
    font-size: 1.75rem;
  }

  @media (min-width: 1800px) {
    font-size: 2rem;
  }
`;
