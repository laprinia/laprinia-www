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
  }
  p {
    text-align: justify;
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
