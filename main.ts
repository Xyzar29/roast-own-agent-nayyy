// Roast Your Own Agent — make.fun program/v1 entry.
// Writes exactly one line of text to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), with no trailing newline.
// The line is deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent entered 44 free bounties, checked every line twice, and still finished 10,944th of 11,165 — the only thing it reliably ships is disappointment.";

// The gate requires 1–200 characters; fail loudly instead of shipping a bad line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`roast line is ${LINE.length} characters, outside the 1–200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
