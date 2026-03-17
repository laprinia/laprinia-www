import SectionedArticle from "../SectionedArticle/SectionedArticle";
import { ArticleSection } from "../BaseArticle.styles";

const LanguageArticle = () => {
  return (
    <SectionedArticle ariaLabel="languages" heading={"F) LANGUAGES"}>
      <ArticleSection>
        <p>Romanian - Native</p>
      </ArticleSection>
      <ArticleSection>
        <p>English - Proficient</p>
      </ArticleSection>
      <ArticleSection>
        <p>Spanish - Beginner</p>
      </ArticleSection>
    </SectionedArticle>
  );
};
export default LanguageArticle;
