import styled from "styled-components";
import { ScrollRoot } from "../../atoms/ScrollArea/ScrollArea";

export const BottomSection = styled.section`
  height: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const TextContainer = styled.aside`
  flex: 1;
  height: 95%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding-top: 0rem;
    border: none;
    width: 100%;
    padding-bottom: 1rem;
    height: auto;
  }
`;

export const Header = styled.h1`
  font-size: calc(1.2 * var(--font-size-heading1-desktop));
  font-weight: var(--font-weight-semibold);
  color: var(--accent-color);
  @media (max-width: 900px) {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
`;

export const MobileColorSwatches = styled.aside`
  display: none;
  @media (max-width: 900px) {
    display: block;
    height: 2rem;
    width: 100%;
  }
`;

export const LoopingTextWrapper = styled.aside`
  width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  padding-bottom: 1rem;
  @media (max-width: 900px) {
    margin-bottom: 0.5rem;
  }
`;

export const StyledScrollRoot = styled(ScrollRoot)`
  height: 100%;
  max-height: 100%;

  @media (max-width: 900px) {
    height: auto;
    padding-bottom: 4rem;
  }
`;

export const Section = styled.section`
  margin-bottom: 1rem;
  @media (max-width: 1280px) {
    font-size: var(--font-size-body-desktop);
  }

  @media (max-width: 1024px) {
    font-size: var(--font-size-body-tablet);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-body-phone);
  }
  @media (min-width: 1800px) {
    font-size: var(--font-size-body-xl);
  }
  h2,
  h3 {
    font-size: var(--font-size-base-desktop);
    font-weight: var(--font-weight-semibold);
    margin-bottom: 0.5rem;
  }
  strong {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-base-desktop);
  }
  p {
    font-weight: var(--font-weight-light);
    margin-bottom: 0.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
  code {
    font-size: 14px;
    font-weight: var(--font-weight-light);
    background-color: var(--neutral-700);
    color: var(--support-color);
    border-radius: var(--border-radius);
    padding: 0.1em 0.3em;
  }
`;
