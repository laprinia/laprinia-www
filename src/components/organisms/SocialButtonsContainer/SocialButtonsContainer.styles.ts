import styled from "styled-components";

export const HeadshotButtonContainerWrapper = styled.nav`
  width: 100%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-end;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    height: auto;
    justify-content: space-evenly;
  }
`;

export const HeadshotButton = styled.a`
  flex: 1 1 auto;
  height: 2rem;
  max-width: 4rem;
  min-width: 4rem;
  border: none;
  background: var(--accent-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0.5rem;
  text-decoration: none;

  @media (max-width: 900px) {
    max-width: 8rem;
    min-width: 4rem;
  }

  @media (min-width: 1800px) {
    height: 3rem;
    max-width: 4rem;
    min-width: 4rem;
  }

  img {
    transition: transform 0.3s ease-in-out;
    height: 100%;
    width: auto;
    display: block;
  }

  &:hover {
    background-color: var(--darker-accent-color);
  }

  &:hover img {
    transform: scale(1.1);
  }
`;
