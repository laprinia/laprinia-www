import styled from "styled-components";

export interface HeadingProps {
  sizing: number;
  fontColor: string;
}

export const Heading = styled.h1<HeadingProps>`
  color: ${({ fontColor }) => fontColor};
  margin-bottom: 1rem;
  text-align: center;
`;
