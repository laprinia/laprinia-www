import { useCallback, useState, type ReactNode } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { heroPortraitAlt, heroPortraitPath } from "../../../consts.v2";
import {
  crosswordCols,
  crosswordEntries,
  crosswordDragLabel,
  crosswordHintCell,
  crosswordHintCellMobile,
  crosswordPhoto,
  crosswordSolution,
  crosswordSolutionLabel,
} from "../../../consts.v2.crossword";
import {
  Board,
  Main,
  Aside,
  GridWrap,
  Grid,
  BlockCell,
  DragHint,
  DragHintAnchor,
  LetterTile,
  Letter,
  CellNumber,
  Photo,
  CtaSlot,
  Clues,
  Clue,
  ClueNumber,
  ClueText,
  Solution,
} from "./Crossword.styles";

const LETTER_REVEAL_MS = 300;
const LETTER_STEP = 85;
const WORD_GAP = 280;
const START_DELAY = 900;

type OpenCellData = {
  key: string;
  row: number;
  col: number;
  char: string;
  delay: number;
};

const inPhoto = (row: number, col: number) =>
  row >= crosswordPhoto.row &&
  row < crosswordPhoto.row + crosswordPhoto.rowSpan &&
  col >= crosswordPhoto.col &&
  col < crosswordPhoto.col + crosswordPhoto.colSpan;

const buildBoard = () => {
  const cells = new Map<string, OpenCellData>();
  const numbers = new Map<string, number>();
  const wordKeys = new Map<string, string[]>();
  let delay = START_DELAY;

  for (const entry of crosswordEntries) {
    const keys: string[] = [];
    for (let i = 0; i < entry.word.length; i++) {
      const row = entry.direction === "across" ? entry.row : entry.row + i;
      const col = entry.direction === "across" ? entry.col + i : entry.col;
      const key = `${row}-${col}`;
      keys.push(key);
      if (!cells.has(key)) {
        cells.set(key, { key, row, col, char: entry.word[i], delay });
      }
      delay += LETTER_STEP;
    }
    wordKeys.set(entry.word, keys);
    const start = `${entry.row}-${entry.col}`;
    if (!numbers.has(start)) numbers.set(start, entry.number);
    delay += WORD_GAP;
  }

  const wordRows = crosswordEntries.flatMap((entry) =>
    entry.direction === "across"
      ? [entry.row]
      : [entry.row, entry.row + entry.word.length - 1],
  );
  const bandStart = Math.min(...wordRows);
  const bandEnd = Math.max(...wordRows);

  const blocks: { key: string; row: number; col: number }[] = [];
  for (let row = bandStart; row <= bandEnd; row++) {
    for (let col = 0; col < crosswordCols; col++) {
      if (inPhoto(row, col)) continue;
      blocks.push({ key: `${row}-${col}`, row, col });
    }
  }

  return {
    cells: [...cells.values()],
    numbers,
    wordKeys,
    blocks,
    bandStart,
    bandEnd,
  };
};

const { cells, numbers, wordKeys, blocks, bandStart, bandEnd } = buildBoard();

const dropCellSet = new Set(blocks.map((block) => block.key));

const revealEnd =
  Math.max(...cells.map((cell) => cell.delay)) + LETTER_REVEAL_MS;

const gridRow = (row: number) => row - bandStart + 1;

const pointOf = (event: MouseEvent | TouchEvent | PointerEvent) => {
  if ("clientX" in event) return { x: event.clientX, y: event.clientY };
  const touch = event.changedTouches?.[0];
  return touch ? { x: touch.clientX, y: touch.clientY } : null;
};

const cellUnder = (event: MouseEvent | TouchEvent | PointerEvent) => {
  const point = pointOf(event);
  if (!point) return null;
  for (const el of document.elementsFromPoint(point.x, point.y)) {
    if (el instanceof HTMLElement && el.dataset.drop) return el.dataset.drop;
  }
  return null;
};

