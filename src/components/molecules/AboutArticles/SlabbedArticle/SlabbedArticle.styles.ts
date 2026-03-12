import styled from "styled-components";

export interface ArticleProps {
  isActive: boolean;
}

export const Article = styled.article<ArticleProps>`
  margin-bottom: 2rem;
  h2 {
    font-size: var(--font-size-base-desktop);
    font-weight: var(--font-weight-regular);
  }
  section {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-start;
    height: 100%;
  }
  p {
    font-size: var(--font-size-body-desktop);
    background-color: ${({ isActive }) =>
      isActive ? "var(--accent-color)" : "var(--background-color)"};
    color: ${({ isActive }) => (isActive ? "white" : "black")};
    margin: 0;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: var(--font-size-heading1-tablet);
    }
    p {
      font-size: var(--font-size-body-tablet);
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: var(--font-size-heading1-phone);
    }
    p {
      font-size: var(--font-size-body-phone);
    }
  }

  @media (min-width: 1800px) {
    h2 {
      font-size: var(--font-size-heading1-xl);
    }
    p {
      font-size: var(--font-size-body-xl);
    }
  }
`;
