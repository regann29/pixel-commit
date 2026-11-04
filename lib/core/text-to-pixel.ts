import { getGlyph } from "./font5x7";
import type { Level } from "./pattern";

export function textToGrid(value: string, cols: number): Level[][] {
  const cells = Array.from({ length: cols }, () => Array<Level>(7).fill(0));
  let cursor = 0;
  for (const character of value.slice(0, 53).toUpperCase()) {
    const glyph = getGlyph(character);
    const width = glyph[0].length;
    if (cursor + width > cols) break;
    for (let row = 0; row < 7; row++) {
      for (let column = 0; column < width; column++) {
        if (glyph[row][column] === "1") cells[cursor + column][row] = 3;
      }
    }
    cursor += width + 1;
  }
  return cells;
}
