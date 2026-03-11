import styled from "styled-components";
import { ReactNode } from "react";

const Paragraph = styled.p<{ sizing: number; fontColor: string }>`
  text-align: center;
  color: ${({ fontColor }) => fontColor};
`;

const DummyParagraph = ({
  sizing = 1.5,
  fontColor = "var(--accent-color)",
  children,
}: {
  sizing?: number;
  fontColor?: string;
  children: ReactNode;
}) => {
  return (
    <Paragraph sizing={sizing} fontColor={fontColor}>
      {children}
    </Paragraph>
  );
};

export default DummyParagraph;