const Crossword = ({ children }: { children?: ReactNode }) => {
  const [litWord, setLitWord] = useState<string | null>(null);
  const lit = litWord ? new Set(wordKeys.get(litWord)) : null;
  const reduced = useReducedMotion();

  const [placement, setPlacement] = useState<Record<string, string>>(() =>
    Object.fromEntries(cells.map((cell) => [cell.key, cell.key])),
  );
  const [overCell, setOverCell] = useState<string | null>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [hasDragged, setHasDragged] = useState(false);

  const trackTarget = useCallback(
    (event: MouseEvent | TouchEvent | PointerEvent) => {
      const target = cellUnder(event);
      setOverCell((prev) => (prev === target ? prev : target));
    },
    [],
  );

  const dropTile = useCallback(
    (id: string, event: MouseEvent | TouchEvent | PointerEvent) => {
      setOverCell(null);
      setDraggingId(null);

      const target = cellUnder(event);
      if (!target || !dropCellSet.has(target)) return;

      setPlacement((prev) => {
        const from = prev[id];
        if (from === target) return prev;
        const occupant = Object.keys(prev).find((key) => prev[key] === target);
        const next = { ...prev, [id]: target };
        if (occupant) next[occupant] = from;
        return next;
      });
    },
    [],
  );

  return (
    <Board
      style={
        {
          "--reveal-end": `${revealEnd}ms`,
          "--hint-row-sm": `${gridRow(crosswordHintCellMobile.row)}`,
          "--hint-col-sm": `${crosswordHintCellMobile.col + 1}`,
          "--hint-row-lg": `${gridRow(crosswordHintCell.row)}`,
          "--hint-col-lg": `${crosswordHintCell.col + 1}`,
        } as React.CSSProperties
      }
    >
      <Main>
        <GridWrap>
          <Grid
            $cols={crosswordCols}
            aria-hidden="true"
            data-cursor-text="drag"
          >
            {blocks.map((block) => (
              <BlockCell
                key={block.key}
                data-drop={block.key}
                data-over={overCell === block.key ? "true" : undefined}
                style={{
                  gridRow: gridRow(block.row),
                  gridColumn: block.col + 1,
                }}
              />
            ))}

            {hasDragged ? null : (
              <DragHintAnchor>
                <DragHint>
                  {crosswordDragLabel}
                  <ArrowDown size={13} strokeWidth={2.5} aria-hidden="true" />
                </DragHint>
              </DragHintAnchor>
            )}

            <Photo
              style={{
                gridRow: `${gridRow(crosswordPhoto.row)} / span ${crosswordPhoto.rowSpan}`,
                gridColumn: `${crosswordPhoto.col + 1} / span ${crosswordPhoto.colSpan}`,
              }}
            >
              <Image
                src={heroPortraitPath}
                alt={heroPortraitAlt}
                width={600}
                height={747}
                sizes="(min-width: 1000px) 26vw, 40vw"
                priority
              />
            </Photo>

            {cells.map((cell) => {
              const [row, col] = placement[cell.key].split("-").map(Number);
              return (
                <LetterTile
                  key={cell.key}
                  layout="position"
                  drag
                  dragSnapToOrigin
                  dragMomentum={false}
                  dragElastic={0.12}
                  onDragStart={() => {
                    setDraggingId(cell.key);
                    setHasDragged(true);
                  }}
                  onDrag={(event) => trackTarget(event)}
                  onDragEnd={(event) => dropTile(cell.key, event)}
                  whileDrag={
                    reduced
                      ? { zIndex: 30 }
                      : { scale: 1.22, rotate: -6, zIndex: 30 }
                  }
                  transition={{ type: "spring", stiffness: 520, damping: 34 }}
                  data-lit={lit?.has(cell.key) ? "true" : undefined}
                  data-dragging={draggingId === cell.key ? "true" : undefined}
                  style={{ gridRow: gridRow(row), gridColumn: col + 1 }}
                >
                  {numbers.has(cell.key) ? (
                    <CellNumber>{numbers.get(cell.key)}</CellNumber>
                  ) : null}
                  <Letter
                    style={
                      {
                        "--cell-delay": `${cell.delay}ms`,
                      } as React.CSSProperties
                    }
                  >
                    {cell.char}
                  </Letter>
                </LetterTile>
              );
            })}
          </Grid>
        </GridWrap>

        <Clues>
          {crosswordEntries.map((entry) => (
            <Clue
              key={entry.word}
              onMouseEnter={() => setLitWord(entry.word)}
              onMouseLeave={() => setLitWord(null)}
              onFocus={() => setLitWord(entry.word)}
              onBlur={() => setLitWord(null)}
              tabIndex={0}
            >
              <ClueNumber>
                {entry.number}
                {entry.direction === "across" ? "a" : "d"}.
              </ClueNumber>
              <ClueText>{entry.clue}</ClueText>
            </Clue>
          ))}
        </Clues>
      </Main>

      <Aside>
        <Solution>
          <strong>{crosswordSolutionLabel}</strong>
          <span>{crosswordSolution}</span>
        </Solution>

        <CtaSlot>{children}</CtaSlot>
      </Aside>
    </Board>
  );
};

export default Crossword;
