import styled from "styled-components";
import LoopingText from "../../molecules/LoopingText/LoopingText";

const TechnologiesContainer = styled.section`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 900px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`;

const DoubleTextRibbon = ({ tags }: { tags: string[] }) => {
  return (
    <TechnologiesContainer aria-labelledby="skills">
      <LoopingText items={tags} />
      <LoopingText items={tags.reverse()} isReverse />
    </TechnologiesContainer>
  );
};

export default DoubleTextRibbon;
