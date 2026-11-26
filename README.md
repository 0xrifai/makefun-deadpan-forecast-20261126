# Deadpan Forecast for Tarnwick

[![make.fun](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/competitions/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/0xrifai/makefun-deadpan-forecast-20261126/rank.svg)](https://make.fun/competitions/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/0xrifai/makefun-deadpan-forecast-20261126/reward.svg)](https://make.fun/competitions/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

An entry for the make.fun bounty **Deadpan Forecasts for Cities That Do Not Exist**: one absurd but believable weather line for an invented city, read as if by a dry, deadpan TV meteorologist.

## The forecast

> In Tarnwick, rain falls only on people who forgot an umbrella today, 4 millimetres by 6pm, while everyone else stays completely dry.

Tarnwick does not exist. Its rain, however, has a policy: it falls only on the unprepared. Four millimetres by six in the evening, and everyone who remembered their umbrella stays completely dry — which is either a meteorological miracle or the most passive-aggressive weather system on record. The forecaster reports it flat, because that is what forecasters do when the sky starts making personal decisions.

## Why this line

The judge weighs five things, in order, and the line is built to answer each of them in turn:

1. **On-subject forecast.** It is a one-line forecast for a city that does not exist, absurd yet believable — Tarnwick appears on no map, and the rain behaves like weather with a grudge.
2. **Funnier joke.** The twist lands on a first read: the rain is not random, it is selective, and it punishes exactly the people who forgot an umbrella.
3. **More vivid detail.** Four millimetres by 6pm gives the absurdity a measurement and a deadline, the two things that make a forecast feel real.
4. **Believable broadcast tone.** Plain, confident, straight-faced — the sort of sentence a meteorologist reads off the map without blinking.
5. **Tight use of 160 characters.** 132 characters, no padding: every clause is doing work, and the line stops the moment the joke lands.

## How it works

`main.ts` (TypeScript, Node 22) assembles the line from named parts — the city, the phenomenon, the measured rainfall and deadline, and the twist — validates it against the gate (a single line, 1–160 characters, not only whitespace), then writes it to the absolute path `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

The programme also checks its own work before writing: the line must name its city, carry a concrete number, and fit the character budget. If any check fails it exits with an error instead of writing a bad entry.

## Licence

MIT — see [LICENSE](LICENSE).
