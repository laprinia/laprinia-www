import styled from "styled-components";

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(4.5rem, 9vw, 8rem);
`;

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
  color: var(--section-ink);
`;

export const HeadingFilled = styled.span`
  color: var(--section-ink);
`;

export const HeadingOutlined = styled.span`
  color: var(--section-ink);

  /* stylelint-disable property-no-vendor-prefix -- no unprefixed equivalent */
  @supports (-webkit-text-stroke: 1px currentcolor) {
    color: transparent;
    -webkit-text-stroke: var(--text-stroke-width) var(--section-ink);
  }
  /* stylelint-enable property-no-vendor-prefix */
`;

export const EntryList = styled.div`
  margin-top: 2.75rem;
  border-bottom: 1px solid var(--section-ink);
`;

export const LabGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 3rem 2rem;
  margin: 2.75rem 0 0;
  padding: 0;
  list-style: none;
`;
