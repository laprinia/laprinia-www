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
const ExperienceArticle = () => {
  return (
    <SectionedArticle aria-labelledby="experience" heading={"A) EXPERIENCE"}>
      <Section>
        <p>
          2024-current Design Engineer at <strong>In The Pocket</strong>
        </p>
      </Section>
      <Section>
        <p>
          2024-2025 Web Developer & Designer at <strong>Siemens Energy</strong>
        </p>
      </Section>
      <Section>
        <p>
          2023-2024 Frontend Engineer at <strong>Adobe</strong>
        </p>
      </Section>
      <Section>
        <p>
          2022-2023 Web Developer at <strong>Ubisoft</strong>
        </p>
      </Section>
      <Section>
        <p>
          2021-2022 Fullstack Engineer at <strong>Adobe</strong>
        </p>
      </Section>
    </SectionedArticle>
  );
};
export default ExperienceArticle;
