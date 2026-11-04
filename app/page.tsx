import Link from "next/link";

export default function HomePage() {
  return (
    <main className="landing">
      <p className="eyebrow">PIXEL-COMMIT</p>
      <h1>Design your activity.<br />Plan your progress.</h1>
      <p className="lede">
        Turn a word, shape, or hand-drawn idea into a GitHub-style calendar preview.
        Then use it as a friendly plan for doing real work.
      </p>
      <Link className="button" href="/editor">Start designing <span aria-hidden="true">→</span></Link>
      <p className="honesty">No GitHub access. No fake commits. Your design stays in this browser.</p>
    </main>
  );
}
