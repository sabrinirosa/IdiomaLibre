/* ============================================================
   IDIOLIBRE — js/lessons-data-b1.js
   Banco de dados das aulas do nivel B1 — 30 aulas em 6 mundos:
   Me & My Life, Work & Study, Life Abroad, Travel,
   People & Social Life, Express Yourself.

   Cada aula segue as 10 etapas do metodo Speak-to-Live: Situation,
   Notice, Discover, Change it, Your turn, Ask back, Conversation,
   Mission, Reuse, Unlock. A gramatica nunca e o titulo da aula -
   ela aparece porque a situacao pede.

   100% imersivo: a cena de abertura, a introducao e as instrucoes
   ficam em ingles, e so as PALAVRAS NOVAS (marcadas com `true` no
   vocabulario) ganham uma traducao escondida, revelavel com um
   clique.

   Segue a mesma estrutura de dados de js/lessons-data.js e
   js/lessons-data-a2.js. Depende de js/app.js para renderizar
   (?nivel=b1).
   ============================================================ */

const LESSON_TITLES_B1 = [
  "Who I Am Now",
  "My Typical Week",
  "What Happened?",
  "Have You Ever...?",
  "My Life Story",
  "What Do You Do?",
  "A Busy Day",
  "Can You Help Me?",
  "Something Went Wrong",
  "Let's Fix It",
  "My Neighborhood",
  "Getting Things Done",
  "At the Office",
  "A Problem at Home",
  "Living Abroad",
  "Let's Make a Plan",
  "Booking a Trip",
  "Something Went Wrong",
  "Tell Me About Your Trip",
  "Travel Challenge",
  "Let's Meet Up",
  "Getting to Know You",
  "What Do You Think?",
  "I See Your Point",
  "Keep Talking",
  "Explain the Problem",
  "Tell It Another Way",
  "Tell Me More",
  "No Script",
  "🌎 B1 SPEAK-TO-LIVE CHALLENGE"
];

const LESSON_EMOJIS_B1 = ["🙋", "📅", "😯", "🧳", "📖", "💼", "🗒️", "🙏", "😓", "🔧", "🏘️", "✅", "🏢", "🚿", "🌍", "🗺️", "🏨", "🛫", "📸", "🧳", "📱", "🤝", "💭", "🗣️", "💬", "🧩", "🔄", "📢", "🎤", "🌎"];


/* ================= WORLD 1 - ME & MY LIFE ================= */
/* ================= AULA 01 — Who I Am Now ================= */
const LESSON_B1_01 = {
  "ready": true,
  "label": "01",
  "title": "Who I Am Now",
  "eyebrow": "Level B1 — Lesson 01",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "You already know how to say your name, where you live and what you do. Now let's go further: let's talk about how your life has changed, and how long things have been this way.",
  "scene": {
    "emoji": "🙋",
    "caption": "Ana is telling a new neighbor about her life now, and how it's changed.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Neighbor",
        "en": "So, how long have you lived here?",
        "pt": "Então, há quanto tempo você mora aqui?"
      },
      {
        "who": "L",
        "speaker": "Ana",
        "en": "I've been here for two years. I used to live in Brazil.",
        "pt": "Estou aqui há dois anos. Eu morava no Brasil."
      },
      {
        "who": "A",
        "speaker": "Neighbor",
        "en": "Wow, that's a big change! What's different for you?",
        "pt": "Nossa, que grande mudança! O que é diferente pra você?"
      }
    ]
  },
  "vocab": [
    [
      "I used to live in Brazil.",
      "ái iúst tu láiv in brazíl",
      "Eu morava no Brasil.",
      "🇧🇷",
      true
    ],
    [
      "I've been here for two years.",
      "áivi bín ríer for tú íers",
      "Estou aqui há dois anos.",
      "📅",
      true
    ],
    [
      "Things have changed a lot.",
      "things rrev chêinjd a lât",
      "As coisas mudaram bastante.",
      "🔄",
      true
    ],
    [
      "I work from home now.",
      "ái uérk from rrôum náu",
      "Eu trabalho de casa agora.",
      "🏠",
      true
    ],
    [
      "I used to work in an office.",
      "ái iúst tu uérk in an ófis",
      "Eu trabalhava em um escritório.",
      "🏢",
      true
    ],
    [
      "Since then, a lot has changed.",
      "sins dhen, a lât rrez chêinjd",
      "Desde então, muita coisa mudou.",
      "⏳",
      true
    ],
    [
      "What's different for you?",
      "uáts díferent for iú",
      "O que é diferente pra você?",
      "❓",
      true
    ],
    [
      "Life is pretty good these days.",
      "láif iz príti gud dhíz déiz",
      "A vida está bem boa hoje em dia.",
      "😊",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I used to live in Brazil, but now I live here. I've been here for two years.",
    "formula": "used to + verb (past habit, not true anymore) / have/has been + time (present perfect for duration)",
    "examples": [
      "I used to work in a restaurant.",
      "I've lived here for two years.",
      "I used to live in Brazil, but now I live in Portugal.",
      "Things have changed a lot since then."
    ]
  },
  "simplify": [
    "I am / I live / I work...",
    "I used to + VERB...",
    "I've been + time (for/since)..."
  ],
  "swap": {
    "base": "I used to ______, but now I ______.",
    "options": [
      "🏢 work in an office / work from home",
      "🏠 live alone / live with my family",
      "🎓 study English / speak English every day",
      "🏙️ live in a small town / live in a big city",
      "🎸 play in a band / play just for fun"
    ]
  },
  "activities": [
    [
      "Write a sentence about something that used to be true for you.",
      "I used to live in a small town.",
      "ái iúst tu láiv in a smól táun"
    ],
    [
      "Write a sentence about how long you've done something.",
      "I've worked here for three years.",
      "áivi uérkt ríer for thri íers"
    ],
    [
      "Combine both ideas into one sentence about your life.",
      "I used to live alone, but now I live with my family.",
      "ái iúst tu láiv alôun, bât náu ái láiv uíth mái fámili"
    ]
  ],
  "dialogue": [
    [
      "A",
      "So, how long have you lived here?",
      "sôu, ráu lóng rrev iú livd ríer",
      "Então, há quanto tempo você mora aqui?"
    ],
    [
      "L",
      "I've lived here for about two years now.",
      "áivi livd ríer for abáut tú íers náu",
      "Eu moro aqui há uns dois anos."
    ],
    [
      "A",
      "And where did you use to live before?",
      "end uér did iú iúz tu láiv bifór",
      "E onde você morava antes?"
    ],
    [
      "L",
      "I used to live in Brazil, in a small city.",
      "ái iúst tu láiv in brazíl, in a smól síti",
      "Eu morava no Brasil, numa cidade pequena."
    ],
    [
      "A",
      "That's a big change! What's the biggest difference for you?",
      "dhats a big chêinj! uáts dhe bíguest díferens for iú",
      "Que grande mudança! Qual a maior diferença pra você?"
    ],
    [
      "L",
      "Everything, really — the language, the food, the people.",
      "évrithin, ríli — dhe lánguij, dhe fúd, dhe pípol",
      "Tudo, sério — a língua, a comida, as pessoas."
    ]
  ],
  "connectors": [
    "Wow, that's a big change!",
    "What's different for you?",
    "Things have changed a lot."
  ],
  "reuse": {
    "firstLesson": true,
    "known": [
      "All A1 and A2 structures: routines, past events, opinions, comparisons"
    ],
    "today": [
      "I used to...",
      "I've been here for...",
      "Things have changed"
    ],
    "combo": "I used to live in Brazil, but now I live here — I've been here for two years, and things have changed a lot."
  },
  "challenge": "Record yourself talking about something that used to be true for you, and how long something has been true now."
};

/* ================= AULA 02 — My Typical Week ================= */
const LESSON_B1_02 = {
  "ready": true,
  "label": "02",
  "title": "My Typical Week",
  "eyebrow": "Level B1 — Lesson 02",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Now let's talk about what a normal week looks like for you — your routine, your responsibilities, and what changes on the weekend.",
  "scene": {
    "emoji": "📅",
    "caption": "Leo is explaining what a normal week looks like for him.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "During the week, I usually work until six.",
        "pt": "Durante a semana, eu normalmente trabalho até as seis."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "And what about weekends?",
        "pt": "E nos fins de semana?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I only relax on weekends. Every day during the week is pretty much the same.",
        "pt": "Eu só relaxo nos fins de semana. Todo dia durante a semana é praticamente igual."
      }
    ]
  },
  "vocab": [
    [
      "During the week",
      "diúrin dhe uík",
      "Durante a semana",
      "🗓️",
      true
    ],
    [
      "I usually work until six.",
      "ái iújuali uérk antíl siks",
      "Eu normalmente trabalho até as seis.",
      "🕕",
      true
    ],
    [
      "I sometimes work on Saturdays.",
      "ái sâmtaims uérk on sáturdeis",
      "Eu às vezes trabalho aos sábados.",
      "🗓️",
      true
    ],
    [
      "Every day is pretty much the same.",
      "évri déi iz príti mâtch dhe séim",
      "Todo dia é praticamente igual.",
      "🔁",
      true
    ],
    [
      "I only relax on weekends.",
      "ái ôunli riláks on uíkends",
      "Eu só relaxo nos fins de semana.",
      "🛋️",
      true
    ],
    [
      "My week is quite busy.",
      "mái uík iz kuáit bízi",
      "Minha semana é bem corrida.",
      "⏰",
      true
    ],
    [
      "What's your week like?",
      "uáts iór uík láik",
      "Como é sua semana?",
      "❓",
      true
    ],
    [
      "It depends on the day.",
      "it dipénds on dhe déi",
      "Depende do dia.",
      "🤔",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "During the week, I usually work until six. On weekends, I only relax.",
    "formula": "usually/sometimes ficam antes do verbo principal; \"during the week\" e \"on weekends\" marcam quando algo acontece.",
    "examples": [
      "I usually wake up early during the week.",
      "I sometimes work on Saturdays.",
      "Every day is pretty similar for me.",
      "I only relax on weekends."
    ]
  },
  "simplify": [
    "usually / sometimes + VERB",
    "every day / during the week",
    "on weekends / at weekends"
  ],
  "swap": {
    "base": "During the week, I usually ______. On weekends, I ______.",
    "options": [
      "💼 work / relax",
      "📚 study / see friends",
      "🍳 cook / eat out",
      "🏋️ exercise / sleep in",
      "🧹 clean the house / do nothing"
    ]
  },
  "activities": [
    [
      "Write a sentence about your weekday routine.",
      "During the week, I usually work until six.",
      "diúrin dhe uík, ái iújuali uérk antíl siks"
    ],
    [
      "Write a sentence about your weekend.",
      "On weekends, I usually see friends.",
      "on uíkends, ái iújuali sí frends"
    ],
    [
      "Ask someone what their week is like.",
      "What's your week like?",
      "uáts iór uík láik"
    ]
  ],
  "dialogue": [
    [
      "A",
      "What's your week like these days?",
      "uáts iór uík láik dhíz déiz",
      "Como está sendo sua semana ultimamente?"
    ],
    [
      "L",
      "Pretty busy. During the week I usually work until six.",
      "príti bízi. diúrin dhe uík ái iújuali uérk antíl siks",
      "Bem corrida. Durante a semana eu normalmente trabalho até as seis."
    ],
    [
      "A",
      "Do you ever work on weekends?",
      "du iú éver uérk on uíkends",
      "Você chega a trabalhar nos fins de semana?"
    ],
    [
      "L",
      "Sometimes, but I try to only relax on weekends.",
      "sâmtaims, bât ái trái tu ôunli riláks on uíkends",
      "Às vezes, mas eu tento só relaxar nos fins de semana."
    ],
    [
      "A",
      "That sounds like a good balance.",
      "dhat sáunds láik a gud bálans",
      "Parece um bom equilíbrio."
    ],
    [
      "L",
      "It is, most weeks anyway!",
      "it iz, môust uíks éniuei",
      "É, na maioria das semanas pelo menos!"
    ]
  ],
  "connectors": [
    "What's your week like?",
    "It depends on the day.",
    "That sounds like a good balance."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I used to...",
      "I've been here for...",
      "Things have changed"
    ],
    "today": [
      "usually / sometimes",
      "during the week / on weekends",
      "every day is the same"
    ],
    "combo": "I used to work every day, but now during the week I usually work until six, and I only relax on weekends."
  },
  "challenge": "Record yourself describing your typical week: what you do during the week, and what's different on weekends."
};

/* ================= AULA 03 — What Happened? ================= */
const LESSON_B1_03 = {
  "ready": true,
  "label": "03",
  "title": "What Happened?",
  "eyebrow": "Level B1 — Lesson 03",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Time to tell a story. In this lesson, you'll learn how to describe something that happened, and what was already going on when it happened.",
  "scene": {
    "emoji": "😯",
    "caption": "Ana is telling Leo about something that happened to her yesterday.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "You won't believe what happened to me yesterday!",
        "pt": "Você não vai acreditar no que aconteceu comigo ontem!"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What happened?",
        "pt": "O que aconteceu?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I was walking home when it suddenly started raining.",
        "pt": "Eu estava andando pra casa quando de repente começou a chover."
      }
    ]
  },
  "vocab": [
    [
      "You won't believe what happened!",
      "iú uôunt bilív uát rrápend",
      "Você não vai acreditar o que aconteceu!",
      "😲",
      true
    ],
    [
      "I was walking home when...",
      "ái uóz uókin rrôum uén",
      "Eu estava andando pra casa quando...",
      "🚶",
      true
    ],
    [
      "It suddenly started raining.",
      "it sâdnli stártid réinin",
      "De repente começou a chover.",
      "🌧️",
      true
    ],
    [
      "While I was waiting, I saw...",
      "uáil ái uóz uéitin, ái sô",
      "Enquanto eu esperava, eu vi...",
      "👀",
      true
    ],
    [
      "I couldn't believe my eyes.",
      "ái kúdnt bilív mái áis",
      "Eu não podia acreditar no que via.",
      "😳",
      true
    ],
    [
      "So then what did you do?",
      "sôu dhen uát did iú du",
      "Então o que você fez?",
      "❓",
      true
    ],
    [
      "In the end, everything was fine.",
      "in dhe end, évrithin uóz fáin",
      "No final, tudo ficou bem.",
      "😌",
      true
    ],
    [
      "What a story!",
      "uát a stóri",
      "Que história!",
      "📖",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I was walking home when it started raining. / While I was waiting, I saw an old friend.",
    "formula": "was/were + VERB-ing (Past Continuous, ação em andamento) + when/while + Past Simple (ação que interrompe)",
    "examples": [
      "I was walking home when it started raining.",
      "While I was waiting for the bus, I saw an old friend.",
      "She was cooking dinner when the phone rang.",
      "We were watching a movie when the power went out."
    ]
  },
  "simplify": [
    "I was + VERB-ing + when...",
    "While I was + VERB-ing, ...",
    "Past Simple for the interrupting action"
  ],
  "swap": {
    "base": "I was ______ when ______.",
    "options": [
      "🚶 walking home / it started raining",
      "🍳 cooking dinner / the phone rang",
      "🎬 watching a movie / the power went out",
      "😴 sleeping / someone knocked on the door",
      "🚗 driving / I saw an accident"
    ]
  },
  "activities": [
    [
      "Write a sentence about what you were doing when something happened.",
      "I was cooking dinner when the phone rang.",
      "ái uóz kúkin díner uén dhe fôun reng"
    ],
    [
      "Write a sentence using \"while\".",
      "While I was waiting, I saw an old friend.",
      "uáil ái uóz uéitin, ái sô en ôuld frend"
    ],
    [
      "Tell the end of a short story, using \"in the end\".",
      "In the end, everything was fine.",
      "in dhe end, évrithin uóz fáin"
    ]
  ],
  "dialogue": [
    [
      "A",
      "You won't believe what happened to me yesterday!",
      "iú uôunt bilív uát rrápend tu mí iésterdei",
      "Você não vai acreditar o que aconteceu comigo ontem!"
    ],
    [
      "L",
      "What happened?",
      "uát rrápend",
      "O que aconteceu?"
    ],
    [
      "A",
      "I was walking home when it suddenly started raining, really hard.",
      "ái uóz uókin rrôum uén it sâdnli stártid réinin, ríli rrárd",
      "Eu estava andando pra casa quando de repente começou a chover, muito forte."
    ],
    [
      "L",
      "Oh no! Did you have an umbrella?",
      "ôu nôu! did iú rrev en âmbréla",
      "Ah não! Você tinha um guarda-chuva?"
    ],
    [
      "A",
      "No! But while I was waiting under a tree, I saw an old friend from school.",
      "nôu! bât uáil ái uóz uéitin ânder a trí, ái sô en ôuld frend from skúl",
      "Não! Mas enquanto eu esperava debaixo de uma árvore, eu vi uma amiga antiga da escola."
    ],
    [
      "L",
      "What a coincidence! So, in the end, how did you get home?",
      "uát a kôuinsidens! sôu, in dhe end, ráu did iú guét rrôum",
      "Que coincidência! Então, no final, como você chegou em casa?"
    ]
  ],
  "connectors": [
    "You won't believe what happened!",
    "What happened?",
    "What a story!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "usually / sometimes",
      "during the week / on weekends",
      "every day is the same"
    ],
    "today": [
      "I was + VERB-ing when...",
      "While I was...",
      "In the end..."
    ],
    "combo": "During the week I was walking home when it suddenly started raining — what a story!"
  },
  "challenge": "Record yourself telling a short story about something that happened to you, using \"I was...when\" and \"while\"."
};

