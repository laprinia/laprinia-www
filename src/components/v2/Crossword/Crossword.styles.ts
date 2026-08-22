import styled, { keyframes } from "styled-components";

const revealLetter = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Board = styled.div`
  --crossword-block: var(--neutral-300);
  --crossword-rule: var(--neutral-400);

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(var(--space-6), 3vw, var(--space-10));
  width: 100%;

  @media (min-width: 1230px) {
    display: grid;
    flex: 1;
    min-height: 0;
    grid-template-columns: min(52rem, var(--board-h)) minmax(0, 1fr);
    gap: clamp(var(--space-8), 4vw, var(--space-16));
    align-items: stretch;
  }
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-6), 3vw, var(--space-10));
  min-width: 0;
  width: 100%;

  @media (min-width: 1230px) {
    justify-content: space-between;
  }
`;

export const GridWrap = styled.div`
  width: 100%;
  min-width: 0;
`;

export const Grid = styled.div<{ $cols: number; $compactRows: string }>`
  --crossword-gap: var(--space-1);

  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols}, minmax(0, 1fr));
  grid-template-rows: ${({ $compactRows }) => $compactRows};
  gap: var(--crossword-gap);
  width: 100%;

  @media (min-width: 1230px) {
    grid-template-rows: none;
  }
`;

export const Cell = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--radius-sm);
`;

export const BlockCell = styled(Cell)`
  background-color: var(--crossword-block);

  &[data-pad="true"] {
    display: none;
  }

  @media (min-width: 1230px) {
    &[data-pad="true"] {
      display: block;
    }
  }
`;

export const OpenCell = styled(Cell)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--crossword-rule);
  background-color: var(--neutral-000);
  transition: background-color 0.18s ease;

  &[data-lit="true"] {
    background-color: var(--support-color);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Letter = styled.span`
  color: var(--accent-color);
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: clamp(0.75rem, 2.6vw, 1.5rem);
  line-height: 1;
  opacity: 0;
  animation: ${revealLetter} 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--cell-delay, 0ms);

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    animation: none;
  }
`;

export const CellNumber = styled.i`
  position: absolute;
  top: 0;
  left: 2px;
  color: var(--crossword-rule);
  font-family: var(--font-mono);
  font-style: normal;
  font-size: clamp(0.4rem, 1vw, 0.625rem);
  line-height: 1.4;
  opacity: 0.6;
`;

export const Photo = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: var(--radius-sm);
  background-color: var(--crossword-block);

  img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Clues = styled.dl`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-4) clamp(var(--space-8), 4vw, var(--space-14));
  width: 100%;
  margin: 0;
  padding-top: clamp(var(--space-4), 2vw, var(--space-6));
  border-top: 1px solid var(--accent-color);

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1230px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Clue = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  color: var(--accent-color);
  font-size: var(--font-size-body);
  line-height: 1.5;
`;

export const ClueNumber = styled.dt`
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-weight: 700;
`;

export const ClueText = styled.dd`
  margin: 0;
`;

export const Solution = styled.p`
  grid-column: 1 / -1;
  margin-top: clamp(var(--space-4), 2vw, var(--space-6));
  color: var(--accent-color);
  font-size: var(--font-size-ui-xl);
  line-height: 1.3;
  text-wrap: balance;

  @media (min-width: 1230px) {
    font-size: var(--font-size-title);
    line-height: 1.15;
  }

  strong {
    display: inline;
    font-family: var(--font-mono);
    font-weight: 700;
    background-image: linear-gradient(
      var(--support-color),
      var(--support-color)
    );
    background-repeat: no-repeat;
    background-position: 0 88%;
    background-size: 100% 0.42em;
    box-decoration-break: clone;

    /* stylelint-disable property-no-vendor-prefix -- Safari needs the prefix */
    -webkit-box-decoration-break: clone;
    /* stylelint-enable property-no-vendor-prefix */
  }
`;
