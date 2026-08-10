// fallacies-data.js — the "Spot the Fallacy" trainer set. Each fallacy has a
// plain definition, why it misleads, and everyday examples used to build the
// endless practice quiz. Learn them once, drill them forever.
window.FALLACIES = [
  {
    id: 'ad-hominem',
    name: 'Ad Hominem',
    aka: 'attacking the person',
    definition: 'Attacking the person making the argument instead of the argument itself.',
    why: 'It dodges the actual point by trying to discredit the speaker, but who says something has no bearing on whether it is true.',
    examples: [
      'You can\'t trust her advice on saving money, she wears cheap clothes.',
      'Why would I listen to his diet tips? He\'s not even a doctor and he\'s kind of annoying.'
    ]
  },
  {
    id: 'tu-quoque',
    name: 'Tu Quoque',
    aka: 'appeal to hypocrisy, \'you too\'',
    definition: 'Rejecting someone\'s point by claiming they are a hypocrite who does the same thing.',
    why: 'Someone doing the opposite of what they preach doesn\'t make their advice wrong, it just makes them inconsistent.',
    examples: [
      'You told me to quit smoking, but you smoke too, so I\'ll keep smoking.',
      'My dad says I should exercise, but he sits on the couch all day, so his advice is rubbish.'
    ]
  },
  {
    id: 'straw-man',
    name: 'Straw Man',
    aka: 'attacking a fake version',
    definition: 'Twisting someone\'s argument into a weaker, sillier version and attacking that instead.',
    why: 'It wins against an argument nobody actually made, leaving the real point untouched.',
    examples: [
      'You want a bedtime for the kids? So you basically want to control every second of their lives.',
      'She said we should eat less sugar, so now she wants to ban all desserts forever.'
    ]
  },
  {
    id: 'slippery-slope',
    name: 'Slippery Slope',
    aka: 'the domino effect',
    definition: 'Claiming one small step will unavoidably lead to a chain of disasters.',
    why: 'It assumes the worst-case ending is certain without showing that each step actually forces the next.',
    examples: [
      'If we let you stay up an hour later, soon you\'ll never sleep and you\'ll fail school.',
      'If I skip the gym today, I\'ll skip tomorrow, and before you know it I\'ll be totally unfit.'
    ]
  },
  {
    id: 'bandwagon',
    name: 'Appeal to Popularity',
    aka: 'bandwagon, everyone\'s doing it',
    definition: 'Arguing something is true or right just because lots of people believe or do it.',
    why: 'Popularity is not proof, a crowd can be wrong just as easily as one person.',
    examples: [
      'Everyone at school has this phone, so it must be the best one.',
      'Millions of people follow this diet, so it obviously works.'
    ]
  },
  {
    id: 'appeal-to-authority',
    name: 'Appeal to Authority',
    aka: 'a famous person said so',
    definition: 'Claiming something is true only because an authority or celebrity said it.',
    why: 'Even experts can be wrong or biased, and a famous name is not evidence, especially outside their field.',
    examples: [
      'This face cream must work, a movie star said it changed her skin.',
      'A billionaire tweeted that this stock will boom, so I\'m putting my savings in.'
    ]
  },
  {
    id: 'false-dilemma',
    name: 'False Dilemma',
    aka: 'false dichotomy, only two choices',
    definition: 'Pretending there are only two options when there are actually more.',
    why: 'It hides the middle ground and other choices to force you into a corner.',
    examples: [
      'Either we cancel the holiday or we go broke, there\'s no other way.',
      'You\'re either with me on this or you\'re against me.'
    ]
  },
  {
    id: 'circular-reasoning',
    name: 'Circular Reasoning',
    aka: 'begging the question',
    definition: 'Using your conclusion as the reason to believe your conclusion.',
    why: 'It goes in a loop and never gives any real evidence, it just restates the claim.',
    examples: [
      'This app is the best because no other app is as good as it.',
      'He\'s trustworthy because he told me he never lies.'
    ]
  },
  {
    id: 'false-cause',
    name: 'False Cause',
    aka: 'post hoc, correlation isn\'t causation',
    definition: 'Assuming that because one thing happened after another, the first caused the second.',
    why: 'Two things happening close together doesn\'t mean one caused the other, it could be luck or coincidence.',
    examples: [
      'I wore my lucky socks and we won the match, so the socks won it for us.',
      'I started taking this vitamin and my cold went away, so the vitamin cured me.'
    ]
  },
  {
    id: 'hasty-generalization',
    name: 'Hasty Generalization',
    aka: 'jumping to conclusions',
    definition: 'Drawing a big conclusion from just one or two examples.',
    why: 'A tiny sample can\'t fairly stand in for everyone or everything, the exceptions get ignored.',
    examples: [
      'I met two rude people from that city, so everyone there must be rude.',
      'This one restaurant was slow, so all restaurants in that chain are terrible.'
    ]
  },
  {
    id: 'red-herring',
    name: 'Red Herring',
    aka: 'changing the subject',
    definition: 'Throwing in an unrelated point to distract from the real issue.',
    why: 'It drags attention away from the actual question so it never gets answered.',
    examples: [
      'You\'re asking why I was late? Well, traffic in this city has been a nightmare for years.',
      'Why worry about my messy room when there are much bigger problems in the world?'
    ]
  },
  {
    id: 'appeal-to-emotion',
    name: 'Appeal to Emotion',
    aka: 'tugging the heartstrings',
    definition: 'Trying to win by stirring up feelings instead of giving real reasons.',
    why: 'Feeling sad, scared, or guilty doesn\'t make a claim true, it just clouds clear thinking.',
    examples: [
      'You have to buy this, imagine how heartbroken your kids will be if you don\'t.',
      'How can you say no to me after everything I\'ve done for you?'
    ]
  },
  {
    id: 'appeal-to-ignorance',
    name: 'Appeal to Ignorance',
    aka: 'no proof it\'s false, so it\'s true',
    definition: 'Claiming something is true just because it hasn\'t been proven false (or vice versa).',
    why: 'Not having evidence against something is not the same as having evidence for it.',
    examples: [
      'No one has proven ghosts aren\'t real, so they must exist.',
      'You can\'t prove this supplement doesn\'t work, so it clearly does.'
    ]
  },
  {
    id: 'equivocation',
    name: 'Equivocation',
    aka: 'word-switching',
    definition: 'Using the same word in two different meanings to trick you.',
    why: 'It sneaks a switch in meaning halfway through, so the argument only looks like it fits together.',
    examples: [
      'A feather is light, and light can\'t be dark, so a feather can\'t be dark.',
      'The sign said \'fine for parking here\', so I thought it was okay, but they gave me a fine.'
    ]
  },
  {
    id: 'no-true-scotsman',
    name: 'No True Scotsman',
    aka: 'redefining to dodge',
    definition: 'Dodging a counterexample by redefining the group so the exception no longer counts.',
    why: 'It protects a claim by changing the rules on the spot instead of admitting it was wrong.',
    examples: [
      'No real fan would ever miss a game. My brother\'s a fan and he missed one. Then he\'s not a real fan.',
      'No true vegan would ever eat honey, so anyone who does was never really vegan.'
    ]
  },
  {
    id: 'appeal-to-nature',
    name: 'Appeal to Nature',
    aka: 'natural means good',
    definition: 'Assuming something is good or safe just because it is natural.',
    why: 'Natural doesn\'t automatically mean healthy or safe, plenty of natural things are harmful.',
    examples: [
      'This remedy is all natural, so it can\'t possibly hurt you.',
      'Sugar is natural, so eating loads of it must be fine.'
    ]
  },
  {
    id: 'loaded-question',
    name: 'Loaded Question',
    aka: 'the trap question',
    definition: 'Asking a question that sneaks in an assumption you never agreed to.',
    why: 'Any answer traps you into accepting the hidden assumption baked into the question.',
    examples: [
      'So, have you stopped skipping your workouts yet?',
      'Why do you always spend so recklessly?'
    ]
  },
  {
    id: 'sunk-cost',
    name: 'Sunk Cost Fallacy',
    aka: 'throwing good after bad',
    definition: 'Sticking with something only because you already put time or money into it.',
    why: 'What you\'ve already spent is gone either way, it shouldn\'t decide whether continuing is worth it now.',
    examples: [
      'This movie is boring, but we\'re an hour in, so we have to finish it.',
      'I\'ve paid for six months of this gym, so I can\'t quit even though I hate it.'
    ]
  },
  {
    id: 'appeal-to-tradition',
    name: 'Appeal to Tradition',
    aka: 'we\'ve always done it this way',
    definition: 'Arguing something is right or best just because it\'s always been done that way.',
    why: 'Being old or familiar doesn\'t make something correct, traditions can be outdated or mistaken.',
    examples: [
      'We\'ve always cooked it this way in our family, so it must be the right way.',
      'The team has never used a new formation, so we shouldn\'t start now.'
    ]
  },
  {
    id: 'genetic-fallacy',
    name: 'Genetic Fallacy',
    aka: 'judging by where it came from',
    definition: 'Accepting or rejecting a claim based only on where it came from, not what it says.',
    why: 'The source of an idea doesn\'t decide whether the idea is true, a good point can come from anywhere.',
    examples: [
      'That health tip came from a random blog, so it must be nonsense.',
      'I only buy this brand of tools because my grandad swore by them.'
    ]
  },
  {
    id: 'moving-the-goalposts',
    name: 'Moving the Goalposts',
    aka: 'changing what counts as proof',
    definition: 'Demanding more and more evidence every time your last demand is met.',
    why: 'It makes it impossible to ever satisfy the argument, because the finish line keeps sliding away.',
    examples: [
      'Okay you passed the test, but now show me you can do it under pressure, and blindfolded.',
      'Fine, you cleaned your room, but the whole house isn\'t spotless, so you didn\'t really tidy up.'
    ]
  }
];
