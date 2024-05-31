import styled from "styled-components";
import { ReactNode } from "react";

const Heading = styled.h1<{ sizing: number }>`
  font-family: var(--font-heading);
  font-size: ${({ sizing }) => sizing}rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const DummyHeading = ({
  sizing = 2,
  children,
}: {
  sizing?: number;
  children: ReactNode;
}) => {
  return <Heading sizing={sizing}>{children}</Heading>;
};

export default DummyHeading;
