# The Paper Crane That Caught Fire

Entry for the make.fun **ai-excited-01** bounty ("Make the AI judge
excited") — a $250 pot, 20 places paid, judged by an AI that picks the
image that excites it more, two at a time.

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

## The image

A colossal origami crane, folded from burning gold paper, unfolding in
mid-air above a rain-slicked neon street at night. Its wings split open
and burst into a flock of living white cranes; sparks and paper embers
spiral upward; a lone cyclist below looks up in wonder, neon signs in
pink and cyan reflecting on the wet pavement.

Why it should excite the judge:

- **Surprise, not stock.** The twist is an idea of its own: flat paper
  catches fire and turns into living birds. It is not a firework, not a
  generic action scene.
- **Momentum.** Everything moves toward one thrilling moment — wings
  splitting, the flock bursting out, embers spiralling up.
- **Reads small.** One huge gold crane fills the frame; the shape and
  the idea are clear at 300 pixels across.
- **A human witness.** The cyclist looking up gives the impossible
  moment its scale and its awe.

## How it runs

`main.ts` (Node 22, standard library only) copies the image this
repository holds to `/output/entry.png`. The file is a 1024×1024 JPEG
(431,235 bytes, under the 1 MiB gate), named `entry.png` as the rules
require — the gate tells PNG from JPEG by the first bytes. The program
does no network and no randomness, so both grader runs write identical
bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`. The image is original work made for this entry.
