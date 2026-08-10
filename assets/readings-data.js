// readings-data.js — "The Reading Room": short, powerful, public-domain passages
// from the classical world, read aloud. Press play while you go about your day.
// Not full audiobooks — a curated handful of the most influential pieces, meant
// to be heard many times. Audio (assets/readings/<id>.mp3) is generated from
// `text` via the local Kokoro engine using `voice`; regenerate with
// scripts/gen-readings.mjs. Keep texts public-domain (pre-1929 / KJV / gov).

window.READINGS = [
  {
    id: 'marcus-morning', title: 'Rise to the Work of a Human Being',
    source: 'Marcus Aurelius · Meditations, V.1', voice: 'am_liam',
    text: 'In the morning, when you rise unwillingly, let this thought be present: I am rising to the work of a human being. Why then am I dissatisfied if I am going to do the things for which I exist, and for which I was brought into the world? Or have I been made for this, to lie under the blankets and keep myself warm? But this is more pleasant, you say. Do you exist, then, to take your pleasure, and not at all for action or exertion? Do you not see the little plants, the little birds, the ants, the spiders, the bees, working together to put in order their several parts of the universe? And are you unwilling to do the work of a human being? Do you not hasten to do that which is according to your nature?'
  },
  {
    id: 'seneca-brevity', title: 'On the Shortness of Life',
    source: 'Seneca · De Brevitate Vitae', voice: 'am_echo',
    text: 'It is not that we have a short time to live, but that we waste a great deal of it. Life is long enough, and a sufficiently generous amount has been given to us for the highest achievements, if it were all well invested. But when it is wasted in heedless luxury and spent on no good activity, we are forced at last by death\'s final constraint to realise that it has passed away before we knew it was passing. So it is: we are not given a short life, but we make it short, and we are not ill-supplied, but wasteful of it. Life is long, if you know how to use it.'
  },
  {
    id: 'epictetus-control', title: 'What Is in Our Power',
    source: 'Epictetus · Enchiridion, I', voice: 'am_liam',
    text: 'Of things, some are in our power, and others are not. In our power are opinion, movement toward a thing, desire, aversion; and, in a word, whatever are our own acts. Not in our power are the body, property, reputation, offices; and, in a word, whatever are not our own acts. The things in our power are by nature free, not subject to restraint or hindrance; but the things not in our power are weak, slavish, subject to restraint, in the power of others. Remember, then, that if you think the things which are by nature slavish to be free, and the things which are in the power of others to be your own, you will be hindered, you will lament, you will be disturbed, you will blame both gods and men. But if you think that only which is your own to be your own, no one will ever compel you, no one will hinder you; you will blame no one, you will accuse no one; you will do nothing against your will; no one will harm you; you will have no enemy, for you will suffer no harm.'
  },
  {
    id: 'aristotle-habit', title: 'We Are What We Repeatedly Do',
    source: 'Aristotle · Nicomachean Ethics, II.1', voice: 'am_adam',
    text: 'Moral virtue comes about as a result of habit. From this it is plain that none of the moral virtues arises in us by nature; for nothing that exists by nature can form a habit contrary to its nature. The virtues we get by first exercising them, as also happens in the case of the arts. For the things we have to learn before we can do them, we learn by doing them. Men become builders by building, and lyre-players by playing the lyre; so too we become just by doing just acts, temperate by doing temperate acts, brave by doing brave acts. It makes no small difference, then, whether we form habits of one kind or of another from our very youth; it makes a very great difference, or rather all the difference.'
  },
  {
    id: 'plato-cave', title: 'The Allegory of the Cave',
    source: 'Plato · Republic, VII', voice: 'am_echo',
    text: 'And now let me show, in a figure, how far our nature is enlightened or unenlightened. Behold human beings living in an underground den, which has a mouth open toward the light and reaching all along the den. Here they have been from their childhood, and have their legs and necks chained so that they cannot move, and can only see before them, being prevented by the chains from turning round their heads. Above and behind them a fire is blazing at a distance, and between the fire and the prisoners there is a raised way, and you will see, if you look, a low wall built along the way. And do you see men passing along the wall carrying vessels, and statues and figures of animals made of wood and stone and various materials? Like ourselves, they see only their own shadows, or the shadows of one another, which the fire throws on the opposite wall of the cave. To them, the truth would be literally nothing but the shadows of the images.'
  },
  {
    id: 'ecclesiastes-season', title: 'To Every Thing There Is a Season',
    source: 'Ecclesiastes 3 · King James Bible', voice: 'af_sarah',
    text: 'To every thing there is a season, and a time to every purpose under the heaven: a time to be born, and a time to die; a time to plant, and a time to pluck up that which is planted; a time to kill, and a time to heal; a time to break down, and a time to build up; a time to weep, and a time to laugh; a time to mourn, and a time to dance; a time to cast away stones, and a time to gather stones together; a time to embrace, and a time to refrain from embracing; a time to get, and a time to lose; a time to keep, and a time to cast away; a time to rend, and a time to sew; a time to keep silence, and a time to speak; a time to love, and a time to hate; a time of war, and a time of peace.'
  },
  {
    id: 'shakespeare-stage', title: 'All the World\'s a Stage',
    source: 'Shakespeare · As You Like It', voice: 'am_michael',
    text: 'All the world\'s a stage, and all the men and women merely players; they have their exits and their entrances, and one man in his time plays many parts, his acts being seven ages. At first the infant, mewling and puking in the nurse\'s arms. Then the whining schoolboy, with his satchel and shining morning face, creeping like snail unwillingly to school. And then the lover, sighing like furnace. Then a soldier, full of strange oaths, seeking the bubble reputation even in the cannon\'s mouth. And then the justice, full of wise saws and modern instances; and so he plays his part. The sixth age shifts into the lean and slippered pantaloon. Last scene of all, that ends this strange eventful history, is second childishness and mere oblivion, sans teeth, sans eyes, sans taste, sans everything.'
  },
  {
    id: 'pericles-athens', title: 'The Funeral Oration',
    source: 'Pericles, in Thucydides · trans. Crawley', voice: 'am_echo',
    text: 'Our constitution does not copy the laws of neighbouring states; we are rather a pattern to others than imitators ourselves. Its administration favours the many instead of the few; this is why it is called a democracy. If we look to the laws, they afford equal justice to all in their private differences. Our public men have, besides politics, their private affairs to attend to, and our ordinary citizens, though occupied with the pursuits of industry, are still fair judges of public matters. We cultivate refinement without extravagance, and knowledge without effeminacy; wealth we employ more for use than for show, and place the real disgrace of poverty not in owning to the fact but in declining the struggle against it. Make up your minds that happiness depends on being free, and freedom depends on being courageous.'
  },
  {
    id: 'epicurus-death', title: 'Death Is Nothing to Us',
    source: 'Epicurus · Letter to Menoeceus', voice: 'am_adam',
    text: 'Accustom yourself to believe that death is nothing to us. For all good and evil consists in sensation, and death is the deprivation of sensation. And therefore a right understanding that death is nothing to us makes the mortality of life enjoyable, not because it adds to it an infinite span of time, but because it takes away the craving for immortality. For life has no terrors for one who has thoroughly apprehended that there are no terrors for him in ceasing to live. So death, the most terrifying of ills, is nothing to us, since so long as we exist, death is not with us; but when death comes, then we do not exist. It does not then concern either the living or the dead, since for the former it is not, and the latter are no more.'
  },
  {
    id: 'gettysburg', title: 'The Gettysburg Address',
    source: 'Abraham Lincoln · 1863', voice: 'am_liam',
    text: 'Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battlefield of that war. But in a larger sense, we cannot dedicate, we cannot consecrate, we cannot hallow this ground. The brave men, living and dead, who struggled here have consecrated it far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. That from these honoured dead we take increased devotion to that cause for which they gave the last full measure of devotion; that we here highly resolve that these dead shall not have died in vain; that this nation, under God, shall have a new birth of freedom; and that government of the people, by the people, for the people, shall not perish from the earth.'
  },
  {
    id: 'socrates-apology', title: 'No Evil Can Happen to a Good Man',
    source: 'Plato · Apology of Socrates', voice: 'am_echo',
    text: 'Let us reflect, and we shall see that there is great reason to hope that death is a good; for one of two things: either death is a state of nothingness and utter unconsciousness, or, as men say, there is a change and migration of the soul from this world to another. Now if death is like a dreamless sleep, then eternity is no more than a single untroubled night. And if it is a journey to another place, where all the great souls of the past have gone, what would not a man give to converse with them? Wherefore, judges, be of good cheer about death, and know this of a truth: that no evil can happen to a good man, either in life or after death. The hour of departure has arrived, and we go our ways: I to die, and you to live. Which is better, God only knows.'
  },
  {
    id: 'marcus-change', title: 'The Universe Is Change',
    source: 'Marcus Aurelius · Meditations', voice: 'am_adam',
    text: 'Observe constantly that all things take place by change, and accustom yourself to consider that the nature of the Universe loves nothing so much as to change the things which are, and to make new things like them. For everything that exists is in a manner the seed of that which will be. Loss is nothing else but change, and change is Nature\'s delight. Whatever happens has always happened, and will happen again, and everywhere. Soon you will have forgotten all things; soon all things will have forgotten you. The universe is change; our life is what our thoughts make it. Waste no more time arguing what a good man should be. Be one.'
  },
  {
    id: 'boethius-fortune', title: 'The Wheel of Fortune',
    source: 'Boethius · The Consolation of Philosophy', voice: 'am_liam',
    text: 'Thus speaks Fortune: I turn the wheel that spins. I delight to see the high come down and the low rise up. Mount up, if you will, but only on this condition: that you will not think it a hardship to come down again when the rules of my game require it. Inconstancy is my very essence; it is the game I never cease to play as I turn my wheel in its ever-changing circle, filled with joy to bring the top to the bottom and the bottom to the top. What is it you would hold me to? I gave you riches, honours, and ease; I am within my right to take them back. Weep not, then, over what was never truly yours.'
  },
  {
    id: 'homer-iliad', title: 'The Wrath of Achilles',
    source: 'Homer · The Iliad, opening', voice: 'am_michael',
    text: 'Sing, O goddess, the anger of Achilles, son of Peleus, that brought countless ills upon the Achaeans. Many a brave soul did it send hurrying down to the house of death, and many a hero did it yield a prey to dogs and vultures, for so were the counsels of Zeus fulfilled from the day on which the son of Atreus, king of men, and great Achilles, first fell out with one another. And which of the gods was it that set them on to quarrel? It was the son of Zeus and Leto; for he was angry with the king, and sent a pestilence upon the host to plague the people, because the son of Atreus had dishonoured his priest.'
  },
  {
    id: 'beatitudes', title: 'The Beatitudes',
    source: 'The Sermon on the Mount · Matthew 5, King James Bible', voice: 'af_sarah',
    text: 'Blessed are the poor in spirit: for theirs is the kingdom of heaven. Blessed are they that mourn: for they shall be comforted. Blessed are the meek: for they shall inherit the earth. Blessed are they which do hunger and thirst after righteousness: for they shall be filled. Blessed are the merciful: for they shall obtain mercy. Blessed are the pure in heart: for they shall see God. Blessed are the peacemakers: for they shall be called the children of God. Ye are the light of the world. A city that is set on an hill cannot be hid. Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.'
  },
  {
    id: 'hamlet-tobe', title: 'To Be, or Not to Be',
    source: 'Shakespeare · Hamlet', voice: 'am_michael',
    text: 'To be, or not to be, that is the question: whether \'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles, and by opposing end them. To die, to sleep, no more; and by a sleep to say we end the heart-ache and the thousand natural shocks that flesh is heir to: \'tis a consummation devoutly to be wished. To die, to sleep; to sleep, perchance to dream: ay, there\'s the rub, for in that sleep of death what dreams may come, when we have shuffled off this mortal coil, must give us pause. Thus conscience does make cowards of us all, and thus the native hue of resolution is sicklied o\'er with the pale cast of thought.'
  },
  {
    id: 'emerson-selfreliance', title: 'Trust Thyself',
    source: 'Ralph Waldo Emerson · Self-Reliance', voice: 'am_echo',
    text: 'There is a time in every man\'s education when he arrives at the conviction that envy is ignorance; that imitation is suicide; that he must take himself, for better for worse, as his portion. Trust thyself: every heart vibrates to that iron string. Whoso would be a man must be a nonconformist. Nothing is at last sacred but the integrity of your own mind. A foolish consistency is the hobgoblin of little minds, adored by little statesmen and philosophers and divines. Speak what you think now in hard words, and tomorrow speak what tomorrow thinks in hard words again, though it contradict everything you said today. To be great is to be misunderstood.'
  },
  {
    id: 'thoreau-walden', title: 'To Live Deliberately',
    source: 'Henry David Thoreau · Walden', voice: 'am_adam',
    text: 'I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived. I did not wish to live what was not life, living is so dear; nor did I wish to practise resignation, unless it was quite necessary. I wanted to live deep and suck out all the marrow of life, to live so sturdily and Spartan-like as to put to rout all that was not life. If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away.'
  },
  {
    id: 'lincoln-second', title: 'With Malice Toward None',
    source: 'Abraham Lincoln · Second Inaugural Address', voice: 'am_liam',
    text: 'With malice toward none, with charity for all, with firmness in the right as God gives us to see the right, let us strive on to finish the work we are in, to bind up the nation\'s wounds, to care for him who shall have borne the battle and for his widow and his orphan, to do all which may achieve and cherish a just and lasting peace among ourselves and with all nations.'
  },
  {
    id: 'jefferson-declaration', title: 'We Hold These Truths',
    source: 'Thomas Jefferson · The Declaration of Independence', voice: 'am_echo',
    text: 'We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable rights, that among these are life, liberty, and the pursuit of happiness. That to secure these rights, governments are instituted among men, deriving their just powers from the consent of the governed. That whenever any form of government becomes destructive of these ends, it is the right of the people to alter or to abolish it, and to institute new government, laying its foundation on such principles, and organising its powers in such form, as to them shall seem most likely to effect their safety and happiness.'
  },
  {
    id: 'kipling-if', title: 'If—',
    source: 'Rudyard Kipling', voice: 'am_michael',
    text: 'If you can keep your head when all about you are losing theirs and blaming it on you; if you can trust yourself when all men doubt you, but make allowance for their doubting too; if you can wait and not be tired by waiting, or being lied about, don\'t deal in lies, or being hated, don\'t give way to hating, and yet don\'t look too good, nor talk too wise. If you can dream, and not make dreams your master; if you can think, and not make thoughts your aim; if you can meet with triumph and disaster and treat those two impostors just the same. If you can force your heart and nerve and sinew to serve your turn long after they are gone, and so hold on when there is nothing in you except the will which says to them: hold on. If you can fill the unforgiving minute with sixty seconds\' worth of distance run, yours is the Earth and everything that\'s in it, and, which is more, you\'ll be a Man, my son.'
  }
];
