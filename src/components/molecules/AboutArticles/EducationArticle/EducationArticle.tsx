import SectionedArticle from "../SectionedArticle/SectionedArticle";
import { ArticleSection } from "../BaseArticle.styles";

const EducationArticle = () => {
  return (
    <SectionedArticle ariaLabel="education" heading={"D) EDUCATION"}>
      <ArticleSection>
        <p>
          2020-2022 Master's Degree in <strong>Computer Graphics</strong>
        </p>
        <p>Politehnica University of Bucharest</p>
      </ArticleSection>
      <ArticleSection>
        <p>
          2017-2020 Bachelor's Degree in <strong>IT</strong>
        </p>
        <p>Bucharest Academy of Economic Studies</p>
      </ArticleSection>
    </SectionedArticle>
  );
};
export default EducationArticle;
