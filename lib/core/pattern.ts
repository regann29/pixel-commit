export type Level = 0 | 1 | 2 | 3 | 4;
export type Theme = "github" | "ocean" | "sunset" | "mono";

export interface Pattern {
  version: 1;
  name: string;
  rows: 7;
  cols: number;
  cells: Level[][];
  theme: Theme;
}

export function createPattern(cols = 53): Pattern {
  return {
    version: 1,
    name: "Untitled pattern",
    rows: 7,
    cols,
    cells: Array.from({ length: cols }, () => Array<Level>(7).fill(0)),
    theme: "github",
  };
}
