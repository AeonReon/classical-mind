// greatbooks-data.js — the curated canon for greatbooks.html. Grouped by era
// (GB_ERAS order). Each book: id, title, author, era, year, summary. The
// "Read free" link is built at render time from title+author (Project Gutenberg
// search), so no per-book URLs to maintain. Add books by appending here.

window.GB_ERAS = ['Ancient Greece', 'Ancient Rome', 'The Middle Ages', 'Renaissance & Early Modern', 'The Enlightenment & Beyond'];

window.GREATBOOKS = [
  {
    id: 'the-iliad',
    title: 'The Iliad',
    author: 'Homer',
    era: 'Ancient Greece',
    year: 'c. 750 BC',
    summary: 'An epic poem set during the final weeks of the ten-year Greek siege of Troy. It opens not with the war\'s beginning but with a quarrel: the great warrior Achilles, insulted by the Greek commander Agamemnon, withdraws from battle in fury, and the Greeks suffer for it. The poem traces the terrible cost of that rage until the death of his dearest friend Patroclus drives Achilles back to the field to face the Trojan hero Hector. What makes it endure is not the fighting but the humanity around it: the tenderness of Hector with his wife and infant son, the grief of an old king begging for his son\'s body, the sense of mortal lives lived under the shadow of fate and death. For nearly three thousand years it has shaped how the West imagines heroism, honour, and the sorrow woven into glory.'
  },
  {
    id: 'the-odyssey',
    title: 'The Odyssey',
    author: 'Homer',
    era: 'Ancient Greece',
    year: 'c. 725 BC',
    summary: 'The companion to the Iliad, this epic follows the Greek hero Odysseus on his long, storm-tossed journey home after the fall of Troy. Where the Iliad is about war, the Odyssey is about homecoming, cunning, and endurance. Held back by the sea-god Poseidon\'s wrath, Odysseus meets one-eyed giants, the enchantress Circe, the deadly Sirens, and the whirlpool Charybdis, surviving each by wit rather than brute strength. Meanwhile his faithful wife Penelope fends off aggressive suitors, and his son Telemachus comes of age searching for news of his father. The story builds to Odysseus\'s disguised return and reckoning in his own hall. Its themes of longing for home, loyalty, hospitality, and the tension between adventure and belonging have made it the archetypal journey narrative, echoing through every tale of a wanderer trying to find the way back to who and what they love.'
  },
  {
    id: 'the-histories',
    title: 'The Histories',
    author: 'Herodotus',
    era: 'Ancient Greece',
    year: 'c. 430 BC',
    summary: 'Often called the first work of history in the Western world, this sprawling account sets out to explain the great wars between the Greek city-states and the vast Persian Empire. Herodotus, whom later ages named the "Father of History," did more than record battles: he travelled widely and gathered stories of the peoples, customs, and geography of the known world, from Egypt to Scythia. His pages brim with digressions, marvels, and moral reflection on the rise and fall of powerful men and empires. The narrative climbs toward the famous clashes at Marathon, Thermopylae, and Salamis, where a fractured coalition of Greeks resisted overwhelming force. Curious, tolerant, and endlessly interested in why people do what they do, Herodotus invented the very idea of inquiry into the human past, and his warning about the instability of fortune still speaks to every age that thinks its power secure.'
  },
  {
    id: 'the-republic',
    title: 'The Republic',
    author: 'Plato',
    era: 'Ancient Greece',
    year: 'c. 375 BC',
    summary: 'A foundational work of political and moral philosophy cast as a dramatic conversation led by Socrates. It begins with a simple-sounding question: what is justice, and is the just life truly better than the unjust one? To answer, Socrates and his companions build an imaginary city from the ground up, using it as a large-scale model of the human soul. Along the way the dialogue takes up education, the nature of the good, the role of poetry, and who should rule, arguing famously that power belongs with wisdom-loving "philosopher kings." It contains the celebrated Allegory of the Cave, in which prisoners mistake shadows for reality until one is freed to see the light. Provocative, radical, and endlessly debated, the Republic set the terms for Western thought about justice, the ideal state, knowledge, and the examined life, and remains a touchstone even for those who reject its conclusions.'
  },
  {
    id: 'nicomachean-ethics',
    title: 'Nicomachean Ethics',
    author: 'Aristotle',
    era: 'Ancient Greece',
    year: 'c. 340 BC',
    summary: 'Aristotle\'s great inquiry into how a human being should live asks a practical question: what is the good life, and how do we reach it? His answer is happiness, but not fleeting pleasure so much as eudaimonia, a deep flourishing that comes from living well over a whole lifetime. The path to it lies in cultivating virtues of character, each understood as a balanced mean between extremes, so courage sits between cowardice and recklessness, generosity between stinginess and waste. Virtue, he argues, is not knowledge alone but habit, formed by practice until good action becomes second nature. He explores friendship, pleasure, self-control, and the crowning role of contemplation. Grounded, humane, and remarkably free of dogma, the Ethics treats morality as a skill to be developed rather than a set of commands, and for over two thousand years it has anchored Western thinking about character, purpose, and what it means to live well.'
  },
  {
    id: 'the-theban-plays',
    title: 'The Theban Plays (Oedipus the King & Antigone)',
    author: 'Sophocles',
    era: 'Ancient Greece',
    year: 'c. 441 BC',
    summary: 'Two towering tragedies from the cycle of Thebes. In Oedipus the King, a proud ruler seeks the cause of a plague on his city, launching a relentless investigation that slowly, horrifyingly reveals he himself is the murderer he hunts and that he has fulfilled a prophecy he tried to escape, killing his father and marrying his mother unknowingly. It is the supreme drama of a man undone by the very search for truth. In Antigone, his daughter defies the king\'s decree by burying her rebel brother, setting personal conscience and divine law against the authority of the state, with ruinous consequences for all. Together the plays probe fate and free will, pride, the limits of human knowledge, and the clash between individual duty and public power. Their questions about how much we truly govern our own lives have haunted audiences and thinkers, from Aristotle to Freud, ever since.'
  },
  {
    id: 'the-aeneid',
    title: 'The Aeneid',
    author: 'Virgil',
    era: 'Ancient Rome',
    year: '19 BC',
    summary: 'Rome\'s national epic, written by Virgil to give the empire a founding myth worthy of Homer. It follows Aeneas, a Trojan prince who escapes the burning ruins of Troy carrying his aged father on his back and leading survivors toward an unknown destiny in Italy. Driven by duty rather than personal desire, he endures shipwreck, the underworld, and a doomed love affair with Dido, the queen of Carthage, whose heartbreak becomes one of literature\'s most moving tragedies. The second half turns to war in Italy as Aeneas fights to plant the seed of what will become Rome. Beneath the adventure runs a meditation on sacrifice, the cost of empire, and the burden of destiny that overrides private happiness. Composed under the emperor Augustus, the Aeneid shaped Roman self-understanding and became the central poem of Western education for well over a thousand years.'
  },
  {
    id: 'meditations',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    era: 'Ancient Rome',
    year: 'c. 175 AD',
    summary: 'A private notebook written by a Roman emperor to himself, never intended for publication, which is exactly what gives it such power. Marcus Aurelius, ruler of the greatest empire on earth and a devoted student of Stoic philosophy, jotted these reflections in army camps and quiet hours to steady his own mind. There is no system or argument here, only a man reminding himself again and again how to live: accept what cannot be changed, master the judgements within your control, do your duty without complaint, treat others with patience, and remember that death comes for all and levels every rank. Humble, unsparing, and often strikingly tender, the book shows the loneliest and most powerful man of his age wrestling with the same fears and frustrations as anyone. For centuries readers have turned to it as a practical guide to resilience, perspective, and inner calm amid chaos.'
  },
  {
    id: 'parallel-lives',
    title: 'Parallel Lives',
    author: 'Plutarch',
    era: 'Ancient Rome',
    year: 'c. 100 AD',
    summary: 'A series of biographies pairing famous Greeks with famous Romans, such as Alexander with Julius Caesar, so that each life illuminates the other. Plutarch was less interested in cataloguing great deeds than in revealing character, believing that a small gesture or offhand remark could expose a man\'s soul more sharply than a won battle. His portraits are rich with memorable anecdote, moral reflection, and a shrewd eye for how ambition, virtue, and vice shape a life and a fate. He wrote to instruct as much as to inform, holding these figures up as examples to imitate or avoid. The influence has been immense: Shakespeare drew his Roman plays straight from Plutarch, and generations of statesmen, from the Renaissance to the American founders, formed their idea of noble conduct from these pages. It remains one of the most humane and readable windows into the ancient world.'
  },
  {
    id: 'confessions',
    title: 'Confessions',
    author: 'Augustine',
    era: 'The Middle Ages',
    year: '400 AD',
    summary: 'Widely regarded as the first true autobiography in the Western tradition, this deeply personal work is written as an extended prayer, addressed directly to God. Augustine looks back over his restless early life, his youthful thefts and ambitions, his years pursuing pleasure and worldly success, his long entanglement with rival philosophies, and the intellectual and emotional turmoil that finally led him to Christian faith. But it is far more than a memoir of conversion. He turns his searching gaze inward on memory, time, desire, and the workings of the human will, asking why we do wrong even when we know better, and what the heart is truly seeking in all its wandering. Intimate, anguished, and psychologically acute in a way that feels startlingly modern, the Confessions founded the tradition of introspective self-examination and shaped Western ideas of selfhood, sin, and the longing for something beyond ourselves.'
  },
  {
    id: 'the-consolation-of-philosophy',
    title: 'The Consolation of Philosophy',
    author: 'Boethius',
    era: 'The Middle Ages',
    year: '524 AD',
    summary: 'Written in prison while its author awaited execution on false charges, this work stages a conversation between the condemned Boethius and Lady Philosophy, who appears to him as a radiant woman to cure his despair. Once a powerful Roman official, now stripped of everything, he rages against the injustice of his fall. Philosophy answers gently but firmly, teaching him that the gifts of Fortune, wealth, status, and power, were never truly his, that they turn on her ever-spinning wheel, and that real happiness lies only in the unchanging good. Together they reason through the nature of true goodness, the problem of evil, and how human freedom can coexist with divine foreknowledge. Composed in alternating prose and verse, it blends Greek philosophy with a serene acceptance of fate. One of the most read and beloved books of the Middle Ages, it offered comfort to countless readers facing loss, injustice, and the fear of death.'
  },
  {
    id: 'the-divine-comedy',
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    era: 'The Middle Ages',
    year: '1320',
    summary: 'An epic poem in which Dante casts himself as a traveller journeying through the three realms of the afterlife. Lost in a dark wood at the midpoint of his life, he is guided by the Roman poet Virgil down through the descending circles of Hell, where sinners suffer punishments that mirror their crimes, then up the mountain of Purgatory where souls are cleansed, and finally, led by his idealised beloved Beatrice, into the radiant spheres of Paradise. Along the way he meets popes and poets, lovers and traitors, drawn from history and his own bitter times. On the surface a vivid tour of damnation and grace, the poem is also a vast allegory of the soul\'s ascent toward God and a sweeping portrait of medieval thought. Written in vigorous everyday Italian rather than Latin, it helped forge a national language and stands as one of the supreme achievements of world literature.'
  },
  {
    id: 'the-prince',
    title: 'The Prince',
    author: 'Niccolò Machiavelli',
    era: 'Renaissance & Early Modern',
    year: '1532',
    summary: 'A short, startling handbook on how rulers gain and keep power, written by a Florentine diplomat who had watched real princes rise and fall at close range. Breaking sharply with earlier books that told rulers to be virtuous, Machiavelli asks instead what actually works. He argues coolly that a leader must be prepared to act against conventional morality when the survival of the state demands it, that it is safer to be feared than loved if one cannot be both, and that appearances and timing often matter more than goodness. Ruthlessly practical and free of illusion, it treats politics as a craft governed by human nature and fortune rather than by ideals. Shocking in its own day and ever since, the book gave us the word "Machiavellian," yet its clear-eyed realism about power, ambition, and the gap between how people should and do behave has made it essential reading for anyone who studies statecraft.'
  },
  {
    id: 'essays',
    title: 'Essays',
    author: 'Michel de Montaigne',
    era: 'Renaissance & Early Modern',
    year: '1580',
    summary: 'The book that invented the essay as we know it. Retiring to his tower library, the French nobleman Montaigne set out to examine one endlessly fascinating subject: himself. In dozens of wandering, conversational pieces on topics from friendship and fear to cannibals, sleep, thumbs, and the fear of death, he thinks aloud on the page, following his curiosity wherever it leads. His guiding question, "What do I know?", expresses a humane skepticism that distrusts dogma and certainty and prizes honest self-knowledge instead. He is candid about his own contradictions, appetites, and doubts, and out of that candour builds a warm, tolerant, deeply human picture of what it is to be a person. Casual yet profound, he treats his own ordinary life as worthy of the closest attention. Few books feel so much like the company of a wise, funny, unguarded friend, and none did more to make private reflection a literary form.'
  },
  {
    id: 'don-quixote',
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    era: 'Renaissance & Early Modern',
    year: '1605',
    summary: 'Often called the first modern novel, this sprawling comic masterpiece follows an aging Spanish gentleman who reads so many tales of chivalry that he loses his wits and sets out as a knight-errant to revive a golden age. Renaming himself Don Quixote, he mistakes windmills for giants and roadside inns for castles, taking as his squire the earthy, proverb-spouting peasant Sancho Panza, whose plain common sense forever collides with his master\'s glorious delusions. Their misadventures are hilarious and often painful, and beneath the laughter runs a tender, searching meditation on idealism and reality, madness and sanity, and whether a life devoted to a beautiful dream is folly or a kind of nobility. Endlessly inventive and surprisingly modern in the way it plays with storytelling itself, the book has shaped every novel that came after it and given the world the enduring image of the dreamer tilting bravely at windmills.'
  },
  {
    id: 'hamlet',
    title: 'Hamlet',
    author: 'William Shakespeare',
    era: 'Renaissance & Early Modern',
    year: '1603',
    summary: 'Shakespeare\'s most famous tragedy opens on the battlements of a Danish castle, where the ghost of the dead king appears to his son and reveals that he was murdered by his own brother, who has now seized the throne and married the widowed queen. Charged with revenge, Prince Hamlet is thrown into an agony of doubt, delay, and feigned madness, unsure whether to trust the ghost, whom to believe, and how to act in a corrupted world. Around him the play spirals toward madness, an accidental killing, a drowning, and a final scene of catastrophe. Yet its true drama is inward, unfolding in soliloquies of unmatched depth, including the immortal "To be or not to be," where a mind turns over questions of death, conscience, meaning, and the will to act. Endlessly interpreted, Hamlet gave the West its defining portrait of self-conscious modern man, thinking too precisely on the event.'
  },
  {
    id: 'meditations-on-first-philosophy',
    title: 'Meditations on First Philosophy',
    author: 'René Descartes',
    era: 'The Enlightenment & Beyond',
    year: '1641',
    summary: 'A brief, revolutionary work that helped launch modern philosophy by starting over from nothing. Descartes resolves to doubt everything he can possibly doubt, his senses, the outside world, even mathematics, imagining a deceiving demon that might be tricking him at every turn, in order to find some rock of certainty beneath. He finds it in a single unshakable truth: that even if he is deceived, he must exist in order to be deceived at all, captured in the famous conclusion, "I think, therefore I am." From this foundation he tries to rebuild knowledge, arguing for the existence of God and the reality of the external world, and drawing a sharp line between the thinking mind and the material body. Written as a sequence of six days of reflection, it set the agenda for centuries of debate about knowledge, certainty, consciousness, and the relationship between mind and matter that philosophers still wrestle with today.'
  },
  {
    id: 'paradise-lost',
    title: 'Paradise Lost',
    author: 'John Milton',
    era: 'The Enlightenment & Beyond',
    year: '1667',
    summary: 'A grand epic poem that sets out, in Milton\'s words, to "justify the ways of God to men" by retelling the fall of humankind. It opens not in Eden but in Hell, where Satan and his rebel angels, newly cast out of Heaven, rally in defiance and resolve to strike back at God by corrupting his new creation. Milton\'s Satan is one of literature\'s most magnificent and troubling figures, proud, eloquent, and strangely sympathetic, declaring it "better to reign in Hell than serve in Heaven." The poem moves to Eden and the first man and woman, tracing the temptation that leads Adam and Eve to disobey and lose paradise, yet ending on a note of sober hope. Written in majestic blank verse by a blind and politically defeated poet, it grapples with free will, obedience, pride, and loss on the largest possible scale, and stands as the supreme epic in the English language.'
  },
  {
    id: 'pensees',
    title: 'Pensées',
    author: 'Blaise Pascal',
    era: 'The Enlightenment & Beyond',
    year: '1670',
    summary: 'A collection of fragments and reflections left unfinished at the death of Pascal, a brilliant mathematician and scientist who turned his formidable mind to the deepest questions of human existence. Intended as a defence of the Christian faith, what survives is something richer and stranger: a series of piercing meditations on the paradox of being human. Pascal sees man as a creature suspended between greatness and misery, capable of grasping the infinite yet frail as a "thinking reed" crushed by a drop of water. He probes our restlessness, our craving for distraction to avoid facing ourselves, and the limits of reason before mystery. Here too is the famous "wager," his argument that betting on God is the rational choice. Aphoristic, unflinching, and often startlingly modern in its psychology, the Pensées confront the reader with the terrors and wonders of the human condition, and remain among the most quoted works of religious thought.'
  },
  {
    id: 'the-social-contract',
    title: 'The Social Contract',
    author: 'Jean-Jacques Rousseau',
    era: 'The Enlightenment & Beyond',
    year: '1762',
    summary: 'A foundational work of modern political thought that opens with one of the most famous lines in philosophy: "Man is born free, and everywhere he is in chains." Rousseau sets out to ask how legitimate authority is possible, how people can join together in society while remaining as free as before. His answer is the social contract, in which individuals surrender their private interests to what he calls the "general will," the collective good of the whole community, and in obeying it obey only themselves. From this he argues that sovereignty belongs to the people, not to kings, and that just government rests on the consent of the governed. Bold, idealistic, and at times unsettling, the book challenged the divine right of monarchs and helped inspire the democratic revolutions that reshaped the modern world. Its ideas about freedom, equality, and popular sovereignty still lie at the heart of debates about what makes a government legitimate.'
  }
];
