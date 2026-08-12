// greatbooks-data.js — the curated canon for greatbooks.html. Grouped by era
// (GB_ERAS order). Each book: id, title, author, era, year, hook, sections[]
// where a section is { h, body } or { h, bullets:[] }. The "Read free" link is
// built at render time from title+author (Project Gutenberg search). Add books
// by appending here; keep `era` matching one of GB_ERAS exactly.

window.GB_ERAS = ['Ancient Greece', 'Ancient Rome', 'The Middle Ages', 'Renaissance & Early Modern', 'The Enlightenment & Beyond', 'The Nineteenth Century'];

window.GREATBOOKS = [
{
  id: 'the-iliad', title: 'The Iliad', author: 'Homer', era: 'Ancient Greece', year: 'c. 750 BC',
  hook: 'A single warrior\'s rage in the tenth year of the Trojan War exposes the glory and horror of the heroic ideal.',
  sections: [
    { h: 'What it is', body: 'An epic poem in dactylic hexameter, the oldest surviving work of Western literature. It narrates a few weeks near the end of the ten-year Greek siege of Troy. Rooted in an oral tradition of performed song, it fixes the Greek heroic world in verse.' },
    { h: 'The story', body: 'When King Agamemnon seizes the war-prize of his greatest fighter, Achilles, the insulted hero withdraws from battle and lets the Greeks be slaughtered. Only when his beloved companion Patroclus is killed by the Trojan prince Hector does Achilles return, consumed by grief and fury. He kills Hector and defiles his body. The poem closes as Hector\'s father, King Priam, comes in secret to beg for his son\'s corpse, and the two enemies weep together.' },
    { h: 'Big ideas', bullets: ['Kleos: the pursuit of undying glory as the answer to mortality', 'Wrath and its ruinous cost to friend and foe alike', 'The tension between personal honour and the common good', 'Human lives caught between free choice and the will of the gods', 'Shared grief as the ground of a fragile, hard-won compassion'] },
    { h: 'Why it endures', body: 'It looks unflinchingly at war\'s brutality while honouring the courage of those caught in it. Its final scene of enemies sharing sorrow remains one of literature\'s most humane moments, and its questions about glory, loss, and mortality still speak directly to us.' }
  ]
},
{
  id: 'the-odyssey', title: 'The Odyssey', author: 'Homer', era: 'Ancient Greece', year: 'c. 725 BC',
  hook: 'A war hero\'s ten-year struggle to sail home becomes the archetypal journey of cunning, endurance, and homecoming.',
  sections: [
    { h: 'What it is', body: 'An epic poem, the companion to the Iliad, blending sea-adventure, folktale, and homecoming drama. It follows Odysseus, king of Ithaca, on his long return from the Trojan War. Its non-linear structure, told partly in flashback, was strikingly sophisticated for its age.' },
    { h: 'The story', body: 'Held captive by the nymph Calypso and blocked by the sea-god Poseidon, Odysseus is stranded far from home. Meanwhile his wife Penelope fends off aggressive suitors and his son Telemachus sets out to find news of his father. Odysseus recounts his ordeals, from the blinded Cyclops to the witch Circe and the underworld. At last he reaches Ithaca in disguise, and with Telemachus slaughters the suitors and reclaims his household and his wife.' },
    { h: 'Big ideas', bullets: ['Cunning intelligence (metis) prized over brute strength', 'Nostos: the deep human longing for home', 'Hospitality (xenia) as a sacred test of character', 'Loyalty, patience, and marital fidelity across long absence', 'Identity, disguise, and the many masks a survivor wears'] },
    { h: 'Why it endures', body: 'It is the template for every adventure and quest narrative that followed, and its wandering hero gave us the word "odyssey" itself. Its themes of homecoming, temptation, and endurance remain endlessly retold and reimagined.' }
  ]
},
{
  id: 'the-histories', title: 'The Histories', author: 'Herodotus', era: 'Ancient Greece', year: 'c. 430 BC',
  hook: 'The founding work of history sets out to explain why Greeks and Persians went to war, and gathers a whole world along the way.',
  sections: [
    { h: 'What it is', body: 'A sprawling prose inquiry, its Greek title historia meaning "investigation." Written by the man Cicero called the "Father of History," it is the first Western attempt to record human events with research rather than myth. It weaves geography, ethnography, and anecdote around its central subject.' },
    { h: 'The argument', body: 'Herodotus claims to preserve great deeds from oblivion and to explain the causes of the conflict between the Greek city-states and the Persian Empire. He traces the rise of Persia under Cyrus, Cambyses, Darius, and Xerxes, digressing into the customs of Egypt, Scythia, and many other peoples. The narrative builds toward the Greco-Persian Wars and the pivotal battles of Marathon, Thermopylae, Salamis, and Plataea, where a smaller free Greece repels a vast empire.' },
    { h: 'Big ideas', bullets: ['History as reasoned inquiry into cause, not divine myth', 'The clash of freedom and imperial despotism', 'Cultural relativism: custom (nomos) as king of all', 'Hubris and the reversals of fortune that humble the mighty', 'Curiosity about foreign peoples as a serious pursuit'] },
    { h: 'Why it endures', body: 'It invented the very idea of researched history while remaining a superb storyteller\'s treasury of the ancient world. Its blend of hard reporting, tall tale, and moral reflection makes it both a source and a delight.' }
  ]
},
{
  id: 'peloponnesian-war', title: 'History of the Peloponnesian War', author: 'Thucydides', era: 'Ancient Greece', year: 'c. 400 BC',
  hook: 'A cold-eyed insider dissects the long war that broke Athens, founding the realist study of power and politics.',
  sections: [
    { h: 'What it is', body: 'A rigorous prose history of the decades-long war between Athens and Sparta and their allies. Written by an Athenian general who was exiled after a defeat, it aims for strict factual accuracy over entertainment. Thucydides called it "a possession for all time."' },
    { h: 'The argument', body: 'He argues the war\'s truest cause was Spartan fear of growing Athenian power, and traces the conflict from its outbreak through plague, shifting alliances, and brutal reversals. Set-piece speeches, including Pericles\' Funeral Oration and the chilling Melian Dialogue, dramatise the reasoning of leaders and states. He shows how war corrodes language, morality, and civic life, and how the disastrous Sicilian Expedition hastened Athens\' ruin. The account breaks off unfinished, mid-sentence.' },
    { h: 'Big ideas', bullets: ['Realism: states act from fear, interest, and honour, not justice', '"The strong do what they can and the weak suffer what they must"', 'How war degrades morality, language, and political stability', 'Democracy\'s vulnerability to demagogues and reckless ambition', 'History as analysis of recurring human nature, not one-off events'] },
    { h: 'Why it endures', body: 'It is the foundational text of political realism and is still studied in military academies and international-relations departments. Its diagnosis of how power and fear drive conflict feels as sharp now as it did then.' }
  ]
},
{
  id: 'the-republic', title: 'The Republic', author: 'Plato', era: 'Ancient Greece', year: 'c. 375 BC',
  hook: 'To ask what justice is, Plato builds an entire ideal city in words and redefines the good life for the soul.',
  sections: [
    { h: 'What it is', body: 'A philosophical dialogue in ten books, with Socrates as its lead voice questioning a circle of interlocutors. It uses the search for a just city as a way to examine the just individual. The conversational form dramatises philosophy as a living argument.' },
    { h: 'The argument', body: 'Challenged to prove that justice is worth having for its own sake, Socrates constructs an imaginary city to see justice "written large." He divides it into producers, guardian-soldiers, and philosopher-rulers, mirroring three parts of the human soul. Justice, he concludes, is each part doing its proper work in harmony. Along the way he offers the Allegory of the Cave, the theory of Forms, a controversial programme of education and communal life, and a ranking of political regimes from best to worst.' },
    { h: 'Big ideas', bullets: ['Justice as harmony among the parts of soul and city', 'The philosopher-king: rule by those who know the good', 'The Allegory of the Cave: the ascent from illusion to truth', 'The Theory of Forms and the Form of the Good above all', 'The three-part soul: reason, spirit, and appetite'] },
    { h: 'Why it endures', body: 'It set the agenda for Western philosophy, ethics, and political theory for over two thousand years. Even readers who reject its ideal state keep returning to its questions about justice, knowledge, and how we should live.' }
  ]
},
{
  id: 'nicomachean-ethics', title: 'Nicomachean Ethics', author: 'Aristotle', era: 'Ancient Greece', year: 'c. 340 BC',
  hook: 'The most influential book on how to live well argues that a good life is built, habit by habit, into good character.',
  sections: [
    { h: 'What it is', body: 'A practical philosophical treatise, likely assembled from lecture notes and named for Aristotle\'s son Nicomachus. It asks what the highest human good is and how a person becomes genuinely good. Unlike abstract theory, it aims to help us actually live better.' },
    { h: 'The argument', body: 'Aristotle argues that everything we do aims at some good, and the highest good is eudaimonia, usually rendered "flourishing" or "happiness." This is achieved not by pleasure or honour alone but by activity of the soul in accordance with virtue over a complete life. Moral virtues like courage and generosity are habits, learned by practice, each a mean between extremes of excess and deficiency. He explores friendship at length and crowns the work with the contemplative life as the fullest human happiness.' },
    { h: 'Big ideas', bullets: ['Eudaimonia: flourishing, not mere pleasure, as life\'s true goal', 'Virtue as a habit formed by repeated action, not a feeling', 'The Golden Mean: virtue as a balance between two extremes', 'Practical wisdom (phronesis) that judges the right act in context', 'Friendship as essential to a complete and happy life'] },
    { h: 'Why it endures', body: 'It launched virtue ethics, a tradition undergoing a major revival in modern moral philosophy. Its down-to-earth insight that character is built by practice remains some of the most usable wisdom ever written.' }
  ]
},
{
  id: 'the-theban-plays', title: 'The Theban Plays (Oedipus the King & Antigone)', author: 'Sophocles', era: 'Ancient Greece', year: 'c. 441 BC',
  hook: 'Two of tragedy\'s greatest plays trace a cursed royal house where the search for truth and the demands of conscience end in ruin.',
  sections: [
    { h: 'What it is', body: 'Two Athenian tragedies for the stage, written by Sophocles though not as a continuous trilogy. They dramatise the doomed royal family of Thebes across generations. Performed at civic religious festivals, they pair spoken drama with the choral odes of a communal chorus.' },
    { h: 'The story', body: 'In Oedipus the King, Thebes suffers a plague, and King Oedipus vows to hunt down the murderer of the former king, only to discover through relentless inquiry that he himself unknowingly killed his father and married his mother. In horror he blinds himself and is cast out. In Antigone, set later, his daughter Antigone defies King Creon\'s decree by burying her rebel brother, insisting the gods\' unwritten laws outrank the state\'s. Creon condemns her, and his stubbornness costs him his son and wife.' },
    { h: 'Big ideas', bullets: ['Fate and free will: destiny fulfilled through the effort to escape it', 'The painful, sometimes ruinous price of pursuing truth', 'Conscience and divine law versus the authority of the state', 'Hubris and the blindness of those who think they see', 'Individual conviction standing against unbending power'] },
    { h: 'Why it endures', body: 'Oedipus became Aristotle\'s model of tragic construction and later shaped Freud\'s theory of the mind. Antigone\'s clash between conscience and law is quoted in every age that debates civil disobedience.' }
  ]
},
{
  id: 'the-oresteia', title: 'The Oresteia', author: 'Aeschylus', era: 'Ancient Greece', year: '458 BC',
  hook: 'The only surviving Greek tragic trilogy follows a cycle of blood-vengeance until justice itself is finally reinvented.',
  sections: [
    { h: 'What it is', body: 'A trilogy of three linked tragedies, Agamemnon, The Libation Bearers, and The Eumenides, the only complete example to survive. It follows one crime breeding the next across the house of Atreus. Written by the earliest of the great Greek tragedians, it fuses myth with the politics of Aeschylus\' own Athens.' },
    { h: 'The story', body: 'King Agamemnon returns victorious from Troy and is murdered by his wife Clytemnestra, in revenge for his sacrifice of their daughter. Their son Orestes, commanded by the god Apollo, then avenges his father by killing his own mother. Hounded by the Furies for the crime of matricide, Orestes flees to Athens, where the goddess Athena convenes a jury of citizens to try him. His acquittal ends the cycle of blood-for-blood and transforms the vengeful Furies into protective spirits of the city.' },
    { h: 'Big ideas', bullets: ['The endless, self-feeding cycle of blood-vengeance', 'The shift from private revenge to public, lawful justice', 'The birth of the trial by jury and the rule of law', 'Divine will, human guilt, and inherited family curses', '"Wisdom through suffering" as the hard gift of the gods'] },
    { h: 'Why it endures', body: 'It stages nothing less than the birth of civilised justice, replacing the blood feud with the courtroom. That transition from vengeance to law remains one of the most powerful ideas in Western culture.' }
  ]
},
{
  id: 'euclids-elements', title: 'Elements', author: 'Euclid', era: 'Ancient Greece', year: 'c. 300 BC',
  hook: 'From a handful of self-evident starting points, Euclid deduces geometry itself and defines rigorous proof for all time.',
  sections: [
    { h: 'What it is', body: 'A mathematical treatise in thirteen books, systematising the geometry and number theory known to the Greek world. It is arguably the most successful and influential textbook ever written. It presents mathematics as a chain of proofs built from first principles.' },
    { h: 'The argument', body: 'Euclid begins with a short list of definitions, postulates, and common notions taken as self-evidently true. From these alone he derives hundreds of propositions in strict logical order, each proven from what came before. The books cover plane geometry, proportion, number theory, including a proof that primes are infinite, and culminate in the construction of the five regular Platonic solids. Nothing is asserted without demonstration.' },
    { h: 'Big ideas', bullets: ['The axiomatic method: build all truth from a few first principles', 'Rigorous deductive proof as the standard of certainty', 'The Pythagorean theorem, proven from the ground up', 'The infinitude of prime numbers', 'Logical structure as beautiful and self-contained'] },
    { h: 'Why it endures', body: 'For over two thousand years it was the model of how to reason clearly, studied by everyone from Newton to Lincoln. Its axiomatic method still underpins how mathematics and logic are done today.' }
  ]
},
{
  id: 'the-aeneid', title: 'The Aeneid', author: 'Virgil', era: 'Ancient Rome', year: '19 BC',
  hook: 'Rome\'s national epic follows a Trojan refugee whose duty and suffering found the destiny of an empire.',
  sections: [
    { h: 'What it is', body: 'A Latin epic poem in twelve books, consciously modelled on Homer to give Rome its own founding myth. Written under the emperor Augustus, it fuses legend with the ideology of a new imperial age. Virgil left it not fully polished at his death, asking that it be burned; Augustus overruled him.' },
    { h: 'The story', body: 'Aeneas, a Trojan prince, escapes the fall of Troy carrying his aged father and leading survivors to seek a promised new home in Italy. Driven by fate and the goddess Juno\'s hatred, he is shipwrecked at Carthage, where Queen Dido falls in love with him; when duty forces him to leave, she kills herself. He descends to the underworld to see Rome\'s future glory foretold, then reaches Italy, where he must fight a bitter war against the Latins. The poem ends abruptly as he kills his enemy Turnus in a rage.' },
    { h: 'Big ideas', bullets: ['Pietas: duty to gods, country, and family above personal desire', 'Fate and destiny as the engine of history', 'The human cost of empire, felt beneath its glory', 'Founding a nation through sacrifice and suffering', 'The pull between private love and public obligation'] },
    { h: 'Why it endures', body: 'It became the central text of Roman identity and the bridge between Homer and later European literature, revered through the Middle Ages and beyond. Its ambivalence, celebrating Rome yet mourning what empire costs, keeps it endlessly debated.' }
  ]
},
{
  id: 'meditations', title: 'Meditations', author: 'Marcus Aurelius', era: 'Ancient Rome', year: 'c. 175 AD',
  hook: 'A Roman emperor\'s private notebook, teaching himself daily how to live with reason, duty, and calm.',
  sections: [
    { h: 'What it is', body: 'A collection of personal writings by Marcus Aurelius, emperor of Rome, never intended for publication. Written in Greek across twelve short books, it takes the form of scattered reflections, reminders, and self-instructions. It is one of the great surviving documents of Stoic philosophy in practice rather than theory.' },
    { h: 'The argument', body: 'Marcus tells himself that the only thing truly in his control is his own mind and judgement, not external events. He urges acceptance of nature and fate, since all things flow from a rational cosmic order. He returns constantly to the shortness of life and the certainty of death as reasons to act well now. Anger, ambition, and complaint are wasted energy; duty to the common good is the point of a human life.' },
    { h: 'Big ideas', bullets: ['Control what is yours — your judgement — and let go of the rest', 'The universe is a rational, interconnected whole', 'Death is natural and nothing to fear', 'Serve the common good; we are made for one another', 'The present moment is all anyone ever truly has'] },
    { h: 'Why it endures', body: 'Because the most powerful man in the world used philosophy not to rule others but to master himself, and wrote it down with unguarded honesty. Its practical, undogmatic wisdom still reads as a direct companion for anyone facing stress, loss, or temptation.' }
  ]
},
{
  id: 'parallel-lives', title: 'Parallel Lives', author: 'Plutarch', era: 'Ancient Rome', year: 'c. 100 AD',
  hook: 'Paired biographies of Greek and Roman greats, weighing character over conquest to ask what makes a life admirable.',
  sections: [
    { h: 'What it is', body: 'A series of biographies by the Greek writer Plutarch, pairing a famous Greek figure with a comparable Roman one — Alexander with Caesar, Demosthenes with Cicero, and many more. Each pair is often followed by a short comparison weighing the two men. Plutarch wrote as a moralist, not a historian, using lives as case studies in virtue and vice.' },
    { h: 'The story', body: 'Across dozens of lives, Plutarch traces the rise and fall of statesmen, generals, and lawgivers from Theseus and Lycurgus to Antony and Brutus. He lingers on revealing anecdotes, offhand remarks, and small choices rather than exhaustive battle accounts. A joke, an act of mercy, or a moment of pride tells him more about a man than a victory. The pairings invite the reader to compare how each figure met ambition, power, and misfortune.' },
    { h: 'Big ideas', bullets: ['Character is revealed in small moments, not just great deeds', 'Virtue and vice can be studied through real lives', 'Greek and Roman greatness can be measured side by side', 'Ambition and power test the soul', 'Biography is a school for living well'] },
    { h: 'Why it endures', body: 'It shaped how the West imagines its heroes and villains, feeding Shakespeare, Montaigne, and the founders of modern republics. Its faith that we learn to live by studying real human lives keeps it vivid long after the empires it describes have gone.' }
  ]
},
{
  id: 'on-duties', title: 'On Duties', author: 'Cicero', era: 'Ancient Rome', year: '44 BC',
  hook: 'Rome\'s greatest orator, near the end of his life, sets out how an honourable person should actually behave.',
  sections: [
    { h: 'What it is', body: 'A treatise on moral duty written by Cicero as a letter of advice to his son Marcus, then studying in Athens. Drawing on Greek Stoic sources, it blends philosophy with the practical experience of a Roman statesman. It is cast in three books and became one of the most influential moral works ever written.' },
    { h: 'The argument', body: 'Cicero argues that what is truly honourable and what is truly useful can never really conflict, though they often appear to. He examines the four cardinal virtues — wisdom, justice, courage, and moderation — as the roots of all duty. He insists that justice, including keeping faith and avoiding harm, binds even the powerful. When apparent advantage tempts us toward wrongdoing, he shows that dishonourable gain is never genuine gain.' },
    { h: 'Big ideas', bullets: ['The honourable and the useful ultimately agree', 'Duty flows from the four cardinal virtues', 'Justice and good faith bind everyone, including rulers', 'Public service is a moral obligation', 'No real advantage comes from wrongdoing'] },
    { h: 'Why it endures', body: 'It carried classical ethics into the Christian and Renaissance worlds and was among the first books printed in Europe. Its clear insistence that morality and self-interest need not be enemies still frames how we think about honesty in public and private life.' }
  ]
},
{
  id: 'on-the-nature-of-things', title: 'On the Nature of Things', author: 'Lucretius', era: 'Ancient Rome', year: 'c. 55 BC',
  hook: 'An epic poem that explains the whole universe as atoms and void — and offers that vision as freedom from fear.',
  sections: [
    { h: 'What it is', body: 'A long philosophical poem in six books, written in Latin hexameter by Lucretius. It sets out the physics and ethics of the Greek philosopher Epicurus in soaring verse. Part science, part sermon, it aims to explain the natural world and free readers from superstition.' },
    { h: 'The argument', body: 'Lucretius argues that everything is made of tiny indivisible particles — atoms — moving through empty space. Nothing comes from nothing and nothing is destroyed into nothing; things merely recombine. The soul too is material and dies with the body, so death is not to be feared, for when we are, death is not, and when death is, we are not. The gods exist but take no interest in us, so fear of divine punishment is groundless.' },
    { h: 'Big ideas', bullets: ['All things are made of atoms moving in void', 'Nothing arises from nothing; nothing truly perishes', 'The soul is mortal, so death is nothing to fear', 'The gods do not intervene in human affairs', 'Understanding nature frees us from superstition and dread'] },
    { h: 'Why it endures', body: 'Rediscovered in the Renaissance, it stunned readers with a materialist, almost modern picture of the cosmos and helped spark scientific thought. Its argument that grasping how nature works can calm human fear still feels startlingly alive.' }
  ]
},
{
  id: 'metamorphoses', title: 'Metamorphoses', author: 'Ovid', era: 'Ancient Rome', year: '8 AD',
  hook: 'A dazzling tapestry of myth in which everything is always changing shape — the founding storybook of Western imagination.',
  sections: [
    { h: 'What it is', body: 'A narrative poem in fifteen books by Ovid, gathering hundreds of Greek and Roman myths into a single flowing whole. Its unifying theme is transformation — gods, mortals, and nymphs turning into animals, plants, stars, and stone. It runs from the creation of the world to the era of Julius Caesar.' },
    { h: 'The story', body: 'Beginning with chaos shaped into an ordered cosmos, the poem moves through tale after tale of desire, punishment, and change. Daphne becomes a laurel tree to escape Apollo; Arachne is turned to a spider for her pride; Narcissus wastes away gazing at his reflection. Stories flow into one another with cunning transitions, forming an endless chain rather than separate chapters. It closes by promising the poet\'s own immortality through his verse.' },
    { h: 'Big ideas', bullets: ['Change is the one constant of the universe', 'Desire and passion drive both gods and mortals', 'Pride and defiance invite transformation as punishment', 'Myth explains the origins of the natural world', 'Art can grant a kind of immortality'] },
    { h: 'Why it endures', body: 'It became the great sourcebook of classical mythology for later ages, shaping Dante, Chaucer, Shakespeare, and countless painters. Its playful, humane storytelling and its vision of a world in ceaseless flux keep it endlessly retold.' }
  ]
},
{
  id: 'letters-from-a-stoic', title: 'Letters from a Stoic', author: 'Seneca', era: 'Ancient Rome', year: 'c. 65 AD',
  hook: 'Warm, practical letters from an aging Stoic to a friend, turning philosophy into advice for daily living.',
  sections: [
    { h: 'What it is', body: 'A collection of moral letters written by Seneca to his younger friend Lucilius near the end of Seneca\'s life. Each letter takes up a theme — friendship, time, fear, wealth, death — and works it through with examples and counsel. Though addressed to one man, they read as an accessible guide to Stoic living for everyone.' },
    { h: 'The argument', body: 'Seneca urges his friend to make daily progress toward wisdom rather than waiting for some future moment of virtue. He argues that time is our most precious and most wasted possession, to be guarded fiercely. True wealth is wanting little, and philosophy is a cure for the anxieties that riches and status cannot touch. He treats the fear of death and misfortune head-on, rehearsing them in advance so they lose their power.' },
    { h: 'Big ideas', bullets: ['Guard your time; it is the one thing you cannot get back', 'Philosophy is practice, not just theory', 'True wealth is desiring little', 'Rehearse hardship and death so they cannot ambush you', 'Self-improvement is a daily, lifelong task'] },
    { h: 'Why it endures', body: 'Seneca writes with a warmth and wit that makes ancient wisdom feel like a letter from a wise friend. His themes of busyness, distraction, and the shortness of life speak directly to modern readers hungry for calm.' }
  ]
},
{
  id: 'confessions', title: 'Confessions', author: 'Augustine', era: 'The Middle Ages', year: '400 AD',
  hook: 'The first true autobiography — a restless soul\'s account of sin, searching, and finding rest in God.',
  sections: [
    { h: 'What it is', body: 'A spiritual autobiography written by Augustine of Hippo, addressed throughout as a prayer to God. It traces his life from childhood through a wayward youth to his conversion to Christianity and beyond. Widely regarded as the first true autobiography in the Western tradition, it blends memoir, confession, and philosophical meditation.' },
    { h: 'The story', body: 'Augustine recalls his childhood, his student years, and a famous boyhood theft of pears done purely for the thrill of wrongdoing. As a young man he chases ambition, pleasure, and various philosophies while his devout mother, Monica, prays for him. Torn between old habits and a new faith, he reaches a crisis in a garden in Milan, hears a child\'s voice say "take up and read," and turns to Scripture. The later books move beyond his life into reflections on memory, time, and the opening of Genesis.' },
    { h: 'Big ideas', bullets: ['The restless heart finds rest only in God', 'Human beings are drawn to sin even without motive', 'Memory and time are windows into the soul', 'Conversion is a turning of the whole self, not just the mind', 'Grace, not willpower alone, transforms a life'] },
    { h: 'Why it endures', body: 'It invented the intimate, searching inner voice that later autobiography and even the novel would inherit. Its honesty about desire, doubt, and the search for meaning keeps it deeply personal across sixteen centuries.' }
  ]
},
{
  id: 'the-consolation-of-philosophy', title: 'The Consolation of Philosophy', author: 'Boethius', era: 'The Middle Ages', year: '524 AD',
  hook: 'Awaiting execution, a fallen statesman is visited by Philosophy herself, who teaches him where true happiness lies.',
  sections: [
    { h: 'What it is', body: 'A work written by Boethius while imprisoned and awaiting execution on charges of treason. It takes the form of a dialogue between the despairing author and Lady Philosophy, a woman who appears in his cell to comfort him. Alternating passages of prose and verse, it fuses classical philosophy with a deeply reflective, near-devotional spirit.' },
    { h: 'The argument', body: 'Philosophy reminds Boethius that Fortune is fickle by nature, so her gifts of wealth and status were never truly his to keep. True and lasting happiness, she argues, is not found in fortune, fame, or pleasure but in the highest good, which is God. She confronts the hardest problem — how human freedom can coexist with divine foreknowledge — and answers that God sees all time at once, in an eternal present, so his knowing does not force our choices. Evil, she shows, is ultimately powerless, and providence orders all things toward the good.' },
    { h: 'Big ideas', bullets: ['Fortune\'s wheel turns; her gifts are never truly ours', 'True happiness lies in the highest good, not in externals', 'God sees all time in a single eternal present', 'Divine foreknowledge does not destroy human freedom', 'Providence orders even suffering toward the good'] },
    { h: 'Why it endures', body: 'Written in the shadow of death, it offered medieval and later readers a bridge between the ancient philosophers and Christian faith. Its serene facing of injustice and mortality made it one of the most read and translated books of the Middle Ages.' }
  ]
},
{
  id: 'the-divine-comedy', title: 'The Divine Comedy', author: 'Dante Alighieri', era: 'The Middle Ages', year: '1320',
  hook: 'One man\'s journey through Hell, Purgatory, and Paradise — the supreme poem of the medieval Christian imagination.',
  sections: [
    { h: 'What it is', body: 'An epic poem in Italian by Dante Alighieri, divided into three parts — Inferno, Purgatorio, and Paradiso. It recounts the poet\'s imagined journey through the three realms of the afterlife, guided first by the Roman poet Virgil and later by his beloved Beatrice. Written in interlocking three-line stanzas, it is both a personal vision and a vast summary of medieval thought.' },
    { h: 'The story', body: 'Lost in a dark wood at midlife, Dante is led down through the nine circles of Hell, where sinners suffer punishments fitted to their crimes. He then climbs the mountain of Purgatory, where souls are cleansed of pride, envy, and other faults on their way toward Heaven. Virgil, a virtuous pagan, can guide him only so far; Beatrice takes over to lead him through the spheres of Paradise. At the journey\'s summit he glimpses, however briefly, the light of God himself.' },
    { h: 'Big ideas', bullets: ['The afterlife mirrors the moral logic of earthly choices', 'Love, rightly ordered, moves the soul toward God', 'Reason can guide us only so far; grace must complete the journey', 'Justice fits each punishment and reward to the deed', 'The whole cosmos is bound together by divine love'] },
    { h: 'Why it endures', body: 'It fixed the Italian language and gave Western culture its enduring images of Hell, Purgatory, and Heaven. Its fusion of soaring theology with raw human drama — real people, real grief, real longing — keeps it alive as poetry, not just doctrine.' }
  ]
},
{
  id: 'summa-theologica', title: 'Summa Theologica', author: 'Thomas Aquinas', era: 'The Middle Ages', year: '1274',
  hook: 'The towering summary of medieval Christian thought, reasoning patiently through nearly every question of God and human life.',
  sections: [
    { h: 'What it is', body: 'A vast theological work by the Dominican friar Thomas Aquinas, intended as a complete summary of Christian doctrine for students. It is organised into thousands of articles, each posing a question, listing objections, giving Aquinas\'s answer, and then replying to each objection in turn. It weaves together Christian scripture and tradition with the philosophy of Aristotle, though Aquinas left it unfinished at his death.' },
    { h: 'The argument', body: 'Aquinas holds that faith and reason are not enemies but partners, since both come from God and cannot truly contradict. He offers his famous "Five Ways," rational arguments pointing to the existence of God from motion, causation, and the order of the world. He treats human happiness as fulfilled ultimately in the vision of God, and builds a detailed account of virtue, law, and grace along the way. Throughout, he takes objections seriously, stating the strongest case against himself before answering.' },
    { h: 'Big ideas', bullets: ['Faith and reason are partners, not rivals', 'The "Five Ways" argue for God from reason and the natural world', 'Human fulfilment lies ultimately in the vision of God', 'Natural law is reason\'s share in God\'s eternal law', 'Virtue, grace, and law together guide the good life'] },
    { h: 'Why it endures', body: 'It became the backbone of Catholic theology and a model of rigorous, fair-minded reasoning that hears out every objection. Its confident marriage of Greek philosophy and Christian faith still shapes how the tradition thinks about God, ethics, and law.' }
  ]
},
{
  id: 'the-canterbury-tales', title: 'The Canterbury Tales', author: 'Geoffrey Chaucer', era: 'The Middle Ages', year: '1400',
  hook: 'A rowdy company of pilgrims tells stories on the road to Canterbury, and medieval England springs to life in all its bawdy, pious variety.',
  sections: [
    { h: 'What it is', body: 'An unfinished collection of stories in verse (with two in prose), framed as a tale-telling contest among pilgrims travelling from London to the shrine of Thomas Becket at Canterbury. Written in Middle English by Chaucer near the end of his life, it is one of the founding works of English literature and a vivid cross-section of fourteenth-century society.' },
    { h: 'The story', body: 'At the Tabard Inn, a host proposes that each of the thirty-odd pilgrims tell tales to pass the journey, with a free supper for the best. A knight, a miller, a wife from Bath, a pardoner, a prioress and others each take a turn. Their stories range across chivalric romance, crude comedy, saints\' lives, beast fable and moral sermon. The pilgrims quarrel, interrupt and mock one another between tales, so the frame becomes as lively as the stories. Chaucer never finished the plan, and no supper is ever awarded.' },
    { h: 'Big ideas', bullets: ['A whole society in miniature — every rank from knight to plowman speaks in its own distinct voice', 'Comedy and irony as tools for exposing hypocrisy, especially in the corrupt Church figures', 'Storytelling itself as a subject — who tells a tale, and why, colours its meaning', 'The dignity and wit of ordinary people, most famously the outspoken Wife of Bath'] },
    { h: 'Why it endures', body: 'Chaucer proved that great literature could be written in English rather than Latin or French, shaping the language\'s literary future. Its gallery of sharply drawn, recognisably human characters still feels startlingly modern and funny six centuries on.' }
  ]
},
{
  id: 'the-prince', title: 'The Prince', author: 'Niccolò Machiavelli', era: 'Renaissance & Early Modern', year: '1532',
  hook: 'A cold, clear-eyed manual on how rulers actually gain and keep power — not how they ought to.',
  sections: [
    { h: 'What it is', body: 'A short political treatise offering practical advice to rulers on acquiring, holding and defending a state. Written around 1513 by a Florentine diplomat and published posthumously in 1532, it broke with tradition by describing politics as it is rather than as moralists wished it to be.' },
    { h: 'The argument', body: 'Machiavelli surveys types of principalities and how each is won and held, drawing on classical history and the turbulent politics of his own Italy. He argues that a ruler must be prepared to act against conventional morality — to be feared rather than loved if he cannot be both, to break promises when interest demands, to use cruelty efficiently. Fortune governs half our affairs, he says, but a bold and adaptable leader can master the rest. The book closes with an impassioned call for a strong prince to unite and free Italy from foreign domination.' },
    { h: 'Big ideas', bullets: ['Politics should be judged by results and effectiveness, not by inherited ideals of virtue', 'It is safer for a ruler to be feared than loved — though he must avoid being hated', 'Fortune favours the bold; the capable leader (virtù) can shape circumstance rather than merely suffer it', 'The ends of maintaining the state can justify ruthless means'] },
    { h: 'Why it endures', body: 'It founded modern political realism by separating the analysis of power from questions of virtue. Endlessly cited, condemned and imitated, it made "Machiavellian" a permanent word for cunning statecraft.' }
  ]
},
{
  id: 'essays', title: 'Essays', author: 'Michel de Montaigne', era: 'Renaissance & Early Modern', year: '1580',
  hook: 'A French nobleman turns his own restless mind into a subject of study — and invents the personal essay in the process.',
  sections: [
    { h: 'What it is', body: 'A sprawling collection of over a hundred short prose pieces on every conceivable topic, from friendship and cannibals to fear, sleep and the education of children. Retiring to his tower library, Montaigne wrote and revised them over decades, coining the word "essai" (an attempt or trial) for these open-ended explorations.' },
    { h: 'The argument', body: 'Montaigne takes himself as his primary subject, insisting that in painting his own ordinary self he paints the whole human condition. He digresses freely, quotes ancient authors, contradicts himself, and returns again and again to the difficulty of ever knowing anything for certain — his motto being "What do I know?" Rather than argue to fixed conclusions, he models a mind thinking in real time, sceptical of dogma and tolerant of human variety. The essays grow more personal and searching in later editions, circling around how to live and how to die well.' },
    { h: 'Big ideas', bullets: ['Self-examination as the surest road to understanding humankind in general', 'A humane scepticism — "What do I know?" — that distrusts certainty and fanaticism', 'The essay as a form: exploratory, digressive, honest about doubt and change', 'Accepting mortality and the body as part of a well-lived, natural life'] },
    { h: 'Why it endures', body: 'Montaigne invented a whole genre and a whole tone — intimate, sceptical, self-questioning — that still shapes how we write about ourselves. His frank, tolerant voice reads like a conversation with a wise, unpretentious friend.' }
  ]
},
{
  id: 'don-quixote', title: 'Don Quixote', author: 'Miguel de Cervantes', era: 'Renaissance & Early Modern', year: '1605',
  hook: 'An ageing gentleman reads too many chivalric romances, loses his wits, and rides out to revive knighthood in a world that has moved on.',
  sections: [
    { h: 'What it is', body: 'A comic novel in two parts (1605 and 1615), widely called the first modern novel. It follows a poor Spanish gentleman who, his brain addled by tales of knight-errantry, renames himself Don Quixote and sets out to right wrongs. Cervantes blends slapstick, parody and deep humanity into an epic of the imagination.' },
    { h: 'The story', body: 'Don Quixote recruits a down-to-earth peasant, Sancho Panza, as his squire, and mounts his bony horse Rocinante in search of adventures. He mistakes windmills for giants, inns for castles and a farm girl for the noble lady Dulcinea, taking beatings for his delusions. Sancho\'s earthy common sense plays against his master\'s lofty idealism as the pair wander La Mancha. In the second part, the characters have become famous from the first book, and others cruelly toy with the knight. At last Quixote regains his sanity, renounces his fantasies, and dies.' },
    { h: 'Big ideas', bullets: ['The clash between idealism and reality — the dreamer against the practical world', 'The power and danger of stories to shape how we see everything around us', 'Sancho and Quixote as two halves of human nature: earthy realism and soaring imagination', 'Playful self-awareness — a book that knows it is a book and jokes about its own fame'] },
    { h: 'Why it endures', body: 'It launched the novel as we know it, marrying comedy with profound sympathy for a foolish, noble dreamer. "Quixotic" and "tilting at windmills" endure as shorthand for hopeless, gallant idealism.' }
  ]
},
{
  id: 'hamlet', title: 'Hamlet', author: 'William Shakespeare', era: 'Renaissance & Early Modern', year: '1603',
  hook: 'A grieving prince is asked by his father\'s ghost to avenge a murder — and thinks himself to the brink of madness and beyond.',
  sections: [
    { h: 'What it is', body: 'A tragedy in five acts, the longest and among the most celebrated of Shakespeare\'s plays. Set at the Danish court of Elsinore, it dramatises Prince Hamlet\'s struggle to avenge his murdered father. It is famous for its soliloquies, its psychological depth and its inexhaustible ambiguity.' },
    { h: 'The story', body: 'The ghost of the late king appears to his son Hamlet and reveals that he was murdered by his own brother Claudius, who has since seized the throne and married Hamlet\'s mother. Hamlet vows revenge but delays, feigning madness and staging a play to catch the king\'s conscience. His hesitation spreads ruin: he accidentally kills the counsellor Polonius, drives Ophelia to madness and drowning, and is sent toward death in England. In a final duel poisoned by Claudius, Hamlet, his mother, Laertes and the king all die, leaving the throne to the Norwegian prince Fortinbras.' },
    { h: 'Big ideas', bullets: ['The paralysis of thought — how reflection and doubt can smother action', 'Mortality and meaning, confronted in the "To be or not to be" meditation', 'Appearance versus reality: spying, acting, feigned madness and hidden guilt', 'Revenge and justice, and the moral cost of avenging a wrong'] },
    { h: 'Why it endures', body: 'Hamlet\'s inward, questioning voice created a new depth of psychological realism in drama and still feels intimately modern. Its lines and dilemmas are woven so deeply into culture that the play seems to contain all of human uncertainty.' }
  ]
},
{
  id: 'novum-organum', title: 'Novum Organum', author: 'Francis Bacon', era: 'Renaissance & Early Modern', year: '1620',
  hook: 'A blueprint for a new science built not on ancient authority but on patient observation of nature itself.',
  sections: [
    { h: 'What it is', body: 'A philosophical work of science, written in Latin as a series of numbered aphorisms. Its title ("New Instrument") deliberately challenges Aristotle\'s logical works, the Organon. Bacon set out to replace old habits of reasoning with a fresh method for discovering truths about the natural world.' },
    { h: 'The argument', body: 'Bacon attacks the deductive logic of the schools for spinning grand conclusions from unexamined premises. In its place he proposes a rigorous inductive method: gather many careful observations and experiments, tabulate them, and rise cautiously to general laws. He warns that the mind is misled by four "Idols" — ingrained biases of human nature, personal habit, language and inherited philosophy — that must be cleared away. Only disciplined, collaborative, evidence-based inquiry, he argues, can give humanity real knowledge and power over nature.' },
    { h: 'Big ideas', bullets: ['Induction from observation and experiment, not deduction from authority', 'The four "Idols" — the systematic biases that distort human understanding', 'Knowledge as power: science should improve the human condition', 'Science as a cumulative, cooperative enterprise rather than solitary speculation'] },
    { h: 'Why it endures', body: 'Bacon gave the emerging scientific revolution its manifesto, championing evidence and method over inherited dogma. His vision of organised, experimental inquiry helped shape the very idea of modern science.' }
  ]
},
{
  id: 'leviathan', title: 'Leviathan', author: 'Thomas Hobbes', era: 'Renaissance & Early Modern', year: '1651',
  hook: 'To escape a life that is "solitary, poor, nasty, brutish, and short," people surrender their freedom to an all-powerful sovereign.',
  sections: [
    { h: 'What it is', body: 'A foundational work of modern political philosophy, written during the upheaval of the English Civil War. Its title names the mighty sea-monster of scripture, Hobbes\'s image for the commonwealth. He builds his argument from a bleak account of human nature up to a theory of the state.' },
    { h: 'The argument', body: 'Hobbes imagines humans in a "state of nature" without government: a war of all against all, where fear of violent death makes life miserable and insecure. To escape it, rational people enter a social contract, transferring their rights to a sovereign power that keeps the peace. This sovereign — one person or assembly — must hold near-absolute authority, for a divided power invites the chaos Hobbes dreads most. Order and security, he argues, are worth the price of obedience.' },
    { h: 'Big ideas', bullets: ['The "state of nature" as a war of all against all, driven by fear and self-interest', 'The social contract: individuals trade liberty for security and protection', 'The need for a single, undivided sovereign authority to prevent civil war', 'Legitimacy grounded in human agreement and self-preservation, not divine right'] },
    { h: 'Why it endures', body: 'Hobbes founded modern political theory on the individual and the social contract, framing questions that Locke, Rousseau and their heirs would answer differently. His stark vision of order versus anarchy still shapes debates about the state\'s power.' }
  ]
},
{
  id: 'meditations-on-first-philosophy', title: 'Meditations on First Philosophy', author: 'René Descartes', era: 'The Enlightenment & Beyond', year: '1641',
  hook: 'A philosopher doubts everything he can — until he finds one certainty: "I think, therefore I am."',
  sections: [
    { h: 'What it is', body: 'A short but pivotal work of philosophy, written in Latin as six first-person meditations. In it Descartes seeks an unshakeable foundation for all knowledge by systematically doubting everything that can possibly be doubted. It helped launch modern Western philosophy and its preoccupation with certainty and the mind.' },
    { h: 'The argument', body: 'Descartes resolves to reject as false anything about which he can be even slightly uncertain, including the evidence of his senses and, via the fiction of a deceiving demon, even mathematics. Yet he cannot doubt that he is doubting — and so arrives at his first certainty: that he exists as a thinking thing. From this fixed point he argues for the existence of God and for the reliability of clear and distinct ideas, then rebuilds his confidence in an external, material world. Along the way he sharply distinguishes the immaterial mind from the physical body.' },
    { h: 'Big ideas', bullets: ['Methodical doubt: strip away every uncertain belief to find bedrock certainty', '"Cogito, ergo sum" — the thinking self as the one indubitable starting point', 'Mind-body dualism: mind as an immaterial thinking substance distinct from the body', 'Clear and distinct ideas, underwritten by a non-deceiving God, as a criterion of truth'] },
    { h: 'Why it endures', body: 'Descartes reframed philosophy around the knowing subject, making the mind and the problem of certainty central for centuries. The cogito and mind-body dualism remain touchstones of every debate about consciousness and knowledge.' }
  ]
},
{
  id: 'paradise-lost', title: 'Paradise Lost', author: 'John Milton', era: 'The Enlightenment & Beyond', year: '1667',
  hook: 'Satan\'s rebellion, his ruin, and the fall of Adam and Eve — retold as the grandest epic in the English language.',
  sections: [
    { h: 'What it is', body: 'An epic poem in blank verse, originally in ten books and later revised to twelve, that dramatises the biblical fall of humanity. Milton, blind by the time he composed it, dictated the whole work aloud. He declares his aim as nothing less than to "justify the ways of God to men."' },
    { h: 'The story', body: 'The poem opens with Satan and his rebel angels newly cast out of Heaven into Hell after a failed war against God. Rather than submit, Satan resolves to strike at God\'s new creation, and journeys to the earthly Paradise. There he finds Adam and Eve in innocent bliss, and in the form of a serpent tempts Eve to eat the forbidden fruit; Adam, unwilling to lose her, eats too. God\'s judgment falls, and the pair are expelled from Eden — yet the archangel Michael offers Adam a vision of future redemption, and they walk out into the fallen world together, hand in hand.' },
    { h: 'Big ideas', bullets: ['Free will and the reality of moral choice — the fall as a genuine, chosen disobedience', 'Pride and ambition dramatised in Satan, the poem\'s magnificent, seductive rebel', 'Obedience, temptation and the loss of innocence at the heart of the human condition', 'The paradox of the "fortunate fall" — that ruin opens the way to grace'] },
    { h: 'Why it endures', body: 'Milton raised English poetry to epic grandeur and created in Satan one of literature\'s most compelling and debated figures. Its wrestling with freedom, evil and divine justice has fascinated readers and poets ever since.' }
  ]
},
{
  id: 'pensees', title: 'Pensées', author: 'Blaise Pascal', era: 'The Enlightenment & Beyond', year: '1670',
  hook: 'A mathematical genius\'s unfinished notes toward a defence of faith — fragments of dazzling insight into human misery and grandeur.',
  sections: [
    { h: 'What it is', body: 'A collection of fragments and notes ("thoughts") that Pascal left unfinished at his death, published posthumously in 1670. He had intended them for a grand defence of Christianity, but died before assembling the argument. What survives is a set of penetrating, often aphoristic reflections on faith, reason and the human condition.' },
    { h: 'The argument', body: 'Pascal portrays the human being as a paradox — a "thinking reed," wretched yet great, lost between infinity and nothingness, restless and unable to sit quietly alone. He argues that reason alone cannot reach God, and that people distract themselves with "diversion" to avoid facing their own emptiness. Famously, in his "wager," he argues that a rational person should bet on God\'s existence, since the possible gain is infinite and the loss slight. True knowledge of our condition, he insists, comes through the heart as much as the intellect.' },
    { h: 'Big ideas', bullets: ['Human nature as a paradox of wretchedness and greatness — the "thinking reed"', 'The limits of reason: "the heart has its reasons which reason does not know"', 'Pascal\'s Wager — betting on God as the rational response to infinite stakes', 'Diversion: how people flee self-knowledge by keeping constantly busy'] },
    { h: 'Why it endures', body: 'Pascal fused the rigour of a great scientist with the anguish of a spiritual seeker, giving faith an unusually psychological and modern voice. His portrait of restless, self-avoiding humanity speaks powerfully to a secular age.' }
  ]
},
{
  id: 'second-treatise-of-government', title: 'Second Treatise of Government', author: 'John Locke', era: 'The Enlightenment & Beyond', year: '1689',
  hook: 'Government is a trust, not a throne — and a people may revoke it when it betrays their rights.',
  sections: [
    { h: 'What it is', body: 'A foundational work of liberal political philosophy, published anonymously in 1689 amid the aftermath of England\'s Glorious Revolution. Locke sets out to justify legitimate government on the basis of natural rights and popular consent rather than divine right or inherited authority. It became a touchstone for later revolutions, notably the American.' },
    { h: 'The argument', body: 'Locke begins with a state of nature governed by a law of reason, in which all people are free and equal and possess natural rights to life, liberty, and property. Property arises when a person mixes their labour with the resources of the world. Because the state of nature lacks an impartial judge, people consent to form a government to protect these rights. That government holds power only as a trust; if it turns tyrannical and violates the people\'s rights, they retain the right to resist and replace it.' },
    { h: 'Big ideas', bullets: ['Natural rights to life, liberty, and property precede government', 'Legitimate authority rests on the consent of the governed', 'The labour theory of property — you own what you work for', 'Government is a fiduciary trust that can be dissolved', 'A right of revolution against tyranny'] },
    { h: 'Why it endures', body: 'Locke\'s language of rights and consent shaped the American Declaration of Independence and modern constitutional democracy. His ideas remain the working vocabulary of debates over liberty, property, and the limits of state power.' }
  ]
},
{
  id: 'the-social-contract', title: 'The Social Contract', author: 'Jean-Jacques Rousseau', era: 'The Enlightenment & Beyond', year: '1762',
  hook: '"Man is born free, and everywhere he is in chains" — but the right contract can make obedience and freedom the same thing.',
  sections: [
    { h: 'What it is', body: 'A short, intense treatise on political legitimacy that asks how people can unite under authority yet remain as free as before. Rousseau rejects rule by force or inheritance and searches instead for a form of association grounded in the will of the whole community. It became a defining text of republican and democratic thought.' },
    { h: 'The argument', body: 'Rousseau argues that legitimate authority comes only from a social contract in which each person gives themselves to the whole community and receives an equal share of collective sovereignty in return. The community is guided by the general will — what citizens will in common for the common good, distinct from the mere sum of private interests. Sovereignty belongs inalienably to the people and cannot be handed to a king or representatives. Laws are legitimate only when they express this general will, and a citizen compelled to obey it is, in Rousseau\'s striking phrase, "forced to be free."' },
    { h: 'Big ideas', bullets: ['The social contract as the sole basis of legitimate authority', 'The general will versus the mere sum of private interests', 'Popular sovereignty that cannot be sold or represented away', 'Freedom found through obedience to laws one gives oneself', 'Equality as a precondition of genuine liberty'] },
    { h: 'Why it endures', body: 'Rousseau reframed politics around popular sovereignty and the common good, inspiring the French Revolution and modern democratic theory. His idea of the general will still fuels debate over majority rule, the collective, and individual freedom.' }
  ]
},
{
  id: 'the-wealth-of-nations', title: 'The Wealth of Nations', author: 'Adam Smith', era: 'The Enlightenment & Beyond', year: '1776',
  hook: 'From the self-interest of the butcher and the baker, an "invisible hand" can weave the wealth of a whole nation.',
  sections: [
    { h: 'What it is', body: 'The founding work of modern economics, published in the revolutionary year 1776. Its full title is An Inquiry into the Nature and Causes of the Wealth of Nations. Smith set out to explain what actually makes a country prosperous, breaking from the mercantilist belief that wealth meant hoarding gold.' },
    { h: 'The argument', body: 'Smith argues that a nation\'s wealth lies not in its treasure but in the productive labour of its people. The division of labour dramatically multiplies output, as his famous pin factory shows. Individuals pursuing their own gain are led, as if by an invisible hand, to promote the good of society through free exchange in a market. Smith therefore favours limited government intervention, free trade, and competition, while still assigning the state essential duties such as defence, justice, and public works.' },
    { h: 'Big ideas', bullets: ['The division of labour as the engine of productivity', 'The "invisible hand" that turns self-interest into public benefit', 'Free markets, competition, and free trade over mercantilism', 'Labour, not gold, as the true source of a nation\'s wealth', 'A limited but real role for the state'] },
    { h: 'Why it endures', body: 'Smith gave capitalism its first systematic defence and its enduring metaphors. Economists and policymakers still argue with and build upon his account of markets, incentives, and the sources of growth.' }
  ]
},
{
  id: 'decline-and-fall', title: 'The Decline and Fall of the Roman Empire', author: 'Edward Gibbon', era: 'The Enlightenment & Beyond', year: '1776',
  hook: 'The grandest empire in history did not simply fall — across centuries it decayed, and Gibbon traces every crack.',
  sections: [
    { h: 'What it is', body: 'A monumental work of history, published in six volumes between 1776 and 1789, tracing Rome from the height of the empire in the second century to the fall of Constantinople in 1453. It is celebrated as much for its magisterial, ironic prose as for its scholarship. Gibbon fused narrative sweep with critical use of sources into a new model of history writing.' },
    { h: 'The argument', body: 'Gibbon narrates more than a thousand years of Roman decline, from the prosperous age of the Antonines through civil wars, invasions, and the slow transformation of the empire. He argues that Rome fell not to a single blow but to a long accumulation of causes — loss of civic virtue, the burdens of overextension, reliance on mercenaries, and internal division. Controversially, he portrays the rise of Christianity as sapping the martial and civic energies of the empire. The story moves eastward to Byzantium and ends with the Ottoman conquest of Constantinople.' },
    { h: 'Big ideas', bullets: ['Decline as a slow, multi-causal process rather than a single event', 'The erosion of civic virtue and military discipline', 'Gibbon\'s contested thesis on the role of Christianity', 'History written from critical scrutiny of primary sources', 'The fragility of even the mightiest human institutions'] },
    { h: 'Why it endures', body: 'Gibbon set a standard for narrative history and shaped how the West thinks about the rise and fall of civilisations. His question — why great powers decay — remains urgent, and his prose is still read for pleasure.' }
  ]
},
{
  id: 'groundwork-metaphysics-morals', title: 'Groundwork of the Metaphysics of Morals', author: 'Immanuel Kant', era: 'The Enlightenment & Beyond', year: '1785',
  hook: 'Act only on a rule you could will everyone to follow — morality as the pure command of reason.',
  sections: [
    { h: 'What it is', body: 'A compact but demanding work of moral philosophy in which Kant seeks the supreme principle of morality. He aims to ground ethics not in consequences, feelings, or divine command but in reason alone. Slim in size, it is one of the most influential ethical texts ever written.' },
    { h: 'The argument', body: 'Kant argues that the only thing good without qualification is a good will — acting from duty, not merely in accordance with it. Moral worth lies in the motive, not the outcome. From this he derives the categorical imperative, an unconditional command of reason: act only on that maxim you could will to become a universal law. A second formulation demands that we treat humanity, in ourselves and others, always as an end and never merely as a means. Because rational beings give themselves this law, morality and genuine freedom, or autonomy, turn out to be one and the same.' },
    { h: 'Big ideas', bullets: ['The good will as the only unconditional good', 'Duty and motive over consequences', 'The categorical imperative and the test of universalisability', 'Treat humanity always as an end, never merely as a means', 'Autonomy — rational beings legislate the moral law for themselves'] },
    { h: 'Why it endures', body: 'Kant gave deontological ethics its rigorous form and put human dignity at the centre of moral thought. His categorical imperative remains a fixed point in every debate over duty, rights, and how we ought to treat one another.' }
  ]
},
{
  id: 'pride-and-prejudice', title: 'Pride and Prejudice', author: 'Jane Austen', era: 'The Nineteenth Century', year: '1813',
  hook: 'A sharp-witted woman and a proud gentleman must each unlearn a first impression before love becomes possible.',
  sections: [
    { h: 'What it is', body: 'A comic novel of manners set among the landed gentry of Regency England, and one of the best-loved novels in the language. Beneath its wit lies a keen study of marriage, money, class, and character. Austen dissects the social machinery that decides a woman\'s fortune with irony and warmth.' },
    { h: 'The story', body: 'The lively, quick-tongued Elizabeth Bennet is one of five sisters whose mother is desperate to see them married. She meets the wealthy, aloof Mr Darcy and takes an instant dislike to his pride, while he looks down on her family\'s low connections. Misunderstandings, a scheming officer, and a scandalous elopement complicate matters. As Elizabeth and Darcy each confront their own faults, dislike gradually turns to understanding and love, and the novel ends in marriage.' },
    { h: 'Big ideas', bullets: ['First impressions can mislead — pride and prejudice on both sides', 'Marriage as economic survival as well as romance', 'The constraints of class and money on women\'s choices', 'Moral growth through self-knowledge', 'Irony as a tool of social observation'] },
    { h: 'Why it endures', body: 'Elizabeth Bennet remains one of literature\'s most beloved heroines, and the courtship plot has shaped countless novels and films since. Austen\'s wit, psychological insight, and social satire feel strikingly modern two centuries on.' }
  ]
},
{
  id: 'war-and-peace', title: 'War and Peace', author: 'Leo Tolstoy', era: 'The Nineteenth Century', year: '1869',
  hook: 'Napoleon invades Russia — and Tolstoy pours whole lives, families, and armies onto the page to ask what really moves history.',
  sections: [
    { h: 'What it is', body: 'A vast epic novel following several aristocratic families through Russia\'s wars against Napoleon between 1805 and 1812. Part sweeping fiction, part meditation on history, it is often called the greatest novel ever written. Tolstoy interweaves private lives with the great public events of his nation.' },
    { h: 'The story', body: 'The lives of the searching, illegitimate Pierre Bezukhov, the disillusioned Prince Andrei Bolkonsky, and the vivid young Natasha Rostova intertwine across years of peace and war. Society balls, love affairs, spiritual crises, and family fortunes unfold against the advance of Napoleon\'s army. The catastrophic French invasion of 1812, the burning of Moscow, and the terrible retreat test every character. Through suffering and loss, the survivors grope toward meaning, faith, and a hard-won peace.' },
    { h: 'Big ideas', bullets: ['History driven by countless small actions, not great men', 'The search for meaning and faith amid chaos', 'War stripped of glory and shown in its confusion', 'The endurance of ordinary life and love', 'Free will and necessity in human affairs'] },
    { h: 'Why it endures', body: 'Tolstoy\'s panoramic realism and his theory of history remain unmatched in scope and ambition. The novel\'s intimate portraits of people seeking how to live still speak to readers in any age.' }
  ]
},
{
  id: 'crime-and-punishment', title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', era: 'The Nineteenth Century', year: '1866',
  hook: 'A poor student murders to prove he is above the law — then discovers his own conscience is the harshest judge of all.',
  sections: [
    { h: 'What it is', body: 'A psychological novel set in the slums of St Petersburg, tracing a crime and its slow, agonising moral aftermath. It is a landmark of world literature and a searching study of guilt, reason, and redemption. Dostoevsky turns a murder plot into a drama of the soul.' },
    { h: 'The story', body: 'Rodion Raskolnikov, a destitute former student, convinces himself that an extraordinary man may transgress ordinary morality for a higher purpose, and he murders a greedy old pawnbroker. Instead of freedom he is seized by fever, dread, and mounting guilt. As the shrewd investigator Porfiry circles closer, Raskolnikov is drawn to Sonya, a gentle young woman forced into prostitution to save her family. Through her faith and love, and after long torment, he confesses and begins a painful path toward redemption in Siberian exile.' },
    { h: 'Big ideas', bullets: ['The "extraordinary man" theory and its collapse', 'Guilt and conscience as inescapable forces', 'Suffering as a path to redemption', 'Faith, love, and grace against cold rationalism', 'Poverty and alienation in the modern city'] },
    { h: 'Why it endures', body: 'Dostoevsky pioneered the psychological novel and the fiction of ideas, laying open the mind of a divided man. His questions about morality, reason, and redemption remain as gripping and unresolved as ever.' }
  ]
},
{
  id: 'origin-of-species', title: 'On the Origin of Species', author: 'Charles Darwin', era: 'The Nineteenth Century', year: '1859',
  hook: 'A single mechanism — natural selection — offered to explain the origin and endless variety of life on Earth.',
  sections: [
    { h: 'What it is', body: 'A landmark scientific work in which Darwin presents his theory of evolution by natural selection. Drawing on years of observation, including his voyage on HMS Beagle, he sets out a vast body of evidence in careful, accessible prose. First published in 1859, it transformed the biological sciences.' },
    { h: 'The argument', body: 'Darwin observes that organisms produce more offspring than can survive, and that individuals vary in their traits. Those variations that aid survival and reproduction tend to be passed on, so favourable traits accumulate over generations — a process he calls natural selection, likened to the selective breeding practised by farmers. Given immense stretches of time, this gradual mechanism can, he argues, produce new species and account for the branching diversity of all living things from common ancestors. He marshals evidence from geology, embryology, biogeography, and the fossil record while candidly addressing difficulties.' },
    { h: 'Big ideas', bullets: ['Descent with modification from common ancestors', 'Natural selection as the chief mechanism of evolution', 'Variation and the struggle for existence', 'The great age of the Earth and gradual change over time', 'A branching "tree of life" linking all species'] },
    { h: 'Why it endures', body: 'The book reshaped biology and became one of the most influential scientific works ever written. Its central idea remains the organising framework of the modern life sciences and a continuing subject of study and debate.' }
  ]
},
{
  id: 'thus-spoke-zarathustra', title: 'Thus Spoke Zarathustra', author: 'Friedrich Nietzsche', era: 'The Nineteenth Century', year: '1883',
  hook: 'A prophet descends from his mountain to proclaim that "God is dead" — and that humanity must create new values for itself.',
  sections: [
    { h: 'What it is', body: 'A philosophical work written as a poetic, allegorical narrative, cast in a mock-biblical style. Rather than argue in treatise form, Nietzsche speaks through the sermons and parables of a wandering sage named Zarathustra. Published in parts during the 1880s, it is his most famous and unusual book.' },
    { h: 'The argument', body: 'The prophet Zarathustra comes down from years of solitude in the mountains to share his wisdom with humankind. He announces that "God is dead" — that traditional religious and moral certainties have lost their authority — and that people must now create their own values. He teaches the ideal of the Übermensch, or overman, a figure who overcomes conventional morality and affirms life. He introduces the vision of eternal recurrence, the test of willing one\'s life to repeat forever. Speaking largely in parables, he wrestles with disciples, solitude, and his own hardest thoughts.' },
    { h: 'Big ideas', bullets: ['The proclamation that "God is dead" and the crisis of values', 'The Übermensch as one who creates new values', 'Eternal recurrence as a test of life-affirmation', 'The will to power as a drive within life', 'A critique of conventional morality and herd conformity'] },
    { h: 'Why it endures', body: 'Zarathustra is among the most widely read and debated works of modern philosophy, and it profoundly influenced later thought, literature, and art. Its provocative images and questions about meaning, value, and self-overcoming continue to challenge readers.' }
  ]
},
{
  id: 'symposium', title: 'The Symposium', author: 'Plato', era: 'Ancient Greece', year: 'c. 385 BC',
  hook: 'A dinner party of Athens\' wittiest men turns into the West\'s most famous conversation about the nature of love.',
  sections: [
    { h: 'What it is', body: 'A philosophical dialogue by Plato, framed as a series of after-dinner speeches at a drinking party (a symposium) held to celebrate the tragedian Agathon\'s prize. Each guest in turn delivers a speech in praise of Eros, the god of love, and the competing accounts build toward Socrates\' own. It is at once literature, comedy, and philosophy.' },
    { h: 'The argument', body: 'The guests agree to speak in praise of love rather than drink heavily. Phaedrus, Pausanias, the doctor Eryximachus, and the comic poet Aristophanes each offer a view, Aristophanes telling his famous myth of the split double-beings who seek their other half. Agathon praises love\'s beauty, then Socrates reframes everything: love is desire for what one lacks, and its true object is Beauty itself. He recounts the teaching of the priestess Diotima, who describes an ascent from loving one body to loving all beauty and finally the Form of Beauty. The drunken Alcibiades then bursts in and praises Socrates himself.' },
    { h: 'Big ideas', bullets: ['Love as lack — we desire what we do not possess, so love reaches beyond itself toward the good and beautiful', 'The "ladder of love": ascending from physical attraction to love of souls, laws, knowledge, and finally Beauty itself', 'Aristophanes\' myth of divided humans searching for their missing half as an image of longing', 'Philosophy as a kind of erotic striving — the lover of wisdom is driven by desire for what is highest'] },
    { h: 'Why it endures', body: 'The Symposium fused rigorous thought with vivid drama, giving Western culture its enduring vocabulary for love, from soulmates to "Platonic" affection. Its ladder of desire has shaped mystics, poets, and philosophers for over two thousand years.' }
  ]
},
{
  id: 'poetics', title: 'Poetics', author: 'Aristotle', era: 'Ancient Greece', year: 'c. 335 BC',
  hook: 'The founding work of literary criticism, which taught the West how stories are built and why they move us.',
  sections: [
    { h: 'What it is', body: 'A compact treatise by Aristotle analysing the art of poetry, especially tragedy. Surviving in an incomplete form (its discussion of comedy is lost), it is less a set of rules than a working theory of how dramatic and epic works are constructed and why they affect audiences. It is the earliest surviving systematic study of literature in the Western tradition.' },
    { h: 'The argument', body: 'Aristotle defines poetry as a form of imitation (mimesis) of human action, distinguishing tragedy, epic, and comedy by their means and objects. He argues that plot is the soul of tragedy, more important than character, and that the best plots are unified, probable, and structured with a beginning, middle, and end. He examines the parts of tragedy, the power of reversal (peripeteia) and recognition (anagnorisis), and the ideal tragic hero who falls through some error (hamartia). Tragedy, he claims, arouses pity and fear to achieve catharsis, a purging or clarification of those emotions.' },
    { h: 'Big ideas', bullets: ['Mimesis — art as imitation of life, giving pleasure through recognition and skilled representation', 'Plot over character — a well-constructed sequence of events is the heart of drama', 'Catharsis — tragedy purges or refines pity and fear in the audience', 'Reversal and recognition as the turning points that give a story its emotional force'] },
    { h: 'Why it endures', body: 'The Poetics set the terms for how the West talks about storytelling, from Renaissance drama to modern screenwriting manuals. Its ideas about unified plot, tragic flaw, and catharsis remain the working grammar of critics and writers today.' }
  ]
},
{
  id: 'epictetus-discourses', title: 'Discourses and Enchiridion', author: 'Epictetus', era: 'Ancient Rome', year: 'c. 108 AD',
  hook: 'A former slave turned philosopher teaches that freedom lies not in circumstance but in mastering what is within your control.',
  sections: [
    { h: 'What it is', body: 'A record of the Stoic teaching of Epictetus, who was born a slave and became a revered teacher. The Discourses are transcripts of his lessons taken down by his student Arrian, while the Enchiridion (or Handbook) is a short distillation of his core practical advice. Neither was written by Epictetus himself; both are Arrian\'s record of his master\'s spoken philosophy.' },
    { h: 'The argument', body: 'At the heart of Epictetus\' teaching is a single division: some things are within our power (our judgements, desires, and actions) and some are not (our body, reputation, wealth, and fate). Peace comes from focusing entirely on the former and accepting the latter with equanimity. He urges his students to examine their impressions before acting on them, to strip away false beliefs about what is good and bad, and to treat hardship as training for virtue. Philosophy is not talk but a way of living, tested daily in how one meets illness, loss, and insult.' },
    { h: 'Big ideas', bullets: ['The dichotomy of control — distinguish what is up to us from what is not, and invest only in the former', 'It is not events that disturb us but our judgements about them', 'Virtue and a rightly ordered will are the only true goods; externals are indifferent', 'Philosophy as daily practice — a discipline lived out in conduct, not merely discussed'] },
    { h: 'Why it endures', body: 'Epictetus\' clear, bracing voice has consoled readers from the emperor Marcus Aurelius to modern soldiers and prisoners. His teaching underpins much of modern cognitive therapy and the ongoing Stoic revival, offering a practical path to resilience in any age.' }
  ]
},
{
  id: 'tacitus-annals', title: 'The Annals', author: 'Tacitus', era: 'Ancient Rome', year: 'c. 116 AD',
  hook: 'Rome\'s sharpest historian dissects the corruption of absolute power under the emperors who followed Augustus.',
  sections: [
    { h: 'What it is', body: 'A work of history by Cornelius Tacitus, covering the Roman Empire from the death of Augustus in AD 14 through the reign of Nero, arranged year by year (hence "annals"). Parts of the text are lost, but what survives is regarded as one of the greatest achievements of ancient historical writing. It is history written with the compression and moral force of great literature.' },
    { h: 'The argument', body: 'Tacitus traces how the Roman state, having kept the outward forms of the old Republic, slid into the reality of one-man rule. He examines the reigns of Tiberius, Claudius, and Nero, exposing the fear, flattery, and informers that flourished under tyranny. With a spare, penetrating style he probes the psychology of rulers and the servility of the Senate, showing how liberty decays even as institutions remain standing. Rather than praise or excuse, he claims to write "without anger and partisanship," letting the record of cruelty and hypocrisy speak.' },
    { h: 'Big ideas', bullets: ['The corrosion of political liberty under autocracy, even when republican forms survive', 'The psychology of tyranny — suspicion, dissimulation, and the breeding of informers', 'History as moral inquiry, meant to instruct by preserving examples of virtue and vice', 'The servility of elites who trade freedom for safety and favour'] },
    { h: 'Why it endures', body: 'Tacitus\' unflinching study of power and its abuses has influenced political thinkers from the Renaissance to the framers of modern constitutions. His compressed, ironic prose and his warnings about liberty\'s fragility feel startlingly modern.' }
  ]
},
{
  id: 'beowulf', title: 'Beowulf', author: 'Anonymous', era: 'The Middle Ages', year: 'c. 1000',
  hook: 'An Old English epic of a hero who battles monsters and, in old age, a dragon, facing a fate he cannot escape.',
  sections: [
    { h: 'What it is', body: 'The greatest surviving epic poem in Old English, composed by an unknown poet and preserved in a single manuscript. Set in a legendary Scandinavian past, it blends heroic legend with the reflective outlook of a Christian poet looking back on a pagan world. It is a poem of some three thousand alliterative lines, meant to be recited in the mead-hall.' },
    { h: 'The story', body: 'The Geatish warrior Beowulf sails to Denmark to help King Hrothgar, whose hall Heorot is terrorised by the monster Grendel. Beowulf kills Grendel in single combat, then descends into a haunted lake to slay Grendel\'s vengeful mother. Honoured and rewarded, he returns home and eventually becomes king of the Geats, ruling well for fifty years. In old age he faces a fire-breathing dragon roused by a stolen treasure; he slays it with the help of the loyal Wiglaf but is mortally wounded, and the poem closes with his funeral and forebodings for his people.' },
    { h: 'Big ideas', bullets: ['The heroic code — courage, loyalty, reputation, and the duty of a warrior to face fate unflinchingly', 'The passage of glory — even the greatest hero ages and dies, and kingdoms rise and fall', 'The tension between an old pagan warrior world and the poet\'s Christian outlook', 'Monsters as embodiments of the outcast, the chaotic, and the mortal terrors that surround human order'] },
    { h: 'Why it endures', body: 'Beowulf is the cornerstone of English literature\'s beginnings, a bridge between oral legend and written poetry. Its haunting meditation on courage, mortality, and the fading of glory has inspired writers from the Victorians to J.R.R. Tolkien.' }
  ]
},
{
  id: 'imitation-of-christ', title: 'The Imitation of Christ', author: 'Thomas à Kempis', era: 'The Middle Ages', year: '1418',
  hook: 'A quiet monastic classic urging inner devotion over outward show, and the following of Christ over the pride of learning.',
  sections: [
    { h: 'What it is', body: 'A devotional handbook of Christian spirituality, traditionally attributed to the German-Dutch monk Thomas à Kempis and associated with the reform movement known as the Devotio Moderna. Written in simple Latin as a series of short chapters and counsels, it is designed for meditation rather than continuous reading. After the Bible, it became one of the most widely read and translated Christian books in history.' },
    { h: 'The argument', body: 'The book calls the reader away from worldly ambition and vain intellectual pride toward humility, self-denial, and inward communion with God. It teaches that true wisdom is to know and despise oneself, and that peace is found not in knowledge or possessions but in imitating the humility and patience of Christ. Later sections turn to the interior life, the consolations of grace, and devout reflection on the sacrament of the Eucharist. Throughout, it favours felt devotion over theological argument: "I would rather feel contrition than know how to define it."' },
    { h: 'Big ideas', bullets: ['Imitation of Christ\'s humility and patience as the heart of the spiritual life', 'The vanity of worldly ambition and mere book-learning without love of God', 'Inner devotion and self-knowledge over external religious display', 'Peace and freedom found through detachment, surrender, and grace'] },
    { h: 'Why it endures', body: 'For six centuries The Imitation of Christ has been a companion to seekers across many Christian traditions, prized for its gentle, searching honesty. Its call to a simple interior life continues to speak to readers weary of noise and ambition.' }
  ]
},
{
  id: 'utopia', title: 'Utopia', author: 'Thomas More', era: 'Renaissance & Early Modern', year: '1516',
  hook: 'A witty, unsettling portrait of an imaginary island where reason has abolished poverty, pride, and private property.',
  sections: [
    { h: 'What it is', body: 'A short work of political philosophy and fiction by the English humanist and statesman Thomas More, written in Latin. It takes the form of a dialogue in which a traveller, Raphael Hythloday, describes a distant island commonwealth. More coined the very word "utopia" from Greek roots meaning "no place," and the book plays a sly double game between serious proposal and satire.' },
    { h: 'The argument', body: 'The first book is a sharp critique of the ills of More\'s own England, especially the injustice of enclosure, harsh punishment of thieves, and the pride and greed of the powerful. The second book describes the island of Utopia, where property is held in common, everyone works and shares in the harvest, gold is despised, and religious tolerance largely prevails. Its citizens live by reason and moderation, with six-hour workdays and communal meals. Yet the account is laced with irony, and More leaves it deliberately unclear how far he endorses this rational paradise.' },
    { h: 'Big ideas', bullets: ['Common ownership versus private property as the root of social justice or injustice', 'Satire of contemporary Europe — its greed, cruel laws, and warmongering princes', 'The power of reason and institutions to reshape human society', 'Deliberate ambiguity — is Utopia an ideal to pursue, an impossibility, or a mirror held up to Europe?'] },
    { h: 'Why it endures', body: 'Utopia gave its name to a whole genre and to the enduring human impulse to imagine a better society. Its blend of biting satire and idealism keeps readers debating whether it is a blueprint, a warning, or a joke with a serious heart.' }
  ]
},
{
  id: 'in-praise-of-folly', title: 'In Praise of Folly', author: 'Erasmus', era: 'Renaissance & Early Modern', year: '1509',
  hook: 'The goddess Folly steps forward to praise herself, and in doing so exposes the vanity and hypocrisy of the whole world.',
  sections: [
    { h: 'What it is', body: 'A satirical essay by the Dutch humanist Erasmus, written in Latin and dedicated to his friend Thomas More (whose name puns on the Greek for folly). It takes the form of a mock encomium, a speech of self-praise delivered by Folly personified. Playful and learned, it became one of the most celebrated and influential works of the Northern Renaissance.' },
    { h: 'The argument', body: 'Folly, a goddess, mounts a rostrum and delivers a witty oration in her own honour, claiming that she is the secret source of all human happiness, love, friendship, and society. As her speech proceeds, its target sharpens: she mocks pedantic scholars, superstitious believers, greedy merchants, pompous princes, and above all corrupt clergy, monks, and theologians who have strayed from the simplicity of the Gospel. In its final turn, the tone deepens, and Folly praises the "folly of the cross," the divine foolishness of Christian faith that the wise world cannot understand.' },
    { h: 'Big ideas', bullets: ['Satire of human self-deception, vanity, and the pretensions of the learned and the powerful', 'Sharp criticism of a worldly, corrupt Church, calling for a return to simple Gospel piety', 'The paradox that a measure of folly makes life bearable and human bonds possible', 'The "folly of the cross" — Christian humility as a wisdom that transcends worldly reason'] },
    { h: 'Why it endures', body: 'In Praise of Folly helped prepare the ground for the Reformation while remaining beloved for its wit and humanity. Its laughing exposure of hypocrisy, and its plea for a simpler, kinder faith, keep it fresh five centuries on.' }
  ]
},
{
  id: 'macbeth', title: 'Macbeth', author: 'William Shakespeare', era: 'Renaissance & Early Modern', year: '1606',
  hook: 'A brave soldier murders his king to seize a crown, then drowns in the blood it costs to keep it.',
  sections: [
    { h: 'What it is', body: 'A tragedy in five acts, and the shortest and darkest of Shakespeare\'s major plays. It traces the rise and ruin of a Scottish nobleman who lets ambition override conscience. Written for James I, it fuses witchcraft, regicide, and psychological terror.' },
    { h: 'The story', body: 'Returning from battle, Macbeth meets three witches who prophesy that he will become king. Spurred on by his wife, he murders the sleeping King Duncan and takes the throne. To secure it he orders more killings, sliding into paranoia and tyranny. Lady Macbeth, consumed by guilt, sleepwalks and dies. Macbeth, told he cannot be harmed by any man born of woman, is finally slain by Macduff, who was untimely ripped from his mother\'s womb.' },
    { h: 'Big ideas', bullets: ['Unchecked ambition corrodes conscience and destroys the soul', 'Guilt and paranoia carry their own inescapable punishment', 'Prophecy tempts us to force fate rather than await it', 'The gap between the ambition we imagine and the deeds we must do'] },
    { h: 'Why it endures', body: 'It maps the anatomy of ambition and guilt with terrifying precision, showing how one choice cascades into ruin. Its images — the bloody dagger, the washing of hands — remain shorthand for the mind at war with itself.' }
  ]
},
{
  id: 'candide', title: 'Candide', author: 'Voltaire', era: 'The Enlightenment & Beyond', year: '1759',
  hook: 'A wide-eyed optimist is beaten, robbed, and shipwrecked across the world until he learns to stop philosophising and start gardening.',
  sections: [
    { h: 'What it is', body: 'A short satirical novella, the most famous work of the French Enlightenment. It mocks the philosophical optimism that this is "the best of all possible worlds." Voltaire uses a breakneck picaresque adventure to expose the cruelty and folly of the real one.' },
    { h: 'The story', body: 'Candide, raised in a sheltered castle, is taught by his tutor Pangloss that everything happens for the best. Expelled for kissing the baron\'s daughter Cunegonde, he is thrown into war, the Lisbon earthquake, the Inquisition, and slavery. He crosses continents in search of Cunegonde, watching every optimistic belief collide with catastrophe. He briefly finds the golden utopia of Eldorado, then loses it. Reunited at last with his companions, aged and disillusioned, he concludes that we must simply "cultivate our garden."' },
    { h: 'Big ideas', bullets: ['Blind optimism is an insult to real human suffering', 'Religious and political institutions breed cruelty and hypocrisy', 'Abstract philosophy is useless against concrete misery', 'Meaningful work, not grand theory, is the answer to a broken world'] },
    { h: 'Why it endures', body: 'Its savage wit still punctures every ideology that explains away suffering. The closing call to "cultivate our garden" remains one of literature\'s most quoted pieces of hard-won wisdom.' }
  ]
},
{
  id: 'gullivers-travels', title: 'Gulliver\'s Travels', author: 'Jonathan Swift', era: 'The Enlightenment & Beyond', year: '1726',
  hook: 'A shipwrecked traveller visits four impossible nations and returns loathing the human race.',
  sections: [
    { h: 'What it is', body: 'A satirical novel disguised as a travel memoir, and one of the fiercest social satires in English. Across four voyages it ridicules politics, science, pride, and human nature itself. Long softened into a children\'s tale, it is at heart a savage indictment of humanity.' },
    { h: 'The story', body: 'The surgeon Lemuel Gulliver washes up in Lilliput, a land of tiny people whose petty court intrigues mirror European politics. Next he visits Brobdingnag, a nation of giants whose king is disgusted by Gulliver\'s account of Europe. In Laputa he encounters absurd scientists and hollow projectors chasing useless research. Finally, among the Houyhnhnms — rational, noble horses — he meets the Yahoos, filthy human-like brutes. Gulliver comes to despise his own species and returns home unable to bear the company of people.' },
    { h: 'Big ideas', bullets: ['Human pride shrinks or swells depending on perspective', 'Politics and empire rest on trivial, arbitrary quarrels', 'Reason divorced from morality produces monstrous folly', 'The line between civilised man and brute beast is thinner than we admit'] },
    { h: 'Why it endures', body: 'It remains the model for satire that hides devastating critique inside a fantastical adventure. Its coined worlds — Lilliputian, Yahoo — have entered the language as permanent measures of human smallness.' }
  ]
},
{
  id: 'hume-enquiry', title: 'An Enquiry Concerning Human Understanding', author: 'David Hume', era: 'The Enlightenment & Beyond', year: '1748',
  hook: 'A cool, radical investigation into how little we can actually know — and why even cause and effect is a habit, not a certainty.',
  sections: [
    { h: 'What it is', body: 'A landmark work of empiricist philosophy, Hume\'s accessible reworking of his earlier Treatise. It asks what the human mind can genuinely know and traces all ideas back to sensory experience. It became a cornerstone of modern epistemology and famously roused Kant from his "dogmatic slumber."' },
    { h: 'The argument', body: 'Hume argues that every idea is a faint copy of a prior impression from the senses, so concepts with no experiential root are empty. He then attacks causation: we never perceive a necessary connection between events, only their constant conjunction, so belief in cause and effect is a habit of the mind rather than a rational proof. This is the "problem of induction" — no experience of the past can logically guarantee the future. He applies the same sceptical scrutiny to miracles, arguing that testimony can never outweigh the laws of nature.' },
    { h: 'Big ideas', bullets: ['All knowledge derives from sensory impressions, not innate reason', 'Cause and effect is a mental habit, not an observed necessity', 'The problem of induction: the future is not guaranteed by the past', 'Extraordinary claims like miracles demand proportionate evidence'] },
    { h: 'Why it endures', body: 'Hume\'s scepticism reset the terms of philosophy and forced every thinker after him to answer how knowledge is possible. His clear-eyed doubt still shapes science, statistics, and the theory of evidence today.' }
  ]
},
{
  id: 'frankenstein', title: 'Frankenstein', author: 'Mary Shelley', era: 'The Nineteenth Century', year: '1818',
  hook: 'A young scientist builds life from dead flesh, then abandons his creation — and both are destroyed by that rejection.',
  sections: [
    { h: 'What it is', body: 'A Gothic novel widely regarded as the first true work of science fiction, written by Mary Shelley at eighteen. It frames a story of forbidden knowledge inside a chain of nested narrators. Subtitled "The Modern Prometheus," it asks what a creator owes to what he makes.' },
    { h: 'The story', body: 'The ambitious student Victor Frankenstein discovers how to animate lifeless matter and assembles a being from body parts. Horrified by the creature\'s appearance, he flees, leaving it alone in the world. The abandoned creature teaches itself to speak and read, longing for companionship, but human cruelty turns its loneliness to rage. It begins killing those Victor loves, demanding he build a mate. Victor refuses, and creator and creation pursue each other to their mutual ruin across the Arctic ice.' },
    { h: 'Big ideas', bullets: ['Creation carries responsibility; the maker cannot simply walk away', 'Isolation and rejection, not innate evil, produce monsters', 'The pursuit of knowledge without wisdom is destructive', 'Society judges by appearance and punishes difference'] },
    { h: 'Why it endures', body: 'It gave the modern world its defining myth of science overreaching its moral limits. Every debate about technology we create but cannot control still borrows its shape and its warning.' }
  ]
},
{
  id: 'moby-dick', title: 'Moby-Dick', author: 'Herman Melville', era: 'The Nineteenth Century', year: '1851',
  hook: 'A one-legged captain drags his crew across the oceans to destroy the white whale that maimed him — and himself with it.',
  sections: [
    { h: 'What it is', body: 'A sprawling American novel that fuses a whaling adventure with philosophy, encyclopedia, and scripture. Narrated by the sailor Ishmael, it is as much a meditation on obsession and the unknowable as it is a sea story. Ignored in its time, it is now considered a masterpiece of world literature.' },
    { h: 'The story', body: 'Ishmael signs onto the whaling ship Pequod and befriends the tattooed harpooner Queequeg. The ship is commanded by Captain Ahab, who reveals that his true purpose is not profit but revenge on Moby Dick, the white whale that took his leg. Ahab bends the whole crew to his monomaniacal hunt, ignoring every warning. After a three-day chase, the whale destroys the Pequod and drowns all aboard. Only Ishmael survives, floating on a coffin to tell the tale.' },
    { h: 'Big ideas', bullets: ['Obsession and vengeance consume the one who pursues them', 'Nature is vast and indifferent, resisting all human meaning', 'The white whale is a blank screen for every reader\'s dread', 'The pursuit of the absolute can override reason and community'] },
    { h: 'Why it endures', body: 'It reaches for the largest questions — fate, God, evil, the limits of knowledge — inside the grit of a working ship. Ahab has become the enduring symbol of self-destructive obsession.' }
  ]
},
{
  id: 'great-expectations', title: 'Great Expectations', author: 'Charles Dickens', era: 'The Nineteenth Century', year: '1861',
  hook: 'An orphan boy comes into a mysterious fortune, chases the life of a gentleman, and learns too late what truly made him rich.',
  sections: [
    { h: 'What it is', body: 'A coming-of-age novel and one of Dickens\'s most personal and tightly plotted works. Told in the first person by its hero Pip, it traces a poor boy\'s rise into wealth and his moral education. It weaves crime, class, and thwarted love into a story of self-discovery.' },
    { h: 'The story', body: 'The orphan Pip, raised by his harsh sister and the kindly blacksmith Joe, helps an escaped convict in a marsh as a child. He is later summoned to the decaying house of Miss Havisham, jilted on her wedding day, and falls hopelessly for her cold ward Estella. An anonymous benefactor makes Pip a gentleman, and he abandons his humble roots in shame. He discovers his fortune came not from Miss Havisham but from the convict he once helped. Stripped of his illusions, Pip learns the true worth of loyalty and love.' },
    { h: 'Big ideas', bullets: ['Wealth and status do not make a person good or happy', 'True worth lies in loyalty, kindness, and honest labour', 'We are shaped by hidden debts and unexpected benefactors', 'Growing up means shedding illusions about ourselves and others'] },
    { h: 'Why it endures', body: 'It is a near-perfect story of ambition, snobbery, and redemption that anyone who has ever wanted a bigger life recognises. Its characters — Miss Havisham, Magwitch, Estella — are among fiction\'s most unforgettable.' }
  ]
},
{
  id: 'democracy-in-america', title: 'Democracy in America', author: 'Alexis de Tocqueville', era: 'The Nineteenth Century', year: '1835',
  hook: 'A young French aristocrat tours the new United States and writes the sharpest analysis of democracy ever penned.',
  sections: [
    { h: 'What it is', body: 'A classic of political science and sociology, drawn from Tocqueville\'s 1831 journey through Jacksonian America. It examines how a society built on equality of conditions actually functions. Published in two volumes, it remains a founding text for understanding democratic life.' },
    { h: 'The argument', body: 'Tocqueville argues that the defining feature of America is not just its government but the equality of social conditions that shapes everything. He admires how citizens govern themselves through townships, juries, and countless voluntary associations that guard against tyranny. Yet he warns of democracy\'s dangers: the "tyranny of the majority" that can crush dissent, and a creeping individualism that isolates people and invites a soft, paternalistic state. He also confronts slavery and the treatment of Native Americans as the republic\'s deepest contradictions.' },
    { h: 'Big ideas', bullets: ['Equality of conditions is the master force shaping democratic society', 'Voluntary associations and local self-government protect liberty', 'The tyranny of the majority is democracy\'s subtle inner threat', 'Individualism can breed isolation and a gentle, all-managing state'] },
    { h: 'Why it endures', body: 'Its predictions about mass society, conformity, and the fragility of freedom read as prophecy nearly two centuries on. Both left and right still quote it to explain what democracy does to the human soul.' }
  ]
}
];
