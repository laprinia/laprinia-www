import SectionedArticle from "../SectionedArticle/SectionedArticle";
import { ArticleSection } from "../BaseArticle.styles";

const CertificationArticle = () => {
  return (
    <SectionedArticle ariaLabel="certifications" heading={"E) CERTIFICATIONS"}>
      <ArticleSection>
        <p>
          2025 <strong>Visual Design & Branding</strong>, SuperHi
        </p>
      </ArticleSection>
      <ArticleSection>
        <p>
          2025 <strong>Graphic Design Specialization</strong>, Coursera
        </p>
      </ArticleSection>
      <ArticleSection>
        <p>
          2024 <strong>Introduction to User Design</strong>, SuperHi
        </p>
      </ArticleSection>
      <ArticleSection>
        <p>
          2023 <strong>Advanced CSS and Sass</strong>, Udemy
        </p>
      </ArticleSection>
      <ArticleSection>
        <p>
          2023 <strong>ReactJS - Mastering Redux</strong>, Udemy
        </p>
      </ArticleSection>
    </SectionedArticle>
  );
};
export default CertificationArticle;