/* ================= AULA 04 — Have You Ever...? ================= */
const LESSON_B1_04 = {
  "ready": true,
  "label": "04",
  "title": "Have You Ever...?",
  "eyebrow": "Level B1 — Lesson 04",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "You already know how to talk about your routine and about things that happened in the past. Now let's go further: let's talk about the experiences you've had in your life — the things you've done, and the things you've never done.",
  "scene": {
    "emoji": "🧳",
    "caption": "Ana and Leo are talking about travelling, and Ana mentions a country she visited last year.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Have you ever been to Spain?",
        "pt": "Você já esteve na Espanha?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "No, I haven't. But I've been to Italy twice!",
        "pt": "Não, nunca estive. Mas já estive na Itália duas vezes!"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "That sounds amazing! I've never been to Italy.",
        "pt": "Isso parece incrível! Eu nunca estive na Itália."
      }
    ]
  },
  "vocab": [
    [
      "Have you ever been to...?",
      "rrev iú éver bín tu",
      "Você já esteve em...?",
      "🌍",
      true
    ],
    [
      "I've been to Spain.",
      "áivi bín tu spêin",
      "Eu já estive na Espanha.",
      "🇪🇸",
      true
    ],
    [
      "I've never tried sushi.",
      "áivi néver tráid súchi",
      "Eu nunca experimentei sushi.",
      "🍣",
      true
    ],
    [
      "I haven't done that yet.",
      "ái révnt dân dhat iét",
      "Eu ainda não fiz isso.",
      "⏳",
      true
    ],
    [
      "That sounds amazing!",
      "dhat sáunds améizin",
      "Isso parece incrível!",
      "🤩",
      true
    ],
    [
      "What was it like?",
      "uát uóz it láik",
      "Como foi?",
      "❓",
      true
    ],
    [
      "I'd love to do that.",
      "áid lâv tu du dhat",
      "Eu adoraria fazer isso.",
      "💭",
      true
    ],
    [
      "Really? Me too!",
      "ríli? mi tú",
      "Sério? Eu também!",
      "😲",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I've been to Spain. / Have you ever tried sushi?",
    "formula": "have/has + VERB (past participle) — Present Perfect for life experiences",
    "examples": [
      "I've been to Portugal.",
      "I've tried Thai food.",
      "I've never seen snow.",
      "Have you ever ridden a horse?"
    ]
  },
  "simplify": [
    "Have you ever + VERB (3rd form)...?",
    "I've + VERB (3rd form)...",
    "I've never + VERB (3rd form)..."
  ],
  "swap": {
    "base": "I've never ______.",
    "options": [
      "🍣 tried sushi",
      "🏔️ climbed a mountain",
      "✈️ flown in a plane",
      "🎤 sung karaoke",
      "🐎 ridden a horse"
    ]
  },
  "activities": [
    [
      "Write a sentence about a place you've been to.",
      "I've been to Italy.",
      "áivi bín tu ítali"
    ],
    [
      "Write a sentence about something you've never done.",
      "I've never eaten octopus.",
      "áivi néver ítn óktopus"
    ],
    [
      "Ask someone if they've ever tried a new food, using \"Have you ever...?\"",
      "Have you ever tried Thai food?",
      "rrev iú éver tráid tái fud"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Have you ever travelled alone?",
      "rrev iú éver trável alôun",
      "Você já viajou sozinha?"
    ],
    [
      "A",
      "Yes, I have! I've been to France alone.",
      "iés, ái rrev! áivi bín tu frans alôun",
      "Sim, já viajei! Eu já estive na França sozinha."
    ],
    [
      "L",
      "Really? What was it like?",
      "ríli? uát uóz it láik",
      "Sério? Como foi?"
    ],
    [
      "A",
      "It was amazing, but a bit scary at first.",
      "it uóz améizin, bât a bit skéri at férst",
      "Foi incrível, mas um pouco assustador no começo."
    ],
    [
      "L",
      "I've never travelled alone. I'd love to try it.",
      "áivi néver trável alôun. áid lâv tu trái it",
      "Eu nunca viajei sozinho. Eu adoraria tentar."
    ],
    [
      "A",
      "You should! It really changes how you see things.",
      "iú chud! it ríli chêinjiz ráu iú si things",
      "Você deveria! Isso realmente muda como você vê as coisas."
    ]
  ],
  "connectors": [
    "That sounds amazing!",
    "Really? Me too!",
    "What was it like?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I was + VERB-ing when...",
      "While I was...",
      "In the end..."
    ],
    "today": [
      "Have you ever...?",
      "I've been to...",
      "I've never..."
    ],
    "combo": "Have you ever been to Spain? I've been there twice, and I loved it!"
  },
  "challenge": "Record yourself talking about 3 experiences: something you've done, something you've never done, and something you'd love to try one day."
};

/* ================= AULA 05 — My Life Story ================= */
const LESSON_B1_05 = {
  "ready": true,
  "label": "05",
  "title": "My Life Story",
  "eyebrow": "Level B1 — Lesson 05",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Now let's put it all together. In this mission, you'll combine your past, your present and your experiences to tell a small story about your life.",
  "scene": {
    "emoji": "📖",
    "caption": "A friend at a party asks Ana to tell her a bit about herself and her life.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "New friend",
        "en": "So, tell me a bit about yourself — what's your story?",
        "pt": "Então, me conta um pouco sobre você — qual é a sua história?"
      },
      {
        "who": "L",
        "speaker": "Ana",
        "en": "Well, I used to live in Brazil, and I've been here for two years now.",
        "pt": "Bem, eu morava no Brasil, e estou aqui há dois anos."
      },
      {
        "who": "A",
        "speaker": "New friend",
        "en": "And have you done anything interesting since you moved?",
        "pt": "E você fez algo interessante desde que se mudou?"
      }
    ]
  },
  "vocab": [
    [
      "Tell me a bit about yourself.",
      "tel mí a bit abáut iorsélf",
      "Me conta um pouco sobre você.",
      "🙋",
      true
    ],
    [
      "I grew up in a small town.",
      "ái grú âp in a smól táun",
      "Eu cresci numa cidade pequena.",
      "🏡",
      true
    ],
    [
      "A few years ago, I moved here.",
      "a fiú íers agôu, ái múvd ríer",
      "Há alguns anos, eu me mudei pra cá.",
      "📦",
      true
    ],
    [
      "Since then, I've met great people.",
      "sins dhen, áivi mét gréit pípol",
      "Desde então, conheci pessoas ótimas.",
      "🤝",
      true
    ],
    [
      "I've learned a lot along the way.",
      "áivi lérnd a lât along dhe uéi",
      "Eu aprendi muito no caminho.",
      "📚",
      true
    ],
    [
      "Right now, I'm working on...",
      "ráit náu, áim uérkin on",
      "Agora, eu estou trabalhando em...",
      "🎯",
      true
    ],
    [
      "That's my story so far.",
      "dhats mái stóri sôu fár",
      "Essa é minha história até agora.",
      "😊",
      true
    ],
    [
      "What an interesting life!",
      "uát en íntrestin láif",
      "Que vida interessante!",
      "✨",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I grew up in... A few years ago, I moved here. Since then, I've met great people, and right now I'm working on...",
    "formula": "Combine Past Simple (o que aconteceu), Present Perfect (experiências desde então) e Present Simple (como é agora) numa mesma história.",
    "examples": [
      "I grew up in a small town, and a few years ago I moved to the city.",
      "Since I moved, I've made new friends and learned a new language.",
      "Right now, I'm working on my English every day.",
      "That's my story so far!"
    ]
  },
  "simplify": [
    "Past: I grew up / I moved",
    "Present Perfect: I've met / I've learned",
    "Present: right now, I'm..."
  ],
  "swap": {
    "base": "I grew up in ______. A few years ago, I ______. Since then, I've ______.",
    "options": [
      "🏡 a small town / moved to the city / made new friends",
      "🌍 another country / moved here / learned the language",
      "🎓 a family of teachers / started university / changed my mind about my career",
      "🎨 a creative family / discovered painting / joined an art group",
      "⚽ a football town / moved abroad / found a new passion"
    ]
  },
  "activities": [
    [
      "Write one sentence about your past (where you grew up).",
      "I grew up in a small town near the coast.",
      "ái grú âp in a smól táun níer dhe kôust"
    ],
    [
      "Write one sentence about an experience since a change in your life.",
      "Since I moved here, I've met great people.",
      "sins ái múvd ríer, áivi mét gréit pípol"
    ],
    [
      "Write one sentence about your life right now.",
      "Right now, I'm working on my English every day.",
      "ráit náu, áim uérkin on mái ínglich évri déi"
    ]
  ],
  "dialogue": [
    [
      "A",
      "So, tell me a bit about yourself — what's your story?",
      "sôu, tel mí a bit abáut iorsélf — uáts iór stóri",
      "Então, me conta um pouco sobre você — qual é a sua história?"
    ],
    [
      "L",
      "Well, I grew up in a small town, and a few years ago I moved here.",
      "uél, ái grú âp in a smól táun, end a fiú íers agôu ái múvd ríer",
      "Bem, eu cresci numa cidade pequena, e há alguns anos eu me mudei pra cá."
    ],
    [
      "A",
      "And have you done anything interesting since you moved?",
      "end rrev iú dân énithin íntrestin sins iú múvd",
      "E você fez algo interessante desde que se mudou?"
    ],
    [
      "L",
      "Yes! I've made great friends and I've learned a lot.",
      "iés! áivi méid gréit frends end áivi lérnd a lât",
      "Sim! Eu fiz ótimos amigos e aprendi muito."
    ],
    [
      "A",
      "What are you working on right now?",
      "uát ár iú uérkin on ráit náu",
      "No que você está trabalhando agora?"
    ],
    [
      "L",
      "Right now, I'm learning English, actually — that's my story so far!",
      "ráit náu, áim lérnin ínglich, áktiuali — dhats mái stóri sôu fár",
      "Agora, eu estou aprendendo inglês, na verdade — essa é minha história até agora!"
    ]
  ],
  "connectors": [
    "Tell me a bit about yourself.",
    "That's my story so far.",
    "What an interesting life!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Have you ever...?",
      "I've been to...",
      "I've never..."
    ],
    "today": [
      "I grew up in...",
      "Since then, I've...",
      "Right now, I'm..."
    ],
    "combo": "I grew up in a small town, I used to live in Brazil, and I've been here for two years — right now, I'm learning English every day."
  },
  "challenge": "Mission: tell a small story about your life to someone new — where you grew up, what's changed, what you've experienced, and what you're doing now."
};


/* ================= WORLD 2 - WORK & STUDY ================= */
/* ================= AULA 06 — What Do You Do? ================= */
const LESSON_B1_06 = {
  "ready": true,
  "label": "06",
  "title": "What Do You Do?",
  "eyebrow": "Level B1 — Lesson 06",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's talk about work and studies — what you do, what your responsibilities are, and how to describe your day-to-day job or studies.",
  "scene": {
    "emoji": "💼",
    "caption": "Ana meets someone new at a work event and they talk about what they do.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "New contact",
        "en": "So, what do you do?",
        "pt": "Então, o que você faz?"
      },
      {
        "who": "L",
        "speaker": "Ana",
        "en": "I work as a designer. I'm responsible for the whole visual side of projects.",
        "pt": "Eu trabalho como designer. Sou responsável por toda a parte visual dos projetos."
      },
      {
        "who": "A",
        "speaker": "New contact",
        "en": "That sounds interesting! How long have you been doing that?",
        "pt": "Isso parece interessante! Há quanto tempo você faz isso?"
      }
    ]
  },
  "vocab": [
    [
      "What do you do?",
      "uát du iú du",
      "O que você faz (de trabalho)?",
      "💼",
      true
    ],
    [
      "I work as a designer.",
      "ái uérk ez a dizáiner",
      "Eu trabalho como designer.",
      "🎨",
      true
    ],
    [
      "I'm responsible for...",
      "áim rispónsibol for",
      "Eu sou responsável por...",
      "📋",
      true
    ],
    [
      "I'm studying to become a...",
      "áim stâdiin tu bikâm a",
      "Eu estou estudando para me tornar...",
      "🎓",
      true
    ],
    [
      "My main task is to...",
      "mái méin tásk iz tu",
      "Minha principal tarefa é...",
      "🎯",
      true
    ],
    [
      "I work with a small team.",
      "ái uérk uíth a smól tím",
      "Eu trabalho com uma equipe pequena.",
      "👥",
      true
    ],
    [
      "It's a lot of responsibility.",
      "its a lât âv rispónsibíliti",
      "É bastante responsabilidade.",
      "⚖️",
      true
    ],
    [
      "Sounds interesting!",
      "sáunds íntrestin",
      "Parece interessante!",
      "🙂",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I work as a designer. / I'm responsible for the whole visual side of projects.",
    "formula": "work as + PROFISSÃO / be responsible for + TAREFA (present simple para descrever função e responsabilidades)",
    "examples": [
      "I work as a teacher.",
      "I'm responsible for the marketing team.",
      "I'm studying to become a nurse.",
      "My main task is to answer customer emails."
    ]
  },
  "simplify": [
    "I work as a + JOB",
    "I'm responsible for + TASK",
    "My main task is to + VERB"
  ],
  "swap": {
    "base": "I work as a ______, and I'm responsible for ______.",
    "options": [
      "🎨 designer / the visual side of projects",
      "👩‍🏫 teacher / a class of 20 students",
      "💻 developer / the company website",
      "📊 analyst / the monthly reports",
      "🍳 chef / the kitchen team"
    ]
  },
  "activities": [
    [
      "Write a sentence about what you do (job or studies).",
      "I work as a nurse, and I'm responsible for patient care.",
      "ái uérk ez a nérs, end áim rispónsibol for péichent kéer"
    ],
    [
      "Write a sentence about your main task.",
      "My main task is to answer customer emails.",
      "mái méin tásk iz tu ánser kâstomer ímeils"
    ],
    [
      "Ask someone else what they do.",
      "So, what do you do?",
      "sôu, uát du iú du"
    ]
  ],
  "dialogue": [
    [
      "A",
      "So, what do you do?",
      "sôu, uát du iú du",
      "Então, o que você faz?"
    ],
    [
      "L",
      "I work as a designer. I'm responsible for the whole visual side of projects.",
      "ái uérk ez a dizáiner. áim rispónsibol for dhe rôul víjual sáid âv prójekts",
      "Eu trabalho como designer. Sou responsável por toda a parte visual dos projetos."
    ],
    [
      "A",
      "That sounds interesting! How long have you been doing that?",
      "dhat sáunds íntrestin! ráu lóng rrev iú bín dúin dhat",
      "Isso parece interessante! Há quanto tempo você faz isso?"
    ],
    [
      "L",
      "About three years now. And you, what do you do?",
      "abáut thri íers náu. end iú, uát du iú du",
      "Uns três anos. E você, o que você faz?"
    ],
    [
      "A",
      "I'm studying to become a nurse, actually.",
      "áim stâdiin tu bikâm a nérs, áktiuali",
      "Eu estou estudando para me tornar enfermeira, na verdade."
    ],
    [
      "L",
      "That's a lot of responsibility. Good for you!",
      "dhats a lât âv rispónsibíliti. gud for iú",
      "É bastante responsabilidade. Que bom!"
    ]
  ],
  "connectors": [
    "What do you do?",
    "Sounds interesting!",
    "How long have you been doing that?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I grew up in...",
      "Since then, I've...",
      "Right now, I'm..."
    ],
    "today": [
      "I work as a...",
      "I'm responsible for...",
      "My main task is to..."
    ],
    "combo": "Right now, I'm working as a designer — I've been doing that for two years, and I'm responsible for the visual side of every project."
  },
  "challenge": "Record yourself answering 'What do you do?' — say your job or studies, and what you're responsible for."
};

/* ================= AULA 07 — A Busy Day ================= */
const LESSON_B1_07 = {
  "ready": true,
  "label": "07",
  "title": "A Busy Day",
  "eyebrow": "Level B1 — Lesson 07",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's talk about tasks and priorities — how to explain what you have to do today, and what's most important.",
  "scene": {
    "emoji": "🗒️",
    "caption": "Leo is telling a coworker about how busy his day is.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I have so much to do today, I don't know where to start.",
        "pt": "Eu tenho tanto pra fazer hoje, nem sei por onde começar."
      },
      {
        "who": "A",
        "speaker": "Coworker",
        "en": "What's your priority right now?",
        "pt": "Qual é sua prioridade agora?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "First, I need to finish this report. Then I have to call a client.",
        "pt": "Primeiro, eu preciso terminar este relatório. Depois eu tenho que ligar pra um cliente."
      }
    ]
  },
  "vocab": [
    [
      "I have so much to do today.",
      "ái rrev sôu mâtch tu du tudéi",
      "Eu tenho tanto pra fazer hoje.",
      "📋",
      true
    ],
    [
      "I don't know where to start.",
      "ái dôunt nôu uér tu start",
      "Nem sei por onde começar.",
      "🤯",
      true
    ],
    [
      "What's your priority?",
      "uáts iór priáriti",
      "Qual é sua prioridade?",
      "🎯",
      true
    ],
    [
      "First, I need to...",
      "férst, ái níd tu",
      "Primeiro, eu preciso...",
      "1️⃣",
      true
    ],
    [
      "Then I have to...",
      "dhen ái rrev tu",
      "Depois eu tenho que...",
      "2️⃣",
      true
    ],
    [
      "I'm running out of time.",
      "áim rânin áut âv táim",
      "Meu tempo tá acabando.",
      "⏱️",
      true
    ],
    [
      "I'll deal with that later.",
      "áil díl uíth dhat léiter",
      "Vou lidar com isso depois.",
      "📌",
      true
    ],
    [
      "What a busy day!",
      "uát a bízi déi",
      "Que dia corrido!",
      "😮‍💨",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "First, I need to finish this report. Then I have to call a client.",
    "formula": "First / Then / After that + need to / have to + VERB (ordenar tarefas e prioridades)",
    "examples": [
      "First, I need to answer these emails.",
      "Then I have to call a client.",
      "After that, I need to prepare the meeting.",
      "I'm running out of time today."
    ]
  },
  "simplify": [
    "First, I need to...",
    "Then I have to...",
    "After that, I..."
  ],
  "swap": {
    "base": "First, I need to ______. Then I have to ______.",
    "options": [
      "📧 answer emails / call a client",
      "📄 finish a report / go to a meeting",
      "🛒 do the shopping / cook dinner",
      "📚 study for an exam / pick up my kids",
      "🧹 clean the house / go to work"
    ]
  },
  "activities": [
    [
      "Write a sentence about your first task today.",
      "First, I need to answer my emails.",
      "férst, ái níd tu ánser mái ímeils"
    ],
    [
      "Write a sentence about your priority.",
      "My priority right now is finishing this report.",
      "mái priáriti ráit náu iz fínichin dhis ripórt"
    ],
    [
      "Ask a coworker what their priority is.",
      "What's your priority right now?",
      "uáts iór priáriti ráit náu"
    ]
  ],
  "dialogue": [
    [
      "L",
      "I have so much to do today, I don't know where to start.",
      "ái rrev sôu mâtch tu du tudéi, ái dôunt nôu uér tu start",
      "Eu tenho tanto pra fazer hoje, nem sei por onde começar."
    ],
    [
      "A",
      "What's your priority right now?",
      "uáts iór priáriti ráit náu",
      "Qual é sua prioridade agora?"
    ],
    [
      "L",
      "First, I need to finish this report. It's due today.",
      "férst, ái níd tu fínich dhis ripórt. its diú tudéi",
      "Primeiro, eu preciso terminar este relatório. Ele vence hoje."
    ],
    [
      "A",
      "And after that?",
      "end áfter dhat",
      "E depois disso?"
    ],
    [
      "L",
      "Then I have to call a client, and I'm running out of time.",
      "dhen ái rrev tu kól a kláient, end áim rânin áut âv táim",
      "Depois eu tenho que ligar pra um cliente, e meu tempo tá acabando."
    ],
    [
      "A",
      "Do you need any help? I can call the client for you.",
      "du iú níd éni rrelp? ái ken kól dhe kláient for iú",
      "Você precisa de ajuda? Eu posso ligar pro cliente por você."
    ]
  ],
  "connectors": [
    "What's your priority?",
    "I'm running out of time.",
    "What a busy day!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I work as a...",
      "I'm responsible for...",
      "My main task is to..."
    ],
    "today": [
      "First, I need to...",
      "Then I have to...",
      "I'm running out of time."
    ],
    "combo": "I work as a designer, and today I have so much to do — first I need to finish a report, then I have to call a client."
  },
  "challenge": "Record yourself listing three things you need to do today, in order, using 'First', 'Then' and 'After that'."
};

