import styled from "styled-components";
import {
  ScrollRoot,
  ScrollBar,
} from "../components/atoms/ScrollArea/ScrollArea";

export const PortfolioScrollRoot = styled(ScrollRoot)`
  flex: 1;
  margin-right: 0.5rem;
`;

export const Content = styled.div`
  padding: calc(var(--nav-height) + 2rem) 1.5rem 1.5rem;
`;

export const PortfolioScrollBar = styled(ScrollBar)`
  top: var(--nav-height);
`;
