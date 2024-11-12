import React from "react";
import styled from "styled-components";

const getColorIntensity = (color: string) => {
  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  return r + g + b;
};

const Container = styled.section`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const ColorBox = styled.article<{ color: string }>`
  flex: 1;
  background-color: ${(props) => props.color};
`;

const ColorSwatches = ({ colors }: { colors: string[] }) => {
  const sortedColors = colors.sort(
    (a, b) => getColorIntensity(a) - getColorIntensity(b),
  );

  const minWidth = 100 / colors.length;

  return (
    <Container>
      {sortedColors.map((color, index) => (
        <ColorBox
          key={index}
          color={color}
          style={{ minWidth: `${minWidth}%` }}
        />
      ))}
    </Container>
  );
};

export default ColorSwatches;
