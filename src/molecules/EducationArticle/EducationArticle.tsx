import SectionedArticle from "../SectionedArticle/SectionedArticle";

const EducationArticle = () => {
  return (
    <SectionedArticle aria-labelledby="education" heading={"D) Education"}>
      <section>
        <p>
          2020-2022 Master's Degree in <strong>Computer Graphics</strong>
        </p>
        <p>Politehnica University of Bucharest</p>
      </section>
      <section>
        <p>
          2017-2020 Bachelor's Degree in <strong>IT</strong>
        </p>
        <p>Bucharest Academy of Economic Studies</p>
      </section>
    </SectionedArticle>
  );
};
export default EducationArticle;