/* ================= AULA 08 — Can You Help Me? ================= */
const LESSON_B1_08 = {
  "ready": true,
  "label": "08",
  "title": "Can You Help Me?",
  "eyebrow": "Level B1 — Lesson 08",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to ask for help politely, and how to offer help to someone else.",
  "scene": {
    "emoji": "🙏",
    "caption": "Leo is struggling with a task and asks Ana for help.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Could you help me with something, if you have a minute?",
        "pt": "Você poderia me ajudar com uma coisa, se tiver um minuto?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Sure, what do you need?",
        "pt": "Claro, do que você precisa?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I'm not sure how to do this part. Could you show me?",
        "pt": "Eu não tenho certeza de como fazer esta parte. Você poderia me mostrar?"
      }
    ]
  },
  "vocab": [
    [
      "Could you help me with something?",
      "kud iú rrélp mí uíth sâmthin",
      "Você poderia me ajudar com uma coisa?",
      "🙏",
      true
    ],
    [
      "Do you have a minute?",
      "du iú rrev a mínit",
      "Você tem um minuto?",
      "⏱️",
      true
    ],
    [
      "I'm not sure how to do this.",
      "áim nât chúr ráu tu du dhis",
      "Eu não tenho certeza de como fazer isso.",
      "🤷",
      true
    ],
    [
      "Could you show me?",
      "kud iú chôu mí",
      "Você poderia me mostrar?",
      "👀",
      true
    ],
    [
      "Would you mind helping me?",
      "wud iú máind rrélpin mí",
      "Você se importaria de me ajudar?",
      "🤝",
      true
    ],
    [
      "Sure, no problem.",
      "chúr, nôu próblem",
      "Claro, sem problema.",
      "😊",
      true
    ],
    [
      "Let me know if you need anything.",
      "let mí nôu if iú níd énithin",
      "Me avisa se precisar de algo.",
      "📣",
      true
    ],
    [
      "Thanks, I really appreciate it.",
      "thenks, ái ríli apríchiêit it",
      "Obrigado, eu realmente agradeço.",
      "🙏",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Could you help me with something? / Would you mind helping me?",
    "formula": "Could you + VERB...? / Would you mind + VERB-ing...? (pedir ajuda com educação)",
    "examples": [
      "Could you help me with this report?",
      "Would you mind showing me how this works?",
      "Do you have a minute to help me?",
      "Sure, no problem, let me know if you need anything."
    ]
  },
  "simplify": [
    "Could you + VERB...?",
    "Would you mind + VERB-ing...?",
    "Sure, no problem."
  ],
  "swap": {
    "base": "Could you help me ______?",
    "options": [
      "📊 with this report",
      "💻 fix this computer problem",
      "🗺️ find this address",
      "📝 understand this form",
      "🍳 carry these bags"
    ]
  },
  "activities": [
    [
      "Write a polite request for help.",
      "Could you help me with this report, if you have a minute?",
      "kud iú rrélp mí uíth dhis ripórt, if iú rrev a mínit"
    ],
    [
      "Write a sentence offering help to someone.",
      "Let me know if you need anything.",
      "let mí nôu if iú níd énithin"
    ],
    [
      "Write a response accepting a request to help.",
      "Sure, no problem. What do you need?",
      "chúr, nôu próblem. uát du iú níd"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Could you help me with something, if you have a minute?",
      "kud iú rrélp mí uíth sâmthin, if iú rrev a mínit",
      "Você poderia me ajudar com uma coisa, se tiver um minuto?"
    ],
    [
      "A",
      "Sure, what do you need?",
      "chúr, uát du iú níd",
      "Claro, do que você precisa?"
    ],
    [
      "L",
      "I'm not sure how to do this part. Could you show me?",
      "áim nât chúr ráu tu du dhis part. kud iú chôu mí",
      "Eu não tenho certeza de como fazer esta parte. Você poderia me mostrar?"
    ],
    [
      "A",
      "Of course! Look, you just need to click here first.",
      "âv kórs! luk, iú jâst níd tu klik ríer férst",
      "Claro! Olha, você só precisa clicar aqui primeiro."
    ],
    [
      "L",
      "Oh, I see. Thanks, I really appreciate it.",
      "ôu, ái sí. thenks, ái ríli apríchiêit it",
      "Ah, entendi. Obrigado, eu realmente agradeço."
    ],
    [
      "A",
      "No problem at all. Let me know if you need anything else.",
      "nôu próblem at ól. let mí nôu if iú níd énithin els",
      "Sem problema nenhum. Me avisa se precisar de mais alguma coisa."
    ]
  ],
  "connectors": [
    "Do you have a minute?",
    "Sure, no problem.",
    "Thanks, I really appreciate it."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "First, I need to...",
      "Then I have to...",
      "I'm running out of time."
    ],
    "today": [
      "Could you help me...?",
      "Would you mind...?",
      "Let me know if you need anything."
    ],
    "combo": "First, I need to finish this report, and then — could you help me with something, if you have a minute?"
  },
  "challenge": "Record yourself asking someone for help with two different things, and offering to help them back."
};

/* ================= AULA 09 — Something Went Wrong ================= */
const LESSON_B1_09 = {
  "ready": true,
  "label": "09",
  "title": "Something Went Wrong",
  "eyebrow": "Level B1 — Lesson 09",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to explain a problem clearly — what went wrong, and why.",
  "scene": {
    "emoji": "😓",
    "caption": "Leo explains to his manager why a task wasn't finished.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I'm sorry, but something went wrong with the report.",
        "pt": "Sinto muito, mas algo deu errado com o relatório."
      },
      {
        "who": "A",
        "speaker": "Manager",
        "en": "What happened?",
        "pt": "O que aconteceu?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "The system crashed, and I lost part of my work.",
        "pt": "O sistema travou, e eu perdi parte do meu trabalho."
      }
    ]
  },
  "vocab": [
    [
      "Something went wrong.",
      "sâmthin uent róng",
      "Algo deu errado.",
      "😓",
      true
    ],
    [
      "The system crashed.",
      "dhe sístem krascht",
      "O sistema travou.",
      "💥",
      true
    ],
    [
      "I lost part of my work.",
      "ái lóst part âv mái uérk",
      "Eu perdi parte do meu trabalho.",
      "😞",
      true
    ],
    [
      "It wasn't my fault.",
      "it uóznt mái fólt",
      "Não foi minha culpa.",
      "🤷",
      true
    ],
    [
      "I didn't have time to fix it.",
      "ái dídnt rrev táim tu fiks it",
      "Eu não tive tempo de consertar.",
      "⏰",
      true
    ],
    [
      "I'm really sorry about this.",
      "áim ríli sóri abáut dhis",
      "Sinto muito por isso.",
      "🙇",
      true
    ],
    [
      "Can you explain what happened?",
      "ken iú iksplêin uát rrápend",
      "Você pode explicar o que aconteceu?",
      "❓",
      true
    ],
    [
      "That's really unfortunate.",
      "dhats ríli anfórtiunet",
      "Isso é bem infeliz.",
      "😕",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Something went wrong with the report. / The system crashed, and I lost part of my work.",
    "formula": "Something went wrong with... / Past Simple para narrar a causa do problema",
    "examples": [
      "Something went wrong with the payment.",
      "The system crashed, and I lost my work.",
      "I didn't have time to fix it before the meeting.",
      "It wasn't my fault — the internet went down."
    ]
  },
  "simplify": [
    "Something went wrong with...",
    "The + THING + crashed/broke/stopped",
    "I lost/didn't have..."
  ],
  "swap": {
    "base": "Something went wrong with ______.",
    "options": [
      "📄 the report / the system crashed",
      "💳 the payment / the card was declined",
      "📦 the order / it never arrived",
      "🚗 the car / it wouldn't start",
      "📶 the call / the internet went down"
    ]
  },
  "activities": [
    [
      "Write a sentence explaining a problem.",
      "Something went wrong with the payment, and I lost access.",
      "sâmthin uent róng uíth dhe péiment, end ái lóst ákses"
    ],
    [
      "Write a sentence about why it happened.",
      "The system crashed, so I lost part of my work.",
      "dhe sístem krascht, sôu ái lóst part âv mái uérk"
    ],
    [
      "Write a sentence apologizing for a problem.",
      "I'm really sorry about this — it wasn't my fault.",
      "áim ríli sóri abáut dhis — it uóznt mái fólt"
    ]
  ],
  "dialogue": [
    [
      "L",
      "I'm sorry, but something went wrong with the report.",
      "áim sóri, bât sâmthin uent róng uíth dhe ripórt",
      "Sinto muito, mas algo deu errado com o relatório."
    ],
    [
      "A",
      "What happened?",
      "uát rrápend",
      "O que aconteceu?"
    ],
    [
      "L",
      "The system crashed, and I lost part of my work.",
      "dhe sístem krascht, end ái lóst part âv mái uérk",
      "O sistema travou, e eu perdi parte do meu trabalho."
    ],
    [
      "A",
      "That's really unfortunate. Did you have time to fix it?",
      "dhats ríli anfórtiunet. did iú rrev táim tu fiks it",
      "Isso é bem infeliz. Você teve tempo de consertar?"
    ],
    [
      "L",
      "No, I didn't. I'm really sorry about this.",
      "nôu, ái dídnt. áim ríli sóri abáut dhis",
      "Não, não tive. Sinto muito por isso."
    ],
    [
      "A",
      "Don't worry, it wasn't your fault. Let's find a way to fix it.",
      "dôunt uéri, it uóznt iór fólt. lets fáind a uéi tu fiks it",
      "Não se preocupe, não foi sua culpa. Vamos encontrar um jeito de consertar."
    ]
  ],
  "connectors": [
    "What happened?",
    "I'm really sorry about this.",
    "That's really unfortunate."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Could you help me...?",
      "Would you mind...?",
      "Let me know if you need anything."
    ],
    "today": [
      "Something went wrong with...",
      "It wasn't my fault.",
      "I'm really sorry about this."
    ],
    "combo": "Could you help me? Something went wrong with the report — the system crashed and I lost part of my work."
  },
  "challenge": "Record yourself explaining a problem that happened at work or at home: what went wrong, and why."
};

/* ================= AULA 10 — Let's Fix It ================= */
const LESSON_B1_10 = {
  "ready": true,
  "label": "10",
  "title": "Let's Fix It",
  "eyebrow": "Level B1 — Lesson 10",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Now let's learn how to find a solution to a problem — what should be done, and what has to happen next.",
  "scene": {
    "emoji": "🔧",
    "caption": "Ana and Leo are figuring out how to fix the problem with the report.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Okay, so what should we do about the report?",
        "pt": "Certo, então o que a gente deveria fazer com o relatório?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I think we should redo the missing part first.",
        "pt": "Eu acho que a gente deveria refazer a parte que falta primeiro."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "That could work. We also need to back up our files from now on.",
        "pt": "Isso pode funcionar. A gente também precisa fazer backup dos arquivos a partir de agora."
      }
    ]
  },
  "vocab": [
    [
      "What should we do about it?",
      "uát chud uí du abáut it",
      "O que a gente deveria fazer sobre isso?",
      "🤔",
      true
    ],
    [
      "I think we should...",
      "ái think uí chud",
      "Eu acho que a gente deveria...",
      "💭",
      true
    ],
    [
      "That could work.",
      "dhat kud uérk",
      "Isso pode funcionar.",
      "✅",
      true
    ],
    [
      "We need to back up our files.",
      "uí níd tu bák âp áur fáils",
      "A gente precisa fazer backup dos arquivos.",
      "💾",
      true
    ],
    [
      "You have to talk to the client.",
      "iú rrev tu tók tu dhe kláient",
      "Você tem que falar com o cliente.",
      "📞",
      true
    ],
    [
      "We could try a different approach.",
      "uí kud trái a díferent apróuch",
      "A gente poderia tentar uma abordagem diferente.",
      "🔄",
      true
    ],
    [
      "Let's fix it together.",
      "lets fiks it tugédher",
      "Vamos consertar isso juntos.",
      "🤝",
      true
    ],
    [
      "Problem solved!",
      "próblem sólvd",
      "Problema resolvido!",
      "✅",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I think we should redo it. / We need to back up our files.",
    "formula": "should/could (sugestão) + have to/need to (obrigação) + VERB",
    "examples": [
      "I think we should redo the missing part.",
      "We could try a different approach.",
      "We need to back up our files from now on.",
      "You have to talk to the client about the delay."
    ]
  },
  "simplify": [
    "I think we should...",
    "We could...",
    "We need to / have to..."
  ],
  "swap": {
    "base": "I think we should ______.",
    "options": [
      "🔁 redo the missing part",
      "💾 back up our files",
      "📞 call the client",
      "🧑‍💻 ask for technical help",
      "⏰ set a new deadline"
    ]
  },
  "activities": [
    [
      "Write a sentence suggesting a solution.",
      "I think we should redo the missing part first.",
      "ái think uí chud rirídu dhe mísin part férst"
    ],
    [
      "Write a sentence about a necessary next step.",
      "We need to back up our files from now on.",
      "uí níd tu bák âp áur fáils from náu on"
    ],
    [
      "Write a sentence about who should do something.",
      "You have to talk to the client about the delay.",
      "iú rrev tu tók tu dhe kláient abáut dhe diléi"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Okay, so what should we do about the report?",
      "ôukêi, sôu uát chud uí du abáut dhe ripórt",
      "Certo, então o que a gente deveria fazer com o relatório?"
    ],
    [
      "L",
      "I think we should redo the missing part first.",
      "ái think uí chud rirídu dhe mísin part férst",
      "Eu acho que a gente deveria refazer a parte que falta primeiro."
    ],
    [
      "A",
      "That could work. We also need to back up our files from now on.",
      "dhat kud uérk. uí ólso níd tu bák âp áur fáils from náu on",
      "Isso pode funcionar. A gente também precisa fazer backup dos arquivos a partir de agora."
    ],
    [
      "L",
      "Good idea. And I think you have to talk to the client about the delay.",
      "gud aidía. end ái think iú rrev tu tók tu dhe kláient abáut dhe diléi",
      "Boa ideia. E eu acho que você tem que falar com o cliente sobre o atraso."
    ],
    [
      "A",
      "You're right, I'll call them now.",
      "iór ráit, áil kól dhem náu",
      "Você tem razão, vou ligar pra eles agora."
    ],
    [
      "L",
      "Great, let's fix it together.",
      "gréit, lets fiks it tugédher",
      "Ótimo, vamos consertar isso juntos."
    ]
  ],
  "connectors": [
    "I think we should...",
    "That could work.",
    "Problem solved!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Something went wrong with...",
      "It wasn't my fault.",
      "I'm really sorry about this."
    ],
    "today": [
      "I think we should...",
      "We need to / have to...",
      "Let's fix it together."
    ],
    "combo": "Something went wrong, but I think we should redo it, and we need to back up our files from now on — let's fix it together!"
  },
  "challenge": "Mission: something at work or at home isn't working. Suggest a solution using 'should', 'could' and 'need to/have to'."
};


/* ================= WORLD 3 - LIFE ABROAD ================= */
/* ================= AULA 11 — My Neighborhood ================= */
const LESSON_B1_11 = {
  "ready": true,
  "label": "11",
  "title": "My Neighborhood",
  "eyebrow": "Level B1 — Lesson 11",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's describe where you live — your neighborhood, what's nearby, and what you like or don't like about it.",
  "scene": {
    "emoji": "🏘️",
    "caption": "Ana is describing her neighborhood to a new friend who just moved to the city.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I live in a quiet neighborhood, close to the center.",
        "pt": "Eu moro num bairro tranquilo, perto do centro."
      },
      {
        "who": "L",
        "speaker": "New friend",
        "en": "What's it like around there?",
        "pt": "Como é por ali?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "There's a market just around the corner, and a park nearby.",
        "pt": "Tem um mercado logo na esquina, e um parque perto."
      }
    ]
  },
  "vocab": [
    [
      "I live in a quiet neighborhood.",
      "ái láiv in a kuáiet néiborrud",
      "Eu moro num bairro tranquilo.",
      "🏘️",
      true
    ],
    [
      "It's close to the center.",
      "its klôus tu dhe sénter",
      "É perto do centro.",
      "📍",
      true
    ],
    [
      "There's a market around the corner.",
      "dhérz a márket aráund dhe kórner",
      "Tem um mercado na esquina.",
      "🏪",
      true
    ],
    [
      "It's a bit far from work.",
      "its a bit far from uérk",
      "É um pouco longe do trabalho.",
      "🚗",
      true
    ],
    [
      "The best thing about it is...",
      "dhe best thing abáut it iz",
      "A melhor coisa sobre ele é...",
      "👍",
      true
    ],
    [
      "The only downside is...",
      "dhe ôunli dáunsáid iz",
      "A única desvantagem é...",
      "👎",
      true
    ],
    [
      "It's a really friendly area.",
      "its a ríli fréndli éria",
      "É uma área bem amigável.",
      "🤗",
      true
    ],
    [
      "Sounds like a nice place!",
      "sáunds láik a náis pléis",
      "Parece um lugar legal!",
      "😊",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I live in a quiet neighborhood, close to the center. There's a market around the corner.",
    "formula": "There's/There are + LUGAR (descrever o que existe no bairro) + close to / far from",
    "examples": [
      "There's a market around the corner.",
      "There are two parks near my house.",
      "It's close to the center, but far from the beach.",
      "The best thing about it is the neighbors."
    ]
  },
  "simplify": [
    "There's / There are...",
    "It's close to / far from...",
    "The best thing about it is..."
  ],
  "swap": {
    "base": "The best thing about my neighborhood is ______.",
    "options": [
      "🏪 the market around the corner",
      "🌳 the park nearby",
      "🤗 the friendly neighbors",
      "🚌 the public transport",
      "🍽️ the good restaurants"
    ]
  },
  "activities": [
    [
      "Write a sentence about where you live.",
      "I live in a quiet neighborhood, close to the center.",
      "ái láiv in a kuáiet néiborrud, klôus tu dhe sénter"
    ],
    [
      "Write a sentence about what's near your home.",
      "There's a market just around the corner.",
      "dhérz a márket jâst aráund dhe kórner"
    ],
    [
      "Write a sentence about what you like or dislike.",
      "The best thing about it is the friendly neighbors.",
      "dhe best thing abáut it iz dhe fréndli néibors"
    ]
  ],
  "dialogue": [
    [
      "A",
      "I live in a quiet neighborhood, close to the center.",
      "ái láiv in a kuáiet néiborrud, klôus tu dhe sénter",
      "Eu moro num bairro tranquilo, perto do centro."
    ],
    [
      "L",
      "What's it like around there?",
      "uáts it láik aráund dhér",
      "Como é por ali?"
    ],
    [
      "A",
      "There's a market just around the corner, and a park nearby.",
      "dhérz a márket jâst aráund dhe kórner, end a park níerbái",
      "Tem um mercado logo na esquina, e um parque perto."
    ],
    [
      "L",
      "Sounds like a nice place! Is there anything you don't like?",
      "sáunds láik a náis pléis! iz dhér énithin iú dôunt láik",
      "Parece um lugar legal! Tem algo que você não gosta?"
    ],
    [
      "A",
      "The only downside is that it's a bit far from work.",
      "dhe ôunli dáunsáid iz dhat its a bit far from uérk",
      "A única desvantagem é que é um pouco longe do trabalho."
    ],
    [
      "L",
      "That makes sense. But the neighbors sound really friendly.",
      "dhat méiks sens. bât dhe néibors sáund ríli fréndli",
      "Faz sentido. Mas os vizinhos parecem bem amigáveis."
    ]
  ],
  "connectors": [
    "What's it like around there?",
    "Sounds like a nice place!",
    "The best thing about it is..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I think we should...",
      "We need to / have to...",
      "Let's fix it together."
    ],
    "today": [
      "I live in...",
      "There's / There are...",
      "The best thing about it is..."
    ],
    "combo": "I think we should look for a place close to the center — I live in a quiet neighborhood, and there's a market around the corner."
  },
  "challenge": "Record yourself describing your neighborhood: what's nearby, and what you like or don't like about it."
};

