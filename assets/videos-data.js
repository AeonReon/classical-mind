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
,

  platonism: {
    intro: 'The Cave first — it is four and a half minutes and it will stay with you for years. Then the wider philosophy, the question the Republic was written to answer, and a real lecture on the Republic itself.',
    items: [
      { id: '1RWOpQXTltA', title: 'Plato\'s Allegory of the Cave', channel: 'TED-Ed', mins: '4:33', views: 8067081,
        why: 'The single most famous image in philosophy, told in four and a half minutes with animation that earns it. Prisoners, shadows, the painful climb into sunlight, and the freed man coming back down to a room that thinks he has gone blind. It ends by tying the Cave to the Forms, which is exactly the joint this page turns on.',
        checked: '2026-08-20' },
      { id: 'VDiyQub6vpw', title: 'PHILOSOPHY — Plato', channel: 'The School of Life', mins: '6:29', views: 7655929,
        why: 'Plato\'s four big ideas for a more fulfilled life, in six minutes: think properly rather than drifting on popular opinion, let the person you love change you, decode the message of beauty, and reform society. Warm, and it takes eudaimonia seriously rather than treating it as a curiosity.',
        checked: '2026-08-20' },
      { id: 'TfVmW6sNux8', title: 'Plato\'s allegory of the ring', channel: 'TED-Ed', mins: '5:39', views: 3333101,
        why: 'The Ring of Gyges — a shepherd finds a ring that makes him invisible, and does exactly what you fear he would. Glaucon uses it to ask Socrates the hardest question there is: would anyone be just if they could get away with not being? The whole Republic is the answer.',
        checked: '2026-08-20' },
      { id: '4nHj3gL_JN0', title: 'The Profound Meaning of Plato\'s Allegory of the Cave', channel: 'After Skool', mins: '16:42', views: 2326853,
        why: 'The Cave again, slowly, for someone who already knows the outline. It reads the climb as a hero\'s journey and sets it beside Prometheus — the one who steals the fire and is punished for bringing it back. Hand-drawn the whole way through, and reverent about the material.',
        checked: '2026-08-20' },
      { id: '8rf3uqDj00A', title: 'Plato\'s Republic I: Justice, Power, and Knowledge', channel: 'Michael Sugrue', mins: '46:22', views: 1103727,
        why: 'The deep one. A professor reading Book I closely and showing you something you would never catch alone: that Socrates loses the argument to Thrasymachus on purpose, badly enough to bait two clever young Athenians into taking over. The real subject of the Republic, he says, is the battle for their education.',
        checked: '2026-08-20' }
    ]
  },

  aristotle: {
    intro: 'Two short ones on the golden mean and eudaimonia, then three longer readings of the Nicomachean Ethics — the book Aristotle wrote to answer what the best human life is.',
    items: [
      { id: 'csIW4W_DYX4', title: 'PHILOSOPHY — Aristotle', channel: 'The School of Life', mins: '7:30', views: 5145976,
        why: 'The clearest short account of the golden mean anywhere: every virtue sits between two vices, and Aristotle worked out where. It uses his own example of conversation — the boor who takes offence at everything on one side, the buffoon who cannot resist a joke on the other, wit in the middle.',
        checked: '2026-08-20' },
      { id: 'PrvtOWEXDIQ', title: 'Aristotle & Virtue Theory', channel: 'CrashCourse', mins: '9:22', views: 4318019,
        why: 'Why Aristotle gives you no rulebook. Every other moral theory tells you what to do; his tells you who to be, on the reasoning that if you become a good person the right actions follow without effort. Fast, funny, and it lands proper functioning and eudaimonia properly.',
        checked: '2026-08-20' },
      { id: 'X6dG3dK03Zw', title: 'The Only Self-Help Book Worth Reading', channel: 'Unsolicited advice', mins: '20:26', views: 281467,
        why: 'Takes the modern self-improvement shelf and shows that almost all of it is already in the Nicomachean Ethics — and that Aristotle goes further. Good on habit in particular: he had the argument of Atomic Habits about 2,300 years early, and he had the part about character that the modern version drops.',
        checked: '2026-08-20' },
      { id: '9YaaBgDg57g', title: 'Intro to Aristotle\'s Ethics — Lecture 1: The Good', channel: 'Hillsdale College', mins: '23:51', views: 327084,
        why: 'A real classroom, and an unusually likeable teacher — he brings a toy Aristotle to the lectern so you can see how friendly he is. Starts where the Ethics starts: everything we do, we do for some good, so what is the good? First of a full lecture series if it takes hold of you.',
        checked: '2026-08-20' },
      { id: 'GteRElF533Q', title: 'Aristotle\'s guide to the good life', channel: 'Jared Henderson', mins: '29:18', views: 781784,
        why: 'The best single overview of the Ethics on YouTube. Happiness, the virtues, friendship, contemplation, and — useful if you have just read the Stoicism page — a straight comparison of where Aristotle and the Stoics part company.',
        checked: '2026-08-20' }
    ]
  },

  epicureanism: {
    intro: 'Epicurus is the most misread philosopher on this list — his name became a word for indulgence, and he lived on bread, cheese and watered wine. Every video here corrects that before it does anything else.',
    items: [
      { id: 'pIETGDgMdtg', title: 'The Philosopher of Pleasure — Epicurus', channel: 'Einzelgänger', mins: '11:11', views: 337666,
        why: 'Start here. It puts the misunderstanding to bed in the first two minutes — no orgies, no luxury, no permanent feast — and then explains what he actually meant by pleasure: the absence of pain in the body and of trouble in the soul.',
        checked: '2026-08-20' },
      { id: 'Oswc-jAgwgo', title: 'The Cheaper Your Pleasures, The Richer You\'ll Be', channel: 'Einzelgänger', mins: '11:38', views: 3391554,
        why: 'By far the most-watched thing on this page, and the easiest to feel in your own week. Epicurus chose weak wine, bread, cheese and conversation with friends over money and power, and the argument for why that is the richer life is made here without a word of scolding.',
        checked: '2026-08-20' },
      { id: 'E5f5smh7Keo', title: 'Epicurus\' Cure for Unhappiness', channel: 'Wireless Philosophy', mins: '9:32', views: 275234,
        why: 'A philosophy professor on the Tetrapharmakos — the four-part remedy Epicureans memorised the way you would memorise a prayer. God is nothing to fear, death nothing to worry about, what is good is easy to get, what is terrible is easy to endure. Precise, and short.',
        checked: '2026-08-20' },
      { id: 'kMkgNFbuKyw', title: 'How Epicurus Keeps Calm', channel: 'Einzelgänger', mins: '8:15', views: 148711,
        why: 'On ataraxia, and the distinction that makes Epicurus practical: moving pleasure is eating the chocolate, static pleasure is the contentment afterwards when hunger is gone. He built a whole way of living on preferring the second.',
        checked: '2026-08-20' },
      { id: 'TVb5OmjQUfM', title: 'An Ancient Guide to Happiness — Epicurus on How to Live Well', channel: 'Alex O\'Connor', mins: '1:48:49', views: 145711,
        why: 'Nearly two hours with a philosopher who actually lives as an Epicurean, so the questions are the awkward ones — starting with "why are you so selfish?" His answer is that the Garden was a school full of close friends, and that friendship, not appetite, is the centre of it. Save this for a long journey.',
        checked: '2026-08-20' }
    ]
  },

  cynicism: {
    intro: 'The hard part with Diogenes is that the anecdotes are so good the philosophy gets lost, and most of YouTube treats him as a comedy act. These five keep the jokes and keep the argument.',
    items: [
      { id: 'Utzym1I_BiY', title: 'The philosophy of cynicism', channel: 'TED-Ed', mins: '5:26', views: 4542991,
        why: 'Written by William D. Desmond, who wrote the scholarly books on the Cynics, so in five minutes you get the counterfeit coins, the cloak and knapsack, Alexander told to stop blocking the sun — and the point of the dog: kyôn was an insult, and they took it, because dogs are happy and free of wealth and reputation.',
        checked: '2026-08-20' },
      { id: 'd7aWla3cwNg', title: 'The Most Savage Philosopher of All Time', channel: 'Sisyphus 55', mins: '8:24', views: 2908352,
        why: 'The title is doing the work of getting you to click, but the video underneath is serious and admiring. Good on the thing that makes Cynicism a philosophy rather than an act — that it is a doing rather than a written system, a shortcut to virtue that its own followers admitted is brutally hard.',
        checked: '2026-08-20' },
      { id: 'o2ctYfy7-Ec', title: 'Introduction to Diogenes the Cynic', channel: 'Academy of Ideas', mins: '12:20', views: 455363,
        why: 'The one that does the job nothing else on YouTube does: separates the ancient Cynic from the modern cynic. A modern cynic thinks life is not worth having. When a man said as much to Diogenes, he corrected him — not life, only a bad life. Calm, and it traces the line straight on into Stoicism.',
        checked: '2026-08-20' },
      { id: '8EM_cfYcDjY', title: 'Diogenes: The Most Eccentric Philosopher', channel: 'Biographics', mins: '18:39', views: 722288,
        why: 'The life rather than the doctrine — Sinope, the mint, the scandal over the coinage, exile, the wine jar, the sale into slavery, and the deathbed. Told straight, and honest about how much is legend.',
        note: 'One slip in the opening line: it calls Diogenes "the original stoic". He was a Cynic. Stoicism came later, through his pupil Crates, who taught Zeno — see The key figures above.',
        checked: '2026-08-20' },
      { id: 'OZyM4h2UEjc', title: 'The Philosopher who Hated Everyone', channel: 'Unsolicited advice', mins: '23:00', views: 472816,
        why: 'The fullest reading of the five, built on the Oxford University Press book on Diogenes and open about the debt. Renunciation, why dogs are wiser than people, and a genuinely useful closing argument for being more patient with irritating contrarians.',
        checked: '2026-08-20' }
    ]
  },

  confucius: {
    intro: 'Confucius gets quoted constantly and read almost never. Start with who he actually was and why ritual mattered so much to him, then the tradition that grew out of him.',
    items: [
      { id: 'wFt_VGG0kJU', title: 'Who was Confucius?', channel: 'TED-Ed', mins: '4:29', views: 1748575,
        why: 'Written by Bryan W. Van Norden, one of the leading scholars of Chinese philosophy. Four and a half minutes on the man himself — noble birth, childhood poverty, the Royal Archives, and a lifetime spent looking for a ruler worth serving and refusing to settle for one who was not.',
        checked: '2026-08-20' },
      { id: 'tUhGRh4vdb8', title: 'EASTERN PHILOSOPHY — Confucius', channel: 'The School of Life', mins: '5:36', views: 2366451,
        why: 'This one takes the ideas that sound most old-fashioned to a modern ear — ritual propriety, reverence, filial duty — and argues we need them more precisely because they sound that way. The exchange about the sheep and the ceremony is worth the five minutes on its own.',
        checked: '2026-08-20' },
      { id: 'mOGoHnU4LDM', title: 'History-Makers: Confucius', channel: 'Overly Sarcastic Productions', mins: '9:37', views: 609005,
        why: 'The fun one. Fast, funny, drawn in marker pen — and underneath the jokes it is careful work, honest that we know almost nothing certain about Kong Qiu the man and that his real legacy runs through his students. The jokes are aimed at collapsing dynasties, never at him.',
        checked: '2026-08-20' },
      { id: 'PG-XUE0CyQk', title: 'Intro to Confucianism', channel: 'ReligionForBreakfast', mins: '18:22', views: 527480,
        why: 'The proper survey. Is Confucianism a philosophy, a political theory, a way of life or a religion — and the answer is all of them at once. Covers the Five Classics, the civil service exams, ancestor veneration, and how the ideas spread into Korea and Japan. First of a series.',
        checked: '2026-08-20' },
      { id: 'bFeXJkcKYaU', title: 'Confucius, or What to Do When Elites Break The Rules', channel: 'Philosophy Tube', mins: '34:20', views: 1423414,
        why: 'Opens by admitting that a full philosophy degree never once taught Confucius, then makes the case that he is urgently relevant — because the problem he faced was a powerful family who could ignore the rules while everyone else was expected to keep them, and ordinary people asking why they should bother.',
        checked: '2026-08-20' }
    ]
  }
