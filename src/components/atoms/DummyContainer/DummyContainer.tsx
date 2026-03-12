import { ReactNode } from "react";
import { Container } from "./DummyContainer.styles";

const DummyContainer = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default DummyContainer;
