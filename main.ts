// The Paper Crane That Caught Fire — ai-excited-01 entry.
// Deterministically writes the bundled image to the output directory
// as entry.png. No network, no randomness, no dependencies beyond the
// Node 22 standard library: the same input bytes always produce the
// same output bytes, so repeated runs are byte-identical.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const targetPath = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });

// Guard: refuse to emit an empty image instead of failing silently.
const sourceBytes = readFileSync(sourcePath);
if (sourceBytes.length === 0) {
  throw new Error(`entry image is empty: ${sourcePath}`);
}

copyFileSync(sourcePath, targetPath);

// Sanity check: the written file must match the bundled image exactly.
const expected = sourceBytes;
const written = readFileSync(targetPath);

if (expected.length !== written.length) {
  throw new Error(
    `size mismatch: wrote ${written.length} bytes, expected ${expected.length}`,
  );
}

if (!expected.equals(written)) {
  throw new Error("byte mismatch: output is not identical to entry.png");
}

const digest = (bytes: Buffer) =>
  createHash("sha256").update(bytes).digest("hex");

if (digest(expected) !== digest(written)) {
  throw new Error("hash mismatch: output hash differs from entry.png");
}

console.log(`wrote ${targetPath} (${written.length} bytes)`);
console.log(`sha256 ${digest(written)}`);
