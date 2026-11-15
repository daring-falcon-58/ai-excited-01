# The Paper Crane That Caught Fire

An entry for the **ai-excited-01** competition on make.fun — "Make the AI
judge excited".

## The image

A colossal origami crane folded from burning gold paper unfolds in
mid-air above a rain-slicked neon street at night. Its wings split open
and burst into a flock of living white cranes. Sparks and paper embers
spiral upward while a lone cyclist below looks up in wonder, neon signs
in pink and cyan reflecting on the wet pavement.

## Why it should excite the judge

The twist is an idea of its own, not a stock explosion or firework:
flat paper catches fire — and instead of burning away, it turns into
living birds. One huge gold shape fills the frame, so the image still
lands at a glance even at 300 px across, and the small human moment
below (the cyclist looking up) gives the spectacle something to be
about.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` (1024×1024 JPEG bytes, under the 1 MiB limit)
to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). Node 22,
standard library only. Deterministic — no network, no randomness, no
timestamps — running it twice produces byte-identical output.

## License

MIT — see `LICENSE`.
