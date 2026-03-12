import { ReactNode } from "react";
import { Paragraph } from "./DummyParagraph.styles";

const DummyParagraph = ({
  sizing = 1.5,
  fontColor = "var(--accent-color)",
  children,
}: {
  sizing?: number;
  fontColor?: string;
  children: ReactNode;
}) => {
  return (
    <Paragraph sizing={sizing} fontColor={fontColor}>
      {children}
    </Paragraph>
  );
};

export default DummyParagraph;
