import { type ReactNode } from "react";
import { Article } from "./SectionedArticle.styles";

const SectionedArticle = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => {
  return (
    <Article aria-labelledby="experience">
      <h2>{heading}</h2>
      {children}
    </Article>
  );
};

export default SectionedArticle;
