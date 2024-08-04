import React from "react";
import styled from "styled-components";

interface ColorBoxesProps {
  colors: string[];
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

const Box = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  aspect-ratio: 1;
`;

const ColorSwatches: React.FC<ColorBoxesProps> = ({ colors }) => {
  const getColorIntensity = (color: string) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    return r + g + b; // Simple sum of RGB values
  };

  const sortedColors = colors.sort(
    (a, b) => getColorIntensity(a) - getColorIntensity(b),
  );

  return (
    <Container>
      {sortedColors.map((color, index) => (
        <Box key={index} bgColor={color} />
      ))}
    </Container>
  );
};

export default ColorSwatches;
