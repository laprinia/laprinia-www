import { Container } from "./BisectorText.styles";

const BisectorText = ({ paragraphs }: { paragraphs: string[] }) => {
  return (
    <Container>
      <p className="first">{paragraphs[0]}</p>
      <p className="second">{paragraphs[1]}</p>
      <p className="third">{paragraphs[2]}</p>
    </Container>
  );
};

export default BisectorText;
