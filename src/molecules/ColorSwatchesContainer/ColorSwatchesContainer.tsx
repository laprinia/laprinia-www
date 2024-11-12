import ColorSwatches from "../ColorSwatches/ColorSwatches";
import React from "react";
import styled from "styled-components";

const Container = styled.aside`
  height: 100%;
  width: 100%;
  @media (max-width: 900px) {
    flex: 0 0 5rem;
    width: 100%;
  }
`;
const ColorSwatchesContainer = ({ colors }: { colors: string[] }) => {
  return (
    <Container aria-labelledby="color-swatches">
      <ColorSwatches colors={colors} />
    </Container>
  );
};

export default ColorSwatchesContainer;
