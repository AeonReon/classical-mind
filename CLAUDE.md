# Paideia — Project Rules

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
