import SectionedArticle from "../SectionedArticle/SectionedArticle";

const ExperienceArticle = () => {
  return (
    <SectionedArticle aria-labelledby="experience" heading={"A) EXPERIENCE"}>
      <section>
        <p>
          2023-2024 Frontend Engineer at <strong>Adobe</strong>
        </p>
        <p>
          Developed a microfrontend for Adobe Analytics using React, TypeScript,
          and D3.
        </p>
      </section>
      <section>
        <p>
          2022-2023 Web Developer at <strong>Ubisoft</strong>
        </p>
        <p>
          Enhanced functionalities and workflows for most used web product,
          using React, Typescript, Node.js & SASS.
        </p>
      </section>
      <section>
        <p>
          2021-2022 Fullstack Engineer at <strong>Adobe</strong>
        </p>
        <p>
          Prototyped and migrated Angular functionalities to new React
          microfrontend. Used TypeScript, Node.js, Adobe XD & Jest.
        </p>
      </section>
    </SectionedArticle>
  );
};
export default ExperienceArticle;
