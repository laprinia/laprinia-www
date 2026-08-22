import styled from "styled-components";

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: stretch;
  gap: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: 4rem;
  }
`;

export const AboutColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 54ch;
`;

export const AboutParagraph = styled.p`
  font-size: var(--font-size-body);
  line-height: 1.55;
`;

export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const ColumnAction = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
`;

export const ContactList = styled.dl`
  width: 100%;
  margin: 0;
  border-top: 1px solid var(--section-ink);
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1.5rem;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--section-ink);
`;

export const ContactLabel = styled.dt`
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.75;
`;

export const ContactValue = styled.dd`
  margin: 0;
  text-align: right;
  font-size: var(--font-size-body);
  line-height: 1.4;
`;

export const ContactLinks = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-2);

  a {
    color: inherit;
    text-underline-offset: 0.2em;

    &:focus-visible {
      outline: 2px solid var(--section-ink);
      outline-offset: 3px;
    }
  }
`;

export const ContactSeparator = styled.span`
  opacity: 0.6;
`;
