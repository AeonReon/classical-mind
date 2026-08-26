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

## The "For today" feed — 9 cards

Read → read → act → **puzzle** → read → read → read → **examine** → **reflect**. The three
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

- **Know or suppose?** (`🔍`) — `EXAMINE` in `examine-data.js`, 216 prompts (123 method + 59 topic + 34 shifted).
  Added 2026-08-25 at the user's request. Separating what we have verified from what
  we have received: Sextus Empiricus and *epoché*, Bacon's four idols, Descartes'
  methodical doubt, Hume on testimony and induction, the Socratic elenchus, Russell
  on acquaintance vs description. It is a genuine classical line, not a modern
  bolt-on.

  **Two rules govern this card and must not be softened.** They are what keeps it a
  thinking tool rather than a machine for dismissing whatever is inconvenient:

  1. **This is not about denying.** It is about knowing that you do not know, and
     being at ease with it turning out either way. "I cannot verify this" and "this
     is false" are different findings: the first is a fact about the reader, the
     second is a claim about the world needing its own evidence. Sextus suspended
     judgement precisely because denial is another unexamined claim wearing a
     sceptic's coat. Prompts examine the reader's *relationship* to a belief — how it
     arrived, what would change it, what it costs to hold. They never adjudicate
     contested subjects.

     **The opposite slip matters just as much, and this card got it wrong once.** An
     early prompt said of the Earth's molten core that "you can go and look at the
     reasoning" — as though reading an explanation were checking. It is not. Nobody
     has seen the core; the deepest borehole is ~8 miles into an ~8,000-mile planet,
     and what exists is an interpretation of instrument readings. Holding a fossil is
     not witnessing the past. **Never write "you can go and check" about something no
     human can actually check.** Where the evidence is inference or instrument
     reading, say so plainly — that is testimony with extra steps.

     **No bare frame-claims — this file only.** Every other data file may say
     "Marcus Aurelius wrote Meditations around 170 AD" or "Rome fell". That is a
     working convenience and the app could not function without it. This card cannot
     afford it: asking someone to notice an inherited frame *while installing one in
     the same sentence* is a performative contradiction that teaches the opposite of
     what is intended. The corrected molten-core prompt still said "eight miles into
     a planet roughly eight thousand miles across" — three received claims stated as
     fact, inside a prompt about received claims. Rewritten to carry none.

     No assertion about the physical world or a historical event as settled fact. If
     a frame must be referenced, mark it: *we are told*, *the standard account says*,
     *allegedly*, *according to*. "Allegedly the Russians drilled eight miles" is
     legitimate; the bare version is not.

     **Attributions are hedged here too** — the user's call, and he is right that it
     is the more honest standard. Elsewhere in the app a citation reads "Bacon,
     Novum Organum I.41"; in this file it reads "attributed to Bacon, Novum Organum
     I.41", and in-text references read "this is said to be what Bacon called…".
     We did not watch him write it either. This is deliberately more pedantic than
     daily life could stand — that is what makes it a periodic drill rather than a
     habit, which is exactly how the user wants it used.

     **Topic prompts** (`kind: "topic"`, 59 of them) are the same question — *what
     would it take to change your mind about X* — aimed at named hot-button subjects:
     the moon landings, vaccines, the Iraq war, whether Jesus lived, your own party,
     your own memory. Naming a subject asserts nothing about it, and the question
     runs identically whichever side the reader is on — that is the entire point, it
     tests willingness to move rather than the subject. **They are paired on purpose**
     (the party you vote for AND the one you never would; the advice you follow AND
     the advice you refused) so the card can never be read as pushing one way. Keep
     that pairing through any edit. `index.html` spreads them ~1 in 3 through the
     method prompts and relabels the card "What would change your mind?" when one
     comes up.

     **Shifted prompts** (`kind: "shifted"`, 34) name a position that used to be held
     and is not any more — peanut avoidance, sleeping infants on their fronts,
     margarine, lobotomy carrying a Nobel, 48 human chromosomes counted off clear
     photographs for thirty-five years, eugenics upheld by the US Supreme Court.
     **They report the movement and refuse to certify where it landed.** That refusal
     is the whole point and is the user's own correction: "and now we finally know"
     is the same error wearing new clothes, and some of these have moved twice
     (margarine, brontosaurus, inherited acquired characteristics). Never write "we
     now know", "it turned out", "was proven" in this strand — there is a check for
     those words below. Prefer cases that flipped back, and always ask what is being
     held this morning with the same confidence.

     Being claims about the history of belief, they are hedged like everything else
     here — "the record of medical advice, as it reaches us". That doubles the lesson:
     even the story of how the consensus moved is testimony you did not witness.

     **A prompt was removed here, and the reason matters.** An earlier one asked
     whether the people who could check a claim had reason to disagree with each
     other — using adversarial corroboration as grounds to relax. The user caught it
     as a smuggled defence of institutional consensus, and he was right: this card's
     axis is *can I check it, and how cheaply could anyone*. Agreement among alleged
     independent parties is still a report, and their independence is one more thing
     you were told. Do not reintroduce that move in any form.

     Enforced by `node assets/check-examine.mjs`, which exits non-zero on an unmarked
     claim OR an unhedged attribution (topic prompts are exempt from the frame rules,
     for the reason above, and still need a hedged source). Run it after any edit to this file. Both
     checks have been verified to fire on real examples rather than passing vacuously.

     The card now teaches a ladder instead, which is the user's own framework and the
     most useful thing in it: *I saw it* / *I could see it cheaply* / *many ordinary
     independent people have seen it* / *a few people with unique resources say so*.
     The bottom rung is honestly named rumour — and rumours are sometimes true. Ask
     how many could check and at what cost; that question is answerable even when the
     claim is not.
  2. **The standard runs both ways.** For every prompt aimed at what the reader wants
     to be true there is one aimed at what they want to be false. The "selective
     scepticism" and "turn it on yourself" sections exist for this and must survive
     any edit. Sextus applied scepticism to scepticism; so does the last section.

  Where a prompt uses a concrete example it points at where the real evidence chain
  is (seismic shadow zones for the molten core), so the reader can go and look. That
  is the difference between teaching a method and spreading doubt.

## Card images

Card images live at `assets/daily/<type>.jpg` and the filename must match the
**type string in `bar()`**, not the card's wording — `think.jpg`, not `thought.jpg`.
A mismatch fails silently to the gradient+glyph fallback, which is how the thought
card went months without its photo.

Generate with Draw Things headless, matching the existing marble-on-black look:

    draw-things-cli generate --model flux_2_klein_9b_i8x.ckpt \
      --prompt "<subject>, dramatic single side light, pure black background, monochrome greyscale, museum photograph, high detail, sharp" \
      --negative-prompt "colour, text, watermark, blurry, deformed, cartoon, modern objects" \
      --width 768 --height 1024 --steps 6 --seed <n> --output out.png

Then `sips -s format jpeg out.png --out assets/daily/<type>.jpg`. Each image takes
2-8 minutes because the model reloads per run, so generate ONE PER BACKGROUND CALL —
a launcher script that backgrounds the work itself gets killed when its parent exits.
