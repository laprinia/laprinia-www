import styled from "styled-components";

export const HeadshotButtonContainerWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 900px) {
  margin-bottom: 1.5rem;
`;

export const HeadshotButton = styled.a`
  flex: 0 0 auto;
  height: 2.25rem;
  border: none;
  background: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.75rem;
  text-decoration: none;
  transition: background-color 0.2s ease;

  @media (min-width: 1800px) {
    height: 2.75rem;
  }

  img {
    height: 1.1rem;
    width: 1.1rem;
    object-fit: contain;
    flex-shrink: 0;

    @media (min-width: 1800px) {
      height: 1.3rem;
      width: 1.3rem;
    }
  }

  &:hover {
    background-color: var(--darker-accent-color);
  }
`;

export const ButtonLabel = styled.span`
  font-size: 0.8rem;
  font-weight: var(--font-weight-regular, 400);
  white-space: nowrap;

  @media (min-width: 1800px) {
    font-size: 0.9rem;
  }
`;
