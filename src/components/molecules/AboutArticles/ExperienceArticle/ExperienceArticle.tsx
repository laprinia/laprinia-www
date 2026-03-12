import SectionedArticle from "../SectionedArticle/SectionedArticle";
import { Section } from "./ExperienceArticle.styles";

const ExperienceArticle = () => {
  return (
    <SectionedArticle aria-labelledby="experience" heading={"A) EXPERIENCE"}>
      <Section>
        <p>
          2025-now Design Engineer at <strong>In The Pocket</strong>
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