,

  // ---------------------------------------------------------------------
  // The Great Minds (masters.html). ONE video per figure, keyed by master id.
  // Aim is 5–10 minutes and a genuine introduction to the person.
  //
  // Three entries break the length rule on purpose — Pythagoras, Erasmus and
  // C.S. Lewis simply have no good short introduction in English on YouTube,
  // and a weak short video is worse than a strong long one. Each says so in
  // its own blurb.
  //
  // Plato, Aristotle and Marcus Aurelius reuse the video already chosen for
  // their school page — in each case it is still the best introduction to the
  // person, and the two pages are read in different places.
  // ---------------------------------------------------------------------
  masters: {

    homer: { id: '1e7gy3fsJa8', title: 'History-Makers: Homer', channel: 'Overly Sarcastic Productions', mins: '10:34', views: 857258,
      why: 'Nobody can tell you who Homer was, and this is the video that explains why so well you stop minding. The blind poet of Chios, the geography of the Iliad so accurate that Schliemann dug where the poem said and found Troy — and the Odyssey, where even Homer sounds unsure where Ithaca is.',
      checked: '2026-08-20' },

    pythagoras: { id: 'HgR6YrJDUR8', title: 'Pythagoras & His Weird Religious Cult', channel: 'Let\'s Talk Religion', mins: '22:47', views: 1285175,
      why: 'Careful, scholarly, and it restores the half of Pythagoras that school leaves out: he was not only a mathematician but the head of a religious brotherhood with rules about silence, purity and beans, who held that number is the substance of reality and that the soul is reborn.',
      note: 'Longer than the others here at 23 minutes. Pythagoras has no good short introduction in English on YouTube — the short ones are jokes about the theorem.',
      checked: '2026-08-20' },

    socrates: { id: 'rKhfFBbVtFg', title: 'The Death of Socrates: How To Read A Painting', channel: 'Nerdwriter1', mins: '7:34', views: 4392034,
      why: 'An unusual way in, and the best one. It reads David\'s painting of the death scene inch by inch, and to do that it has to tell you the trial, the charges, the escape Socrates refused, and the last lesson from the Phaedo — that a philosopher should not fear death. Seven minutes, and beautiful.',
      checked: '2026-08-20' },

    plato: { id: 'VDiyQub6vpw', title: 'PHILOSOPHY — Plato', channel: 'The School of Life', mins: '6:29', views: 7655929,
      why: 'Plato\'s four ideas for a more fulfilled life in six minutes — think properly instead of drifting on popular opinion, let the person you love change you, decode the message of beauty, reform society. The same video sits on the Platonism page; it is still the best short introduction to the man.',
      checked: '2026-08-20' },

    aristotle: { id: 'csIW4W_DYX4', title: 'PHILOSOPHY — Aristotle', channel: 'The School of Life', mins: '7:30', views: 5145976,
      why: 'The golden mean explained through his own example — the boor who takes offence at everything, the buffoon who cannot stop joking, and wit sitting between them. Also on the Aristotelianism page, and it earns its place twice.',
      checked: '2026-08-20' },

    euclid: { id: 'WqzK3UAXaHs', title: 'Euclid as the father of geometry', channel: 'Khan Academy', mins: '8:22', views: 1620335,
      why: 'Why Euclid is called the father of geometry when he was not the first to study it: he took what was known and built it into a single deductive structure, from a handful of definitions and postulates up. Sal Khan is unhurried and genuinely delighted by it.',
      checked: '2026-08-20' },

    cicero: { id: '6DRu9INTzbY', title: 'The Life and Death of Cicero', channel: 'The History Guy', mins: '10:56', views: 283914,
      why: 'His words are remembered and his life is not, which this sets out to correct. The novus homo who reached the consulship on his voice alone, the Catiline conspiracy, the long fight for the Republic, and enemies who hated his oratory enough to hunt him down for it.',
      checked: '2026-08-20' },

    virgil: { id: 'p4mbk59rbjE', title: 'Why should you read Virgil\'s "Aeneid"?', channel: 'TED-Ed', mins: '5:35', views: 1180781,
      why: 'Opens with Virgil dying of heatstroke, unhappy with ten years of work, asking his friends to burn the Aeneid — and Augustus ordering it published instead. Then what the poem is: Rome answering Homer, in 9,896 lines of dactylic hexameter, and what Augustus wanted from it.',
      checked: '2026-08-20' },

    seneca: { id: 'm5DABiixjXE', title: 'Life Is Not Short; We Just Waste Most of It', channel: 'Pursuit of Wonder', mins: '11:48', views: 1046059,
      why: 'On the Shortness of Life, read closely and beautifully narrated. It is also honest about the thing that makes Seneca hard — that the richest man in Rome, tutor to Nero, spent his life writing about how little wealth matters, and struggled to follow his own advice.',
      checked: '2026-08-20' },

    epictetus: { id: 'bvYK-IWwKaw', title: 'How Epictetus Stayed Calm — 3 Stoic Methods', channel: 'Einzelgänger', mins: '6:56', views: 783462,
      why: 'Starts from the fact that matters most about him: Marcus Aurelius was an emperor and Epictetus was a slave, and they held the same philosophy — so it cannot be a philosophy for the fortunate. Then three of his methods, plainly, in under seven minutes.',
      checked: '2026-08-20' },

    'marcus-aurelius': { id: 'tv6W0Nv5ev0', title: 'Marcus Aurelius: The Man Who Solved the Universe', channel: 'Horses', mins: '14:11', views: 10827504,
      why: 'What it meant for the most powerful man alive to choose virtue every day for nineteen years with nobody watching. Also on the Stoicism page, and still the best introduction to him anywhere.',
      note: 'One slip: it calls Marcus a founder of Stoicism. He came about 450 years after Zeno, who founded it.',
      checked: '2026-08-20' },

    augustine: { id: 'hBAxUBeVfsk', title: 'PHILOSOPHY — Augustine', channel: 'The School of Life', mins: '6:25', views: 1938046,
      why: 'Augustine as the great critic of Roman optimism — of the confident, self-improving, technologically pleased outlook that he thought could not carry the weight people put on it. Sets his argument beside the modern West deliberately, and takes it seriously.',
      checked: '2026-08-20' },

    boethius: { id: 'pMUP48stXDc', title: 'Boethius\'s Consolation of Philosophy', channel: 'The School of Life', mins: '9:27', views: 564009,
      why: 'For four hundred years this was the most prized book in Europe after the Bible — Chaucer translated it, so did Elizabeth I, and Dante built it into the Divine Comedy. Written in a few months in a prison cell in Pavia by a man awaiting execution, about the wheel of Fortune and what it cannot take.',
      checked: '2026-08-20' },

    aquinas: { id: 'GJvoFf2wCBU', title: 'PHILOSOPHY — Thomas Aquinas', channel: 'The School of Life', mins: '6:15', views: 1870981,
      why: 'The clearest short account of what Aquinas actually did: he argued that any human being, Christian or not, can reach great truths by reason, because reason is a gift given to everyone. The modern conviction that a good idea counts regardless of who it comes from is partly his doing.',
      checked: '2026-08-20' },

    dante: { id: 'YbCEWSip9pQ', title: 'Why should you read Dante\'s "Divine Comedy"?', channel: 'TED-Ed', mins: '5:10', views: 2117313,
      why: 'The whole architecture in five minutes — nine circles down, the mountain of Purgatory up, the nine spheres of Heaven — and the two things people miss: that it is a love story, and that it is a very funny and very savage piece of Florentine political score-settling.',
      checked: '2026-08-20' },

    erasmus: { id: 'po7QCNVnIzw', title: 'Erasmus, In Praise of Folly', channel: 'Michael Sugrue', mins: '45:55', views: 94383,
      why: 'A professor on the most likeable figure of the whole Reformation era — a devout Catholic priest and brilliant Greek scholar who never climbed the hierarchy, and who argued for a humane, generous, non-theological piety while everyone around him was hardening into camps. Also on why comedy can teach what argument cannot.',
      note: 'Forty-six minutes, far longer than the rest. There is no good short introduction to Erasmus in English on YouTube — the short ones are thin or machine-narrated, and this is worth the time.',
      checked: '2026-08-20' },

    newman: { id: 'AcR0NrFJmIc', title: 'Newman: Beyond the Left and the Right', channel: 'Bishop Robert Barron', mins: '10:30', views: 65684,
      why: 'Ten minutes on Newman\'s two great themes — the development of doctrine, and the primacy of conscience — and a good argument that both get pulled out of shape when people press him into modern camps. It insists on reading him inside his own framework, which is the right way to meet anyone here.',
      checked: '2026-08-20' },

    lewis: { id: 'qgj3ctK7o30', title: 'The Tragic Life of C.S. Lewis — Narnia\'s Lost Poet', channel: 'Absolute History', mins: '57:36', views: 880150,
      why: 'A proper broadcast documentary, presented by A.N. Wilson, who wrote a biography of him. The man of contrasts — the medieval scholar who hated the modern age, the popular theologian who had a crisis of faith, the Oxford don who failed his driving test seventeen times, and the three women whose loss shaped him.',
      note: 'Just under an hour. Searching for a short C.S. Lewis introduction turns up mostly machine-narrated clickbait or broadcasts that end in an appeal; this is the one serious biography of him on YouTube.',
      checked: '2026-08-20' }

  }

};
