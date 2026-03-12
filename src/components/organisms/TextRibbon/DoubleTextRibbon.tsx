import LoopingText from "../../molecules/LoopingText/LoopingText";
import { TechnologiesContainer } from "./DoubleTextRibbon.styles";

const DoubleTextRibbon = ({ tags }: { tags: string[] }) => {
  return (
    <TechnologiesContainer aria-labelledby="skills">
      <LoopingText items={tags} />
      <LoopingText items={tags.reverse()} isReverse />
    </TechnologiesContainer>
  );
};

export default DoubleTextRibbon;