/* ================= AULA 12 — Getting Things Done ================= */
const LESSON_B1_12 = {
  "ready": true,
  "label": "12",
  "title": "Getting Things Done",
  "eyebrow": "Level B1 — Lesson 12",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to handle everyday errands — the small tasks you need to take care of during the week.",
  "scene": {
    "emoji": "✅",
    "caption": "Leo is telling Ana about the errands he still needs to run today.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I still have a few errands to run today.",
        "pt": "Eu ainda tenho algumas tarefas pra resolver hoje."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Like what?",
        "pt": "Tipo o quê?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I need to pick up a package, pay a bill, and get some groceries.",
        "pt": "Eu preciso pegar uma encomenda, pagar uma conta, e comprar uns mantimentos."
      }
    ]
  },
  "vocab": [
    [
      "I have a few errands to run.",
      "ái rrev a fiú érends tu rân",
      "Eu tenho umas tarefas pra resolver.",
      "📝",
      true
    ],
    [
      "I need to pick up a package.",
      "ái níd tu pik âp a pákej",
      "Eu preciso pegar uma encomenda.",
      "📦",
      true
    ],
    [
      "I have to pay a bill.",
      "ái rrev tu péi a bil",
      "Eu tenho que pagar uma conta.",
      "💳",
      true
    ],
    [
      "I still need to get some groceries.",
      "ái stil níd tu guét sâm gróuseris",
      "Eu ainda preciso comprar uns mantimentos.",
      "🛒",
      true
    ],
    [
      "I'll take care of it later.",
      "áil téik kéer âv it léiter",
      "Vou cuidar disso depois.",
      "🕓",
      true
    ],
    [
      "I already did that.",
      "ái ólredi did dhat",
      "Eu já fiz isso.",
      "✔️",
      true
    ],
    [
      "It's on my to-do list.",
      "its on mái tu-dú list",
      "Está na minha lista de tarefas.",
      "📋",
      true
    ],
    [
      "One thing at a time!",
      "uân thing at a táim",
      "Uma coisa de cada vez!",
      "🙂",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I need to pick up a package. / I still need to get some groceries.",
    "formula": "need to / have to + VERB para tarefas do cotidiano; still + para o que falta fazer",
    "examples": [
      "I need to pick up a package from the post office.",
      "I still have to pay this bill.",
      "I already did the groceries this morning.",
      "It's on my to-do list for today."
    ]
  },
  "simplify": [
    "I need to / have to...",
    "I still need to...",
    "I already did..."
  ],
  "swap": {
    "base": "I still need to ______.",
    "options": [
      "📦 pick up a package",
      "💳 pay a bill",
      "🛒 get some groceries",
      "🚗 take the car to the shop",
      "📮 send a letter"
    ]
  },
  "activities": [
    [
      "Write a sentence about a task you still need to do.",
      "I still need to pick up a package from the post office.",
      "ái stil níd tu pik âp a pákej from dhe pôust ófis"
    ],
    [
      "Write a sentence about something you already did.",
      "I already paid that bill this morning.",
      "ái ólredi péid dhat bil dhis mórnin"
    ],
    [
      "Write a to-do list with three errands.",
      "I need to get groceries, pay a bill, and pick up a package.",
      "ái níd tu guét gróuseris, péi a bil, end pik âp a pákej"
    ]
  ],
  "dialogue": [
    [
      "L",
      "I still have a few errands to run today.",
      "ái stil rrev a fiú érends tu rân tudéi",
      "Eu ainda tenho algumas tarefas pra resolver hoje."
    ],
    [
      "A",
      "Like what?",
      "láik uát",
      "Tipo o quê?"
    ],
    [
      "L",
      "I need to pick up a package, pay a bill, and get some groceries.",
      "ái níd tu pik âp a pákej, péi a bil, end guét sâm gróuseris",
      "Eu preciso pegar uma encomenda, pagar uma conta, e comprar uns mantimentos."
    ],
    [
      "A",
      "That's a lot! Have you already done any of it?",
      "dhats a lât! rrev iú ólredi dân éni âv it",
      "É bastante coisa! Você já fez alguma delas?"
    ],
    [
      "L",
      "I already paid the bill online. The rest is still on my to-do list.",
      "ái ólredi péid dhe bil onláin. dhe rest iz stil on mái tu-dú list",
      "Eu já paguei a conta online. O resto ainda está na minha lista de tarefas."
    ],
    [
      "A",
      "One thing at a time, you'll get it all done.",
      "uân thing at a táim, iúl guét it ól dân",
      "Uma coisa de cada vez, você vai dar conta de tudo."
    ]
  ],
  "connectors": [
    "I have a few errands to run.",
    "It's on my to-do list.",
    "One thing at a time!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I live in...",
      "There's / There are...",
      "The best thing about it is..."
    ],
    "today": [
      "I need to / still need to...",
      "I already did...",
      "It's on my to-do list."
    ],
    "combo": "I live close to the center, so it's easy — I still need to pick up a package, but I already paid the bill."
  },
  "challenge": "Record yourself listing three errands you need to run this week, saying which ones you've already done."
};

/* ================= AULA 13 — At the Office ================= */
const LESSON_B1_13 = {
  "ready": true,
  "label": "13",
  "title": "At the Office",
  "eyebrow": "Level B1 — Lesson 13",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to handle public services — the bank, the post office, immigration, or any government office.",
  "scene": {
    "emoji": "🏢",
    "caption": "Ana is at a government office, trying to sort out some paperwork.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Excuse me, I need to sort out some paperwork. Where should I go?",
        "pt": "Com licença, eu preciso resolver uns documentos. Pra onde eu vou?"
      },
      {
        "who": "L",
        "speaker": "Clerk",
        "en": "Take a number and wait to be called.",
        "pt": "Pegue uma senha e espere ser chamada."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Okay. What documents do I need to bring?",
        "pt": "Certo. Que documentos eu preciso trazer?"
      }
    ]
  },
  "vocab": [
    [
      "I need to sort out some paperwork.",
      "ái níd tu sórt áut sâm péiperuérk",
      "Eu preciso resolver uns documentos.",
      "📄",
      true
    ],
    [
      "Take a number and wait to be called.",
      "téik a nâmber end uéit tu bí kóld",
      "Pegue uma senha e espere ser chamada.",
      "🎫",
      true
    ],
    [
      "What documents do I need?",
      "uát dókiuments du ái níd",
      "Que documentos eu preciso?",
      "❓",
      true
    ],
    [
      "Do I need an appointment?",
      "du ái níd en apóintment",
      "Eu preciso de um agendamento?",
      "📅",
      true
    ],
    [
      "Fill out this form, please.",
      "fil áut dhis fórm, plíz",
      "Preencha este formulário, por favor.",
      "📝",
      true
    ],
    [
      "Sign here, please.",
      "sáin ríer, plíz",
      "Assine aqui, por favor.",
      "✍️",
      true
    ],
    [
      "How long will it take?",
      "ráu lóng uíl it téik",
      "Quanto tempo vai demorar?",
      "⏳",
      true
    ],
    [
      "Thanks for your help.",
      "thenks for iór rrélp",
      "Obrigada pela ajuda.",
      "🙏",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I need to sort out some paperwork. / Do I need an appointment?",
    "formula": "need to + VERB (necessidade) / Do I need...? (pergunta sobre requisitos, em serviços públicos)",
    "examples": [
      "I need to sort out some paperwork at the bank.",
      "Do I need an appointment, or can I just walk in?",
      "What documents do I need to bring?",
      "Fill out this form and sign here, please."
    ]
  },
  "simplify": [
    "I need to sort out...",
    "Do I need...?",
    "Fill out / Sign here"
  ],
  "swap": {
    "base": "I need to sort out some paperwork at the ______.",
    "options": [
      "🏦 bank",
      "🏛️ immigration office",
      "📮 post office",
      "🏥 health center",
      "🏫 school office"
    ]
  },
  "activities": [
    [
      "Write a sentence explaining why you're at an office.",
      "I need to sort out some paperwork for my visa.",
      "ái níd tu sórt áut sâm péiperuérk for mái víza"
    ],
    [
      "Write a question about requirements.",
      "Do I need an appointment, or can I just walk in?",
      "du ái níd en apóintment, ór ken ái jâst uók in"
    ],
    [
      "Write a sentence about what to do next.",
      "Fill out this form, and sign here, please.",
      "fil áut dhis fórm, end sáin ríer, plíz"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Excuse me, I need to sort out some paperwork. Where should I go?",
      "ikskiúz mí, ái níd tu sórt áut sâm péiperuérk. uér chud ái gôu",
      "Com licença, eu preciso resolver uns documentos. Pra onde eu vou?"
    ],
    [
      "L",
      "Take a number and wait to be called.",
      "téik a nâmber end uéit tu bí kóld",
      "Pegue uma senha e espere ser chamada."
    ],
    [
      "A",
      "Okay. Do I need an appointment for this?",
      "ôukêi. du ái níd en apóintment for dhis",
      "Certo. Eu preciso de um agendamento pra isso?"
    ],
    [
      "L",
      "No, you don't. But you need to bring your ID.",
      "nôu, iú dôunt. bât iú níd tu bring iór áidí",
      "Não, não precisa. Mas você precisa trazer seu documento."
    ],
    [
      "A",
      "I have it here. What documents do I need to fill out?",
      "ái rrev it ríer. uát dókiuments du ái níd tu fil áut",
      "Eu tenho aqui. Que documentos eu preciso preencher?"
    ],
    [
      "L",
      "Just this form. Sign here, and we'll call your number soon.",
      "jâst dhis fórm. sáin ríer, end uíl kól iór nâmber sún",
      "Só este formulário. Assine aqui, e vamos chamar sua senha em breve."
    ]
  ],
  "connectors": [
    "What documents do I need?",
    "How long will it take?",
    "Thanks for your help."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I need to / still need to...",
      "I already did...",
      "It's on my to-do list."
    ],
    "today": [
      "I need to sort out...",
      "Do I need...?",
      "Fill out / Sign here"
    ],
    "combo": "It's on my to-do list — I need to sort out some paperwork, so do I need an appointment, or can I just walk in?"
  },
  "challenge": "Record yourself at a public office: explain why you're there, ask if you need an appointment, and ask what documents you need."
};

/* ================= AULA 14 — A Problem at Home ================= */
const LESSON_B1_14 = {
  "ready": true,
  "label": "14",
  "title": "A Problem at Home",
  "eyebrow": "Level B1 — Lesson 14",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to explain a problem at home, and ask for help fixing it.",
  "scene": {
    "emoji": "🚿",
    "caption": "Leo calls a plumber because there's a problem with the water in his apartment.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Hi, I have a problem with the water in my apartment.",
        "pt": "Oi, eu tenho um problema com a água no meu apartamento."
      },
      {
        "who": "A",
        "speaker": "Plumber",
        "en": "What's wrong exactly?",
        "pt": "O que está errado exatamente?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "There's no hot water, and there's a leak under the sink.",
        "pt": "Não tem água quente, e tem um vazamento embaixo da pia."
      }
    ]
  },
  "vocab": [
    [
      "I have a problem with the water.",
      "ái rrev a próblem uíth dhe uóter",
      "Eu tenho um problema com a água.",
      "💧",
      true
    ],
    [
      "There's no hot water.",
      "dhérz nôu rrât uóter",
      "Não tem água quente.",
      "🚿",
      true
    ],
    [
      "There's a leak under the sink.",
      "dhérz a lík ânder dhe sink",
      "Tem um vazamento embaixo da pia.",
      "🔧",
      true
    ],
    [
      "Something's not working properly.",
      "sâmthinz nât uérkin próperli",
      "Alguma coisa não está funcionando direito.",
      "⚠️",
      true
    ],
    [
      "Can you come and take a look?",
      "ken iú kâm end téik a luk",
      "Você pode vir dar uma olhada?",
      "👀",
      true
    ],
    [
      "How soon can you come?",
      "ráu sún ken iú kâm",
      "Quão cedo você pode vir?",
      "⏰",
      true
    ],
    [
      "It's urgent.",
      "its érjent",
      "É urgente.",
      "🚨",
      true
    ],
    [
      "Thanks for coming so quickly.",
      "thenks for kâmin sôu kuíkli",
      "Obrigado por vir tão rápido.",
      "🙏",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "There's no hot water, and there's a leak under the sink.",
    "formula": "There's a problem with... / There's no... / There's a leak/noise/smell (descrever um problema doméstico)",
    "examples": [
      "There's a problem with the electricity.",
      "There's no hot water in the shower.",
      "There's a leak under the sink.",
      "Something's not working properly in the kitchen."
    ]
  },
  "simplify": [
    "I have a problem with...",
    "There's no.../There's a...",
    "Can you come and take a look?"
  ],
  "swap": {
    "base": "I have a problem with ______.",
    "options": [
      "🚿 no hot water",
      "🔧 a leak under the sink",
      "💡 the electricity",
      "🌡️ the heating",
      "🚪 a broken lock"
    ]
  },
  "activities": [
    [
      "Write a sentence explaining a problem at home.",
      "I have a problem with the electricity in my kitchen.",
      "ái rrev a próblem uíth dhe ilektrísiti in mái kítchen"
    ],
    [
      "Write a sentence describing the problem in more detail.",
      "There's a leak under the sink, and it's getting worse.",
      "dhérz a lík ânder dhe sink, end its guétin uérs"
    ],
    [
      "Write a sentence asking for help.",
      "Can you come and take a look? It's urgent.",
      "ken iú kâm end téik a luk? its érjent"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Hi, I have a problem with the water in my apartment.",
      "rrái, ái rrev a próblem uíth dhe uóter in mái apártment",
      "Oi, eu tenho um problema com a água no meu apartamento."
    ],
    [
      "A",
      "What's wrong exactly?",
      "uáts róng ikzáktli",
      "O que está errado exatamente?"
    ],
    [
      "L",
      "There's no hot water, and there's a leak under the sink.",
      "dhérz nôu rrât uóter, end dhérz a lík ânder dhe sink",
      "Não tem água quente, e tem um vazamento embaixo da pia."
    ],
    [
      "A",
      "Okay, that sounds urgent. How soon do you need someone?",
      "ôukêi, dhat sáunds érjent. ráu sún du iú níd sâmuân",
      "Certo, parece urgente. Quão cedo você precisa de alguém?"
    ],
    [
      "L",
      "As soon as possible, if you can. It's getting worse.",
      "ez sún ez pósibol, if iú ken. its guétin uérs",
      "O mais rápido possível, se puder. Está piorando."
    ],
    [
      "A",
      "I can come this afternoon. Thanks for calling right away.",
      "ái ken kâm dhis áfternún. thenks for kólin ráit auéi",
      "Eu posso ir hoje à tarde. Obrigado por ligar logo."
    ]
  ],
  "connectors": [
    "What's wrong exactly?",
    "It's urgent.",
    "Thanks for coming so quickly."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I need to sort out...",
      "Do I need...?",
      "Fill out / Sign here"
    ],
    "today": [
      "I have a problem with...",
      "There's no.../There's a...",
      "Can you come and take a look?"
    ],
    "combo": "I need to sort out a problem — I have a problem with the water, there's no hot water and there's a leak under the sink."
  },
  "challenge": "Record yourself calling someone to explain a problem at home, and asking them to come and fix it."
};

/* ================= AULA 15 — Living Abroad ================= */
const LESSON_B1_15 = {
  "ready": true,
  "label": "15",
  "title": "Living Abroad",
  "eyebrow": "Level B1 — Lesson 15",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's put it all together. In this mission, you'll deal with a real situation someone living abroad might face — combining what you've learned about work, services and problems.",
  "scene": {
    "emoji": "🌍",
    "caption": "Ana is at the immigration office, trying to solve a problem with her residency documents.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Excuse me, I have a problem with my residency documents.",
        "pt": "Com licença, eu tenho um problema com meus documentos de residência."
      },
      {
        "who": "L",
        "speaker": "Officer",
        "en": "What seems to be the problem?",
        "pt": "Qual parece ser o problema?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I need to sort this out before my appointment next week, and I'm not sure what documents I need.",
        "pt": "Eu preciso resolver isso antes do meu compromisso semana que vem, e não tenho certeza de quais documentos preciso."
      }
    ]
  },
  "vocab": [
    [
      "I have a problem with my documents.",
      "ái rrev a próblem uíth mái dókiuments",
      "Eu tenho um problema com meus documentos.",
      "📄",
      true
    ],
    [
      "I need to sort this out.",
      "ái níd tu sórt dhis áut",
      "Eu preciso resolver isso.",
      "✅",
      true
    ],
    [
      "I'm not sure what I need.",
      "áim nât chúr uát ái níd",
      "Não tenho certeza do que eu preciso.",
      "🤔",
      true
    ],
    [
      "Could you explain the process to me?",
      "kud iú iksplêin dhe próses tu mí",
      "Você poderia me explicar o processo?",
      "❓",
      true
    ],
    [
      "I've been living here for two years.",
      "áivi bín lívin ríer for tú íers",
      "Eu moro aqui há dois anos.",
      "📅",
      true
    ],
    [
      "What should I do next?",
      "uát chud ái du nekst",
      "O que eu deveria fazer depois?",
      "➡️",
      true
    ],
    [
      "I really appreciate your help.",
      "ái ríli apríchiêit iór rrélp",
      "Eu realmente agradeço sua ajuda.",
      "🙏",
      true
    ],
    [
      "It's all sorted now.",
      "its ól sórtid náu",
      "Está tudo resolvido agora.",
      "😌",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I have a problem with my documents. / I need to sort this out before my appointment.",
    "formula": "Combinar: have a problem with / need to sort out / not sure what + should (pedir orientação numa situação real)",
    "examples": [
      "I have a problem with my residency documents.",
      "I need to sort this out before my appointment.",
      "I'm not sure what documents I need.",
      "What should I do next?"
    ]
  },
  "simplify": [
    "I have a problem with...",
    "I need to sort this out...",
    "What should I do next?"
  ],
  "swap": {
    "base": "I have a problem with ______, and I need to sort it out before ______.",
    "options": [
      "📄 my documents / my appointment",
      "🏦 my bank account / the end of the month",
      "🏠 my rental contract / I move in",
      "💳 my payment / the deadline",
      "📶 my phone plan / next week"
    ]
  },
  "activities": [
    [
      "Write a sentence explaining your problem.",
      "I have a problem with my residency documents.",
      "ái rrev a próblem uíth mái risídensi dókiuments"
    ],
    [
      "Write a sentence about the urgency.",
      "I need to sort this out before my appointment next week.",
      "ái níd tu sórt dhis áut bifór mái apóintment nekst uík"
    ],
    [
      "Write a question asking for guidance.",
      "Could you explain the process to me? What should I do next?",
      "kud iú iksplêin dhe próses tu mí? uát chud ái du nekst"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Excuse me, I have a problem with my residency documents.",
      "ikskiúz mí, ái rrev a próblem uíth mái risídensi dókiuments",
      "Com licença, eu tenho um problema com meus documentos de residência."
    ],
    [
      "L",
      "What seems to be the problem?",
      "uát símz tu bí dhe próblem",
      "Qual parece ser o problema?"
    ],
    [
      "A",
      "I need to sort this out before my appointment next week, but I'm not sure what documents I need.",
      "ái níd tu sórt dhis áut bifór mái apóintment nekst uík, bât áim nât chúr uát dókiuments ái níd",
      "Eu preciso resolver isso antes do meu compromisso semana que vem, mas não tenho certeza de quais documentos preciso."
    ],
    [
      "L",
      "I understand. Could you tell me how long you've been living here?",
      "ái ânderstend. kud iú tel mí ráu lóng iúv bín lívin ríer",
      "Entendo. Você poderia me dizer há quanto tempo você mora aqui?"
    ],
    [
      "A",
      "I've been living here for two years now.",
      "áivi bín lívin ríer for tú íers náu",
      "Eu moro aqui há dois anos."
    ],
    [
      "L",
      "Okay, in that case, you'll need to bring your rental contract and your ID. What should you do next? Come back with those.",
      "ôukêi, in dhat kéis, iúl níd tu bring iór réntal kóntrakt end iór áidí. uát chud iú du nekst? kâm bák uíth dhôuz",
      "Certo, nesse caso, você vai precisar trazer seu contrato de aluguel e seu documento. O que você deve fazer depois? Voltar com esses."
    ]
  ],
  "connectors": [
    "I need to sort this out.",
    "What should I do next?",
    "It's all sorted now."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I have a problem with...",
      "There's no.../There's a...",
      "Can you come and take a look?"
    ],
    "today": [
      "I need to sort this out.",
      "I'm not sure what I need.",
      "What should I do next?"
    ],
    "combo": "I have a problem with the water at home, and I also have a problem with my documents — I need to sort both of these out."
  },
  "challenge": "Mission: you're living abroad and something has gone wrong with your paperwork. Explain the problem, say how long you've lived there, and ask what to do next."
};


