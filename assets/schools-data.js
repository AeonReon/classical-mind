// schools-data.js — the wisdom schools, appended to the arts array.
// Loaded AFTER arts-data.js so window.ARTS already exists. art.html and
// index.html both include this; each school is the same 5-sub-tile shape as
// the arts, plus an `image` for the photo tile. In-tradition voice; primary
// sources first in every reading list.

window.ARTS.push(
  {
    id: 'platonism',
    name: 'Platonism',
    short: 'The world of Forms',
    tagline: 'The real behind the visible',
    group: 'Schools of Thought',
    color: '#6D4AA7',
    colorDeep: '#4A2E7A',
    colorSoft: '#ECE6F7',
    icon: 'star',
    image: 'assets/schools/platonism.jpg',
    blurb: 'Platonism begins in a single overturning discovery: the world we see with our eyes is not the real world but its shadow. Beyond the shifting, dying things of sense lies a realm of changeless, perfect Forms — Justice itself, Beauty itself, the Good itself — of which every fine thing here is a faint copy. Founded by Plato in the Academy of Athens around 387 BC and carried forward through Plotinus, Augustine, and a thousand years of thought, it teaches that the soul is akin to that higher realm, that it can turn from the senses and ascend to the truth by reason and love, and that this ascent is the whole point of a human life. To do philosophy, for the Platonist, is to remember what the soul has always known and to be led home to the light.',
    sections: {
      'what-it-is': {
        title: 'What Platonism is',
        intro: 'Platonism holds that the objects of our deepest knowledge — the equal, the good, the beautiful, the just — are not found among the changing things of sense but are eternal realities, the Forms, of which sensible things are imperfect images. To know is to grasp these; to live well is to order the soul by them; and the whole of philosophy is the soul\'s turning from the copy to the original, and its ascent toward the Good.',
        principles: [
          { name: 'The Theory of Forms', body: 'For every quality shared by many things — the beauty of a face, a poem, a law — there is one Form, Beauty itself, single and eternal, in which all beautiful things "participate." The Forms are not ideas in our heads but realities more solid than stone; the things we touch are the passing shadows, the Forms the abiding substance.', why: 'Without the Forms there is no fixed truth: everything flows, nothing can be known, and justice is merely whatever the strong call it. The Forms are what make knowledge possible at all, and what let us say a law or a life is not merely different but better.' },
          { name: 'The divided line — degrees of reality', body: 'Plato draws a line in four parts, ascending from images and shadows, to the physical things that cast them, to the mathematical objects reason handles, and at last to the Forms grasped by pure intellect. Each rung is more real and more knowable than the one below; sense gives opinion, intellect gives knowledge.', why: 'Reality is not flat. Once you see that there are degrees of being — that a shadow is less real than a tree, and a tree less real than the Form it copies — you know which way is up, and you can begin the climb from the fleeting to the eternal.' },
          { name: 'The immortal, threefold soul', body: 'The soul is not the body\'s servant but its ruler and its better part, akin to the eternal Forms and, like them, deathless. It has three powers: reason, which should govern; spirit, the seat of courage and honour; and appetite, the many-headed desires. Justice in a soul is each part doing its own work, reason at the helm.', why: 'If the soul is immortal and kin to the Forms, then caring for it is the most important thing you will ever do — more urgent than any gain to the body it briefly wears. And if the soul is threefold, self-mastery is not repression but right order: giving reason its throne.' },
          { name: 'Recollection and the innate', body: 'We do not learn the great truths from outside; we recover them. In the Meno, an untaught slave boy is led by questioning alone to prove a theorem of geometry — drawing out what was in him unseen. Learning, Plato concludes, is recollection: the soul, having beheld the Forms before birth, remembers them when the right question stirs it.', why: 'This is why truth cannot simply be poured into a pupil, and why the teacher\'s art is to ask, not to tell. It also means the truth is already latent in you: philosophy does not import wisdom from abroad but awakens what the soul has always possessed.' },
          { name: 'The Good and the sun', body: 'Above all the Forms stands the Form of the Good, which Plato likens to the sun. As the sun gives things their visibility and their very growth, so the Good gives the other Forms both their being and their intelligibility. It is the source of all truth and all worth, and the final goal of every ascent.', why: 'A philosophy needs a summit, or the climb has no direction. The Good is that summit — the single source from which everything real and everything worth loving descends. To turn the soul toward it is the whole aim of education, and the crown of the philosophic life.' }
        ]
      },
      'the-path': {
        title: 'The path, beginner to advanced',
        intro: 'Plato wrote not treatises but dialogues — dramas of inquiry — and they are best read roughly in the order of the soul\'s own ascent: first the sting of Socratic questioning, then the great middle vision of the Forms, then the harder late reflections. Read slowly; a dialogue is meant to be lived through, not summarised.',
        levels: [
          { stage: 'Beginner', items: [
            'Read the Apology — Socrates on trial for his life — for the portrait of the examined life and why it is worth dying for.',
            'Read the Meno: what is virtue, can it be taught, and the slave-boy proof that learning is recollection.',
            'Read the Euthyphro and Crito — short, sharp, and the model of Socratic definition-hunting.',
            'After each dialogue, try to state the question it asked and where the argument broke down — sit with the puzzle rather than reaching for an answer.'
          ] },
          { stage: 'Intermediate', items: [
            'Read the Symposium: the ladder of love, ascending from a single beautiful body to Beauty itself.',
            'Read the Phaedo — the soul\'s immortality, argued on the day of Socrates\'s death.',
            'Read the Phaedrus for the soul as a charioteer with two horses, and the vision of the Forms beyond the heavens.',
            'Begin the Republic, Books I–IV: justice in the soul and the city, and the threefold soul.'
          ] },
          { stage: 'Advanced', items: [
            'Finish the Republic, Books V–VII: the divided line, the sun, and the allegory of the Cave — the heart of Platonism.',
            'Read the Timaeus for the making of the cosmos by the Craftsman (the Demiurge) after the pattern of the Forms.',
            'Read the harder late dialogues — the Parmenides and the Sophist — where Plato tests and refines the theory of Forms itself.',
            'Turn to Plotinus\'s Enneads, the great flowering of Platonism, and follow the ascent to the One.'
          ] }
        ]
      },
      'practice': {
        title: 'Platonic practices',
        intro: 'Platonism is not only a doctrine but a discipline — a turning of the whole soul from the shadows toward the light. Its exercises train the mind to leave the senses behind and to hold steadily what does not change.',
        items: [
          { name: 'Dialectic — questioning toward truth', body: 'Reason things through in living exchange, as Socrates does: propose, test, refute, refine. Follow the argument wherever it leads, even against yourself. Dialectic is the one method Plato trusts to carry the soul all the way up to the Forms, and it is learned only by doing it.' },
          { name: 'Hunt the definition', body: 'Ask always "what is it itself?" — not examples of courage but courage itself, not just acts but justice itself. When a definition fails, see why, and try again. This relentless pursuit of the one behind the many is the beginning of grasping the Forms.' },
          { name: 'Turn from the senses to the intelligible', body: 'The senses give only the shifting copy; deliberately withdraw attention from sight and sound toward what only the mind can see. Plato calls it the "turning of the soul." Practise thinking about the equal, the good, the circle, apart from any drawn or seen example.' },
          { name: 'Geometry as training for abstraction', body: 'Over the Academy door, tradition says, stood the words "let none ignorant of geometry enter." Study mathematics not for its uses but because it drags the soul from becoming to being — it is the mind\'s first taste of objects that are perfect, changeless, and grasped by thought alone.' },
          { name: 'The ascent of love', body: 'Follow the ladder of the Symposium: love a single beautiful thing, then all beautiful bodies, then beautiful souls, laws, and knowledge, until you glimpse Beauty itself. Rightly directed, desire is not the enemy of philosophy but its wings — the very power that lifts the soul.' },
          { name: 'Contemplation of the Forms', body: 'When the climb has been made, rest the mind on the changeless: dwell on Justice, Beauty, the Good, letting the intellect simply behold. This contemplation (theoria) is, for the Platonist, the highest activity a human being can perform and the nearest we come to the divine.' }
        ]
      },
      'reading': {
        title: 'What to read',
        intro: 'Read Plato himself first — nothing about Plato is a substitute for the dialogues, which are dramas you can enjoy before you can expound them. Start where the questioning is sharpest and shortest, climb to the great middle works, and take up the modern guides only as a rope for the steeper passages.',
        books: [
          { title: 'The Symposium', author: 'Plato (c. 385 BC)', note: 'PRIMARY, and the best place to begin. A dinner party of speeches on love that rises to the vision of Beauty itself. Dramatic, funny, and profound — Platonism at its most seductive. Easy to read, deep to ponder.' },
          { title: 'The Republic', author: 'Plato (c. 375 BC)', note: 'PRIMARY, and the central book. Justice, the ideal city, the threefold soul, and in Books VI–VII the sun, the divided line, and the Cave — the summit of the whole philosophy. Long and demanding; read Books I–IV, then VI–VII with special care.' },
          { title: 'The Phaedo', author: 'Plato (c. 380 BC)', note: 'PRIMARY. Socrates on his last day, arguing for the immortality of the soul and the reality of the Forms. Moving and rigorous at once. Moderately hard — the arguments repay slow reading.' },
          { title: 'The Meno and the Phaedrus', author: 'Plato (c. 385–370 BC)', note: 'PRIMARY. The Meno gives recollection and the slave-boy proof (short and clear, a fine early read); the Phaedrus gives the winged soul and the charioteer (harder, but unforgettable).' },
          { title: 'The Timaeus', author: 'Plato (c. 360 BC)', note: 'PRIMARY, but for later. Plato\'s account of the cosmos shaped by the Craftsman after the eternal pattern — the most influential of the dialogues for a thousand years. Difficult; save it until the middle works are yours.' },
          { title: 'The Enneads', author: 'Plotinus (3rd c. AD)', note: 'PRIMARY (Neoplatonism). The greatest development of Platonism — the ascent from soul to Intellect to the One. Demanding; approach through the introductions to a good selected edition once Plato is familiar.' },
          { title: 'Plato: Complete Works', author: 'ed. John M. Cooper (Hackett)', note: 'ON-RAMP. The standard modern single-volume Plato in clear, reliable translations, with a short introduction to every dialogue. The one book to own for the primary texts.' },
          { title: 'The Cambridge Companion to Plato', author: 'ed. Richard Kraut', note: 'ON-RAMP (deeper). Sound scholarly essays on each side of Plato\'s thought. Read it after a dialogue, not instead of one — the guide comes second, always.' }
        ]
      },
      'masters': {
        title: 'The masters',
        intro: 'Platonism descends from a questioner who wrote nothing to a pupil who wrote everything, and flows on through the schools of Athens, the mystics of Alexandria, and the Fathers of the Church — the longest single current in Western thought.',
        figures: [
          { name: 'Socrates (c. 470–399 BC)', what: 'The questioner who wrote nothing and taught by asking, insisting that the unexamined life is not worth living. Condemned by Athens and dying without fear, he became the model of the philosopher — and the living voice through whom Plato speaks in nearly every dialogue.' },
          { name: 'Plato (c. 428–348 BC)', what: 'The founder. Pupil of Socrates, teacher of Aristotle, and author of the dialogues that gave the West the Forms, the immortal soul, and the ideal of the philosopher-king. He founded the Academy, the first true university, which endured for centuries.' },
          { name: 'The Academy', what: 'The school Plato planted in a grove sacred to the hero Academus, where his followers carried the work forward — the Old Academy elaborating his metaphysics, the later Academy turning to a searching scepticism. From it philosophy took its very name of an institution and a life shared in common.' },
          { name: 'Plotinus (c. 204–270 AD)', what: 'The founder of Neoplatonism and, after Plato himself, the greatest of the tradition. In the Enneads he mapped the descent of all things from the One, through Intellect and Soul, and the mystic ascent by which the soul returns to its source. He raised Platonism to its highest pitch.' },
          { name: 'Augustine of Hippo (354–430 AD)', what: 'The Church Father who read the Platonists on his way to Christianity and never left them behind. From them he took the ascent of the soul, the reality of the eternal, and the turning inward to find the truth — carrying Platonism into a thousand years of Christian thought.' }
        ]
      }
    }
  },

  {
    id: 'aristotle',
    name: 'Aristotelianism',
    short: 'The golden mean',
    tagline: 'Reason, virtue, and the middle way',
    group: 'Schools of Thought',
    color: '#B4670F',
    colorDeep: '#8A4E0A',
    colorSoft: '#F6E6CF',
    icon: 'scales',
    image: 'assets/schools/aristotle.jpg',
    blurb: 'Aristotle of Stagira (384–322 BC) studied twenty years under Plato, tutored Alexander the Great, and founded his own school in the Lyceum, whose members walked as they debated and so were called the Peripatetics. His philosophy begins not in a heaven of Forms but here, in the world we can see, touch, and reason about: every substance has a nature and an end, and the good of each thing is the full flowering of what it is. For a human being — the rational and political animal — that flowering is eudaimonia, a whole life lived well by the steady exercise of reason and virtue. This is not a doctrine to admire from afar but a formation to undergo, for we become just by doing just acts and brave by doing brave ones.',
    sections: {
      'what-it-is': {
        title: 'What Aristotelianism is',
        intro: 'Aristotle holds that everything that exists has a nature — a characteristic activity it is for — and that its good lies in performing that activity excellently. To understand anything, from a seed to a city to a soul, is to grasp its end. And the end of a human life, pursued by no other means, is happiness: not pleasure or honour, but the soul\'s own activity in accordance with virtue, sustained across a complete life.',
        principles: [
          { name: 'Eudaimonia and the function argument', body: 'Every craft and inquiry aims at some good, and there must be one good we seek for its own sake and never for the sake of anything further: this Aristotle calls eudaimonia, the flourishing of a whole life. He fixes what it is by asking after the human function (ergon) — the activity that is ours alone. Plants live, animals sense, but reason is proper to man; so the human good is the activity of the soul in accordance with reason, and with the excellence proper to reason.', why: 'This turns "what is the good life?" from a matter of taste into a question with a real answer, grounded in what a human being actually is. You need not guess at happiness or borrow another\'s idea of it — you can reason out the life that fulfils your own nature.' },
          { name: 'Virtue is a mean between extremes', body: 'Moral virtue is a settled disposition to choose the mean relative to us, as the person of practical wisdom would determine it. Courage stands between cowardice and rashness; generosity between meanness and waste; proper pride between servility and vanity. The mean is not a bland midpoint but the precise right amount — the right feeling, toward the right person, at the right time, in the right way.', why: 'It gives virtue a shape you can aim at. When a passion pulls you, you can ask which extreme you tend toward and lean deliberately against it. And it dissolves the false choice between suppressing feeling and being ruled by it: the good man feels rightly.' },
          { name: 'The four causes', body: 'To know a thing fully is to know its four causes: the material (what it is made of), the formal (what it is — its defining structure), the efficient (what brought it about), and the final (that for the sake of which it exists, its end). A statue is bronze (material), the shape of Hermes (formal), made by the sculptor (efficient), for adornment (final). The final cause is first in intelligibility: nature does nothing in vain.', why: 'It is a complete method of understanding. Modern inquiry often stops at matter and mechanism; Aristotle insists you have not truly explained a thing until you can say what it is for. Recover the question of purpose and the world becomes intelligible again, not a heap of accidents.' },
          { name: 'Potentiality and actuality', body: 'Everything that changes moves from potentiality (dynamis) to actuality (energeia). The acorn is potentially an oak; the learner is potentially wise; the block of marble is potentially the statue. Actuality is prior to potentiality — the oak explains the acorn, not the reverse — for the fully realised form is the end toward which the potential strives.', why: 'This is how Aristotle answers the ancient puzzle of change without dissolving into flux or freezing into changeless Forms. And it names your own condition: you are a bundle of potentials, and to live well is to bring the highest of them — reason, virtue — from mere capacity into full and habitual act.' },
          { name: 'Practical wisdom (phronesis)', body: 'Moral virtue disposes you to the right end; practical wisdom (phronesis) discerns the right means and the right act in the particular case, where no rule reaches all the way down. It is not cleverness, which serves any end, nor is it the theoretical wisdom that contemplates eternal truths — it is the reasoned capacity to act well concerning what is good for a human being. Virtue and phronesis cannot be had apart: you cannot be truly good without practical wisdom, nor practically wise without being good.', why: 'Ethics can never be reduced to a rulebook, because life presents endless particulars a rule cannot foresee. Phronesis is the trained perception that sees, here and now, what justice or courage actually requires — the faculty a mature moral agent must cultivate above all.' }
        ]
      },
      'the-path': {
        title: 'The path, beginner to advanced',
        intro: 'Aristotle himself insists you begin with ethics and politics — the practical philosophy that forms character — and only then ascend to the harder logical and metaphysical works. He warns that the young are poor students of ethics, not for lack of wit but for lack of experience: the path asks a serious life as much as a serious mind.',
        levels: [
          { stage: 'Beginner', items: [
            'Read the Nicomachean Ethics — begin here, as Aristotle intends. Books I (happiness), II (virtue as a mean), and III (choice and courage) are the heart.',
            'Grasp the function argument and the doctrine of the mean cold, and test them against your own habits and feelings.',
            'Read the Ethics on friendship (Books VIII–IX) — the fullest ancient account of what friends are for.',
            'Take a single virtue — say courage or generosity — and locate the two extremes you personally lean toward.'
          ] },
          { stage: 'Intermediate', items: [
            'Read the Politics — for Aristotle, ethics is completed in politics, since man is by nature a political animal and the good life is lived in a community.',
            'Study his account of the constitutions and of the polis as existing for the sake of living well, not merely living.',
            'Read the Rhetoric and Poetics — reason applied to persuasion and to the tragic imitation of action.',
            'Return to the Ethics on pleasure and on contemplation (Book X) — the crown of the argument, and its most demanding turn.'
          ] },
          { stage: 'Advanced', items: [
            'Take up the Organon — the logical works, above all the Categories, On Interpretation, and the Prior and Posterior Analytics, where the syllogism and the theory of demonstration are founded.',
            'Read the Physics for the four causes, nature, motion, and the unmoved mover reached at its end.',
            'Read De Anima (On the Soul) — the soul as the form of a living body, and the ascent to the intellect.',
            'Crown the study with the Metaphysics — being as being, substance, actuality, and the divine thought that thinks itself.'
          ] }
        ]
      },
      'practice': {
        title: 'Aristotelian practices',
        intro: 'Aristotle did not write exercises as the Stoics did, but his philosophy is thoroughly practical: virtue is acquired by doing, wisdom by attending to particulars. These are the disciplines his teaching asks of anyone who would live by it.',
        items: [
          { name: 'Find the mean in one emotion', body: 'Take a single passion — anger will do — and study your own tendency. Do you flare too easily, or swallow wrongs you should resist? Aim deliberately for the mean: angry at the right things, toward the right people, for the right length of time. Aristotle grants that hitting the mean is hard, like finding the centre of a circle; the work is to keep aiming.' },
          { name: 'Habituate by repeated action', body: 'We become just by doing just acts, temperate by doing temperate ones, brave by facing danger. Choose the virtuous act again and again, especially when feeling resists, until the doing is no longer a strain but a settled disposition. Character is not decided in a single grand choice but laid down, act by act, like a path worn into grass.' },
          { name: 'Observe nature and particulars closely', body: 'Aristotle dissected shellfish and catalogued constitutions; he trusted the world to instruct him. Practise his empiricism: look hard at the actual case before you before you reach for a theory. The universal is real, but you meet it only through the particular, and the trained eye that has seen many particulars sees rightly.' },
          { name: 'Reason by syllogism', body: 'Train the mind in valid inference: from true premises, drawn together, a conclusion follows of necessity. All men are mortal; Socrates is a man; therefore Socrates is mortal. Learn to test an argument for its form apart from its matter — to see when a conclusion is truly compelled and when it only seems to be. This is the discipline the whole Organon exists to give.' },
          { name: 'Cultivate friendship of the good', body: 'Aristotle ranks friendship among the greatest goods and distinguishes three kinds: for use, for pleasure, and — highest and rarest — the friendship of the good, who love each other for their virtue and wish each other well for the other\'s own sake. Seek such friends and be such a friend; here virtue is both practised and completed, for the good man needs friends on whom to bestow his goodness.' },
          { name: 'Refer every action to its end', body: 'Before acting, ask what this is for, and what that in turn is for, until you reach the final end — happiness — that you seek for its own sake. An action ordered to no end, or to a false one, is wasted motion. To deliberate well is to see the whole chain of purposes and to choose the means that truly serve the good you are ultimately after.' }
        ]
      },
      'reading': {
        title: 'What to read',
        intro: 'Read Aristotle himself, and in the order he prescribes: the Ethics first, for it forms the reader before it informs him, then outward and upward to the Politics and the theoretical works. His prose is terse, sometimes only lecture notes — steep, but never obscure for its own sake. Keep a modern guide beside you if the going is hard.',
        books: [
          { title: 'Nicomachean Ethics', author: 'Aristotle (4th c. BC)', note: 'PRIMARY, and where everyone should begin. His masterwork on happiness, virtue, and the good life — demanding but repaying, and closer to a manual for living than to abstract theory. The Ross translation (revised by Brown) is standard; Irwin\'s is precise with fuller notes.' },
          { title: 'Politics', author: 'Aristotle (4th c. BC)', note: 'PRIMARY. The natural sequel to the Ethics: man as the political animal, and the polis as what exists for the good life. Read second. Moderately hard; the opening books on the household and the nature of the city are the way in.' },
          { title: 'The Organon (Categories, On Interpretation, Prior and Posterior Analytics, Topics)', author: 'Aristotle (4th c. BC)', note: 'PRIMARY. The founding works of logic — the syllogism and the theory of demonstration. Genuinely difficult and technical; approach only after the Ethics and with a guide. The Categories and On Interpretation are the gentlest entry.' },
          { title: 'Physics and Metaphysics', author: 'Aristotle (4th c. BC)', note: 'PRIMARY, and the summit. The Physics gives the four causes, nature, and motion; the Metaphysics treats being as being, substance, and the unmoved mover. The hardest of all — read last, slowly, and not alone. Metaphysics Books I, VII, and XII are the essential chapters.' },
          { title: 'De Anima (On the Soul)', author: 'Aristotle (4th c. BC)', note: 'PRIMARY. The soul as the form of a living body — the bridge between his biology and his metaphysics, and the ground of his account of perception and thought. Moderately hard; best read after the Physics.' },
          { title: 'Aristotle: A Very Short Introduction', author: 'Jonathan Barnes', note: 'ON-RAMP. The clearest brief map of the whole system by a leading scholar — a hundred pages that make the primary texts far easier to enter. For a fuller guide, Mortimer Adler\'s Aristotle for Everybody rebuilds the philosophy in plain terms.' }
        ]
      },
      'masters': {
        title: 'The masters',
        intro: 'No philosophy has been so continuously alive. From the Lyceum it passed to the Arab world, was carried back into Latin Christendom, and became the framework of Western thought for a thousand years — Dante simply called Aristotle "the master of those who know."',
        figures: [
          { name: 'Aristotle (384–322 BC)', what: 'The founder, called simply "the Philosopher" for centuries after. Pupil of Plato, tutor of Alexander, founder of the Lyceum. He wrote across logic, physics, biology, psychology, ethics, politics, rhetoric, and poetics, and founded whole sciences at a stroke. The most encyclopaedic mind of antiquity.' },
          { name: 'Theophrastus (c. 371–287 BC)', what: 'Aristotle\'s pupil and chosen successor as head of the Lyceum. He carried on the master\'s empirical spirit, above all in botany, which he effectively founded, and in his sharp Characters, a gallery of moral types. He kept the school and the works alive into the next generation.' },
          { name: 'Averroes and Avicenna (11th–12th c. AD)', what: 'The great Islamic Aristotelians who preserved and deepened the philosophy when the Latin West had largely lost it. Avicenna (Ibn Sina) reworked the metaphysics; Averroes (Ibn Rushd) wrote commentaries so authoritative he was known in Europe simply as "the Commentator." Through them Aristotle returned to the West.' },
          { name: 'Thomas Aquinas (1225–1274)', what: 'The great Christian Aristotelian, who wove Aristotle\'s philosophy into Catholic theology so thoroughly that the two seemed made for each other. In the Summa Theologiae he took the function argument, the virtues, and the four causes up into a vision of God as the final end of all things. He calls Aristotle simply "the Philosopher" on every page.' },
          { name: 'The enduring tradition', what: 'Aristotle\'s reach never ended: his logic ruled the schools until the modern age, his ethics of virtue and character has been recovered in our own time by thinkers such as Alasdair MacIntyre and Elizabeth Anscombe, and his questions — what is a thing for, what is a life for — remain the questions philosophy cannot finally escape. To study him is to enter the longest living conversation in Western thought.' }
        ]
      }
    }
  },

  {
    id: 'epicureanism',
    name: 'Epicureanism',
    short: 'The garden',
    tagline: 'Pleasure rightly understood',
    group: 'Schools of Thought',
    color: '#3E8E5A',
    colorDeep: '#276B41',
    colorSoft: '#DDF0E4',
    icon: 'leaf',
    image: 'assets/schools/epicureanism.jpg',
    blurb: 'Founded by Epicurus around 307 BC in a garden on the edge of Athens — from which the school took its name, the Garden — Epicureanism holds that pleasure is the beginning and the end of the happy life, the good we recognise from the moment we are born. But hear the doctrine before you judge it: the pleasure meant is not luxury or excess, which bring their own pains, but the calm of a mind free from fear (ataraxia) and a body free from want (aponia). To reach that calm we need very little — plain food, a few true friends, and a right understanding of nature that lifts from us the two great terrors, the fear of the gods and the fear of death. Live in accordance with these, and you may be as happy as a god among men.',
    sections: {
      'what-it-is': {
        title: 'What Epicureanism is',
        intro: 'Epicurus taught that nature herself shows us the good: every creature, from birth, seeks pleasure and shuns pain. The whole of his philosophy is the careful, measured pursuit of pleasure rightly understood — not the piling-up of sensations, but the steady, sober condition of a mind and body at peace, which is reached by wanting little and fearing nothing.',
        principles: [
          { name: 'Pleasure is the natural good', body: 'Pleasure is the first good, known to us before all argument, and pain the first evil — this we learn not from reasoning but from feeling, as every newborn animal does. Yet the highest pleasure is not motion and stimulation but rest: ataraxia, freedom of the mind from disturbance, and aponia, freedom of the body from pain. When these are present, and no want gnaws at us, the storm of the soul is stilled and we lack nothing needed for a complete and happy life.', why: 'If you mistake pleasure for luxury, you will chase it endlessly and never arrive, for appetite fed grows larger. But if you see that the goal is the calm that comes when pain and fear are absent, then the good life stops receding before you — it is available now, with what you already have.' },
          { name: 'The classification of desires', body: 'Not all desires are equal, and the whole art of living well begins with sorting them. Some are natural and necessary — food, drink, shelter, safety, friendship — and these are easily met. Some are natural but not necessary, like rich food or fine wine: pleasant, but the plain kind serves as well. And some are neither natural nor necessary — wealth beyond need, fame, power, the crown — and these are empty, planted in us by false opinion, and can never be satisfied.', why: 'Anxiety and restlessness come almost entirely from the vain desires, which are boundless and so can never be filled. Learn to tell them apart and to answer only the natural and necessary, and you find that nature\'s wealth is small and easily won, while the wealth demanded by empty opinion runs off to infinity.' },
          { name: 'The fourfold cure (tetrapharmakos)', body: 'Epicurus compressed the whole medicine of the soul into four remedies: God is nothing to fear; death is nothing to us; what is good is easy to get; and what is dreadful is easy to endure. This is the philosophy carried like a physician\'s kit — four short sentences that, held ready, dissolve the fears that spoil a human life.', why: 'Philosophy that cannot heal the soul is, Epicurus said, as empty as medicine that cannot heal the body. The fourfold cure is his prescription: memorise it, and you carry the antidote to the deepest human terrors in a form small enough to recall at the moment of need.' },
          { name: 'Death is nothing to us', body: 'Everything, soul included, is made of atoms, and at death those atoms simply disperse — there is no one left to be harmed, no afterlife of punishment to dread. Where death is, we are not; where we are, death is not. So death, the most frightening of evils, is nothing to us, since it removes the very self that could suffer it.', why: 'The fear of death poisons every pleasure while we live, casting its shadow forward over all our days. Removing it does not make us reckless but free: understanding that we shall not be there to lose anything, we cease grasping at more life and learn instead to make full and grateful use of the life we have.' },
          { name: 'Friendship is the greatest safeguard', body: 'Of all the things wisdom provides for a happy life, Epicurus said, by far the greatest is the possession of friendship. In the Garden, friends lived plainly and thought together as equals; friendship was prized above almost every other good, as both a deep pleasure in itself and the surest shelter against the accidents of fortune.', why: 'A life aimed at tranquillity is not a life of cold isolation. We are safest and most at peace not behind walls of wealth but among friends we trust, whose goodwill outlasts changing circumstance. The confidence that we are not alone does more to guard our happiness than any fortune could.' }
        ]
      },
      'the-path': {
        title: 'The path, beginner to advanced',
        intro: 'Epicurus wrote for use, and left short letters meant to be learned by heart. Begin with the compact teachings, memorise the cure, then read the fuller physics that gives the doctrines their ground.',
        levels: [
          { stage: 'Beginner', items: [
            'Read the Letter to Menoeceus — a few pages that lay out the whole ethics: pleasure, the sorting of desires, and the freedom from fear.',
            'Memorise the fourfold cure (tetrapharmakos) and recall it when fear or craving stirs.',
            'Learn to sort each desire you feel: natural and necessary, natural but not necessary, or empty.',
            'Read the Principal Doctrines (Kyriai Doxai) — forty short maxims, the school\'s creed in miniature.'
          ] },
          { stage: 'Intermediate', items: [
            'Read the Vatican Sayings for the further aphorisms on friendship, prudence, and the untroubled life.',
            'Practise gratitude for the plain things — bread, water, a friend\'s company — until their sufficiency is felt, not just believed.',
            'Deliberately go without a natural-but-unnecessary luxury for a time, to prove how little you truly need.',
            'Read the Letter to Herodotus for the outline of the atomist physics that underpins the ethics.'
          ] },
          { stage: 'Advanced', items: [
            'Read Lucretius, On the Nature of Things (De Rerum Natura) — the full physics as poetry, and the great cure for the fear of death.',
            'Read the Letter to Pythocles on celestial phenomena, and see why understanding nature is offered as therapy, not idle science.',
            'Study Philodemus and the Herculaneum papyri for how the later Garden taught frank speech, friendship, and the management of anger.',
            'Test the doctrine where it bites — in loss, in illness, in the fear of dying — and keep the tranquillity you have learned to name.'
          ] }
        ]
      },
      'practice': {
        title: 'Epicurean practices',
        intro: 'Epicurus called philosophy an activity that, by arguments and reasonings, secures the happy life — and gave it exercises to be done, not merely contemplated. None asks belief you have not tested; all can be begun today.',
        items: [
          { name: 'Sort the desire', body: 'When a want arises, stop and name it: is it natural and necessary, natural but not necessary, or empty — neither natural nor necessary? Answer the first freely, take the second lightly, and let the third go. Most of our unrest lives in that third kind, and naming it there begins to loosen its grip.' },
          { name: 'Recite the fourfold cure', body: 'Carry the four remedies ready: God is nothing to fear; death is nothing to us; the good is easy to get; the dreadful is easy to endure. Repeat them at the moment of fear, as a physician reaches for the right medicine. A maxim recalled in time does the work of a whole argument.' },
          { name: 'Gratitude for simple things', body: 'Sit before plain bread and water and taste them as if for the first time — Epicurus said that he who is not satisfied with a little is satisfied with nothing. Deliberately savour what is already sufficient, and you starve the appetite that always wants more.' },
          { name: 'Cultivate friendship', body: 'Tend your friendships as the chief work of a happy life. Share a plain meal, speak frankly and kindly, remember absent friends with pleasure. The Garden was built of such company; keep your own garden of a few true friends, and you hold the greatest of nature\'s goods.' },
          { name: 'Meditate on your mortality', body: 'Turn the thought of death over calmly until it loses its terror: where you are, death is not; where death is, you are not. Held this way, the memory of death does not darken the day but clears it, returning you to the life in front of you to be lived and enjoyed now.' },
          { name: 'Live plainly, on nature\'s measure', body: 'Keep your wants near what nature asks and easily gives — simple food, shelter, safety, friends. Nature\'s wealth is small and quickly won; the wealth of empty opinion runs off to infinity. Choosing the small measure, you buy back the peace that endless striving steals.' }
        ]
      },
      'reading': {
        title: 'What to read',
        intro: 'Read Epicurus\'s own words first — they survive as short letters and collected maxims, preserved by Diogenes Laërtius — then Lucretius\'s great poem, and only then the modern guides if the ancients prove steep.',
        books: [
          { title: 'Letter to Menoeceus', author: 'Epicurus (early 3rd c. BC)', note: 'PRIMARY, and the place to begin. A few pages that state the whole ethics — pleasure rightly understood, the sorting of desires, freedom from the fear of the gods and of death. Preserved in Diogenes Laërtius, Lives, Book X; easy and clear.' },
          { title: 'Principal Doctrines (Kyriai Doxai) and Vatican Sayings', author: 'Epicurus', note: 'PRIMARY. Forty short maxims (the Doctrines) plus a further collection (the Vatican Sayings) — the creed of the Garden in aphorism. Short, quotable, meant to be memorised. Also preserved in Diogenes Laërtius, Book X.' },
          { title: 'Letter to Herodotus', author: 'Epicurus', note: 'PRIMARY, harder. A compact summary of the atomist physics — atoms, void, and the soul — written as a memorandum. Read once the ethics has taken hold; dense but the ground of everything else.' },
          { title: 'Letter to Pythocles', author: 'Epicurus', note: 'PRIMARY, specialised. On celestial and weather phenomena — its purpose is therapeutic: to show that the heavens obey natural causes, so they need not be feared. Read for why Epicurus studies nature at all. (Its authenticity is debated, but it belongs to the school.)' },
          { title: 'On the Nature of Things (De Rerum Natura)', author: 'Lucretius (1st c. BC)', note: 'PRIMARY. The full Epicurean system rendered as sublime Latin poetry — atoms, the mortality of the soul, and the great argument against fearing death. Longer and demanding, but the richest single source; a good prose translation makes it approachable.' },
          { title: 'The Swerve, and modern introductions (Warren, Wilson)', author: 'Stephen Greenblatt; the Cambridge Companion; Catherine Wilson', note: 'ON-RAMP. Greenblatt\'s The Swerve tells how Lucretius was rediscovered and reshaped the world; Catherine Wilson\'s work rebuilds Epicureanism as a livable modern ethic. Read these if the primary texts feel scattered or steep.' }
        ]
      },
      'masters': {
        title: 'The masters',
        intro: 'Epicureanism runs from a garden outside Athens to a Roman poet and a villa at Herculaneum — a school held together less by succession than by friendship and the memory of its founder.',
        figures: [
          { name: 'Epicurus (341–270 BC)', what: 'The founder. He bought a garden on the edge of Athens and there gathered a community of friends — including women and slaves, unusually for the age — to live plainly and philosophise. He wrote voluminously, but only the letters, the maxims, and fragments survive. His followers honoured his birthday for centuries.' },
          { name: 'Metrodorus of Lampsacus (c. 331–278 BC)', what: 'Epicurus\'s closest companion and most gifted pupil, so bound to the master that they were spoken of together. He died before Epicurus, who provided for his children in his will. The model of the Epicurean friend, in whom the doctrine of friendship was lived out.' },
          { name: 'Lucretius (c. 99–55 BC)', what: 'The Roman poet who, three centuries on, cast the whole system into the grand hexameters of De Rerum Natura — to free his readers from the fear of the gods and of death. We know almost nothing of his life, but the poem carried Epicureanism to Rome and, once rediscovered, into the modern world.' },
          { name: 'Philodemus of Gadara (c. 110–35 BC)', what: 'Philosopher and poet who brought Epicureanism to Roman high society and taught in the Bay of Naples. His works, charred and buried at the Villa of the Papyri in Herculaneum, are being recovered from the scrolls — our fullest window into how the later Garden actually taught frankness, friendship, and the cure of anger.' },
          { name: 'The Garden community and its revival', what: 'More than any single successor, it was the Garden itself that carried the school — a network of friends living the doctrine, corresponding across the Mediterranean, and keeping the founder\'s memory for some seven centuries. Buried by early Christianity, Epicureanism was reawakened in the Renaissance and Enlightenment, shaping thinkers from Gassendi to Jefferson.' }
        ]
      }
    }
  },

  {
    id: 'cynicism',
    name: 'Cynicism',
    short: 'Live by nature',
    tagline: 'Freedom through wanting little',
    group: 'Schools of Thought',
    color: '#8A7A5E',
    colorDeep: '#5C4F3B',
    colorSoft: '#EDE7DA',
    icon: 'sun',
    image: 'assets/schools/cynicism.jpg',
    blurb: 'Begun by Antisthenes, a companion of Socrates, and made unforgettable by Diogenes of Sinope — the man who lived in a storage jar, owned almost nothing, and told Alexander the Great to step out of his sunlight — Cynicism is the shortest road to virtue and the boldest. Its wager is simple: nature has made the good life easy, and it is custom (nomos) that has made it hard, burying us under possessions, offices, reputations, and fears we were never meant to carry. The Cynic strips all of it away, trains his body and will to want little, and so becomes free where kings are enslaved. Not a doctrine to be discussed but a life to be lived, in the open, in plain sight.',
    sections: {
      'what-it-is': {
        title: 'What Cynicism is',
        intro: 'The Cynics taught that virtue is the only good and that it consists in living according to nature rather than convention. Everything custom prizes — wealth, status, comfort, reputation — is at best indifferent and at worst a chain. The Cynic does not argue this in a lecture hall; he demonstrates it with his life, poor, hardened, unashamed, and free.',
        principles: [
          { name: 'Nature against convention (physis over nomos)', body: 'The Cynic draws a hard line between what nature requires and what mere custom (nomos) has piled on top of it. Hunger, cold, and death are natural; shame at eating in the marketplace, the craving for gold, the terror of low birth are not — they are inherited opinions we mistook for facts. Diogenes tested every custom against nature and threw out whatever failed.', why: 'Most of what torments us is not real necessity but convention we never chose to examine. Trace a fear or a want back to its root, and if it is only custom, you are free to set it down — and much of the weight of living falls away with it.' },
          { name: 'Virtue is the only good, and it is shown in deeds', body: 'Like their Socratic parent, the Cynics held that virtue alone is good, vice alone is evil, and all else is indifferent. But they added a sharpness Socrates lacked: virtue is not talked into being, it is done. Diogenes had contempt for clever argument that changed no one\'s life; he taught by acting, by hardship borne in public, by the plain example of a man who needed nothing.', why: 'A philosophy you can only recite is worthless. If the good is virtue and virtue is action, then the test of every idea is whether you can live it today, in your own body, in the street — not whether you can defend it in words.' },
          { name: 'Self-sufficiency (autarkeia)', body: 'The Cynic aims to be autarkes — sufficient unto himself, owing his contentment to nothing outside his own character. Diogenes threw away his cup on seeing a child drink from cupped hands, glad to be taught he still carried something superfluous. The fewer the props, the fewer the ways fortune can strike you.', why: 'Every possession, honour, or comfort you depend on is a handle by which the world can seize and shake you. The more you can do without, the less there is to lose, and the calmer you become — the beggar who needs nothing is richer than the king who needs everything.' },
          { name: 'Training the will (askesis)', body: 'Freedom is not merely seen, it is earned by exercise. The Cynic trains like an athlete: embracing statues in winter, rolling in hot sand in summer, going hungry by choice, so that when hardship comes unbidden it finds him already strong. Askesis of the soul and of the body are one discipline; the toil (ponos) is the whole point, not a means to some soft reward.', why: 'You cannot think yourself immune to loss and pain — you have to practise it. Voluntary hardship rehearses the involuntary kind, so that poverty, cold, and contempt lose their power to frighten you before they ever arrive.' },
          { name: 'Fearless speech (parrhesia)', body: 'The Cynic speaks the plain truth to anyone — beggar or emperor — without flattery and without fear. Diogenes mocked the powerful to their faces and let Alexander know that a king who conquers the world but not himself is the poorer man. This bluntness was not rudeness for its own sake but freedom made audible: the man who wants nothing from you has no reason to lie to you.', why: 'Fear and flattery go together; we soften the truth to protect our comforts and our standing. Want nothing from anyone and you can finally speak straight — and speaking straight is itself a discipline that keeps you honest with yourself.' }
        ]
      },
      'the-path': {
        title: 'The path, beginner to advanced',
        intro: 'The Cynics wrote little, and almost none of it survives, so the school is learned sideways — first through the vivid anecdotes (chreiai) that carried their teaching, then through the tradition they seeded in Stoicism, and finally by taking up the training itself. The record is fragmentary; read it as a portrait built from many small stones.',
        levels: [
          { stage: 'Beginner', items: [
            'Read Diogenes Laërtius, Lives of the Eminent Philosophers, Book VI — the single richest source, telling of Antisthenes, Diogenes, Crates, and Hipparchia through their sayings and deeds.',
            'Learn to read a chreia rightly: each anecdote (the lamp in daylight, the cup thrown away, "stand out of my sun") is a compressed argument — sit with what it asks of you, not just its wit.',
            'Take one custom you obey without thinking and ask, as Diogenes would: is this nature, or only convention?',
            'Begin the simplest exercise — go without one small comfort on purpose, and watch how little you actually needed it.'
          ] },
          { stage: 'Intermediate', items: [
            'Read Dio Chrysostom\'s Discourses on Diogenes (the fourth especially, on kingship and tyranny) — a later writer keeping the Cynic voice alive.',
            'Read the Cynic Epistles — letters written in the name of Diogenes and Crates by later hands; not authentic, but the clearest surviving statement of the Cynic programme.',
            'Practise autarkeia in earnest: audit your possessions and dependencies, and shed what only convention says you need.',
            'Practise parrhesia in small: say the plain true thing where you would normally flatter or stay silent, and notice the fear that rises.'
          ] },
          { stage: 'Advanced', items: [
            'Read Epictetus, Discourses III.22, "On the Calling of a Cynic" — the deepest ancient account of the Cynic as a philosopher sent by nature to wake others, and of the hardness the calling demands.',
            'Trace the line into Stoicism: Diogenes taught Crates, Crates taught Zeno, and the Stoa is Cynicism given a system and a softer edge — read the two schools against each other.',
            'Take up sustained askesis: real voluntary hardship over time — cold, hunger, plain fare, the loss of comfort — not as stunt but as training, until the fear of these things loosens.',
            'Live the truth in public where it costs you something — hold to nature over convention in the one place your reputation would rather you did not.'
          ] }
        ]
      },
      'practice': {
        title: 'Cynic practices',
        intro: 'Cynicism is training (askesis) before it is anything else — a set of hard, plain exercises meant to be done, not admired. None require agreement in advance; each proves itself in the doing.',
        items: [
          { name: 'Voluntary hardship', body: 'Choose the toil (ponos) on purpose, as Diogenes embraced statues in winter: take the cold shower, the long walk in bad weather, the hard bed. You are rehearsing involuntary hardship so it cannot ambush you, and discovering that your body is far tougher than your comfort had let you believe.' },
          { name: 'Strip away a possession', body: 'Go through what you own and give away or discard the things you keep only because one is "supposed to." Diogenes threw away his cup on seeing a child drink from its hands. Each thing released is one fewer handle the world has on you, and the lightness is immediate.' },
          { name: 'Go without a comfort deliberately', body: 'Pick one thing you lean on — coffee, a soft chair, the phone, praise — and set it down for a day or a week. Not forever, and not as punishment: as a test of whether it commands you. What you can do without cannot enslave you.' },
          { name: 'Speak the plain truth', body: 'Once today, where you would normally soften, flatter, or stay quiet to protect your standing, say the plain true thing instead. This is parrhesia in miniature. Watch the fear it stirs — that fear marks exactly where convention still has hold of you.' },
          { name: 'Question a custom you obey unthinkingly', body: 'Take one habit of manner, dress, ambition, or shame that you follow without asking why, and put Diogenes\'s question to it: is this nature, or only nomos? You need not break it — but drag it into the light and decide freely whether to keep it.' },
          { name: 'Need less today', body: 'Set the aim, each morning, of wanting one thing less than you did yesterday — one fewer craving fed, one fewer dependency indulged. Autarkeia is not reached in a leap but built by this daily subtraction, until contentment rests on almost nothing outside yourself.' }
        ]
      },
      'reading': {
        title: 'What to read',
        intro: 'The Cynics left almost no books of their own, so the school survives in fragments, sayings, and the reports of others. Read the primary record first — knowing it is second-hand and uneven — then let the modern historians and anthologies assemble the picture the ancients left in pieces.',
        books: [
          { title: 'Lives of the Eminent Philosophers, Book VI', author: 'Diogenes Laërtius (3rd c. AD)', note: 'PRIMARY, and the essential source. A collection of lives and sayings of Antisthenes, Diogenes, Crates, and Hipparchia. Anecdotal and unsystematic, but nearly everything we know starts here. Begin with the life of Diogenes of Sinope.' },
          { title: 'Discourses III.22, "On the Calling of a Cynic"', author: 'Epictetus (recorded by Arrian, 2nd c. AD)', note: 'PRIMARY. The most searching ancient portrait of the ideal Cynic — a scout and messenger of the gods, free because he owns nothing and fears nothing. The best statement of what Cynicism is for. Very approachable.' },
          { title: 'The Cynic Epistles', author: 'Attributed to Diogenes and Crates (letters by later hands)', note: 'PRIMARY-adjacent. Pseudonymous letters written in the Cynics\' names centuries later — not their own words, but the plainest surviving summary of the Cynic way of life. Read knowing they are a tradition speaking, not the founders.' },
          { title: 'Discourses (esp. the four on Diogenes and kingship)', author: 'Dio Chrysostom (1st–2nd c. AD)', note: 'PRIMARY-adjacent. A polished orator ventriloquising Diogenes long after his death. Idealised and literary, but keeps the Cynic voice — freedom, self-rule, contempt for tyranny — alive and eloquent.' },
          { title: 'The Cynics: The Cynic Movement in Antiquity and Its Legacy', author: 'R. Bracht Branham & Marie-Odile Goulet-Cazé (eds.)', note: 'ON-RAMP (scholarly). The standard modern collection of essays — the fullest reliable account of the school, its history, and its long afterlife. Where to go once the fragments raise questions.' },
          { title: 'Diogenes the Cynic: Sayings and Anecdotes', author: 'Robin Hard (trans.)', note: 'ON-RAMP. A clean, well-chosen anthology of the surviving sayings and stories, with helpful introduction and notes. The gentlest doorway if Diogenes Laërtius feels tangled.' }
        ]
      },
      'masters': {
        title: 'The masters',
        intro: 'Cynicism runs from a pupil of Socrates to a defaced exile in a jar, to a rich man who gave his fortune away, to the woman who chose the Cynic life over a wealthy marriage — and on into the Stoa that inherited it.',
        figures: [
          { name: 'Antisthenes (c. 445–365 BC)', what: 'The founder, and a devoted companion of Socrates who prized his teacher\'s endurance and self-mastery above all. He taught that virtue is enough for happiness, that it shows in deeds not words, and that a wise man needs almost nothing. From him the whole Cynic line descends.' },
          { name: 'Diogenes of Sinope (c. 412–323 BC)', what: 'The Cynic made flesh — exiled for "defacing the currency," he defaced convention instead, living in a storage jar, owning a cloak and a staff, begging, and telling the truth to everyone. Called himself "Diogenes the Dog." When Alexander offered him anything, he asked only that the king stop blocking his sun.' },
          { name: 'Crates of Thebes (c. 365–285 BC)', what: 'A wealthy man who gave away his fortune to live as a Cynic, and was so gentle and welcoming that Athenians called him the "door-opener" and invited him into their homes. He softened the Cynic edge into kindness, and became the teacher of Zeno, founder of the Stoics.' },
          { name: 'Hipparchia of Maroneia (c. 350–280 BC)', what: 'One of the few named women philosophers of antiquity. She loved Crates for his life and mind, refused every richer suitor, and took up the Cynic life with him as an equal — living, arguing, and appearing in public on the same terms as the men, defying every convention that said a woman could not.' },
          { name: 'Zeno of Citium (c. 334–262 BC)', what: 'Not a Cynic himself but the bridge out of the school: a pupil of Crates who took the Cynic core — virtue as the only good, life according to nature — and built it into the ordered system of Stoicism. Through Zeno the Cynic fire passed into the philosophy that would rule Rome.' }
        ]
      }
    }
  },

  {
    id: 'confucius',
    name: 'Confucianism',
    short: 'The cultivated person',
    tagline: 'Harmony, ritual, and character',
    group: 'Schools of Thought',
    color: '#B23A2E',
    colorDeep: '#8A2A20',
    colorSoft: '#F5DED9',
    icon: 'books',
    image: 'assets/schools/confucius.jpg',
    blurb: 'Rooted in the teaching of Kongzi — Confucius — in the state of Lu around 500 BC, and carried down two and a half thousand years through Mencius, Xunzi, and the great neo-Confucian masters, this is the classic Chinese way of becoming fully human. Its conviction is simple and demanding: a person is not born complete but is made complete, through learning, through ritual, and through the daily practice of humaneness in the ordinary bonds of family and society. The aim is the junzi, the cultivated person, whose inner character and outer conduct have become one — and around whom, the tradition holds, families flourish, states are ordered, and the whole world finds its harmony.',
    sections: {
      'what-it-is': {
        title: 'What Confucianism is',
        intro: 'Confucianism teaches that the human being is perfected not in withdrawal but in relationship — that the raw material of a good life is the family, the community, and the state, and that character is cultivated by learning the Way (dao) of the ancient sages and enacting it in every human tie. Its centre of gravity is not doctrine but self-cultivation: the lifelong shaping of a person into one who is humane, ritually accomplished, and at ease in doing what is right.',
        principles: [
          { name: 'Ren — humaneness', body: 'Ren is the supreme virtue, the fellow-feeling that makes a person truly human — benevolence, and the warmth of heart from which all right conduct flows. Asked what it is, Confucius answered simply: to love others. It is near at hand: "Is ren far off? I seek it, and it is here."', why: 'Ren is the soul of the whole tradition. Every ritual, every duty, every book is in service of cultivating this one quality of humane feeling — for without it, propriety is empty ceremony and knowledge is mere cleverness.' },
          { name: 'Li — ritual propriety', body: 'Li is the vast web of forms — of manners, ceremony, courtesy, and right measure — that orders human life: how one greets a guest, mourns a parent, serves a ruler, sits at a table. It is not cold formality but the outward body that inner virtue takes, the grammar by which humaneness is expressed and made real.', why: 'Without li, feeling has no shape and society no order. Ritual trains the raw self into grace: by practising the forms with sincerity, the inner disposition is gradually made to match them, until doing right becomes second nature.' },
          { name: 'The junzi — the cultivated person', body: 'The junzi, the "exemplary person," is the goal of the whole endeavour — one whose character has been so refined that virtue is effortless and dignity unforced. He is set against the petty person (xiaoren), who thinks of profit where the junzi thinks of what is right. Nobility, for Confucius, is not of birth but of conduct.', why: 'The tradition holds up a living pattern, not a rule-book: to become good, watch a good person and grow toward that likeness. The junzi is the visible aim that gives self-cultivation its direction and its measure.' },
          { name: 'Xiao — filial piety, the root', body: 'Xiao is reverent devotion to one\'s parents and ancestors — caring for them in life, mourning them in death, honouring them thereafter. Confucius\'s disciple Youzi called it the very root of ren: the person who is a good son and good brother will rarely be one to defy his superiors or make disorder.', why: 'The family is where virtue is first learned and first practised, and the affection owed to parents is the seed from which all wider humaneness grows. Master love and duty at home, and you carry them outward into every larger bond.' },
          { name: 'Cultivation that radiates outward', body: 'The Great Learning traces the arc: things are investigated, knowledge extended, the will made sincere, the mind rectified, the self cultivated — and only then is the family regulated, the state governed, and the whole world made peaceful. It begins with the rectification of names — calling each thing by its true name, so that a ruler acts as a ruler and a father as a father — and it begins, always, with oneself.', why: 'This is Confucianism\'s answer to how one person mends the world: not by seizing the state, but by perfecting the self. Good order is not imposed from above; it radiates outward from cultivated persons, from the self to the family to the realm.' }
        ]
      },
      'the-path': {
        title: 'The path, beginner to advanced',
        intro: 'The tradition itself prescribes an order of study — the Four Books before the Five Classics, the Analects before all. Begin with the words of the Master, then the great disciples who systematised him, then the philosophers and the neo-Confucian synthesis that made him a metaphysics.',
        levels: [
          { stage: 'Beginner', items: [
            'Read the Analects (Lunyu) of Confucius — read it slowly, a few sayings at a sitting, for it is the doorway to everything else.',
            'Learn the central terms in the Master\'s own mouth: ren (humaneness), li (ritual), junzi (the cultivated person), xiao (filial devotion).',
            'Take up the golden rule as Confucius states it: "Do not impose on others what you do not desire for yourself."',
            'Begin the daily self-examination that the disciple Zengzi practised, questioning your own conduct each evening.'
          ] },
          { stage: 'Intermediate', items: [
            'Read the Mencius (Mengzi) for the great argument that human nature is good, and for the "four sprouts" of virtue in every heart.',
            'Read the Great Learning (Daxue) for the arc from self-cultivation outward to the ordering of the world.',
            'Read the Doctrine of the Mean (Zhongyong) for centrality, sincerity (cheng), and the Way that never departs from us.',
            'Return to the Analects a second time, now with the fuller framework the disciples supply.'
          ] },
          { stage: 'Advanced', items: [
            'Read the Xunzi for the opposing view — that human nature is unruly and must be reformed by ritual and learning — and weigh it against Mencius.',
            'Study the Five Classics behind the Four Books: the Odes, Documents, Rites, Changes, and Spring and Autumn Annals.',
            'Read Zhu Xi and the neo-Confucians (Song and Ming), who fused the tradition with a metaphysics of principle (li) and vital force (qi).',
            'Test the teaching where it bites — in grief, in service to difficult superiors, in the daily work of the family — for Confucianism is proved in conduct, not in argument.'
          ] }
        ]
      },
      'practice': {
        title: 'Confucian practices',
        intro: 'Confucianism is a discipline of self-cultivation carried out in ordinary life. None of its practices demand withdrawal from the world; each is done within the human bonds you already stand in, and each can be begun today.',
        items: [
          { name: 'Daily self-examination', body: 'Zengzi said: "Each day I examine myself on three points — in acting for others, have I been faithful? With friends, have I been sincere? And have I practised what I was taught?" Make your own such review each evening, judging your conduct honestly against the person you mean to become.' },
          { name: 'Keep ritual and courtesy deliberately', body: 'Practise li on purpose — the proper greeting, the attentive bow, the correct measure in mourning and in feasting, the small courtesies owed to elders and strangers alike. Do them with sincerity, not for show, and let the outer form slowly shape the inner heart until doing right feels natural.' },
          { name: 'Serve your parents', body: 'Practise xiao concretely: attend to your parents\' comfort, speak to them with reverence and a pleasant face, remember your ancestors. Confucius warned that mere provision is not enough — even dogs and horses are fed; what parents are owed is reverence. Filial care is where humaneness is first made real.' },
          { name: 'Learn, and return to what you learned', body: '"To learn and at times to practise what one has learned — is this not a pleasure?" So the Analects opens. Study the words of the sages, then return to them again and again, letting them ripen; and pair learning with reflection, for "learning without thought is labour lost, thought without learning is perilous."' },
          { name: 'Cultivate one thing in your character', body: 'Take a single virtue you lack — patience, sincerity, courage in doing right — and work at it as a craftsman works, day upon day. The junzi is not made in a stroke but shaped gradually, as jade is cut and polished. Choose the flaw nearest at hand and mend it first.' },
          { name: 'Practise the golden rule (shu)', body: 'Asked for a single word to live by, Confucius gave shu — reciprocity: "Do not impose on others what you do not desire for yourself." Carry it into every dealing: measure your conduct toward others by what you would wish done to you. It is humaneness put into a rule small enough to hold.' }
        ]
      },
      'reading': {
        title: 'What to read',
        intro: 'Read the Four Books first, in the traditional order, for they are the heart of the tradition and were the curriculum of the Chinese world for centuries. Then Xunzi for the great counter-argument, then the modern guides if the classics prove steep. In English, the translations of D. C. Lau are the trusted standard; Edward Slingerland\'s Analects is the finest for a first reader.',
        books: [
          { title: 'The Analects (Lunyu)', author: 'Confucius (compiled by disciples, c. 5th c. BC)', note: 'PRIMARY, and where everyone begins. Short sayings and conversations, not a system — read a little at a time. D. C. Lau (Penguin) is the reliable standard; Edward Slingerland\'s edition, with selected classical commentary, is the best doorway of all.' },
          { title: 'The Mencius (Mengzi)', author: 'Mencius (4th c. BC)', note: 'PRIMARY. The second of the Four Books and the great case that human nature is good. More argued and flowing than the Analects, and very readable — D. C. Lau\'s translation is again the standard.' },
          { title: 'The Great Learning (Daxue)', author: 'Traditionally ascribed to Confucius and Zengzi', note: 'PRIMARY, and very short — a few pages. The clearest statement of the path from self-cultivation outward to the ordering of the world. Read it in the Song arrangement Zhu Xi gave it, often printed with the Doctrine of the Mean.' },
          { title: 'The Doctrine of the Mean (Zhongyong)', author: 'Traditionally ascribed to Zisi, grandson of Confucius', note: 'PRIMARY. The most philosophical of the Four Books — on centrality, sincerity (cheng), and the Way. Subtle and worth rereading; steeper than the Analects, so take it after the others.' },
          { title: 'The Xunzi', author: 'Xunzi (3rd c. BC)', note: 'PRIMARY. The powerful counter-voice: that human nature is unruly and must be straightened by ritual and learning. More systematic than Mencius; Burton Watson\'s selected translation is the usual first port.' },
          { title: 'Confucius: The Secular as Sacred', author: 'Herbert Fingarette', note: 'ON-RAMP. A slim, brilliant modern reading that recovers the depth of li (ritual) for a Western reader. Read once the Analects has taken hold.' },
          { title: 'Confucius and the Analects: A Philosophical Interpretation', author: 'Bryan W. Van Norden (and his broader Introduction to Classical Chinese Philosophy)', note: 'ON-RAMP. A clear, rigorous modern guide by a leading scholar — the best map of the whole tradition and its arguments.' },
          { title: 'The Analects of Confucius: A Philosophical Translation', author: 'Roger T. Ames and Henry Rosemont Jr.', note: 'ON-RAMP (deeper). A translation-with-commentary that unfolds the key terms — ren, li, dao — on their own terms rather than through Western categories. Read alongside a plainer version.' }
        ]
      },
      'masters': {
        title: 'The masters',
        intro: 'The tradition runs from a minor official in the state of Lu, through the philosophers who systematised and contested him, to the Song masters who made him a metaphysics — and outward across the whole of East Asia.',
        figures: [
          { name: 'Confucius / Kongzi (551–479 BC)', what: 'The Master. A man of modest birth in the state of Lu who sought office to reform a fractured age, largely failed in his own lifetime, and taught instead — transmitting, he said, rather than inventing, the Way of the ancient sages. His recorded sayings became the Analects, and the foundation of Chinese civilisation.' },
          { name: 'Mencius / Mengzi (c. 372–289 BC)', what: 'The "Second Sage." He developed Confucius into a full moral philosophy, arguing that human nature is innately good — that every heart holds the "four sprouts" of virtue, needing only to be cultivated, as a spring needs only to be cleared to flow.' },
          { name: 'Xunzi (c. 310–235 BC)', what: 'The great dissenting Confucian. He held, against Mencius, that human nature is unruly and self-seeking, and that goodness is the deliberate achievement of ritual, learning, and teachers who straighten the crooked. His rigorous, systematic thought shaped the tradition even where it was resisted.' },
          { name: 'Zhu Xi (1130–1200 AD)', what: 'The architect of neo-Confucianism. In the Song dynasty he gathered the Four Books, wrote the definitive commentaries, and fused the tradition with a metaphysics of principle (li) and vital force (qi). His synthesis became the orthodox curriculum of the imperial examinations for six hundred years.' },
          { name: 'The reach across East Asia', what: 'Confucianism outgrew China to become the shared moral grammar of a civilisation — shaping Korea (where the neo-Confucian Yi dynasty ran for five centuries), Japan, and Vietnam. Its teaching on family, learning, ritual, and the cultivated person still orders the ethical life of hundreds of millions.' }
        ]
      }
    }
  }
);
