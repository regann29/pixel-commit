"use client";

import { useState } from "react";
import { ContributionGrid } from "@/components/ContributionGrid";
import { createPattern, type Level } from "@/lib/core/pattern";
import { textToGrid } from "@/lib/core/text-to-pixel";

export default function EditorPage() {
  const [text, setText] = useState("PIXEL");
  const [pattern, setPattern] = useState(() => createPattern());

  function applyText(value: string) {
    setText(value);
    setPattern((current) => ({ ...current, cells: renderedFor(value, current.cols) }));
  }

  function renderedFor(value: string, cols: number): Level[][] {
    return textToGrid(value, cols);
  }

  function toggleCell(col: number, row: number) {
    setPattern((current) => {
      const cells = current.cells.map((column) => [...column]);
      cells[col][row] = cells[col][row] === 0 ? 3 : 0;
      return { ...current, cells };
    });
  }

  return (
    <main className="editor-shell">
      <header className="topbar"><a href="/">← Pixel-Commit</a><span>Design a pattern for real work</span></header>
      <section className="editor">
        <div className="editor-heading">
          <div><p className="eyebrow">EDITOR</p><h1>Make it yours.</h1></div>
          <label className="text-input">Text pattern
            <input value={text} maxLength={8} onChange={(event) => applyText(event.target.value.toUpperCase())} />
          </label>
        </div>
        <div className="card">
          <div className="grid-scroll"><ContributionGrid pattern={pattern} onToggle={toggleCell} /></div>
          <div className="legend"><span>Less</span>{[1, 2, 3, 4].map((level) => <i key={level} className={`level-${level}`} aria-label={`Level ${level}`} />)}<span>More</span></div>
        </div>
        <p className="hint">Click any square to paint it. Your preview is a plan, not a way to create GitHub activity.</p>
      </section>
    </main>
  );
}
