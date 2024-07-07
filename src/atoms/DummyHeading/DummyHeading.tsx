import styled from "styled-components";
import { ReactNode } from "react";

const Heading = styled.h1<{ sizing: number; fontColor: string }>`
  font-family: var(--font-heading);
  font-size: ${({ sizing }) => sizing}rem;
  color: ${({ fontColor }) => fontColor};
  margin-bottom: 1rem;
  text-align: center;
`;

const DummyHeading = ({
  sizing = 2,
  fontColor = "var(--accent-color)",
  children,
}: {
  sizing?: number;
  fontColor?: string;
  children: ReactNode;
}) => {
  return (
    <Heading sizing={sizing} fontColor={fontColor}>
      {children}
    </Heading>
  );
};

export default DummyHeading;
