import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

export const ColorBox = styled.article<{ color: string }>`
  flex: 1;
  background-color: ${(props) => props.color};
`;
