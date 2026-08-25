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

let bad = 0;
items.forEach((e, i) => {
  const text = `${e.q} ${e.note}`;
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

console.log(`${items.length} prompts checked, ${bad} carrying an unmarked frame-claim.`);
if (bad) {
  console.log('\nFix by removing the claim, or marking it: "we are told", "the standard');
  console.log('account says", "allegedly", "according to". Attributing an IDEA to a name');
  console.log('is fine — a citation is already the "according to someone" form.');
  process.exit(1);
}