/* ================= WORLD 4 - TRAVEL ================= */
/* ================= AULA 16 — Let's Make a Plan ================= */
const LESSON_B1_16 = {
  "ready": true,
  "label": "16",
  "title": "Let's Make a Plan",
  "eyebrow": "Level B1 — Lesson 16",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's plan a trip! We'll learn how to talk about arrangements you've already made, and things you're going to do.",
  "scene": {
    "emoji": "🗺️",
    "caption": "Ana and Leo are planning a trip together for next month.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "So, are we still going to Portugal next month?",
        "pt": "Então, ainda vamos a Portugal mês que vem?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Yes! I'm meeting a travel agent on Friday to book the flights.",
        "pt": "Sim! Vou me encontrar com um agente de viagens na sexta pra reservar os voos."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Great, I'll start looking at hotels tonight.",
        "pt": "Ótimo, vou começar a olhar hotéis hoje à noite."
      }
    ]
  },
  "vocab": [
    [
      "Are we still going to...?",
      "ár uí stil gôuin tu",
      "A gente ainda vai a...?",
      "❓",
      true
    ],
    [
      "I'm meeting someone on Friday.",
      "áim mítin sâmuân on fráidei",
      "Vou me encontrar com alguém na sexta.",
      "📅",
      true
    ],
    [
      "I'll start looking at hotels.",
      "áil start lúkin at rrôutéls",
      "Vou começar a olhar hotéis.",
      "🏨",
      true
    ],
    [
      "We're going to book the flights.",
      "uír gôuin tu buk dhe fláits",
      "A gente vai reservar os voos.",
      "✈️",
      true
    ],
    [
      "What are you doing this weekend?",
      "uát ár iú dúin dhis uíkend",
      "O que você vai fazer neste fim de semana?",
      "📆",
      true
    ],
    [
      "I haven't decided yet.",
      "ái révnt disáidid iét",
      "Eu ainda não decidi.",
      "🤔",
      true
    ],
    [
      "Let's figure out the details.",
      "lets fíguer áut dhe díteils",
      "Vamos definir os detalhes.",
      "📝",
      true
    ],
    [
      "Sounds like a plan!",
      "sáunds láik a plen",
      "Parece um bom plano!",
      "👍",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I'm meeting a travel agent on Friday. / We're going to book the flights.",
    "formula": "Present Continuous com valor de futuro (arrangements: I'm meeting...) + going to (planos e intenções)",
    "examples": [
      "I'm meeting a travel agent on Friday.",
      "We're going to book the flights this week.",
      "Are we still going to Portugal next month?",
      "I haven't decided where to stay yet."
    ]
  },
  "simplify": [
    "I'm + VERB-ing (arrangement já marcado)",
    "We're going to + VERB (plano/intenção)",
    "Are we still going to...?"
  ],
  "swap": {
    "base": "I'm going to ______ next month.",
    "options": [
      "✈️ book the flights",
      "🏨 look for a hotel",
      "🗺️ plan the itinerary",
      "🎒 pack my bags",
      "📋 make a list of places to visit"
    ]
  },
  "activities": [
    [
      "Write a sentence about a travel arrangement (already scheduled).",
      "I'm meeting a travel agent on Friday.",
      "áim mítin a trável éijent on fráidei"
    ],
    [
      "Write a sentence about a plan or intention.",
      "We're going to book the flights this week.",
      "uír gôuin tu buk dhe fláits dhis uík"
    ],
    [
      "Ask someone about their weekend plans.",
      "What are you doing this weekend?",
      "uát ár iú dúin dhis uíkend"
    ]
  ],
  "dialogue": [
    [
      "A",
      "So, are we still going to Portugal next month?",
      "sôu, ár uí stil gôuin tu pórtiugal nekst mânth",
      "Então, ainda vamos a Portugal mês que vem?"
    ],
    [
      "L",
      "Yes! I'm meeting a travel agent on Friday to book the flights.",
      "iés! áim mítin a trável éijent on fráidei tu buk dhe fláits",
      "Sim! Vou me encontrar com um agente de viagens na sexta pra reservar os voos."
    ],
    [
      "A",
      "Great, I'll start looking at hotels tonight.",
      "gréit, áil start lúkin at rrôutéls tunáit",
      "Ótimo, vou começar a olhar hotéis hoje à noite."
    ],
    [
      "L",
      "Have you decided where you want to stay?",
      "rrev iú disáidid uér iú uánt tu stêi",
      "Você já decidiu onde quer ficar?"
    ],
    [
      "A",
      "Not yet, but I'd rather stay somewhere close to the center.",
      "nât iét, bât áid ráther stêi sâmuér klôus tu dhe sénter",
      "Ainda não, mas eu prefiro ficar perto do centro."
    ],
    [
      "L",
      "Sounds like a plan. Let's figure out the details this weekend.",
      "sáunds láik a plen. lets fíguer áut dhe díteils dhis uíkend",
      "Parece um bom plano. Vamos definir os detalhes neste fim de semana."
    ]
  ],
  "connectors": [
    "Are we still going to...?",
    "Let's figure out the details.",
    "Sounds like a plan!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I have a problem with...",
      "There's no.../There's a...",
      "Can you come and take a look?"
    ],
    "today": [
      "I'm + VERB-ing (arrangement)",
      "We're going to...",
      "Sounds like a plan!"
    ],
    "combo": "I have a problem — are we still going to Portugal? I'm meeting a travel agent on Friday to sort it out."
  },
  "challenge": "Record yourself planning a trip with someone: one arrangement you've made, and one thing you're going to do."
};

/* ================= AULA 17 — Booking a Trip ================= */
const LESSON_B1_17 = {
  "ready": true,
  "label": "17",
  "title": "Booking a Trip",
  "eyebrow": "Level B1 — Lesson 17",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Now let's put your travel plans to use. In this lesson, you'll learn how to book things, and ask about what's included.",
  "scene": {
    "emoji": "🏨",
    "caption": "Leo is at a hotel check-in desk, and there's a problem with his flight before that.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Hi, I'd like to book a room for next weekend.",
        "pt": "Oi, eu gostaria de reservar um quarto para o próximo fim de semana."
      },
      {
        "who": "A",
        "speaker": "Staff",
        "en": "Sure! Is breakfast included in that price?",
        "pt": "Claro! O café da manhã está incluído nesse preço?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Could you recommend a good area to stay, too?",
        "pt": "Você poderia recomendar uma boa área para ficar, também?"
      }
    ]
  },
  "vocab": [
    [
      "I'd like to book a room.",
      "áid láik tu buk a rúm",
      "Eu gostaria de reservar um quarto.",
      "🏨",
      true
    ],
    [
      "Is breakfast included?",
      "iz brékfast inklúdid",
      "O café da manhã está incluído?",
      "🍳",
      true
    ],
    [
      "Could you recommend a good area to stay?",
      "kud iú rékomend a gud éria tu stêi",
      "Você poderia recomendar uma boa área para ficar?",
      "📍",
      true
    ],
    [
      "What's included in the package?",
      "uáts inklúdid in dhe pákej",
      "O que está incluído no pacote?",
      "📦",
      true
    ],
    [
      "I'd rather stay somewhere quiet.",
      "áid ráther stêi sâmuér kuáiet",
      "Eu prefiro ficar em algum lugar tranquilo.",
      "🤫",
      true
    ],
    [
      "Can I check in early?",
      "ken ái chek in érli",
      "Eu posso fazer check-in mais cedo?",
      "🕘",
      true
    ],
    [
      "What time is check-out?",
      "uát táim iz chék-áut",
      "Que horas é o check-out?",
      "🕐",
      true
    ],
    [
      "Have a nice stay!",
      "rrev a náis stéi",
      "Tenha uma boa estadia!",
      "😊",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I'd like to book a room. / Is breakfast included?",
    "formula": "I'd like to + VERB (pedido educado) / Is/Are ... included? (perguntar sobre o que está incluso)",
    "examples": [
      "I'd like to book a room for two nights.",
      "Is breakfast included in the price?",
      "Could you recommend a good area to stay?",
      "I'd rather stay somewhere quiet, near the center."
    ]
  },
  "simplify": [
    "I'd like to + VERB...",
    "Is/Are ... included?",
    "I'd rather + VERB..."
  ],
  "swap": {
    "base": "I'd rather ______.",
    "options": [
      "🤫 stay somewhere quiet",
      "🏖️ stay near the beach",
      "🚶 walk than take a taxi",
      "🍽️ eat at local restaurants",
      "🏨 book a small hotel"
    ]
  },
  "activities": [
    [
      "Write a sentence booking a hotel room.",
      "I'd like to book a room for two nights.",
      "áid láik tu buk a rúm for tú náits"
    ],
    [
      "Write a question about what's included.",
      "Is breakfast included in that price?",
      "iz brékfast inklúdid in dhat práis"
    ],
    [
      "Write a sentence about what kind of place you'd rather stay in.",
      "I'd rather stay somewhere quiet, near the beach.",
      "áid ráther stêi sâmuér kuáiet, níer dhe bích"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Hi, I'd like to book a room for next weekend.",
      "rrái, áid láik tu buk a rúm for nekst uíkend",
      "Oi, eu gostaria de reservar um quarto para o próximo fim de semana."
    ],
    [
      "A",
      "Sure! Is breakfast included in that price?",
      "chúr! iz brékfast inklúdid in dhat práis",
      "Claro! O café da manhã está incluído nesse preço?"
    ],
    [
      "L",
      "Yes, it is. Could you recommend a good area to stay?",
      "iés, it iz. kud iú rékomend a gud éria tu stêi",
      "Sim, está. Você poderia recomendar uma boa área para ficar?"
    ],
    [
      "A",
      "I'd rather you stay somewhere quiet, close to the old town.",
      "áid ráther iú stêi sâmuér kuáiet, klôus tu dhe ôuld táun",
      "Eu recomendaria ficar em algum lugar tranquilo, perto do centro histórico."
    ],
    [
      "L",
      "Perfect. What time is check-in?",
      "pérfekt. uát táim iz chék-in",
      "Perfeito. Que horas é o check-in?"
    ],
    [
      "A",
      "From 2pm. Have a nice stay!",
      "from tú pí em. rrev a náis stéi",
      "A partir das 14h. Tenha uma boa estadia!"
    ]
  ],
  "connectors": [
    "Is breakfast included?",
    "Could you recommend...?",
    "Have a nice stay!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I'm + VERB-ing (arrangement)",
      "We're going to...",
      "Sounds like a plan!"
    ],
    "today": [
      "I'd like to book...",
      "Is ... included?",
      "I'd rather..."
    ],
    "combo": "We're going to book the hotel now — I'd like to book a room, and is breakfast included in the price?"
  },
  "challenge": "Record yourself calling a hotel: book a room, ask if breakfast is included, and ask for a recommendation of a good area to stay."
};

/* ================= AULA 18 — Something Went Wrong ================= */
const LESSON_B1_18 = {
  "ready": true,
  "label": "18",
  "title": "Something Went Wrong",
  "eyebrow": "Level B1 — Lesson 18",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Travel doesn't always go as planned. Let's learn how to explain a travel problem, like a cancellation or a delay.",
  "scene": {
    "emoji": "🛫",
    "caption": "Leo is at the airport check-in desk, and there's a problem with his flight.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Excuse me, I think my flight has been delayed.",
        "pt": "Com licença, acho que meu voo foi atrasado."
      },
      {
        "who": "A",
        "speaker": "Staff",
        "en": "Let me check... Yes, it's delayed by two hours.",
        "pt": "Deixe-me verificar... Sim, está atrasado duas horas."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Oh no. Is there anything you can do?",
        "pt": "Ah não. Tem algo que você possa fazer?"
      }
    ]
  },
  "vocab": [
    [
      "My flight has been delayed.",
      "mái fláit rrez bín diléid",
      "Meu voo foi atrasado.",
      "🛫",
      true
    ],
    [
      "We missed our connection.",
      "uí mist áur konékchn",
      "Perdemos nossa conexão.",
      "🔄",
      true
    ],
    [
      "My luggage has been lost.",
      "mái lâguij rrez bín lóst",
      "Minha bagagem foi perdida.",
      "🧳",
      true
    ],
    [
      "The reservation has been cancelled.",
      "dhe rézervéichn rrez bín kánseld",
      "A reserva foi cancelada.",
      "❌",
      true
    ],
    [
      "Is there anything you can do?",
      "iz dhér énithin iú ken du",
      "Tem algo que você possa fazer?",
      "🙏",
      true
    ],
    [
      "Is there a lounge I can wait in?",
      "iz dhér a láunj ái ken uéit in",
      "Tem uma sala de espera onde eu possa esperar?",
      "🛋️",
      true
    ],
    [
      "What are my options?",
      "uát ár mái ópchens",
      "Quais são minhas opções?",
      "❓",
      true
    ],
    [
      "Thanks for your patience.",
      "thenks for iór péichens",
      "Obrigado pela paciência.",
      "🙏",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "My flight has been delayed. / Our reservation has been cancelled.",
    "formula": "has/have been + VERB (past participle) — Passive voice for situations that happened to you",
    "examples": [
      "My flight has been delayed.",
      "My luggage has been lost.",
      "The reservation has been cancelled.",
      "Our room has been upgraded!"
    ]
  },
  "simplify": [
    "has/have been + PAST PARTICIPLE",
    "Is there anything you can do?",
    "What are my options?"
  ],
  "swap": {
    "base": "My ______ has been ______.",
    "options": [
      "🛫 flight / delayed",
      "🧳 luggage / lost",
      "🏨 reservation / cancelled",
      "🚗 rental car / upgraded",
      "🎫 ticket / changed"
    ]
  },
  "activities": [
    [
      "Write a sentence about a travel problem, using the passive voice.",
      "Our flight has been cancelled.",
      "áur fláit rrez bín kánseld"
    ],
    [
      "Write a sentence asking what can be done.",
      "Is there anything you can do about this?",
      "iz dhér énithin iú ken du abáut dhis"
    ],
    [
      "Write a sentence asking about your options.",
      "What are my options at this point?",
      "uát ár mái ópchens at dhis póint"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Excuse me, I think my flight has been delayed.",
      "ikskiúz mí, ái think mái fláit rrez bín diléid",
      "Com licença, acho que meu voo foi atrasado."
    ],
    [
      "A",
      "Let me check... Yes, it's delayed by two hours.",
      "let mí chek... iés, its diléid bái tú áuers",
      "Deixe-me verificar... Sim, está atrasado duas horas."
    ],
    [
      "L",
      "Oh no. Is there anything you can do?",
      "ôu nôu. iz dhér énithin iú ken du",
      "Ah não. Tem algo que você possa fazer?"
    ],
    [
      "A",
      "I can offer you a voucher for food while you wait.",
      "ái ken ófer iú a váucher for fúd uáil iú uéit",
      "Eu posso te oferecer um vale para comida enquanto você espera."
    ],
    [
      "L",
      "Thanks. Is there a lounge I can wait in?",
      "thenks. iz dhér a láunj ái ken uéit in",
      "Obrigado. Tem uma sala de espera onde eu possa esperar?"
    ],
    [
      "A",
      "Yes, just down the hall. Thanks for your patience.",
      "iés, jâst dáun dhe rról. thenks for iór péichens",
      "Sim, logo ali no corredor. Obrigado pela paciência."
    ]
  ],
  "connectors": [
    "Is there anything you can do?",
    "What are my options?",
    "Thanks for your patience."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I'd like to book...",
      "Is ... included?",
      "I'd rather..."
    ],
    "today": [
      "has/have been + PAST PARTICIPLE",
      "Is there anything you can do?",
      "What are my options?"
    ],
    "combo": "I'd like to book a room, but something went wrong — my flight has been delayed, so what are my options?"
  },
  "challenge": "Record yourself explaining a travel problem at an airport or hotel, and asking what your options are."
};

/* ================= AULA 19 — Tell Me About Your Trip ================= */
const LESSON_B1_19 = {
  "ready": true,
  "label": "19",
  "title": "Tell Me About Your Trip",
  "eyebrow": "Level B1 — Lesson 19",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Now let's talk about a trip you took — what you did, what you saw, and what it was like.",
  "scene": {
    "emoji": "📸",
    "caption": "Leo is showing Ana photos and telling her about his last trip.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "So, tell me about your trip! How was it?",
        "pt": "Então, me conta sobre sua viagem! Como foi?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "It was amazing! We visited three cities in one week.",
        "pt": "Foi incrível! A gente visitou três cidades em uma semana."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Wow, that's a lot! What was your favorite part?",
        "pt": "Nossa, isso é bastante! Qual foi sua parte favorita?"
      }
    ]
  },
  "vocab": [
    [
      "Tell me about your trip.",
      "tel mí abáut iór trip",
      "Me conta sobre sua viagem.",
      "📸",
      true
    ],
    [
      "How was it?",
      "ráu uóz it",
      "Como foi?",
      "❓",
      true
    ],
    [
      "We visited three cities.",
      "uí vízitid thrí sítiz",
      "A gente visitou três cidades.",
      "🏙️",
      true
    ],
    [
      "What was your favorite part?",
      "uát uóz iór féivorit part",
      "Qual foi sua parte favorita?",
      "⭐",
      true
    ],
    [
      "The food was incredible.",
      "dhe fúd uóz inkrédibol",
      "A comida foi incrível.",
      "🍽️",
      true
    ],
    [
      "We got a bit lost, but it was fun.",
      "uí gât a bit lóst, bât it uóz fân",
      "A gente se perdeu um pouco, mas foi divertido.",
      "🗺️",
      true
    ],
    [
      "I'd definitely go back.",
      "áid définitli gôu bák",
      "Eu com certeza voltaria.",
      "🔁",
      true
    ],
    [
      "You should go too!",
      "iú chud gôu tú",
      "Você deveria ir também!",
      "😄",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "We visited three cities. / What was your favorite part?",
    "formula": "Past Simple para contar a viagem + Present Perfect/comparação para avaliar a experiência",
    "examples": [
      "We visited three cities in one week.",
      "The food was incredible everywhere we went.",
      "What was your favorite part of the trip?",
      "I'd definitely go back one day."
    ]
  },
  "simplify": [
    "We visited / We went / We saw...",
    "It was + ADJECTIVE",
    "What was your favorite part?"
  ],
  "swap": {
    "base": "The best part of the trip was ______.",
    "options": [
      "🍽️ the food",
      "🏛️ the old town",
      "🏖️ the beach",
      "🎉 the people we met",
      "🌄 the views"
    ]
  },
  "activities": [
    [
      "Write a sentence about where you went.",
      "We visited three cities in one week.",
      "uí vízitid thrí sítiz in uân uík"
    ],
    [
      "Write a sentence about your favorite part.",
      "The best part of the trip was the food.",
      "dhe best part âv dhe trip uóz dhe fúd"
    ],
    [
      "Ask someone else about their last trip.",
      "Tell me about your trip. How was it?",
      "tel mí abáut iór trip. ráu uóz it"
    ]
  ],
  "dialogue": [
    [
      "L",
      "So, tell me about your trip! How was it?",
      "sôu, tel mí abáut iór trip! ráu uóz it",
      "Então, me conta sobre sua viagem! Como foi?"
    ],
    [
      "A",
      "It was amazing! We visited three cities in one week.",
      "it uóz améizin! uí vízitid thrí sítiz in uân uík",
      "Foi incrível! A gente visitou três cidades em uma semana."
    ],
    [
      "L",
      "Wow, that's a lot! What was your favorite part?",
      "uáu, dhats a lât! uát uóz iór féivorit part",
      "Nossa, isso é bastante! Qual foi sua parte favorita?"
    ],
    [
      "A",
      "Definitely the food — it was incredible everywhere we went.",
      "définitli dhe fúd — it uóz inkrédibol évriuér uí uent",
      "Com certeza a comida — foi incrível em todo lugar que a gente foi."
    ],
    [
      "L",
      "Did anything go wrong?",
      "did énithin gôu róng",
      "Alguma coisa deu errado?"
    ],
    [
      "A",
      "We got a bit lost once, but it was actually fun. I'd definitely go back.",
      "uí gât a bit lóst uâns, bât it uóz áktiuali fân. áid définitli gôu bák",
      "A gente se perdeu um pouco uma vez, mas na verdade foi divertido. Eu com certeza voltaria."
    ]
  ],
  "connectors": [
    "How was it?",
    "What was your favorite part?",
    "You should go too!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "has/have been + PAST PARTICIPLE",
      "Is there anything you can do?",
      "What are my options?"
    ],
    "today": [
      "We visited / We went / We saw...",
      "It was + ADJECTIVE",
      "What was your favorite part?"
    ],
    "combo": "My flight was delayed, but tell me about your trip anyway — we visited three cities, and it was amazing!"
  },
  "challenge": "Record yourself telling someone about a trip you took: where you went, what happened, and what your favorite part was."
};

