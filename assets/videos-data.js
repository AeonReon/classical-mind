// videos-data.js — curated YouTube for each art / school.
//
// WHY THIS EXISTS: the app's value is the structure. Video is the reward for
// arriving, not the spine. One "Watch" drop-down per topic, three to five
// picks, ordered easiest-first.
//
// THE SELECTION RULE (do not skip this when adding topics):
//   1. In-tradition. The video must present the philosophy from INSIDE its own
//      perspective at full strength. Anything that mocks, debunks, or explains
//      a school as a curiosity is out, however popular.
//   2. Watchable. Popularity is a real signal — a correct video nobody wants to
//      watch is worth nothing here. Views + production quality count.
//   3. Verified. Every id below was checked live: the transcript was read for
//      framing and accuracy, and the video confirmed public + embeddable.
//      `views` is a real figure recorded on `checked`, not an estimate.
//   4. Honest. If a good video contains a factual slip, say so in `note`
//      rather than dropping the video or hiding the error.
//
// Run `node scripts/check-videos.mjs` to re-verify every id and refresh views.
// Videos rot — they go private, get deleted, or lose embed permission.

window.VIDEOS = {

  stoicism: {
    intro: 'Five that are worth the time — the short animated way in, the full philosophy, the two great teachers, and a real lecture for when you want depth. Ordered easiest first.',
    items: [
      {
        id: 'R9OCA6UFE-0',
        title: 'The philosophy of Stoicism',
        channel: 'TED-Ed',
        mins: '5:30',
        views: 11553159,
        why: 'The best five minutes you can spend on Stoicism. Written by Massimo Pigliucci, a philosopher who actually practises it — so the four virtues, the logos and the dichotomy of control all arrive intact, in an animation you would happily watch twice.',
        checked: '2026-08-20'
      },
      {
        id: 'EFkyxzJtiv4',
        title: 'Stoicism: Become Undefeatable',
        channel: 'Aperture',
        mins: '12:52',
        views: 13675924,
        why: 'The most-watched real Stoicism video on YouTube, and it earns it. Beautifully made, and it covers the ground this page covers — Zeno\'s shipwreck, expecting the rain, voluntary discomfort, the cosmopolis. It even stops to quote Musonius Rufus on why women should study philosophy.',
        checked: '2026-08-20'
      },
      {
        id: 'tv6W0Nv5ev0',
        title: 'Marcus Aurelius: The Man Who Solved the Universe',
        channel: 'Horses',
        mins: '14:11',
        views: 10827504,
        why: 'A sincere, warm essay on what it meant for the most powerful man alive to choose virtue every day for nineteen years with nobody watching. It opens by promising it is not a self-help video, and it keeps that promise — it sends you to the Meditations itself.',
        note: 'One slip: it calls Marcus a founder of Stoicism. He came about 450 years after Zeno, who founded it — see The key figures above.',
        checked: '2026-08-20'
      },
      {
        id: 'sY8lYexr72U',
        title: 'Be a Loser if Need Be — The Philosophy of Epictetus',
        channel: 'Einzelgänger',
        mins: '14:21',
        views: 3950629,
        why: 'The sharpest edge of Epictetus, put calmly: everything you are chasing for other people\'s approval is a lesser thing, and letting it go is worth looking like a failure. Quiet narration, no shouting, and it says outright that this is not a case for neglecting yourself.',
        checked: '2026-08-20'
      },
      {
        id: 'Auuk1y4DRgk',
        title: 'Marcus Aurelius\' Meditations: The Stoic Ideal',
        channel: 'Michael Sugrue',
        mins: '42:29',
        views: 3126229,
        why: 'A real university lecture, recorded on tape decades ago, that found three million people. No animation, no music — one professor who loves this material talking straight to you. Save it for a long walk. The closing minutes on Stoic freedom are the finest thing on this list.',
        note: 'He begins by placing Stoicism as one fragment of Socratic philosophy, and is candid that it lacks Plato\'s poetry — then argues it is the true heir of Socrates. Hear him out to the end.',
        checked: '2026-08-20'
      }
    ]
  }

};
