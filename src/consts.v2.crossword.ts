export type CrosswordEntry = {
  word: string;
  row: number;
  col: number;
  direction: "across" | "down";
  number: number;
  clue: string;
};

export const crosswordCols = 11;
export const crosswordRows = 11;

export const crosswordEntries: CrosswordEntry[] = [
  {
    word: "RESEARCH",
    row: 2,
    col: 2,
    direction: "across",
    number: 1,
    clue: "what I do before designing anything (8)",
  },
  {
    word: "SYSTEMS",
    row: 2,
    col: 4,
    direction: "down",
    number: 2,
    clue: "tokens, components, docs, the part that outlives me (7)",
  },
  {
    word: "FLOWS",
    row: 4,
    col: 0,
    direction: "across",
    number: 3,
    clue: "something tangled, made walkable (5)",
  },
  {
    word: "SHIPPED",
    row: 8,
    col: 4,
    direction: "across",
    number: 4,
    clue: "not a prototype. in production, with real users (7)",
  },
];

export const crosswordPhoto = { row: 5, col: 6, rowSpan: 3, colSpan: 4 };

export const crosswordCluesLabel = "clues";
export const crosswordSolutionLabel = "solution:";

export const crosswordDragLabel = "drag";
export const crosswordHintCell = { row: 2, col: 2 };
export const crosswordHintCellMobile = { row: 4, col: 2 };
export const crosswordSolution =
  "Lavinia, Product Designer & Developer for Enterprise solutions, based in Bucharest. Five years of this. Currently available.";
export const crosswordStatement =
  "Lavinia Dumitrenco - product designer in Bucharest. Five years of user research, flows and design systems, shipped into production. Available for work.";