/* ================= AULA 20 — Travel Challenge ================= */
const LESSON_B1_20 = {
  "ready": true,
  "label": "20",
  "title": "Travel Challenge",
  "eyebrow": "Level B1 — Lesson 20",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Now let's combine everything: plan, book, deal with a problem, and talk about the experience — all in one situation.",
  "scene": {
    "emoji": "🧳",
    "caption": "Ana is on a trip and her hotel reservation has a problem, right in the middle of her stay.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Excuse me, there seems to be a problem with my reservation.",
        "pt": "Com licença, parece que tem um problema com minha reserva."
      },
      {
        "who": "L",
        "speaker": "Hotel staff",
        "en": "Let me check... I'm sorry, your room has been given to someone else.",
        "pt": "Deixe-me verificar... Sinto muito, seu quarto foi dado a outra pessoa."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "What?! I booked this two weeks ago. What are my options now?",
        "pt": "O quê?! Eu reservei isso há duas semanas. Quais são minhas opções agora?"
      }
    ]
  },
  "vocab": [
    [
      "There seems to be a problem.",
      "dhér símz tu bí a próblem",
      "Parece que tem um problema.",
      "⚠️",
      true
    ],
    [
      "I booked this two weeks ago.",
      "ái búkt dhis tú uíks agôu",
      "Eu reservei isso há duas semanas.",
      "📅",
      true
    ],
    [
      "What are my options now?",
      "uát ár mái ópchens náu",
      "Quais são minhas opções agora?",
      "❓",
      true
    ],
    [
      "Can you fix this, please?",
      "ken iú fiks dhis, plíz",
      "Você pode consertar isso, por favor?",
      "🙏",
      true
    ],
    [
      "I need this sorted out today.",
      "ái níd dhis sórtid áut tudéi",
      "Eu preciso disso resolvido hoje.",
      "⏰",
      true
    ],
    [
      "Is there another option?",
      "iz dhér anâdher ópchen",
      "Tem outra opção?",
      "🔄",
      true
    ],
    [
      "I appreciate you fixing this so quickly.",
      "ái apríchiêit iú fíksin dhis sôu kuíkli",
      "Eu agradeço por consertar isso tão rápido.",
      "🙏",
      true
    ],
    [
      "In the end, it worked out.",
      "in dhe end, it uérkt áut",
      "No final, deu tudo certo.",
      "😌",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "There seems to be a problem with my reservation. / What are my options now?",
    "formula": "Combinar: There seems to be a problem / I booked this... / What are my options? (resolver uma situação inesperada de viagem)",
    "examples": [
      "There seems to be a problem with my reservation.",
      "I booked this two weeks ago.",
      "What are my options now?",
      "I need this sorted out today."
    ]
  },
  "simplify": [
    "There seems to be a problem with...",
    "I booked/planned this...",
    "What are my options now?"
  ],
  "swap": {
    "base": "There seems to be a problem with ______.",
    "options": [
      "🏨 my reservation",
      "✈️ my flight",
      "🎫 my ticket",
      "🧳 my luggage",
      "💳 my payment"
    ]
  },
  "activities": [
    [
      "Write a sentence describing an unexpected travel problem.",
      "There seems to be a problem with my reservation.",
      "dhér símz tu bí a próblem uíth mái rézervéichn"
    ],
    [
      "Write a sentence explaining when you made the booking.",
      "I booked this two weeks ago, online.",
      "ái búkt dhis tú uíks agôu, onláin"
    ],
    [
      "Write a sentence asking for a solution.",
      "What are my options now? I need this sorted out today.",
      "uát ár mái ópchens náu? ái níd dhis sórtid áut tudéi"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Excuse me, there seems to be a problem with my reservation.",
      "ikskiúz mí, dhér símz tu bí a próblem uíth mái rézervéichn",
      "Com licença, parece que tem um problema com minha reserva."
    ],
    [
      "L",
      "Let me check... I'm sorry, your room has been given to someone else.",
      "let mí chek... áim sóri, iór rúm rrez bín guívn tu sâmuân els",
      "Deixe-me verificar... Sinto muito, seu quarto foi dado a outra pessoa."
    ],
    [
      "A",
      "What?! I booked this two weeks ago. What are my options now?",
      "uát?! ái búkt dhis tú uíks agôu. uát ár mái ópchens náu",
      "O quê?! Eu reservei isso há duas semanas. Quais são minhas opções agora?"
    ],
    [
      "L",
      "I can offer you an upgrade to a bigger room, at no extra cost.",
      "ái ken ófer iú en âpgréid tu a bíguer rúm, at nôu ékstra kóst",
      "Eu posso te oferecer um upgrade pra um quarto maior, sem custo extra."
    ],
    [
      "A",
      "That would work. I really need this sorted out today.",
      "dhat wud uérk. ái ríli níd dhis sórtid áut tudéi",
      "Isso funcionaria. Eu realmente preciso disso resolvido hoje."
    ],
    [
      "L",
      "Of course. I appreciate you being so patient about this.",
      "âv kórs. ái apríchiêit iú bíin sôu péichent abáut dhis",
      "Claro. Eu agradeço você ter sido tão paciente com isso."
    ]
  ],
  "connectors": [
    "There seems to be a problem.",
    "What are my options now?",
    "In the end, it worked out."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "We visited / We went / We saw...",
      "It was + ADJECTIVE",
      "What was your favorite part?"
    ],
    "today": [
      "There seems to be a problem with...",
      "I booked/planned this...",
      "What are my options now?"
    ],
    "combo": "We visited three cities, and it was amazing, until there seemed to be a problem with my reservation — what are my options now?"
  },
  "challenge": "Mission: something unexpected happens during your trip. Explain the problem, say when you booked it, and ask about your options."
};


/* ================= WORLD 5 - PEOPLE & SOCIAL LIFE ================= */
/* ================= AULA 21 — Let's Meet Up ================= */
const LESSON_B1_21 = {
  "ready": true,
  "label": "21",
  "title": "Let's Meet Up",
  "eyebrow": "Level B1 — Lesson 21",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to make plans with someone — suggest something, agree on a time and place, and confirm it.",
  "scene": {
    "emoji": "📱",
    "caption": "Leo is texting Ana to make plans to meet up this week.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Hey! Are you free this week? Let's meet up.",
        "pt": "Oi! Você está livre essa semana? Vamos nos encontrar."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Sure! How about Thursday evening?",
        "pt": "Claro! Que tal quinta à noite?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Works for me. Where should we go?",
        "pt": "Funciona pra mim. Pra onde a gente vai?"
      }
    ]
  },
  "vocab": [
    [
      "Are you free this week?",
      "ár iú frí dhis uík",
      "Você está livre essa semana?",
      "📅",
      true
    ],
    [
      "Let's meet up.",
      "lets mít âp",
      "Vamos nos encontrar.",
      "🤝",
      true
    ],
    [
      "How about Thursday?",
      "ráu abáut thérzdei",
      "Que tal quinta?",
      "❓",
      true
    ],
    [
      "That works for me.",
      "dhat uérks for mí",
      "Isso funciona pra mim.",
      "👍",
      true
    ],
    [
      "Where should we go?",
      "uér chud uí gôu",
      "Pra onde a gente vai?",
      "📍",
      true
    ],
    [
      "What time works for you?",
      "uát táim uérks for iú",
      "Que horário funciona pra você?",
      "🕐",
      true
    ],
    [
      "Let's confirm tomorrow.",
      "lets konférm tumórou",
      "Vamos confirmar amanhã.",
      "✔️",
      true
    ],
    [
      "See you then!",
      "sí iú dhen",
      "Até lá!",
      "👋",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Are you free this week? / How about Thursday evening?",
    "formula": "Are you free...? / How about + hora/dia? / That works for me (combinar horários e propor encontros)",
    "examples": [
      "Are you free this week?",
      "How about Thursday evening?",
      "That works for me, what time?",
      "Let's confirm tomorrow, okay?"
    ]
  },
  "simplify": [
    "Are you free...?",
    "How about + TIME?",
    "That works for me."
  ],
  "swap": {
    "base": "How about ______?",
    "options": [
      "📅 Thursday evening",
      "☕ tomorrow morning",
      "🍽️ Saturday for lunch",
      "🎬 Friday night",
      "🚶 Sunday afternoon"
    ]
  },
  "activities": [
    [
      "Write a message suggesting a meetup.",
      "Are you free this week? Let's meet up.",
      "ár iú frí dhis uík? lets mít âp"
    ],
    [
      "Write a sentence proposing a time.",
      "How about Thursday evening?",
      "ráu abáut thérzdei ívnin"
    ],
    [
      "Write a sentence confirming plans.",
      "That works for me. Let's confirm tomorrow.",
      "dhat uérks for mí. lets konférm tumórou"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Hey! Are you free this week? Let's meet up.",
      "rrêi! ár iú frí dhis uík? lets mít âp",
      "Oi! Você está livre essa semana? Vamos nos encontrar."
    ],
    [
      "A",
      "Sure! How about Thursday evening?",
      "chúr! ráu abáut thérzdei ívnin",
      "Claro! Que tal quinta à noite?"
    ],
    [
      "L",
      "Works for me. Where should we go?",
      "uérks for mí. uér chud uí gôu",
      "Funciona pra mim. Pra onde a gente vai?"
    ],
    [
      "A",
      "How about that new café downtown?",
      "ráu abáut dhat niú kaféi dáuntáun",
      "Que tal aquele café novo no centro?"
    ],
    [
      "L",
      "Sounds good. What time works for you?",
      "sáunds gud. uát táim uérks for iú",
      "Parece bom. Que horário funciona pra você?"
    ],
    [
      "A",
      "Around seven? Let's confirm tomorrow.",
      "aráund sévn? lets konférm tumórou",
      "Por volta das sete? Vamos confirmar amanhã."
    ]
  ],
  "connectors": [
    "Are you free this week?",
    "That works for me.",
    "See you then!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "There seems to be a problem with...",
      "I booked/planned this...",
      "What are my options now?"
    ],
    "today": [
      "Are you free...?",
      "How about + TIME?",
      "That works for me."
    ],
    "combo": "There seems to be a problem with my schedule, but are you free this week anyway? Let's meet up!"
  },
  "challenge": "Record yourself texting someone to suggest a meetup: propose a day, agree on a time, and confirm."
};

/* ================= AULA 22 — Getting to Know You ================= */
const LESSON_B1_22 = {
  "ready": true,
  "label": "22",
  "title": "Getting to Know You",
  "eyebrow": "Level B1 — Lesson 22",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to get to know someone better — ask about their life, their interests, and share a bit about yours.",
  "scene": {
    "emoji": "🤝",
    "caption": "Ana and Leo are getting to know each other at a friend's party.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "So, how do you know Marta?",
        "pt": "Então, como você conhece a Marta?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "We used to work together. What about you?",
        "pt": "A gente trabalhava junto. E você?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "We were neighbors for a few years. What do you do these days?",
        "pt": "A gente foi vizinho por uns anos. O que você faz hoje em dia?"
      }
    ]
  },
  "vocab": [
    [
      "How do you know her?",
      "ráu du iú nôu rrer",
      "Como você a conhece?",
      "❓",
      true
    ],
    [
      "We used to work together.",
      "uí iúst tu uérk tugédher",
      "A gente trabalhava junto.",
      "💼",
      true
    ],
    [
      "What about you?",
      "uát abáut iú",
      "E você?",
      "🙋",
      true
    ],
    [
      "What do you do for fun?",
      "uát du iú du for fân",
      "O que você faz por diversão?",
      "🎉",
      true
    ],
    [
      "I'm really into...",
      "áim ríli íntu",
      "Eu curto muito...",
      "❤️",
      true
    ],
    [
      "That's interesting, tell me more.",
      "dhats íntrestin, tel mí mór",
      "Que interessante, me conta mais.",
      "🗣️",
      true
    ],
    [
      "We have a lot in common.",
      "uí rrev a lât in kómon",
      "A gente tem bastante em comum.",
      "🤝",
      true
    ],
    [
      "It was great talking to you.",
      "it uóz gréit tókin tu iú",
      "Foi ótimo falar com você.",
      "😊",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "How do you know her? / What do you do for fun?",
    "formula": "Perguntas com how/what para conhecer alguém + What about you? (devolver a pergunta)",
    "examples": [
      "How do you know Marta?",
      "What do you do for fun?",
      "What about you? What do you do these days?",
      "We have a lot in common!"
    ]
  },
  "simplify": [
    "How do you know...?",
    "What do you do for fun?",
    "What about you?"
  ],
  "swap": {
    "base": "I'm really into ______.",
    "options": [
      "🎸 music",
      "📚 reading",
      "🏃 running",
      "🎨 painting",
      "🍳 cooking"
    ]
  },
  "activities": [
    [
      "Write a question to ask someone new.",
      "How do you know the host of the party?",
      "ráu du iú nôu dhe rôust âv dhe párti"
    ],
    [
      "Write a sentence sharing something about your interests.",
      "I'm really into photography these days.",
      "áim ríli íntu fotógrafi dhíz déiz"
    ],
    [
      "Write a sentence about something you have in common with someone.",
      "We have a lot in common — we both love travelling.",
      "uí rrev a lât in kómon — uí bôuth lâv trávelin"
    ]
  ],
  "dialogue": [
    [
      "A",
      "So, how do you know Marta?",
      "sôu, ráu du iú nôu márta",
      "Então, como você conhece a Marta?"
    ],
    [
      "L",
      "We used to work together. What about you?",
      "uí iúst tu uérk tugédher. uát abáut iú",
      "A gente trabalhava junto. E você?"
    ],
    [
      "A",
      "We were neighbors for a few years. What do you do these days?",
      "uí uér néibors for a fiú íers. uát du iú du dhíz déiz",
      "A gente foi vizinho por uns anos. O que você faz hoje em dia?"
    ],
    [
      "L",
      "I work in marketing. And for fun, I'm really into hiking.",
      "ái uérk in márketin. end for fân, áim ríli íntu ráikin",
      "Eu trabalho com marketing. E por diversão, eu curto muito trilhas."
    ],
    [
      "A",
      "No way, me too! We have a lot in common.",
      "nôu uéi, mi tú! uí rrev a lât in kómon",
      "Não acredito, eu também! A gente tem bastante em comum."
    ],
    [
      "L",
      "It was great talking to you. Let's hike together sometime!",
      "it uóz gréit tókin tu iú. lets ráik tugédher sâmtáim",
      "Foi ótimo falar com você. Vamos fazer uma trilha juntos algum dia!"
    ]
  ],
  "connectors": [
    "What about you?",
    "That's interesting, tell me more.",
    "It was great talking to you."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Are you free...?",
      "How about + TIME?",
      "That works for me."
    ],
    "today": [
      "How do you know...?",
      "What about you?",
      "We have a lot in common."
    ],
    "combo": "Let's meet up sometime — how do you know Marta? We used to work together, and it turns out we have a lot in common!"
  },
  "challenge": "Record yourself getting to know someone new: ask two questions about them, and share something about yourself."
};

/* ================= AULA 23 — What Do You Think? ================= */
const LESSON_B1_23 = {
  "ready": true,
  "label": "23",
  "title": "What Do You Think?",
  "eyebrow": "Level B1 — Lesson 23",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to give your opinion clearly, and ask what someone else thinks.",
  "scene": {
    "emoji": "💭",
    "caption": "Ana and Leo are talking about a new restaurant in town.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "What do you think of the new restaurant downtown?",
        "pt": "O que você acha do novo restaurante no centro?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I think it's really good, but a bit expensive.",
        "pt": "Eu acho que é bem bom, mas um pouco caro."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "In my opinion, it's worth it for a special occasion.",
        "pt": "Na minha opinião, vale a pena para uma ocasião especial."
      }
    ]
  },
  "vocab": [
    [
      "What do you think of...?",
      "uát du iú think âv",
      "O que você acha de...?",
      "💭",
      true
    ],
    [
      "I think it's really good.",
      "ái think its ríli gud",
      "Eu acho que é bem bom.",
      "👍",
      true
    ],
    [
      "In my opinion...",
      "in mái opínion",
      "Na minha opinião...",
      "🗣️",
      true
    ],
    [
      "I'm not sure, to be honest.",
      "áim nât chúr, tu bí ónest",
      "Eu não tenho certeza, sendo sincero.",
      "🤷",
      true
    ],
    [
      "It depends on the situation.",
      "it dipénds on dhe sitiuéichn",
      "Depende da situação.",
      "⚖️",
      true
    ],
    [
      "Personally, I'd say...",
      "pérsonali, áid séi",
      "Pessoalmente, eu diria...",
      "🙋",
      true
    ],
    [
      "What's your opinion on that?",
      "uáts iór opínion on dhat",
      "Qual é sua opinião sobre isso?",
      "❓",
      true
    ],
    [
      "Fair point!",
      "fér póint",
      "Ponto válido!",
      "👌",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I think it's really good. / In my opinion, it's worth it.",
    "formula": "I think + opinião / In my opinion, ... / Personally, I'd say... (expressar opinião com clareza)",
    "examples": [
      "I think it's really good, but a bit expensive.",
      "In my opinion, it's worth it for a special occasion.",
      "Personally, I'd say it's overrated.",
      "It depends on the situation."
    ]
  },
  "simplify": [
    "I think + OPINIÃO",
    "In my opinion, ...",
    "Personally, I'd say..."
  ],
  "swap": {
    "base": "In my opinion, ______.",
    "options": [
      "🍽️ that restaurant is worth it",
      "🎬 that movie was too long",
      "🏙️ this city is great to live in",
      "📱 social media is overrated",
      "☕ working from home is better"
    ]
  },
  "activities": [
    [
      "Write a sentence giving your opinion about something.",
      "I think it's really good, but a bit expensive.",
      "ái think its ríli gud, bât a bit ikspénsiv"
    ],
    [
      "Write a sentence using 'In my opinion'.",
      "In my opinion, it's worth it for a special occasion.",
      "in mái opínion, its uérth it for a spéchal okéijon"
    ],
    [
      "Ask someone else for their opinion.",
      "What do you think of the new restaurant downtown?",
      "uát du iú think âv dhe niú réstorant dáuntáun"
    ]
  ],
  "dialogue": [
    [
      "A",
      "What do you think of the new restaurant downtown?",
      "uát du iú think âv dhe niú réstorant dáuntáun",
      "O que você acha do novo restaurante no centro?"
    ],
    [
      "L",
      "I think it's really good, but a bit expensive.",
      "ái think its ríli gud, bât a bit ikspénsiv",
      "Eu acho que é bem bom, mas um pouco caro."
    ],
    [
      "A",
      "In my opinion, it's worth it for a special occasion.",
      "in mái opínion, its uérth it for a spéchal okéijon",
      "Na minha opinião, vale a pena para uma ocasião especial."
    ],
    [
      "L",
      "Fair point. What's your opinion on the service?",
      "fér póint. uáts iór opínion on dhe sérvis",
      "Ponto válido. Qual é sua opinião sobre o atendimento?"
    ],
    [
      "A",
      "Personally, I'd say it was excellent.",
      "pérsonali, áid séi it uóz ékselent",
      "Pessoalmente, eu diria que foi excelente."
    ],
    [
      "L",
      "I agree with that, at least.",
      "ái agrí uíth dhat, at líst",
      "Eu concordo com isso, pelo menos."
    ]
  ],
  "connectors": [
    "What do you think of...?",
    "In my opinion...",
    "Fair point!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "How do you know...?",
      "What about you?",
      "We have a lot in common."
    ],
    "today": [
      "I think...",
      "In my opinion...",
      "Personally, I'd say..."
    ],
    "combo": "We have a lot in common — what do you think of the new restaurant? In my opinion, it's worth it!"
  },
  "challenge": "Record yourself giving your opinion about something (a place, a movie, a book), and asking someone else what they think."
};

