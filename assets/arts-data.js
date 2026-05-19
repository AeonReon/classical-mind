// PAIDEIA — the classical liberal arts.
// 10 tiles: Foundation (Start Here), 7 liberal arts (Trivium + Quadrivium), Great Books, Languages.
// Each entry: id, name, short, tagline, group, color triplet, icon, blurb, and 5 sections.
// Sections: what-it-is, the-path, practice, reading, masters.

window.ARTS = [
  {
    id: 'foundation',
    name: 'Foundation',
    short: 'Start here',
    tagline: 'What classical learning is, and how to begin',
    group: 'Begin',
    color: '#d97706',
    colorDeep: '#92400e',
    colorSoft: '#fef3c7',
    icon: 'sun',
    blurb: 'Before any one of the arts, an orientation. What the classical tradition holds about education, why it survived for two thousand years, how the seven liberal arts fit together, and what shape your own learning might take. Built for the adult who wants to recover a kind of formation modern schooling did not give them.',
    sections: {
      'what-it-is': {
        title: 'What classical learning is',
        intro: 'Classical learning is the deliberate formation of a free person — paideia, in Greek; humanitas, in Latin. Not training for a job. Not the accumulation of facts. The making of a human being capable of truth, goodness, beauty, and self-government.',
        principles: [
          { name: 'Paideia: the forming of a whole person', body: 'The Greek word paideia covers what we would now call education, culture, upbringing, and formation — all together. The classical tradition does not separate them. You are not training a worker; you are forming a person.', why: 'A person who has been formed in this larger sense can do almost any work and live almost any life with depth. One trained narrowly in a skill is competent in that skill and shallow elsewhere. The classical bet is that the formed person beats the trained person across a lifetime.' },
          { name: 'The seven liberal arts', body: 'The Trivium — Grammar, Logic, Rhetoric — covers the arts of language and reasoning. The Quadrivium — Arithmetic, Geometry, Music, Astronomy — covers the arts of number, magnitude, and proportion. Together they were called the liberal arts because they were the studies of a free person (liber).', why: 'These seven were chosen because they cover the basic ways human thought engages reality: through words and through numbers. Master both and you have the tools to study anything serious. Skip them and you remain dependent on others to do your serious thinking for you.' },
          { name: 'Truth, goodness, beauty are real', body: 'The classical tradition does not hold these to be matters of taste. The truth is what corresponds to reality. The good is what perfects human nature. The beautiful is what gives proper delight to a well-formed mind. The aim of education is to attune the person to each.', why: 'A culture that calls these "subjective" produces people who cannot judge. Classical education produces people who can — not by indoctrination, but by long practice with the best.' },
          { name: 'Memory as the soul\'s storehouse', body: 'Before printing, before notes, before search — the classical mind kept its riches inside itself. Verses, formulas, definitions, lists, arguments. The well was filled in youth. The bucket was drawn down for life.', why: 'A mind without memorised material is a mind that depends on devices for its thinking. A mind with a stocked memory thinks faster, deeper, and more freely. Begin building yours at any age.' },
          { name: 'The Great Books as conversation', body: 'The classical tradition treats the canon — Homer, Plato, Aristotle, Augustine, Aquinas, Dante, Shakespeare, Newton, Kant, Tolstoy — as one long conversation that you, the learner, are invited to join. Not idolised. Not dismissed. Read, argued with, learned from.', why: 'Without this conversation you are a creature of your moment, with only contemporary opinion to consult. With it you have two thousand years of the best thought on every important human question.' }
        ]
      },
      'the-path': {
        title: 'The path through the arts',
        intro: 'There is no single right order, but there is a traditional one. Most classical educators would suggest something like this. Take what you need; the journey is yours.',
        levels: [
          { stage: 'Beginner (Year 1)', items: [
            'Read the Foundation thoroughly and pick two arts that draw you',
            'Begin daily memory work — one short poem or verse a fortnight',
            'Start the Languages: 30 minutes of Latin (or Greek) most days',
            'Read 3–5 Great Books "first reads" (Aesop, Plutarch\'s Lives, Plato\'s Apology, Aurelius Meditations)'
          ]},
          { stage: 'Intermediate (Years 2–4)', items: [
            'Begin a slow trip through the Trivium: a year on each of Grammar, Logic, Rhetoric',
            'Add the Quadrivium: a year on Arithmetic + Geometry side by side',
            'Latin reaches the level of reading simple Caesar / Cicero',
            'A Great Book read in full each season (Iliad, Republic, Confessions, Divine Comedy, Hamlet)'
          ]},
          { stage: 'Advanced (Years 5+)', items: [
            'Music and Astronomy in the classical sense — harmony, ratio, the heavens',
            'Greek reaches the level of reading the Gospel of John or selected Plato',
            'A theme-based deep dive (e.g. ethics across the tradition; or political philosophy; or aesthetics)',
            'Begin writing your own — essays, dialogues, perhaps poetry in the classical forms'
          ]},
          { stage: 'Lifelong', items: [
            'Re-read the great books with new questions',
            'Teach what you have learned — to your children, to a small circle, to anyone',
            'Add a third language (Hebrew? French? Italian? Sanskrit?)',
            'Contribute — translate, write, build, lead — from the formed mind'
          ]}
        ]
      },
      'practice': {
        title: 'How to begin tomorrow morning',
        intro: 'Ten habits that, established, carry the whole project. Start with one or two. Add as you can.',
        items: [
          { name: 'Read aloud for 20 minutes daily', body: 'A passage from a Great Book, slowly, aloud. Even alone. The ear catches what the silent eye misses; the mouth shapes what the mind absorbs.' },
          { name: 'Memorise something weekly', body: 'A short poem, a passage of prose, a definition, a Latin maxim. Recite it daily for the week. Add to the stock.' },
          { name: 'Keep a commonplace book', body: 'A notebook in which you copy out — by hand — passages that strike you. Date them. Re-read your own commonplace book monthly. This is the classical method of building a mind.' },
          { name: 'Latin or Greek, 30 minutes most days', body: 'A grammar exercise, a vocabulary list, a translation passage. Daily and small beats sporadic and big.' },
          { name: 'One Great Book always in progress', body: 'A real one, not an abridgement. Read 15–30 minutes a day. Do not skip the hard parts.' },
          { name: 'A weekly written reflection', body: '300–600 words on what you read this week. Argue with the author. Connect it to something else. The act of writing fixes the thinking.' },
          { name: 'A walk while thinking', body: 'A long walk once a week with no podcast, no music. Think one question through. The Greeks called this peripatetic philosophy.' },
          { name: 'Conversation with a serious other', body: 'Once a week or once a month, discuss what you are learning with someone equally serious. Iron sharpens iron.' },
          { name: 'A small daily prayer or contemplation', body: 'From the tradition you find resonant — the Lord\'s Prayer, the Aurelius Meditations, a Stoic premeditatio, a Confucian Analect. The mind is shaped by what it attends to.' },
          { name: 'Look at one beautiful thing each day', body: 'A painting, a sculpture, a great building, a tree, a night sky. Attend for two minutes. Beauty is part of the formation.' }
        ]
      },
      'reading': {
        title: 'Reading to begin',
        intro: 'A short shelf of modern interpreters who will set you up for the rest of the path.',
        books: [
          { title: 'Norms and Nobility', author: 'David Hicks', note: 'The deepest modern defence of classical education as the formation of nobility of soul. Begin here even if you only ever read this one book.' },
          { title: 'Beauty for Truth\'s Sake', author: 'Stratford Caldecott', note: 'The classical liberal arts rehabilitated for a modern reader. Short, profound, worth re-reading.' },
          { title: 'Climbing Parnassus', author: 'Tracy Lee Simmons', note: 'Why Latin and Greek matter; how to begin.' },
          { title: 'The Liberal Arts Tradition', author: 'Kevin Clark & Ravi Scott Jain', note: 'A clear restatement of the seven liberal arts for the modern person.' },
          { title: 'How to Read a Book', author: 'Mortimer Adler & Charles Van Doren', note: 'The classical art of reading, made explicit. Read this before tackling the Great Books.' },
          { title: 'The Closing of the American Mind', author: 'Allan Bloom', note: 'Why the modern university lost the inheritance. Long; illuminating.' },
          { title: 'Tending the Heart of Virtue', author: 'Vigen Guroian', note: 'On story as moral imagination — applies to your own re-reading of the great works.' }
        ]
      },
      'masters': {
        title: 'Jefferson\'s curriculum, as a model',
        intro: 'Thomas Jefferson, designing his own education and later that of his nephew Peter Carr, left letters describing what a thoroughly classical learner should read and at what stage. Not a prescription — a worked example of one man\'s vision.',
        figures: [
          { name: 'Age 14–16: the foundation', what: 'Latin, Greek, French, then a course of mathematics: arithmetic, algebra, plane geometry, solid geometry, trigonometry. Natural history (botany, zoology, geology). Ancient history through Greek and Roman sources.' },
          { name: 'Age 16–18: the broadening', what: 'Continue the languages. Mechanics, optics, astronomy, the physics of the day. Religion read from primary sources (the Bible, the Vedas, the Quran). Ethics from Cicero and the Stoics. Logic. Rhetoric. Belles-lettres.' },
          { name: 'Age 18–21: the deepening', what: 'Civil history (English and American). The law (for the citizen, not only the lawyer). Politics from the Greeks, Romans, and English. Continued reading of the Greek and Latin authors. Composition in writing. Eloquence in speech.' },
          { name: 'Vitruvius on what a person should know', what: 'The Roman architect Vitruvius wrote that an educated person needs literature, drawing, geometry, history, philosophy, music, medicine, law, and astronomy — because architecture (his trade) touches all of them. The principle: any serious work today still requires breadth.' },
          { name: 'The pattern, generalised', what: 'Languages young. Mathematics steadily. History and the great books deepening through the years. Real practice — writing, speaking, doing — at every stage. A lifetime project, not a stage to be passed through.' }
        ]
      }
    }
  },
  {
    id: 'grammar',
    name: 'Grammar',
    short: 'Grammar',
    tagline: 'The art of words rightly used',
    group: 'Trivium',
    color: '#65a30d',
    colorDeep: '#3f6212',
    colorSoft: '#ecfccb',
    icon: 'leaf',
    blurb: 'In the classical tradition, Grammar is far more than rules of punctuation. It is the art of reading carefully, writing precisely, and knowing the structure of the languages in which thought is carried. The grammarian becomes capable of taking in any well-written text, in any classical tongue, and giving back its meaning rightly.',
    sections: {
      'what-it-is': {
        title: 'What Grammar is',
        intro: 'Grammar is the first of the trivium because every later art rests on it. Logic cannot reason about propositions if it cannot parse them. Rhetoric cannot persuade if it cannot construct a sentence. Grammar is the gate.',
        principles: [
          { name: 'Words are the ground of all higher thought', body: 'You cannot think clearly with imprecise words. The grammarian works to know exactly what each word means, how words relate, what one word changes when placed differently.', why: 'A mind whose vocabulary is small is a mind whose thoughts are coarse. The discipline of attending to words makes the mind capable of finer distinctions.' },
          { name: 'The structure of a language reveals its mind', body: 'Latin\'s case endings show that Latin thinks about relations differently than English does. Greek\'s middle voice shows there are actions neither active nor passive. To learn a language\'s grammar is to enter another way of thinking.', why: 'A person who has only ever thought in one language thinks in only one shape. The classical bet is that two or three languages give the mind room.' },
          { name: 'Reading is the centre of the practice', body: 'Classical Grammar is taught and practised on real texts — Caesar, Cicero, Virgil, Homer, the Gospels — not on textbooks. The grammarian is a slow careful reader who can take any text apart and put it back together.', why: 'Reading a real text under the eye of grammar is more instructive than any drill. You meet the language as its best users used it.' },
          { name: 'Copywork: the oldest practice', body: 'Before all else, the classical Grammar student copies out by hand — slowly, carefully — passages from the masters. The hand absorbs the sentence shapes the mind will later use.', why: 'Writing by hand engages the brain differently than typing. The shape of a Ciceronian sentence enters you through the fingers and stays.' },
          { name: 'The four levels: letter, syllable, word, sentence', body: 'Classical Grammar attends to all four. The letter (writing well-formed letters). The syllable (pronunciation and meter). The word (vocabulary and etymology). The sentence (structure and meaning). Each level builds on the last.', why: 'A mind that has worked through all four levels reads and writes with precision the device-fed mind cannot match.' }
        ]
      },
      'the-path': {
        title: 'The path',
        intro: 'A traditional route from beginner to advanced. Each stage takes time; that is the point.',
        levels: [
          { stage: 'Beginner', items: [
            'Read Strunk & White\'s Elements of Style, twice',
            'Begin Latin (Wheelock or Lingva Latina) or Greek (Athenaze) — see the Languages tile',
            'Daily copywork: 10 minutes of a chosen author, by hand',
            'Memorise one short poem each fortnight',
            'Build a personal commonplace book of passages that strike you'
          ]},
          { stage: 'Intermediate', items: [
            'Diagram one sentence per day from a real author',
            'Translate Latin or Greek passages of progressively greater difficulty',
            'Read Hugh Blair or George Saintsbury on English prose style',
            'Memorise longer passages — a Shakespeare speech, a Lincoln address, a Psalm',
            'Begin writing imitations of classical sentence shapes'
          ]},
          { stage: 'Advanced', items: [
            'Read Caesar, Cicero, Virgil in Latin without a crib',
            'Read Plato, Xenophon, the Gospel of John in Greek',
            'Study comparative grammar (English/Latin/Greek; or add a Semitic language)',
            'Compose original passages in classical forms (epistle, oration, eulogy)',
            'Teach Grammar to a beginner — the truest test of having understood it'
          ]}
        ]
      },
      'practice': {
        title: 'Practice',
        intro: 'Concrete exercises. Choose two or three; do them every day for a season.',
        items: [
          { name: 'Daily copywork', body: 'Open Cicero, Lincoln, or the King James Bible. Copy two paragraphs by hand. Take 10–15 minutes. Pay attention to punctuation, word choice, rhythm.' },
          { name: 'A sentence a day, diagrammed', body: 'Take one sentence from your current reading. Diagram it (subject, predicate, modifiers, clauses). The visual structure reveals the logical structure.' },
          { name: 'Translate one passage daily', body: 'A sentence or two of Latin or Greek into English; or English into Latin. Even five minutes counts.' },
          { name: 'Read aloud, slowly, every morning', body: 'A page from a great prose stylist. Aloud. Listen for cadence, balance, parallelism.' },
          { name: 'A weekly vocabulary list', body: 'Five new English words from your reading, with etymology. Look up the Latin or Greek root.' },
          { name: 'Build a commonplace book', body: 'A notebook in which you copy striking passages. Date each entry. Re-read your own commonplace book monthly.' },
          { name: 'Diagram a paragraph from a master', body: 'Take a paragraph from Cicero, Burke, or Lincoln. Map its argument: claim, evidence, transition, conclusion.' },
          { name: 'Memorise the parts of speech in two languages', body: 'The eight parts of speech in English. The parts of Latin grammar. Recite them as a list.' },
          { name: 'Write a paragraph in three styles', body: 'The same content as Hemingway (short, declarative). As Cicero (long, balanced periods). As Henry James (suspended, qualified). You discover what each style does.' },
          { name: 'Read a difficult text and paraphrase it', body: 'A page of Aristotle or Aquinas. Write a paraphrase in your own clear English. You discover whether you understood it.' }
        ]
      },
      'reading': {
        title: 'Reading',
        intro: 'Modern guides and classical sources together.',
        books: [
          { title: 'The Elements of Style', author: 'William Strunk & E.B. White', note: 'The English Grammar primer. Short, clear, irreplaceable.' },
          { title: 'On Writing Well', author: 'William Zinsser', note: 'Modern, warm, practical. After Strunk.' },
          { title: 'Sister Miriam Joseph: The Trivium', author: 'Sister Miriam Joseph', note: 'The classical liberal arts of logic, grammar, and rhetoric, in one accessible volume.' },
          { title: 'Classical English Rhetoric', author: 'Ward Farnsworth', note: 'A modern catalogue of the rhetorical figures with examples from English. Use as a reference.' },
          { title: 'Allen & Greenough\'s New Latin Grammar', author: 'Allen & Greenough', note: 'The standard reference Latin grammar. Free online; keep at your elbow.' },
          { title: 'Smyth\'s Greek Grammar', author: 'Herbert Weir Smyth', note: 'The standard Greek reference. Free online; same role as Allen & Greenough for Latin.' },
          { title: 'Reading Latin / Reading Greek', author: 'Cambridge editions', note: 'A graded approach that gets you reading real authors quickly.' },
          { title: 'The King\'s English', author: 'H.W. Fowler & F.G. Fowler', note: 'A short, opinionated book on English usage. Classical in its standards.' }
        ]
      },
      'masters': {
        title: 'The masters of Grammar',
        intro: 'A short hall of fame.',
        figures: [
          { name: 'Donatus (4th c.)', what: 'The Roman grammarian whose Ars Grammatica was the standard textbook for a thousand years. The verb "doner" (one who has been taught) comes from his name.' },
          { name: 'Priscian (5th–6th c.)', what: 'Author of Institutiones Grammaticae, the most comprehensive Latin grammar of antiquity. Read in every medieval cathedral school.' },
          { name: 'Erasmus (1466–1536)', what: 'The Renaissance scholar who restored classical Latin to fluent use. His De Copia is a treatise on richness of style. His Adagia is a collection of classical proverbs that was the schoolbook of Europe.' },
          { name: 'Quintilian (35–100 AD)', what: 'Roman teacher of rhetoric. His Institutio Oratoria includes a sustained treatment of how a child should learn Latin and Greek. Still read by classical educators today.' },
          { name: 'Sister Miriam Joseph (1898–1982)', what: 'American teacher whose The Trivium re-introduced the classical liberal arts of language to twentieth-century students.' },
          { name: 'William Strunk Jr. (1869–1946)', what: 'Cornell professor whose little book of English prose rules became, via his student E.B. White, the most influential English grammar of the modern era.' }
        ]
      }
    }
  },
  {
    id: 'logic',
    name: 'Logic',
    short: 'Logic',
    tagline: 'The art of reasoning rightly',
    group: 'Trivium',
    color: '#475569',
    colorDeep: '#334155',
    colorSoft: '#e2e8f0',
    icon: 'scales',
    blurb: 'Logic is the art of drawing true conclusions from true premises, and the art of detecting where this is not being done. The classical curriculum places it second in the Trivium — after Grammar, because logic operates on propositions; before Rhetoric, because persuasion without logic is manipulation.',
    sections: {
      'what-it-is': {
        title: 'What Logic is',
        intro: 'Logic is the formal study of valid inference. Aristotle invented the field around 350 BC in a set of works collectively called the Organon ("instrument"), and the field has been deepened ever since by Stoics, medieval scholastics, and modern symbolic logicians.',
        principles: [
          { name: 'Validity is about form, not content', body: 'An argument is valid if its conclusion follows necessarily from its premises, regardless of whether the premises are true. "All men are pigs; Socrates is a man; therefore Socrates is a pig" is valid (and unsound). "All Greeks are bipeds; Socrates is a Greek; therefore Socrates is mortal" is invalid (and reaches a true conclusion).', why: 'Confusing validity with truth is the most common adult thinking error. Logic teaches you to separate them.' },
          { name: 'The syllogism is the heart of classical Logic', body: 'A syllogism has two premises and a conclusion drawn from them. "All men are mortal. Socrates is a man. Therefore Socrates is mortal." Aristotle catalogued every valid syllogistic form. Aquinas and the medievals refined the catalogue.', why: 'Most actual reasoning, when laid bare, comes down to a chain of syllogisms. Learning to see them lets you see what is really being claimed and what would have to be true for the claim to hold.' },
          { name: 'Fallacies are not rare; they are everywhere', body: 'Ad hominem, straw man, equivocation, false dilemma, begging the question, post hoc — these are the daily currency of bad reasoning. The logician learns the catalogue and can name what is going wrong when an argument feels off.', why: 'Naming a fallacy gives you a tool for dismantling it. Sensing something wrong without being able to name it leaves you persuaded against your better judgment.' },
          { name: 'Dialectic: the search for truth by question', body: 'The Socratic method. Two people, committed to finding the truth, alternating question and answer until the matter is clearer than it was. Dialectic is logic applied to conversation.', why: 'Most truths worth knowing are not discovered alone. The classical tradition treats dialectic as the highest application of logic.' },
          { name: 'Modern logic extends, does not replace, the classical', body: 'Propositional logic (truth tables, conditionals) and predicate logic (quantifiers, variables) developed mostly in the 19th and 20th centuries. They handle cases Aristotle could not. They do not invalidate his work; they extend it.', why: 'A complete logical education includes both the classical syllogism and the modern symbolic logic. They serve different purposes.' }
        ]
      },
      'the-path': {
        title: 'The path',
        intro: 'A traditional route through Logic from beginner to advanced.',
        levels: [
          { stage: 'Beginner', items: [
            'Learn the ~20 most common informal fallacies and recognise them in the wild',
            'Read Peter Kreeft\'s Socratic Logic, slowly',
            'Practise basic syllogisms — Barbara, Celarent, Darii, Ferio (the four perfect forms)',
            'Listen to or read good debates with an ear for what is actually being claimed'
          ]},
          { stage: 'Intermediate', items: [
            'Work through all the valid syllogistic moods (19 of them) and their figures',
            'Begin propositional logic: truth tables, conditionals, the structure of valid argument',
            'Read Aristotle\'s Categories and On Interpretation',
            'Practise constructing and analysing extended arguments — not just isolated syllogisms'
          ]},
          { stage: 'Advanced', items: [
            'Read Aristotle\'s Prior Analytics and Posterior Analytics',
            'Predicate logic with quantifiers and variables (Modus Ponens, Modus Tollens, etc.)',
            'Study a major dialectical work — Plato\'s Republic, Aquinas\'s Summa Theologiae (selected questions)',
            'Modal logic (possibility, necessity); fuzzy logic, paraconsistent logic for the curious'
          ]}
        ]
      },
      'practice': {
        title: 'Practice',
        intro: 'Daily exercises that build the logical muscle.',
        items: [
          { name: 'Identify the form of one argument daily', body: 'From any reading or news item, find one argument. Write out its premises and conclusion. Is the form valid?' },
          { name: 'Construct a syllogism on a topic that interests you', body: 'Pick something you believe. State it as the conclusion. What two premises would make it follow? Are the premises true?' },
          { name: 'Spot one fallacy per day', body: 'Notice a fallacious argument in the news, an advertisement, a conversation. Name it. Show what its valid counterpart would look like.' },
          { name: 'Translate ordinary speech into logical form', body: 'Take a paragraph from an op-ed or a speech. Rewrite each sentence as a clear proposition. The exercise reveals what was really being said.' },
          { name: 'Memorise the rules of the syllogism', body: 'The four rules of distribution, the rule about negative premises, etc. Recite them weekly.' },
          { name: 'Practise the Socratic question', body: 'In a conversation, instead of asserting, ask. "What do you mean by X?" "Can you give an example?" "What follows if that is true?" Watch the conversation deepen.' },
          { name: 'Disagree with a book you love', body: 'Pick a book you mostly agree with. Find three claims you can argue against. The exercise tests whether you have really thought about it.' },
          { name: 'A weekly logic problem', body: 'A puzzle from Lewis Carroll\'s Symbolic Logic or any modern logic textbook. Work it through.' },
          { name: 'Practise propositional logic with truth tables', body: 'Take a complex sentence ("If A and B, then not C, unless D"). Build a truth table. Identify under which conditions it is true or false.' },
          { name: 'Steel-man before you argue', body: 'Before disagreeing with anyone, state their position in the strongest form you can imagine — better than they did. Then respond. This is the dialectical discipline.' }
        ]
      },
      'reading': {
        title: 'Reading',
        intro: 'Classical sources, modern textbooks, and applied works.',
        books: [
          { title: 'Socratic Logic', author: 'Peter Kreeft', note: 'The accessible modern textbook of classical logic. Begin here.' },
          { title: 'Organon (Categories, On Interpretation, Prior Analytics, Posterior Analytics, Topics, Sophistical Refutations)', author: 'Aristotle', note: 'The foundational works. Read with a guide your first time through.' },
          { title: 'Sister Miriam Joseph: The Trivium', author: 'Sister Miriam Joseph', note: 'Includes a clear treatment of classical Logic alongside Grammar and Rhetoric.' },
          { title: 'Logic: The Art of Defining and Reasoning', author: 'James McCosh', note: 'A 19th-century textbook still in print. Clear, classical in spirit.' },
          { title: 'A Concise Introduction to Logic', author: 'Patrick Hurley', note: 'The standard modern textbook covering both classical and modern logic.' },
          { title: 'Symbolic Logic', author: 'Lewis Carroll', note: 'The author of Alice wrote a charming, rigorous logic textbook. Use for the puzzles.' },
          { title: 'How to Read and Do Proofs', author: 'Daniel Solow', note: 'For when you want to apply logic to mathematics specifically.' },
          { title: 'Material Logic', author: 'Joseph Mary Kelly', note: 'The Thomistic treatment of logic applied to matter, not just form. Difficult and worth it.' }
        ]
      },
      'masters': {
        title: 'The masters of Logic',
        intro: 'A short hall of fame.',
        figures: [
          { name: 'Aristotle (384–322 BC)', what: 'The founder of formal logic. His Organon is the single most influential set of books in the history of thought. Every logician since has either built on him or rebelled against him.' },
          { name: 'Chrysippus (c. 279–c. 206 BC)', what: 'The greatest of the Stoic logicians. Developed propositional logic — the logic of "if-then" — long before it would be re-discovered in the 19th century.' },
          { name: 'Boethius (c. 480–524 AD)', what: 'Translated Aristotle\'s logical works into Latin and wrote commentaries that became the European logic textbook for a thousand years.' },
          { name: 'Peter Abelard (1079–1142)', what: 'Medieval logician whose Sic et Non ("Yes and No") set out conflicting authorities on theological questions side by side, training the student in dialectical resolution.' },
          { name: 'Thomas Aquinas (1225–1274)', what: 'Used the full apparatus of Aristotelian logic in the Summa Theologiae. Each question is structured as a dialectical exercise: objections, response, replies to objections.' },
          { name: 'Gottlob Frege (1848–1925)', what: 'Founder of modern predicate logic. His Begriffsschrift ("concept-script") was the most important advance in logic since Aristotle.' },
          { name: 'Bertrand Russell & Alfred North Whitehead', what: 'Their Principia Mathematica attempted to reduce all of mathematics to symbolic logic. They mostly succeeded, and the failure of the rest opened modern philosophy.' }
        ]
      }
    }
  },
  {
    id: 'rhetoric',
    name: 'Rhetoric',
    short: 'Rhetoric',
    tagline: 'The art of persuasion in service of truth',
    group: 'Trivium',
    color: '#dc2626',
    colorDeep: '#991b1b',
    colorSoft: '#fee2e2',
    icon: 'mouth',
    blurb: 'Rhetoric is the art of using language — written and spoken — to move people. In the classical tradition it is the third member of the Trivium because it presupposes the other two: you cannot persuade if you cannot use words well (Grammar) or reason rightly (Logic). The rhetorician learns to do both in front of an audience.',
    sections: {
      'what-it-is': {
        title: 'What Rhetoric is',
        intro: 'Aristotle defined Rhetoric as "the faculty of observing in any given case the available means of persuasion." Cicero added: a true orator is a good man, skilled in speaking. The classical tradition holds that rhetoric in the hands of a bad person is dangerous and in the hands of a good person essential.',
        principles: [
          { name: 'Ethos, pathos, logos', body: 'Aristotle\'s three modes of persuasion. Ethos is the speaker\'s character (do we trust them?). Pathos is the emotion stirred in the audience (do we feel what they want us to feel?). Logos is the argument itself (does it stand up to reasoning?). A great speech uses all three; a manipulative one cheats with pathos and ethos while skimping on logos.', why: 'Once you see the three at work, you cannot un-see them. You become a better listener — and a better speaker.' },
          { name: 'The five canons: invention, arrangement, style, memory, delivery', body: 'The Roman five-stage process of preparing an oration. Invention is finding what to say. Arrangement is putting it in order. Style is choosing the words and figures. Memory is fixing it in the mind. Delivery is speaking it well. Skip any one and the speech weakens.', why: 'Most modern speakers work only on invention and style. Adding the other three transforms the speech.' },
          { name: 'The three genres: deliberative, judicial, epideictic', body: 'Deliberative rhetoric persuades about future action (politics, decisions). Judicial rhetoric persuades about past action (law, accusation, defence). Epideictic rhetoric praises or blames (eulogies, commemorations, ceremonies). Each has its own conventions.', why: 'Knowing which genre you are in tells you what your audience expects and what tools fit. Mixing genres confuses both.' },
          { name: 'Figures of speech are tools, not decoration', body: 'Anaphora ("We shall fight on the beaches…"), antithesis ("Ask not what your country can do for you…"), chiasmus, asyndeton, polysyndeton, climax. Each figure does specific work — it does not merely "sound nice." Learn the catalogue.', why: 'Great speakers do not stumble on memorable phrases by accident. They work the figures consciously. You can learn to do the same.' },
          { name: 'Rhetoric without ethics is sophistry', body: 'The Sophists of ancient Greece taught rhetoric as a neutral tool to win any argument. Plato attacked them for severing speech from truth. The classical tradition since has held the Platonic line: rhetoric must serve truth or it serves a lie.', why: 'You will encounter rhetoric used for both purposes throughout your life. Knowing the tools lets you detect manipulation. Refusing to use them dishonestly is the discipline of the formed person.' }
        ]
      },
      'the-path': {
        title: 'The path',
        intro: 'From beginner to skilled orator.',
        levels: [
          { stage: 'Beginner', items: [
            'Learn ethos, pathos, logos and notice them in every speech and ad you encounter',
            'Read Aristotle\'s Rhetoric Book I (slowly; use a modern translation)',
            'Memorise one great speech a year — Lincoln\'s Gettysburg Address, Pericles\' Funeral Oration, an MLK sermon',
            'Begin the progymnasmata (see Practice) — the classical rhetorical exercises'
          ]},
          { stage: 'Intermediate', items: [
            'Work through all 14 progymnasmata, one each fortnight',
            'Learn 20 figures of speech and use them in your own writing',
            'Read Cicero\'s De Oratore and Brutus',
            'Speak in public — even a small audience — at least once a month'
          ]},
          { stage: 'Advanced', items: [
            'Read Quintilian\'s Institutio Oratoria entire',
            'Compose your own orations on real subjects',
            'Study the great political and judicial speeches in their full text (Demosthenes, Cicero, Burke, Lincoln, Churchill, MLK)',
            'Teach rhetoric to others — the truest test'
          ]}
        ]
      },
      'practice': {
        title: 'Practice',
        intro: 'The progymnasmata and modern equivalents.',
        items: [
          { name: 'Fable', body: 'Write a short fable in the manner of Aesop — a story with a moral. The exercise teaches concision and the use of narrative to make a point.' },
          { name: 'Narrative', body: 'Re-tell a known story (historical or mythological) in your own words. The exercise teaches arrangement and selection.' },
          { name: 'Chreia', body: 'Take a saying attributed to a famous person ("Diogenes said…"). Expand it into a short essay: who said it, what they meant, what follows, an example, a contrast, a conclusion.' },
          { name: 'Proverb', body: 'Take a proverb ("A stitch in time saves nine"). Write an essay explaining and defending it. Then write one attacking it.' },
          { name: 'Refutation and confirmation', body: 'Take a story (a myth, an episode) and write a piece refuting it ("this could not have happened, because…"). Then write a piece confirming it.' },
          { name: 'Commonplace', body: 'Write an attack on a general vice (cowardice, lying) or a praise of a general virtue (courage, honesty). No specific person — the type itself.' },
          { name: 'Encomium and invective', body: 'Write a speech praising a specific person, place, or thing. Then write one attacking. The opposite skills sharpen each other.' },
          { name: 'Comparison', body: 'Compare two things — two heroes, two cities, two arguments. The exercise teaches structured judgment.' },
          { name: 'Speech-in-character (prosopopoeia)', body: 'Write a speech as if delivered by a known figure ("What would Socrates say to Twitter?"). Capture their voice. Make the argument they would make.' },
          { name: 'Description (ekphrasis)', body: 'Describe a painting, a building, a scene, vividly enough that the reader sees it. The exercise teaches the senses.' },
          { name: 'Thesis', body: 'Argue a general question — "Should one marry?" "Is wealth desirable?" — using all the available tools. The most advanced of the progymnasmata.' },
          { name: 'Law', body: 'Argue for or against the passing of a specific law. Practical, deliberative rhetoric.' },
          { name: 'Daily reading-aloud', body: 'A page from a great speech, every morning. The mouth learns the rhythms before the brain consciously catches them.' },
          { name: 'Weekly imitation', body: 'Take a paragraph from Cicero, Burke, or Lincoln. Write your own paragraph on a different subject in the same structure and rhythm.' }
        ]
      },
      'reading': {
        title: 'Reading',
        intro: 'The classical sources and the best modern guides.',
        books: [
          { title: 'Rhetoric', author: 'Aristotle', note: 'The foundational treatise. The three modes, the three genres, the topics. Read Books I–II first.' },
          { title: 'On Rhetorical Invention (De Inventione)', author: 'Cicero', note: 'Cicero\'s early treatise. Practical and clear.' },
          { title: 'De Oratore', author: 'Cicero', note: 'His mature dialogue on the perfect orator. Long, lush, persuasive.' },
          { title: 'Institutio Oratoria', author: 'Quintilian', note: 'The comprehensive Roman manual of rhetorical education. 12 books; read Book I and Book X first.' },
          { title: 'Classical Rhetoric for the Modern Student', author: 'Edward P. J. Corbett', note: 'The best modern textbook. Use as a working manual.' },
          { title: 'A Handlist of Rhetorical Terms', author: 'Richard Lanham', note: 'The reference for the figures of speech. Keep at your elbow.' },
          { title: 'On Christian Doctrine, Book IV', author: 'Augustine', note: 'Augustine, formerly a teacher of rhetoric, on how to use it for Christian preaching. Influential for fifteen centuries.' },
          { title: 'The Rhetoric of Religion', author: 'Kenneth Burke', note: 'A 20th-century thinker who extended classical rhetoric into modern criticism.' },
          { title: 'The progymnasmata of Aelius Theon, Hermogenes, Aphthonius, Nicolaus', author: 'Translated and edited by George A. Kennedy', note: 'The actual textbooks of classical rhetorical education. Surprisingly usable.' }
        ]
      },
      'masters': {
        title: 'The masters of Rhetoric',
        intro: 'A short hall of fame.',
        figures: [
          { name: 'Gorgias (c. 483–375 BC)', what: 'The first great teacher of rhetoric in Athens. Plato\'s dialogue Gorgias is named for him and attacks his (and the Sophists\') severing of rhetoric from truth.' },
          { name: 'Isocrates (436–338 BC)', what: 'Founded the great rhetorical school in Athens. Taught that the true orator must be a good man and a good citizen — the position the classical tradition would inherit.' },
          { name: 'Demosthenes (384–322 BC)', what: 'The greatest of the Greek orators. His Philippics — speeches urging Athens to resist Philip of Macedon — are still studied as the model of urgent political rhetoric.' },
          { name: 'Cicero (106–43 BC)', what: 'The greatest of the Roman orators. His speeches against Catiline, against Verres, and his defences of various clients founded the standard for Latin oratory and the European tradition that descended from it.' },
          { name: 'Quintilian (35–100 AD)', what: 'The Roman teacher whose Institutio Oratoria is the most comprehensive ancient treatment of rhetorical education.' },
          { name: 'Augustine (354–430)', what: 'Trained as a rhetor before his conversion. His De Doctrina Christiana applied classical rhetoric to Christian preaching, shaping fifteen hundred years of sermons.' },
          { name: 'Edmund Burke (1729–1797)', what: 'Anglo-Irish statesman whose speeches in Parliament and writings on the French Revolution are studied as the model of conservative-classical rhetoric in English.' },
          { name: 'Abraham Lincoln (1809–1865)', what: 'A largely self-taught classical rhetorician — Aesop, Shakespeare, the King James Bible. The Gettysburg Address and Second Inaugural are the high points of American oratory.' },
          { name: 'Winston Churchill, Martin Luther King Jr.', what: 'Twentieth-century masters who studied the classical tradition and used its tools in the great speeches of their times.' }
        ]
      }
    }
  },
  {
    id: 'arithmetic',
    name: 'Arithmetic',
    short: 'Arithmetic',
    tagline: 'The science of number',
    group: 'Quadrivium',
    color: '#1e40af',
    colorDeep: '#1e3a8a',
    colorSoft: '#dbeafe',
    icon: 'numerals',
    blurb: 'In the classical tradition, Arithmetic is not the calculation of grocery bills. It is the study of number in itself — what numbers are, how they relate, what properties belong to them. The Pythagoreans held that all of reality could be understood through number. The classical Arithmetic student learns to see numbers as objects of contemplation, not just tools.',
    sections: {
      'what-it-is': {
        title: 'What Arithmetic is',
        intro: 'Boethius, in his De Arithmetica, called Arithmetic the first of the four mathematical arts because all the others depend on number. Geometry is number applied to magnitude. Music is number applied to time and ratio. Astronomy is number applied to motion. Without Arithmetic, none of them stands.',
        principles: [
          { name: 'Number is the first object of the mind', body: 'A child learns to count before they learn to read. The mind grasps "two-ness" before it grasps any specific two things. Arithmetic studies this prior grasp.', why: 'To take number seriously is to take seriously what the mind already does. Most modern math teaching skips this contemplative level and moves straight to calculation, losing the depth.' },
          { name: 'The qualitative properties of numbers', body: 'A number is even or odd, perfect or deficient or abundant, prime or composite, square or oblong, triangular or pentagonal. The Pythagoreans catalogued these properties. They saw each number as having a character.', why: 'A person who knows that 6 is perfect (1+2+3=6) and that 7 is the only prime under 10 with no two-digit multiple under 100 ending in 7 — knows something about reality that the calculator-user does not.' },
          { name: 'Relations between numbers (ratios)', body: 'Boethius classified relations — equal, multiple, superparticular, superpartient, multiple superparticular. The ratios are the bones of music, of architecture, of much of the cosmos.', why: 'The classical tradition holds that the world is structured by ratios. A 4:3 ratio gives a perfect fourth in music. A golden ratio appears in shells and faces. To see ratio is to see structure.' },
          { name: 'Mental arithmetic mastery', body: 'The classical student is fluent in mental calculation. Not by tricks — by long practice. Multiply 47 by 23 in your head. Find the square root of 169. Memorise squares to 25, primes to 100.', why: 'The mind that has done its own arithmetic is differently shaped than the one that has always reached for the calculator. Calculation done by hand develops attention, memory, pattern recognition.' },
          { name: 'Number theory: the deep end', body: 'Beyond arithmetic\'s practical use lies the theory of numbers — the relationships, the proofs, the unsolved problems (Riemann Hypothesis, Goldbach\'s Conjecture). Gauss called number theory the queen of mathematics.', why: 'Number theory is where mathematics becomes most like contemplation — disinterested, beautiful, surprising. The classical mind is at home here.' }
        ]
      },
      'the-path': {
        title: 'The path',
        intro: 'From mental arithmetic mastery to number theory.',
        levels: [
          { stage: 'Beginner', items: [
            'Memorise multiplication tables to 12 × 12 fluently',
            'Daily mental arithmetic: 10 minutes, no calculator',
            'Memorise squares to 25, cubes to 10, primes to 100',
            'Read Nicomachus\'s Introduction to Arithmetic (modern translation by D\'Ooge)'
          ]},
          { stage: 'Intermediate', items: [
            'Study the qualitative properties — perfect, abundant, deficient numbers; triangular and square numbers; Fibonacci',
            'Learn basic number theory: divisibility rules, GCD, LCM, prime factorisation',
            'Read Boethius De Arithmetica (selections)',
            'Daily mental arithmetic with larger numbers and ratios'
          ]},
          { stage: 'Advanced', items: [
            'Modular arithmetic; the Chinese Remainder Theorem',
            'Read Euclid\'s Elements Book VII–IX (Euclid on number theory)',
            'Read G. H. Hardy\'s A Mathematician\'s Apology',
            'Number theory through Hardy & Wright, or Burton',
            'Explore an unsolved problem (the twin prime conjecture, perfect odd numbers) for its own sake'
          ]}
        ]
      },
      'practice': {
        title: 'Practice',
        intro: 'Daily exercises that build numerical fluency.',
        items: [
          { name: '10 minutes of mental arithmetic daily', body: 'Multiply two 2-digit numbers in your head. Find squares. Convert fractions to decimals. No calculator.' },
          { name: 'Memorise a numerical fact a week', body: 'A square, a cube, a prime, a constant (π to 8 digits, e to 8 digits). Recite weekly. Stockpile.' },
          { name: 'Study one number per week', body: 'Take a number (49, 60, 144). Find its factors, its sum-of-divisors, its prime factorisation, what makes it interesting. Many numbers have surprising properties.' },
          { name: 'A daily Fibonacci or pattern problem', body: 'A Project Euler problem, a logic puzzle, a number sequence. 15 minutes of recreational mathematics.' },
          { name: 'Sketch the times-table grid by hand', body: 'A 12×12 grid, filled from memory in 5 minutes. Note the patterns.' },
          { name: 'A weekly proof', body: 'Prove something small. Why is the sum of the first n odd numbers always n²? Why are there infinitely many primes? Hand-write the proof.' },
          { name: 'Find a real-world ratio', body: 'Measure something around you. Look for the ratios — the 3:4:5 of door frames, the golden ratio in plants, the octave in music.' },
          { name: 'Read Euclid Book VII (on number)', body: 'Slowly. One proposition a day. Notice that Greek arithmetic is geometric — numbers are lengths.' },
          { name: 'Practice with the abacus or sorobon', body: 'A physical instrument. Calculation becomes embodied. Even ten minutes a week builds different skill.' },
          { name: 'Pose a question Gauss might have asked', body: '"What pattern do the prime numbers follow?" Sit with it. The classical mind is willing to entertain unanswered questions for a long time.' }
        ]
      },
      'reading': {
        title: 'Reading',
        intro: 'Classical and modern.',
        books: [
          { title: 'Introduction to Arithmetic', author: 'Nicomachus of Gerasa (c. 100 AD)', note: 'The ancient textbook that made Arithmetic a liberal art. Read D\'Ooge\'s translation.' },
          { title: 'De Institutione Arithmetica', author: 'Boethius (c. 500 AD)', note: 'The Latin successor to Nicomachus. The textbook of European arithmetic for a thousand years.' },
          { title: 'Elements, Books VII–IX', author: 'Euclid', note: 'Euclid on number theory. Proofs of infinite primes, perfect numbers, the Euclidean algorithm.' },
          { title: 'A Mathematician\'s Apology', author: 'G.H. Hardy', note: 'A great number theorist on what mathematics is and why it matters. Short, beautiful.' },
          { title: 'Number: The Language of Science', author: 'Tobias Dantzig', note: 'A 1930 classic on the development of number. Einstein praised it.' },
          { title: 'Elementary Number Theory', author: 'David Burton', note: 'A solid undergraduate textbook to take you through the basics rigorously.' },
          { title: 'An Introduction to the Theory of Numbers', author: 'Hardy & Wright', note: 'The classic number-theory text. More advanced; tackle after Burton.' },
          { title: 'Prime Obsession', author: 'John Derbyshire', note: 'A readable account of the Riemann Hypothesis — the deepest open question in number theory.' }
        ]
      },
      'masters': {
        title: 'The masters of Arithmetic',
        intro: 'A short hall of fame.',
        figures: [
          { name: 'Pythagoras (c. 570–c. 495 BC)', what: 'The semi-legendary founder of the school that held "all is number." Arithmetic, in its classical sense, begins with him.' },
          { name: 'Euclid (c. 300 BC)', what: 'Best known for Geometry, but Books VII–IX of his Elements are foundational for number theory. His proof that there are infinitely many primes is still studied for its beauty.' },
          { name: 'Nicomachus (c. 60–c. 120 AD)', what: 'Author of the Introduction to Arithmetic — the textbook that established Arithmetic as a liberal art.' },
          { name: 'Boethius (c. 480–524)', what: 'Translated and extended Nicomachus into Latin. The medieval textbook.' },
          { name: 'Fibonacci (c. 1170–c. 1250)', what: 'Brought Hindu-Arabic numerals to Europe in his Liber Abaci. The Fibonacci sequence (1,1,2,3,5,8,13,21,…) is named for him though he did not discover it.' },
          { name: 'Pierre de Fermat (1607–1665)', what: 'French lawyer and amateur mathematician whose marginal notes founded modern number theory. Fermat\'s Last Theorem was unsolved until 1994.' },
          { name: 'Leonhard Euler (1707–1783)', what: 'The most prolific mathematician in history. The Euler totient function, Euler\'s identity, Euler\'s number — many things bear his name.' },
          { name: 'Carl Friedrich Gauss (1777–1855)', what: '"Prince of Mathematicians." His Disquisitiones Arithmeticae (1801) re-founded number theory rigorously. The Riemann Hypothesis, which Gauss suspected, remains open.' },
          { name: 'Srinivasa Ramanujan (1887–1920)', what: 'Self-taught Indian mathematician whose intuitive grasp of numbers astonished Hardy at Cambridge. A 20th-century pillar of number theory.' }
        ]
      }
    }
  },
  {
    id: 'geometry',
    name: 'Geometry',
    short: 'Geometry',
    tagline: 'The science of shape, space, and proof',
    group: 'Quadrivium',
    color: '#c2410c',
    colorDeep: '#7c2d12',
    colorSoft: '#ffedd5',
    icon: 'triangle',
    blurb: 'Euclid\'s Elements is the second most-published book in history, after the Bible. It taught the world what a proof is. The classical Geometry student does not just learn shapes — they learn the form of rigorous reasoning that every later science took as a model.',
    sections: {
      'what-it-is': {
        title: 'What Geometry is',
        intro: 'Geometry is the science of magnitude — of size, shape, and the relations between them. The Greeks discovered that geometrical truths can be proven with absolute certainty from a small set of starting definitions, postulates, and axioms. This is the deepest classical demonstration of what knowledge looks like.',
        principles: [
          { name: 'Proof is the form of knowledge', body: 'A geometrical theorem is not a guess, an opinion, or a pattern — it is necessary. Once proven, it cannot be otherwise. The Pythagorean theorem was true before Pythagoras and will be true after the heat-death of the universe.', why: 'A mind that has experienced one rigorous proof knows what certainty actually is. Without geometry, one tends to confuse strong evidence with proof; with geometry, one no longer can.' },
          { name: 'Definitions, postulates, common notions, propositions', body: 'Euclid begins the Elements with 23 definitions ("a point is that which has no part"), 5 postulates ("a straight line may be drawn between any two points"), 5 common notions ("things equal to the same thing are equal to each other") — and from these proves 465 propositions across 13 books.', why: 'This is how rigorous thinking is built. Every later science (Newton, Spinoza, Aquinas) modelled itself on this structure.' },
          { name: 'The Pythagorean theorem is the gateway', body: 'Euclid Book I, Proposition 47. The square on the hypotenuse equals the sum of the squares on the other two sides. The proof is one of the most elegant things in the human inheritance.', why: 'Working through Euclid\'s actual proof of Pythagoras (not just stating the formula) is a rite of passage. The mind that has done it is changed.' },
          { name: 'Construction with compass and straightedge', body: 'Greek geometry was constructive. You did not just state that two lines could be bisected — you showed how, with compass and straightedge alone. The classical student does the constructions, by hand.', why: 'Drawing the geometry embeds it in the body. The hand that has constructed an equilateral triangle understands it differently than the eye that has only seen one.' },
          { name: 'The classical geometry leads to all of mathematics', body: 'Coordinate geometry (Descartes). Calculus (Newton, Leibniz). Non-Euclidean geometries (Lobachevsky, Riemann). Modern physics (Einstein\'s general relativity is a geometrical theory). All trace back to Euclid.', why: 'Euclid is where you start. From him you can go anywhere in mathematics. From other starting points you may never reach the deep places.' }
        ]
      },
      'the-path': {
        title: 'The path',
        intro: 'A traditional route from compass-and-straightedge to higher geometries.',
        levels: [
          { stage: 'Beginner', items: [
            'Acquire a compass, a straightedge, a soft pencil, a notebook',
            'Work through Euclid Book I, Propositions 1–10, by hand (constructing each)',
            'Read the Pythagorean theorem proof (I.47) carefully',
            'Memorise the 5 postulates and the 5 common notions'
          ]},
          { stage: 'Intermediate', items: [
            'Complete Euclid Book I (47 propositions)',
            'Work through Books II–IV (theory of circles, regular polygons)',
            'Learn analytical geometry (Cartesian coordinates) as a different language for the same content',
            'Read Heath\'s introductions to the Elements'
          ]},
          { stage: 'Advanced', items: [
            'Books V–VI (the theory of proportion)',
            'Books XI–XIII (solid geometry, ending with the construction of the five Platonic solids)',
            'Non-Euclidean geometries — what happens when you change the fifth postulate',
            'Projective geometry, differential geometry, the modern frontier'
          ]}
        ]
      },
      'practice': {
        title: 'Practice',
        intro: 'Geometry, more than the other arts, is done with the hands.',
        items: [
          { name: 'A daily Euclid proposition', body: 'Open the Elements. Take one proposition. Construct it with compass and straightedge. Write out the proof. 20 minutes.' },
          { name: 'Sketch by hand', body: 'A circle, an equilateral triangle, a regular hexagon, a square. By eye and then with instruments. The hand learns what the eye guesses.' },
          { name: 'Bisect, trisect, perpendicular', body: 'The basic constructions. Bisect an angle. Bisect a line. Construct a perpendicular. Practice until they are automatic.' },
          { name: 'Construct the five Platonic solids', body: 'Cube, tetrahedron, octahedron, dodecahedron, icosahedron. Cut from card. The hands learn three-dimensional geometry.' },
          { name: 'Tile a plane', body: 'Discover the regular tilings (triangles, squares, hexagons). Then the semi-regular. Then the aperiodic (Penrose).' },
          { name: 'Look for geometry in the world', body: 'Walk through a city or a forest. Notice angles, ratios, symmetries, the golden rectangle in window frames, the hexagons in a beehive.' },
          { name: 'A weekly origami fold', body: 'Each fold is a proof of a geometrical relationship. Start with a square; learn classical folds.' },
          { name: 'Memorise key formulae as facts', body: 'Area of a triangle, area of a circle, volume of a sphere, Pythagorean triples. Recite weekly.' },
          { name: 'Re-do a proposition from memory', body: 'A week after first doing it, redo it from memory. The proof should now be yours.' },
          { name: 'Read one classical proof and one modern proof of the same theorem', body: 'See how mathematical style has changed and what is gained or lost.' }
        ]
      },
      'reading': {
        title: 'Reading',
        intro: 'Euclid and his commentators.',
        books: [
          { title: 'Elements', author: 'Euclid (c. 300 BC)', note: 'The foundational text. Read Sir Thomas Heath\'s edition (three volumes) for the translation plus commentary. Or use Joyce\'s free online interactive version (clarku.edu/~djoyce/java/elements).' },
          { title: 'Geometry: Euclid and Beyond', author: 'Robin Hartshorne', note: 'A modern textbook that takes Euclid seriously and connects to modern geometry.' },
          { title: 'A Beginner\'s Guide to Constructing the Universe', author: 'Michael Schneider', note: 'The classical geometry of nature — pentagons in flowers, the golden ratio, the Platonic solids in crystals. Beautifully illustrated.' },
          { title: 'Sacred Geometry', author: 'Robert Lawlor', note: 'The classical-Pythagorean view of geometry as cosmic structure. Use with discernment but worth reading.' },
          { title: 'Flatland', author: 'Edwin Abbott', note: 'A short Victorian novel about a two-dimensional being encountering a three-dimensional world. The best introduction to higher-dimensional thinking.' },
          { title: 'Indra\'s Pearls', author: 'Mumford, Series & Wright', note: 'Modern geometry made beautiful with computer graphics. The deep end.' },
          { title: 'The Shape of Space', author: 'Jeffrey Weeks', note: 'A modern primer on topology and the geometry of the cosmos. After Euclid, this opens the next door.' }
        ]
      },
      'masters': {
        title: 'The masters of Geometry',
        intro: 'A short hall of fame.',
        figures: [
          { name: 'Thales of Miletus (c. 624–c. 546 BC)', what: 'The earliest Greek geometer named in tradition. Proved that the angles at the base of an isosceles triangle are equal — the first recorded geometrical proof in history.' },
          { name: 'Pythagoras and the Pythagoreans (c. 570–c. 495 BC)', what: 'The theorem most famous in geometry is associated with him, though it was probably known earlier. His school made geometry a contemplative practice.' },
          { name: 'Euclid (c. 300 BC)', what: 'Author of the Elements. Probably worked in Alexandria. The most influential mathematics textbook of all time.' },
          { name: 'Archimedes (c. 287–c. 212 BC)', what: 'The greatest mathematician of antiquity. Computed the area of the parabola, the volume of the sphere, gave a method for π. His tomb was decorated with the geometrical figure of a cylinder enclosing a sphere — his favourite discovery.' },
          { name: 'Apollonius of Perga (c. 240–c. 190 BC)', what: 'His Conics studied the curves cut by planes through a cone — the ellipse, the parabola, the hyperbola. Eighteen centuries later Kepler used them to describe planetary orbits.' },
          { name: 'René Descartes (1596–1650)', what: 'Invented coordinate geometry — the marriage of algebra and Euclid. Made it possible to do geometry by calculation as well as by construction.' },
          { name: 'Carl Friedrich Gauss (1777–1855) and Lobachevsky, Riemann', what: 'Discovered non-Euclidean geometries by varying Euclid\'s fifth postulate. Opened the modern mathematical universe.' },
          { name: 'Henri Poincaré (1854–1912)', what: 'Father of topology — the geometry of properties that survive stretching and bending. The deep modern extension of the classical work.' }
        ]
      }
    }
  },
  {
    id: 'music',
    name: 'Music',
    short: 'Music',
    tagline: 'Number heard — the harmony of ratios',
    group: 'Quadrivium',
    color: '#7c3aed',
    colorDeep: '#5b21b6',
    colorSoft: '#ede9fe',
    icon: 'lyre',
    blurb: 'In the classical tradition, Music is not the playing of instruments. It is the study of harmony itself — of the ratios that produce pleasing sound, of the proportions that structure beautiful melody and pleasing form. Pythagoras\'s discovery that the octave is a 2:1 ratio, the perfect fifth a 3:2, the perfect fourth a 4:3, made Music a mathematical art and bound it forever to the Quadrivium.',
    sections: {
      'what-it-is': {
        title: 'What Music is',
        intro: 'Boethius distinguished three kinds of music. Musica mundana — the music of the spheres, the proportions of the cosmos. Musica humana — the harmony of soul and body in a well-ordered person. Musica instrumentalis — what we now ordinarily call music, the sounds made by voices and instruments. All three are part of the classical Music education.',
        principles: [
          { name: 'The Pythagorean discovery', body: 'Strike a string. Stop it at half its length and strike again — the note is an octave higher. Stop at two-thirds — a perfect fifth. At three-quarters — a perfect fourth. Pythagoras saw that the ratios that please the ear are the same ratios that govern arithmetic and geometry. Music is number heard.', why: 'The fact that beauty in sound corresponds to mathematical simplicity is one of the deepest hints in the classical tradition about the structure of reality. Take it seriously.' },
          { name: 'The harmony of the spheres', body: 'The Pythagoreans believed that the planets, moving through space, produced harmonies inaudible to ordinary ears but real. Plato\'s Timaeus, Kepler\'s Harmonices Mundi, Boethius\'s De Musica all develop this idea.', why: 'Whether or not the cosmos literally sings, the classical tradition holds that the same proportions appear at every level — atoms, music, architecture, the heavens. Studying one prepares you to recognise the others.' },
          { name: 'Music shapes the soul', body: 'Plato (Republic Book III) and Aristotle (Politics Book VIII) both argued that the kind of music a child hears shapes the kind of person they become. Soft modes (Lydian, Ionian) make soft souls; martial modes (Dorian) make courageous ones. The argument is not naïve; the modern research on music and emotion broadly supports it.', why: 'A formation that ignores what the learner listens to misses one of the largest shaping inputs. Choose the music as you would choose the books.' },
          { name: 'Counterpoint: multiple voices held together', body: 'Western music developed counterpoint — multiple melodic lines combining into harmony. Palestrina, Bach, Mozart, and others perfected it. The discipline of writing or hearing two or three or five lines at once is one of the great trainings of the mind.', why: 'A mind that can follow a fugue can follow a complex argument. The two skills train similar capacities — holding multiple structured streams in attention at once.' },
          { name: 'The great repertoire is the curriculum', body: 'Gregorian chant. Renaissance polyphony. The Baroque (Bach above all). The Classical (Haydn, Mozart, Beethoven). The Romantic. The Modern. The classical Music education is largely listening — slowly, repeatedly, attentively — to what the masters made.', why: 'You cannot learn music as music by reading about it. You learn by hearing the great works again and again until they are part of you.' }
        ]
      },
      'the-path': {
        title: 'The path',
        intro: 'From the basic intervals to fluent listening.',
        levels: [
          { stage: 'Beginner', items: [
            'Learn the basic intervals by ear (octave, fifth, fourth, third)',
            'Begin singing — even alone, even quietly. The voice is the first instrument',
            'Listen daily to one piece — Bach Cello Suite, Mozart Piano Concerto, a Gregorian chant',
            'Read the first chapters of Anthony Storr\'s Music and the Mind'
          ]},
          { stage: 'Intermediate', items: [
            'Learn musical notation — read a simple score by sight',
            'Study the modes (Dorian, Phrygian, etc.) and recognise them',
            'A weekly listening: one piece in depth — read about it, listen 5 times, then move on',
            'Read Aaron Copland\'s What to Listen for in Music'
          ]},
          { stage: 'Advanced', items: [
            'Study counterpoint (Fux\'s Gradus ad Parnassum, the classical textbook)',
            'Read Boethius De Musica',
            'Sing in a choir if you can; play an instrument if you can',
            'Read Charles Rosen\'s The Classical Style, Edward Said\'s Musical Elaborations',
            'Listen across the whole canon — medieval through modern'
          ]}
        ]
      },
      'practice': {
        title: 'Practice',
        intro: 'Daily and weekly habits.',
        items: [
          { name: 'Listen to one piece daily, attentively', body: '15 minutes. Phone away. Eyes closed if possible. The Goldberg Variations, a Bach cantata, a movement from a Beethoven symphony. Different piece each day or repeat for the week.' },
          { name: 'Sing every day, even briefly', body: 'A folk song, a hymn, a piece of plainchant. The voice connects you to music in a way listening alone does not.' },
          { name: 'Memorise the cycle of fifths', body: 'C–G–D–A–E–B–F#–C#–G#–D#–A#–F. Sing it through. The structural backbone of Western music.' },
          { name: 'Identify the intervals you hear', body: 'When you hear a piece, name the intervals between the notes (fifth, third, sixth). The ear improves with practice.' },
          { name: 'Read one piece of music criticism per week', body: 'A review, an essay. The vocabulary of musical thought grows.' },
          { name: 'A weekly listening journal', body: 'Note what you listened to, what struck you, what you want to come back to. Over months, a personal canon emerges.' },
          { name: 'Listen to one composer for a month', body: 'In November, only Bach. In December, only Mozart. The deep dive teaches you the composer\'s voice.' },
          { name: 'Memorise a melody a week', body: 'A folk song, a hymn tune, a chant. Sing it through the week. Add to the stock.' },
          { name: 'Attend live music when you can', body: 'A concert, a service with music, a small recital. Recorded music is not the same as music in a room.' },
          { name: 'A weekly listen across the canon', body: 'Sunday — medieval (Hildegard, Gregorian chant). Monday — Renaissance (Palestrina). Tuesday — Baroque (Bach). Wednesday — Classical (Haydn, Mozart). Thursday — Romantic (Brahms). Friday — Modern (Bartók, Pärt). Saturday — your choice.' }
        ]
      },
      'reading': {
        title: 'Reading',
        intro: 'Classical sources and modern guides.',
        books: [
          { title: 'De Institutione Musica', author: 'Boethius (c. 500 AD)', note: 'The classical treatise that made Music a liberal art. Defines the three kinds of music. The textbook for a thousand years.' },
          { title: 'Harmonices Mundi', author: 'Johannes Kepler (1619)', note: 'Kepler\'s belief that the planets sing — and his discovery of the laws of planetary motion as part of the search. One of the great fusions of music, astronomy, and mathematics.' },
          { title: 'What to Listen for in Music', author: 'Aaron Copland', note: 'The American composer\'s warm and practical primer. Begin here.' },
          { title: 'The Classical Style', author: 'Charles Rosen', note: 'On the music of Haydn, Mozart, and Beethoven. Difficult and rewarding.' },
          { title: 'Music and the Mind', author: 'Anthony Storr', note: 'A psychiatrist on what music does to the listener. Modern and humane.' },
          { title: 'Gradus ad Parnassum', author: 'Johann Joseph Fux (1725)', note: 'The classical textbook of counterpoint. Used by Haydn, Mozart, Beethoven. Still the standard.' },
          { title: 'The Cambridge History of Western Music Theory', author: 'Thomas Christensen (ed.)', note: 'A scholarly reference. Use as needed.' },
          { title: 'Music: A Subversive History', author: 'Ted Gioia', note: 'A modern history with attention to both classical and popular traditions. Lively reading.' }
        ]
      },
      'masters': {
        title: 'The masters of Music',
        intro: 'A short hall of fame.',
        figures: [
          { name: 'Pythagoras (c. 570–c. 495 BC)', what: 'The semi-legendary discoverer of the mathematical ratios behind musical intervals. The beginning of Music as a liberal art.' },
          { name: 'Boethius (c. 480–524)', what: 'His De Musica codified the Pythagorean tradition for the Latin West and named the three kinds of music.' },
          { name: 'Hildegard of Bingen (1098–1179)', what: 'Medieval abbess, mystic, composer. Her sacred chants are some of the most beautiful music in the European tradition.' },
          { name: 'Guido of Arezzo (c. 991–1033)', what: 'Invented modern musical notation (the staff, the syllables ut-re-mi-fa-sol-la). The teacher who made music readable.' },
          { name: 'Palestrina (1525–1594)', what: 'The master of Renaissance polyphony. His Pope Marcellus Mass is the model of how multiple voices can combine into perfect harmony.' },
          { name: 'Johann Sebastian Bach (1685–1750)', what: 'The summit of Western music. The Well-Tempered Clavier, the Mass in B Minor, the Cello Suites, the Goldberg Variations. Begin here if you begin anywhere.' },
          { name: 'Wolfgang Amadeus Mozart (1756–1791)', what: 'The classical perfection — operas, symphonies, concertos, chamber music, a Requiem. Effortless on the surface, infinite underneath.' },
          { name: 'Ludwig van Beethoven (1770–1827)', what: 'The transition from Classical to Romantic. The late string quartets and piano sonatas reach depths nothing earlier had.' },
          { name: 'Johann Joseph Fux (1660–1741)', what: 'Author of the great textbook of counterpoint that trained Haydn, Mozart, Beethoven.' }
        ]
      }
    }
  },
  {
    id: 'astronomy',
    name: 'Astronomy',
    short: 'Astronomy',
    tagline: 'The science of the heavens',
    group: 'Quadrivium',
    color: '#4338ca',
    colorDeep: '#312e81',
    colorSoft: '#e0e7ff',
    icon: 'star',
    blurb: 'In the classical tradition, Astronomy is the study of moving magnitude — bodies in motion through space. The Greeks made it a liberal art because the heavens are the most orderly and beautiful thing the eye can see, and because the night sky is the great teacher of perspective.',
    sections: {
      'what-it-is': {
        title: 'What Astronomy is',
        intro: 'Ptolemy\'s Almagest, Copernicus\'s De Revolutionibus, Galileo\'s Sidereus Nuncius, Kepler\'s Astronomia Nova, Newton\'s Principia — Astronomy is the science that triggered the great revolution in human self-understanding. The classical student does not just look up the answers; they learn what the night sky teaches.',
        principles: [
          { name: 'The sky is everyone\'s shared inheritance', body: 'Every culture has named the stars. Every farmer has marked the seasons by the constellations. Astronomy in its first sense is the daily contemplation of what the eye can see overhead.', why: 'A person who knows the Pole Star, the constellations of their hemisphere, the moon\'s phases, the bright planets — has a different relationship to night and time than the screen-fed person who knows none of these.' },
          { name: 'The classical cosmos: ordered, hierarchical, knowable', body: 'The Ptolemaic universe placed Earth at the centre, with concentric crystal spheres carrying the moon, sun, planets, and fixed stars. It was wrong about the centre but right about something deeper — that the heavens are ordered and the order can be known. The classical mind takes this seriously.', why: 'The Copernican revolution dethroned Earth but did not dethrone order. The discovery that the laws of physics on Earth and in the heavens are the same is the deepest classical-modern continuity.' },
          { name: 'Naked-eye observation is the basis', body: 'Before the telescope, the entire science was built by eye. Hipparchus catalogued 850 stars. Ptolemy described the motions to within fractions of a degree. The classical astronomy student returns to the eye first.', why: 'A person who has done their own observation knows what astronomical knowledge feels like from the inside. The textbook reader has only second-hand certainty.' },
          { name: 'Kepler\'s laws: where Music and Astronomy meet', body: 'Kepler discovered three laws of planetary motion. The first: orbits are ellipses. The second: planets sweep equal areas in equal times. The third: T² is proportional to a³ — a mathematical ratio. The discovery was, for him, the music of the spheres made calculable.', why: 'Working through Kepler\'s laws is to see the deepest fusion of the Quadrivium — geometry, arithmetic, music, and astronomy in one moment of insight.' },
          { name: 'The astronaut\'s view: changed perspective', body: 'The Apollo program produced one of the great classical experiences of our age — the photograph "Earthrise," the whole-Earth view from the moon. A classical Astronomy education includes this perspective: that we are a small body in a vast cosmos, and that this knowledge ought to humble and elevate the mind.', why: 'A person who has truly absorbed the scale of the cosmos lives differently. The classical tradition has always wanted this.' }
        ]
      },
      'the-path': {
        title: 'The path',
        intro: 'A traditional route from the visible night sky to advanced cosmology.',
        levels: [
          { stage: 'Beginner', items: [
            'Learn to find the Pole Star, the Plough/Big Dipper, Orion, Cassiopeia',
            'Track the moon\'s phases for one full lunar month',
            'Identify the visible planets (Venus, Mars, Jupiter, Saturn) when they are visible',
            'Begin a weekly night-sky observation (15 minutes)',
            'Read H.A. Rey\'s The Stars (a children\'s book that adults find perfect)'
          ]},
          { stage: 'Intermediate', items: [
            'Learn the 88 constellations (or those visible from your latitude)',
            'Read selections from Ptolemy\'s Almagest, Copernicus\'s De Revolutionibus',
            'Study the celestial sphere, the ecliptic, the zodiac, the basic celestial mechanics',
            'Acquire and learn to use a small telescope (4–8 inch reflector)',
            'Read Carl Sagan\'s Cosmos or its modern equivalents'
          ]},
          { stage: 'Advanced', items: [
            'Work through Kepler\'s three laws and their derivation',
            'Read Galileo\'s Sidereus Nuncius',
            'Read selections from Newton\'s Principia (with a guide)',
            'Study modern cosmology — the Big Bang, dark matter, dark energy',
            'Visit a planetarium and a research observatory if you can'
          ]}
        ]
      },
      'practice': {
        title: 'Practice',
        intro: 'Daily and weekly habits, mostly outdoors.',
        items: [
          { name: 'Step outside at night, weekly', body: 'For 15 minutes. Eyes adjust after 10. Find one familiar constellation. Note where it has moved since last week.' },
          { name: 'Track the moon for a lunar month', body: 'Note the phase each evening. By the end of the month you understand the cycle from the inside.' },
          { name: 'Memorise a new constellation a month', body: 'Choose one. Find it weekly. Within a year you know twelve.' },
          { name: 'Note the sunrise and sunset times', body: 'Daily. Over a year you feel the rhythm of the seasons through the changing daylight.' },
          { name: 'Find a current planet', body: 'Use Stellarium (free, open-source) or a similar app to know which planets are visible tonight. Then find them with your eyes.' },
          { name: 'A weekly cosmic fact', body: 'The distance to Alpha Centauri. The age of the Sun. The diameter of the Milky Way. Memorise one a week.' },
          { name: 'Sketch the night sky', body: 'A simple drawing of what you can see. The hand and the eye learn together.' },
          { name: 'Read one classical or modern astronomy passage weekly', body: 'A page of Ptolemy, of Galileo, of Sagan. Reflect.' },
          { name: 'Learn to navigate by stars (basic)', body: 'How the Pole Star gives you north. How the Southern Cross does the same in the southern hemisphere. A skill our ancestors took for granted.' },
          { name: 'Once a year, see a dark sky', body: 'Travel to a place without light pollution. See the Milky Way. The experience is irreplaceable.' }
        ]
      },
      'reading': {
        title: 'Reading',
        intro: 'Classical sources and modern primers.',
        books: [
          { title: 'The Stars: A New Way to See Them', author: 'H. A. Rey', note: 'A children\'s book that re-drew the constellations to make them recognisable. Adults find it perfect.' },
          { title: 'Almagest', author: 'Claudius Ptolemy (c. 150 AD)', note: 'The great ancient compendium of astronomy. Read selections; understand what the geocentric model achieved and where it broke.' },
          { title: 'De Revolutionibus Orbium Coelestium', author: 'Nicolaus Copernicus (1543)', note: 'The book that moved the Earth from the centre. Read Book I for the proposal.' },
          { title: 'Sidereus Nuncius (The Starry Messenger)', author: 'Galileo Galilei (1610)', note: 'Short and electrifying. Galileo describing what he saw through the new telescope: moons of Jupiter, mountains on the Moon, stars in the Milky Way.' },
          { title: 'Astronomia Nova', author: 'Johannes Kepler (1609)', note: 'Kepler\'s account of his own struggle to derive the laws of planetary motion. Hard going; deeply rewarding.' },
          { title: 'Principia Mathematica', author: 'Isaac Newton (1687)', note: 'The work that united terrestrial and celestial physics. Use a modern annotated edition.' },
          { title: 'Cosmos', author: 'Carl Sagan', note: 'The 20th-century introduction to astronomy as a whole — humane, beautiful, accurate.' },
          { title: 'A Brief History of Time', author: 'Stephen Hawking', note: 'Modern cosmology for the educated lay reader.' },
          { title: 'The Hidden Reality', author: 'Brian Greene', note: 'Modern multiverse cosmology made accessible.' }
        ]
      },
      'masters': {
        title: 'The masters of Astronomy',
        intro: 'A short hall of fame.',
        figures: [
          { name: 'Hipparchus (c. 190–c. 120 BC)', what: 'The greatest ancient astronomer before Ptolemy. Catalogued 850 stars with positions; discovered the precession of the equinoxes; founded trigonometry.' },
          { name: 'Claudius Ptolemy (c. 100–c. 170 AD)', what: 'His Almagest organised all of ancient astronomical knowledge into a coherent geocentric model. The standard astronomical work for 1,400 years.' },
          { name: 'Nicolaus Copernicus (1473–1543)', what: 'The Polish canon who proposed the heliocentric model. His De Revolutionibus appeared in the year of his death.' },
          { name: 'Tycho Brahe (1546–1601)', what: 'The greatest naked-eye observer in history. His precise measurements of planetary positions were the data on which Kepler built his laws.' },
          { name: 'Johannes Kepler (1571–1630)', what: 'Discovered the three laws of planetary motion. His Harmonices Mundi unified astronomy and music in the classical spirit.' },
          { name: 'Galileo Galilei (1564–1642)', what: 'First to use the telescope for astronomy. Discovered the moons of Jupiter, the phases of Venus, the mountains of the Moon. His confrontation with the Church is a key chapter in the history of science.' },
          { name: 'Isaac Newton (1642–1727)', what: 'Unified terrestrial and celestial physics with the law of universal gravitation. The Principia is one of the most consequential books ever written.' },
          { name: 'Edwin Hubble (1889–1953)', what: 'Discovered that the universe is expanding. The size and age of the cosmos as we now know them rest on his work.' },
          { name: 'Carl Sagan (1934–1996)', what: 'Modern populariser, planetary scientist. His Cosmos brought astronomical thinking to a generation.' }
        ]
      }
    }
  },
  {
    id: 'great-books',
    name: 'Great Books',
    short: 'Great Books',
    tagline: 'The two-thousand-year conversation',
    group: 'Beyond the Arts',
    color: '#9f1239',
    colorDeep: '#7f1d1d',
    colorSoft: '#ffe4e6',
    icon: 'books',
    blurb: 'The classical tradition holds that there is a canon — a relatively small group of books that together carry the deepest human conversation about the deepest human questions. Reading them is not a luxury for the educated; it is the formation of an educated person. This tile is your map of the territory.',
    sections: {
      'what-it-is': {
        title: 'What the Great Books are',
        intro: 'In the 1940s, Mortimer Adler and Robert Hutchins at the University of Chicago compiled the Great Books of the Western World — 54 volumes containing 443 works by 74 authors. The list has been argued with ever since. But the idea behind it — that there is a canon worth knowing — has never gone away.',
        principles: [
          { name: 'The canon is a conversation, not a museum', body: 'Plato responds to the pre-Socratics. Aristotle responds to Plato. Aquinas responds to Aristotle. Hobbes responds to Aristotle and Aquinas. Marx responds to Hobbes. The authors are talking to each other across centuries.', why: 'Reading any one of them in isolation is reading half a conversation. The point of the canon is to read enough that you can hear the conversation.' },
          { name: 'Difficulty is part of the value', body: 'A great book is one that rewards re-reading. The first read often leaves you unsure what just happened. The second read shows the structure. The tenth read still teaches something new. Easy books do not have this property.', why: 'Modern reading habits — fast, skimming, instrumental — destroy the capacity for great-book reading. You have to retrain.' },
          { name: 'Read the original, not the summary', body: 'A summary tells you what the book is "about." Only the book itself can give you what the book is. Skipping to summaries gets you the answer without the journey, and the journey is most of the formation.', why: 'A person who has read summaries of Plato has not read Plato. They know facts about Plato. The transformation comes only from the actual reading.' },
          { name: 'A reading plan beats reading whatever', body: 'There are many possible plans. Mortimer Adler\'s 10-year plan. The St. John\'s College curriculum. The Britannica Great Books reading plan. Pick one and stick to it for a year — better than drifting.', why: 'The mind that drifts through reading lists never accumulates the conversation in their head. A plan provides the structure for accumulation.' },
          { name: 'Write as you read', body: 'A commonplace book. Marginalia in the book itself. A weekly written reflection. Adler\'s rules of reading require all of this. Without it, the books pass through you and leave less behind.', why: 'Reading without writing is reception without integration. The integrated mind has chewed; the unintegrated has only consumed.' }
        ]
      },
      'the-path': {
        title: 'The path',
        intro: 'How to actually work through the canon over years.',
        levels: [
          { stage: 'Year 1 — the foundations', items: [
            'Homer — Iliad and Odyssey (Fagles translation)',
            'Plato — Apology, Crito, Phaedo, Republic',
            'Aristotle — Nicomachean Ethics',
            'The Bible — Genesis, Exodus, Job, Psalms, the Gospels',
            'Plutarch — selected Lives'
          ]},
          { stage: 'Years 2–3 — the classical and Christian foundations', items: [
            'Virgil — Aeneid',
            'Cicero — On Duties, On Old Age, On Friendship',
            'Marcus Aurelius — Meditations',
            'Augustine — Confessions, City of God (selections)',
            'Aquinas — Summa Theologiae (selected questions)',
            'Boethius — Consolation of Philosophy',
            'Dante — Divine Comedy (Inferno first, then Purgatorio and Paradiso)'
          ]},
          { stage: 'Years 4–5 — the Renaissance and early modern', items: [
            'Shakespeare — the major plays (Hamlet, Lear, Macbeth, Tempest, etc.)',
            'Cervantes — Don Quixote',
            'Machiavelli — The Prince, Discourses',
            'Montaigne — selected Essays',
            'Bacon — Novum Organum, New Atlantis',
            'Hobbes — Leviathan (selections)',
            'Pascal — Pensées',
            'Locke — Second Treatise of Government'
          ]},
          { stage: 'Years 6–8 — the modern', items: [
            'Hume — An Enquiry Concerning Human Understanding',
            'Adam Smith — The Wealth of Nations (selections)',
            'Kant — Groundwork for the Metaphysics of Morals',
            'Hegel — Phenomenology of Spirit (with a guide)',
            'Marx — selected works',
            'Tolstoy — War and Peace, Anna Karenina',
            'Dostoevsky — Brothers Karamazov, Crime and Punishment',
            'Darwin — Origin of Species',
            'Nietzsche — Beyond Good and Evil, Genealogy of Morals'
          ]},
          { stage: 'Lifelong', items: [
            'Add the eastern traditions — the Analects, Tao Te Ching, Bhagavad Gita, the Buddhist sutras',
            'The 20th century — Heidegger, Wittgenstein, Camus, Solzhenitsyn, Calvino',
            'Re-read the ones that have shaped you most',
            'Read what your favourite authors read'
          ]}
        ]
      },
      'practice': {
        title: 'Practice',
        intro: 'How to actually read the Great Books.',
        items: [
          { name: 'Read every day', body: 'Even 20 minutes. Consistency beats intensity. Over a year, 20 minutes a day is more than 100 hours of reading.' },
          { name: 'Read with a pencil in hand', body: 'Mark passages. Argue in the margins. Underline questions. Adler called this "marking up a book" — the sign of an active reader.' },
          { name: 'Keep a commonplace book', body: 'A notebook in which you copy passages that strike you. Date and source each one. Re-read your own commonplace book monthly.' },
          { name: 'Read in the original when possible', body: 'For Latin and Greek works, your goal is eventually to read them in the original. Even reading a few sentences in Greek alongside the translation changes the experience.' },
          { name: 'Read aloud the great speeches', body: 'Pericles\'s Funeral Oration. Lincoln\'s Second Inaugural. Read them aloud. The mouth catches what the silent eye misses.' },
          { name: 'A weekly written reflection', body: '300–600 words on what you read this week. Not a summary — a response. Argue, agree, connect, question.' },
          { name: 'A monthly book completed', body: 'Aim for one major work each month. Some months it will be one chapter (Aristotle). Other months a whole novel (Dickens).' },
          { name: 'Discuss with one other person', body: 'Find a reading partner. Discuss what you read. Disagree. Iron sharpens iron.' },
          { name: 'Listen to good audiobooks for repeated reads', body: 'Once you have read a great work, listening to it (Librivox, Audible) on walks lets the language soak in further.' },
          { name: 'Re-read the books that struck you most', body: 'Every five years, return to a book that shaped you. You will be a different reader; the book will be a different book.' }
        ]
      },
      'reading': {
        title: 'About reading itself',
        intro: 'Modern guides to reading the canon well.',
        books: [
          { title: 'How to Read a Book', author: 'Mortimer Adler & Charles Van Doren', note: 'The classical art of reading made explicit. The four levels of reading. Read before you tackle the canon seriously.' },
          { title: 'The Great Conversation', author: 'Robert Hutchins', note: 'Volume 1 of the Great Books of the Western World series. The argument for why a canon exists.' },
          { title: 'A Lifetime\'s Reading', author: 'Philip Ward', note: 'A detailed 10-year reading plan covering most of the canon.' },
          { title: 'How to Read Slowly', author: 'James Sire', note: 'Short and useful. The slow attentive reading that great books require.' },
          { title: 'The Western Canon', author: 'Harold Bloom', note: 'Bloom\'s defence of the canon and his lists of essential authors. Pugnacious; worth reading.' },
          { title: 'Books that Build Character', author: 'William Kilpatrick et al.', note: 'A guide to literature that forms moral imagination. For the parent as much as for the reader.' },
          { title: 'A Lifetime of Reading', author: 'David Denby', note: 'A modern critic returns to Columbia\'s Core Curriculum in middle age. Honest about both the rewards and the difficulty.' },
          { title: 'The Best Books', author: 'William Frederic Poole', note: 'A 19th-century list-makers\' book on what to read. The lists have aged variously but the spirit is sound.' }
        ]
      },
      'masters': {
        title: 'A canonical first shelf',
        intro: 'If you were stranded with twelve books — these would be a good twelve.',
        figures: [
          { name: 'Homer — Iliad and Odyssey', what: 'The two foundational epics of Western literature. Read them in the Fagles translation; or Wilson for the Odyssey. The Iliad is about wrath and mortality. The Odyssey is about cunning and homecoming.' },
          { name: 'Plato — Republic', what: 'The deepest single dialogue. On justice, the soul, education, art, the relation of the individual to the state. Bloom translation; or Grube/Reeve.' },
          { name: 'Aristotle — Nicomachean Ethics', what: 'On what makes a good human life. The most influential ethics book in the Western tradition. Sachs translation.' },
          { name: 'The Bible', what: 'The single most influential book in Western history, whether you read it religiously or as literature. Start with Genesis, the Gospel of Mark, Romans.' },
          { name: 'Virgil — Aeneid', what: 'The Roman epic. Fagles translation. The story of Rome\'s mythic founding; a meditation on duty and the cost of empire.' },
          { name: 'Augustine — Confessions', what: 'The first true autobiography in Western literature. A young man\'s record of his own soul. Sheed translation.' },
          { name: 'Dante — Divine Comedy', what: 'The medieval Christian vision in poetry. Hollander or Mandelbaum translations. Inferno first, then Purgatorio and Paradiso.' },
          { name: 'Shakespeare — major plays', what: 'The English-language summit. Begin with Hamlet, Lear, Macbeth, A Midsummer Night\'s Dream, The Tempest.' },
          { name: 'Cervantes — Don Quixote', what: 'The first modern novel. Edith Grossman translation. Funny, sad, deep, exhausting in the best way.' },
          { name: 'Pascal — Pensées', what: 'Fragments by a French mathematician on God, the human condition, the bet on faith. Krailsheimer translation.' },
          { name: 'Tolstoy — War and Peace', what: 'The greatest novel ever written, by many accountings. Pevear-Volokhonsky translation. A summer\'s project.' },
          { name: 'Aurelius — Meditations', what: 'The Stoic emperor\'s private notebook. The book that survives all centuries. Hays translation is the most readable; Long is more accurate.' }
        ]
      }
    }
  },
  {
    id: 'languages',
    name: 'Languages',
    short: 'Languages',
    tagline: 'Latin and Greek, the keys to the canon',
    group: 'Beyond the Arts',
    color: '#b45309',
    colorDeep: '#78350f',
    colorSoft: '#fef3c7',
    icon: 'alpha',
    blurb: 'For two thousand years, an educated person in the West knew Latin. Most also knew Greek. Without these languages, the canon is closed — you read only what someone has translated, and you read it filtered through their choices. This tile is your roadmap into both.',
    sections: {
      'what-it-is': {
        title: 'Why Latin and Greek',
        intro: 'Erasmus did not write in his native Dutch. Newton wrote the Principia in Latin. Calvin wrote in Latin. So did Spinoza, Descartes, Linnaeus. For most of European history, Latin was the international language of all serious thought. Greek was the language of the New Testament, of Plato, of Homer.',
        principles: [
          { name: 'The original is more than the translation', body: 'Every translation is also an interpretation. Plato in English is Plato as filtered by Jowett or by Bloom. Plato in Greek is Plato. The closer you can get to the original, the more you can think with the author rather than with their translator.', why: 'For the great books, the difference is real. Some jokes, puns, rhythms, and arguments simply do not survive translation. You feel the loss when you read both.' },
          { name: 'Learning a classical language re-trains the mind', body: 'Latin and Greek have grammatical structures English mostly lost. The case system. The middle voice. Aspect distinctions in the verb. Learning these stretches the mind\'s capacity for distinction.', why: 'A person who has internalised Latin sees relationships in English sentences they did not see before. The mind that thinks in only one shape thinks one-shapedly.' },
          { name: 'These languages are the bones of Western languages', body: 'About 60% of English words come from Latin (directly or through French). Greek gave us most of our scientific and philosophical vocabulary. Knowing the roots is knowing your own language better.', why: 'A vocabulary built from roots — not from rote memorisation — is deeper and more flexible. A Latinist meets a new word and often knows what it means before looking it up.' },
          { name: 'Reading, not speaking, is the goal', body: 'Unlike modern language learning, classical language learning is aimed at reading. The Spoken Latin movement exists and has its place, but the historical purpose was to read Cicero and Plato.', why: 'This changes the method. Heavy grammar early. Slow translation. Lots of reading. Speaking and writing later if at all.' },
          { name: 'Daily small beats sporadic large', body: '30 minutes a day for three years beats 4 hours on weekends for one year. Consistency builds the patterns into the mind in a way bursts do not.', why: 'Languages are habits more than they are knowledge. Habits require daily reinforcement. Once Latin or Greek becomes a part of how your mind is shaped, it does not need to be remembered — it is.' }
        ]
      },
      'the-path': {
        title: 'The path',
        intro: 'A traditional route for Latin and Greek from beginner to fluent reader.',
        levels: [
          { stage: 'Latin — Beginner (Year 1)', items: [
            'Work through Wheelock\'s Latin or Lingua Latina per se Illustrata (Hans Ørberg) — pick one and finish it',
            '30 minutes daily — vocabulary, grammar, translation passages',
            'Memorise the noun declensions and verb conjugations as tables',
            'By year\'s end: read simple Latin (Caesar\'s Gallic War with a vocabulary)'
          ]},
          { stage: 'Latin — Intermediate (Years 2–3)', items: [
            'Read Caesar (De Bello Gallico) without crutches',
            'Read Cicero (Pro Archia, De Amicitia) — Cicero is the standard for elegant Latin prose',
            'Begin Virgil (Aeneid, Book I)',
            'Latin composition (writing Latin) — Bradley\'s Arnold is the classical textbook'
          ]},
          { stage: 'Latin — Advanced (Years 4+)', items: [
            'Read Virgil\'s Aeneid in full',
            'Read Tacitus, Livy, Horace, Catullus',
            'Read medieval and Renaissance Latin (Aquinas, Erasmus, Newton)',
            'Begin reading at sight — without preparation — and converse with Latinists if you can'
          ]},
          { stage: 'Greek — Beginner (Year 1)', items: [
            'Work through Athenaze (Cambridge) or Mastronarde\'s Introduction to Attic Greek — pick one',
            'Memorise the alphabet, the basic declensions, the present tense',
            'By year\'s end: read simple Greek (the New Testament Gospels with a vocabulary)'
          ]},
          { stage: 'Greek — Intermediate (Years 2–3)', items: [
            'Read the Gospel of John (it is the easiest of the Gospels)',
            'Read Xenophon (Anabasis) — clear classical prose',
            'Begin Plato (Apology, Crito — short and famous)',
            'Memorise the verb conjugations including the aorist and the optative'
          ]},
          { stage: 'Greek — Advanced (Years 4+)', items: [
            'Read Plato\'s Republic in Greek',
            'Read Homer (Odyssey first, then Iliad — Homer\'s dialect is different)',
            'Read the Greek tragedians (Sophocles, Aeschylus)',
            'Read the Greek Fathers (Athanasius, Basil, the Cappadocians)'
          ]}
        ]
      },
      'practice': {
        title: 'Practice',
        intro: 'Daily habits that build classical-language fluency.',
        items: [
          { name: 'Anki or a flashcard app, 15 minutes daily', body: 'Vocabulary acquisition is the rate-limiting step. Use spaced repetition. The Oxford Latin Word List and the Vocabula Greek deck are standard.' },
          { name: 'Translate one sentence daily', body: 'From your current textbook or reader. The act of translation forces every word to be understood.' },
          { name: 'Read a passage aloud', body: 'Even if you do not understand it yet. The mouth gets the sounds. Pronunciation matters (classical Latin, classical or Erasmian Greek).' },
          { name: 'Memorise a Latin or Greek passage a month', body: 'A psalm, a Cicero opening, the Pater Noster. Recite it. The language enters more deeply than any drill achieves.' },
          { name: 'Look at the etymology of one English word daily', body: 'You will discover the Latin or Greek behind almost any abstract English word.' },
          { name: 'Read the same passage in both original and translation', body: 'Compare. Notice what the translator chose. Notice what was lost.' },
          { name: 'A weekly composition (after intermediate level)', body: 'Translate an English paragraph into Latin or Greek. The exercise is hard and irreplaceable.' },
          { name: 'Sing Latin hymns or Greek chants', body: 'Salve Regina, Adeste Fideles, the Greek Kyrie. Music carries the language past resistance.' },
          { name: 'A weekly chunk of reading', body: '15–30 minutes of continuous reading in your current text. Not stopping for every word. Get the sweep.' },
          { name: 'Find a partner or a class', body: 'Online Latin and Greek reading groups exist. Local classics departments often welcome auditors. A regular meeting transforms the discipline.' }
        ]
      },
      'reading': {
        title: 'Reading',
        intro: 'Textbooks, dictionaries, references.',
        books: [
          { title: 'Wheelock\'s Latin', author: 'Frederic Wheelock', note: 'The American standard. Used in most US Latin programs. Solid and finishable.' },
          { title: 'Lingua Latina per se Illustrata', author: 'Hans Ørberg', note: 'The "direct method" textbook — Latin taught entirely in Latin. Beautiful and effective once you adapt.' },
          { title: 'Athenaze', author: 'Maurice Balme & Gilbert Lawall', note: 'Story-based Greek textbook. The Italian edition (Athenaze: Introduzione al Greco Antico) is even better but in Italian.' },
          { title: 'Introduction to Attic Greek', author: 'Donald J. Mastronarde', note: 'The more rigorous Greek textbook. Difficult and excellent.' },
          { title: 'Allen & Greenough\'s New Latin Grammar', author: 'Allen & Greenough', note: 'The standard reference. Free online; keep at your elbow.' },
          { title: 'Smyth\'s Greek Grammar', author: 'Herbert Weir Smyth', note: 'The standard Greek reference. Free online.' },
          { title: 'Oxford Latin Dictionary', author: 'Oxford University Press', note: 'The reference Latin dictionary.' },
          { title: 'Liddell & Scott (LSJ)', author: 'Liddell, Scott & Jones', note: 'The reference Greek dictionary. The "Middle Liddell" is the abridged version for general use.' },
          { title: 'A Latin Grammar', author: 'Charles Bennett', note: 'A short, clear Latin grammar. Free online.' },
          { title: 'A Companion to the Greek Verb', author: 'Various', note: 'The Greek verb system is dense — a separate reference helps.' }
        ]
      },
      'masters': {
        title: 'The masters of Latin and Greek (to read once fluent)',
        intro: 'A short list of authors whose language is so good that reading them in the original is the reward.',
        figures: [
          { name: 'Cicero — the standard of Latin prose', what: 'The Latin everyone aims at. Read his orations (Pro Archia, the Catilinarians) and his philosophical works (De Officiis, De Amicitia, De Senectute).' },
          { name: 'Caesar — the clearest Latin', what: 'De Bello Gallico is famously the first reading for Latin students because the prose is so clean.' },
          { name: 'Virgil — the highest Latin poetry', what: 'The Aeneid is the goal of every Latin reader. The opening — Arma virumque cano — is the most famous opening in Latin literature.' },
          { name: 'Horace — the perfect Latin lyric', what: 'His Odes are dense, allusive, and unsurpassed. Aim to read at least Odes I.5 (the Pyrrha ode) in the original.' },
          { name: 'Tacitus — the densest Latin prose', what: 'Tacitus packs more meaning into fewer words than any other Latin author. Hard but rewarding.' },
          { name: 'Aquinas — medieval Latin at its clearest', what: 'The Summa Theologiae is in straightforward technical Latin once you learn the vocabulary. A bridge into reading medieval theology.' },
          { name: 'Newton — Latin into the modern world', what: 'The Principia (1687) is in Latin because that was still the international language of science.' },
          { name: 'Plato — the standard of Attic Greek', what: 'Apology and Crito are short and accessible; Republic is long and rewarding. The standard for Greek prose.' },
          { name: 'Homer — Greek poetry at the source', what: 'The Iliad and Odyssey are in a different (older) dialect than classical Greek. Worth learning specifically once you have classical Greek.' },
          { name: 'The Gospel of John — the easiest Greek', what: 'Often the first text Greek students read after the textbook. The language is simple; the content is endlessly deep.' },
          { name: 'The Greek tragedians', what: 'Sophocles (Antigone, Oedipus Tyrannus), Aeschylus, Euripides. The summit of Greek drama.' }
        ]
      }
    }
  }
];

window.ART_BY_ID = (id) => window.ARTS.find(a => a.id === id);

window.ART_GROUPS = ['Begin', 'Trivium', 'Quadrivium', 'Beyond the Arts'];
