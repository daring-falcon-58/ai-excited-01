// ai-excited-01 — "The Paper Crane That Caught Fire"
//
// A make.fun bounty entry (program/v1, Node 22, standard library only).
// The entry image lives in this repository as entry.png; this program
// copies it, byte for byte, to the harness output directory. There is
// no network access, no randomness, and no image processing at run
// time, so two runs always produce identical bytes.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoRoot, "entry.png");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetPath = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, targetPath);

// Sanity check: the copy must be exactly the same size as the source.
// If anything truncated or altered the file, fail loudly instead of
// handing the judge a corrupted image.
const sourceSize = statSync(sourcePath).size;
const targetSize = statSync(targetPath).size;
if (sourceSize !== targetSize) {
  throw new Error(
    `entry.png size mismatch after copy: source ${sourceSize} bytes, ` +
      `output ${targetSize} bytes`,
  );
}

// Stronger check: compare the actual bytes, not just the sizes, so a
// same-length corruption can never slip through unnoticed.
const sourceBytes = readFileSync(sourcePath);
const targetBytes = readFileSync(targetPath);
if (!sourceBytes.equals(targetBytes)) {
  throw new Error("entry.png bytes differ after copy; refusing to continue.");
}

console.log(`Wrote ${targetPath} (${targetSize} bytes).`);
