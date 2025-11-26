import styled from "styled-components";
import SectionedArticle from "../SectionedArticle/SectionedArticle";

const Section = styled.section`
  margin-bottom: 2rem;
  margin-right: 1rem;
  margin-top: 0.5rem;

  p strong {
    font-weight: var(--font-weight-regular);
  }
`;

const CertificationArticle = () => {
  return (
    <SectionedArticle
      aria-labelledby="experience"
      heading={"E) CERTIFICATIONS"}
    >
      <Section>
        <p>2024 Figma UI/UX Design Essentials, Udemy</p>
      </Section>
      <Section>
        <p>2023 Advanced CSS and Sass, Udemy</p>
      </Section>
      <Section>
        <p>2023 ReactJS - Mastering Redux, Udemy</p>
      </Section>
    </SectionedArticle>
  );
};
export default CertificationArticle;
