import { type ReactNode } from "react";
import { ArticleWrapper } from "../BaseArticle.styles";

const SectionedArticle = ({
  heading,
  ariaLabel,
  children,
}: {
  heading: string;
  ariaLabel: string;
  children: ReactNode;
}) => {
  return (
    <ArticleWrapper aria-labelledby={ariaLabel}>
      <h2>{heading}</h2>
      {children}
    </ArticleWrapper>
  );
};

export default SectionedArticle;
