import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const CardContainer = styled.article`
  overflow: hidden;
  border-radius: var(--border-radius);
  height: 18.7rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (min-width: 1800px) {
    height: 30.5rem;
  }
`;

export const ImageContainer = styled.figure`
  width: 100%;
  flex: 1;
  margin: 0;
  border-radius: var(--border-radius);
  position: relative;
  overflow: hidden;

  img {
    border-radius: var(--border-radius);
  }
`;

export const TextContainer = styled.figcaption`
  text-align: left;
  margin: 0;
  width: 100%;
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ProjectName = styled.h2`
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base-desktop);
  margin: 0;

  @media (min-width: 1800px) {
    font-size: var(--font-size-base-xl);
  }
`;

export const Year = styled.h3`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-base-desktop);
  color: var(--neutral-500);
  margin: 0;

  @media (min-width: 1800px) {
    font-size: var(--font-size-base-xl);
  }
`;

export const TechText = styled.p`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: var(--font-weight-regular);
  margin: 0;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35rem;

  span {
    background-color: var(--neutral-700);
    color: var(--support-color);
    padding: 0.15em 0.4em;
    border-radius: var(--border-radius);
  }

  @media (min-width: 1800px) {
    font-size: 0.8rem;
  }
`;
