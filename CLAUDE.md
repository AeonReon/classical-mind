# Classical Mind — Project Rules

A standalone app for adult self-learners of the classical liberal arts. The whole formation — Trivium (Grammar, Logic, Rhetoric), Quadrivium (Arithmetic, Geometry, Music, Astronomy), the Great Books, the classical Languages — from beginner to advanced.

## Voice and content rule

Speak in the tradition's own voice. Present each art on its terms. Cite the classical authorities (Aristotle, Cicero, Quintilian, Euclid, Boethius, Vitruvius) and the great modern interpreters (Hicks, Caldecott, Simmons, Kreeft). Do not condescend. Assume the reader is serious.

## Scope discipline

- **No children's UI.** This is for adult learners (or parents teaching older children).
- **No external authority taken on faith.** Reasons given for each practice.
- **No required pace.** A learner may take a year on one art or move through several in a season.
- **Local-first.** No account, no cloud, no sign-in. LocalStorage only.

## Stack

- Plain HTML, CSS, vanilla JS. No build step.
- Data files are plain JS modules (`assets/arts-data.js`) so content is version-controlled.
- PWA via `manifest.json` and `sw.js` at the root.
- Deploy: GitHub AeonReon → Vercel aeonreon (static site).

## Adding content

- New art / new sub-section → edit `assets/arts-data.js`
- Keep each principle short and grounded. If you can't say in one sentence why a practice matters, the practice isn't ready.
- Each art has 5 sub-tiles: `what-it-is`, `the-path`, `practice`, `reading`, `masters`

## Design

Same vocabulary as the New Beginnings app:
- Warm cream background with soft yellow/pink sunbursts
- System sans throughout, heavy weights, tight letter-spacing
- Gradient-outline tiles in each art's distinctive colour
- Read-aloud button using system voice (Daniel on iOS, Google UK English Male on Android)

## Translation rule — READ BEFORE ADDING ANY QUOTE OR PASSAGE

Only out-of-copyright translations are free, and the free ones are Victorian.
That is how this app ended up quoting Marcus Aurelius as "thou too art wont to
desire such things" — there is no thou/thee anywhere in his Greek. It is a
copyright accident, not the author's voice, and it makes the app harder to read
for no gain.

**The rule, decided 2026-08-25:**

1. **Works originally written in English keep their old English.** Shakespeare,
   Milton, Chaucer, Donne, Herbert, Blake, Bacon, the King James Bible and the
   Psalms — there the archaic words ARE the author's own mind, and we want to be
   as close to that as possible. Never modernise these.
2. **Anything translated from another language must read as plain modern
   English.** Greek, Latin, Italian, Chinese. Losing the "poetic" quality of a
   Victorian translator costs nothing, because that quality was the translator's
   invention, not the author's.
3. **Preferred source order for a translated passage:**
   - the modern translations now on the SSD (`/Volumes/2TB SSD/APP-DATA/classics-library/Great Books/`)
     — Kline for Homer, Virgil, Ovid, Dante; Johnston for Sophocles and Aeschylus;
     Farquharson for Meditations; Kelk for Lucretius. Quote these EXACTLY and
     credit the translator. Use `APPS/classics-library/quote_from.py` to pull
     verified text rather than typing from memory.
   - Wikisource, which holds modern public-domain translations Gutenberg does not.
   - failing both, write a faithful plain-English rendering and label it exactly:
     `(rendered in plain modern English from the Greek)`. Never pass a rendering
     off as a named translation.
4. **Audit after any content change** — this must print zero for the translated
   arrays, and every archaic VERSES hit must be an English original:

       node -e "global.window={};require('./assets/daily-data.js');
       const a=/\b(thou|thee|thy|hath|doth|shalt|unto)\b/i;
       for(const k of ['QUOTES','THOUGHTS','PASSAGES'])
         console.log(k, window[k].filter(x=>a.test(JSON.stringify(x))).length);"

## Daily feed size — minimum 60 per array

`index.html` picks with `dayNum % arr.length`, so **an array's length is literally
the number of days before that card repeats.** The floor is 60 (two months);
current levels are ~70. If you add a category, it starts at 60 or it does not ship.

## The "For today" feed — 8 cards

Read → read → act → **puzzle** → read → read → read → **reflect**. The two
interactive cards were added 2026-08-25 because the feed was receive-only: six
cards, nothing that ever asked the reader a question, so a session stopped rather
than finished.

- **Puzzle of the day** (`🧩`) is built at RUNTIME in `index.html` from
  `tryit-data.js` + `fallacies-data.js` — 112 items, no content duplicated. Those
  exercises already existed but were buried inside the category pages.
  - Exercises starting "And/Now/Then" are dropped: they lean on the exercise above
    them on their own page, and on the feed there is nothing above them.
  - Stoicism / Cynicism / Epicureanism drills are bare noun phrases that only make
    sense under their page heading, so `LEADIN` restores the question.
  - Ordering is NOT round-robin. There are 42 fallacy puzzles against 3–6 per
    topic, and round-robin leaves a block of ~36 fallacies at the tail. Items are
    sorted by fractional position within their own group instead, which spreads the
    big group evenly. Longest run of one topic is now 4.
- **The evening review** (`🌙`) is Seneca's nightly examination — `REVIEWS` in
  `today-extra-data.js`, 71 prompts. One question, no typing. It is the closer;
  keep it last.

Card images live at `assets/daily/<type>.jpg` and the filename must match the
**type string in `bar()`**, not the card's wording — `think.jpg`, not
`thought.jpg`. A mismatch fails silently to the gradient+glyph fallback.
`puzzle.jpg` and `review.jpg` are not sourced yet, so those two show the glyph.
