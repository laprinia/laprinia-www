import styled from "styled-components";

const CurriculumTextContainer = styled.section`
  flex: 1 1 auto;
  display: flex;
  padding-bottom: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    padding-bottom: 0rem;
  }
`;

const Column = styled.article`
  flex: 1;
  padding-right: 0 0.5rem;

  @media (max-width: 900px) {
    padding-right: 0;
    width: 100%;
  }
`;

const ArticlesContainer = ({
  leftColumn,
  rightColumn,
}: {
  leftColumn: React.ReactNode[];
  rightColumn: React.ReactNode[];
}) => {
  return (
    <CurriculumTextContainer aria-labelledby="curriculum">
      <Column>{leftColumn}</Column>
      <Column>{rightColumn}</Column>
    </CurriculumTextContainer>
  );
};

export default ArticlesContainer;
