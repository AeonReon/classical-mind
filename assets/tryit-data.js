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
  }
};
