import styled from "styled-components";

export interface ParagraphProps {
  sizing: number;
  fontColor: string;
}

export const Paragraph = styled.p<ParagraphProps>`
  text-align: center;
  color: ${({ fontColor }) => fontColor};
`;
