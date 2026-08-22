import styled from "styled-components";

export const SectionBody = styled.div`
  min-width: 0;
`;

export const SectionActions = styled.div`
  --actions-gap: 0.75rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: var(--actions-gap);
  align-self: flex-end;
`;
