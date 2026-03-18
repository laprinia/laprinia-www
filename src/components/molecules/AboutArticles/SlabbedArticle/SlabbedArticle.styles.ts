import styled from "styled-components";
import { ArticleWrapper } from "../BaseArticle.styles";

export const SlabbedWrapper = styled(ArticleWrapper)<{ $isActive: boolean }>`
  section {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-start;
  }

  section p {
    padding: 0 0.5rem;
    border-radius: var(--border-radius);
    background-color: ${({ $isActive }) =>
      $isActive ? "var(--neutral-700)" : "var(--background-color)"};
    color: ${({ $isActive }) =>
      $isActive ? "var(--support-color)" : "var(--neutral-900)"};
    margin: 0;
  }
`;
