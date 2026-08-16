import styled from "styled-components";

export const SectionHeading = styled.h2`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  column-gap: 0.25em;
  font-family: var(--font-heading);
  font-weight: 700;
  text-transform: lowercase;
  line-height: 0.85;
  font-size: clamp(2.5rem, 8vw, 9rem);
`;

export const HeadingFilled = styled.span`
  color: var(--section-ink);
`;

export const HeadingOutlined = styled.span`
  flex: 0 0 100%;
  color: var(--section-ink);

  /* stylelint-disable property-no-vendor-prefix -- no unprefixed equivalent */
  @supports (-webkit-text-stroke: 1px currentcolor) {
    color: transparent;
    -webkit-text-stroke: clamp(1.5px, 0.2vw, 3px) var(--section-ink);
  }
  /* stylelint-enable property-no-vendor-prefix */
`;

export const SectionBody = styled.div`
  margin-top: 1.5rem;
  max-width: 46ch;
`;

export const SectionCta = styled.div`
  display: inline-flex;
  margin-top: auto;
  padding-top: 2rem;
  align-self: flex-end;
`;
