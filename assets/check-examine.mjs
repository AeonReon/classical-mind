// check-examine.mjs — guards the one card that cannot carry received frames.
//
// The "Know or suppose?" card asks the reader to notice claims they absorbed
// without checking. A prompt that itself states a received claim as settled fact
// teaches the opposite of what it is for. Every other data file in this app may
// say "Marcus Aurelius wrote Meditations" as a working convenience. This one may not.
//
// Run: node assets/check-examine.mjs
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
globalThis.window = {};
new Function(readFileSync(join(here, 'examine-data.js'), 'utf8')).call(globalThis);
const items = globalThis.window.EXAMINE;

// A hedge anywhere in the sentence turns an assertion into an attribution, which is allowed.
const HEDGE = /\b(we are told|the standard account|allegedly|reportedly|according to|said to be|supposedly|it is claimed|somebody's|someone's|you are told|reached you|arrived)\b/i;

const RULES = [
  [/\b\d[\d,.]*\s*(miles?|km|kilometres?|feet|years?|centuries|century|degrees?)\b/i, 'measurement stated as fact'],
  [/\b(eight|ten|twenty|fifty|hundred|thousand|million|billion)\s+(miles?|years?|thousand)\b/i, 'measurement stated as fact'],
  [/\b(the )?(planet|globe|solar system|universe|atmosphere)\b/i, 'cosmological frame stated as fact'],
  [/\b(dinosaurs?|fossils? (show|prove)|evolution|the ice age|millions of years)\b/i, 'deep-time claim stated as fact'],
  [/\b(gravity|seismic|shear waves?|tectonic|orbit(s|ed|ing)?)\b/i, 'physical mechanism stated as fact'],
  [/\b(the moon landing|astronauts?|outer space)\b/i, 'contested event stated as fact'],
];

// Attributions are hedged in this file too: "attributed to Bacon, Novum Organum",
// not "Bacon, Novum Organum". We did not watch him write it either, and practising
// the frame is the point. More pedantic than daily life needs — that is the drill.
const HEDGED_SOURCE = /^(in the manner of|the |attributed to|after what is attributed to|what is)/;

let bad = 0;
items.forEach((e, i) => {
  if (!HEDGED_SOURCE.test(e.source)) {
    bad++;
    console.log(`[${i}] unhedged attribution: "${e.source}"\n    prefix it with "attributed to"\n`);
  }
  const text = `${e.q} ${e.note}`;
  // Topic prompts only NAME a subject inside "what would it take to change your
  // mind about X". Naming asserts nothing, and the question runs the same from
  // either side, so the frame-claim rules do not apply — the hedged-source check
  // above still does.
  if (e.kind === 'topic') return;
  if (HEDGE.test(text)) return;                 // marked as somebody's account — fine
  for (const [re, why] of RULES) {
    const m = text.match(re);
    if (m) {
      bad++;
      console.log(`[${i}] ${why}: "${m[0]}"\n    ${e.q}\n    ${e.note}\n`);
      break;
    }
  }
});

console.log(`${items.length} prompts checked, ${bad} problem(s).`);
if (bad) {
  console.log('\nFix by removing the claim, or marking it: "we are told", "the standard');
  console.log('account says", "allegedly", "according to". Attributing an IDEA to a name');
  console.log('is fine — a citation is already the "according to someone" form.');
  process.exit(1);
}
