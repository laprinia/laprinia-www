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
        <p>
          2025 <strong>Visual Design & Branding</strong>, SuperHi
        </p>
      </Section>
      <Section>
        <p>
          2025 <strong>Graphic Design Specialization</strong>, Coursera
        </p>
      </Section>
      <Section>
        <p>
          2024 <strong>Introduction to User Design</strong>, SuperHi
        </p>
      </Section>
      <Section>
        <p>
          2023 <strong>Advanced CSS and Sass</strong>, Udemy
        </p>
      </Section>
      <Section>
        <p>
          2023 <strong>ReactJS - Mastering Redux</strong>, Udemy
        </p>
      </Section>
    </SectionedArticle>
  );
};
export default CertificationArticle;
