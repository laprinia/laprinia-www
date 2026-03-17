import styled, { css } from "styled-components";

export const articleTypography = css`
  h2 {
    font-size: var(--font-size-base-desktop);
    font-weight: var(--font-weight-regular);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: var(--font-size-body-desktop);
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

export const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  ${articleTypography}
`;

export const ArticleSection = styled.section`
  margin-bottom: 0.75rem;

  p {
    font-weight: var(--font-weight-light);
  }

  p strong {
    font-weight: var(--font-weight-regular);
  }

  p + p {
    margin-top: 0.25rem;
  }
`;
