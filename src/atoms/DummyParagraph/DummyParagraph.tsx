import styled from "styled-components";
import { ReactNode } from "react";

const Paragraph = styled.p<{ sizing: number }>`
  font-size: ${({ sizing }) => sizing}rem;
  text-align: center;
`;

const DummyParagraph = ({
  sizing = 1.5,
  children,
}: {
  sizing?: number;
  children: ReactNode;
}) => {
  return <Paragraph sizing={sizing}>{children}</Paragraph>;
};

export default DummyParagraph;
