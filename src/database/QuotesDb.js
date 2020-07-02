const quotes = [
    {
        "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
    },
    {
        "quote": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
    },
    {
        "quote": "A house divided against itself cannot stand.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "Difficulties increase the nearer we get to the goal.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "quote": "Fate is in your hands and no one elses",
        "author": "Byron Pulsifer"
    },
    {
        "quote": "Be the chief but never the lord.",
        "author": "Lao Tzu"
    },
    {
        "quote": "Nothing happens unless first we dream.",
        "author": "Carl Sandburg"
    },
    {
        "quote": "Well begun is half done.",
        "author": "Aristotle"
    }, {
        "quote": "Life is a learning experience, only if you learn.",
        "author": "Yogi Berra"
    },
    {
        "quote": "Self-complacency is fatal to progress.",
        "author": "Margaret Sangster"
    }, {
        "quote": "Peace comes from within. Do not seek it without.",
        "author": "Buddha"
    },
    {
        "quote": "What you give is what you get.",
        "author": "Byron Pulsifer"
    }, {
        "quote": "We can only learn to love by loving.",
        "author": "Iris Murdoch"
    },
    {
        "quote": "Life is change. Growth is optional. Choose wisely.",
        "author": "Karen Clark"
    },
    {
        "quote": "You'll see it when you believe it.",
        "author": "Wayne Dyer"
    },
    {
        "quote": "Today is the tomorrow we worried about yesterday.",
        "author": ""
    },
    {
        "quote": "It's easier to see the mistakes on someone else's paper.",
        "author": ""
    },
    {
        "quote": "Every man dies. Not every man really lives.",
        "author": ""
    },
    {
        "quote": "To lead people walk behind them.",
        "author": "Lao Tzu"
    },
    {
        "quote": "Having nothing, nothing can he lose.",
        "author": "William Shakespeare"
    },
    {
        "quote": "Trouble is only opportunity in work clothes.",
        "author": "Henry J. Kaiser"
    },
    {
        "quote": "A rolling stone gathers no moss.",
        "author": "Publilius Syrus"
    },
    {
        "quote": "Ideas are the beginning points of all fortunes.",
        "author": "Napoleon Hill"
    },
    {
        "quote": "Everything in life is luck.",
        "author": "Donald Trump"
    },
    {
        "quote": "Doing nothing is better than being busy doing nothing.",
        "author": "Lao Tzu"
    },
    {
        "quote": "Trust yourself. You know more than you think you do.",
        "author": "Benjamin Spock"
    },
    {
        "quote": "Study the past, if you would divine the future.",
        "author": "Confucius"
    },
    {
        "quote": "The day is already blessed, find peace within it.",
        "author": ""
    },
    {
        "quote": "From error to error one discovers the entire truth.",
        "author": "Sigmund Freud"
    },
    {
        "quote": "Well done is better than well said.",
        "author": "Benjamin Franklin"
    },
    {
        "quote": "Bite off more than you can chew, then chew it.",
        "author": "Ella Williams"
    },
    {
        "quote": "Work out your own salvation. Do not depend on others.",
        "author": "Buddha"
    },
    {
        "quote": "One today is worth two tomorrows.",
        "author": "Benjamin Franklin"
    },
    {
        "quote": "Once you choose hope, anythings possible.",
        "author": "Christopher Reeve"
    },
    {
        "quote": "God always takes the simplest way.",
        "author": "Albert Einstein"
    },
    {
        "quote": "One fails forward toward success.",
        "author": "Charles Kettering"
    },
    {
        "quote": "From small beginnings come great things.",
        "author": ""
    },
    {
        "quote": "Learning is a treasure that will follow its owner everywhere",
        "author": "Chinese proverb"
    },
    {
        "quote": "Be as you wish to seem.",
        "author": "Socrates"
    },
    {
        "quote": "The world is always in movement.",
        "author": "V. Naipaul"
    },
    {
        "quote": "Never mistake activity for achievement.",
        "author": "John Wooden"
    },
    {
        "quote": "What worries you masters you.",
        "author": "Haddon Robinson"
    },
    {
        "quote": "One faces the future with ones past.",
        "author": "Pearl Buck"
    },
    {
        "quote": "Goals are the fuel in the furnace of achievement.",
        "author": "Brian Tracy"
    },
    {
        "quote": "Who sows virtue reaps honour.",
        "author": "Leonardo da Vinci"
    },
    {
        "quote": "Be kind whenever possible. It is always possible.",
        "author": "Dalai Lama"
    },
    {
        "quote": "Talk doesn't cook rice.",
        "author": "Chinese proverb"
    }, {
        "quote": "He is able who thinks he is able.",
        "author": "Buddha"
    }, {
        "quote": "Be as you wish to seem.",
        "author": "Socrates"
    }, {
        "quote": "A goal without a plan is just a wish.",
        "author": "Larry Elder"
    }, {
        "quote": "To succeed, we must first believe that we can.",
        "author": "Michael Korda"
    }, {
        "quote": "Learn from yesterday, live for today, hope for tomorrow.",
        "author": "Albert Einstein"
    }, {
        "quote": "A weed is no more than a flower in disguise.",
        "author": "James Lowell"
    }, {
        "quote": "Do, or do not. There is no try.",
        "author": "Yoda"
    }, {
        "quote": "All serious daring starts from within.",
        "author": "Harriet Beecher Stowe"
    }, {
        "quote": "The best teacher is experience learned from failures.",
        "author": "Byron Pulsifer"
    }, {
        "quote": "Think how hard physics would be if particles could think.",
        "author": "Murray Gell-Mann"
    }, {
        "quote": "Love is the flower you've got to let grow.",
        "author": "John Lennon"
    }, {
        "quote": "Don't wait. The time will never be just right.",
        "author": "Napoleon Hill"
    }, {
        "quote": "One fails forward toward success.",
        "author": "Charles Kettering"
    }, {
        "quote": "Time is the wisest counsellor of all.",
        "author": "Pericles"
    }, {
        "quote": "You give before you get.",
        "author": "Napoleon Hill"
    }, {
        "quote": "Wisdom begins in wonder.",
        "author": "Socrates"
    }, {
        "quote": "Without courage, wisdom bears no fruit.",
        "author": "Baltasar Gracian"
    }, {
        "quote": "Change in all things is sweet.",
        "author": "Aristotle"
    }, {
        "quote": "What you fear is that which requires action to overcome.",
        "author": "Byron Pulsifer"
    }, {
        "quote": "The best teacher is experience learned from failures.",
        "author": "Byron Pulsifer"
    }, {
        "quote": "When performance exceeds ambition, the overlap is called success.",
        "author": "Cullen Hightower"
    }, {
        "quote": "When deeds speak, words are nothing.",
        "author": "African proverb"
    }, {
        "quote": "Real magic in relationships means an absence of judgement of others.",
        "author": "Wayne Dyer"
    }, {
        "quote": "When performance exceeds ambition, the overlap is called success.",
        "author": "Cullen Hightower"
    }, {
        "quote": "I never think of the future. It comes soon enough.",
        "author": "Albert Einstein"
    }, {
        "quote": "Skill to do comes of doing.",
        "author": "Ralph Emerson"
    }, {
        "quote": "Wisdom is the supreme part of happiness.",
        "author": "Sophocles"
    }, {
        "quote": "I believe that every person is born with talent.",
        "author": "Maya Angelou"
    }, {
        "quote": "Important principles may, and must, be inflexible.",
        "author": "Abraham Lincoln"
    }, {
        "quote": "The undertaking of a new action brings new strength.",
        "author": "Richard Evans"
    }, {
        "quote": "I believe that every person is born with talent.",
        "author": "Maya Angelou"
    }, {
        "quote": "The years teach much which the days never know.",
        "author": "Ralph Emerson"
    }, {
        "quote": "Our distrust is very expensive.",
        "author": "Ralph Emerson"
    }, {
        "quote": "All know the way; few actually walk it.",
        "author": "Bodhidharma"
    }, {
        "quote": "Great talent finds happiness in execution.",
        "author": "Johann Wolfgang von Goethe"
    },
    {
        "quote": "Faith in oneself is the best and safest course.",
        "author": "Michelangelo"
    },
    {
        "quote": "Courage is going from failure to failure without losing enthusiasm.",
        "author": "Winston Churchill"
    }, {
        "quote": "The two most powerful warriors are patience and time.",
        "author": "Leo Tolstoy"
    },
    {
        "quote": "Anticipate the difficult by managing the easy.",
        "author": "Lao Tzu"
    }, {
        "quote": "Those who are free of resentful thoughts surely find peace.",
        "author": "Buddha"
    },
    {
        "quote": "Talk doesn't cook rice.",
        "author": "Chinese proverb"
    },
    {
        "quote": "A short saying often contains much wisdom.",
        "author": "Sophocles"
    },
    {
        "quote": "The day is already blessed, find peace within it.",
        "author": ""
    },
    {
        "quote": "It takes both sunshine and rain to make a rainbow.",
        "author": ""
    },
    {
        "quote": "A beautiful thing is never perfect.",
        "author": ""
    },
    {
        "quote": "Only do what your heart tells you.",
        "author": "Princess Diana"
    },
    {
        "quote": "Life is movement-we breathe, we eat, we walk, we move!",
        "author": "John Pierrakos"
    },
    {
        "quote": "It's not who you are that holds you back, it's who you think you're not.",
        "author": null
    },
    {
        "quote": "All children are artists. The problem is how to remain an artist once he grows up.",
        "author": "Pablo Picasso"
    },
    {
        "quote": "Either I will find a way, or I will make one.",
        "author": "Philip Sidney"
    },
    {
        "quote": "He who knows that enough is enough will always have enough.",
        "author": "Lao Tzu"
    },
    {
        "quote": "The only way to have a friend is to be one.",
        "author": "Ralph Emerson"
    },
    {
        "quote": "If we had no winter, the spring would not be so pleasant; if we did not sometimes taste of adversity, prosperity would not be so welcome.",
        "author": "Anne Bradstreet"
    },
    {
        "quote": "Joy is what happens to us when we allow ourselves to recognize how good things really are.",
        "author": "Marianne Williamson"
    },
    {
        "quote": "Your vision will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
        "author": "Carl Jung"
    },
    {
        "quote": "There is never enough time to do everything, but there is always enough time to do the most important thing.",
        "author": "Brian Tracy"
    },
    {
        "quote": "You really can change the world if you care enough.",
        "author": "Marian Edelman"
    },
    {
        "quote": "What you are is what you have been. What you will be is what you do now.",
        "author": "Buddha"
    },
    {
        "quote": "Our lives are the only meaningful expression of what we believe and in Whom we believe. And the only real wealth, for any of us, lies in our faith.",
        "author": "Gordon Hinckley"
    },
    {
        "quote": "There surely is in human nature an inherent propensity to extract all the good out of all the evil.",
        "author": "Benjamin Haydon"
    },
    {
        "quote": "Music in the soul can be heard by the universe.",
        "author": "Lao Tzu"
    },
    {
        "quote": "What we see depends mainly on what we look for.",
        "author": "John Lubbock"
    },
    {
        "quote": "To hell with circumstances; I create opportunities.",
        "author": "Bruce Lee"
    },
    {
        "quote": "The truest greatness lies in being kind, the truest wisdom in a happy mind.",
        "author": "Ella Wilcox"
    },
    {
        "quote": "An ounce of emotion is equal to a ton of facts.",
        "author": "John Junor"
    },
    {
        "quote": "We need to find the courage to say NO to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity.",
        "author": "Barbara De Angelis"
    },
    {
        "quote": "Great is the art of beginning, but greater is the art of ending.",
        "author": "Lazurus Long"
    },
    {
        "quote": "Simply put, you believer that things or people make you unhappy, but this is not accurate. You make yourself unhappy.",
        "author": "Wayne Dyer"
    },
    {
        "quote": "Nothing will work unless you do.",
        "author": "Maya Angelou"
    },
    {
        "quote": "Our ability to achieve happiness and success depends on the strength of our wings.",
        "author": "Catherine Pulsifer"
    },
    {
        "quote": "To go against the dominant thinking of your friends, of most of the people you see every day, is perhaps the most difficult act of heroism you can perform.",
        "author": "Theodore H. White"
    },
    {
        "quote": "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
        "author": "Melody Beattie"
    },
    {
        "quote": "Into each life rain must fall but rain can be the giver of life and it is all in your attitude that makes rain produce sunshine.",
        "author": "Byron Pulsifer"
    },
    {
        "quote": "We are all inclined to judge ourselves by our ideals; others, by their acts.",
        "author": "Harold Nicolson"
    },
    {
        "quote": "Nothing is a waste of time if you use the experience wisely.",
        "author": "Rodin"
    },
    {
        "quote": "If one way be better than another, that you may be sure is natures way.",
        "author": "Aristotle"
    },
    {
        "quote": "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it.",
        "author": "Napoleon Hill"
    },
    {
        "quote": "It is not in the stars to hold our destiny but in ourselves.",
        "author": "William Shakespeare"
    },
    {
        "quote": "Using the power of decision gives you the capacity to get past any excuse to change any and every part of your life in an instant.",
        "author": "Tony Robbins"
    },
    {
        "quote": "I will prepare and some day my chance will come.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "Sometimes the cards we are dealt are not always fair. However you must keep smiling and moving on.",
        "author": "Tom Jackson"
    },
    {
        "quote": "Strong people make as many mistakes as weak people. Difference is that strong people admit their mistakes, laugh at them, learn from them. That is how they become strong.",
        "author": "Richard Needham"
    },
    {
        "quote": "To know your purpose is to live a life of direction, and in that direction is found peace and tranquillity.",
        "author": "Byron Pulsifer"
    },
    {
        "quote": "You can stand tall without standing on someone. You can be a victor without having victims.",
        "author": "Harriet Woods"
    },
    {
        "quote": "Bad times have a scientific value. These are occasions a good learner would not miss.",
        "author": "Ralph Emerson"
    },
]
export default quotes