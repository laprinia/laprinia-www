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
  font-size: var(--font-size-display);
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
    -webkit-text-stroke: var(--text-stroke-width) var(--section-ink);
  }
  /* stylelint-enable property-no-vendor-prefix */
`;

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
