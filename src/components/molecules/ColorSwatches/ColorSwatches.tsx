import { ColorBox, Container } from "./ColorSwatches.styles";

const getColorIntensity = (color: string) => {
  const rgb = parseInt(color.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  return r + g + b;
};

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
