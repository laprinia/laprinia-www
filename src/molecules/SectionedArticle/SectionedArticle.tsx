import React from "react";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  font-family: var(--font-heading);
  font-size: var(--font-size-M);
  section {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    margin-right: 1rem;
  }
  h2 {
    font-size: var(--font-size-M);
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
