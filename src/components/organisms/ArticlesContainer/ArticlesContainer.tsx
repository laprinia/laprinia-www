import { ReactNode } from "react";
import { CurriculumTextContainer, Column } from "./ArticlesContainer.styles";

const ArticlesContainer = ({
  leftColumn,
  rightColumn,
}: {
  leftColumn: ReactNode[];
  rightColumn: ReactNode[];
}) => {
  return (
    <CurriculumTextContainer aria-labelledby="curriculum">
      <Column>{leftColumn}</Column>
      <Column>{rightColumn}</Column>
    </CurriculumTextContainer>
  );
};

export default ArticlesContainer;
