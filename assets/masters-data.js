// masters-data.js — "The Great Minds": the figures who embody the classical
// mind, chosen for alignment with the good, the true, and the beautiful (not a
// generic "famous people" list). Grouped by MASTER_ERAS. Each: id, name, era,
// dates, epithet, hook, sections[] ({h,body} or {h,bullets}). Spoken profiles
// are recorded to assets/masters/<id>.mp3 (Kokoro) — regenerate with
// scripts/gen-masters.mjs.

window.MASTER_ERAS = ['Ancient Greece', 'Ancient Rome', 'The Middle Ages', 'Keepers of the Tradition'];

window.MASTERS = [
{
  id: 'homer', name: 'Homer', era: 'Ancient Greece', dates: 'c. 8th c. BC', epithet: 'The Poet of the Greeks',
  hook: 'From a single blind singer flows the whole river of Western storytelling, memory, and moral imagination.',
  sections: [
    { h: 'Who they were', body: 'Homer is the name the ancient world gave to the poet of the Iliad and the Odyssey, the two great epics that stand at the dawn of Greek literature. Whether one man or the crown of a long oral tradition, he composed in a formulaic verse meant to be sung aloud and held in living memory. His poems were the shared inheritance of every Greek, recited at festivals and studied in every school. For a thousand years he was simply called \'the Poet.\'' },
    { h: 'The heart of their thought', body: 'Homer looks unflinchingly at war, grief, wrath, and homecoming, yet finds in them the shape of human greatness and human limit. The Iliad meditates on glory bought with mortality and on the mercy that survives even rage, as when Achilles returns Hector\'s body to his weeping father. The Odyssey traces the long, cunning journey of a man striving to return to family and home. Beneath the adventures runs a steady question: what does it mean to live and die well as a mortal among gods?' },
    { h: 'Big ideas', bullets: ['Honour, glory, and the tragic cost of mortal ambition', 'Xenia — the sacred bond of hospitality between host and guest', 'The pull of home, memory, and belonging in the Odyssey', 'Poetry as the vessel that carries a people\'s memory and virtue'] },
    { h: 'Why they embody the classical mind', body: 'Homer is the fountainhead of classical education itself; to learn from him was, for the Greeks, to become fully human. His verse weds the beautiful (song of surpassing grandeur), the true (an honest gaze at suffering and courage), and the good (models of honour, pity, and loyalty). To read Homer is to be formed, as the ancients were, into a person of imagination, memory, and moral depth.' }
  ]
},
{
  id: 'pythagoras', name: 'Pythagoras', era: 'Ancient Greece', dates: 'c. 570–495 BC', epithet: 'Philosopher of Number and Harmony',
  hook: 'He heard the cosmos singing and taught that number is the hidden music binding all things into one ordered whole.',
  sections: [
    { h: 'Who they were', body: 'Pythagoras was a philosopher and mathematician from the island of Samos who founded a famous community of seekers in Croton, in southern Italy. His followers lived by shared discipline, study, and a way of life devoted to purity of soul. Much of what we know comes through his students, for he wrote little himself. Around him gathered one of the first true schools of philosophy in the West.' },
    { h: 'The heart of their thought', body: 'Pythagoras taught that number and proportion are the deep structure of reality — that the same ratios which make musical strings sound in harmony also order the heavens. This vision fused mathematics, music, and cosmology into a single contemplation of divine order. He held that the soul is immortal and that philosophy is a way of purifying and tuning it. To study number, for him, was to bring the soul into harmony with the harmony of the cosmos.' },
    { h: 'Big ideas', bullets: ['Reality is ordered by number and mathematical proportion', 'The \'music of the spheres\' — cosmic harmony expressed as ratio', 'The immortality and purification of the soul', 'Philosophy as a whole way of life, not merely a set of doctrines'] },
    { h: 'Why they embody the classical mind', body: 'Pythagoras binds the true and the beautiful into one: the truths of mathematics are for him also a kind of music, and the cosmos itself is beautiful because it is ordered. His conviction that studying harmony refines the soul is the very seed of the classical liberal arts, where the disciplines of number lead upward toward wisdom. He models learning as the pursuit of a good and well-tuned life.' }
  ]
},
{
  id: 'socrates', name: 'Socrates', era: 'Ancient Greece', dates: '470–399 BC', epithet: 'The Questioner',
  hook: 'He wrote nothing and yet changed everything, teaching that the examined life is the only one worth living.',
  sections: [
    { h: 'Who they were', body: 'Socrates was an Athenian who wandered the marketplace and gymnasia in plain dress, engaging citizens in relentless conversation about justice, courage, and the good. A veteran soldier and a devoted citizen, he claimed no doctrine and charged no fees. He left no writings; we know him through his pupils, above all Plato. Condemned by an Athenian jury, he chose to die rather than abandon his mission to examine and awaken.' },
    { h: 'The heart of their thought', body: 'Socrates believed that virtue is knowledge and that no one does wrong willingly, only through ignorance of the good. His method was the question: by patient cross-examination he exposed false certainty and cleared the ground for genuine understanding. He insisted that he knew nothing, and that this honest awareness of ignorance was the beginning of wisdom. Above all he held that caring for the soul matters more than wealth, reputation, or even life itself.' },
    { h: 'Big ideas', bullets: ['\'The unexamined life is not worth living\'', 'The Socratic method — pursuing truth through disciplined questioning', 'Virtue is a form of knowledge; to know the good is to do it', 'Care of the soul above all outward goods'] },
    { h: 'Why they embody the classical mind', body: 'Socrates is the patron of the pursuit of truth through free, fearless reasoning — the beating heart of classical education. He shows that a person becomes good not by being told answers but by learning to question, to think, and to own their ignorance honestly. In choosing death over the betrayal of truth, he made philosophy a way of life and gave the West its enduring image of the integrity of the searching mind.' }
  ]
},
{
  id: 'plato', name: 'Plato', era: 'Ancient Greece', dates: 'c. 428–348 BC', epithet: 'Philosopher of the Forms',
  hook: 'He turned his teacher\'s questions into a vision of eternal truth and founded the school that named the Academy.',
  sections: [
    { h: 'Who they were', body: 'Plato was an Athenian of noble birth, a devoted student of Socrates who transformed his master\'s conversations into enduring written dialogues. Grieved by the execution of Socrates, he devoted his life to philosophy and to the question of how a just soul and a just city might be formed. He founded the Academy, a school that endured for centuries and gave its name to academic life itself. His dialogues remain among the most beautiful and searching works ever written.' },
    { h: 'The heart of their thought', body: 'Plato taught that beyond the shifting world of the senses lies a realm of changeless Forms — perfect Justice, Beauty, and above all the Good, from which all things take their being and truth. The philosopher\'s task is to turn the soul away from shadows and toward this light, as in his famous allegory of the cave. He wove ethics, politics, and metaphysics into one grand vision in which the well-ordered soul mirrors the well-ordered cosmos. To know the Good is to be transformed by it.' },
    { h: 'Big ideas', bullets: ['The Theory of Forms — eternal realities behind fleeting appearances', 'The Allegory of the Cave — education as turning the soul toward light', 'The Form of the Good as the source of all truth and being', 'The just soul and the just city as mirrors of one another'] },
    { h: 'Why they embody the classical mind', body: 'Plato gives the classical mind its highest object: the Good, the True, and the Beautiful as real, eternal, and one. For him education is nothing less than the turning of the whole soul toward that light — the very definition of forming a free, reasoning, and virtuous person. No thinker has more nobly framed learning as an ascent from opinion to wisdom, from the cave into the sun.' }
  ]
},
{
  id: 'aristotle', name: 'Aristotle', era: 'Ancient Greece', dates: '384–322 BC', epithet: 'The Master of Those Who Know',
  hook: 'He mapped nearly every field of human knowledge and taught that happiness is the soul\'s excellence in action.',
  sections: [
    { h: 'Who they were', body: 'Aristotle studied for twenty years under Plato before striking his own path and later tutored the young Alexander the Great. He founded the Lyceum in Athens, where he taught while walking and gathered a vast body of research. His surviving works span logic, physics, biology, ethics, politics, rhetoric, and poetry — an encyclopaedia of the ancient mind. Dante would later call him \'the master of those who know.\'' },
    { h: 'The heart of their thought', body: 'Aristotle grounded knowledge in careful observation of the world and in the disciplined logic he was the first to systematise. In ethics he taught that the goal of life is eudaimonia — flourishing — reached by cultivating virtue as a mean between extremes, formed through habit and guided by practical wisdom. He saw the human being as a rational and political animal, made to live well in community. For him, to understand a thing was to grasp its purpose, its end, the good at which it aims.' },
    { h: 'Big ideas', bullets: ['Eudaimonia — flourishing as the true end of human life', 'Virtue as a habit and a mean between excess and deficiency', 'The foundations of formal logic and empirical inquiry', 'Man as a rational and political animal, fulfilled in community'] },
    { h: 'Why they embody the classical mind', body: 'Aristotle is the classical mind in its fullest breadth: reverence for truth pursued through reason and observation, joined to a rich account of the good life as active virtue. He insists that a person is completed not by knowledge alone but by the excellent use of every human power. His vision of flourishing through reason, habit, and community is the very portrait of the whole, free, and well-formed person classical education seeks to raise.' }
  ]
},
{
  id: 'euclid', name: 'Euclid', era: 'Ancient Greece', dates: 'c. 300 BC', epithet: 'The Father of Geometry',
  hook: 'From a handful of self-evident truths he built a temple of reason that stood unshaken for two thousand years.',
  sections: [
    { h: 'Who they were', body: 'Euclid was a mathematician who taught in Alexandria, the great centre of learning in the Hellenistic world. Little is known of his life, but his masterwork, the Elements, gathered and ordered the geometry of the Greeks into a single logical structure. It became, after the Bible, one of the most printed and studied books in history. For millennia it was the standard by which the very idea of rigorous thought was measured.' },
    { h: 'The heart of their thought', body: 'Euclid showed how an entire edifice of certain knowledge could be raised from a few definitions, postulates, and self-evident axioms, each step proven from what came before. This deductive method — moving from first principles to necessary conclusions — became the model of reason itself. His geometry was not merely useful but beautiful in its economy and its inevitability. To follow a Euclidean proof is to feel the mind climb, link by link, from the simple to the profound.' },
    { h: 'Big ideas', bullets: ['The axiomatic method — building certain truth from first principles', 'Rigorous logical proof as the ground of mathematical knowledge', 'Geometry as a training of the reasoning mind', 'The Elements as the enduring model of ordered thought'] },
    { h: 'Why they embody the classical mind', body: 'Euclid gives the pursuit of truth its purest form: knowledge that is certain, ordered, and demonstrated rather than merely asserted. Geometry held pride of place in the classical liberal arts precisely because it trains the soul to reason clearly and to love the beauty of order. In him the true and the beautiful meet, and the mind learns the discipline and delight of thinking rightly.' }
  ]
},
{
  id: 'cicero', name: 'Cicero', era: 'Ancient Rome', dates: '106–43 BC', epithet: 'Rome\'s Voice of Eloquence and Duty',
  hook: 'He fused Greek wisdom with Roman virtue and gave the West its enduring language of duty, republic, and eloquent reason.',
  sections: [
    { h: 'Who they were', body: 'Cicero was Rome\'s greatest orator, a statesman and lawyer who rose without noble birth to the highest office of consul. He defended the Roman Republic through its final convulsions and paid for his stand against tyranny with his life. In enforced retirement from politics he poured himself into writing, translating the treasures of Greek philosophy into a supple and noble Latin. His speeches, letters, and treatises shaped Western prose and thought for two millennia.' },
    { h: 'The heart of their thought', body: 'Cicero believed that true eloquence and true wisdom must be joined — that the good citizen is one who can think justly and speak persuasively for the common good. He championed natural law, a moral order binding all people and above any human decree, and made duty (officium) the centre of a well-lived life. Drawing on Stoic and other schools, he taught that virtue is its own reward and the foundation of both private honour and public order. His humanitas — the cultivation of learning and human dignity — became a lasting ideal.' },
    { h: 'Big ideas', bullets: ['The union of wisdom and eloquence in the good citizen', 'Natural law — a universal moral order above human decree', 'Officium — duty as the axis of an honourable life', 'Humanitas — the humane cultivation of mind and character'] },
    { h: 'Why they embody the classical mind', body: 'Cicero gave the classical ideal its very name in humanitas: the forming of a full, cultivated, dutiful human being. In him the true and the good are made public and persuasive, carried into the life of the city by beautiful speech in service of justice. He is the model of the free citizen whose learning is not for himself alone but for the common good.' }
  ]
},
{
  id: 'virgil', name: 'Virgil', era: 'Ancient Rome', dates: '70–19 BC', epithet: 'The Poet of Pietas',
  hook: 'He gave Rome its national epic and the West its tender image of duty carried faithfully through loss.',
  sections: [
    { h: 'Who they were', body: 'Virgil was Rome\'s supreme poet, born to a farming family in the north of Italy and raised to the summit of literary fame. He wrote the pastoral Eclogues and the Georgics, a great poem in praise of the land and honest labour, before crowning his life with the Aeneid. That epic, telling of Aeneas\'s journey from fallen Troy to found the Roman people, became the defining poem of Latin civilisation. So revered was he that later ages made him a guide to wisdom, and Dante chose him to lead the way through the afterworld.' },
    { h: 'The heart of their thought', body: 'At the centre of Virgil\'s vision stands pietas — a deep, self-forgetting devotion to the gods, one\'s family, and one\'s destiny. His hero Aeneas is \'pious Aeneas,\' a man who sets aside personal desire to shoulder the burden of duty and to build something greater than himself. Yet Virgil never hides the cost; his verse is threaded with the \'tears of things,\' a tender sorrow for all that duty and history sweep away. He weds public grandeur to private compassion as few poets ever have.' },
    { h: 'Big ideas', bullets: ['Pietas — devotion to the gods, family, and one\'s calling', 'The sacrifice of self for a destiny larger than one\'s own', 'Lacrimae rerum — compassion for the sorrow woven into life', 'Poetry as the shaper of a civilisation\'s soul and memory'] },
    { h: 'Why they embody the classical mind', body: 'Virgil unites the beautiful and the good in verse of surpassing craft that teaches devotion, sacrifice, and tender humanity. His pietas is a whole moral education in itself — the forming of a soul that serves what is higher than its own desire. To dwell with Virgil is to be schooled in duty softened by compassion, the very temper of a nobly formed person.' }
  ]
},
{
  id: 'seneca', name: 'Seneca', era: 'Ancient Rome', dates: 'c. 4 BC–65 AD', epithet: 'The Stoic Counsellor',
  hook: 'Amid the perils of an emperor\'s court he taught that reason and virtue can make the soul unshakeably free.',
  sections: [
    { h: 'Who they were', body: 'Seneca was a Roman statesman, dramatist, and Stoic philosopher who served as tutor and advisor to the emperor Nero. He knew both the heights of power and the bitterness of exile, and he wrote of virtue with the authority of a man tested by fortune. His letters and essays are among the most humane and readable of all ancient philosophy. Ordered by Nero to die, he met his end with a calm that his own teachings had long prepared.' },
    { h: 'The heart of their thought', body: 'Seneca taught the Stoic conviction that only virtue is truly good and that the wise soul remains free whatever fortune brings. He urged his readers to master anger and fear, to distinguish what lies in their power from what does not, and to live according to reason and nature. Time, for him, was our most precious and most wasted possession, to be guarded like life itself. Above all he insisted that philosophy is not talk but practice — a daily labour of becoming better.' },
    { h: 'Big ideas', bullets: ['Virtue alone is sufficient for the good and happy life', 'Master the passions; distinguish what is and is not in our power', 'The right use of time as the measure of a life well lived', 'Philosophy as daily practice, not mere theory'] },
    { h: 'Why they embody the classical mind', body: 'Seneca shows that the pursuit of the good is a discipline of the whole self, lived out under pressure and made real in how one meets adversity and death. His counsel forms the inner freedom that is classical education\'s deepest aim — a mind ruled by reason rather than fortune or fear. In him truth becomes wisdom for living, and learning becomes the steady work of forging a free and upright soul.' }
  ]
},
{
  id: 'epictetus', name: 'Epictetus', era: 'Ancient Rome', dates: 'c. 50–135 AD', epithet: 'The Freed Slave Who Taught Freedom',
  hook: 'Born a slave and lamed by his master, he became the West\'s clearest voice on the one freedom no one can take from you.',
  sections: [
    { h: 'Who they were', body: 'Epictetus was born into slavery in Phrygia and spent his early life in the household of a wealthy freedman in Nero\'s Rome. Permitted to study Stoic philosophy while still enslaved, he was later freed and began to teach. When the emperor Domitian banished philosophers from Rome, he founded a celebrated school at Nicopolis in Greece. He wrote nothing himself; his teaching survives because his student Arrian recorded the Discourses and the Handbook.' },
    { h: 'The heart of their thought', body: 'Everything, Epictetus taught, falls into two classes: what is up to us and what is not. Our judgements, desires, and choices are ours; our bodies, reputations, possessions, and circumstances are not. Suffering comes from grasping at what we cannot control, and freedom comes from wanting only what is genuinely in our power. To live well is to keep the will in harmony with reason and nature, meeting whatever comes as an actor plays the part assigned to him.' },
    { h: 'Big ideas', bullets: ['The dichotomy of control: master the inner life, release the rest', 'We are disturbed not by events but by our judgements about them', 'Philosophy is training, not talk — it must be lived and practised daily', 'True freedom is inward and cannot be granted or taken by any tyrant'] },
    { h: 'Why they embody the classical mind', body: 'Epictetus insists that the good life is not given by fortune but forged by reason, making virtue the one thing truly worth pursuing. He turns philosophy from a subject into a discipline of the whole person, ordering desire toward the true and the noble. That a former slave should teach emperors\' heirs how to be free is the classical ideal in its purest form: reason, rightly used, makes any human being sovereign.' }
  ]
},
{
  id: 'marcus-aurelius', name: 'Marcus Aurelius', era: 'Ancient Rome', dates: '121–180 AD', epithet: 'The Philosopher-King',
  hook: 'The most powerful man on earth wrote a private diary reminding himself to be humble, just, and unafraid of death.',
  sections: [
    { h: 'Who they were', body: 'Marcus Aurelius ruled Rome from 161 to 180 AD, the last of the emperors remembered as the "Five Good Emperors." His reign was consumed by war on the Danube frontier and by a devastating plague, yet he governed with a conscience shaped by philosophy. In the field, by lamplight, he kept a notebook of reflections addressed to no one but himself. That notebook, the Meditations, became one of the most beloved books ever written.' },
    { h: 'The heart of their thought', body: 'A committed Stoic, Marcus held that the universe is governed by reason and that each person carries a fragment of that divine order within. The task of life is to live according to nature — that is, according to reason and justice — and to accept what fate brings without bitterness. He reminded himself constantly of death, not to despair but to strip away vanity and act rightly now. Duty to the common good, he believed, is the truest expression of a rational soul.' },
    { h: 'Big ideas', bullets: ['We are made for one another — to obstruct each other is against nature', 'Judge externals as indifferent; only virtue and vice truly matter', 'Remember death (memento mori) to live with clarity and purpose', 'The obstacle placed in your path can become the way forward'] },
    { h: 'Why they embody the classical mind', body: 'Marcus proves that the pursuit of wisdom is not a retreat from the world but the ground of just action within it. He sought the good under crushing responsibility, the true in a clear-eyed view of nature and death, and a quiet beauty in the ordering of his own soul. He is the classical ideal made flesh: a free, reasoning man who ruled others only after learning to rule himself.' }
  ]
},
{
  id: 'augustine', name: 'Augustine of Hippo', era: 'The Middle Ages', dates: '354–430 AD', epithet: 'Seeker of the Restless Heart',
  hook: 'A brilliant, pleasure-seeking rhetorician chased truth through every philosophy of his age until he found it, and in finding it invented the inner autobiography.',
  sections: [
    { h: 'Who they were', body: 'Augustine was born in Roman North Africa and trained as a teacher of rhetoric, rising to a prestigious professorship in Milan. For years he lived ambitiously and restlessly, drawn through Manichaeism and Neoplatonism in search of wisdom. After a long intellectual and moral struggle, he converted to Christianity in 386 and later became bishop of Hippo. He wrote the Confessions and The City of God, becoming the most influential theologian of the Latin West.' },
    { h: 'The heart of their thought', body: 'Augustine fused the best of classical philosophy — especially Plato — with Christian faith, arguing that all human longing is finally a longing for God. He examined the inner life with unprecedented depth, exploring memory, time, will, and desire. Evil, he taught, is not a thing but a privation, a turning of the good will toward lesser goods. Truth is not manufactured by the mind but illuminated within it, and the ordered love of rightly ranked goods is the shape of a good life.' },
    { h: 'Big ideas', bullets: ['"You have made us for yourself, and our heart is restless until it rests in you"', 'The inward turn: truth is found by ascending through the interior self', 'Rightly ordered love (ordo amoris) is the measure of virtue', 'Two cities — of God and of self — are woven through all history'] },
    { h: 'Why they embody the classical mind', body: 'Augustine carried the whole inheritance of Greece and Rome into the Christian age, insisting that reason and faith together reach the truth neither attains alone. His pursuit of the good, the true, and the beautiful is literally the plot of his life\'s story — a heart restless for the highest Good until it rests there. He shows the classical ideal at full stretch: the whole person, mind and will and love, ordered toward what is ultimately real.' }
  ]
},
{
  id: 'boethius', name: 'Boethius', era: 'The Middle Ages', dates: 'c. 477–524 AD', epithet: 'The Last of the Romans',
  hook: 'Awaiting execution on a false charge, he wrote a dialogue with Philosophy herself that consoled Europe for a thousand years.',
  sections: [
    { h: 'Who they were', body: 'Boethius was a Roman senator and scholar of the highest rank, serving as consul under the Ostrogothic king Theodoric. He set himself the vast task of preserving Greek learning for the Latin West, translating and commenting on Aristotle and planning to reconcile him with Plato. Accused of treason and imprisoned, he was executed without a fair trial. In his cell, condemned and stripped of everything, he composed The Consolation of Philosophy.' },
    { h: 'The heart of their thought', body: 'In the Consolation, Lady Philosophy visits the despairing prisoner and reasons him back to peace. Fortune is a turning wheel, she shows, and the goods it grants — wealth, power, fame — were never truly his to lose. The true good, happiness itself, is God, who is perfect and unchanging, and it is reached by the mind, not by circumstance. Boethius also wrestles with how human freedom can coexist with divine foreknowledge, resolving it through God\'s timeless vision of all things at once.' },
    { h: 'Big ideas', bullets: ['Fortune\'s wheel: worldly goods are on loan and always turning', 'True happiness is found only in the changeless highest Good', 'Providence and free will are reconciled in God\'s eternal "now"', 'Reason can console the soul even in the face of death'] },
    { h: 'Why they embody the classical mind', body: 'Boethius is the living bridge from the ancient world to the medieval, handing on the tradition of reasoned inquiry at the moment it might have been lost. Facing death, he sought the good not in what fortune could give but in what reason could see, and found beauty in the very order of the cosmos. He proves the classical conviction that a mind rightly formed by philosophy remains free even in chains.' }
  ]
},
{
  id: 'aquinas', name: 'Thomas Aquinas', era: 'The Middle Ages', dates: '1225–1274', epithet: 'The Angelic Doctor',
  hook: 'He set out to show that faith and reason are not rivals but friends, and built the most complete cathedral of thought in the Western tradition.',
  sections: [
    { h: 'Who they were', body: 'Thomas Aquinas was born to a noble Italian family who opposed his wish to join the new Dominican order of preachers. He studied under Albert the Great and became the leading teacher at the University of Paris during the medieval flowering of the schools. Quiet and vast in mind — classmates nicknamed him the "dumb ox" — he produced an enormous body of work, above all the Summa Theologiae. He was canonised a saint and later named a Doctor of the Church.' },
    { h: 'The heart of their thought', body: 'Aquinas met the newly recovered philosophy of Aristotle head-on and showed that it could serve, not threaten, Christian truth. Grace perfects nature rather than destroying it, and reason and revelation, both gifts of God, cannot finally contradict. He argued that God\'s existence can be reasoned to from the world, and that the moral life is the pursuit of genuine human flourishing through the virtues. All things, he held, come from God and are drawn back toward Him as their final good.' },
    { h: 'Big ideas', bullets: ['Faith and reason are complementary paths to one truth', 'Grace perfects nature; it does not abolish it', 'The Five Ways: reasoned approaches to God from the created world', 'Natural law: right action is written into human nature and knowable by reason'] },
    { h: 'Why they embody the classical mind', body: 'Aquinas is the supreme synthesiser, gathering Aristotle, Augustine, and Scripture into one ordered vision of reality. His whole labour is the pursuit of truth pursued with total confidence that it is one, and his ethics aim squarely at the true human good. He embodies the classical ideal of the mind at peace with itself — reasoning freely and reverently toward the Good from which all things flow.' }
  ]
},
{
  id: 'dante', name: 'Dante Alighieri', era: 'The Middle Ages', dates: '1265–1321', epithet: 'The Supreme Poet',
  hook: 'Exiled from his beloved city, he wrote a journey through hell, purgatory, and heaven that gathered an entire civilisation into a single poem.',
  sections: [
    { h: 'Who they were', body: 'Dante was born in Florence and came of age amid its fierce political feuds, serving in its government until a change of faction sent him into permanent exile. He never saw his city again, and wrote in bitter homelessness for the rest of his life. Steeped in classical poetry, philosophy, and theology, he chose to write his masterpiece in Italian rather than Latin, helping to found a national language. That masterpiece is the Divine Comedy.' },
    { h: 'The heart of their thought', body: 'The Comedy follows the pilgrim Dante down through Hell, up the mountain of Purgatory, and into the spheres of Paradise, guided first by the Roman poet Virgil and then by his beloved Beatrice. Reason, embodied in Virgil, can lead the soul only so far; grace and love must carry it the rest of the way to God. The whole cosmos is shown as moral and ordered, its final truth "the Love that moves the sun and the other stars." Every human choice, Dante insists, has weight and direction.' },
    { h: 'Big ideas', bullets: ['The soul\'s journey is a real ascent from sin through purgation to beatitude', 'Reason (Virgil) guides us far, but love and grace (Beatrice) complete the way', 'Divine love is the ordering principle of the entire cosmos', 'Beauty in art can carry the highest theological and moral truth'] },
    { h: 'Why they embody the classical mind', body: 'Dante binds the classical and Christian worlds into one, seating pagan poets and philosophers within a Christian universe with honour. His poem is the good, the true, and the beautiful made inseparable: a moral ascent, a vision of ultimate reality, and a work of surpassing art all at once. He shows the fully formed classical soul — reason, imagination, and love ordered together and lifted toward their source.' }
  ]
},
{
  id: 'erasmus', name: 'Erasmus of Rotterdam', era: 'Keepers of the Tradition', dates: '1466–1536', epithet: 'Prince of the Humanists',
  hook: 'He believed that returning to the original sources — read with fresh, honest eyes — could renew both learning and life across all of Europe.',
  sections: [
    { h: 'Who they were', body: 'Erasmus was a Dutch scholar, priest, and writer who became the most famous intellectual of his age, corresponding with kings, popes, and reformers across the continent. A master of Latin and Greek, he lived as a wandering man of letters, moving between the great cities and universities of Europe. He edited a landmark Greek edition of the New Testament and countless classical and patristic texts. His witty satire In Praise of Folly delighted and needled all of Christendom.' },
    { h: 'The heart of their thought', body: 'Erasmus championed the humanist program of "ad fontes" — back to the sources — believing that reading the classics and Scripture in their original languages could purify thought and reform manners. He prized clear, elegant, persuasive language as an instrument of virtue, and held that good letters and good living belong together. He argued for a simple, ethical "philosophy of Christ" over dry scholastic dispute, and pleaded throughout for tolerance, peace, and reasoned reform rather than violent rupture.' },
    { h: 'Big ideas', bullets: ['Ad fontes: renewal comes from returning to the original sources', 'Eloquence and learning are tools for cultivating virtue', 'A gentle "philosophy of Christ" over sterile scholastic wrangling', 'Reason, wit, and moderation against fanaticism and war'] },
    { h: 'Why they embody the classical mind', body: 'Erasmus made the recovery of the classical inheritance the engine of a whole civilisation\'s renewal, insisting that the true and the beautiful in language serve the good in life. He held that a well-read, well-spoken, humane person is the aim of education itself. He is the very portrait of the classical humanist: free, learned, gracious, and devoted to forming whole human beings through the best that has been thought and said.' }
  ]
},
{
  id: 'newman', name: 'John Henry Newman', era: 'Keepers of the Tradition', dates: '1801–1890', epithet: 'Defender of the Liberal Arts',
  hook: 'He gave the English-speaking world its greatest defence of learning pursued for its own sake — knowledge as the making of a whole mind.',
  sections: [
    { h: 'Who they were', body: 'John Henry Newman was an Oxford don and Anglican clergyman who became a leader of the Oxford Movement before converting to Roman Catholicism in 1845, a decision that cost him dearly. Later made a cardinal, he was among the finest prose stylists and subtlest minds of Victorian England. Asked to found a Catholic university in Dublin, he delivered the lectures gathered as The Idea of a University. He wrote the luminous spiritual autobiography Apologia Pro Vita Sua and was canonised a saint in 2019.' },
    { h: 'The heart of their thought', body: 'Newman argued that the purpose of a university is the cultivation of the intellect itself — the forming of a mind that sees things whole and in their true relations. Such "liberal knowledge" is its own end, not merely a means to a trade or a profit. He described the fruit of this education as the "gentleman" and, more deeply, as a "philosophical habit of mind" marked by breadth, balance, and judgement. Faith and reason, he insisted, illuminate rather than threaten one another.' },
    { h: 'Big ideas', bullets: ['Knowledge is worth pursuing as an end in itself, not only for use', 'Education forms a whole, integrated mind, not a stocked memory', 'The "philosophical habit of mind": seeing all things in their relations', 'Faith and reason are allies in the one search for truth'] },
    { h: 'Why they embody the classical mind', body: 'Newman is the modern world\'s great apologist for the classical ideal of liberal education — learning that seeks the true for its own sake and forms the beauty of a well-ordered mind. He defends the very conviction this tradition rests on: that the goal is the free, reasoning, whole human person. No one has stated more nobly why the pursuit of the good, the true, and the beautiful needs no excuse beyond itself.' }
  ]
},
{
  id: 'lewis', name: 'C.S. Lewis', era: 'Keepers of the Tradition', dates: '1898–1963', epithet: 'Champion of the Permanent Things',
  hook: 'A scholar of medieval and Renaissance literature who became the twentieth century\'s most beloved defender of reason, virtue, and wonder.',
  sections: [
    { h: 'Who they were', body: 'C.S. Lewis was a professor of literature at Oxford and later Cambridge, a formidable scholar of the medieval and Renaissance worlds. A convinced atheist in youth, he came to Christianity partly through the pull of reason and the "joy" of longing he could not explain away. He became the most widely read Christian apologist of his century and, with his friend J.R.R. Tolkien, a maker of enduring imaginative worlds. He wrote Mere Christianity, The Abolition of Man, and the Chronicles of Narnia.' },
    { h: 'The heart of their thought', body: 'Lewis defended the reality of objective value — what he called the Tao — against a modern relativism that would reduce all worth to feeling. He argued that education must cultivate rightly ordered emotions, teaching the young to love what is truly lovely and to feel "just sentiments." Reason and imagination, in his hands, work together: argument clears the ground, and story awakens the longing that points beyond the world. Human beings, he insisted, are made for a joy that nothing here fully satisfies.' },
    { h: 'Big ideas', bullets: ['The Tao: objective values that all great traditions recognise', 'Education must train the affections to love the good — "men with chests"', 'Reason and imagination are partners, not rivals, in seeking truth', 'The ache of "joy" is a signpost toward our true and final home'] },
    { h: 'Why they embody the classical mind', body: 'Lewis stood guard over the "permanent things" — the good, the true, and the beautiful — precisely when the modern age set out to explain them away. He united a first-rate reasoning mind with a poet\'s imagination and a moral seriousness about forming whole human beings. He is the classical ideal carried into our own time: a free mind ordered toward truth, delighting in beauty, and shaped by the love of the good.' }
  ]
}
];
