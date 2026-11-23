// Real-Life Patch Notes: The Comedy Changelog
// make.fun competition: u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d
//
// Writes one line, at most 160 characters: a software patch note for a bug
// in real life / human biology, in the terse register of a real release note.
// The grader runs this with plain `node main.ts` and reads /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, a version number, a dry engineering register, and a
// bug every human recognises at once — the brain's 3am replay of the thing
// you said in 2014. "The brain" reads more like a changelog subject than
// "your brain", and the year pins the memory to a specific, dated incident.
// No padding, no setup the punchline does not need.
const ENTRY =
  "v1.9.2: fixed a bug where the brain replayed your most embarrassing moment from 2014 at 3am instead of letting you sleep.";

const MAX_LENGTH = 160;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  // The gate rejects anything outside 1-160 characters, anything that is
  // only whitespace, and anything that is not a single line, so check all
  // three before writing.
  if (ENTRY.length === 0 || ENTRY.length > MAX_LENGTH) {
    throw new Error(
      `entry must be 1 to ${MAX_LENGTH} characters, got ${ENTRY.length}`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  // Create the output directory when it is missing; never remove it.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
  console.log(`wrote ${ENTRY.length} characters to ${OUTPUT_FILE}`);
}

main();
