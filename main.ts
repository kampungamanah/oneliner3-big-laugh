// Entry for the make.fun bounty "One Line, Big Laugh"
// (u-coral-404-one-line-big-laugh-328fb857).
// A single 96-character joke, written verbatim to /output/entry.txt
// with no trailing newline, so the gate sees exactly one line.

import * as fs from "node:fs";
import * as path from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = path.join(OUTPUT_DIR, "entry.txt");

function buildLine(): string {
  const setup = "My mirror and I are in a toxic relationship";
  const punchline = "I keep showing up, and it keeps telling the truth.";
  return `${setup} — ${punchline}`;
}

function main(): void {
  const line = buildLine();
  if (line.length === 0 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, line, { encoding: "utf8" });
}

main();
