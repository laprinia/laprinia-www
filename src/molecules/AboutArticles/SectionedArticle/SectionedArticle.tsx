import React from "react";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;

  section {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    margin-right: 1rem;

    p strong {
      font-weight: var(--font-weight-regular);
    }
  }

  h2 {
    font-size: var(--font-size-base-desktop);
    font-weight: var(--font-weight-semibold);
    font-family: var(--font-heading);
  }

  p {
    text-align: justify;
    font-size: var(--font-size-body-desktop);
  }

  p:nth-child(2) {
    margin-top: 0.25rem;
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

const SectionedArticle = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <Article aria-labelledby="experience">
      <h2>{heading}</h2>
      {children}
    </Article>
  );
};

export default SectionedArticle;
