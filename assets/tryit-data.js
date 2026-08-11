// tryit-data.js — the "Try it" beginner layer: a few real, do-now exercises per
// art, to get people OFF THE STARTING LINE (not a full course). Attached to the
// matching art in art.html as a 'try-it' section. Add an art by adding a key.
//
// Exercise types:
//   choice   — { type:'choice', q, options:[...], answer:<index>, explain }
//   reveal   — { type:'reveal', q, hint?, reveal }        (do-now task + model answer)
//   memorise — { type:'memorise', text, source }          (see it, then hide & recall)

window.TRYIT = {
  logic: {
    title: 'Try it',
    intro: 'Logic is learned by doing, not just reading. Here are a few beginners’ exercises — do them now, right here. Tap an answer to see how you did.',
    exercises: [
      {
        type: 'choice',
        q: 'All men are mortal. Socrates is a man. Therefore Socrates is mortal. Is this argument valid?',
        options: ['Valid', 'Invalid'],
        answer: 0,
        explain: 'Valid. The conclusion follows necessarily from the premises — if both premises are true, the conclusion cannot be false. This is the classic syllogism.'
      },
      {
        type: 'choice',
        q: 'All birds can fly. A penguin is a bird. Therefore a penguin can fly. Is this argument valid?',
        options: ['Valid', 'Invalid'],
        answer: 0,
        explain: 'Valid — and this is the key lesson. The reasoning is correct even though the conclusion is false, because the FIRST premise is false. Validity is about the form of the argument, not whether its statements are actually true. A valid argument built on a false premise can lead you to a false conclusion.'
      },
      {
        type: 'choice',
        q: 'A friend says: “You can’t trust his argument about health — he’s not even a doctor.” Which fallacy is this?',
        options: ['Ad hominem', 'Straw man', 'Slippery slope', 'False dilemma'],
        answer: 0,
        explain: 'Ad hominem — “to the man.” It attacks the person instead of answering the argument. Whether or not he is a doctor, his argument stands or falls on its own reasons.'
      },
      {
        type: 'choice',
        q: '“If we let one student redo a test, soon they’ll all expect to redo everything and standards will collapse.” Which fallacy?',
        options: ['Slippery slope', 'Circular reasoning', 'Appeal to authority', 'Straw man'],
        answer: 0,
        explain: 'Slippery slope — it assumes one small step must lead to an extreme end, without showing why each step forces the next.'
      },
      {
        type: 'choice',
        q: '“Everyone knows this diet works, so it must be true.” Which fallacy?',
        options: ['Appeal to popularity', 'Ad hominem', 'Begging the question', 'False cause'],
        answer: 0,
        explain: 'Appeal to popularity (the bandwagon). A claim is not true just because many people believe it — crowds have been wrong about a great many things.'
      },
      {
        type: 'reveal',
        q: 'Your turn. Take something you argued or decided recently, and lay it out as a syllogism: two premises and a conclusion. Then ask — does the conclusion truly follow?',
        hint: 'Form: All A are B. This is an A. Therefore this is B.',
        reveal: 'Model: (1) Regular exercise improves health. (2) A daily walk is regular exercise. (3) Therefore a daily walk improves health. Valid — the conclusion follows from the premises. Now check yours: if someone accepted both your premises, would they be forced to accept your conclusion?'
      },
      {
        type: 'memorise',
        text: 'A valid argument is one whose conclusion must be true if its premises are true. Validity is about form. Soundness is validity plus premises that are actually true.',
        source: 'The heart of logic — learn it by heart'
      }
    ],
    more: { href: 'fallacies.html', label: 'Spot the Fallacy — drill all 21', note: 'You just met a few of the traps that make bad arguments sound smart. Want to learn and practise them all?' }
  },

  stoicism: {
    title: 'Try it',
    intro: 'Stoicism is a practice, not a theory — and its very first move is to sort what is in your power from what is not. So let\'s drill it. For each one, decide: in your power, or not?',
    exercises: [
      { type: 'choice', q: 'Whether it rains on the day you had planned to spend outdoors.', options: ['In my power', 'Not in my power'], answer: 1, explain: 'Not in your power. The weather is an external — the Stoic spends no worry on it, and simply decides what to do instead.' },
      { type: 'choice', q: 'Whether you lose your temper when your plans are ruined.', options: ['In my power', 'Not in my power'], answer: 0, explain: 'In your power. Your judgements and reactions are yours alone — this is exactly where the Stoic puts his effort.' },
      { type: 'choice', q: 'What other people think and say about you.', options: ['In my power', 'Not in my power'], answer: 1, explain: 'Not in your power. Reputation lives in other people\'s minds, which you do not govern. Do what is right and let the opinions fall where they may.' },
      { type: 'choice', q: 'Whether you tell the truth today.', options: ['In my power', 'Not in my power'], answer: 0, explain: 'In your power. Your own actions and choices are the one thing fully up to you.' },
      { type: 'choice', q: 'Whether you win the match.', options: ['In my power', 'Not in my power'], answer: 1, explain: 'Not fully in your power — the outcome depends on opponents, luck, the referee. What IS yours is how you play, and how you take the result.' },
      { type: 'choice', q: 'How you respond to an insult.', options: ['In my power', 'Not in my power'], answer: 0, explain: 'In your power. Epictetus: it is not the insult that harms you, but your judgement that it is harmful.' },
      { type: 'reveal', q: 'Your turn. Think of one thing that worried you this week. Split it in two: the part that was outside your control, and your response to it — which was inside it. Where did your energy go, and where should it have gone?', reveal: 'The Stoic move: release the first entirely — it was never yours. Pour everything into the second. Marcus Aurelius: “You have power over your mind, not outside events. Realise this, and you will find strength.”' },
      { type: 'memorise', text: 'It is not things that disturb us, but our judgements about things.', source: 'Epictetus — the whole of Stoicism in one line' }
    ]
  },

  aristotle: {
    title: 'Try it',
    intro: 'For Aristotle, every virtue is a mean between two vices — one of too much, one of too little. Courage, for instance, sits between cowardice and rashness. Find the middle.',
    exercises: [
      { type: 'choice', q: 'Courage is the golden mean between which two extremes?', options: ['Cowardice and rashness', 'Fear and strength', 'Caution and confidence', 'Weakness and pride'], answer: 0, explain: 'Courage lies between cowardice (too little confidence in the face of danger) and rashness (too much).' },
      { type: 'choice', q: 'Generosity is the mean between which two extremes?', options: ['Stinginess and wastefulness', 'Poverty and wealth', 'Saving and spending', 'Greed and charity'], answer: 0, explain: 'Generosity sits between the stingy person who gives too little and the wasteful one who gives too much, or wrongly.' },
      { type: 'choice', q: 'Good temper is the mean between which two extremes?', options: ['Spinelessness and short temper', 'Calm and fury', 'Patience and passion', 'Peace and war'], answer: 0, explain: 'Good temper lies between never feeling anger when you should (spinelessness) and flaring up too easily (irascibility).' },
      { type: 'choice', q: 'In conversation, wit is the mean between which two extremes?', options: ['Dullness and buffoonery', 'Silence and chatter', 'Seriousness and mockery', 'Shyness and rudeness'], answer: 0, explain: 'Wit sits between the bore who never jokes and the buffoon who will say anything for a laugh.' },
      { type: 'choice', q: 'Proper self-regard is the mean between which two extremes?', options: ['Meekness and vanity', 'Shame and boasting', 'Doubt and certainty', 'Modesty and pride'], answer: 0, explain: 'The great-souled person sits between undue humility (thinking too little of oneself) and vanity (thinking too much).' },
      { type: 'reveal', q: 'Your turn. Take one quality you are working on. Name its two extremes — the too-much and the too-little — and where the healthy mean sits. Then ask: which extreme do you personally lean toward?', reveal: 'Model: Confidence — too little is timidity, too much is arrogance; the mean is a quiet self-assurance. Aristotle\'s practical tip: since we each lean one way, deliberately steer toward the opposite extreme, and you will land nearer the middle.' },
      { type: 'memorise', text: 'Virtue is a mean between two vices, the one of excess and the other of deficiency. To feel the right thing, toward the right person, at the right time, and in the right way — that is the mark of virtue.', source: 'Aristotle, Nicomachean Ethics' }
    ]
  },

  platonism: {
    title: 'Try it',
    intro: 'Plato\'s great claim: the world we see is only a dim copy of a realer world — the changeless Forms. Practise telling the shadow from the real thing.',
    exercises: [
      { type: 'choice', q: 'Which does Plato call MORE real — the copy, or the Form?', options: ['A single drawn triangle', 'Triangle itself — the perfect form'], answer: 1, explain: 'Triangle itself. Every drawn triangle is imperfect and passing; the Form is perfect and eternal, and grasped by the mind, not the eye.' },
      { type: 'choice', q: 'And here — which is more real?', options: ['One beautiful sunset', 'Beauty itself'], answer: 1, explain: 'Beauty itself. The many beautiful things come and go; Beauty — that in which they all share — does not. Knowledge is of the Form; mere opinion is of the copies.' },
      { type: 'choice', q: 'In the Allegory of the Cave, the prisoners mistake what for reality?', options: ['Shadows on the wall', 'The sun outside', 'The fire behind them', 'Each other'], answer: 0, explain: 'Shadows. Chained from birth, they take flickering shadows for the whole world — as most of us take the passing world of the senses for all there is.' },
      { type: 'choice', q: 'For Plato, learning a deep truth is really an act of...?', options: ['Remembering what the soul already knew', 'Filling an empty mind', 'Copying the teacher', 'Trial and error'], answer: 0, explain: 'Recollection. In the Meno, an untaught boy is led by questions alone to prove a theorem — drawing out what was in him all along.' },
      { type: 'reveal', q: 'Try Socrates\' own method. Take a big word you use with confidence — justice, love, courage. Don\'t give examples; try to define the thing ITSELF in a single sentence. Notice how hard it becomes.', reveal: 'That difficulty is the doorway to philosophy. Socrates spent his life showing that we wield these words boldly without being able to say what they mean. The search for the real definition — the Form behind the many examples — is the climb out of the cave.' },
      { type: 'memorise', text: 'The unexamined life is not worth living.', source: 'Socrates, at his trial' }
    ]
  },

  epicureanism: {
    title: 'Try it',
    intro: 'Epicurus said the whole art of a happy life begins with sorting your desires. There are three kinds — natural & necessary, natural but not necessary, and empty. For each, choose which it is.',
    exercises: [
      { type: 'choice', q: 'A cup of water when you are thirsty.', options: ['Natural & necessary', 'Natural but not necessary', 'Empty (neither)'], answer: 0, explain: 'Natural & necessary. Food, water, shelter, safety, friendship — nature truly asks for these, and they are easily met.' },
      { type: 'choice', q: 'A rare, elaborate nine-course feast.', options: ['Natural & necessary', 'Natural but not necessary', 'Empty (neither)'], answer: 1, explain: 'Natural but not necessary. The desire to eat is natural; the craving for LUXURY food is not needed — plain food satisfies just as well, and costs no anxiety.' },
      { type: 'choice', q: 'Being famous and admired by strangers.', options: ['Natural & necessary', 'Natural but not necessary', 'Empty (neither)'], answer: 2, explain: 'Empty. It depends entirely on others and has no natural limit — so it can never be filled. The Epicurean quietly lets it go.' },
      { type: 'choice', q: 'The company of a few good friends.', options: ['Natural & necessary', 'Natural but not necessary', 'Empty (neither)'], answer: 0, explain: 'Natural & necessary. Epicurus called friendship the greatest of all the things wisdom provides for a happy life.' },
      { type: 'choice', q: 'A house bigger than your neighbour\'s.', options: ['Natural & necessary', 'Natural but not necessary', 'Empty (neither)'], answer: 2, explain: 'Empty. Wanting driven by comparison is bottomless. Nature\'s wealth is small and easily won; the wealth demanded by opinion runs off to infinity.' },
      { type: 'reveal', q: 'Write down three things you want right now. Sort each one: natural & necessary, natural but not necessary, or empty. Which could you happily set down?', reveal: 'Here is Epicurus\' secret: almost all our unrest lives in the "empty" pile — desires that can never be satisfied. Answer only what nature truly asks, and you find the good life was always close at hand.' },
      { type: 'memorise', text: 'Do not fear the gods. Do not worry about death. What is good is easy to get. What is terrible is easy to endure.', source: 'The fourfold cure (tetrapharmakos)' }
    ]
  },

  cynicism: {
    title: 'Try it',
    intro: 'Diogenes tested every desire and duty against a single question: is this from nature, or only from convention (custom)? Most of what weighs on us turns out to be mere convention. Try sorting them.',
    exercises: [
      { type: 'choice', q: 'Needing shelter from the cold.', options: ['Nature', 'Convention'], answer: 0, explain: 'Nature. Cold, hunger, and thirst are real; the Cynic meets them simply and spends no worry on them.' },
      { type: 'choice', q: 'Needing a fashionable, expensive brand of clothes.', options: ['Nature', 'Convention'], answer: 1, explain: 'Convention. Nature asks only for warmth; the label is a custom we mistook for a need.' },
      { type: 'choice', q: 'Feeling shame at doing honest work others look down on.', options: ['Nature', 'Convention'], answer: 1, explain: 'Convention. Diogenes felt no such shame. The disgrace is not in honest poverty but in the opinions we let rule us.' },
      { type: 'choice', q: 'Eating when hungry and resting when tired.', options: ['Nature', 'Convention'], answer: 0, explain: 'Nature — plain and easily satisfied. The Cynic keeps his wants close to what nature actually requires.' },
      { type: 'choice', q: 'The craving for fame, rank, and status.', options: ['Nature', 'Convention'], answer: 1, explain: 'Convention. It lives entirely in other people\'s opinions — exactly the kind of chain the Cynic throws off to be free.' },
      { type: 'reveal', q: 'Pick one thing you feel you "must" have or do — a possession, a title, an appearance. Ask Diogenes\' question: is this nature, or only convention? If it\'s only convention, you are free to set it down.', reveal: 'You need not live in a barrel like Diogenes. The exercise is simply to SEE which of your burdens nature truly requires — and to discover how astonishingly few they are. Each convention you set down is one fewer handle the world has on you.' },
      { type: 'memorise', text: 'It is the privilege of the gods to want nothing, and of godlike men to want little.', source: 'Diogenes the Cynic' }
    ]
  },

  confucius: {
    title: 'Try it',
    intro: 'Confucianism is the art of becoming a fully cultivated person through a handful of key virtues. Learn to name them — then practise the one exercise that sits at the tradition\'s heart.',
    exercises: [
      { type: 'choice', q: 'Caring for your parents in old age, with warmth and reverence — this is which virtue?', options: ['Xiao (filial devotion)', 'Li (ritual)', 'Ren (humaneness)', 'Wisdom'], answer: 0, explain: 'Xiao — filial devotion. Confucius called it the very root from which all wider humaneness grows.' },
      { type: 'choice', q: 'Greeting a guest properly, keeping courtesy and good form — this is which?', options: ['Li (ritual propriety)', 'Ren', 'Xiao', 'Shu'], answer: 0, explain: 'Li — ritual propriety: the manners and forms that give inner virtue its outward, graceful shape.' },
      { type: 'choice', q: 'What is Confucius\' version of the golden rule?', options: ['Do not impose on others what you do not want for yourself', 'Do unto others before they do unto you', 'Treat others exactly as they treat you', 'Look after your own family first'], answer: 0, explain: 'Shu — reciprocity. Confucius gave it as the single word one could live by, centuries before its Western forms.' },
      { type: 'choice', q: 'The junzi (cultivated person) thinks of what is right; the petty person thinks of...?', options: ['Profit', 'Others', 'Ritual', 'The past'], answer: 0, explain: '"The junzi understands what is right; the small man understands what will sell." Character, not birth or gain, makes the noble person.' },
      { type: 'choice', q: 'For Confucius, a good person is made mainly by...?', options: ['Learning and steady self-cultivation', 'Noble birth', 'Wealth', 'Natural talent alone'], answer: 0, explain: 'Cultivation — day by day, as jade is cut and polished. Nobility is of conduct, not of blood.' },
      { type: 'reveal', q: 'Confucius\' disciple examined himself daily on three points. Try it for today: In acting for others, were you faithful? With friends, were you sincere? Did you practise what you have learned?', reveal: 'This is Zengzi\'s daily self-examination — the quiet engine of Confucian self-cultivation. Done honestly but gently, as a fair friend would judge you, it turns ordinary days into the slow, real shaping of character.' },
      { type: 'memorise', text: 'Do not impose on others what you do not desire for yourself.', source: 'Confucius, the Analects' }
    ]
  },

  grammar: {
    title: 'Try it',
    intro: 'Grammar begins with knowing the job each word does in a sentence. In "The wise philosopher spoke calmly," name the part of speech of each word below.',
    exercises: [
      { type: 'choice', q: '"wise" — what part of speech?', options: ['Adjective', 'Adverb', 'Noun', 'Verb'], answer: 0, explain: 'Adjective — it describes a noun (which philosopher? the wise one).' },
      { type: 'choice', q: '"philosopher" — what part of speech?', options: ['Noun', 'Verb', 'Adjective', 'Pronoun'], answer: 0, explain: 'Noun — a person, place, or thing. Here it is the subject of the sentence.' },
      { type: 'choice', q: '"spoke" — what part of speech?', options: ['Verb', 'Noun', 'Adverb', 'Preposition'], answer: 0, explain: 'Verb — the action or state. Every complete sentence needs one.' },
      { type: 'choice', q: '"calmly" — what part of speech?', options: ['Adverb', 'Adjective', 'Verb', 'Noun'], answer: 0, explain: 'Adverb — it describes HOW the action was done. Most (not all) end in "-ly".' },
      { type: 'choice', q: 'A word that stands in for a noun — he, she, it, they — is a...?', options: ['Pronoun', 'Preposition', 'Conjunction', 'Article'], answer: 0, explain: 'Pronoun — it replaces a noun so you need not repeat it.' },
      { type: 'reveal', q: 'Take any sentence you have written today. Find its two bones: the subject (who or what it is about) and the main verb (the action). Everything else hangs on those two.', reveal: 'Model — "The tired traveller finally reached the shore." Subject: traveller. Verb: reached. Strip a sentence to subject + verb and you see its skeleton; everything else is there to shade or qualify those two.' },
      { type: 'memorise', text: 'The eight parts of speech: noun, pronoun, verb, adverb, adjective, preposition, conjunction, interjection.', source: 'The foundation of grammar' }
    ]
  },

  rhetoric: {
    title: 'Try it',
    intro: 'Rhetoric is the art of saying a thing well. Great speakers use named devices — learn to spot them, and you can start to use them. Which figure is at work?',
    exercises: [
      { type: 'choice', q: '"It was the best of times, it was the worst of times." — balancing opposites against each other is...?', options: ['Antithesis', 'Alliteration', 'Hyperbole', 'Metaphor'], answer: 0, explain: 'Antithesis — setting contrary ideas side by side (best / worst) to sharpen both.' },
      { type: 'choice', q: '"I have a dream... I have a dream... I have a dream." — repeating the opening words is...?', options: ['Anaphora', 'Antithesis', 'Simile', 'Irony'], answer: 0, explain: 'Anaphora — beginning successive phrases with the same words, which builds rhythm and force.' },
      { type: 'choice', q: '"Life is a journey." — calling one thing another to reveal a likeness is a...?', options: ['Metaphor', 'Hyperbole', 'Alliteration', 'Anaphora'], answer: 0, explain: 'Metaphor — an implied comparison (life IS a journey), as opposed to a simile, which says "like" or "as".' },
      { type: 'choice', q: '"Government of the people, by the people, for the people." — a group of three for rhythm and weight is a...?', options: ['Tricolon (rule of three)', 'Antithesis', 'Metaphor', 'Rhetorical question'], answer: 0, explain: 'Tricolon — the rule of three. Three beats feel complete and memorable, which is why speakers reach for them.' },
      { type: 'choice', q: '"I have told you a thousand times!" — deliberate exaggeration is...?', options: ['Hyperbole', 'Metaphor', 'Anaphora', 'Antithesis'], answer: 0, explain: 'Hyperbole — overstatement for emphasis, not meant to be taken literally.' },
      { type: 'reveal', q: 'Your turn. Take a plain sentence — say, "we should not give up" — and rewrite it with force, using a rule of three or an antithesis.', reveal: 'Models — Rule of three: "We will begin, we will endure, and we will finish." Antithesis: "Not because it is easy, but because it is hard." The content barely changed; the shape did all the work.' },
      { type: 'memorise', text: 'Rhetoric is the faculty of discovering, in any given case, the available means of persuasion.', source: 'Aristotle, Rhetoric' }
    ]
  },

  'great-books': {
    title: 'Try it',
    intro: 'The Great Books are one long conversation across the centuries. Get to know the voices in it — match each landmark work to the mind that wrote it.',
    exercises: [
      { type: 'choice', q: 'Who wrote the Iliad and the Odyssey?', options: ['Homer', 'Virgil', 'Sophocles', 'Plato'], answer: 0, explain: 'Homer — the fountainhead of Western literature, sung centuries before it was written down.' },
      { type: 'choice', q: 'Who wrote the Republic, with its allegory of the cave?', options: ['Plato', 'Aristotle', 'Cicero', 'Augustine'], answer: 0, explain: 'Plato — pupil of Socrates and the most influential philosopher in the Western tradition.' },
      { type: 'choice', q: 'Who wrote the Aeneid, Rome\'s great epic?', options: ['Virgil', 'Homer', 'Ovid', 'Horace'], answer: 0, explain: 'Virgil — who gave Rome an epic to stand beside Homer\'s.' },
      { type: 'choice', q: 'Who wrote Hamlet, Macbeth, and King Lear?', options: ['Shakespeare', 'Chaucer', 'Milton', 'Dante'], answer: 0, explain: 'Shakespeare — the summit of English drama, endlessly re-read and re-staged.' },
      { type: 'choice', q: 'Who wrote the Divine Comedy — the journey through Hell, Purgatory, and Paradise?', options: ['Dante', 'Milton', 'Virgil', 'Aquinas'], answer: 0, explain: 'Dante Alighieri — who took Virgil himself as his guide through the poem.' },
      { type: 'reveal', q: 'Enough naming — begin. Pick ONE of these and read just its first page today (all are free online): the Odyssey, the Republic, or Marcus Aurelius\' Meditations.', reveal: 'That is the whole secret — not a reading list you finish, but a conversation you join, one page at a time. The person who reads a single page of Homer today is nearer the classical mind than the one who plans to read it all "someday".' },
      { type: 'memorise', text: 'In reading the great books, you join a conversation that has been going on for more than two thousand years — and you are invited to speak.', source: 'The idea of the Great Conversation' }
    ]
  },

  languages: {
    title: 'Try it',
    intro: 'You already know more Latin and Greek than you think — they are hidden inside thousands of English words. Learn a handful of roots and English starts to open up. What does each root mean?',
    exercises: [
      { type: 'choice', q: 'The Latin root "aqua" (as in aquarium, aquatic) means...?', options: ['Water', 'Air', 'Fire', 'Earth'], answer: 0, explain: 'Water. Once you know it, aquarium, aqueduct, and aquamarine all explain themselves.' },
      { type: 'choice', q: 'The Greek root "bios" (as in biology, biography) means...?', options: ['Life', 'Light', 'Time', 'Death'], answer: 0, explain: 'Life. Biology = the study of life; biography = the writing of a life.' },
      { type: 'choice', q: 'The Greek root "logos" (as in logic, and every "-ology") means...?', options: ['Word / reason / study', 'Number', 'Star', 'Love'], answer: 0, explain: 'Word, reason, or study. It hides at the end of biology, geology, theology — "the study of...".' },
      { type: 'choice', q: 'The Latin root "lux, lucis" (as in lucid, translucent) means...?', options: ['Light', 'Water', 'Sound', 'Strength'], answer: 0, explain: 'Light. Lucid = clear (full of light); Lucifer literally means "light-bringer".' },
      { type: 'choice', q: 'The Greek root "anthropos" (as in anthropology) means...?', options: ['Human being', 'Animal', 'God', 'City'], answer: 0, explain: 'Human being. Anthropology = the study of humankind; philanthropy = love of humanity.' },
      { type: 'reveal', q: 'Try it on a whole word. Break "telephone" and "biology" into their two roots each. What does each piece mean, and how does it add up?', reveal: 'telephone = tele (far) + phone (sound) = "far-sound". biology = bios (life) + logos (study) = "the study of life". Half of English is Latin and Greek wearing a disguise — learn the roots and you can often read a word you have never seen.' },
      { type: 'memorise', text: 'aqua = water · terra = earth · bios = life · logos = word/reason · lux = light · anthropos = human', source: 'Six roots that unlock a thousand English words' }
    ]
  },

  arithmetic: {
    title: 'Try it',
    intro: 'To the classical mind, arithmetic is not sums but the study of number in itself — its kinds, its shapes, its hidden order. Meet a few of the numbers the Pythagoreans thought worth knowing by name.',
    exercises: [
      { type: 'choice', q: 'The Greeks called 6 a \'perfect\' number. Why?', options: ['Its proper divisors 1 + 2 + 3 add up to 6 itself', 'It is the first even number', 'It is 2 times 3', 'It can be drawn as a perfect hexagon'], answer: 0, explain: 'A perfect number equals the sum of its proper divisors. For 6 those are 1, 2 and 3 — and 1 + 2 + 3 = 6. The next perfect number is 28 (1 + 2 + 4 + 7 + 14).' },
      { type: 'choice', q: 'Which of these is a PRIME number — divisible only by 1 and itself?', options: ['9', '15', '13', '21'], answer: 2, explain: '13 has no divisors but 1 and 13. The others break apart: 9 = 3 × 3, 15 = 3 × 5, 21 = 3 × 7. The primes are the atoms of number, from which every other number is built.' },
      { type: 'choice', q: 'The triangular numbers are 1, 3, 6, 10, 15... — each drawn as a growing triangle of dots. What comes next after 15?', options: ['18', '20', '21', '25'], answer: 2, explain: '21. You add the next whole number each time (1, then +2, +3, +4, +5, +6). So 15 + 6 = 21. These \'figurate\' numbers show how counting and shape were one study for the Greeks.' },
      { type: 'choice', q: 'The Pythagoreans split all whole numbers into two great families. Which?', options: ['Even and odd', 'Big and small', 'Prime and perfect', 'Real and imaginary'], answer: 0, explain: 'Even and odd — numbers that divide cleanly into two, and those that leave one over. This was the first and most basic division of number, and they gave it almost moral weight.' },
      { type: 'reveal', q: 'Your turn. Take the number 28 and find all its proper divisors — every whole number that divides into it evenly, not counting 28 itself. Add them up. What do you notice?', reveal: 'The proper divisors of 28 are 1, 2, 4, 7 and 14. Add them: 1 + 2 + 4 + 7 + 14 = 28. So 28, like 6, is a perfect number — it equals the sum of its own parts. Only four such numbers were known in the ancient world: 6, 28, 496 and 8128.' },
      { type: 'memorise', text: 'All is number.', source: 'Pythagoras — the founding creed of the Quadrivium' }
    ]
  },

  geometry: {
    title: 'Try it',
    intro: 'If arithmetic is number in itself, geometry is number given shape — number in space. These are the first truths Euclid built his whole Elements upon, provable by reason alone.',
    exercises: [
      { type: 'choice', q: 'The three angles inside any flat triangle always add up to how many degrees?', options: ['90', '180', '270', '360'], answer: 1, explain: '180 degrees, always — whether the triangle is tall, squat or lopsided. This is one of the first great surprises of geometry: a fixed truth that holds for every triangle that can ever be drawn.' },
      { type: 'choice', q: 'A right triangle has short sides of 3 and 4. By the Pythagorean theorem, how long is the longest side (the hypotenuse)?', options: ['5', '6', '7', '12'], answer: 0, explain: '5. The theorem says a² + b² = c². So 3² + 4² = 9 + 16 = 25, and the square root of 25 is 5. The 3-4-5 triangle was known to builders and rope-stretchers long before Pythagoras proved why it works.' },
      { type: 'choice', q: 'Which ancient book laid out geometry as a chain of proofs and was a standard textbook for over 2000 years?', options: ['Euclid\'s Elements', 'Plato\'s Republic', 'Aristotle\'s Physics', 'Ptolemy\'s Almagest'], answer: 0, explain: 'Euclid\'s Elements. Starting from a few plain definitions and axioms, it proves theorem after theorem — the model of how one truth can be built rigorously upon another.' },
      { type: 'choice', q: 'How many Platonic solids — perfectly regular 3D shapes, every face and angle identical — are there?', options: ['Three', 'Five', 'Seven', 'Infinitely many'], answer: 1, explain: 'Exactly five, and no more: the tetrahedron, cube, octahedron, dodecahedron and icosahedron. That the list stops at five is not a limit of our imagination but a truth geometry can prove.' },
      { type: 'reveal', q: 'Your turn. A right triangle has two short sides of 6 and 8. Use the Pythagorean theorem to work out the hypotenuse. (Square each side, add them, then take the square root.)', reveal: '6² + 8² = 36 + 64 = 100, and the square root of 100 is 10. So the hypotenuse is 10. The 6-8-10 triangle is just the 3-4-5 triangle doubled — proof that these whole-number right triangles come in whole families.' },
      { type: 'memorise', text: 'Let no one ignorant of geometry enter here.', source: 'The words said to be carved over the door of Plato\'s Academy' }
    ]
  },

  music: {
    title: 'Try it',
    intro: 'To the Pythagoreans, music was number in time — sound governed by ratio. They found that the sweetest harmonies hide the simplest whole-number relationships. Learn the ratios that rule the ear.',
    exercises: [
      { type: 'choice', q: 'When you halve a string’s length, it sounds the same note an octave higher. What simple ratio is the octave?', options: ['2:1', '3:2', '5:4', '9:8'], answer: 0, explain: '2:1 — the most basic harmony of all. Pythagoras is said to have discovered that a string exactly half as long gives the same note, an octave up. The simplest ratio yields the purest blend.' },
      { type: 'choice', q: 'The perfect fifth — the bright, open interval of a bugle call — corresponds to which ratio?', options: ['4:3', '3:2', '2:1', '16:9'], answer: 1, explain: '3:2. Pluck a string, then two-thirds of it, and the two notes ring together beautifully. This 3:2 relationship is the perfect fifth, second only to the octave in its consonance.' },
      { type: 'choice', q: 'The perfect fourth is carried by which whole-number ratio?', options: ['4:3', '5:3', '2:1', '7:5'], answer: 0, explain: '4:3. Together the octave (2:1), the fifth (3:2) and the fourth (4:3) use only the numbers 1, 2, 3 and 4 — the sacred \'tetractys\' the Pythagoreans revered. The whole harmony of music grew from these first four numbers.' },
      { type: 'choice', q: 'Why, for Pythagoras, do some pairs of notes sound sweet (consonant) and others harsh?', options: ['The sweet ones have simple whole-number ratios', 'The sweet ones are always louder', 'It is purely a matter of taste', 'The harsh ones use higher notes'], answer: 0, explain: 'Simple whole-number ratios (2:1, 3:2, 4:3) sound consonant; jagged, complicated ratios grate. This was a stunning idea — that beauty for the ear is really hidden arithmetic, and that number rules even our delight.' },
      { type: 'reveal', q: 'Your turn — no instrument needed. If a string 60 cm long plays a note, work out the length that would sound a perfect fifth above it, using the ratio 3:2.', reveal: 'A 3:2 ratio means the higher note comes from two-thirds of the length. Two-thirds of 60 is 40. So a 40 cm string sounds a perfect fifth above the 60 cm one — the same law that tunes every violin and guitar today.' },
      { type: 'memorise', text: 'There is geometry in the humming of the strings, there is music in the spacing of the spheres.', source: 'Pythagoras' }
    ]
  },

  astronomy: {
    title: 'Try it',
    intro: 'Astronomy completes the Quadrivium as number in motion — the heavens read as an ordered, measurable dance. Meet the sky as the ancients saw it, and the great turn that remade it.',
    exercises: [
      { type: 'choice', q: 'Our word \'planet\' comes from the Greek planetes. What does it mean?', options: ['Wanderer', 'Star', 'Fire', 'Circle'], answer: 0, explain: 'Wanderer. Against the \'fixed\' stars that hold their patterns night after night, a handful of bright lights drift and loop across the sky. The Greeks named these wanderers — the planets.' },
      { type: 'choice', q: 'In the classical model, worked out fully by Ptolemy, what stood at the centre of the cosmos?', options: ['The Earth', 'The Sun', 'The Moon', 'The fixed stars'], answer: 0, explain: 'The Earth. This is the geocentric (Earth-centred) model. For roughly 1400 years, Ptolemy\'s system explained the wandering planets with circles turning upon circles, and it fitted what the eye could see remarkably well.' },
      { type: 'choice', q: 'Who overturned the Earth-centred cosmos by placing the Sun at the centre instead?', options: ['Copernicus', 'Aristotle', 'Ptolemy', 'Euclid'], answer: 0, explain: 'Copernicus, in 1543, argued for a heliocentric (Sun-centred) cosmos, with the Earth just one of the planets circling the Sun. It was one of the great turning points in the history of thought.' },
      { type: 'choice', q: 'The Pythagoreans imagined the moving heavens produced a harmony we cannot hear. What was this idea called?', options: ['The music of the spheres', 'The wandering song', 'The celestial clock', 'The golden ratio'], answer: 0, explain: 'The music of the spheres. Believing the planets moved by the same whole-number ratios that make music, they held that the turning heavens sounded a perfect, silent harmony — number, motion and music as one.' },
      { type: 'reveal', q: 'Your turn — a night’s work the ancients could do with only their eyes. On a clear night, note where a bright planet like Jupiter sits against the background stars. Look again a week or two later. What has changed, and why does that make it a \'wanderer\'?', reveal: 'The stars around it will have kept their exact pattern, but the planet will have visibly shifted its place among them — that drift is precisely why the Greeks called it a wanderer. With nothing but patient eyes and careful notes, this is the very observation from which all of classical astronomy was built.' },
      { type: 'memorise', text: 'Two things fill the mind with ever new and increasing wonder — the starry heavens above me and the moral law within me.', source: 'Immanuel Kant' }
    ]
  }
};
