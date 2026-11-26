// Deadpan forecast for Tarnwick, a city that does not exist.
//
// The programme emits exactly one broadcast line: a straight-faced
// weather read for a place that never was, where the rain is oddly
// selective about who it falls on. The line is assembled from small
// named parts so each piece of the joke can be read on its own, then
// checked against the competition gate (one line, 1-160 characters,
// real UTF-8 text) before it is written out.
//
// Output goes to the absolute path /output/entry.txt. The grading
// sandbox mounts the repository read-only, so a relative path would
// fail here; the absolute path is the whole point of this file.

import { mkdirSync, writeFileSync } from "node:fs";

// Where the graded line must land, and the gate it must pass.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";
const MAX_CHARS = 160;

// The invented city. Tarnwick is not on any map: no such place has
// ever filed a planning application, run a bus service, or kept a
// rain gauge that behaved itself.
const CITY = "Tarnwick";

// What the sky is doing over Tarnwick today. Not ordinary rain:
// this rain has opinions about preparedness, and it acts on them.
const PHENOMENON = "rain falls only on people who forgot an umbrella today";

// The hard numbers that make the broadcast sound like a broadcast.
// A forecaster who gives you a depth and a deadline is a forecaster
// you believe, even when the rain itself is being unreasonable.
const RAINFALL_MM = 4;
const DEADLINE = "6pm";

// The deadpan twist, delivered flat: everyone who remembered their
// umbrella is, by the rain's own rules, entirely safe.
const TWIST = "while everyone else stays completely dry";

function buildForecast(): string {
  const measurement = `${RAINFALL_MM} millimetres by ${DEADLINE}`;
  return `In ${CITY}, ${PHENOMENON}, ${measurement}, ${TWIST}.`;
}

function validateForecast(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("Forecast line must not be blank.");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `Forecast line is ${line.length} characters, over the ${MAX_CHARS} limit.`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Forecast line must be a single line.");
  }
  if (!line.includes(CITY)) {
    throw new Error("Forecast line must name its invented city.");
  }
  if (!/[0-9]/.test(line)) {
    throw new Error("Forecast line must carry a concrete number or detail.");
  }
}

// How much of the 160-character budget the line spends, and how much
// headroom is left. A broadcast line should be tight: every character
// earns its place, and padding is worse than brevity.
function reportBudget(line: string): string {
  const used = line.length;
  const spare = MAX_CHARS - used;
  return `${used}/${MAX_CHARS} characters used, ${spare} spare`;
}

const forecast = buildForecast();
validateForecast(forecast);
console.log(reportBudget(forecast));

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, forecast, "utf8");
console.log(`Wrote ${forecast.length} characters to ${OUTPUT_FILE}`);
