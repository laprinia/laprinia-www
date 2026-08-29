import styled from "styled-components";
import { Row } from "../../v2/WorkList/WorkList.styles";
import { Entry } from "../../v2/WhatIDo/WhatIDo.styles";

export const PanelHead = styled.div`
  padding: 0 var(--panel-inset) var(--space-8);
`;

export const PanelTitle = styled.h2`
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: var(--font-size-title);
  line-height: 0.95;
  text-transform: lowercase;
  text-wrap: balance;
`;

export const BleedSlot = styled.div`
  ${Row}, ${Entry} {
    padding-inline: var(--panel-inset);
  }
`;

export const InsetSlot = styled.div`
  padding-inline: var(--panel-inset);
`;

export const PanelActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-8) var(--panel-inset) var(--space-12);
`;
