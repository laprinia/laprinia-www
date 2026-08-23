import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

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

const hintPop = keyframes`
  0%   { opacity: 0; scale: 0.92; }
  6%   { opacity: 1; scale: 1; }
  88%  { opacity: 1; scale: 1; }
  100% { opacity: 0; scale: 0.96; }
`;

const hintBob = keyframes`
  0%, 100% { translate: 0 0; }
  50%      { translate: 0 -0.3rem; }
`;

const highlightSweep = keyframes`
  from { background-size: 0% 0.42em; }
  to   { background-size: 100% 0.42em; }
`;

const hintFade = keyframes`
  0%   { opacity: 0; }
  6%   { opacity: 1; }
  88%  { opacity: 1; }
  100% { opacity: 0; }
`;

export const Board = styled.div`
  --crossword-block: var(--neutral-300);
  --crossword-rule: var(--neutral-400);

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(var(--space-6), 3vw, var(--space-10));
  width: 100%;

  @media (min-width: 700px) {
    position: relative;
    display: grid;
    flex: 1;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    grid-template-areas:
      "board solution"
      "clues clues";
    align-content: center;
    column-gap: clamp(var(--space-6), 3vw, var(--space-10));
    row-gap: clamp(var(--space-6), 3vw, var(--space-10));
  }

  @media (min-width: 1230px) {
    min-height: 0;
    grid-template-columns: 40vw minmax(0, 1fr);
    grid-template-rows: auto auto;
    grid-template-areas:
      "board solution"
      "clues .";
    align-content: center;
    column-gap: clamp(var(--space-8), 4vw, var(--space-16));
    row-gap: clamp(var(--space-6), 3vw, var(--space-10));
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-6), 3vw, var(--space-10));
  min-width: 0;

  @media (min-width: 700px) {
    display: contents;
  }
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(var(--space-6), 3vw, var(--space-10));
  min-width: 0;
  width: 100%;

  @media (min-width: 700px) {
    display: contents;
  }
`;

export const CtaSlot = styled.div`
  @media (min-width: 700px) {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

export const GridWrap = styled.div`
  width: 100%;
  min-width: 0;

  @media (min-width: 700px) {
    grid-area: board;
  }
`;

export const Grid = styled.div<{ $cols: number }>`
  --crossword-gap: var(--space-1);

  display: grid;
  grid-template-columns: repeat(${({ $cols }) => $cols}, minmax(0, 1fr));
  gap: var(--crossword-gap);
  width: 100%;

  @media (hover: hover) {
    cursor: none;
  }
`;

export const Cell = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--radius-sm);
`;

export const BlockCell = styled(Cell)`
  background-color: var(--crossword-block);
  transition: background-color 0.18s ease;

  &[data-over="true"] {
    background-color: var(--support-color);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const LetterTile = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  border: 2px solid var(--crossword-rule);
  border-radius: var(--radius-sm);
  background-color: var(--neutral-000);
  transition: background-color 0.18s ease;
  touch-action: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (hover: hover) {
    cursor: none;

    &:active {
      cursor: none;
    }
  }

  &[data-lit="true"] {
    background-color: var(--support-color);
  }

  &[data-dragging="true"] {
    box-shadow: 0 14px 22px rgb(0 0 0 / 22%);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const DragHintAnchor = styled.div`
  position: relative;
  z-index: 5;
  pointer-events: none;
  grid-row: var(--hint-row-sm);
  grid-column: var(--hint-col-sm);

  @media (min-width: 700px) {
    grid-row: var(--hint-row-lg);
    grid-column: var(--hint-col-lg);
  }
`;

export const DragHint = styled.div`
  position: absolute;
  bottom: calc(100% + var(--space-1));
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: max-content;
  padding: var(--space-1) var(--space-3);
  border-radius: 999px;
  background-color: var(--accent-color);
  color: var(--neutral-000);
  font-family: var(--font-mono);
  font-size: var(--font-size-ui-xs);
  line-height: 1;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  animation-name: ${hintPop}, ${hintBob};
  animation-duration: 6s, 2.4s;
  animation-timing-function: ease, ease-in-out;
  animation-delay: var(--reveal-end, 0ms), var(--reveal-end, 0ms);
  animation-iteration-count: 1, infinite;
  animation-fill-mode: forwards, none;

  svg {
    flex-shrink: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    animation-name: ${hintFade};
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
    grid-area: clues;
    align-self: start;
  }
`;

export const Clue = styled.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  color: var(--accent-color);
  font-size: var(--font-size-ui-sm);
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
  color: var(--accent-color);
  font-size: var(--font-size-ui-xl);
  line-height: 1.3;
  text-wrap: balance;

  @media (min-width: 700px) {
    grid-area: solution;
    align-self: center;
    font-size: clamp(1.25rem, 2.4vw, 1.875rem);
    line-height: 1.2;
    text-wrap: pretty;
  }

  @media (min-width: 1230px) {
    gap: var(--space-5);
    font-size: clamp(1.75rem, 2.4vw, 3.25rem);
    line-height: 1.15;
  }

  strong {
    font-family: var(--font-mono);
    font-weight: 700;
    background-image: linear-gradient(
      var(--support-color),
      var(--support-color)
    );
    background-repeat: no-repeat;
    background-position: 0 88%;
    background-size: 0% 0.42em;
    box-decoration-break: clone;
    animation: ${highlightSweep} 0.8s cubic-bezier(0.45, 0, 0.25, 1) forwards;
    animation-delay: var(--reveal-end, 0ms);

    /* stylelint-disable property-no-vendor-prefix -- Safari needs the prefix */
    -webkit-box-decoration-break: clone;
    /* stylelint-enable property-no-vendor-prefix */

    @media (prefers-reduced-motion: reduce) {
      background-size: 100% 0.42em;
      animation: none;
    }
  }
`;
