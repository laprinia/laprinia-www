import styled from "styled-components";

const Article = styled.article<{ isActive: boolean }>`
  h2 {
    font-size: var(--font-size-base-desktop);
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
