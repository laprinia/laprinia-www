import ColorSwatches from "../ColorSwatches/ColorSwatches";
import { Container } from "./ColorSwatchesContainer.styles";

const ColorSwatchesContainer = ({ colors }: { colors: string[] }) => {
  return (
    <Container aria-labelledby="color-swatches">
      <ColorSwatches colors={colors} />
    </Container>
  );
};

export default ColorSwatchesContainer;
