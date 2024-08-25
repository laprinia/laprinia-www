import styled from "styled-components";

const Article = styled.article<{ isActive: boolean }>`
  font-family: var(--font-heading);
  font-size: var(--font-size-M);

  h2 {
    font-size: var(--font-size-M);
    font-weight: var(--font-weight-semibold);
  }
  section {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-start;
    height: 100%;
  }
  p {
    text-align: justify;
    background-color: ${({ isActive }) =>
      isActive ? "var(--accent-color)" : "var(--background-color)"};
    color: ${({ isActive }) => (isActive ? "white" : "black")};
    margin: 0;
  }
`;

const KeyStrengthsArticle = ({
  heading,
  slabs,
  isActive,
}: {
  heading: string;
  slabs: string[];
  isActive: boolean;
}) => {
  return (
    <Article isActive={isActive}>
      <h2>{heading}</h2>
      <section>
        {slabs.map((slab, index) => (
          <p key={index}>{slab}</p>
        ))}
      </section>
    </Article>
  );
};

export default KeyStrengthsArticle;
