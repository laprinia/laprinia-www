import styled from "styled-components";
import { Section } from "../shared.styles";

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(var(--space-6), 3vw, var(--space-12));
  align-items: start;
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: 56ch;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  line-height: 1.6;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

export const MetaRow = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: var(--space-4);
  align-items: baseline;
`;

export const MetaTerm = styled.span`
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--section-muted);
`;

export const MetaDetail = styled.span`
  font-size: var(--font-size-ui-sm);
  text-align: right;
`;

export const Profiles = styled(MetaDetail)`
  display: flex;
  gap: var(--space-3);
  justify-content: flex-end;
`;

export const CtaSlot = styled.div`
  --button-ink: var(--support-color);
  --button-on-ink: var(--way-darker-accent-color);

  margin-top: var(--space-4);
`;

export const AboutSection = styled(Section)`
  padding-block: clamp(var(--space-12), 6vw, var(--space-20))
    clamp(var(--space-16), 8vw, var(--space-28));
`;
