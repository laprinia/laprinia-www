import SectionedArticle from "../SectionedArticle/SectionedArticle";
import { ArticleSection } from "../BaseArticle.styles";

const ExperienceArticle = () => {
  return (
    <SectionedArticle ariaLabel="experience" heading={"A) EXPERIENCE"}>
      <ArticleSection>
        <p>
          2025-now Design Engineer at <strong>In The Pocket</strong>
        </p>
      </ArticleSection>
      <ArticleSection>
        <p>
          2024-2025 Web Developer & Designer at <strong>Siemens Energy</strong>
        </p>
      </ArticleSection>
      <ArticleSection>
        <p>
          2023-2024 Frontend Engineer at <strong>Adobe</strong>
        </p>
      </ArticleSection>
      <ArticleSection>
        <p>
          2022-2023 Web Developer at <strong>Ubisoft</strong>
        </p>
      </ArticleSection>
      <ArticleSection>
        <p>
          2021-2022 Fullstack Engineer at <strong>Adobe</strong>
        </p>
      </ArticleSection>
    </SectionedArticle>
  );
};
export default ExperienceArticle;