/* ================= AULA 24 — I See Your Point ================= */
const LESSON_B1_24 = {
  "ready": true,
  "label": "24",
  "title": "I See Your Point",
  "eyebrow": "Level B1 — Lesson 24",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to agree and disagree politely, without ending the conversation.",
  "scene": {
    "emoji": "🗣️",
    "caption": "Ana and Leo disagree about whether working from home is better than working at the office.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I think working from home is much better.",
        "pt": "Eu acho que trabalhar de casa é muito melhor."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I see your point, but I actually prefer the office.",
        "pt": "Eu entendo seu ponto de vista, mas na verdade eu prefiro o escritório."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Really? Why?",
        "pt": "Sério? Por quê?"
      }
    ]
  },
  "vocab": [
    [
      "I see your point, but...",
      "ái sí iór póint, bât",
      "Eu entendo seu ponto de vista, mas...",
      "👀",
      true
    ],
    [
      "I totally agree with that.",
      "ái tôutali agrí uíth dhat",
      "Eu concordo totalmente com isso.",
      "✅",
      true
    ],
    [
      "I'm not sure I agree.",
      "áim nât chúr ái agrí",
      "Eu não tenho certeza se concordo.",
      "🤔",
      true
    ],
    [
      "That's a good point, but...",
      "dhats a gud póint, bât",
      "É um bom ponto, mas...",
      "💡",
      true
    ],
    [
      "I understand, but I see it differently.",
      "ái ânderstend, bât ái sí it díferentli",
      "Eu entendo, mas eu vejo diferente.",
      "🔄",
      true
    ],
    [
      "Actually, I disagree.",
      "áktiuali, ái disagrí",
      "Na verdade, eu discordo.",
      "❌",
      true
    ],
    [
      "We'll have to agree to disagree.",
      "uíl rrev tu agrí tu disagrí",
      "A gente vai ter que concordar em discordar.",
      "🤝",
      true
    ],
    [
      "That's a fair point.",
      "dhats a fér póint",
      "É um ponto justo.",
      "👌",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I see your point, but I actually prefer the office. / I totally agree with that.",
    "formula": "I see your point, but... / I totally agree / I'm not sure I agree (concordar e discordar com educação)",
    "examples": [
      "I see your point, but I actually prefer the office.",
      "I totally agree with that.",
      "I'm not sure I agree, actually.",
      "We'll have to agree to disagree."
    ]
  },
  "simplify": [
    "I see your point, but...",
    "I totally agree with...",
    "I'm not sure I agree..."
  ],
  "swap": {
    "base": "I see your point, but ______.",
    "options": [
      "🏠 I actually prefer the office",
      "🎬 I didn't really like the ending",
      "🍕 I think the other restaurant is better",
      "📱 I still think it's a good idea",
      "⏰ I'd rather start earlier"
    ]
  },
  "activities": [
    [
      "Write a sentence disagreeing politely with someone.",
      "I see your point, but I actually prefer the office.",
      "ái sí iór póint, bât ái áktiuali prifér dhe ófis"
    ],
    [
      "Write a sentence agreeing with someone.",
      "I totally agree with that.",
      "ái tôutali agrí uíth dhat"
    ],
    [
      "Write a sentence to end a friendly disagreement.",
      "We'll have to agree to disagree.",
      "uíl rrev tu agrí tu disagrí"
    ]
  ],
  "dialogue": [
    [
      "A",
      "I think working from home is much better.",
      "ái think uérkin from rrôum iz mâtch béter",
      "Eu acho que trabalhar de casa é muito melhor."
    ],
    [
      "L",
      "I see your point, but I actually prefer the office.",
      "ái sí iór póint, bât ái áktiuali prifér dhe ófis",
      "Eu entendo seu ponto de vista, mas na verdade eu prefiro o escritório."
    ],
    [
      "A",
      "Really? Why?",
      "ríli? uái",
      "Sério? Por quê?"
    ],
    [
      "L",
      "I like seeing people every day, that's a fair point for me.",
      "ái láik síin pípol évri déi, dhats a fér póint for mí",
      "Eu gosto de ver as pessoas todo dia, esse é um ponto válido pra mim."
    ],
    [
      "A",
      "That's a good point, but I'm not sure I agree.",
      "dhats a gud póint, bât áim nât chúr ái agrí",
      "É um bom ponto, mas eu não tenho certeza se concordo."
    ],
    [
      "L",
      "That's okay, we'll have to agree to disagree!",
      "dhats ôukêi, uíl rrev tu agrí tu disagrí",
      "Tudo bem, a gente vai ter que concordar em discordar!"
    ]
  ],
  "connectors": [
    "I see your point, but...",
    "I totally agree with that.",
    "We'll have to agree to disagree."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I think...",
      "In my opinion...",
      "Personally, I'd say..."
    ],
    "today": [
      "I see your point, but...",
      "I totally agree with...",
      "I'm not sure I agree..."
    ],
    "combo": "In my opinion, working from home is better — I see your point, but I actually prefer the office."
  },
  "challenge": "Record yourself disagreeing politely with someone about something (a topic, a choice, an opinion), using 'I see your point, but...'."
};

/* ================= AULA 25 — Keep Talking ================= */
const LESSON_B1_25 = {
  "ready": true,
  "label": "25",
  "title": "Keep Talking",
  "eyebrow": "Level B1 — Lesson 25",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to keep a conversation going — ask follow-up questions, show interest, and never let it die.",
  "scene": {
    "emoji": "💬",
    "caption": "Leo is telling Ana about his weekend, and she keeps the conversation alive with questions.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I went hiking this weekend.",
        "pt": "Eu fiz uma trilha nesse fim de semana."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Really? Why did you decide to go hiking?",
        "pt": "Sério? Por que você decidiu fazer uma trilha?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "A friend invited me, and I love being outdoors.",
        "pt": "Um amigo me convidou, e eu adoro ficar ao ar livre."
      }
    ]
  },
  "vocab": [
    [
      "Really? Why?",
      "ríli? uái",
      "Sério? Por quê?",
      "❓",
      true
    ],
    [
      "What about you?",
      "uát abáut iú",
      "E você?",
      "🙋",
      true
    ],
    [
      "How about that!",
      "ráu abáut dhat",
      "Que interessante!",
      "😮",
      true
    ],
    [
      "What do you mean?",
      "uát du iú mín",
      "O que você quer dizer?",
      "🤔",
      true
    ],
    [
      "I agree, but...",
      "ái agrí, bât",
      "Eu concordo, mas...",
      "🗣️",
      true
    ],
    [
      "Tell me more about that.",
      "tel mí mór abáut dhat",
      "Me conta mais sobre isso.",
      "👂",
      true
    ],
    [
      "That's interesting, go on.",
      "dhats íntrestin, gôu on",
      "Isso é interessante, continue.",
      "➡️",
      true
    ],
    [
      "No way, really?",
      "nôu uéi, ríli",
      "Não acredito, sério?",
      "😲",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Really? Why did you decide to go hiking? / What about you?",
    "formula": "Perguntas curtas pra manter a conversa viva: Really? Why? / What about you? / How about...? / Tell me more",
    "examples": [
      "Really? Why did you decide to do that?",
      "What about you? Have you ever tried it?",
      "How about that! Tell me more.",
      "What do you mean by that?"
    ]
  },
  "simplify": [
    "Really? Why...?",
    "What about you?",
    "Tell me more about that."
  ],
  "swap": {
    "base": "Really? Why did you decide to ______?",
    "options": [
      "🥾 go hiking",
      "🎨 take up painting",
      "🏃 start running",
      "📚 study English",
      "🎸 learn guitar"
    ]
  },
  "activities": [
    [
      "Write a follow-up question showing interest.",
      "Really? Why did you decide to go hiking?",
      "ríli? uái did iú disáid tu gôu ráikin"
    ],
    [
      "Write a sentence asking to keep talking about something.",
      "Tell me more about that.",
      "tel mí mór abáut dhat"
    ],
    [
      "Write a sentence turning the question back.",
      "What about you? Do you like the outdoors too?",
      "uát abáut iú? du iú láik dhi áutdórs tú"
    ]
  ],
  "dialogue": [
    [
      "L",
      "I went hiking this weekend.",
      "ái uent ráikin dhis uíkend",
      "Eu fiz uma trilha nesse fim de semana."
    ],
    [
      "A",
      "Really? Why did you decide to go hiking?",
      "ríli? uái did iú disáid tu gôu ráikin",
      "Sério? Por que você decidiu fazer uma trilha?"
    ],
    [
      "L",
      "A friend invited me, and I love being outdoors.",
      "a frend inváitid mí, end ái lâv bíin áutdórs",
      "Um amigo me convidou, e eu adoro ficar ao ar livre."
    ],
    [
      "A",
      "How about that! What about you, do you go often?",
      "ráu abáut dhat! uát abáut iú, du iú gôu ófen",
      "Que interessante! E você, vai com frequência?"
    ],
    [
      "L",
      "Not really, but I'd like to. Tell me, do you like nature too?",
      "nât ríli, bât áid láik tu. tel mí, du iú láik néicher tú",
      "Não muito, mas eu gostaria. Me conta, você gosta de natureza também?"
    ],
    [
      "A",
      "I do! Tell me more about the trail you went on.",
      "ái du! tel mí mór abáut dhe tréil iú uent on",
      "Eu gosto! Me conta mais sobre a trilha que você fez."
    ]
  ],
  "connectors": [
    "Really? Why?",
    "What about you?",
    "Tell me more about that."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I see your point, but...",
      "I totally agree with...",
      "I'm not sure I agree..."
    ],
    "today": [
      "Really? Why...?",
      "What about you?",
      "Tell me more about that."
    ],
    "combo": "I see your point, but really, why did you decide that? What about you, tell me more!"
  },
  "challenge": "Record yourself keeping a conversation alive: ask three follow-up questions in a row about something someone told you."
};


/* ================= WORLD 6 - EXPRESS YOURSELF ================= */
/* ================= AULA 26 — Explain the Problem ================= */
const LESSON_B1_26 = {
  "ready": true,
  "label": "26",
  "title": "Explain the Problem",
  "eyebrow": "Level B1 — Lesson 26",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to explain a situation with more detail — giving context, not just the basic facts.",
  "scene": {
    "emoji": "🧩",
    "caption": "Ana is explaining a complicated situation with her landlord to Leo.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "So basically, the thing is, my landlord won't fix the heating.",
        "pt": "Então basicamente, o negócio é que meu senhorio não vai consertar o aquecimento."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What exactly happened?",
        "pt": "O que exatamente aconteceu?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Well, it broke down last month, and I've asked him three times since then.",
        "pt": "Bem, quebrou mês passado, e eu já pedi pra ele três vezes desde então."
      }
    ]
  },
  "vocab": [
    [
      "So basically, the thing is...",
      "sôu béisikali, dhe thing iz",
      "Então basicamente, o negócio é...",
      "🧩",
      true
    ],
    [
      "What exactly happened?",
      "uát ikzáktli rrápend",
      "O que exatamente aconteceu?",
      "❓",
      true
    ],
    [
      "To give you some context...",
      "tu guiv iú sâm kóntekst",
      "Pra te dar um contexto...",
      "📋",
      true
    ],
    [
      "The issue is that...",
      "dhi íchu iz dhat",
      "A questão é que...",
      "⚠️",
      true
    ],
    [
      "It's a bit more complicated than that.",
      "its a bit mór kómplikéitid dhen dhat",
      "É um pouco mais complicado que isso.",
      "🌀",
      true
    ],
    [
      "Let me explain from the beginning.",
      "let mí iksplêin from dhe biguínin",
      "Deixa eu explicar desde o começo.",
      "▶️",
      true
    ],
    [
      "Does that make sense?",
      "dâz dhat méik sens",
      "Isso faz sentido?",
      "🤔",
      true
    ],
    [
      "Now I understand.",
      "náu ái ânderstend",
      "Agora eu entendo.",
      "💡",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "So basically, the thing is... / Let me explain from the beginning.",
    "formula": "So basically, the thing is... / The issue is that... / Let me explain from the beginning (dar contexto e detalhar uma explicação)",
    "examples": [
      "So basically, the thing is, my landlord won't fix the heating.",
      "The issue is that it broke down last month.",
      "Let me explain from the beginning.",
      "It's a bit more complicated than that."
    ]
  },
  "simplify": [
    "So basically, the thing is...",
    "The issue is that...",
    "Let me explain from the beginning."
  ],
  "swap": {
    "base": "The issue is that ______.",
    "options": [
      "🔥 the heating won't work",
      "💸 I haven't been paid yet",
      "📦 my order never arrived",
      "🚪 the lock is broken",
      "📶 the internet keeps cutting off"
    ]
  },
  "activities": [
    [
      "Write a sentence introducing a complicated situation.",
      "So basically, the thing is, my landlord won't fix the heating.",
      "sôu béisikali, dhe thing iz, mái lándlord uôunt fiks dhe rrítin"
    ],
    [
      "Write a sentence giving background information.",
      "It broke down last month, and I've asked him three times.",
      "it brôuk dáun lást mânth, end áivi áskt rrim thrí táims"
    ],
    [
      "Write a sentence checking that someone understood.",
      "It's a bit more complicated than that. Does that make sense?",
      "its a bit mór kómplikéitid dhen dhat. dâz dhat méik sens"
    ]
  ],
  "dialogue": [
    [
      "A",
      "So basically, the thing is, my landlord won't fix the heating.",
      "sôu béisikali, dhe thing iz, mái lándlord uôunt fiks dhe rrítin",
      "Então basicamente, o negócio é que meu senhorio não vai consertar o aquecimento."
    ],
    [
      "L",
      "What exactly happened?",
      "uát ikzáktli rrápend",
      "O que exatamente aconteceu?"
    ],
    [
      "A",
      "Well, it broke down last month, and I've asked him three times since then.",
      "uél, it brôuk dáun lást mânth, end áivi áskt rrim thrí táims sins dhen",
      "Bem, quebrou mês passado, e eu já pedi pra ele três vezes desde então."
    ],
    [
      "L",
      "That's frustrating. Does that make sense to you why he hasn't done it?",
      "dhats frâstréitin. dâz dhat méik sens tu iú uái rri rrázent dân it",
      "Isso é frustrante. Faz sentido pra você por que ele ainda não fez?"
    ],
    [
      "A",
      "Not really, it's a bit more complicated than that — I think it's about money.",
      "nât ríli, its a bit mór kómplikéitid dhen dhat — ái think its abáut mâni",
      "Não muito, é um pouco mais complicado que isso — eu acho que é sobre dinheiro."
    ],
    [
      "L",
      "Now I understand. That does make things harder.",
      "náu ái ânderstend. dhat dâz méik things rrárder",
      "Agora eu entendo. Isso realmente torna as coisas mais difíceis."
    ]
  ],
  "connectors": [
    "What exactly happened?",
    "Does that make sense?",
    "Now I understand."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Really? Why...?",
      "What about you?",
      "Tell me more about that."
    ],
    "today": [
      "So basically, the thing is...",
      "The issue is that...",
      "Let me explain from the beginning."
    ],
    "combo": "Tell me more — so basically, the thing is, my landlord won't fix the heating, and the issue is it broke last month."
  },
  "challenge": "Record yourself explaining a complicated situation in detail: give context, explain the issue, and check if it makes sense."
};

/* ================= AULA 27 — Tell It Another Way ================= */
const LESSON_B1_27 = {
  "ready": true,
  "label": "27",
  "title": "Tell It Another Way",
  "eyebrow": "Level B1 — Lesson 27",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Sometimes you don't know a word — and that's okay. Let's learn how to describe something when you don't remember the exact word.",
  "scene": {
    "emoji": "🔄",
    "caption": "Leo can't remember the word for something and describes it instead.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I need... it's a thing you use to open bottles. What's it called?",
        "pt": "Eu preciso... é uma coisa que você usa pra abrir garrafas. Como se chama?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "A bottle opener?",
        "pt": "Um abridor de garrafas?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Yes, exactly! I always forget that word.",
        "pt": "Sim, exatamente! Eu sempre esqueço essa palavra."
      }
    ]
  },
  "vocab": [
    [
      "It's a thing you use to...",
      "its a thing iú iúz tu",
      "É uma coisa que você usa pra...",
      "🔧",
      true
    ],
    [
      "What's it called?",
      "uáts it kóld",
      "Como se chama?",
      "❓",
      true
    ],
    [
      "It's like a... but different.",
      "its láik a... bât díferent",
      "É tipo um(a)... mas diferente.",
      "🔄",
      true
    ],
    [
      "I don't know the word for it.",
      "ái dôunt nôu dhe uérd for it",
      "Eu não sei a palavra pra isso.",
      "🤷",
      true
    ],
    [
      "It's the place where you...",
      "its dhe pléis uér iú",
      "É o lugar onde você...",
      "📍",
      true
    ],
    [
      "It's kind of like...",
      "its káind âv láik",
      "É meio que como...",
      "💭",
      true
    ],
    [
      "Yes, exactly!",
      "iés, ikzáktli",
      "Sim, exatamente!",
      "✅",
      true
    ],
    [
      "I always forget that word.",
      "ái ólueiz forguét dhat uérd",
      "Eu sempre esqueço essa palavra.",
      "🧠",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "It's a thing you use to open bottles. / It's the place where you...",
    "formula": "It's a thing you use to + VERB / It's the place where you + VERB / It's kind of like... (reformular sem saber a palavra exata)",
    "examples": [
      "It's a thing you use to open bottles.",
      "It's the place where you wait for a bus.",
      "It's kind of like a bag, but smaller.",
      "I don't know the word for it, but it's like..."
    ]
  },
  "simplify": [
    "It's a thing you use to...",
    "It's the place where you...",
    "It's kind of like..."
  ],
  "swap": {
    "base": "It's a thing you use to ______.",
    "options": [
      "🍾 open bottles",
      "✂️ cut paper",
      "🔑 open doors",
      "🧹 clean the floor",
      "📎 hold papers together"
    ]
  },
  "activities": [
    [
      "Describe an object without saying its name.",
      "It's a thing you use to open bottles.",
      "its a thing iú iúz tu ôupn bótls"
    ],
    [
      "Describe a place without saying its name.",
      "It's the place where you wait for a bus.",
      "its dhe pléis uér iú uéit for a bâs"
    ],
    [
      "Write a sentence admitting you don't know a word, then describe it.",
      "I don't know the word for it, but it's kind of like a small bag.",
      "ái dôunt nôu dhe uérd for it, bât its káind âv láik a smól bág"
    ]
  ],
  "dialogue": [
    [
      "L",
      "I need... it's a thing you use to open bottles. What's it called?",
      "ái níd... its a thing iú iúz tu ôupn bótls. uáts it kóld",
      "Eu preciso... é uma coisa que você usa pra abrir garrafas. Como se chama?"
    ],
    [
      "A",
      "A bottle opener?",
      "a bótl ôupner",
      "Um abridor de garrafas?"
    ],
    [
      "L",
      "Yes, exactly! I always forget that word.",
      "iés, ikzáktli! ái ólueiz forguét dhat uérd",
      "Sim, exatamente! Eu sempre esqueço essa palavra."
    ],
    [
      "A",
      "It happens to everyone. Do you need anything else?",
      "it rrápenz tu évriuân. du iú níd énithin els",
      "Acontece com todo mundo. Você precisa de mais alguma coisa?"
    ],
    [
      "L",
      "Actually, yes — it's the place where you keep cold drinks. Not the fridge, the smaller one.",
      "áktiuali, iés — its dhe pléis uér iú kíp kôuld drinks. nât dhe frij, dhe smóler uân",
      "Na verdade, sim — é o lugar onde você guarda bebidas geladas. Não a geladeira, a menor."
    ],
    [
      "A",
      "Oh, a cooler! I know exactly what you mean now.",
      "ôu, a kúler! ái nôu ikzáktli uát iú mín náu",
      "Ah, uma cooler! Eu sei exatamente o que você quer dizer agora."
    ]
  ],
  "connectors": [
    "What's it called?",
    "Yes, exactly!",
    "I always forget that word."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "So basically, the thing is...",
      "The issue is that...",
      "Let me explain from the beginning."
    ],
    "today": [
      "It's a thing you use to...",
      "It's the place where you...",
      "It's kind of like..."
    ],
    "combo": "So basically, the thing is — it's a thing you use to open bottles, what's it called again?"
  },
  "challenge": "Record yourself describing three everyday objects without saying their names, using 'It's a thing you use to...'."
};

