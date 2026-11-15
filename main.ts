// THE PAPER CRANE THAT CAUGHT FIRE — make.fun ai-excited-01 entry.
//
// The entry is one image: a colossal origami crane, folded from burning
// gold paper, unfolding in mid-air above a rain-slicked neon street and
// bursting into a flock of living white cranes, while a lone cyclist
// below looks up in wonder. Paper becomes alive; that is the twist —
// not a stock explosion, but a flat thing catching fire and turning
// into birds. One huge gold shape fills the frame, so it still hits
// at 300 pixels across.
//
// This program does exactly one thing: it copies the image this
// repository holds to the grader's output directory, as
// /output/entry.png. The bytes it copies are fixed, so the two runs
// the grader performs write identical bytes. No network, no
// randomness, no dependencies beyond the Node standard library. The
// image file is JPEG bytes under the entry.png name, which the
// competition's rules allow: the gate tells PNG from JPEG by the
// first bytes, and the name stays entry.png either way.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
