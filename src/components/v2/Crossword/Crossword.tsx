import { useState, type ReactNode } from "react";
import Image from "next/image";
import { heroPortraitAlt, heroPortraitPath } from "../../../consts.v2";
import {
  crosswordCols,
  crosswordEntries,
  crosswordPhoto,
  crosswordRows,
  crosswordSolution,
  crosswordSolutionLabel,
} from "../../../consts.v2.crossword";
import {
  Board,
  Aside,
  GridWrap,
  Grid,
  BlockCell,
  OpenCell,
  Letter,
  CellNumber,
  Photo,
  Clues,
  Clue,
  ClueNumber,
  ClueText,
  Solution,
} from "./Crossword.styles";

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

  const inPhoto = (row: number, col: number) =>
    row >= crosswordPhoto.row &&
    row < crosswordPhoto.row + crosswordPhoto.rowSpan &&
    col >= crosswordPhoto.col &&
    col < crosswordPhoto.col + crosswordPhoto.colSpan;

  const blocks: { key: string; row: number; col: number }[] = [];
  for (let row = 0; row < crosswordRows; row++) {
    for (let col = 0; col < crosswordCols; col++) {
      const key = `${row}-${col}`;
      if (cells.has(key) || inPhoto(row, col)) continue;
      blocks.push({ key, row, col });
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

// The rows above and below the words are pure padding, there only to square the
// board. They collapse below the two-column breakpoint so the board fits.
const compactRows = [
  ...Array<string>(bandStart).fill("0"),
  `repeat(${bandEnd - bandStart + 1}, auto)`,
  ...Array<string>(crosswordRows - 1 - bandEnd).fill("0"),
].join(" ");

const Crossword = ({ children }: { children?: ReactNode }) => {
  const [litWord, setLitWord] = useState<string | null>(null);
  const lit = litWord ? new Set(wordKeys.get(litWord)) : null;

  return (
    <Board>
      <GridWrap>
        <Grid
          $cols={crosswordCols}
          $compactRows={compactRows}
          aria-hidden="true"
        >
          {blocks.map((block) => (
            <BlockCell
              key={block.key}
              data-pad={
                block.row < bandStart || block.row > bandEnd
                  ? "true"
                  : undefined
              }
              style={{ gridRow: block.row + 1, gridColumn: block.col + 1 }}
            />
          ))}

          {cells.map((cell) => (
            <OpenCell
              key={cell.key}
              data-lit={lit?.has(cell.key) ? "true" : undefined}
              style={{ gridRow: cell.row + 1, gridColumn: cell.col + 1 }}
            >
              {numbers.has(cell.key) ? (
                <CellNumber>{numbers.get(cell.key)}</CellNumber>
              ) : null}
              <Letter
                style={
                  { "--cell-delay": `${cell.delay}ms` } as React.CSSProperties
                }
              >
                {cell.char}
              </Letter>
            </OpenCell>
          ))}

          <Photo
            style={{
              gridRow: `${crosswordPhoto.row + 1} / span ${crosswordPhoto.rowSpan}`,
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
        </Grid>
      </GridWrap>

      <Aside>
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

          <Solution>
            <strong>{crosswordSolutionLabel}</strong> {crosswordSolution}
          </Solution>
        </Clues>

        {children}
      </Aside>
    </Board>
  );
};

export default Crossword;
