import { type ReactNode } from "react";
import {
  ContainerWrapper,
  CategoryHeader,
  CategoryText,
  Line,
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
      <CategoryHeader>
        <CategoryText>{`${no}) ${category}`}</CategoryText>
      </CategoryHeader>
      <Line decorative />
      <GridContainer>{children}</GridContainer>
    </ContainerWrapper>
  );
};

export default PortfolioContainer;
