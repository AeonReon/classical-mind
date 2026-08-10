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
    ]
  }
};
