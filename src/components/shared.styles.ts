import styled from "styled-components";
import { media } from "../styles/breakpoints";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: clamp(var(--space-5), 4vw, var(--space-12));
`;

export const Section = styled.section`
  position: relative;
  z-index: 2;
`;

export const Rail = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(var(--space-6), 4vw, var(--space-12));
  align-items: start;

  ${media.lg} {
    grid-template-columns: minmax(0, 180px) minmax(0, 1fr);
  }
`;

export const RailLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  ${media.lg} {
    position: sticky;
    top: var(--space-24);
  }
`;

export const RailHeading = styled.h2`
  margin: 0;
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-ui-xl);
  line-height: 1.2;
  text-transform: lowercase;
  color: var(--accent-color);
`;

export const RailNote = styled.p`
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  line-height: 1.6;
  color: var(--section-muted);
`;

export const Mark = styled.span`
  display: inline;
  background-image: linear-gradient(var(--support-color), var(--support-color));
  background-repeat: no-repeat;
  background-position: 0 88%;
  background-size: 100% 0.42em;
  box-decoration-break: clone;

  /* stylelint-disable property-no-vendor-prefix -- Safari needs the prefix */
  -webkit-box-decoration-break: clone;
  /* stylelint-enable property-no-vendor-prefix */
`;
