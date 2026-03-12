import { Circle, Container, Text } from "./PulsatingBadge.styles";

const PulsatingBadge = () => {
  return (
    <Container
      role="status"
      aria-label="Availability status: Available for work"
    >
      <Circle />
      <Text>AVAILABLE FOR WORK</Text>
    </Container>
  );
};

export default PulsatingBadge;