/* ================= AULA 28 — Tell Me More ================= */
const LESSON_B1_28 = {
  "ready": true,
  "label": "28",
  "title": "Tell Me More",
  "eyebrow": "Level B1 — Lesson 28",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Short answers are easy, but they stop the conversation. Let's learn how to turn short answers into developed ones.",
  "scene": {
    "emoji": "📢",
    "caption": "Ana gives a short answer, and Leo pushes her to say more.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I like Portugal.",
        "pt": "Eu gosto de Portugal."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Tell me more! Why do you like it?",
        "pt": "Me conta mais! Por que você gosta?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I like Portugal because the people are friendly and the food is amazing.",
        "pt": "Eu gosto de Portugal porque as pessoas são amigáveis e a comida é incrível."
      }
    ]
  },
  "vocab": [
    [
      "I like it because...",
      "ái láik it bikóz",
      "Eu gosto porque...",
      "❤️",
      true
    ],
    [
      "The main reason is...",
      "dhe méin rízon iz",
      "A principal razão é...",
      "🎯",
      true
    ],
    [
      "For example...",
      "for igzámpol",
      "Por exemplo...",
      "📌",
      true
    ],
    [
      "What I mean is...",
      "uát ái mín iz",
      "O que eu quero dizer é...",
      "🗣️",
      true
    ],
    [
      "Not only that, but also...",
      "nât ôunli dhat, bât ólso",
      "Não só isso, mas também...",
      "➕",
      true
    ],
    [
      "On top of that...",
      "on tóp âv dhat",
      "Além disso...",
      "➕",
      true
    ],
    [
      "That's a short answer, tell me more!",
      "dhats a chórt ánser, tel mí mór",
      "Essa é uma resposta curta, me conta mais!",
      "📢",
      true
    ],
    [
      "Now that makes more sense.",
      "náu dhat méiks mór sens",
      "Agora isso faz mais sentido.",
      "💡",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I like Portugal because the people are friendly. / The main reason is...",
    "formula": "because / the main reason is / for example / not only that, but also (desenvolver uma resposta curta)",
    "examples": [
      "I like Portugal because the people are friendly.",
      "The main reason is the food — it's amazing.",
      "Not only that, but the weather is great too.",
      "For example, everyone I've met has been really kind."
    ]
  },
  "simplify": [
    "...because + RAZÃO",
    "The main reason is...",
    "Not only that, but also..."
  ],
  "swap": {
    "base": "I like ______ because ______.",
    "options": [
      "🇵🇹 Portugal / the people are friendly",
      "☕ my job / it's flexible",
      "🏙️ this city / it's easy to get around",
      "🎬 that movie / the story was original",
      "🍝 this restaurant / the food is amazing"
    ]
  },
  "activities": [
    [
      "Turn a short answer into a developed one.",
      "I like Portugal because the people are friendly and the food is amazing.",
      "ái láik pórtiugal bikóz dhe pípol ár fréndli end dhe fúd iz améizin"
    ],
    [
      "Write a sentence giving the main reason for an opinion.",
      "The main reason I love it here is the weather.",
      "dhe méin rízon ái lâv it ríer iz dhe uéther"
    ],
    [
      "Write a sentence adding more information with 'not only that, but also'.",
      "Not only that, but the people are also really welcoming.",
      "nât ôunli dhat, bât dhe pípol ár ólso ríli uélkomin"
    ]
  ],
  "dialogue": [
    [
      "A",
      "I like Portugal.",
      "ái láik pórtiugal",
      "Eu gosto de Portugal."
    ],
    [
      "L",
      "Tell me more! Why do you like it?",
      "tel mí mór! uái du iú láik it",
      "Me conta mais! Por que você gosta?"
    ],
    [
      "A",
      "I like Portugal because the people are friendly and the food is amazing.",
      "ái láik pórtiugal bikóz dhe pípol ár fréndli end dhe fúd iz améizin",
      "Eu gosto de Portugal porque as pessoas são amigáveis e a comida é incrível."
    ],
    [
      "L",
      "For example?",
      "for igzámpol",
      "Por exemplo?"
    ],
    [
      "A",
      "For example, everyone I've met has been really kind and helpful.",
      "for igzámpol, évriuân áivi mét rrez bín ríli káind end rrélpful",
      "Por exemplo, todo mundo que eu conheci foi bem gentil e prestativo."
    ],
    [
      "L",
      "Not only that, but the weather is great too. Now that makes more sense!",
      "nât ôunli dhat, bât dhe uéther iz gréit tú. náu dhat méiks mór sens",
      "Não só isso, mas o clima também é ótimo. Agora isso faz mais sentido!"
    ]
  ],
  "connectors": [
    "Tell me more!",
    "For example...",
    "Now that makes more sense."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "It's a thing you use to...",
      "It's the place where you...",
      "It's kind of like..."
    ],
    "today": [
      "...because + RAZÃO",
      "The main reason is...",
      "Not only that, but also..."
    ],
    "combo": "It's kind of like this — I like Portugal because the people are friendly, and not only that, but the food is amazing too."
  },
  "challenge": "Record yourself turning three short answers ('I like it', 'It was good', 'I don't know') into fully developed ones."
};

/* ================= AULA 29 — No Script ================= */
const LESSON_B1_29 = {
  "ready": true,
  "label": "29",
  "title": "No Script",
  "eyebrow": "Level B1 — Lesson 29",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Now it's time for a real conversation with little help. The character will ask, react, and ask new questions — you're on your own.",
  "scene": {
    "emoji": "🎤",
    "caption": "Ana starts a conversation with Leo with very little guidance from here on.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Hey, long time no see! What's new with you?",
        "pt": "Ei, quanto tempo! O que há de novo com você?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Not much, same old routine. What about you?",
        "pt": "Não muita coisa, a mesma rotina de sempre. E você?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Actually, quite a lot has changed for me lately.",
        "pt": "Na verdade, muita coisa mudou pra mim ultimamente."
      }
    ]
  },
  "vocab": [
    [
      "Long time no see!",
      "lóng táim nôu sí",
      "Quanto tempo!",
      "👋",
      true
    ],
    [
      "What's new with you?",
      "uáts niú uíth iú",
      "O que há de novo com você?",
      "❓",
      true
    ],
    [
      "Same old routine.",
      "séim ôuld rutín",
      "A mesma rotina de sempre.",
      "🔁",
      true
    ],
    [
      "Quite a lot has changed.",
      "kuáit a lât rrez chêinjd",
      "Muita coisa mudou.",
      "🔄",
      true
    ],
    [
      "Catch me up!",
      "kách mí âp",
      "Me atualiza!",
      "📣",
      true
    ],
    [
      "Where do I even start?",
      "uér du ái ívn start",
      "Por onde eu nem começo?",
      "🤯",
      true
    ],
    [
      "It's a long story.",
      "its a lóng stóri",
      "É uma longa história.",
      "📖",
      true
    ],
    [
      "I've got time, go ahead.",
      "áivi gât táim, gôu arréd",
      "Eu tenho tempo, pode falar.",
      "🕓",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Long time no see! / Quite a lot has changed for me lately.",
    "formula": "Combinar frases naturais de conversa livre: Long time no see / Catch me up / Where do I even start? (conversa com pouco roteiro)",
    "examples": [
      "Long time no see! What's new with you?",
      "Quite a lot has changed for me lately.",
      "Where do I even start? It's a long story.",
      "I've got time, go ahead!"
    ]
  },
  "simplify": [
    "Long time no see!",
    "What's new with you?",
    "Catch me up!"
  ],
  "swap": {
    "base": "What's new with ______?",
    "options": [
      "🙋 you",
      "👨‍👩‍👧 your family",
      "💼 your job",
      "🏠 your neighborhood",
      "🎓 your studies"
    ]
  },
  "activities": [
    [
      "Write a natural conversation opener with someone you haven't seen in a while.",
      "Long time no see! What's new with you?",
      "lóng táim nôu sí! uáts niú uíth iú"
    ],
    [
      "Write a response admitting a lot has changed.",
      "Quite a lot has changed for me lately, actually.",
      "kuáit a lât rrez chêinjd for mí léitli, áktiuali"
    ],
    [
      "Write a sentence asking someone to update you on their life.",
      "Catch me up! Where do I even start?",
      "kách mí âp! uér du ái ívn start"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Hey, long time no see! What's new with you?",
      "rrêi, lóng táim nôu sí! uáts niú uíth iú",
      "Ei, quanto tempo! O que há de novo com você?"
    ],
    [
      "L",
      "Not much, same old routine. What about you?",
      "nât mâtch, séim ôuld rutín. uát abáut iú",
      "Não muita coisa, a mesma rotina de sempre. E você?"
    ],
    [
      "A",
      "Actually, quite a lot has changed for me lately.",
      "áktiuali, kuáit a lât rrez chêinjd for mí léitli",
      "Na verdade, muita coisa mudou pra mim ultimamente."
    ],
    [
      "L",
      "Really? Catch me up, where do I even start listening?",
      "ríli? kách mí âp, uér du ái ívn lísen",
      "Sério? Me atualiza, por onde eu nem começo a ouvir?"
    ],
    [
      "A",
      "It's a long story, but the short version is: I changed jobs.",
      "its a lóng stóri, bât dhe chort vérjon iz: ái chêinjd jóbs",
      "É uma longa história, mas a versão curta é: eu troquei de emprego."
    ],
    [
      "L",
      "Wow! I've got time, go ahead, tell me everything.",
      "uáu! áivi gât táim, gôu arréd, tel mí évrithin",
      "Nossa! Eu tenho tempo, pode falar, me conta tudo."
    ]
  ],
  "connectors": [
    "Long time no see!",
    "Catch me up!",
    "It's a long story."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "...because + RAZÃO",
      "The main reason is...",
      "Not only that, but also..."
    ],
    "today": [
      "Long time no see!",
      "What's new with you?",
      "Catch me up!"
    ],
    "combo": "Tell me more — long time no see! What's new with you? Quite a lot has changed for me lately."
  },
  "challenge": "Mission: have a free conversation with a friend you haven't seen in a while, with as little help as possible. Ask what's new, and share what's changed for you."
};

/* ================= AULA 30 — 🌎 B1 SPEAK-TO-LIVE CHALLENGE ================= */
const LESSON_B1_30 = {
  "ready": true,
  "label": "30",
  "title": "🌎 B1 SPEAK-TO-LIVE CHALLENGE",
  "eyebrow": "Level B1 — Lesson 30",
  "level": "B1",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "This is it — the final B1 challenge. One big situation that mixes work, home, travel, social life, past, future and opinions. You need to handle it all by speaking.",
  "scene": {
    "emoji": "🌎",
    "caption": "You're at a friend's dinner party. Over the course of the evening, you talk about your week, a recent trip, a problem you had, and your plans for the future.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Host",
        "en": "So, how has your week been? Catch me up!",
        "pt": "Então, como foi sua semana? Me atualiza!"
      },
      {
        "who": "L",
        "speaker": "You",
        "en": "It's been a lot, honestly. Something went wrong at work, but I think we fixed it.",
        "pt": "Foi bastante coisa, sinceramente. Algo deu errado no trabalho, mas eu acho que a gente consertou."
      },
      {
        "who": "A",
        "speaker": "Host",
        "en": "Oh no! Tell me more. And didn't you just get back from a trip too?",
        "pt": "Ah não! Me conta mais. E você não acabou de voltar de uma viagem também?"
      }
    ]
  },
  "vocab": [
    [
      "How has your week been?",
      "ráu rrez iór uík bín",
      "Como foi sua semana?",
      "📅",
      true
    ],
    [
      "Something went wrong, but we fixed it.",
      "sâmthin uent róng, bât uí fikst it",
      "Algo deu errado, mas a gente consertou.",
      "🔧",
      true
    ],
    [
      "I just got back from a trip.",
      "ái jâst gât bák from a trip",
      "Eu acabei de voltar de uma viagem.",
      "🧳",
      true
    ],
    [
      "In my opinion, it was worth it.",
      "in mái opínion, it uóz uérth it",
      "Na minha opinião, valeu a pena.",
      "💭",
      true
    ],
    [
      "I'm planning to...",
      "áim plánin tu",
      "Eu estou planejando...",
      "🔮",
      true
    ],
    [
      "Tell me more about that.",
      "tel mí mór abáut dhat",
      "Me conta mais sobre isso.",
      "👂",
      true
    ],
    [
      "I see your point, but...",
      "ái sí iór póint, bât",
      "Eu entendo seu ponto de vista, mas...",
      "🗣️",
      true
    ],
    [
      "It's been quite a week!",
      "its bín kuáit a uík",
      "Foi bem uma semana!",
      "😅",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Combinar tudo: past + present perfect + future + opinions numa única conversa longa.",
    "formula": "Misturar Past Simple (o que aconteceu), Present Perfect (experiências recentes), going to/will (planos) e I think/In my opinion (opiniões) numa conversa natural",
    "examples": [
      "Something went wrong at work, but we fixed it.",
      "I just got back from a trip, and it was amazing.",
      "In my opinion, it was totally worth it.",
      "I'm planning to travel again next year."
    ]
  },
  "simplify": [
    "Past: something happened...",
    "Present Perfect: I've just...",
    "Future/Opinion: I'm planning to... / I think..."
  ],
  "swap": {
    "base": "It's been quite a week — ______, and ______.",
    "options": [
      "🔧 something went wrong at work / we fixed it",
      "🧳 I just got back from a trip / it was amazing",
      "🏠 I had a problem at home / it's sorted now",
      "👥 I met someone new / we have a lot in common",
      "🔮 I'm planning something big / I can't wait"
    ]
  },
  "activities": [
    [
      "Write a sentence combining a past problem and how it was solved.",
      "Something went wrong at work, but I think we should redo it, and we fixed it.",
      "sâmthin uent róng at uérk, bât ái think uí chud rirídu it, end uí fikst it"
    ],
    [
      "Write a sentence about a recent experience and your opinion of it.",
      "I just got back from a trip, and in my opinion, it was totally worth it.",
      "ái jâst gât bák from a trip, end in mái opínion, it uóz tôutali uérth it"
    ],
    [
      "Write a sentence about a future plan.",
      "I'm planning to travel again next year, if everything goes well.",
      "áim plánin tu trável agén nekst íer, if évrithin gôuz uél"
    ]
  ],
  "dialogue": [
    [
      "A",
      "So, how has your week been? Catch me up!",
      "sôu, ráu rrez iór uík bín? kách mí âp",
      "Então, como foi sua semana? Me atualiza!"
    ],
    [
      "L",
      "It's been a lot, honestly. Something went wrong at work, but I think we fixed it.",
      "its bín a lât, ónestli. sâmthin uent róng at uérk, bât ái think uí fikst it",
      "Foi bastante coisa, sinceramente. Algo deu errado no trabalho, mas eu acho que a gente consertou."
    ],
    [
      "A",
      "Oh no! Tell me more. And didn't you just get back from a trip too?",
      "ôu nôu! tel mí mór. end dídnt iú jâst guét bák from a trip tú",
      "Ah não! Me conta mais. E você não acabou de voltar de uma viagem também?"
    ],
    [
      "L",
      "Yes! I just got back, and in my opinion, it was totally worth it, even with a few problems.",
      "iés! ái jâst gât bák, end in mái opínion, it uóz tôutali uérth it, ívn uíth a fiú próblems",
      "Sim! Eu acabei de voltar, e na minha opinião, valeu totalmente a pena, mesmo com alguns problemas."
    ],
    [
      "A",
      "I see your point. So, what's next for you?",
      "ái sí iór póint. sôu, uáts nekst for iú",
      "Eu entendo seu ponto de vista. Então, o que vem a seguir pra você?"
    ],
    [
      "L",
      "I'm planning to travel again next year — it's been quite a week, but I can't wait!",
      "áim plánin tu trável agén nekst íer — its bín kuáit a uík, bât ái kant uéit",
      "Eu estou planejando viajar de novo ano que vem — foi bem uma semana, mas eu mal posso esperar!"
    ]
  ],
  "connectors": [
    "Catch me up!",
    "Tell me more.",
    "It's been quite a week!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Long time no see!",
      "What's new with you?",
      "Catch me up!"
    ],
    "today": [
      "All 29 previous B1 lessons combined"
    ],
    "combo": "It's been quite a week — something went wrong, but I fixed it, I just got back from a trip, and I'm planning the next one already!"
  },
  "challenge": "🌎 FINAL MISSION: have one long conversation that combines work, home, travel, social life, past, future and opinions — all in English, with no script."
};

const LESSONS_B1_DEFINED = [
  LESSON_B1_01, LESSON_B1_02, LESSON_B1_03, LESSON_B1_04, LESSON_B1_05, LESSON_B1_06, LESSON_B1_07, LESSON_B1_08, LESSON_B1_09, LESSON_B1_10, LESSON_B1_11, LESSON_B1_12, LESSON_B1_13, LESSON_B1_14, LESSON_B1_15, LESSON_B1_16, LESSON_B1_17, LESSON_B1_18, LESSON_B1_19, LESSON_B1_20, LESSON_B1_21, LESSON_B1_22, LESSON_B1_23, LESSON_B1_24, LESSON_B1_25, LESSON_B1_26, LESSON_B1_27, LESSON_B1_28, LESSON_B1_29, LESSON_B1_30
];

const lessonsB1 = LESSON_TITLES_B1.map((title, i) => {
  if(LESSONS_B1_DEFINED[i]) return LESSONS_B1_DEFINED[i];
  const n = String(i + 1).padStart(2, '0');
  return {
    ready: false,
    label: n,
    title: title,
    eyebrow: `Level B1 — Lesson ${n}`,
    level: "B1",
    immersive: true,
    intro: "This lesson is being prepared and will be available soon."
  };
});
