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

const EducationArticle = () => {
  return (
    <SectionedArticle aria-labelledby="education" heading={"D) EDUCATION"}>
      <Section>
        <p>
          2020-2022 Master's Degree in <strong>Computer Graphics</strong>
        </p>
        <p>Politehnica University of Bucharest</p>
      </Section>
      <Section>
        <p>
          2017-2020 Bachelor's Degree in <strong>IT</strong>
        </p>
        <p>Bucharest Academy of Economic Studies</p>
      </Section>
    </SectionedArticle>
  );
};
export default EducationArticle;
