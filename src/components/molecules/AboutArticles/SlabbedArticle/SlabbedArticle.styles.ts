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
    background-color: ${({ $isActive }) =>
      $isActive ? "var(--accent-color)" : "var(--background-color)"};
    color: ${({ $isActive }) => ($isActive ? "white" : "black")};
    margin: 0;
  }
`;
