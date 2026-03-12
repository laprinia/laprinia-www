import { DescriptionContainer } from "./Description.styles";

const Description = ({ content }: { content: string }) => {
  return (
    <DescriptionContainer aria-labelledby="description">
      <p>{content}</p>
    </DescriptionContainer>
  );
};

export default Description;
