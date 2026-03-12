import SectionedArticle from "../SectionedArticle/SectionedArticle";
import { Section } from "./CertificationArticle.styles";

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
