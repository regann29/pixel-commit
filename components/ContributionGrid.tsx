import type { Pattern } from "@/lib/core/pattern";

const colors = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

export function ContributionGrid({ pattern, onToggle }: { pattern: Pattern; onToggle: (col: number, row: number) => void }) {
  const size = 14;
  const gap = 3;
  return (
    <svg className="contribution-grid" role="grid" aria-label="Contribution pattern editor" viewBox={`0 0 ${pattern.cols * (size + gap)} ${pattern.rows * (size + gap)}`}>
      {pattern.cells.map((column, col) => column.map((level, row) => (
        <rect key={`${col}-${row}`} role="gridcell" tabIndex={0} x={col * (size + gap)} y={row * (size + gap)} width={size} height={size} rx={3} fill={colors[level]} aria-label={`Week ${col + 1}, ${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][row]}, level ${level}`} onClick={() => onToggle(col, row)} onKeyDown={(event) => { if (event.key === " " || event.key === "Enter") onToggle(col, row); }} />
      )))}
    </svg>
  );
}
