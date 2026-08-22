import {
  HeadingBlock,
  HeadingIndex,
  HeadingText,
} from "./SectionHeading.styles";

export type SectionHeadingProps = {
  id?: string;
  index?: number;
  text: string;
};

const SectionHeading = ({ id, index, text }: SectionHeadingProps) => (
  <HeadingBlock>
    {index === undefined ? null : (
      <HeadingIndex aria-hidden="true">
        {String(index).padStart(2, "0")}
      </HeadingIndex>
    )}
    <HeadingText id={id}>{text}</HeadingText>
  </HeadingBlock>
);

export default SectionHeading;
