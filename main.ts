// The Paper Crane That Caught Fire — ai-excited-01 entry.
//
// Copies the entry image (entry.png, JPEG bytes despite the .png name —
// the competition rules allow this explicitly) into the harness output
// directory. Node 22, standard library only. Deterministic: no network,
// no randomness, no timestamps in the output. Running it twice produces
// byte-identical output.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.png");

if (!existsSync(source)) {
  console.error(`entry.png not found next to main.ts (${source})`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

// Sanity check: the copy must be byte-identical, so verify the sizes
// match before reporting success.
if (statSync(source).size !== statSync(target).size) {
  console.error("copy size mismatch — output is not identical to entry.png");
  process.exit(1);
}
console.log(`wrote ${target}`);
