import { type ReactNode } from "react";
import {
  ContainerWrapper,
  Legend,
  LetterBadge,
  GridContainer,
} from "./PortfolioContainer.styles";

const PortfolioContainer = ({
  category,
  no,
  children,
}: {
  category: string;
  no: string;
  children: ReactNode;
}) => {
  return (
    <ContainerWrapper>
      <Legend>
        <LetterBadge>{no}</LetterBadge>
        {category}
      </Legend>
      <GridContainer>{children}</GridContainer>
    </ContainerWrapper>
  );
};

export default PortfolioContainer;
