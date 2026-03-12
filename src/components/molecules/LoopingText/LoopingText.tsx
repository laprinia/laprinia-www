import { Fragment } from "react";
import {
  Divider,
  ScrollingText,
  ScrollingTextContainer,
  ScrollingTextInner,
  ScrollingTextItem,
} from "./LoopingText.styles";

const LoopingText = ({
  items,
  marqueeSpeed = "80s",
  padding = "1.5rem",
  isReverse = false,
  withDivider = false,
}: {
  items: string[];
  marqueeSpeed?: string;
  padding?: string;
  isReverse?: boolean;
  withDivider?: boolean;
}) => {
  return (
    <ScrollingTextContainer>
      <ScrollingTextInner marqueeSpeed={marqueeSpeed} isReverse={isReverse}>
        <ScrollingText>
          {items.map((item, index) => (
            <Fragment key={index}>
              <ScrollingTextItem padding={padding}>{item}</ScrollingTextItem>
              {withDivider && <Divider>*</Divider>}
            </Fragment>
          ))}
          {items.map((item, index) => (
            <Fragment key={index + items.length}>
              <ScrollingTextItem padding={padding}>{item}</ScrollingTextItem>
              {withDivider && index < items.length - 1 && <Divider>*</Divider>}
            </Fragment>
          ))}
        </ScrollingText>
      </ScrollingTextInner>
    </ScrollingTextContainer>
  );
};

export default LoopingText;
