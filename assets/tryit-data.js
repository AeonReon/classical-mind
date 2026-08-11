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
  }
};
