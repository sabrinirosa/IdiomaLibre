/* ============================================================
   IDIOLIBRE — js/lessons-data-b2.js
   Banco de dados das aulas do nivel B2 — 30 aulas em 6 mundos:
   Real Life, Work, Conversation, Ideas & Opinions,
   Life Outside the Classroom, Stories & Natural English.

   B2 nao e "30 aulas de gramatica" - e uma experiencia de
   comunicacao. Cada aula tem uma missao comunicativa: o aluno
   reage, explica, ouve uma objecao, defende sua ideia de novo e
   continua a conversa. A gramatica entra pela porta dos fundos
   (conditionals, passive, reported speech, relative clauses,
   linking words) porque a situacao pede, nunca como titulo de
   aula.

   100% imersivo, mesma estrutura de dados de js/lessons-data.js,
   js/lessons-data-a2.js e js/lessons-data-b1.js. Depende de
   js/app.js para renderizar (?nivel=b2).
   ============================================================ */

const LESSON_TITLES_B2 = [
  "A Problem to Solve",
  "What Would You Do?",
  "Making the Right Choice",
  "Dealing With Difficult Situations",
  "Real-Life Challenge",
  "At Work",
  "Meetings",
  "Explaining Your Ideas",
  "Negotiating",
  "Job & Career Challenge",
  "Keep Talking",
  "Change the Topic",
  "Agree or Disagree",
  "What Do You Mean?",
  "Conversation Challenge",
  "What Do You Think?",
  "Give Me a Reason",
  "Two Sides of the Story",
  "Let's Discuss It",
  "Speak Your Mind",
  "Travel Problems",
  "Living Abroad",
  "Money & Services",
  "Social Life",
  "Unexpected Situations",
  "Tell Me What Happened",
  "Then What Happened?",
  "Natural English",
  "Say It Another Way",
  "🔓 B2 SPEAK-TO-LIVE CHALLENGE"
];

const LESSON_EMOJIS_B2 = ["🧩", "🎭", "🎯", "😤", "🌎", "💼", "🗣️", "💡", "🤝", "🎓", "🗣️", "🔀", "⚖️", "❓", "🎤", "🧠", "🔗", "🔄", "💬", "🎙️", "✈️", "🌎", "💰", "👥", "🌀", "🎬", "⏭️", "🗣️", "🔁", "🏆"];


/* ================= WORLD 1 | REAL LIFE ================= */
/* ================= AULA 01 — A Problem to Solve ================= */
const LESSON_B2_01 = {
  "ready": true,
  "label": "01",
  "title": "A Problem to Solve",
  "eyebrow": "Level B2 — Lesson 01",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "At B2, you don't just report a problem — you explain it, weigh options, and propose a solution. Let's start there.",
  "scene": {
    "emoji": "🧩",
    "caption": "Leo explains a work problem to Ana and they think through what should be done.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "We've got a serious problem with the schedule.",
        "pt": "A gente tem um problema sério com o cronograma."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Let's break it down — what exactly went wrong?",
        "pt": "Vamos detalhar — o que exatamente deu errado?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "The supplier missed the deadline, and now everything's delayed.",
        "pt": "O fornecedor perdeu o prazo, e agora tudo está atrasado."
      }
    ]
  },
  "vocab": [
    [
      "Let's break it down.",
      "lets bréik it dáun",
      "Vamos detalhar isso.",
      "🔍",
      true
    ],
    [
      "The main issue is...",
      "dhe méin íchu iz",
      "O problema principal é...",
      "⚠️",
      true
    ],
    [
      "We should weigh our options.",
      "uí chud uéi áur ópchns",
      "Deveríamos pesar nossas opções.",
      "⚖️",
      true
    ],
    [
      "That could solve it, but it's not ideal.",
      "dhat kud sólv it, bât its not áidíal",
      "Isso poderia resolver, mas não é ideal.",
      "🤏",
      true
    ],
    [
      "Let's tackle this step by step.",
      "lets tákol dhis step bái step",
      "Vamos atacar isso passo a passo.",
      "🪜",
      true
    ],
    [
      "I'd rather find a long-term fix.",
      "áid ráther fáind a long-térm fiks",
      "Eu prefiro encontrar uma solução de longo prazo.",
      "🔧",
      true
    ],
    [
      "Let's just get it sorted.",
      "lets jâst guét it sórtid",
      "Vamos só resolver isso.",
      "✅",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "We should weigh our options before deciding.",
    "formula": "should + VERB (suggestion) / could + VERB (possibility) — used together to explore solutions",
    "examples": [
      "We should weigh our options.",
      "We could ask for an extension.",
      "We should tackle this step by step.",
      "This could solve it, but it's not ideal."
    ]
  },
  "simplify": [
    "Let's break it down: the main issue is + THING",
    "We should + VERB",
    "This could + VERB, but it's not ideal"
  ],
  "swap": {
    "base": "We should ______, but we could also ______.",
    "options": [
      "ask for more time / find another supplier",
      "escalate this / handle it ourselves",
      "wait and see / act now"
    ]
  },
  "activities": [
    [
      "Write a sentence explaining the main issue in a problem you've faced.",
      "The main issue is that the supplier missed the deadline.",
      "dhe méin íchu iz dhat dhe saupláier mist dhe dédláin"
    ],
    [
      "Write a sentence proposing a solution with 'should'.",
      "We should weigh our options before deciding anything.",
      "uí chud uéi áur ópchns bifór disáidin énithing"
    ],
    [
      "Write a sentence about a solution that works but isn't ideal.",
      "This could solve it, but it's not an ideal long-term fix.",
      "dhis kud sólv it, bât its not en áidíal long-térm fiks"
    ]
  ],
  "dialogue": [
    [
      "L",
      "We've got a serious problem with the schedule.",
      "uívi got a síriös próblem uíth dhe skédiul",
      "A gente tem um problema sério com o cronograma."
    ],
    [
      "A",
      "Let's break it down — what exactly went wrong?",
      "lets bréik it dáun — uát ikzáktli uent róng",
      "Vamos detalhar — o que exatamente deu errado?"
    ],
    [
      "L",
      "The supplier missed the deadline, and now everything's delayed.",
      "dhe saupláier mist dhe dédláin, end náu évrithingz diléid",
      "O fornecedor perdeu o prazo, e agora tudo está atrasado."
    ],
    [
      "A",
      "We should weigh our options — could we find another supplier?",
      "uí chud uéi áur ópchns — kud uí fáind anâther saupláier",
      "Deveríamos pesar nossas opções — poderíamos achar outro fornecedor?"
    ],
    [
      "L",
      "That could work, but I'd rather find a long-term fix.",
      "dhat kud uórk, bât áid ráther fáind a long-térm fiks",
      "Isso poderia funcionar, mas eu prefiro achar uma solução de longo prazo."
    ],
    [
      "A",
      "Agreed. Let's tackle this step by step.",
      "agríd. lets tákol dhis step bái step",
      "Concordo. Vamos atacar isso passo a passo."
    ]
  ],
  "connectors": [
    "Let's break it down.",
    "That could work, but...",
    "Agreed."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 problems & solutions"
    ],
    "today": [
      "We should + VERB",
      "This could + VERB, but...",
      "Let's weigh our options"
    ],
    "combo": "We've got a problem — we should weigh our options, even if the fix isn't ideal."
  },
  "challenge": "Explain a real or made-up problem in detail, and propose two possible solutions, weighing which is better."
};

/* ================= AULA 02 — What Would You Do? ================= */
const LESSON_B2_02 = {
  "ready": true,
  "label": "02",
  "title": "What Would You Do?",
  "eyebrow": "Level B2 — Lesson 02",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's explore hypothetical situations and how you'd handle them — a key B2 skill.",
  "scene": {
    "emoji": "🎭",
    "caption": "Ana asks Leo a hypothetical question about a difficult decision.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "What would you do if you lost your job tomorrow?",
        "pt": "O que você faria se perdesse seu emprego amanhã?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Honestly, I'd probably take some time before jumping into anything.",
        "pt": "Sinceramente, eu provavelmente esperaria um tempo antes de partir pra qualquer coisa."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "That's fair. I think I'd panic a little at first.",
        "pt": "Isso é justo. Eu acho que eu entraria em pânico um pouco no início."
      }
    ]
  },
  "vocab": [
    [
      "What would you do if...?",
      "uát uúd iú dú if",
      "O que você faria se...?",
      "🤔",
      true
    ],
    [
      "If I lost my job, I'd look for another one.",
      "if ái lost mái job, áid luk for anâther uán",
      "Se eu perdesse meu emprego, eu procuraria outro.",
      "💼",
      true
    ],
    [
      "I'd probably take some time first.",
      "áid próbabli téik sâm táim férst",
      "Eu provavelmente esperaria um tempo primeiro.",
      "⏳",
      true
    ],
    [
      "I wouldn't panic right away.",
      "ái uúdnt pánik ráit auéi",
      "Eu não entraria em pânico imediatamente.",
      "😌",
      true
    ],
    [
      "It would depend on the situation.",
      "it uúd dipénd on dhe sitiuéichn",
      "Dependeria da situação.",
      "🔀",
      true
    ],
    [
      "I'd probably ask for advice.",
      "áid próbabli esk for advái​s",
      "Eu provavelmente pediria um conselho.",
      "🙋",
      true
    ],
    [
      "That's a tough one!",
      "dhats a tâf uán",
      "Essa é difícil!",
      "😅",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "If I lost my job, I'd look for another one.",
    "formula": "Second Conditional: If + Past Simple, would + VERB (hypothetical, unreal situations)",
    "examples": [
      "If I lost my job, I'd look for another one.",
      "If I had more time, I'd travel more.",
      "If I were you, I'd ask for help.",
      "What would you do if you won the lottery?"
    ]
  },
  "simplify": [
    "What would you do if + PAST SIMPLE...?",
    "If I + PAST SIMPLE, I'd + VERB",
    "It would depend on + THING"
  ],
  "swap": {
    "base": "If I ______, I'd ______.",
    "options": [
      "lost my job / look for another one",
      "had more time / travel more",
      "won the lottery / help my family"
    ]
  },
  "activities": [
    [
      "Write a sentence answering a hypothetical 'what would you do' question.",
      "If I lost my job, I'd probably take some time before deciding what's next.",
      "if ái lost mái job, áid próbabli téik sâm táim bifór disáidin uáts nekst"
    ],
    [
      "Write a sentence about something that would depend on the situation.",
      "It would depend a lot on how much savings I had.",
      "it uúd dipénd a lot on ráu mâtch séivings ái rred"
    ],
    [
      "Write your own hypothetical question for someone else.",
      "What would you do if you had to move to a new country tomorrow?",
      "uát uúd iú dú if iú red tu múv tu a niú kântri tumórou"
    ]
  ],
  "dialogue": [
    [
      "A",
      "What would you do if you lost your job tomorrow?",
      "uát uúd iú dú if iú lost iór job tumórou",
      "O que você faria se perdesse seu emprego amanhã?"
    ],
    [
      "L",
      "Honestly, I'd probably take some time before jumping into anything.",
      "ónestli, áid próbabli téik sâm táim bifór jâmpin íntu énithing",
      "Sinceramente, eu provavelmente esperaria um tempo antes de partir pra qualquer coisa."
    ],
    [
      "A",
      "That's fair. I think I'd panic a little at first.",
      "dhats fér. ái thingk áid pánik a lítl at férst",
      "Isso é justo. Eu acho que eu entraria em pânico um pouco no início."
    ],
    [
      "L",
      "It would depend on the situation, I guess.",
      "it uúd dipénd on dhe sitiuéichn, ái gués",
      "Dependeria da situação, eu acho."
    ],
    [
      "A",
      "True. I'd probably ask for advice before deciding anything big.",
      "trú. áid próbabli esk for advái​s bifór disáidin énithing big",
      "Verdade. Eu provavelmente pediria um conselho antes de decidir algo grande."
    ],
    [
      "L",
      "That's a smart approach, honestly.",
      "dhats a smart apróuch, ónestli",
      "Essa é uma abordagem inteligente, sinceramente."
    ]
  ],
  "connectors": [
    "That's fair.",
    "True.",
    "That's a smart approach."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 plans & future, B1 decisions"
    ],
    "today": [
      "What would you do if...?",
      "If I..., I'd...",
      "It would depend on..."
    ],
    "combo": "If I lost my job, I'd probably take some time before deciding what's next — it would depend on the situation."
  },
  "challenge": "Answer a hypothetical 'what would you do if...' question about something real to you, using the second conditional."
};

/* ================= AULA 03 — Making the Right Choice ================= */
const LESSON_B2_03 = {
  "ready": true,
  "label": "03",
  "title": "Making the Right Choice",
  "eyebrow": "Level B2 — Lesson 03",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's compare options carefully and justify a choice — a common B2 skill in both work and daily life.",
  "scene": {
    "emoji": "🎯",
    "caption": "Leo and Ana are comparing two options for a project and need to decide together.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Option A is faster, but Option B is more reliable.",
        "pt": "A opção A é mais rápida, mas a opção B é mais confiável."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I'd rather go with something reliable, even if it takes longer.",
        "pt": "Eu prefiro algo confiável, mesmo que demore mais."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "That makes sense, especially given the deadline pressure.",
        "pt": "Isso faz sentido, especialmente considerando a pressão do prazo."
      }
    ]
  },
  "vocab": [
    [
      "It's not as reliable as the other option.",
      "its not az riláiabl az dhi âther ópchn",
      "Não é tão confiável quanto a outra opção.",
      "⚖️",
      true
    ],
    [
      "Given the circumstances, this makes more sense.",
      "gívn dhe sérkamstansiz, dhis méiks mór sens",
      "Dadas as circunstâncias, isso faz mais sentido.",
      "🧭",
      true
    ],
    [
      "Even if it takes longer, it's worth it.",
      "ívn if it téiks lónger, its uérth it",
      "Mesmo que demore mais, vale a pena.",
      "⏳",
      true
    ],
    [
      "All things considered, I'd choose this one.",
      "ól things konsíderd, áid chúz dhis uán",
      "Considerando tudo, eu escolheria essa.",
      "🧮",
      true
    ],
    [
      "It comes down to priorities.",
      "it kâms dáun tu praióritiz",
      "Se resume a prioridades.",
      "🎯",
      true
    ],
    [
      "That's the deciding factor for me.",
      "dhats dhe disáidin fáktor for mí",
      "Esse é o fator decisivo pra mim.",
      "🔑",
      true
    ],
    [
      "Good call.",
      "gud kól",
      "Boa decisão.",
      "👍",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Given the circumstances, this makes more sense.",
    "formula": "Given + NOUN/CLAUSE (introducing the reason behind a decision — formal but common)",
    "examples": [
      "Given the circumstances, this makes more sense.",
      "Given the deadline, we should act fast.",
      "Given what happened, I understand your choice.",
      "Given the budget, this is the better option."
    ]
  },
  "simplify": [
    "It's not as + ADJ + as + THING",
    "Given + THING, this makes more sense",
    "All things considered, I'd + VERB"
  ],
  "swap": {
    "base": "All things considered, I'd choose ______.",
    "options": [
      "the reliable option",
      "the faster one",
      "the cheaper plan"
    ]
  },
  "activities": [
    [
      "Write a sentence comparing two options using 'not as...as'.",
      "It's not as fast as the other option, but it's more reliable.",
      "its not az fast az dhi âther ópchn, bât its mór riláiabl"
    ],
    [
      "Write a sentence justifying a choice with 'given'.",
      "Given the deadline pressure, I'd choose the faster option.",
      "gívn dhe dédláin préchur, áid chúz dhe fáster ópchn"
    ],
    [
      "Write a sentence about what the deciding factor was for you.",
      "Reliability was the deciding factor for me.",
      "riláiabíliti uóz dhe disáidin fáktor for mí"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Option A is faster, but Option B is more reliable.",
      "ópchn éi iz fáster, bât ópchn bí iz mór riláiabl",
      "A opção A é mais rápida, mas a opção B é mais confiável."
    ],
    [
      "A",
      "I'd rather go with something reliable, even if it takes longer.",
      "áid ráther gôu uíth sâmthin riláiabl, ívn if it téiks lónger",
      "Eu prefiro algo confiável, mesmo que demore mais."
    ],
    [
      "L",
      "That makes sense, especially given the deadline pressure.",
      "dhat méiks sens, ispéchali gívn dhe dédláin préchur",
      "Isso faz sentido, especialmente considerando a pressão do prazo."
    ],
    [
      "A",
      "Exactly. It really comes down to priorities.",
      "ikzáktli. it ríli kâms dáun tu praióritiz",
      "Exatamente. Realmente se resume a prioridades."
    ],
    [
      "L",
      "Reliability is the deciding factor for me, honestly.",
      "riláiabíliti iz dhe disáidin fáktor for mí, ónestli",
      "Confiabilidade é o fator decisivo pra mim, sinceramente."
    ],
    [
      "A",
      "Good call. Let's go with Option B, then.",
      "gud kól. lets gôu uíth ópchn bí, dhen",
      "Boa decisão. Vamos com a opção B, então."
    ]
  ],
  "connectors": [
    "That makes sense.",
    "Exactly.",
    "Good call."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 making decisions"
    ],
    "today": [
      "Not as... as...",
      "Given the..., this makes more sense",
      "All things considered, I'd..."
    ],
    "combo": "It's not as fast, but given the deadline pressure, all things considered, I'd choose the reliable option."
  },
  "challenge": "Compare two real or made-up options and justify your final choice, using 'given' and 'all things considered'."
};

/* ================= AULA 04 — Dealing With Difficult Situations ================= */
const LESSON_B2_04 = {
  "ready": true,
  "label": "04",
  "title": "Dealing With Difficult Situations",
  "eyebrow": "Level B2 — Lesson 04",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise staying calm and professional when a situation gets tense — complaints, conflicts, and pushback.",
  "scene": {
    "emoji": "😤",
    "caption": "A customer is upset, and Ana needs to handle the situation calmly.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I completely understand your frustration.",
        "pt": "Eu entendo completamente sua frustração."
      },
      {
        "who": "L",
        "speaker": "Leo (customer)",
        "en": "This is the third time this has happened!",
        "pt": "Essa é a terceira vez que isso acontece!"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "You're absolutely right, and I want to make this right.",
        "pt": "Você está absolutamente certo, e eu quero consertar isso."
      }
    ]
  },
  "vocab": [
    [
      "I completely understand your frustration.",
      "ái kompliitli anderstend iór frastréichn",
      "Eu entendo completamente sua frustração.",
      "🤝",
      true
    ],
    [
      "I want to make this right.",
      "ái uánt tu méik dhis ráit",
      "Eu quero consertar isso.",
      "🔧",
      true
    ],
    [
      "Although this is frustrating, we'll sort it out.",
      "óldhôu dhis iz frastréitin, uíu sórt it áut",
      "Embora isso seja frustrante, vamos resolver.",
      "🛠️",
      true
    ],
    [
      "I must insist we find a solution today.",
      "ái mâst insíst uí fáind a solúchn tudéi",
      "Eu preciso insistir que a gente encontre uma solução hoje.",
      "📌",
      true
    ],
    [
      "I hear you, and that's not acceptable.",
      "ái rrír iú, end dhats not akséptabl",
      "Eu te escuto, e isso não é aceitável.",
      "👂",
      true
    ],
    [
      "Let's find a way forward together.",
      "lets fáind a uéi fórwerd tugédher",
      "Vamos encontrar um caminho a seguir juntos.",
      "🚶",
      true
    ],
    [
      "Thank you for your patience.",
      "thenk iú for iór péichens",
      "Obrigado pela sua paciência.",
      "🙏",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Although this is frustrating, we'll sort it out.",
    "formula": "Although + CLAUSE, + CLAUSE (contrast, more formal than 'but')",
    "examples": [
      "Although this is frustrating, we'll sort it out.",
      "Although I understand, I must insist.",
      "Although it's difficult, there's a solution.",
      "Although we're busy, this is a priority."
    ]
  },
  "simplify": [
    "I completely understand + THING",
    "Although + CLAUSE, + CLAUSE",
    "I must insist + CLAUSE"
  ],
  "swap": {
    "base": "Although this is ______, we'll ______.",
    "options": [
      "frustrating / sort it out",
      "difficult / find a way",
      "unusual / handle it properly"
    ]
  },
  "activities": [
    [
      "Write a sentence acknowledging someone's frustration.",
      "I completely understand your frustration, and I'm sorry.",
      "ái kompliitli anderstend iór frastréichn, end áim sóri"
    ],
    [
      "Write a sentence using 'although' to soften a firm request.",
      "Although this is unusual, I must insist we resolve it today.",
      "óldhôu dhis iz anúchuäl, ái mâst insíst uí risólv it tudéi"
    ],
    [
      "Write a sentence about finding a way forward together.",
      "Let's find a way forward together, I want to make this right.",
      "lets fáind a uéi fórwerd tugédher, ái uánt tu méik dhis ráit"
    ]
  ],
  "dialogue": [
    [
      "L",
      "This is the third time this has happened!",
      "dhis iz dhe thérd táim dhis rrez rrépend",
      "Essa é a terceira vez que isso acontece!"
    ],
    [
      "A",
      "I completely understand your frustration.",
      "ái kompliitli anderstend iór frastréichn",
      "Eu entendo completamente sua frustração."
    ],
    [
      "L",
      "It's just not acceptable at this point.",
      "its jâst not akséptabl at dhis póint",
      "Simplesmente não é aceitável a essa altura."
    ],
    [
      "A",
      "You're absolutely right. Although this is frustrating, we'll sort it out.",
      "iór ábsalútli ráit. óldhôu dhis iz frastréitin, uíu sórt it áut",
      "Você está absolutamente certo. Embora isso seja frustrante, vamos resolver."
    ],
    [
      "L",
      "I appreciate that. What can you actually do about it?",
      "ái aprísiéit dhat. uát ken iú ákchuali dú abáut it",
      "Eu agradeço isso. O que você realmente pode fazer a respeito?"
    ],
    [
      "A",
      "Let's find a way forward together, starting right now.",
      "lets fáind a uéi fórwerd tugédher, stártin ráit náu",
      "Vamos encontrar um caminho a seguir juntos, começando agora mesmo."
    ]
  ],
  "connectors": [
    "I completely understand.",
    "You're absolutely right.",
    "I appreciate that."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B2 lesson 01 problem-solving"
    ],
    "today": [
      "I completely understand...",
      "Although this is..., we'll...",
      "Let's find a way forward"
    ],
    "combo": "I completely understand your frustration — although this is difficult, we'll find a way forward together."
  },
  "challenge": "Handle a difficult complaint or conflict (real or made up): acknowledge the frustration, stay calm, and propose next steps."
};

/* ================= AULA 05 — Real-Life Challenge ================= */
const LESSON_B2_05 = {
  "ready": true,
  "label": "05",
  "title": "Real-Life Challenge",
  "eyebrow": "Level B2 — Lesson 05",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Everything from World 1 together: explain a problem, consider a hypothetical, compare options, and stay calm under pressure.",
  "scene": {
    "emoji": "🌎",
    "caption": "A full real-life scenario: something unexpected happens, and Ana needs to navigate it end to end.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "We have a serious issue, and I need your input on how to handle it.",
        "pt": "A gente tem um problema sério, e eu preciso da sua opinião sobre como lidar com isso."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Okay, walk me through it — what exactly happened?",
        "pt": "Ok, me explica — o que exatamente aconteceu?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Let's think about this calmly and figure out the best way forward.",
        "pt": "Vamos pensar nisso com calma e descobrir o melhor caminho."
      }
    ]
  },
  "vocab": [
    [
      "Walk me through it.",
      "uók mí thrú it",
      "Me explica passo a passo.",
      "🚶",
      true
    ],
    [
      "Let's think about this calmly.",
      "lets thingk abáut dhis kálmli",
      "Vamos pensar nisso com calma.",
      "🧘",
      true
    ],
    [
      "Given everything, here's what I'd suggest.",
      "gívn évrithin, rrírz uát áid sajést",
      "Considerando tudo, aqui está o que eu sugeriria.",
      "💡",
      true
    ],
    [
      "If we acted now, we could avoid a bigger problem.",
      "if uí áktid náu, uí kud avóid a bíger próblem",
      "Se a gente agisse agora, poderia evitar um problema maior.",
      "⏱️",
      true
    ],
    [
      "Although it's not ideal, it's manageable.",
      "óldhôu its not áidíal, its mánejabl",
      "Embora não seja ideal, é administrável.",
      "🎛️",
      true
    ],
    [
      "We'll get through this.",
      "uíu guét thrú dhis",
      "A gente vai superar isso.",
      "💪",
      true
    ],
    [
      "Let's move forward from here.",
      "lets múv fórwerd from rrír",
      "Vamos seguir em frente a partir daqui.",
      "➡️",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "If we acted now, we could avoid a bigger problem.",
    "formula": "Second conditional used for advice/urgency: If we + PAST SIMPLE, we could + VERB",
    "examples": [
      "If we acted now, we could avoid a bigger problem.",
      "If we waited, it could get worse.",
      "If we explained clearly, they'd probably understand.",
      "If we asked for help, we'd solve it faster."
    ]
  },
  "simplify": [
    "Walk me through it",
    "If we + PAST SIMPLE, we could + VERB",
    "Although it's not ideal, it's manageable"
  ],
  "swap": {
    "base": "If we ______, we could ______.",
    "options": [
      "acted now / avoid a bigger problem",
      "asked for help / solve it faster",
      "waited / risk making it worse"
    ]
  },
  "activities": [
    [
      "Write a sentence explaining a problem, and one comparing two solutions.",
      "The main issue is the delay, but Option B is more reliable than Option A.",
      "dhe méin íchu iz dhe diléi, bât ópchn bí iz mór riláiabl dhan ópchn éi"
    ],
    [
      "Write a sentence using the second conditional to suggest urgent action.",
      "If we acted now, we could avoid a bigger problem later.",
      "if uí áktid náu, uí kud avóid a bíger próblem léiter"
    ],
    [
      "Write a sentence staying calm about a difficult situation.",
      "Although it's not ideal, it's manageable, and we'll get through this.",
      "óldhôu its not áidíal, its mánejabl, end uíu guét thrú dhis"
    ]
  ],
  "dialogue": [
    [
      "A",
      "We have a serious issue, and I need your input on how to handle it.",
      "uí rrev a síriös íchu, end ái níd iór ínput on ráu tu rrándl it",
      "A gente tem um problema sério, e eu preciso da sua opinião sobre como lidar com isso."
    ],
    [
      "L",
      "Okay, walk me through it — what exactly happened?",
      "ôukéi, uók mí thrú it — uát ikzáktli rrépend",
      "Ok, me explica — o que exatamente aconteceu?"
    ],
    [
      "A",
      "Let's think about this calmly and figure out the best way forward.",
      "lets thingk abáut dhis kálmli end fígier áut dhe best uéi fórwerd",
      "Vamos pensar nisso com calma e descobrir o melhor caminho."
    ],
    [
      "L",
      "If we acted now, we could probably avoid a bigger problem.",
      "if uí áktid náu, uí kud próbabli avóid a bíger próblem",
      "Se a gente agisse agora, provavelmente poderia evitar um problema maior."
    ],
    [
      "A",
      "Agreed. Although it's not ideal, it's manageable.",
      "agríd. óldhôu its not áidíal, its mánejabl",
      "Concordo. Embora não seja ideal, é administrável."
    ],
    [
      "L",
      "We'll get through this. Let's move forward from here.",
      "uíu guét thrú dhis. lets múv fórwerd from rrír",
      "A gente vai superar isso. Vamos seguir em frente a partir daqui."
    ]
  ],
  "connectors": [
    "Walk me through it.",
    "Agreed.",
    "We'll get through this."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "All World 1 structures: should/could, second conditional, comparisons, although"
    ],
    "today": [
      "Walk me through it",
      "If we..., we could...",
      "Although it's not ideal, it's manageable"
    ],
    "combo": "We have a problem — if we acted now, we could avoid it getting worse. Although it's not ideal, we'll get through this."
  },
  "challenge": "Handle a full real-life challenge: explain a problem, propose an urgent solution, and stay calm about the outcome."
};


/* ================= WORLD 2 | WORK ================= */
/* ================= AULA 06 — At Work ================= */
const LESSON_B2_06 = {
  "ready": true,
  "label": "06",
  "title": "At Work",
  "eyebrow": "Level B2 — Lesson 06",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's talk about professional responsibilities and how work is going, at a B2 level of detail.",
  "scene": {
    "emoji": "💼",
    "caption": "A new coworker asks Ana about her responsibilities at work.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "So, what exactly are you responsible for these days?",
        "pt": "Então, pelo que exatamente você é responsável hoje em dia?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I oversee the whole onboarding process for new hires.",
        "pt": "Eu superviso todo o processo de integração de novos contratados."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "That sounds like a lot of responsibility.",
        "pt": "Isso parece muita responsabilidade."
      }
    ]
  },
  "vocab": [
    [
      "I oversee the whole process.",
      "ái ôuversí dhe rrôul próses",
      "Eu superviso todo o processo.",
      "👁️",
      true
    ],
    [
      "I'm responsible for onboarding new hires.",
      "áim rispónsibl for onbórdin niú rráierz",
      "Eu sou responsável pela integração de novos contratados.",
      "👥",
      true
    ],
    [
      "It's currently being handled by my team.",
      "its kârentli bíin rréndeld bái mái tím",
      "Está sendo cuidado pela minha equipe no momento.",
      "🤲",
      true
    ],
    [
      "I report directly to the director.",
      "ái ripórt diréktli tu dhe dairéktor",
      "Eu me reporto diretamente ao diretor.",
      "📊",
      true
    ],
    [
      "My role has expanded a lot recently.",
      "mái rôul rrez ikspándid a lot ríssentli",
      "Meu cargo expandiu bastante recentemente.",
      "📈",
      true
    ],
    [
      "I delegate the smaller tasks.",
      "ái déligéit dhe smóler tasks",
      "Eu delego as tarefas menores.",
      "➡️",
      true
    ],
    [
      "Sounds like a lot of responsibility!",
      "sáunds láik a lot ov rispónsibíliti",
      "Parece muita responsabilidade!",
      "😮",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "It's currently being handled by my team.",
    "formula": "Passive voice: is/are + being + VERB (past participle) — for ongoing actions where the doer matters less",
    "examples": [
      "It's currently being handled by my team.",
      "The report is being reviewed right now.",
      "New procedures are being introduced this month.",
      "The issue is being looked into."
    ]
  },
  "simplify": [
    "I oversee/I'm responsible for + THING",
    "It's currently being + VERB (3rd form)",
    "I report directly to + PERSON"
  ],
  "swap": {
    "base": "I'm responsible for ______.",
    "options": [
      "onboarding new hires",
      "the budget",
      "client relationships",
      "the team's schedule"
    ]
  },
  "activities": [
    [
      "Write a sentence about what you're responsible for (real or made up).",
      "I'm responsible for onboarding all the new hires.",
      "áim rispónsibl for onbórdin ól dhe niú rráierz"
    ],
    [
      "Write a sentence using the passive voice for something happening now.",
      "The new system is currently being tested by the team.",
      "dhe niú sístem iz kârentli bíin téstid bái dhe tím"
    ],
    [
      "Write a sentence about who you report to.",
      "I report directly to the head of department.",
      "ái ripórt diréktli tu dhe rred ov dipártment"
    ]
  ],
  "dialogue": [
    [
      "L",
      "So, what exactly are you responsible for these days?",
      "sôu, uát ikzáktli ar iú rispónsibl for dhíz déiz",
      "Então, pelo que exatamente você é responsável hoje em dia?"
    ],
    [
      "A",
      "I oversee the whole onboarding process for new hires.",
      "ái ôuversí dhe rrôul onbórdin próses for niú rráierz",
      "Eu superviso todo o processo de integração de novos contratados."
    ],
    [
      "L",
      "That sounds like a lot of responsibility.",
      "dhat sáunds láik a lot ov rispónsibíliti",
      "Isso parece muita responsabilidade."
    ],
    [
      "A",
      "It is, but I delegate the smaller tasks to my team.",
      "it iz, bât ái déligéit dhe smóler tasks tu mái tím",
      "É, mas eu delego as tarefas menores pra minha equipe."
    ],
    [
      "L",
      "Who do you report to directly?",
      "rrú du iú ripórt tu diréktli",
      "Pra quem você se reporta diretamente?"
    ],
    [
      "A",
      "The director. My role has actually expanded a lot recently.",
      "dhe dairéktor. mái rôul rrez ákchuali ikspándid a lot ríssentli",
      "O diretor. Meu cargo na verdade expandiu bastante recentemente."
    ]
  ],
  "connectors": [
    "That sounds like a lot.",
    "Who do you report to?",
    "Actually, ..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 work vocabulary"
    ],
    "today": [
      "I oversee / I'm responsible for...",
      "It's currently being...",
      "I report directly to..."
    ],
    "combo": "I'm responsible for onboarding new hires, and it's currently being expanded across the whole team."
  },
  "challenge": "Describe your work responsibilities (real or made up) in detail: what you oversee, what's happening currently, and who you report to."
};

/* ================= AULA 07 — Meetings ================= */
const LESSON_B2_07 = {
  "ready": true,
  "label": "07",
  "title": "Meetings",
  "eyebrow": "Level B2 — Lesson 07",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise sharing opinions, agreeing, and disagreeing respectfully in a meeting setting.",
  "scene": {
    "emoji": "🗣️",
    "caption": "Ana and Leo are in a meeting, and they disagree slightly about moving a deadline.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I'd like to propose moving the deadline up by a week.",
        "pt": "Eu gostaria de propor adiantar o prazo em uma semana."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I see where you're coming from, but I have some concerns.",
        "pt": "Eu entendo seu raciocínio, mas eu tenho algumas preocupações."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Fair enough, let's hear them.",
        "pt": "Justo, vamos ouvir."
      }
    ]
  },
  "vocab": [
    [
      "I'd like to propose...",
      "áid láik tu prapôuz",
      "Eu gostaria de propor...",
      "📝",
      true
    ],
    [
      "I see where you're coming from.",
      "ái si uér iór kâmin from",
      "Eu entendo seu raciocínio.",
      "🧭",
      true
    ],
    [
      "I have some concerns about that.",
      "ái rrev sâm konsérnz abáut dhat",
      "Eu tenho algumas preocupações sobre isso.",
      "😟",
      true
    ],
    [
      "Could we look at this from another angle?",
      "kud uí luk at dhis from anâther ángol",
      "Poderíamos olhar isso de outro ângulo?",
      "🔄",
      true
    ],
    [
      "I'd like to build on what you just said.",
      "áid láik tu bíld on uát iú jâst sed",
      "Eu gostaria de expandir o que você acabou de dizer.",
      "🧱",
      true
    ],
    [
      "Let's put it to a vote.",
      "lets put it tu a vôut",
      "Vamos colocar isso em votação.",
      "🗳️",
      true
    ],
    [
      "Good point, noted.",
      "gud póint, nôutid",
      "Bom ponto, anotado.",
      "📌",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I'd like to build on what you just said.",
    "formula": "I'd like to + VERB (formal, polite way to contribute in meetings)",
    "examples": [
      "I'd like to propose a change.",
      "I'd like to build on that point.",
      "I'd like to raise a concern.",
      "I'd like to suggest an alternative."
    ]
  },
  "simplify": [
    "I'd like to propose + THING",
    "I see where you're coming from, but...",
    "I have some concerns about + THING"
  ],
  "swap": {
    "base": "I'd like to ______.",
    "options": [
      "propose a change",
      "build on that point",
      "raise a concern",
      "suggest an alternative"
    ]
  },
  "activities": [
    [
      "Write a sentence formally proposing something in a meeting.",
      "I'd like to propose moving the deadline up by a week.",
      "áid láik tu prapôuz múvin dhe dédláin ap bái a uík"
    ],
    [
      "Write a sentence acknowledging someone's idea before disagreeing.",
      "I see where you're coming from, but I have some concerns.",
      "ái si uér iór kâmin from, bât ái rrev sâm konsérnz"
    ],
    [
      "Write a sentence building on someone else's point.",
      "I'd like to build on what Ana just said about the timeline.",
      "áid láik tu bíld on uát Ana jâst sed abáut dhe táimláin"
    ]
  ],
  "dialogue": [
    [
      "A",
      "I'd like to propose moving the deadline up by a week.",
      "áid láik tu prapôuz múvin dhe dédláin ap bái a uík",
      "Eu gostaria de propor adiantar o prazo em uma semana."
    ],
    [
      "L",
      "I see where you're coming from, but I have some concerns.",
      "ái si uér iór kâmin from, bât ái rrev sâm konsérnz",
      "Eu entendo seu raciocínio, mas eu tenho algumas preocupações."
    ],
    [
      "A",
      "Fair enough, let's hear them.",
      "fér ináf, lets rrír dhem",
      "Justo, vamos ouvir."
    ],
    [
      "L",
      "Could we look at this from another angle — maybe just three days?",
      "kud uí luk at dhis from anâther ángol — méibi jâst thrí déiz",
      "Poderíamos olhar isso de outro ângulo — talvez só três dias?"
    ],
    [
      "A",
      "I'd like to build on that. Three days sounds more realistic.",
      "áid láik tu bíld on dhat. thrí déiz sáunds mór ríalístik",
      "Eu gostaria de expandir isso. Três dias parece mais realista."
    ],
    [
      "L",
      "Good point, noted. Let's put it to a vote.",
      "gud póint, nôutid. lets put it tu a vôut",
      "Bom ponto, anotado. Vamos colocar em votação."
    ]
  ],
  "connectors": [
    "Fair enough.",
    "Good point, noted.",
    "Let's put it to a vote."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B2 lesson 06 work vocabulary"
    ],
    "today": [
      "I'd like to propose...",
      "I see where you're coming from, but...",
      "I have some concerns about..."
    ],
    "combo": "I'd like to propose a change — I see where you're coming from, but I have some concerns."
  },
  "challenge": "Simulate a meeting moment: propose something, respond to a concern, and reach a compromise."
};

/* ================= AULA 08 — Explaining Your Ideas ================= */
const LESSON_B2_08 = {
  "ready": true,
  "label": "08",
  "title": "Explaining Your Ideas",
  "eyebrow": "Level B2 — Lesson 08",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise explaining a proposal clearly and defending it when someone pushes back.",
  "scene": {
    "emoji": "💡",
    "caption": "Leo isn't convinced by Ana's plan, and she needs to explain and defend her idea.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I don't think this plan will work, honestly.",
        "pt": "Eu não acho que esse plano vai funcionar, sinceramente."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I understand your doubt, but let me explain the reasoning.",
        "pt": "Eu entendo sua dúvida, mas deixa eu explicar o raciocínio."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Okay, I'm listening.",
        "pt": "Ok, estou escutando."
      }
    ]
  },
  "vocab": [
    [
      "I understand your doubt, but...",
      "ái ândersténd iór dáut, bât",
      "Eu entendo sua dúvida, mas...",
      "🤔",
      true
    ],
    [
      "The main reason is...",
      "dhe méin ríson iz",
      "O motivo principal é...",
      "🎯",
      true
    ],
    [
      "The plan that we discussed covers that.",
      "dhe plen dhat uí diskâst kâvers dhat",
      "O plano que a gente discutiu cobre isso.",
      "📋",
      true
    ],
    [
      "That's exactly the point I'm making.",
      "dhats ikzáktli dhe póint áim méikin",
      "Esse é exatamente o ponto que eu estou fazendo.",
      "🎯",
      true
    ],
    [
      "Let me walk you through the logic.",
      "let mí uók iú thrú dhe lójik",
      "Deixa eu te explicar a lógica passo a passo.",
      "🧠",
      true
    ],
    [
      "I hope that clears things up.",
      "ái rrôup dhat klírz things ap",
      "Espero que isso esclareça as coisas.",
      "💡",
      true
    ],
    [
      "That actually makes sense now.",
      "dhat ákchuali méiks sens náu",
      "Isso realmente faz sentido agora.",
      "✅",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "The plan that we discussed covers that.",
    "formula": "Relative clauses with 'that/which/who' add detail without starting a new sentence",
    "examples": [
      "The plan that we discussed covers that.",
      "The person who suggested it has experience.",
      "The idea which worked before might work again.",
      "The report that I sent explains it."
    ]
  },
  "simplify": [
    "The main reason is + CLAUSE",
    "The + NOUN + that + CLAUSE",
    "Let me walk you through + THING"
  ],
  "swap": {
    "base": "The ______ that we discussed ______.",
    "options": [
      "plan / covers that",
      "report / explains it",
      "idea / worked before"
    ]
  },
  "activities": [
    [
      "Write a sentence explaining your main reason for something.",
      "The main reason is it fits our budget better than the alternative.",
      "dhe méin ríson iz it fits áur bâjet béter dhan dhi altérnativ"
    ],
    [
      "Write a sentence using a relative clause to add detail.",
      "The plan that we discussed already covers that concern.",
      "dhe plen dhat uí diskâst órredi kâvers dhat konsérn"
    ],
    [
      "Write a sentence defending an idea after pushback.",
      "Let me walk you through the logic, I hope it clears things up.",
      "let mí uók iú thrú dhe lójik, ái rrôup it klírz things ap"
    ]
  ],
  "dialogue": [
    [
      "L",
      "I don't think this plan will work, honestly.",
      "ái dôunt thingk dhis plen uíu uórk, ónestli",
      "Eu não acho que esse plano vai funcionar, sinceramente."
    ],
    [
      "A",
      "I understand your doubt, but let me explain the reasoning.",
      "ái ândersténd iór dáut, bât let mí iksplén dhe rízonin",
      "Eu entendo sua dúvida, mas deixa eu explicar o raciocínio."
    ],
    [
      "L",
      "Okay, I'm listening.",
      "ôukéi, áim lísenin",
      "Ok, estou escutando."
    ],
    [
      "A",
      "The main reason is it fits our budget. The plan that we discussed covers that.",
      "dhe méin ríson iz it fits áur bâjet. dhe plen dhat uí diskâst kâvers dhat",
      "O motivo principal é que cabe no nosso orçamento. O plano que a gente discutiu cobre isso."
    ],
    [
      "L",
      "That actually makes sense now. What about the timeline, though?",
      "dhat ákchuali méiks sens náu. uát abáut dhe táimláin, dhôu",
      "Isso realmente faz sentido agora. E quanto ao cronograma, porém?"
    ],
    [
      "A",
      "Let me walk you through that too — I hope it clears things up.",
      "let mí uók iú thrú dhat tú — ái rrôup it klírz things ap",
      "Deixa eu te explicar isso também — espero que esclareça as coisas."
    ]
  ],
  "connectors": [
    "Okay, I'm listening.",
    "That actually makes sense now.",
    "What about...?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B2 meetings vocabulary"
    ],
    "today": [
      "I understand your doubt, but...",
      "The main reason is...",
      "The [thing] that we discussed..."
    ],
    "combo": "I understand your doubt, but the main reason is it fits our budget — the plan that we discussed already covers that."
  },
  "challenge": "Defend an idea (real or made up) after someone pushes back: explain your reason using a relative clause."
};

/* ================= AULA 09 — Negotiating ================= */
const LESSON_B2_09 = {
  "ready": true,
  "label": "09",
  "title": "Negotiating",
  "eyebrow": "Level B2 — Lesson 09",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise negotiating: proposing a condition, and finding a compromise using the first conditional.",
  "scene": {
    "emoji": "🤝",
    "caption": "Ana is negotiating a deadline with her manager, Leo.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I need more time to finish this properly.",
        "pt": "Eu preciso de mais tempo pra terminar isso direito."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I need this done by Monday, no exceptions.",
        "pt": "Eu preciso disso pronto até segunda, sem exceções."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "If we get until Wednesday, we'll deliver much better quality.",
        "pt": "Se a gente conseguir até quarta, vamos entregar uma qualidade bem melhor."
      }
    ]
  },
  "vocab": [
    [
      "If we get more time, we'll deliver better work.",
      "if uí guét mór táim, uíu delíver béter uórk",
      "Se a gente tiver mais tempo, vamos entregar um trabalho melhor.",
      "⏳",
      true
    ],
    [
      "Would it be possible to...?",
      "uúd it bí pósibl tu",
      "Seria possível...?",
      "🙏",
      true
    ],
    [
      "Let's find a middle ground.",
      "lets fáind a mídol gráund",
      "Vamos encontrar um meio-termo.",
      "🤝",
      true
    ],
    [
      "That could work, on one condition.",
      "dhat kud uórk, on uán kondíchn",
      "Isso poderia funcionar, com uma condição.",
      "☝️",
      true
    ],
    [
      "I'm willing to compromise on that.",
      "áim uílin tu kómpromáiz on dhat",
      "Estou disposto a fazer um acordo sobre isso.",
      "🤲",
      true
    ],
    [
      "Let's meet in the middle.",
      "lets mít in dhe mídol",
      "Vamos nos encontrar no meio-termo.",
      "➗",
      true
    ],
    [
      "Deal.",
      "díl",
      "Combinado.",
      "🤝",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "If we get more time, we'll deliver better work.",
    "formula": "First Conditional: If + present simple, will/'ll + VERB — real, likely conditions used in negotiation",
    "examples": [
      "If we get more time, we'll deliver better work.",
      "If you approve this, we'll start tomorrow.",
      "If we compromise, we'll both be happy.",
      "If this works, we'll use it again."
    ]
  },
  "simplify": [
    "If we + PRESENT SIMPLE, we'll + VERB",
    "Would it be possible to + VERB?",
    "Let's find/meet a/in the middle ground"
  ],
  "swap": {
    "base": "If we ______, we'll ______.",
    "options": [
      "get more time / deliver better work",
      "compromise / both be happy",
      "get approval / start tomorrow"
    ]
  },
  "activities": [
    [
      "Write a sentence proposing a condition using the first conditional.",
      "If we get until Wednesday, we'll deliver much better quality.",
      "if uí guét antíl uénzdéi, uíu delíver mâtch béter kuóliti"
    ],
    [
      "Write a sentence politely asking for something in a negotiation.",
      "Would it be possible to get an extra day?",
      "uúd it bí pósibl tu guét en ékstra déi"
    ],
    [
      "Write a sentence about reaching a compromise.",
      "Let's meet in the middle — how about Tuesday instead?",
      "lets mít in dhe mídol — ráu abáut tiúzdéi insted"
    ]
  ],
  "dialogue": [
    [
      "L",
      "I need this done by Monday, no exceptions.",
      "ái níd dhis dân bái mândêi, nôu ikséptchns",
      "Eu preciso disso pronto até segunda, sem exceções."
    ],
    [
      "A",
      "I understand, but that's going to be really tight.",
      "ái ândersténd, bât dhats gôuin tu bí ríli táit",
      "Eu entendo, mas isso vai ser bem apertado."
    ],
    [
      "L",
      "What are you suggesting?",
      "uát ar iú sajéstin",
      "O que você está sugerindo?"
    ],
    [
      "A",
      "If we get until Wednesday, we'll deliver much better quality.",
      "if uí guét antíl uénzdéi, uíu delíver mâtch béter kuóliti",
      "Se a gente conseguir até quarta, vamos entregar uma qualidade bem melhor."
    ],
    [
      "L",
      "Hmm. Would it be possible to meet in the middle — Tuesday?",
      "rram. uúd it bí pósibl tu mít in dhe mídol — tiúzdéi",
      "Hmm. Seria possível se encontrar no meio-termo — terça?"
    ],
    [
      "A",
      "That could work. Deal.",
      "dhat kud uórk. díl",
      "Isso poderia funcionar. Combinado."
    ]
  ],
  "connectors": [
    "I understand, but...",
    "What are you suggesting?",
    "Deal."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B2 meetings, negotiating language"
    ],
    "today": [
      "If we..., we'll...",
      "Would it be possible to...?",
      "Let's meet in the middle"
    ],
    "combo": "If we get more time, we'll deliver better work — would it be possible to meet in the middle?"
  },
  "challenge": "Negotiate a real or made-up condition (a deadline, a price, a schedule): propose, get pushback, and reach a compromise."
};

/* ================= AULA 10 — Job & Career Challenge ================= */
const LESSON_B2_10 = {
  "ready": true,
  "label": "10",
  "title": "Job & Career Challenge",
  "eyebrow": "Level B2 — Lesson 10",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Everything from World 2 together: describe your work, propose an idea, and negotiate — all in a career context.",
  "scene": {
    "emoji": "🎓",
    "caption": "A job interview scenario where Ana needs to describe her experience and negotiate terms.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo (interviewer)",
        "en": "Tell me about your current responsibilities.",
        "pt": "Me conte sobre suas responsabilidades atuais."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I oversee a small team and I'm responsible for client relationships.",
        "pt": "Eu superviso uma pequena equipe e sou responsável pelo relacionamento com clientes."
      },
      {
        "who": "L",
        "speaker": "Leo (interviewer)",
        "en": "And how do you usually handle disagreements with clients?",
        "pt": "E como você normalmente lida com desacordos com clientes?"
      }
    ]
  },
  "vocab": [
    [
      "I have experience managing a small team.",
      "ái rrev ikspíriens ménejin a smól tím",
      "Eu tenho experiência gerenciando uma pequena equipe.",
      "👥",
      true
    ],
    [
      "I'm used to handling pressure.",
      "áim iúzd tu rrándlin préchur",
      "Estou acostumado a lidar com pressão.",
      "💪",
      true
    ],
    [
      "My proudest achievement was...",
      "mái práudest achívment uóz",
      "Minha maior conquista foi...",
      "🏆",
      true
    ],
    [
      "I'd be happy to take that on.",
      "áid bí rrépi tu téik dhat on",
      "Eu ficaria feliz em assumir isso.",
      "🙋",
      true
    ],
    [
      "Would there be room to negotiate the salary?",
      "uúd dhér bí rúm tu negóchiéit dhe sálari",
      "Teria espaço pra negociar o salário?",
      "💰",
      true
    ],
    [
      "I'm confident I can add value here.",
      "áim kónfident ái ken red váliu rrír",
      "Estou confiante que posso agregar valor aqui.",
      "✨",
      true
    ],
    [
      "Thank you for the opportunity.",
      "thenk iú for dhi oportiúniti",
      "Obrigado(a) pela oportunidade.",
      "🙏",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I'm used to handling pressure.",
    "formula": "be used to + VERB-ing (being accustomed to something — different from 'used to' + base verb!)",
    "examples": [
      "I'm used to handling pressure.",
      "I'm used to working under tight deadlines.",
      "I'm not used to this kind of environment yet.",
      "Are you used to remote work?"
    ]
  },
  "simplify": [
    "I have experience + VERB-ing",
    "I'm used to + VERB-ing",
    "Would there be room to + VERB?"
  ],
  "swap": {
    "base": "I'm used to ______.",
    "options": [
      "handling pressure",
      "working under deadlines",
      "managing a team",
      "dealing with clients"
    ]
  },
  "activities": [
    [
      "Write a sentence about your professional experience.",
      "I have experience managing a small team under pressure.",
      "ái rrev ikspíriens ménejin a smól tím ânder préchur"
    ],
    [
      "Write a sentence using 'be used to' about something you're accustomed to.",
      "I'm used to handling pressure and tight deadlines.",
      "áim iúzd tu rrándlin préchur end táit dédláinz"
    ],
    [
      "Write a sentence negotiating something in a job context.",
      "Would there be room to negotiate the salary a bit?",
      "uúd dhér bí rúm tu negóchiéit dhe sálari a bit"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Tell me about your current responsibilities.",
      "tel mí abáut iór kârent rispónsibílitiz",
      "Me conte sobre suas responsabilidades atuais."
    ],
    [
      "A",
      "I oversee a small team and I'm responsible for client relationships.",
      "ái ôuversí a smól tím end áim rispónsibl for kláient riléichnships",
      "Eu superviso uma pequena equipe e sou responsável pelo relacionamento com clientes."
    ],
    [
      "L",
      "And how do you usually handle disagreements with clients?",
      "end ráu du iú iújuali rrándl disagríments uíth kláients",
      "E como você normalmente lida com desacordos com clientes?"
    ],
    [
      "A",
      "I'm used to handling pressure — I listen first, then find a middle ground.",
      "áim iúzd tu rrándlin préchur — ái lísen férst, dhen fáind a mídol gráund",
      "Estou acostumada a lidar com pressão — eu escuto primeiro, depois encontro um meio-termo."
    ],
    [
      "L",
      "Great answer. Would there be room to negotiate the salary?",
      "gréit ánser. uúd dhér bí rúm tu negóchiéit dhe sálari",
      "Ótima resposta. Teria espaço pra negociar o salário?"
    ],
    [
      "A",
      "I'm confident I can add value, so yes, I'd like to discuss it.",
      "áim kónfident ái ken red váliu, sôu iés, áid láik tu diskâs it",
      "Estou confiante que posso agregar valor, então sim, eu gostaria de discutir isso."
    ]
  ],
  "connectors": [
    "Great answer.",
    "I'm confident...",
    "Thank you for the opportunity."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "All World 2 structures: passive, relative clauses, first conditional"
    ],
    "today": [
      "I have experience + -ing",
      "I'm used to + -ing",
      "Would there be room to...?"
    ],
    "combo": "I have experience managing a team, I'm used to handling pressure, and I'm confident I can add value here."
  },
  "challenge": "Simulate a full job interview moment: describe your experience, explain how you handle a challenge, and negotiate one term."
};


/* ================= WORLD 3 | CONVERSATION ================= */
/* ================= AULA 11 — Keep Talking ================= */
const LESSON_B2_11 = {
  "ready": true,
  "label": "11",
  "title": "Keep Talking",
  "eyebrow": "Level B2 — Lesson 11",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise keeping a conversation alive naturally — connecting ideas instead of letting it die.",
  "scene": {
    "emoji": "🗣️",
    "caption": "Ana tells a short story, and Leo keeps the conversation going with the right connectors.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "...so that's basically how my weekend went.",
        "pt": "...então foi basicamente assim que foi meu fim de semana."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "That reminds me of something similar that happened to me.",
        "pt": "Isso me lembra de algo parecido que aconteceu comigo."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Oh really? What happened?",
        "pt": "Ah é? O que aconteceu?"
      }
    ]
  },
  "vocab": [
    [
      "That reminds me of...",
      "dhat rimáinds mí ov",
      "Isso me lembra de...",
      "💭",
      true
    ],
    [
      "Speaking of which...",
      "spíkin ov uích",
      "Por falar nisso...",
      "🗨️",
      true
    ],
    [
      "Anyway, tell me more about that.",
      "éniuéi, tel mí mór abáut dhat",
      "De qualquer forma, me conta mais sobre isso.",
      "➡️",
      true
    ],
    [
      "That's actually really similar to my situation.",
      "dhats ákchuali ríli símiler tu mái sitiuéichn",
      "Isso é na verdade bem parecido com minha situação.",
      "🔗",
      true
    ],
    [
      "Funny you mention that.",
      "fâni iú méchn dhat",
      "Engraçado você mencionar isso.",
      "😄",
      true
    ],
    [
      "It's a small world, isn't it?",
      "its a smól uórld, íznt it",
      "É um mundo pequeno, não é?",
      "🌍",
      true
    ],
    [
      "Anyway, what about you?",
      "éniuéi, uát abáut iú",
      "De qualquer forma, e você?",
      "🔁",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "That reminds me of...",
    "formula": "That reminds me of... / Speaking of which... (natural bridges between topics in conversation)",
    "examples": [
      "That reminds me of a similar story.",
      "Speaking of which, did you hear about...?",
      "Funny you mention that.",
      "It's a small world, isn't it?"
    ]
  },
  "simplify": [
    "That reminds me of + THING",
    "Speaking of which, + CLAUSE",
    "Anyway, + follow-up question"
  ],
  "swap": {
    "base": "That reminds me of ______.",
    "options": [
      "a similar story",
      "something that happened to me",
      "a movie I watched"
    ]
  },
  "activities": [
    [
      "Write a sentence connecting to something someone just said.",
      "That reminds me of something similar that happened to me last year.",
      "dhat rimáinds mí ov sâmthin símiler dhat rrépend tu mí last íer"
    ],
    [
      "Write a sentence using 'speaking of which' to shift naturally.",
      "Speaking of which, did you ever finish that project?",
      "spíkin ov uích, did iú éver fínich dhat prójekt"
    ],
    [
      "Write a follow-up question to keep a conversation going.",
      "Anyway, what about you — has anything like that happened to you?",
      "éniuéi, uát abáut iú — rrez énithing láik dhat rrépend tu iú"
    ]
  ],
  "dialogue": [
    [
      "A",
      "...so that's basically how my weekend went.",
      "sôu dhats béisikli ráu mái uíkend uent",
      "...então foi basicamente assim que foi meu fim de semana."
    ],
    [
      "L",
      "That reminds me of something similar that happened to me.",
      "dhat rimáinds mí ov sâmthin símiler dhat rrépend tu mí",
      "Isso me lembra de algo parecido que aconteceu comigo."
    ],
    [
      "A",
      "Oh really? What happened?",
      "ôu ríli? uát rrépend",
      "Ah é? O que aconteceu?"
    ],
    [
      "L",
      "Funny you mention that — it's actually a similar situation.",
      "fâni iú méchn dhat — its ákchuali a símiler sitiuéichn",
      "Engraçado você mencionar isso — na verdade é uma situação parecida."
    ],
    [
      "A",
      "It's a small world, isn't it? Anyway, tell me more.",
      "its a smól uórld, íznt it? éniuéi, tel mí mór",
      "É um mundo pequeno, não é? De qualquer forma, me conta mais."
    ],
    [
      "L",
      "Sure! So basically...",
      "chúr! sôu béisikli",
      "Claro! Então basicamente..."
    ]
  ],
  "connectors": [
    "Oh really?",
    "Funny you mention that.",
    "Sure!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 keeping conversations going"
    ],
    "today": [
      "That reminds me of...",
      "Speaking of which...",
      "Anyway, ...?"
    ],
    "combo": "That reminds me of something similar — funny you mention that, it's a small world, isn't it?"
  },
  "challenge": "Keep a conversation going for at least 4 exchanges without it dying, using natural connectors."
};

/* ================= AULA 12 — Change the Topic ================= */
const LESSON_B2_12 = {
  "ready": true,
  "label": "12",
  "title": "Change the Topic",
  "eyebrow": "Level B2 — Lesson 12",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise shifting a conversation to a new topic smoothly, without it feeling abrupt.",
  "scene": {
    "emoji": "🔀",
    "caption": "Leo wants to change the subject after a long complaint about work.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "...and that's why the meeting ran so long today.",
        "pt": "...e é por isso que a reunião demorou tanto hoje."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "That sounds exhausting. By the way, have you heard about the office move?",
        "pt": "Isso parece exaustivo. Aliás, você já ouviu falar da mudança do escritório?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Oh, no! Tell me more about that.",
        "pt": "Ah, não! Me conta mais sobre isso."
      }
    ]
  },
  "vocab": [
    [
      "By the way, have you heard...?",
      "bái dhe uéi, rrev iú rrérd",
      "Aliás, você já ouviu falar...?",
      "💬",
      true
    ],
    [
      "That reminds me, I need to ask you something.",
      "dhat rimáinds mí, ái níd tu esk iú sâmthin",
      "Isso me lembra, eu preciso te perguntar uma coisa.",
      "❓",
      true
    ],
    [
      "Anyway, changing the subject completely...",
      "éniuéi, chéinjin dhe sâbjekt kompliitli",
      "De qualquer forma, mudando completamente de assunto...",
      "🔄",
      true
    ],
    [
      "On a different note...",
      "on a díferent nôut",
      "Numa nota diferente...",
      "🎵",
      true
    ],
    [
      "Before I forget...",
      "bifór ái forguét",
      "Antes que eu esqueça...",
      "🧠",
      true
    ],
    [
      "That's a whole different topic, but...",
      "dhats a rrôul díferent tópik, bât",
      "Isso é um assunto completamente diferente, mas...",
      "🔀",
      true
    ],
    [
      "Good point, anyway...",
      "gud póint, éniuéi",
      "Bom ponto, de qualquer forma...",
      "👍",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "By the way, have you heard about the office move?",
    "formula": "By the way + question (the most natural way to shift topics in English)",
    "examples": [
      "By the way, have you heard about the office move?",
      "By the way, did you see the news today?",
      "By the way, I meant to ask you something.",
      "By the way, what happened with that project?"
    ]
  },
  "simplify": [
    "By the way, have you heard...?",
    "On a different note, ...",
    "Before I forget, ..."
  ],
  "swap": {
    "base": "By the way, ______?",
    "options": [
      "have you heard about the move",
      "did you see the news",
      "what happened with that project"
    ]
  },
  "activities": [
    [
      "Write a sentence shifting topics using 'by the way'.",
      "By the way, have you heard about the office move?",
      "bái dhe uéi, rrev iú rrérd abáut dhi ófis múv"
    ],
    [
      "Write a sentence using 'on a different note' to change subject.",
      "On a different note, are you free this weekend?",
      "on a díferent nôut, ar iú frí dhis uíkend"
    ],
    [
      "Write a sentence remembering something you need to ask.",
      "Before I forget, I need to ask you something important.",
      "bifór ái forguét, ái níd tu esk iú sâmthin impórtant"
    ]
  ],
  "dialogue": [
    [
      "L",
      "...and that's why the meeting ran so long today.",
      "end dhats uái dhe mítin ren sôu long tudéi",
      "...e é por isso que a reunião demorou tanto hoje."
    ],
    [
      "A",
      "That sounds exhausting. By the way, have you heard about the office move?",
      "dhat sáunds igzóstin. bái dhe uéi, rrev iú rrérd abáut dhi ófis múv",
      "Isso parece exaustivo. Aliás, você já ouviu falar da mudança do escritório?"
    ],
    [
      "L",
      "Oh, no! Tell me more about that.",
      "ôu, nôu! tel mí mór abáut dhat",
      "Ah, não! Me conta mais sobre isso."
    ],
    [
      "A",
      "Apparently it's happening next month.",
      "apérentli its rrépenin nekst mânth",
      "Aparentemente vai acontecer mês que vem."
    ],
    [
      "L",
      "Wow, that's a whole different topic. Where to?",
      "uáu, dhats a rrôul díferent tópik. uér tu",
      "Uau, isso é um assunto completamente diferente. Pra onde?"
    ],
    [
      "A",
      "Downtown, I think. Anyway, back to your meeting...",
      "dáuntáun, ái thingk. éniuéi, bek tu iór mítin",
      "Pro centro, eu acho. De qualquer forma, voltando à sua reunião..."
    ]
  ],
  "connectors": [
    "That sounds exhausting.",
    "Wow, that's a whole different topic.",
    "Anyway, ..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B2 keeping conversations alive"
    ],
    "today": [
      "By the way, ...?",
      "On a different note, ...",
      "Before I forget, ..."
    ],
    "combo": "By the way, have you heard about the move? On a different note, before I forget, I wanted to ask you something."
  },
  "challenge": "Practise shifting a real conversation to a new topic smoothly, using 'by the way' or 'on a different note'."
};

/* ================= AULA 13 — Agree or Disagree ================= */
const LESSON_B2_13 = {
  "ready": true,
  "label": "13",
  "title": "Agree or Disagree",
  "eyebrow": "Level B2 — Lesson 13",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's go deeper into agreeing and disagreeing — with nuance, not just yes or no.",
  "scene": {
    "emoji": "⚖️",
    "caption": "Ana and Leo have different views about working from home, and they discuss it respectfully.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I think remote work is always better, no question.",
        "pt": "Eu acho que trabalho remoto é sempre melhor, sem dúvida."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I see your point, but I don't fully agree.",
        "pt": "Eu entendo seu ponto, mas eu não concordo totalmente."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Fair, why do you say that?",
        "pt": "Justo, por que você diz isso?"
      }
    ]
  },
  "vocab": [
    [
      "I see your point, but I don't fully agree.",
      "ái si iór póint, bât ái dôunt fúli agrí",
      "Eu entendo seu ponto, mas eu não concordo totalmente.",
      "🤨",
      true
    ],
    [
      "That's true, to some extent.",
      "dhats trú, tu sâm ikstent",
      "Isso é verdade, até certo ponto.",
      "☑️",
      true
    ],
    [
      "I might be wrong, but I think...",
      "ái máit bí róng, bât ái thingk",
      "Eu posso estar errado, mas eu acho...",
      "🤷",
      true
    ],
    [
      "We'll just have to agree to disagree.",
      "uíu jâst rrev tu agrí tu disagrí",
      "A gente só vai ter que concordar em discordar.",
      "🤝",
      true
    ],
    [
      "I couldn't agree more, honestly.",
      "ái kúdnt agrí mór, ónestli",
      "Eu concordo plenamente, sinceramente.",
      "💯",
      true
    ],
    [
      "That's not necessarily true, though.",
      "dhats not nésesérili trú, dhôu",
      "Isso não é necessariamente verdade, porém.",
      "❌",
      true
    ],
    [
      "Interesting perspective.",
      "íntrestin perspéktiv",
      "Perspectiva interessante.",
      "🔎",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I might be wrong, but I think...",
    "formula": "might + VERB (softens an opinion, showing humility while still disagreeing)",
    "examples": [
      "I might be wrong, but I think it depends on the job.",
      "I might be missing something, but I disagree.",
      "You might have a point, but I still think differently.",
      "I might be wrong about this."
    ]
  },
  "simplify": [
    "I see your point, but I don't fully agree",
    "I might be wrong, but I think...",
    "That's not necessarily true, though"
  ],
  "swap": {
    "base": "I might be wrong, but I think ______.",
    "options": [
      "it depends on the job",
      "the office is still better",
      "it varies a lot"
    ]
  },
  "activities": [
    [
      "Write a sentence partly agreeing with someone.",
      "That's true, to some extent, but not always.",
      "dhats trú, tu sâm ikstent, bât not óluêiz"
    ],
    [
      "Write a sentence disagreeing with humility, using 'might'.",
      "I might be wrong, but I think it depends on the job.",
      "ái máit bí róng, bât ái thingk it dipénds on dhe job"
    ],
    [
      "Write a sentence closing a disagreement respectfully.",
      "We'll just have to agree to disagree on this one.",
      "uíu jâst rrev tu agrí tu disagrí on dhis uán"
    ]
  ],
  "dialogue": [
    [
      "A",
      "I think remote work is always better, no question.",
      "ái thingk rimôut uórk iz óluêiz béter, nôu kuéschn",
      "Eu acho que trabalho remoto é sempre melhor, sem dúvida."
    ],
    [
      "L",
      "I see your point, but I don't fully agree.",
      "ái si iór póint, bât ái dôunt fúli agrí",
      "Eu entendo seu ponto, mas eu não concordo totalmente."
    ],
    [
      "A",
      "Fair, why do you say that?",
      "fér, uái du iú séi dhat",
      "Justo, por que você diz isso?"
    ],
    [
      "L",
      "I might be wrong, but I think some people miss the office.",
      "ái máit bí róng, bât ái thingk sâm pípol mis dhi ófis",
      "Eu posso estar errado, mas eu acho que algumas pessoas sentem falta do escritório."
    ],
    [
      "A",
      "That's true, to some extent. I hadn't thought of that.",
      "dhats trú, tu sâm ikstent. ái rrádnt thót ov dhat",
      "Isso é verdade, até certo ponto. Eu não tinha pensado nisso."
    ],
    [
      "L",
      "We'll probably just have to agree to disagree, ha.",
      "uíu próbabli jâst rrev tu agrí tu disagrí, rra",
      "A gente provavelmente vai só ter que concordar em discordar, ha."
    ]
  ],
  "connectors": [
    "Fair.",
    "I hadn't thought of that.",
    "We'll probably just..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 agreeing & disagreeing"
    ],
    "today": [
      "I see your point, but...",
      "I might be wrong, but...",
      "We'll just have to agree to disagree"
    ],
    "combo": "I see your point, but I might be wrong — that's true, to some extent, but we'll just have to agree to disagree."
  },
  "challenge": "Have a respectful disagreement about a real opinion you hold, softening your view with 'I might be wrong, but...'."
};

/* ================= AULA 14 — What Do You Mean? ================= */
const LESSON_B2_14 = {
  "ready": true,
  "label": "14",
  "title": "What Do You Mean?",
  "eyebrow": "Level B2 — Lesson 14",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise asking for clarification and reformulating — essential B2 conversation repair skills.",
  "scene": {
    "emoji": "❓",
    "caption": "Leo says something Ana doesn't fully understand, and she asks him to clarify.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I think we should just wing it this time.",
        "pt": "Eu acho que a gente devia só improvisar dessa vez."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "What do you mean by 'wing it', exactly?",
        "pt": "O que você quer dizer com 'wing it', exatamente?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I mean, let's not over-plan it, just go with the flow.",
        "pt": "Quero dizer, vamos não planejar demais, só seguir o fluxo."
      }
    ]
  },
  "vocab": [
    [
      "What do you mean by that, exactly?",
      "uát du iú mín bái dhat, ikzáktli",
      "O que você quer dizer com isso, exatamente?",
      "❓",
      true
    ],
    [
      "So, if I understood correctly, you're saying...",
      "sôu, if ái ânderstúd kariktli, iór séiin",
      "Então, se eu entendi certo, você está dizendo...",
      "🔄",
      true
    ],
    [
      "In other words, ...",
      "in âther uérdz",
      "Em outras palavras, ...",
      "🔁",
      true
    ],
    [
      "Could you clarify what you meant?",
      "kud iú klárifái uát iú ment",
      "Você poderia esclarecer o que você quis dizer?",
      "🔍",
      true
    ],
    [
      "That's not quite what I meant.",
      "dhats not kuáit uát ái ment",
      "Não é bem isso que eu quis dizer.",
      "🙅",
      true
    ],
    [
      "To put it another way, ...",
      "tu put it anâther uéi",
      "De outra forma, ...",
      "🔀",
      true
    ],
    [
      "Ah, now I get it.",
      "áa, náu ái guét it",
      "Ah, agora eu entendi.",
      "💡",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "So, if I understood correctly, you're saying...",
    "formula": "Reported/paraphrased speech: 'you're saying that...' (confirming understanding by rephrasing)",
    "examples": [
      "So, if I understood correctly, you're saying we shouldn't over-plan.",
      "In other words, you'd rather improvise.",
      "To put it another way, you want more flexibility."
    ]
  },
  "simplify": [
    "What do you mean by + THING, exactly?",
    "So, if I understood correctly, you're saying...",
    "In other words, / To put it another way, ..."
  ],
  "swap": {
    "base": "So, if I understood correctly, you're saying ______.",
    "options": [
      "we shouldn't over-plan",
      "you'd rather improvise",
      "we need more flexibility"
    ]
  },
  "activities": [
    [
      "Write a sentence asking someone to clarify what they meant.",
      "What do you mean by that, exactly?",
      "uát du iú mín bái dhat, ikzáktli"
    ],
    [
      "Write a sentence confirming your understanding by rephrasing.",
      "So, if I understood correctly, you're saying we shouldn't over-plan.",
      "sôu, if ái ânderstúd kariktli, iór séiin uí chúdnt ôuver-plen"
    ],
    [
      "Write a sentence rephrasing something you said, using 'in other words'.",
      "In other words, I think we should just be more flexible.",
      "in âther uérdz, ái thingk uí chud jâst bí mór fléksibl"
    ]
  ],
  "dialogue": [
    [
      "L",
      "I think we should just wing it this time.",
      "ái thingk uí chud jâst uíng it dhis táim",
      "Eu acho que a gente devia só improvisar dessa vez."
    ],
    [
      "A",
      "What do you mean by 'wing it', exactly?",
      "uát du iú mín bái uíng it, ikzáktli",
      "O que você quer dizer com 'wing it', exatamente?"
    ],
    [
      "L",
      "I mean, let's not over-plan it, just go with the flow.",
      "ái mín, lets not ôuver-plen it, jâst gôu uíth dhe flôu",
      "Quero dizer, vamos não planejar demais, só seguir o fluxo."
    ],
    [
      "A",
      "So, if I understood correctly, you're saying we shouldn't prepare too much?",
      "sôu, if ái ânderstúd kariktli, iór séiin uí chúdnt priáper tú mâtch",
      "Então, se eu entendi certo, você está dizendo que não devemos nos preparar demais?"
    ],
    [
      "L",
      "Exactly! Does that work for you?",
      "ikzáktli! dâz dhat uórk for iú",
      "Exatamente! Isso funciona pra você?"
    ],
    [
      "A",
      "Ah, now I get it. Yes, that works.",
      "áa, náu ái guét it. iés, dhat uórks",
      "Ah, agora eu entendi. Sim, funciona."
    ]
  ],
  "connectors": [
    "What do you mean by...?",
    "Exactly!",
    "Ah, now I get it."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 asking for clarification"
    ],
    "today": [
      "What do you mean by...?",
      "So, if I understood correctly...",
      "In other words, ..."
    ],
    "combo": "What do you mean by that? So, if I understood correctly, you're saying we should just go with the flow."
  },
  "challenge": "Ask someone to clarify something they said (real or made up), and confirm your understanding by rephrasing it."
};

/* ================= AULA 15 — Conversation Challenge ================= */
const LESSON_B2_15 = {
  "ready": true,
  "label": "15",
  "title": "Conversation Challenge",
  "eyebrow": "Level B2 — Lesson 15",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Everything from World 3 together: keep a conversation alive, change topics, agree/disagree, and ask for clarification.",
  "scene": {
    "emoji": "🎤",
    "caption": "A long, natural conversation between Ana and Leo, mixing everything from this world.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "So I heard you're thinking about moving. Is that true?",
        "pt": "Então eu ouvi que você está pensando em se mudar. Isso é verdade?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Yeah, actually, I've been considering it for a while.",
        "pt": "É, na verdade, eu tenho considerado isso há um tempo."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Interesting! What made you think about it?",
        "pt": "Interessante! O que te fez pensar nisso?"
      }
    ]
  },
  "vocab": [
    [
      "I've been considering it for a while.",
      "áivi bín konsíderin it for a uáil",
      "Eu tenho considerado isso há um tempo.",
      "🤔",
      true
    ],
    [
      "What made you think about it?",
      "uát méid iú thingk abáut it",
      "O que te fez pensar nisso?",
      "💭",
      true
    ],
    [
      "That reminds me, speaking of moving...",
      "dhat rimáinds mí, spíkin ov múvin",
      "Isso me lembra, por falar em se mudar...",
      "🏠",
      true
    ],
    [
      "I see your point, but I might be wrong.",
      "ái si iór póint, bât ái máit bí róng",
      "Eu entendo seu ponto, mas eu posso estar errado.",
      "🤷",
      true
    ],
    [
      "What do you mean by that, exactly?",
      "uát du iú mín bái dhat, ikzáktli",
      "O que você quer dizer com isso, exatamente?",
      "❓",
      true
    ],
    [
      "I never thought about it that way.",
      "ái néver thót abáut it dhat uéi",
      "Eu nunca tinha pensado assim.",
      "💡",
      true
    ],
    [
      "Let's talk about this again sometime.",
      "lets tók abáut dhis agén sâmtáim",
      "Vamos conversar sobre isso de novo outra hora.",
      "🔁",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I never thought about it that way.",
    "formula": "Review: connectors, agreeing/disagreeing, and clarification all combined in one natural conversation",
    "examples": [
      "I never thought about it that way.",
      "That reminds me, speaking of which...",
      "I see your point, but I might be wrong."
    ]
  },
  "simplify": [
    "I've been considering + THING",
    "That reminds me, speaking of...",
    "I never thought about it that way"
  ],
  "swap": {
    "base": "That reminds me, speaking of ______...",
    "options": [
      "moving",
      "work",
      "travel plans"
    ]
  },
  "activities": [
    [
      "Write a sentence sharing something you've been considering.",
      "I've been considering moving for a while now.",
      "áivi bín konsíderin múvin for a uáil náu"
    ],
    [
      "Write a sentence shifting to a related topic naturally.",
      "That reminds me, speaking of moving, have you seen any places?",
      "dhat rimáinds mí, spíkin ov múvin, rrev iú sín éni pléisiz"
    ],
    [
      "Write a sentence reacting with a new perspective.",
      "I never thought about it that way, that's a good point.",
      "ái néver thót abáut it dhat uéi, dhats a gud póint"
    ]
  ],
  "dialogue": [
    [
      "A",
      "So I heard you're thinking about moving. Is that true?",
      "sôu ái rrérd iór thinkin abáut múvin. iz dhat trú",
      "Então eu ouvi que você está pensando em se mudar. Isso é verdade?"
    ],
    [
      "L",
      "Yeah, actually, I've been considering it for a while.",
      "iéa, ákchuali, áivi bín konsíderin it for a uáil",
      "É, na verdade, eu tenho considerado isso há um tempo."
    ],
    [
      "A",
      "Interesting! What made you think about it?",
      "íntrestin! uát méid iú thingk abáut it",
      "Interessante! O que te fez pensar nisso?"
    ],
    [
      "L",
      "The thing is, I've never really loved this neighbourhood.",
      "dhe thing iz, áivi néver ríli lâvd dhis néiborrud",
      "A questão é, eu nunca realmente amei esse bairro."
    ],
    [
      "A",
      "I see your point, but I might be wrong — I love it here.",
      "ái si iór póint, bât ái máit bí róng — ái lâv it rrír",
      "Eu entendo seu ponto, mas eu posso estar errado — eu amo aqui."
    ],
    [
      "L",
      "Ha, fair! I never thought about it that way. Let's talk about this again sometime.",
      "rra, fér! ái néver thót abáut it dhat uéi. lets tók abáut dhis agén sâmtáim",
      "Ha, justo! Eu nunca tinha pensado assim. Vamos conversar sobre isso de novo outra hora."
    ]
  ],
  "connectors": [
    "Interesting!",
    "The thing is, ...",
    "Ha, fair!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "All World 3 structures: connectors, agree/disagree, clarification"
    ],
    "today": [
      "I've been considering...",
      "That reminds me...",
      "I never thought about it that way"
    ],
    "combo": "I've been considering it for a while — I never thought about it that way, let's talk about this again sometime."
  },
  "challenge": "Have one long, natural conversation (at least 5 exchanges) combining keeping it alive, changing topics, and agreeing/disagreeing."
};


/* ================= WORLD 4 | IDEAS & OPINIONS ================= */
/* ================= AULA 16 — What Do You Think? ================= */
const LESSON_B2_16 = {
  "ready": true,
  "label": "16",
  "title": "What Do You Think?",
  "eyebrow": "Level B2 — Lesson 16",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise giving more developed opinions, going beyond a simple 'I think'.",
  "scene": {
    "emoji": "🧠",
    "caption": "Someone asks Leo for his honest, developed opinion about social media.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "What's your take on social media, honestly?",
        "pt": "Qual é sua opinião sobre redes sociais, sinceramente?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "From my point of view, it connects people but also creates pressure.",
        "pt": "Do meu ponto de vista, isso conecta as pessoas mas também cria pressão."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "That's true. Do you think it's more good or more bad?",
        "pt": "Isso é verdade. Você acha que é mais bom ou mais ruim?"
      }
    ]
  },
  "vocab": [
    [
      "From my point of view, ...",
      "from mái póint ov viú",
      "Do meu ponto de vista, ...",
      "👁️",
      true
    ],
    [
      "I've always thought that...",
      "áivi óluêis thót dhat",
      "Eu sempre achei que...",
      "💭",
      true
    ],
    [
      "On balance, I believe...",
      "on bálans, ái bilív",
      "Ponderando tudo, eu acredito...",
      "⚖️",
      true
    ],
    [
      "It's a complex issue, but...",
      "its a kómpleks íchu, bât",
      "É uma questão complexa, mas...",
      "🧩",
      true
    ],
    [
      "There are pros and cons either way.",
      "dhér ar prôuz end konz áidher uéi",
      "Tem prós e contras dos dois lados.",
      "⚖️",
      true
    ],
    [
      "What's your take on it?",
      "uáts iór téik on it",
      "Qual é sua opinião sobre isso?",
      "🗣️",
      true
    ],
    [
      "That's a really thoughtful answer.",
      "dhats a ríli thótful ánser",
      "Essa é uma resposta bem pensada.",
      "💭",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "On balance, I believe...",
    "formula": "On balance, I believe... (weighing pros and cons before giving a final opinion)",
    "examples": [
      "On balance, I believe it does more good than harm.",
      "On balance, I think it depends on the person.",
      "On balance, I'd say it's worth it."
    ]
  },
  "simplify": [
    "From my point of view, + CLAUSE",
    "It's a complex issue, but...",
    "On balance, I believe + CLAUSE"
  ],
  "swap": {
    "base": "On balance, I believe ______.",
    "options": [
      "it does more good than harm",
      "it depends on the person",
      "it's worth it overall"
    ]
  },
  "activities": [
    [
      "Write a sentence giving a developed opinion, starting with 'from my point of view'.",
      "From my point of view, it connects people but also creates pressure.",
      "from mái póint ov viú, it konékts pípol bât ólso krieéits préchur"
    ],
    [
      "Write a sentence weighing pros and cons before an opinion.",
      "There are pros and cons either way, but on balance, I believe it's positive.",
      "dhér ar prôuz end konz áidher uéi, bât on bálans, ái bilív its pózitiv"
    ],
    [
      "Write a sentence acknowledging complexity before your view.",
      "It's a complex issue, but I've always thought it depends on how you use it.",
      "its a kómpleks íchu, bât áivi óluêis thót it dipénds on ráu iú iúz it"
    ]
  ],
  "dialogue": [
    [
      "A",
      "What's your take on social media, honestly?",
      "uáts iór téik on sôuchal mídia, ónestli",
      "Qual é sua opinião sobre redes sociais, sinceramente?"
    ],
    [
      "L",
      "From my point of view, it connects people but also creates pressure.",
      "from mái póint ov viú, it konékts pípol bât ólso krieéits préchur",
      "Do meu ponto de vista, isso conecta as pessoas mas também cria pressão."
    ],
    [
      "A",
      "That's true. Do you think it's more good or more bad?",
      "dhats trú. du iú thingk its mór gud or mór bed",
      "Isso é verdade. Você acha que é mais bom ou mais ruim?"
    ],
    [
      "L",
      "It's a complex issue, but on balance, I believe it depends a lot on how you use it.",
      "its a kómpleks íchu, bât on bálans, ái bilív it dipénds a lot on ráu iú iúz it",
      "É uma questão complexa, mas ponderando tudo, eu acredito que depende bastante de como você usa."
    ],
    [
      "A",
      "That's a really thoughtful answer.",
      "dhats a ríli thótful ánser",
      "Essa é uma resposta bem pensada."
    ],
    [
      "L",
      "Thanks. What's your take on it?",
      "thenks. uáts iór téik on it",
      "Obrigado. Qual é sua opinião sobre isso?"
    ]
  ],
  "connectors": [
    "That's true.",
    "That's a really thoughtful answer.",
    "What's your take on it?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 giving opinions"
    ],
    "today": [
      "From my point of view...",
      "It's a complex issue, but...",
      "On balance, I believe..."
    ],
    "combo": "From my point of view, it's a complex issue — on balance, I believe it depends on the person."
  },
  "challenge": "Give a fully developed opinion on a topic you care about, weighing pros and cons before your final view."
};

/* ================= AULA 17 — Give Me a Reason ================= */
const LESSON_B2_17 = {
  "ready": true,
  "label": "17",
  "title": "Give Me a Reason",
  "eyebrow": "Level B2 — Lesson 17",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise explaining causes and consequences clearly — a key B2 skill for persuasive explanations.",
  "scene": {
    "emoji": "🔗",
    "caption": "Ana and Leo are discussing why sales dropped last month.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Why do you think sales dropped last month?",
        "pt": "Por que você acha que as vendas caíram mês passado?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "This happened because of the price increase.",
        "pt": "Isso aconteceu por causa do aumento de preço."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "That makes sense. So what do you suggest we do?",
        "pt": "Isso faz sentido. Então o que você sugere que a gente faça?"
      }
    ]
  },
  "vocab": [
    [
      "This happens because of...",
      "dhis rrépenz bikóz ov",
      "Isso acontece por causa de...",
      "🔗",
      true
    ],
    [
      "As a result, ...",
      "az a rizâlt",
      "Como resultado, ...",
      "➡️",
      true
    ],
    [
      "Therefore, I think we should...",
      "dhérfor, ái thingk uí chud",
      "Portanto, eu acho que deveríamos...",
      "🎯",
      true
    ],
    [
      "That's a direct consequence of...",
      "dhats a dairékt kónsikuens ov",
      "Isso é uma consequência direta de...",
      "⛓️",
      true
    ],
    [
      "It all comes down to...",
      "it ól kâms dáun tu",
      "Tudo se resume a...",
      "🎯",
      true
    ],
    [
      "That's what triggered the whole thing.",
      "dhats uát tríguerd dhe rrôul thing",
      "Isso foi o que desencadeou tudo.",
      "💥",
      true
    ],
    [
      "That explains a lot.",
      "dhat iksplénz a lot",
      "Isso explica muita coisa.",
      "💡",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Therefore, I think we should...",
    "formula": "therefore / as a result (more formal cause-effect connectors than 'so')",
    "examples": [
      "Therefore, I think we should reconsider the pricing.",
      "As a result, customers looked elsewhere.",
      "This happened because of the price increase.",
      "That's a direct consequence of the delay."
    ]
  },
  "simplify": [
    "This happens/happened because of + THING",
    "As a result, + CLAUSE",
    "Therefore, + CLAUSE"
  ],
  "swap": {
    "base": "This happened because of ______. As a result, ______.",
    "options": [
      "the price increase / customers left",
      "the delay / we lost the client",
      "the mistake / we had to restart"
    ]
  },
  "activities": [
    [
      "Write a sentence explaining a cause.",
      "This happened because of the price increase last month.",
      "dhis rrépend bikóz ov dhe práis inkrís last mânth"
    ],
    [
      "Write a sentence explaining the consequence, using 'as a result'.",
      "As a result, a lot of customers looked for cheaper options.",
      "az a rizâlt, a lot ov kâstomerz lukt for chíper ópchns"
    ],
    [
      "Write a sentence suggesting an action using 'therefore'.",
      "Therefore, I think we should reconsider the pricing.",
      "dhérfor, ái thingk uí chud rikonsíder dhe práisin"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Why do you think sales dropped last month?",
      "uái du iú thingk séilz drópt last mânth",
      "Por que você acha que as vendas caíram mês passado?"
    ],
    [
      "A",
      "This happened because of the price increase.",
      "dhis rrépend bikóz ov dhe práis inkrís",
      "Isso aconteceu por causa do aumento de preço."
    ],
    [
      "L",
      "That explains a lot. What happened as a result?",
      "dhat iksplénz a lot. uát rrépend az a rizâlt",
      "Isso explica muita coisa. O que aconteceu como resultado?"
    ],
    [
      "A",
      "As a result, a lot of customers looked for cheaper options.",
      "az a rizâlt, a lot ov kâstomerz lukt for chíper ópchns",
      "Como resultado, muitos clientes procuraram opções mais baratas."
    ],
    [
      "L",
      "That makes sense. So what do you suggest we do?",
      "dhat méiks sens. sôu uát du iú sajést uí dú",
      "Isso faz sentido. Então o que você sugere que a gente faça?"
    ],
    [
      "A",
      "Therefore, I think we should reconsider the pricing for next quarter.",
      "dhérfor, ái thingk uí chud rikonsíder dhe práisin for nekst kuórter",
      "Portanto, eu acho que deveríamos reconsiderar o preço pro próximo trimestre."
    ]
  ],
  "connectors": [
    "That explains a lot.",
    "That makes sense.",
    "So what do you suggest?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B2 explaining ideas, work vocabulary"
    ],
    "today": [
      "This happened because of...",
      "As a result, ...",
      "Therefore, ..."
    ],
    "combo": "This happened because of the price increase — as a result, therefore, I think we should reconsider it."
  },
  "challenge": "Explain a cause and its consequence (real or made up), and suggest an action, using 'because of', 'as a result', and 'therefore'."
};

/* ================= AULA 18 — Two Sides of the Story ================= */
const LESSON_B2_18 = {
  "ready": true,
  "label": "18",
  "title": "Two Sides of the Story",
  "eyebrow": "Level B2 — Lesson 18",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise presenting both sides of an issue before giving your final view.",
  "scene": {
    "emoji": "🔄",
    "caption": "Ana presents both sides of a debate about working from home.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "On one hand, it gives more freedom.",
        "pt": "Por um lado, isso dá mais liberdade."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "And on the other hand?",
        "pt": "E por outro lado?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "On the other hand, it can feel isolating.",
        "pt": "Por outro lado, pode parecer isolador."
      }
    ]
  },
  "vocab": [
    [
      "On one hand..., on the other hand...",
      "on uán rrend..., on dhi âther rrend...",
      "Por um lado..., por outro lado...",
      "🤲",
      true
    ],
    [
      "Although it has downsides, ...",
      "óldhôu it rrez dáunsáidz",
      "Embora tenha desvantagens, ...",
      "⚠️",
      true
    ],
    [
      "Even though I disagree, I see why some think that.",
      "ívn dhôu ái disagrí, ái si uái sâm thingk dhat",
      "Mesmo discordando, eu vejo por que alguns pensam assim.",
      "👀",
      true
    ],
    [
      "There's some truth to both sides.",
      "dhérz sâm trúth tu bôuth sáidz",
      "Tem alguma verdade nos dois lados.",
      "☯️",
      true
    ],
    [
      "It's not black and white.",
      "its not blek end uáit",
      "Não é preto no branco.",
      "⚫",
      true
    ],
    [
      "Still, I lean towards one side.",
      "stíu, ái lín tuórdz uán sáid",
      "Ainda assim, eu penso pra um lado.",
      "➡️",
      true
    ],
    [
      "That's a balanced view.",
      "dhats a bálanst viú",
      "Essa é uma visão equilibrada.",
      "⚖️",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Even though I disagree, I see why some people think that.",
    "formula": "Even though / Although + CLAUSE (stronger contrast than 'but', shows you understand the other side)",
    "examples": [
      "Even though I disagree, I see why some people think that.",
      "Although it has downsides, I still support it.",
      "Even though it's difficult, it's worth trying.",
      "Although I'm not sure, I'll go along with it."
    ]
  },
  "simplify": [
    "On one hand..., on the other hand...",
    "Even though/Although + CLAUSE, + CLAUSE",
    "Still, I lean towards + THING"
  ],
  "swap": {
    "base": "On one hand, ______. On the other hand, ______.",
    "options": [
      "it gives freedom / it can feel isolating",
      "it's cheaper / it's riskier",
      "it saves time / it's less personal"
    ]
  },
  "activities": [
    [
      "Write a sentence presenting both sides of an issue.",
      "On one hand, it gives more freedom, but on the other hand, it can feel isolating.",
      "on uán rrend, it gívz mór frídom, bât on dhi âther rrend, it ken fíl áisoléitin"
    ],
    [
      "Write a sentence showing you understand an opposing view, using 'even though'.",
      "Even though I disagree, I see why some people think that.",
      "ívn dhôu ái disagrí, ái si uái sâm pípol thingk dhat"
    ],
    [
      "Write a sentence giving your final leaning after considering both sides.",
      "Still, I lean towards working from home overall.",
      "stíu, ái lín tuórdz uórkin from rrôum ôuveról"
    ]
  ],
  "dialogue": [
    [
      "L",
      "I think everyone should work from home, full stop.",
      "ái thingk évriuân chud uórk from rrôum, ful stop",
      "Eu acho que todo mundo deveria trabalhar de casa, ponto final."
    ],
    [
      "A",
      "On one hand, it gives more freedom.",
      "on uán rrend, it gívz mór frídom",
      "Por um lado, isso dá mais liberdade."
    ],
    [
      "L",
      "And on the other hand?",
      "end on dhi âther rrend",
      "E por outro lado?"
    ],
    [
      "A",
      "On the other hand, it can feel isolating for some people.",
      "on dhi âther rrend, it ken fíl áisoléitin for sâm pípol",
      "Por outro lado, pode parecer isolador pra algumas pessoas."
    ],
    [
      "L",
      "That's fair. Even though I disagree, I see why some think that.",
      "dhats fér. ívn dhôu ái disagrí, ái si uái sâm thingk dhat",
      "Isso é justo. Mesmo discordando, eu vejo por que alguns pensam assim."
    ],
    [
      "A",
      "It's not black and white. Still, I lean towards a mix of both.",
      "its not blek end uáit. stíu, ái lín tuórdz a miks ov bôuth",
      "Não é preto no branco. Ainda assim, eu penso pra uma mistura dos dois."
    ]
  ],
  "connectors": [
    "That's fair.",
    "It's not black and white.",
    "That's a balanced view."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B2 giving developed opinions"
    ],
    "today": [
      "On one hand..., on the other hand...",
      "Even though/Although..., ...",
      "Still, I lean towards..."
    ],
    "combo": "On one hand it gives freedom, on the other hand it's isolating — even though I disagree, I see why some think that."
  },
  "challenge": "Present both sides of a real debate you have an opinion on, then give your final (nuanced) view."
};

/* ================= AULA 19 — Let's Discuss It ================= */
const LESSON_B2_19 = {
  "ready": true,
  "label": "19",
  "title": "Let's Discuss It",
  "eyebrow": "Level B2 — Lesson 19",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise a real discussion: defending your position with evidence when someone challenges it.",
  "scene": {
    "emoji": "💬",
    "caption": "Leo challenges Ana's plan in a discussion, and she defends it with evidence.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Honestly, I don't think your plan makes any sense.",
        "pt": "Sinceramente, eu não acho que seu plano faz sentido nenhum."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I'd argue that it actually solves our main problem.",
        "pt": "Eu argumentaria que na verdade resolve nosso problema principal."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "That's not necessarily true, is it?",
        "pt": "Isso não é necessariamente verdade, é?"
      }
    ]
  },
  "vocab": [
    [
      "I'd argue that...",
      "áid árgiu dhat",
      "Eu argumentaria que...",
      "🗣️",
      true
    ],
    [
      "That's not necessarily true.",
      "dhats not nésesérili trú",
      "Isso não é necessariamente verdade.",
      "❌",
      true
    ],
    [
      "For example, ...",
      "for igzámpol",
      "Por exemplo, ...",
      "📌",
      true
    ],
    [
      "The evidence suggests otherwise.",
      "dhi évidens sajésts âderuáiz",
      "As evidências sugerem o contrário.",
      "📊",
      true
    ],
    [
      "Let's agree to disagree on this one.",
      "lets agrí tu disagrí on dhis uán",
      "Vamos concordar em discordar nessa.",
      "🤝",
      true
    ],
    [
      "That's a solid argument.",
      "dhats a sólid árgiument",
      "Esse é um argumento sólido.",
      "💪",
      true
    ],
    [
      "Fair enough.",
      "fér ináf",
      "Justo.",
      "👌",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I'd argue that...",
    "formula": "I'd argue that... (formal, confident way to defend a position in a discussion)",
    "examples": [
      "I'd argue that it solves our main problem.",
      "I'd argue that the evidence supports this.",
      "I'd argue that we don't have another choice.",
      "I'd argue the opposite, actually."
    ]
  },
  "simplify": [
    "I'd argue that + CLAUSE",
    "That's not necessarily true / The evidence suggests otherwise",
    "For example, + CLAUSE"
  ],
  "swap": {
    "base": "I'd argue that ______.",
    "options": [
      "it solves our main problem",
      "the evidence supports this",
      "we don't have another choice"
    ]
  },
  "activities": [
    [
      "Write a sentence defending a position formally.",
      "I'd argue that it actually solves the main problem we've had.",
      "áid árgiu dhat it ákchuali sólvz dhe méin próblem uívi red"
    ],
    [
      "Write a sentence supporting an argument with an example.",
      "For example, it already worked for a similar case last year.",
      "for igzámpol, it órredi uórkt for a símiler kéis last íer"
    ],
    [
      "Write a sentence ending a discussion respectfully.",
      "Fair enough, maybe we should just agree to disagree.",
      "fér ináf, méibi uí chud jâst agrí tu disagrí"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Honestly, I don't think your plan makes any sense.",
      "ónestli, ái dôunt thingk iór plen méiks éni sens",
      "Sinceramente, eu não acho que seu plano faz sentido nenhum."
    ],
    [
      "A",
      "I'd argue that it actually solves our main problem.",
      "áid árgiu dhat it ákchuali sólvz áur méin próblem",
      "Eu argumentaria que na verdade resolve nosso problema principal."
    ],
    [
      "L",
      "That's not necessarily true, is it?",
      "dhats not nésesérili trú, iz it",
      "Isso não é necessariamente verdade, é?"
    ],
    [
      "A",
      "Well, for example, it already worked for a similar case last year.",
      "uél, for igzámpol, it órredi uórkt for a símiler kéis last íer",
      "Bem, por exemplo, já funcionou pra um caso parecido ano passado."
    ],
    [
      "L",
      "That's a solid argument, actually.",
      "dhats a sólid árgiument, ákchuali",
      "Esse é um argumento sólido, na verdade."
    ],
    [
      "A",
      "Fair enough, maybe we should just agree to disagree on the rest.",
      "fér ináf, méibi uí chud jâst agrí tu disagrí on dhe rest",
      "Justo, talvez a gente devesse só concordar em discordar do resto."
    ]
  ],
  "connectors": [
    "Honestly, ...",
    "That's a solid argument.",
    "Fair enough."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B2 agree/disagree, giving reasons"
    ],
    "today": [
      "I'd argue that...",
      "That's not necessarily true.",
      "For example, ..."
    ],
    "combo": "I'd argue that it solves the problem — for example, it already worked before, but let's agree to disagree on the rest."
  },
  "challenge": "Have a real discussion (real or made up) where someone challenges your view, and defend it with an example."
};

/* ================= AULA 20 — Speak Your Mind ================= */
const LESSON_B2_20 = {
  "ready": true,
  "label": "20",
  "title": "Speak Your Mind",
  "eyebrow": "Level B2 — Lesson 20",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Everything from World 4 together: give a developed opinion, explain causes, see both sides, and defend your view.",
  "scene": {
    "emoji": "🎙️",
    "caption": "Ana is asked for her honest, complete opinion about AI in everyday life.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What's your honest opinion about AI in everyday life?",
        "pt": "Qual é sua opinião sincera sobre IA no dia a dia?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "If you ask me, I have mixed feelings about it.",
        "pt": "Se você me perguntar, eu tenho sentimentos mistos sobre isso."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "But doesn't that worry you at all?",
        "pt": "Mas isso não te preocupa nada?"
      }
    ]
  },
  "vocab": [
    [
      "If you ask me, ...",
      "if iú esk mí",
      "Se você me perguntar, ...",
      "🙋",
      true
    ],
    [
      "I have mixed feelings about that.",
      "ái rrev míkst fílings abáut dhat",
      "Eu tenho sentimentos mistos sobre isso.",
      "🌗",
      true
    ],
    [
      "At the end of the day, ...",
      "at dhi end ov dhe déi",
      "No final das contas, ...",
      "🌅",
      true
    ],
    [
      "That does raise real questions, though.",
      "dhat dâz réiz ríal kuéschnz, dhôu",
      "Isso realmente levanta questões reais, porém.",
      "❓",
      true
    ],
    [
      "I'd argue the benefits outweigh the risks.",
      "áid árgiu dhe bénifits áutuéi dhe risks",
      "Eu argumentaria que os benefícios superam os riscos.",
      "⚖️",
      true
    ],
    [
      "It's a double-edged sword.",
      "its a dâbl-ejd sord",
      "É uma faca de dois gumes.",
      "⚔️",
      true
    ],
    [
      "That's a really balanced take.",
      "dhats a ríli bálanst téik",
      "Essa é uma opinião bem equilibrada.",
      "⚖️",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "It's a double-edged sword.",
    "formula": "Idiom review: 'double-edged sword' (something with both good and bad sides) — natural way to summarise a balanced opinion",
    "examples": [
      "It's a double-edged sword.",
      "That's a double-edged sword, honestly.",
      "Technology can be a double-edged sword."
    ]
  },
  "simplify": [
    "If you ask me, ...",
    "At the end of the day, ...",
    "It's a double-edged sword"
  ],
  "swap": {
    "base": "At the end of the day, ______.",
    "options": [
      "I'd argue the benefits outweigh the risks",
      "it's a double-edged sword",
      "it depends on how we use it"
    ]
  },
  "activities": [
    [
      "Write a sentence giving a full, developed opinion on a topic.",
      "If you ask me, I have mixed feelings, but at the end of the day, the benefits outweigh the risks.",
      "if iú esk mí, ái rrev míkst fílings, bât at dhi end ov dhe déi, dhe bénifits áutuéi dhe risks"
    ],
    [
      "Write a sentence acknowledging the downside of your own opinion.",
      "That does raise real questions, though, about privacy.",
      "dhat dâz réiz ríal kuéschnz, dhôu, abáut práivasi"
    ],
    [
      "Write a sentence summarising your view as a 'double-edged sword'.",
      "Overall, it's a double-edged sword — useful but risky.",
      "ôuveról, its a dâbl-ejd sord — iúsful bât ríski"
    ]
  ],
  "dialogue": [
    [
      "L",
      "What's your honest opinion about AI in everyday life?",
      "uáts iór ónest opínion abáut éi-ái in évridéi láif",
      "Qual é sua opinião sincera sobre IA no dia a dia?"
    ],
    [
      "A",
      "If you ask me, I have mixed feelings about it.",
      "if iú esk mí, ái rrev míkst fílings abáut it",
      "Se você me perguntar, eu tenho sentimentos mistos sobre isso."
    ],
    [
      "L",
      "But doesn't that worry you at all?",
      "bât dâznt dhat uóri iú at ól",
      "Mas isso não te preocupa nada?"
    ],
    [
      "A",
      "That does raise real questions, though, especially about jobs.",
      "dhat dâz réiz ríal kuéschnz, dhôu, ispéchali abáut jobz",
      "Isso realmente levanta questões reais, porém, especialmente sobre empregos."
    ],
    [
      "L",
      "So overall, are you for it or against it?",
      "sôu ôuveról, ar iú for it or agénst it",
      "Então no geral, você é a favor ou contra?"
    ],
    [
      "A",
      "At the end of the day, it's a double-edged sword, but I'd argue the benefits outweigh the risks.",
      "at dhi end ov dhe déi, its a dâbl-ejd sord, bât áid árgiu dhe bénifits áutuéi dhe risks",
      "No final das contas, é uma faca de dois gumes, mas eu argumentaria que os benefícios superam os riscos."
    ]
  ],
  "connectors": [
    "But doesn't that worry you?",
    "So overall, ...",
    "That's a really balanced take."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "All World 4 structures: opinions, cause/effect, two sides, discussion"
    ],
    "today": [
      "If you ask me, ...",
      "At the end of the day, ...",
      "It's a double-edged sword"
    ],
    "combo": "If you ask me, it's a double-edged sword — at the end of the day, I'd argue the benefits outweigh the risks."
  },
  "challenge": "Give a complete, balanced opinion on a real topic: acknowledge the downside, and give your final, defended view."
};


/* ================= WORLD 5 | LIFE OUTSIDE THE CLASSROOM ================= */
/* ================= AULA 21 — Travel Problems ================= */
const LESSON_B2_21 = {
  "ready": true,
  "label": "21",
  "title": "Travel Problems",
  "eyebrow": "Level B2 — Lesson 21",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's talk about things going wrong during travel, using the passive voice naturally.",
  "scene": {
    "emoji": "✈️",
    "caption": "Ana tells Leo about a problem that happened during her last trip.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "While I was waiting for my connection, my bag was stolen.",
        "pt": "Enquanto eu esperava minha conexão, minha mala foi roubada."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Oh no! What did you do?",
        "pt": "Ah não! O que você fez?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Fortunately, airport security found it about an hour later.",
        "pt": "Felizmente, a segurança do aeroporto encontrou ela cerca de uma hora depois."
      }
    ]
  },
  "vocab": [
    [
      "My bag was stolen.",
      "mái beg uóz stôuld",
      "Minha mala foi roubada.",
      "🧳",
      true
    ],
    [
      "My flight got cancelled at the last minute.",
      "mái fláit got kánseld at dhe last mínit",
      "Meu voo foi cancelado no último minuto.",
      "🚫",
      true
    ],
    [
      "I'd never experienced anything like it.",
      "áid néver ikspíriensd énithing láik it",
      "Eu nunca tinha vivido nada parecido.",
      "😳",
      true
    ],
    [
      "Fortunately, it got sorted out.",
      "fórchunatli, it got sórtid áut",
      "Felizmente, foi resolvido.",
      "🍀",
      true
    ],
    [
      "It turned into quite an ordeal.",
      "it térnd íntu kuáit an ordíl",
      "Virou uma verdadeira provação.",
      "😩",
      true
    ],
    [
      "Looking back, it wasn't that bad.",
      "lúkin bek, it uóznt dhat bed",
      "Olhando pra trás, não foi tão ruim.",
      "🔙",
      true
    ],
    [
      "What a nightmare!",
      "uát a náitmér",
      "Que pesadelo!",
      "😱",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "While I was waiting for my connection, my bag was stolen.",
    "formula": "Passive voice: was/were + past participle (the thing that happened matters more than who did it)",
    "examples": [
      "My bag was stolen.",
      "My flight was cancelled.",
      "The hotel booking was lost.",
      "Our luggage was delayed."
    ]
  },
  "simplify": [
    "While I was + VERB-ing, + THING + was/got + PAST PARTICIPLE",
    "I'd never experienced + THING",
    "Fortunately, it got sorted out"
  ],
  "swap": {
    "base": "My ______ was/got ______.",
    "options": [
      "bag / stolen",
      "flight / cancelled",
      "luggage / delayed",
      "booking / lost"
    ]
  },
  "activities": [
    [
      "Write a sentence about something that happened during a trip, using the passive voice.",
      "My bag was stolen while I was waiting for my connection.",
      "mái beg uóz stôuld uáil ái uóz uéitin for mái konékchn"
    ],
    [
      "Write a sentence about how unusual the situation was.",
      "I'd never experienced anything like it before.",
      "áid néver ikspíriensd énithing láik it bifór"
    ],
    [
      "Write a sentence about how it got resolved.",
      "Fortunately, it got sorted out within an hour.",
      "fórchunatli, it got sórtid áut uidhín en áuer"
    ]
  ],
  "dialogue": [
    [
      "A",
      "While I was waiting for my connection, my bag was stolen.",
      "uáil ái uóz uéitin for mái konékchn, mái beg uóz stôuld",
      "Enquanto eu esperava minha conexão, minha mala foi roubada."
    ],
    [
      "L",
      "Oh no! What did you do?",
      "ôu nôu! uát did iú dú",
      "Ah não! O que você fez?"
    ],
    [
      "A",
      "I'd never experienced anything like it — I panicked a bit.",
      "áid néver ikspíriensd énithing láik it — ái pánikt a bit",
      "Eu nunca tinha vivido nada parecido — eu entrei em pânico um pouco."
    ],
    [
      "L",
      "That's a nightmare! Did you get it back?",
      "dhats a náitmér! did iú guét it bek",
      "Que pesadelo! Você conseguiu de volta?"
    ],
    [
      "A",
      "Fortunately, airport security found it about an hour later.",
      "fórchunatli, érport sekiúriti fáund it abáut en áuer léiter",
      "Felizmente, a segurança do aeroporto encontrou ela cerca de uma hora depois."
    ],
    [
      "L",
      "That's a relief. Looking back, it wasn't that bad then.",
      "dhats a rilíf. lúkin bek, it uóznt dhat bed dhen",
      "Que alívio. Olhando pra trás, não foi tão ruim então."
    ]
  ],
  "connectors": [
    "Oh no!",
    "That's a nightmare!",
    "That's a relief."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 travel & holidays"
    ],
    "today": [
      "My... was stolen/cancelled.",
      "I'd never experienced...",
      "Fortunately, it got sorted out"
    ],
    "combo": "My bag was stolen while I was waiting — I'd never experienced anything like it, but fortunately, it got sorted out."
  },
  "challenge": "Tell a travel-problem story (real or made up), using the passive voice for what happened, and how it got resolved."
};

/* ================= AULA 22 — Living Abroad ================= */
const LESSON_B2_22 = {
  "ready": true,
  "label": "22",
  "title": "Living Abroad",
  "eyebrow": "Level B2 — Lesson 22",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's talk about the deeper experience of adapting to life in another country.",
  "scene": {
    "emoji": "🌎",
    "caption": "Leo asks Ana what it's really like to live as a foreigner, and she reflects honestly.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What's it really like, living here as a foreigner?",
        "pt": "Como é de verdade, viver aqui como estrangeira?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "It wasn't easy at first, but I got used to it.",
        "pt": "Não foi fácil no início, mas eu me acostumei."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What was the hardest part?",
        "pt": "Qual foi a parte mais difícil?"
      }
    ]
  },
  "vocab": [
    [
      "It wasn't easy at first, but I got used to it.",
      "it uóznt ízi at férst, bât ái got iúzd tu it",
      "Não foi fácil no início, mas eu me acostumei.",
      "🌱",
      true
    ],
    [
      "The hardest part was the bureaucracy.",
      "dhe rrárdest part uóz dhe biurókrasi",
      "A parte mais difícil foi a burocracia.",
      "📋",
      true
    ],
    [
      "The neighbourhood where I live now is different.",
      "dhe néiborrud uér ái liv náu iz díferent",
      "O bairro onde eu moro agora é diferente.",
      "🏘️",
      true
    ],
    [
      "I used to think it would be simple.",
      "ái iúzd tu thingk it uúd bí símpol",
      "Eu costumava achar que seria simples.",
      "💭",
      true
    ],
    [
      "Now it feels like home.",
      "náu it fíls láik rrôum",
      "Agora parece minha casa.",
      "🏡",
      true
    ],
    [
      "It's a slow process, honestly.",
      "its a slôu próses, ónestli",
      "É um processo lento, sinceramente.",
      "🐢",
      true
    ],
    [
      "That's such an honest answer.",
      "dhats sâch en ónest ánser",
      "Essa é uma resposta bem sincera.",
      "💬",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "The neighbourhood where I live now is different.",
    "formula": "Relative clauses with 'where' (adding detail about places without a new sentence)",
    "examples": [
      "The neighbourhood where I live now is different.",
      "The city where I grew up was smaller.",
      "This is the office where I first worked.",
      "That's the café where we met."
    ]
  },
  "simplify": [
    "It wasn't easy at first, but I got used to it",
    "The + PLACE + where + CLAUSE",
    "I used to think..., but now..."
  ],
  "swap": {
    "base": "The hardest part was ______.",
    "options": [
      "the bureaucracy",
      "the language",
      "missing my family",
      "making new friends"
    ]
  },
  "activities": [
    [
      "Write a sentence about adjusting to something difficult, using 'get used to'.",
      "It wasn't easy at first, but I got used to the bureaucracy.",
      "it uóznt ízi at férst, bât ái got iúzd tu dhe biurókrasi"
    ],
    [
      "Write a sentence describing a place using a relative clause with 'where'.",
      "The neighbourhood where I live now feels completely different.",
      "dhe néiborrud uér ái liv náu fíls kompliitli díferent"
    ],
    [
      "Write a sentence contrasting what you used to think with how you feel now.",
      "I used to think it would be simple, but now it feels like home.",
      "ái iúzd tu thingk it uúd bí símpol, bât náu it fíls láik rrôum"
    ]
  ],
  "dialogue": [
    [
      "L",
      "What's it really like, living here as a foreigner?",
      "uáts it ríli láik, lívin rrír az a fórener",
      "Como é de verdade, viver aqui como estrangeira?"
    ],
    [
      "A",
      "It wasn't easy at first, but I got used to it.",
      "it uóznt ízi at férst, bât ái got iúzd tu it",
      "Não foi fácil no início, mas eu me acostumei."
    ],
    [
      "L",
      "What was the hardest part?",
      "uát uóz dhe rrárdest part",
      "Qual foi a parte mais difícil?"
    ],
    [
      "A",
      "The hardest part was the bureaucracy, honestly.",
      "dhe rrárdest part uóz dhe biurókrasi, ónestli",
      "A parte mais difícil foi a burocracia, sinceramente."
    ],
    [
      "L",
      "I can imagine. Does it feel like home now?",
      "ái ken imájin. dâz it fíl láik rrôum náu",
      "Eu imagino. Parece sua casa agora?"
    ],
    [
      "A",
      "It does. The neighbourhood where I live now feels completely different from when I arrived.",
      "it dâz. dhe néiborrud uér ái liv náu fíls kompliitli díferent from uén ái aráivd",
      "Parece sim. O bairro onde eu moro agora parece completamente diferente de quando eu cheguei."
    ]
  ],
  "connectors": [
    "I can imagine.",
    "Does it feel like home now?",
    "That's such an honest answer."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 living abroad, A1/A2 immigration vocabulary"
    ],
    "today": [
      "It wasn't easy, but I got used to it.",
      "The place where I live...",
      "I used to think..., but now..."
    ],
    "combo": "It wasn't easy at first, but I got used to it — the place where I live now finally feels like home."
  },
  "challenge": "Reflect on adapting to a new place (real or imagined): the hardest part, and how it feels now compared to before."
};

/* ================= AULA 23 — Money & Services ================= */
const LESSON_B2_23 = {
  "ready": true,
  "label": "23",
  "title": "Money & Services",
  "eyebrow": "Level B2 — Lesson 23",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's talk about banking, contracts, and services — using quantifiers precisely.",
  "scene": {
    "emoji": "💰",
    "caption": "Ana is dealing with an issue with her bank account.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I think I've paid too much in fees this month.",
        "pt": "Eu acho que paguei taxas demais esse mês."
      },
      {
        "who": "L",
        "speaker": "Leo (bank staff)",
        "en": "Let me check. What exactly did you notice?",
        "pt": "Deixa eu verificar. O que exatamente você notou?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "There isn't enough detail in my statement to explain it.",
        "pt": "Não tem detalhe suficiente no meu extrato pra explicar isso."
      }
    ]
  },
  "vocab": [
    [
      "I've paid too much in fees.",
      "áivi péid tú mâtch in fíz",
      "Eu paguei taxas demais.",
      "💸",
      true
    ],
    [
      "There isn't enough detail in the statement.",
      "dhér íznt ináf ditéil in dhe stéitment",
      "Não tem detalhe suficiente no extrato.",
      "📄",
      true
    ],
    [
      "There are fewer options than I expected.",
      "dhér ar fiúer ópchns dhan ái ikspéktid",
      "Tem menos opções do que eu esperava.",
      "📉",
      true
    ],
    [
      "Could you look into it and let me know?",
      "kud iú luk íntu it end let mí nôu",
      "Você poderia investigar e me avisar?",
      "🔍",
      true
    ],
    [
      "That doesn't add up.",
      "dhat dâznt red ap",
      "Isso não bate as contas.",
      "🧮",
      true
    ],
    [
      "I'd like this resolved as soon as possible.",
      "áid láik dhis rizólvd az sún az pósibl",
      "Eu gostaria que isso fosse resolvido o quanto antes.",
      "⏱️",
      true
    ],
    [
      "I appreciate your help with this.",
      "ái aprísiéit iór rrelp uíth dhis",
      "Eu agradeço sua ajuda com isso.",
      "🙏",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "There isn't enough detail in the statement.",
    "formula": "enough (sufficient quantity) vs too much/too many (excessive) vs fewer/less (insufficient)",
    "examples": [
      "There isn't enough detail.",
      "I've paid too much in fees.",
      "There are fewer options than expected.",
      "There's too little information here."
    ]
  },
  "simplify": [
    "I've paid too much in + THING",
    "There isn't enough + THING",
    "There are fewer + PLURAL THING"
  ],
  "swap": {
    "base": "There isn't enough ______.",
    "options": [
      "detail",
      "information",
      "time",
      "support"
    ]
  },
  "activities": [
    [
      "Write a sentence about paying too much for something.",
      "I think I've paid too much in fees this month.",
      "ái thingk áivi péid tú mâtch in fíz dhis mânth"
    ],
    [
      "Write a sentence about something not having enough detail.",
      "There isn't enough detail in my statement to explain the charge.",
      "dhér íznt ináf ditéil in mái stéitment tu iksplén dhe chárj"
    ],
    [
      "Write a sentence asking someone to look into a problem.",
      "Could you look into it and let me know what happened?",
      "kud iú luk íntu it end let mí nôu uát rrépend"
    ]
  ],
  "dialogue": [
    [
      "A",
      "I think I've paid too much in fees this month.",
      "ái thingk áivi péid tú mâtch in fíz dhis mânth",
      "Eu acho que paguei taxas demais esse mês."
    ],
    [
      "L",
      "Let me check. What exactly did you notice?",
      "let mí chek. uát ikzáktli did iú nôutis",
      "Deixa eu verificar. O que exatamente você notou?"
    ],
    [
      "A",
      "There isn't enough detail in my statement to explain it.",
      "dhér íznt ináf ditéil in mái stéitment tu iksplén it",
      "Não tem detalhe suficiente no meu extrato pra explicar isso."
    ],
    [
      "L",
      "I see what you mean, that doesn't add up. Let me investigate.",
      "ái si uát iú mín, dhat dâznt red ap. let mí investigéit",
      "Eu entendo o que você quer dizer, isso não bate. Deixa eu investigar."
    ],
    [
      "A",
      "I'd appreciate that. I'd like this resolved as soon as possible.",
      "áid aprísiéit dhat. áid láik dhis rizólvd az sún az pósibl",
      "Eu agradeceria isso. Eu gostaria que isso fosse resolvido o quanto antes."
    ],
    [
      "L",
      "Of course. I'll get back to you by tomorrow.",
      "ov kórs. áiu guét bek tu iú bái tumórou",
      "Claro. Eu volto a falar com você até amanhã."
    ]
  ],
  "connectors": [
    "Let me check.",
    "I see what you mean.",
    "Of course."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 money & shopping"
    ],
    "today": [
      "I've paid too much in...",
      "There isn't enough...",
      "That doesn't add up."
    ],
    "combo": "There isn't enough detail — I think I've paid too much in fees, and that doesn't add up."
  },
  "challenge": "Explain a real or made-up issue with money or a service, using 'too much', 'enough', or 'fewer' precisely."
};

/* ================= AULA 24 — Social Life ================= */
const LESSON_B2_24 = {
  "ready": true,
  "label": "24",
  "title": "Social Life",
  "eyebrow": "Level B2 — Lesson 24",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's practise inviting people and making social plans at a more natural, B2 level.",
  "scene": {
    "emoji": "👥",
    "caption": "Leo invites Ana to something, and they figure out the details together.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "A few of us are getting together this weekend, you should come.",
        "pt": "Um grupo vai se reunir esse fim de semana, você devia vir."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I'd love to! Who's going to be there?",
        "pt": "Eu adoraria! Quem vai estar lá?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Mostly people from work, it'll be pretty relaxed.",
        "pt": "Principalmente gente do trabalho, vai ser bem tranquilo."
      }
    ]
  },
  "vocab": [
    [
      "A few of us are getting together.",
      "a fiú ov âs ar guétin tugédher",
      "Um grupo de nós vai se reunir.",
      "👥",
      true
    ],
    [
      "You should come, it'll be fun.",
      "iú chud kâm, itl bí fân",
      "Você devia vir, vai ser divertido.",
      "🎉",
      true
    ],
    [
      "I'd love to, count me in!",
      "áid lâv tu, káunt mí in",
      "Eu adoraria, pode contar comigo!",
      "✅",
      true
    ],
    [
      "I might not be able to make it.",
      "ái máit not bí éibol tu méik it",
      "Eu talvez não consiga ir.",
      "😕",
      true
    ],
    [
      "Let me check my schedule and get back to you.",
      "let mí chek mái skédiul end guét bek tu iú",
      "Deixa eu checar minha agenda e te aviso.",
      "📅",
      true
    ],
    [
      "It'll be pretty low-key.",
      "itl bí préti lôu-kí",
      "Vai ser bem tranquilo/informal.",
      "😌",
      true
    ],
    [
      "Looking forward to it!",
      "lúkin fórwerd tu it",
      "Ansioso(a) pra isso!",
      "😊",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I might not be able to make it.",
    "formula": "might + not + VERB (uncertain about future ability/availability)",
    "examples": [
      "I might not be able to make it.",
      "I might be a bit late.",
      "I might not have time this week.",
      "I might join later."
    ]
  },
  "simplify": [
    "A few of us are + VERB-ing",
    "I'd love to, count me in! / I might not be able to make it",
    "Let me check and get back to you"
  ],
  "swap": {
    "base": "I might ______.",
    "options": [
      "not be able to make it",
      "be a bit late",
      "join later"
    ]
  },
  "activities": [
    [
      "Write a sentence inviting someone to a casual get-together.",
      "A few of us are getting together this weekend, you should come.",
      "a fiú ov âs ar guétin tugédher dhis uíkend, iú chud kâm"
    ],
    [
      "Write a sentence enthusiastically accepting an invitation.",
      "I'd love to, count me in!",
      "áid lâv tu, káunt mí in"
    ],
    [
      "Write a sentence expressing uncertainty about attending, using 'might'.",
      "I might not be able to make it, but I'll try.",
      "ái máit not bí éibol tu méik it, bât áiu trái"
    ]
  ],
  "dialogue": [
    [
      "L",
      "A few of us are getting together this weekend, you should come.",
      "a fiú ov âs ar guétin tugédher dhis uíkend, iú chud kâm",
      "Um grupo vai se reunir esse fim de semana, você devia vir."
    ],
    [
      "A",
      "I'd love to! Who's going to be there?",
      "áid lâv tu! rrúz gôuin tu bí dhér",
      "Eu adoraria! Quem vai estar lá?"
    ],
    [
      "L",
      "Mostly people from work, it'll be pretty low-key.",
      "môustli pípol from uórk, itl bí préti lôu-kí",
      "Principalmente gente do trabalho, vai ser bem tranquilo."
    ],
    [
      "A",
      "Sounds great. I might be a bit late, though.",
      "sáunds gréit. ái máit bí a bit léit, dhôu",
      "Parece ótimo. Eu talvez chegue um pouco atrasada, porém."
    ],
    [
      "L",
      "No worries at all, just come whenever.",
      "nôu uóriz at ól, jâst kâm uenéver",
      "Sem problema nenhum, só vem quando puder."
    ],
    [
      "A",
      "Perfect, looking forward to it!",
      "pérfekt, lúkin fórwerd tu it",
      "Perfeito, ansiosa pra isso!"
    ]
  ],
  "connectors": [
    "Sounds great.",
    "No worries at all.",
    "Perfect!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "B1 making plans with someone"
    ],
    "today": [
      "A few of us are...",
      "I'd love to, count me in!",
      "I might not be able to..."
    ],
    "combo": "A few of us are getting together — I'd love to, though I might be a bit late."
  },
  "challenge": "Invite someone to a real or made-up get-together, and handle a bit of uncertainty about attending."
};

/* ================= AULA 25 — Unexpected Situations ================= */
const LESSON_B2_25 = {
  "ready": true,
  "label": "25",
  "title": "Unexpected Situations",
  "eyebrow": "Level B2 — Lesson 25",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Life abroad doesn't always go as planned. Let's learn how to stay calm and communicate clearly when something completely unexpected happens.",
  "scene": {
    "emoji": "🌀",
    "caption": "Ana's flight home got cancelled last minute, and she has to improvise a new plan on the spot.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I really didn't see this coming — my flight's been cancelled.",
        "pt": "Eu realmente não esperava isso — meu voo foi cancelado."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "That's rough. What are you going to do?",
        "pt": "Que chato. O que você vai fazer?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I'm still figuring it out, but I can't just sit here and panic.",
        "pt": "Eu ainda estou descobrindo, mas não posso simplesmente ficar aqui em pânico."
      }
    ]
  },
  "vocab": [
    [
      "I really didn't see this coming.",
      "ái ríli dídnt sí dhis kâmin",
      "Eu realmente não esperava isso.",
      "😳",
      true
    ],
    [
      "I have to think on my feet.",
      "ái rrev tu thingk on mái fít",
      "Eu tenho que pensar rápido.",
      "🧠",
      true
    ],
    [
      "Let's not panic, let's think this through.",
      "lets not pánik, lets thingk dhis thrú",
      "Vamos não entrar em pânico, vamos pensar bem sobre isso.",
      "😤",
      true
    ],
    [
      "Whatever happens, we'll figure it out.",
      "uatéver rrápenz, uíu fígier it áut",
      "O que quer que aconteça, a gente vai dar um jeito.",
      "💪",
      true
    ],
    [
      "I wasn't prepared for this at all.",
      "ái uóznt prepérd for dhis at ól",
      "Eu não estava nada preparada pra isso.",
      "😩",
      true
    ],
    [
      "Let's come up with a backup plan.",
      "lets kâm âp uíth a bákâp plen",
      "Vamos criar um plano B.",
      "🔄",
      true
    ],
    [
      "It could have been worse.",
      "it kud rrev bín uórs",
      "Podia ter sido pior.",
      "😌",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I really didn't see this coming, but let's not panic — let's think this through.",
    "formula": "let's + VERB (propor calma/ação em grupo) + whatever + happens/we do (aceitar a incerteza)",
    "examples": [
      "I really didn't see this coming.",
      "Let's not panic, let's think this through.",
      "Whatever happens, we'll figure it out.",
      "Let's come up with a backup plan, just in case."
    ]
  },
  "simplify": [
    "I didn't see this coming.",
    "Let's not panic, let's...",
    "Whatever happens, we'll..."
  ],
  "swap": {
    "base": "Whatever happens, we'll ______.",
    "options": [
      "✈️ find another flight",
      "🏨 find somewhere to stay",
      "📞 call someone who can help",
      "💳 sort out the money later",
      "🗺️ figure out a new plan"
    ]
  },
  "activities": [
    [
      "Write a sentence reacting to unexpected bad news, staying calm.",
      "I really didn't see this coming, but let's not panic.",
      "ái ríli dídnt sí dhis kâmin, bât lets not pánik"
    ],
    [
      "Write a sentence proposing a backup plan.",
      "Let's come up with a backup plan, just in case.",
      "lets kâm âp uíth a bákâp plen, jâst in kéis"
    ],
    [
      "Write a sentence about handling uncertainty.",
      "Whatever happens, we'll figure it out somehow.",
      "uatéver rrápenz, uíu fígier it áut sâmráu"
    ]
  ],
  "dialogue": [
    [
      "A",
      "I really didn't see this coming — my flight's been cancelled.",
      "ái ríli dídnt sí dhis kâmin — mái fláits bín kánseld",
      "Eu realmente não esperava isso — meu voo foi cancelado."
    ],
    [
      "L",
      "That's rough. What are you going to do?",
      "dhats râf. uát ár iú gôuin tu du",
      "Que chato. O que você vai fazer?"
    ],
    [
      "A",
      "I'm still figuring it out, but I can't just sit here and panic.",
      "áim stil fígierin it áut, bât ái kant jâst sit rrír end pánik",
      "Eu ainda estou descobrindo, mas não posso simplesmente ficar aqui em pânico."
    ],
    [
      "L",
      "Let's think this through together. Is there another airline?",
      "lets thingk dhis thrú tugédher. iz dhér anâdher érláin",
      "Vamos pensar bem sobre isso juntos. Tem outra companhia aérea?"
    ],
    [
      "A",
      "Maybe. Let's come up with a backup plan, just in case there isn't.",
      "méibi. lets kâm âp uíth a bákâp plen, jâst in kéis dhér íznt",
      "Talvez. Vamos criar um plano B, só por precaução, caso não tenha."
    ],
    [
      "L",
      "Whatever happens, we'll figure it out. It could have been worse.",
      "uatéver rrápenz, uíu fígier it áut. it kud rrev bín uórs",
      "O que quer que aconteça, a gente vai dar um jeito. Podia ter sido pior."
    ]
  ],
  "connectors": [
    "I really didn't see this coming.",
    "Let's not panic.",
    "It could have been worse."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I have a problem with...",
      "There's no.../There's a...",
      "Can you come and take a look?"
    ],
    "today": [
      "I didn't see this coming.",
      "Let's not panic, let's...",
      "Whatever happens, we'll..."
    ],
    "combo": "Whatever happens, we'll figure it out — that's the mindset that gets you through unexpected situations abroad."
  },
  "challenge": "🌎 WORLD 5 COMPLETE — Mission: something completely unexpected happens during a trip or while living abroad. Stay calm, explain the situation, and improvise a plan with someone, using 'let's' and 'whatever happens'."
};


/* ================= WORLD 6 | STORIES & NATURAL ENGLISH ================= */
/* ================= AULA 26 — Tell Me What Happened ================= */
const LESSON_B2_26 = {
  "ready": true,
  "label": "26",
  "title": "Tell Me What Happened",
  "eyebrow": "Level B2 — Lesson 26",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's tell a detailed story — not just the facts, but the atmosphere, the feelings, and the small details that make it interesting.",
  "scene": {
    "emoji": "🎬",
    "caption": "Leo is telling Ana a detailed story about something that happened to him last week.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "So get this — you won't believe what happened to me last week.",
        "pt": "Então olha só — você não vai acreditar no que aconteceu comigo semana passada."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Go on, I'm listening.",
        "pt": "Pode continuar, estou ouvindo."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I was walking to work, completely lost in thought, when I bumped into my old boss.",
        "pt": "Eu estava indo a pé pro trabalho, completamente distraído, quando esbarrei com meu antigo chefe."
      }
    ]
  },
  "vocab": [
    [
      "You won't believe what happened.",
      "iú uôunt bilív uát rrápend",
      "Você não vai acreditar o que aconteceu.",
      "😲",
      true
    ],
    [
      "I was completely lost in thought.",
      "ái uóz kompl​ítli lost in thót",
      "Eu estava completamente distraído.",
      "💭",
      true
    ],
    [
      "Out of nowhere, ...",
      "áut âv nôuér",
      "Do nada, ...",
      "💥",
      true
    ],
    [
      "To make things even stranger, ...",
      "tu méik things ívn stréinjer",
      "Pra deixar as coisas ainda mais estranhas, ...",
      "🌀",
      true
    ],
    [
      "I couldn't believe what I was seeing.",
      "ái kúdnt bilív uát ái uóz síin",
      "Eu não conseguia acreditar no que estava vendo.",
      "😳",
      true
    ],
    [
      "Looking back, it was actually funny.",
      "lúkin bák, it uóz áktiuali fâni",
      "Olhando pra trás, foi na verdade engraçado.",
      "😄",
      true
    ],
    [
      "Go on, I'm listening.",
      "gôu on, áim lísenin",
      "Pode continuar, estou ouvindo.",
      "👂",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I was completely lost in thought when, out of nowhere, I bumped into my old boss.",
    "formula": "Past Continuous (cenário) + out of nowhere / to make things even stranger (conectores narrativos que criam suspense)",
    "examples": [
      "I was walking home, completely lost in thought.",
      "Out of nowhere, someone called my name.",
      "To make things even stranger, it was someone I hadn't seen in years.",
      "Looking back, it was actually pretty funny."
    ]
  },
  "simplify": [
    "I was + VERB-ing, completely + ADJ",
    "Out of nowhere, ...",
    "To make things even stranger, ..."
  ],
  "swap": {
    "base": "Out of nowhere, ______.",
    "options": [
      "👋 someone called my name",
      "🌧️ it started pouring rain",
      "📱 my phone started ringing",
      "🚗 a car pulled up next to me",
      "🎁 they handed me a gift"
    ]
  },
  "activities": [
    [
      "Write a sentence setting the scene for a story.",
      "I was completely lost in thought, walking to work.",
      "ái uóz kompl​ítli lost in thót, uókin tu uérk"
    ],
    [
      "Write a sentence using 'out of nowhere' to create suspense.",
      "Out of nowhere, someone called my name.",
      "áut âv nôuér, sâmuân kóld mái néim"
    ],
    [
      "Write a sentence reflecting on a story afterwards.",
      "Looking back, it was actually pretty funny.",
      "lúkin bák, it uóz áktiuali príti fâni"
    ]
  ],
  "dialogue": [
    [
      "L",
      "So get this — you won't believe what happened to me last week.",
      "sôu guét dhis — iú uôunt bilív uát rrápend tu mí lást uík",
      "Então olha só — você não vai acreditar no que aconteceu comigo semana passada."
    ],
    [
      "A",
      "Go on, I'm listening.",
      "gôu on, áim lísenin",
      "Pode continuar, estou ouvindo."
    ],
    [
      "L",
      "I was walking to work, completely lost in thought, when I bumped into my old boss.",
      "ái uóz uókin tu uérk, kompl​ítli lost in thót, uén ái bâmpt íntu mái ôuld bos",
      "Eu estava indo a pé pro trabalho, completamente distraído, quando esbarrei com meu antigo chefe."
    ],
    [
      "A",
      "No way! What did she say?",
      "nôu uéi! uát did chi séi",
      "Não acredito! O que ela disse?"
    ],
    [
      "L",
      "Out of nowhere, she offered me my old job back. To make things even stranger, it's a better position now.",
      "áut âv nôuér, chi óferd mí mái ôuld job bák. tu méik things ívn stréinjer, its a béter pozíchn náu",
      "Do nada, ela me ofereceu meu antigo emprego de volta. Pra deixar as coisas ainda mais estranhas, agora é uma posição melhor."
    ],
    [
      "A",
      "Wow, looking back, that timing was perfect!",
      "uáu, lúkin bák, dhat táimin uóz pérfekt",
      "Nossa, olhando pra trás, esse timing foi perfeito!"
    ]
  ],
  "connectors": [
    "Go on, I'm listening.",
    "No way!",
    "Looking back, ..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I didn't see this coming.",
      "Let's not panic, let's...",
      "Whatever happens, we'll..."
    ],
    "today": [
      "Out of nowhere, ...",
      "To make things even stranger, ...",
      "Looking back, ..."
    ],
    "combo": "Whatever happened, tell me what happened — I was completely lost in thought when, out of nowhere, everything changed."
  },
  "challenge": "Record yourself telling a detailed story about something that happened to you, using 'out of nowhere' and 'to make things even stranger'."
};

/* ================= AULA 27 — Then What Happened? ================= */
const LESSON_B2_27 = {
  "ready": true,
  "label": "27",
  "title": "Then What Happened?",
  "eyebrow": "Level B2 — Lesson 27",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to keep a story moving — showing sequence, giving context, and explaining the consequences of what happened.",
  "scene": {
    "emoji": "⏭️",
    "caption": "Ana is telling a story, and Leo keeps asking what happened next.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "So after the meeting fell apart, I had to think fast.",
        "pt": "Então depois que a reunião desandou, eu tive que pensar rápido."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Then what happened?",
        "pt": "Então o que aconteceu?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "First I called the client to apologize. As a result, they agreed to reschedule.",
        "pt": "Primeiro eu liguei pro cliente pra pedir desculpas. Como resultado, eles concordaram em reagendar."
      }
    ]
  },
  "vocab": [
    [
      "Then what happened?",
      "dhen uát rrápend",
      "Então o que aconteceu?",
      "⏭️",
      true
    ],
    [
      "First of all, ...",
      "férst âv ól",
      "Antes de mais nada, ...",
      "1️⃣",
      true
    ],
    [
      "As a result, ...",
      "ez a rizâlt",
      "Como resultado, ...",
      "➡️",
      true
    ],
    [
      "Because of that, ...",
      "bikóz âv dhat",
      "Por causa disso, ...",
      "🔗",
      true
    ],
    [
      "In the end, everything worked out.",
      "in dhe end, évrithing uórkt áut",
      "No final, tudo deu certo.",
      "✅",
      true
    ],
    [
      "One thing led to another.",
      "uân thing led tu anâdher",
      "Uma coisa levou à outra.",
      "🔄",
      true
    ],
    [
      "And that's basically what happened.",
      "end dhats béisikali uát rrápend",
      "E basicamente foi isso que aconteceu.",
      "📖",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "First of all, I called the client. As a result, they agreed to reschedule.",
    "formula": "First of all / As a result / Because of that / In the end (sequenciar uma história com causa e consequência)",
    "examples": [
      "First of all, I called the client to apologize.",
      "As a result, they agreed to reschedule the meeting.",
      "Because of that, we had more time to prepare.",
      "In the end, everything worked out fine."
    ]
  },
  "simplify": [
    "First of all, ...",
    "As a result, .../Because of that, ...",
    "In the end, ..."
  ],
  "swap": {
    "base": "As a result, ______.",
    "options": [
      "📞 they agreed to reschedule",
      "💰 we got a refund",
      "🤝 we became good friends",
      "📉 we lost the client",
      "🎉 everything worked out great"
    ]
  },
  "activities": [
    [
      "Write a sentence starting a sequence of events.",
      "First of all, I called the client to apologize.",
      "férst âv ól, ái kóld dhe kláient tu apólojáiz"
    ],
    [
      "Write a sentence showing a consequence.",
      "As a result, they agreed to reschedule the meeting.",
      "ez a rizâlt, dhéi agríd tu rischéjiul dhe mítin"
    ],
    [
      "Write a sentence concluding a story.",
      "In the end, everything worked out, and one thing led to another.",
      "in dhe end, évrithing uórkt áut, end uân thing led tu anâdher"
    ]
  ],
  "dialogue": [
    [
      "A",
      "So after the meeting fell apart, I had to think fast.",
      "sôu áfter dhe mítin fel apárt, ái rred tu thingk fást",
      "Então depois que a reunião desandou, eu tive que pensar rápido."
    ],
    [
      "L",
      "Then what happened?",
      "dhen uát rrápend",
      "Então o que aconteceu?"
    ],
    [
      "A",
      "First of all, I called the client to apologize.",
      "férst âv ól, ái kóld dhe kláient tu apólojáiz",
      "Antes de mais nada, eu liguei pro cliente pra pedir desculpas."
    ],
    [
      "L",
      "And then?",
      "end dhen",
      "E depois?"
    ],
    [
      "A",
      "As a result, they agreed to reschedule. Because of that, we had more time to prepare.",
      "ez a rizâlt, dhéi agríd tu rischéjiul. bikóz âv dhat, uí rred mór táim tu pripér",
      "Como resultado, eles concordaram em reagendar. Por causa disso, a gente teve mais tempo pra se preparar."
    ],
    [
      "L",
      "So in the end, everything worked out?",
      "sôu in dhe end, évrithing uórkt áut",
      "Então no final, tudo deu certo?"
    ]
  ],
  "connectors": [
    "Then what happened?",
    "And then?",
    "And that's basically what happened."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Out of nowhere, ...",
      "To make things even stranger, ...",
      "Looking back, ..."
    ],
    "today": [
      "First of all, ...",
      "As a result, .../Because of that, ...",
      "In the end, ..."
    ],
    "combo": "Then what happened? First of all, I called them, and as a result, everything worked out in the end."
  },
  "challenge": "Record yourself telling a short story with clear sequence and consequence, using 'first of all', 'as a result' and 'in the end'."
};

/* ================= AULA 28 — Natural English ================= */
const LESSON_B2_28 = {
  "ready": true,
  "label": "28",
  "title": "Natural English",
  "eyebrow": "Level B2 — Lesson 28",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's sound more natural — learning common phrasal verbs, collocations and expressions native speakers use all the time.",
  "scene": {
    "emoji": "🗣️",
    "caption": "Ana notices Leo using some very natural expressions and asks him to explain them.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I need to figure out this budget before I can move forward.",
        "pt": "Eu preciso resolver esse orçamento antes de poder seguir em frente."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "What does 'figure out' mean exactly?",
        "pt": "O que 'figure out' significa exatamente?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "It means to understand or solve something after thinking about it.",
        "pt": "Significa entender ou resolver algo depois de pensar sobre isso."
      }
    ]
  },
  "vocab": [
    [
      "I need to figure this out.",
      "ái níd tu fíguer dhis áut",
      "Eu preciso resolver isso.",
      "🧩",
      true
    ],
    [
      "Let's move forward with the plan.",
      "lets múv fóruord uíth dhe plen",
      "Vamos seguir em frente com o plano.",
      "➡️",
      true
    ],
    [
      "I'll look into it.",
      "áiu luk íntu it",
      "Vou investigar isso.",
      "🔍",
      true
    ],
    [
      "That came out of nowhere.",
      "dhat kéim áut âv nôuér",
      "Isso veio do nada.",
      "💥",
      true
    ],
    [
      "Can you break it down for me?",
      "ken iú bréik it dáun for mí",
      "Você pode explicar de forma mais simples pra mim?",
      "🔎",
      true
    ],
    [
      "It's not a big deal.",
      "its not a big díl",
      "Não é grande coisa.",
      "🤷",
      true
    ],
    [
      "That makes total sense.",
      "dhat méiks tôutal sens",
      "Isso faz todo sentido.",
      "💡",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I need to figure this out. / Let's move forward with the plan.",
    "formula": "Phrasal verbs comuns: figure out, move forward, look into, break down (soar mais natural em inglês)",
    "examples": [
      "I need to figure this out before the meeting.",
      "Let's move forward with the original plan.",
      "I'll look into it and get back to you.",
      "Can you break it down for me? That makes total sense now."
    ]
  },
  "simplify": [
    "figure out = entender/resolver",
    "move forward = seguir em frente",
    "look into = investigar"
  ],
  "swap": {
    "base": "I'll ______ and get back to you.",
    "options": [
      "🔍 look into it",
      "🧩 figure it out",
      "📊 break it down",
      "➡️ move forward with it",
      "💭 think it over"
    ]
  },
  "activities": [
    [
      "Write a sentence using 'figure out' naturally.",
      "I need to figure this out before the meeting.",
      "ái níd tu fíguer dhis áut bifór dhe mítin"
    ],
    [
      "Write a sentence using 'look into' naturally.",
      "I'll look into it and get back to you tomorrow.",
      "áiu luk íntu it end guét bák tu iú tumórou"
    ],
    [
      "Write a sentence asking someone to simplify an explanation.",
      "Can you break it down for me? That makes total sense now.",
      "ken iú bréik it dáun for mí? dhat méiks tôutal sens náu"
    ]
  ],
  "dialogue": [
    [
      "L",
      "I need to figure out this budget before I can move forward.",
      "ái níd tu fíguer áut dhis bâjit bifór ái ken múv fóruord",
      "Eu preciso resolver esse orçamento antes de poder seguir em frente."
    ],
    [
      "A",
      "What does 'figure out' mean exactly?",
      "uát dâz fíguer áut mín ikzáktli",
      "O que 'figure out' significa exatamente?"
    ],
    [
      "L",
      "It means to understand or solve something after thinking about it.",
      "it mínz tu ânderstend ór sólv sâmthing áfter thingkin abáut it",
      "Significa entender ou resolver algo depois de pensar sobre isso."
    ],
    [
      "A",
      "Got it. And 'move forward'?",
      "gât it. end múv fóruord",
      "Entendi. E 'move forward'?"
    ],
    [
      "L",
      "That just means to continue or keep going with something.",
      "dhat jâst mínz tu kontíniu ór kip gôuin uíth sâmthing",
      "Isso só significa continuar ou seguir em frente com algo."
    ],
    [
      "A",
      "That makes total sense now, thanks for breaking it down.",
      "dhat méiks tôutal sens náu, thenks for bréikin it dáun",
      "Isso faz todo sentido agora, obrigada por explicar de forma simples."
    ]
  ],
  "connectors": [
    "What does that mean exactly?",
    "Got it.",
    "That makes total sense."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "First of all, ...",
      "As a result, .../Because of that, ...",
      "In the end, ..."
    ],
    "today": [
      "figure out = entender/resolver",
      "move forward = seguir em frente",
      "look into = investigar"
    ],
    "combo": "In the end, I need to figure this out — can you break it down for me? That makes total sense now."
  },
  "challenge": "Record yourself explaining a task using at least three natural phrasal verbs: figure out, move forward, look into, break down."
};

/* ================= AULA 29 — Say It Another Way ================= */
const LESSON_B2_29 = {
  "ready": true,
  "label": "29",
  "title": "Say It Another Way",
  "eyebrow": "Level B2 — Lesson 29",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Let's learn how to reformulate an idea when you don't have the exact word — a key B2 skill for keeping conversations flowing.",
  "scene": {
    "emoji": "🔁",
    "caption": "Leo can't remember a specific word and reformulates his sentence instead of stopping.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I'm looking for... how do I put this... the thing that measures how good an idea is before you invest in it.",
        "pt": "Eu estou procurando... como eu coloco isso... a coisa que mede o quanto uma ideia é boa antes de você investir nela."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "You mean feasibility?",
        "pt": "Você quer dizer viabilidade?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Yes! That's exactly what I meant.",
        "pt": "Sim! Isso é exatamente o que eu quis dizer."
      }
    ]
  },
  "vocab": [
    [
      "How do I put this...",
      "ráu du ái put dhis",
      "Como eu coloco isso...",
      "🤔",
      true
    ],
    [
      "In other words, ...",
      "in âdher uérdz",
      "Em outras palavras, ...",
      "🔁",
      true
    ],
    [
      "What I'm trying to say is...",
      "uát áim tráin tu séi iz",
      "O que eu estou tentando dizer é...",
      "🗣️",
      true
    ],
    [
      "It's kind of like a mix of...",
      "its káind âv láik a miks âv",
      "É meio que uma mistura de...",
      "🌀",
      true
    ],
    [
      "You mean...?",
      "iú mín",
      "Você quer dizer...?",
      "❓",
      true
    ],
    [
      "That's exactly what I meant.",
      "dhats ikzáktli uát ái ment",
      "Isso é exatamente o que eu quis dizer.",
      "✅",
      true
    ],
    [
      "Let me rephrase that.",
      "let mí rifréiz dhat",
      "Deixa eu reformular isso.",
      "🔄",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "How do I put this... / What I'm trying to say is...",
    "formula": "How do I put this... / In other words, ... / What I'm trying to say is... (reformular uma ideia sem parar de falar)",
    "examples": [
      "How do I put this... the thing that measures feasibility.",
      "In other words, we need to check if it's realistic.",
      "What I'm trying to say is, it might not work as planned.",
      "Let me rephrase that — it's kind of like a risk assessment."
    ]
  },
  "simplify": [
    "How do I put this...",
    "In other words, ...",
    "What I'm trying to say is..."
  ],
  "swap": {
    "base": "Let me rephrase that — ______.",
    "options": [
      "📊 it's kind of like a risk assessment",
      "💡 what I mean is it's not realistic",
      "🎯 in other words, we need more time",
      "🔍 it's the thing you check before deciding",
      "🗣️ what I'm trying to say is, I disagree"
    ]
  },
  "activities": [
    [
      "Write a sentence reformulating an idea without stopping.",
      "How do I put this... the thing that measures how good an idea is.",
      "ráu du ái put dhis... dhe thing dhat méjuerz ráu gud en aidía iz"
    ],
    [
      "Write a sentence checking if someone understood.",
      "You mean feasibility? That's exactly what I meant.",
      "iú mín físabíliti? dhats ikzáktli uát ái ment"
    ],
    [
      "Write a sentence rephrasing something you said.",
      "Let me rephrase that — what I'm trying to say is it's risky.",
      "let mí rifréiz dhat — uát áim tráin tu séi iz its ríski"
    ]
  ],
  "dialogue": [
    [
      "L",
      "I'm looking for... how do I put this... the thing that measures how good an idea is before you invest in it.",
      "áim lúkin for... ráu du ái put dhis... dhe thing dhat méjuerz ráu gud en aidía iz bifór iú invést in it",
      "Eu estou procurando... como eu coloco isso... a coisa que mede o quanto uma ideia é boa antes de você investir nela."
    ],
    [
      "A",
      "You mean feasibility?",
      "iú mín físabíliti",
      "Você quer dizer viabilidade?"
    ],
    [
      "L",
      "Yes! That's exactly what I meant.",
      "iés! dhats ikzáktli uát ái ment",
      "Sim! Isso é exatamente o que eu quis dizer."
    ],
    [
      "A",
      "No problem. What are you trying to figure out exactly?",
      "nôu próblem. uát ár iú tráin tu fíguer áut ikzáktli",
      "Sem problema. O que você está tentando descobrir exatamente?"
    ],
    [
      "L",
      "In other words, I need to know if this project is realistic before we start.",
      "in âdher uérdz, ái níd tu nôu if dhis prójekt iz ríalístik bifór uí start",
      "Em outras palavras, eu preciso saber se esse projeto é realista antes de a gente começar."
    ],
    [
      "A",
      "Got it. Let me rephrase that for the report: a feasibility check.",
      "gât it. let mí rifréiz dhat for dhe ripórt: a físabíliti chek",
      "Entendi. Deixa eu reformular isso pro relatório: uma verificação de viabilidade."
    ]
  ],
  "connectors": [
    "How do I put this...",
    "You mean...?",
    "That's exactly what I meant."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "figure out = entender/resolver",
      "move forward = seguir em frente",
      "look into = investigar"
    ],
    "today": [
      "How do I put this...",
      "In other words, ...",
      "What I'm trying to say is..."
    ],
    "combo": "How do I put this... in other words, what I'm trying to say is it's kind of like a feasibility check."
  },
  "challenge": "🌎 WORLD 6 COMPLETE — Mission: explain an idea to someone, but you can't remember one key word. Reformulate it at least twice, until they understand what you mean."
};

/* ================= AULA 30 — 🔓 B2 SPEAK-TO-LIVE CHALLENGE ================= */
const LESSON_B2_30 = {
  "ready": true,
  "label": "30",
  "title": "🔓 B2 SPEAK-TO-LIVE CHALLENGE",
  "eyebrow": "Level B2 — Lesson 30",
  "level": "B2",
  "immersive": true,
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "The final B2 challenge: one long, realistic conversation that combines everything from all six worlds — problems, hypotheticals, work, opinions, negotiation, storytelling and natural English. EXPLAIN → DISCUSS → REACT → NEGOTIATE → CONNECT.",
  "scene": {
    "emoji": "🏆",
    "caption": "A single extended conversation where Ana needs to explain a problem, give her opinion, negotiate, and tell a story — all at once.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "We have a problem — the client isn't happy, and the deadline is tomorrow.",
        "pt": "A gente tem um problema — o cliente não está feliz, e o prazo é amanhã."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Okay, let's figure this out together before we panic.",
        "pt": "Ok, vamos resolver isso juntos antes de entrar em pânico."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "So what would you suggest we do?",
        "pt": "Então o que você sugere que a gente faça?"
      }
    ]
  },
  "vocab": [
    [
      "Let's figure this out together.",
      "lets fígier dhis áut tugédher",
      "Vamos resolver isso juntos.",
      "🤝",
      true
    ],
    [
      "The reason might be...",
      "dhe ríson máit bí",
      "O motivo pode ser...",
      "🎯",
      true
    ],
    [
      "If we revise this tonight, we'll be ready tomorrow.",
      "if uí riváiz dhis tunáit, uíu bí rédi tumórou",
      "Se a gente revisar isso hoje à noite, vamos estar prontos amanhã.",
      "🌙",
      true
    ],
    [
      "I think what they meant was...",
      "ái thingk uát dhéi ment uóz",
      "Eu acho que o que eles quiseram dizer foi...",
      "💭",
      true
    ],
    [
      "I'll handle it, let's make sure it's ready.",
      "áiu rrándl it, lets méik chúr its rédi",
      "Eu cuido disso, vamos garantir que esteja pronto.",
      "💪",
      true
    ],
    [
      "It's been quite a journey getting here.",
      "its bín kuáit a jérni guétin rrír",
      "Foi uma jornada e tanto até chegar aqui.",
      "🛤️",
      true
    ],
    [
      "I can finally have a real conversation in English.",
      "ái ken fáinali rrev a ríal kônverséichn in ínglich",
      "Eu finalmente consigo ter uma conversa de verdade em inglês.",
      "🎉",
      false
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "It's been quite a journey getting here.",
    "formula": "Review: everything from B2 combined — conditionals, passive, relative clauses, linking words, and opinions",
    "examples": [
      "It's been quite a journey.",
      "If we revise this tonight, we'll be ready tomorrow.",
      "I think what they meant was the pricing felt too high."
    ]
  },
  "simplify": [
    "Let's figure this out together",
    "If we + PRESENT, we'll + VERB",
    "I think what they meant was..."
  ],
  "swap": {
    "base": "If we ______ tonight, we'll ______ tomorrow.",
    "options": [
      "revise this / be ready",
      "fix it / deliver on time",
      "call them / clear things up"
    ]
  },
  "activities": [
    [
      "Write a sentence explaining a problem and proposing an urgent fix.",
      "We have a problem, but if we revise this tonight, we'll be ready tomorrow.",
      "uí rrev a próblem, bât if uí riváiz dhis tunáit, uíu bí rédi tumórou"
    ],
    [
      "Write a sentence clarifying what someone probably meant.",
      "I think what they meant was the pricing felt too high for the value.",
      "ái thingk uát dhéi ment uóz dhe práisin felt tú rrái for dhe váliu"
    ],
    [
      "Write a sentence reflecting on your progress in English so far.",
      "It's been quite a journey, but I can finally have a real conversation in English.",
      "its bín kuáit a jérni, bât ái ken fáinali rrev a ríal kônverséichn in ínglich"
    ]
  ],
  "dialogue": [
    [
      "L",
      "We have a problem — the client isn't happy, and the deadline is tomorrow.",
      "uí rrev a próblem — dhe kláient íznt rrépi, end dhe dédláin iz tumórou",
      "A gente tem um problema — o cliente não está feliz, e o prazo é amanhã."
    ],
    [
      "A",
      "Okay, let's figure this out together before we panic.",
      "ôukéi, lets fígier dhis áut tugédher bifór uí pánik",
      "Ok, vamos resolver isso juntos antes de entrar em pânico."
    ],
    [
      "L",
      "The reason might be that the proposal didn't address their concern.",
      "dhe ríson máit bí dhat dhe prapôuzal dídnt adrés dhéir konsérn",
      "O motivo pode ser que a proposta não abordou a preocupação deles."
    ],
    [
      "A",
      "If we revise the key points tonight, we'll be ready tomorrow.",
      "if uí riváiz dhe kí póints tunáit, uíu bí rédi tumórou",
      "Se a gente revisar os pontos principais hoje à noite, vamos estar prontos amanhã."
    ],
    [
      "L",
      "They also mentioned the pricing. What do you think they meant?",
      "dhéi ólso ménchend dhe práisin. uát du iú thingk dhéi ment",
      "Eles também mencionaram o preço. O que você acha que eles quiseram dizer?"
    ],
    [
      "A",
      "I think what they meant was it felt too high for the value offered.",
      "ái thingk uát dhéi ment uóz it felt tú rrái for dhe váliu ófert",
      "Eu acho que o que eles quiseram dizer foi que pareceu caro demais pelo valor oferecido."
    ],
    [
      "L",
      "Can you handle the call with them tomorrow?",
      "ken iú rrándl dhe kól uíth dhem tumórou",
      "Você consegue cuidar da ligação com eles amanhã?"
    ],
    [
      "A",
      "I'll handle it, and let's make sure the new version is ready by 9am.",
      "áiu rrándl it, end lets méik chúr dhe niú vérjn iz rédi bái náin éiem",
      "Eu cuido disso, e vamos garantir que a nova versão esteja pronta até as 9h."
    ]
  ],
  "connectors": [
    "Okay, let's figure this out.",
    "What do you think they meant?",
    "I'll handle it."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Every B2 structure: conditionals, passive, relative clauses, linking words, clarification, opinions"
    ],
    "today": [
      "Let's figure this out together",
      "If we..., we'll...",
      "I think what they meant was..."
    ],
    "combo": "We have a problem — if we revise this tonight, we'll be ready tomorrow. It's been quite a journey getting here."
  },
  "challenge": "Have one long, complete B2 conversation: explain a problem, propose a solution with a conditional, clarify a misunderstanding, and commit to next steps."
};

const LESSONS_B2_DEFINED = [
  LESSON_B2_01, LESSON_B2_02, LESSON_B2_03, LESSON_B2_04, LESSON_B2_05, LESSON_B2_06, LESSON_B2_07, LESSON_B2_08, LESSON_B2_09, LESSON_B2_10, LESSON_B2_11, LESSON_B2_12, LESSON_B2_13, LESSON_B2_14, LESSON_B2_15, LESSON_B2_16, LESSON_B2_17, LESSON_B2_18, LESSON_B2_19, LESSON_B2_20, LESSON_B2_21, LESSON_B2_22, LESSON_B2_23, LESSON_B2_24, LESSON_B2_25, LESSON_B2_26, LESSON_B2_27, LESSON_B2_28, LESSON_B2_29, LESSON_B2_30
];

const lessonsB2 = LESSON_TITLES_B2.map((title, i) => {
  if(LESSONS_B2_DEFINED[i]) return LESSONS_B2_DEFINED[i];
  const n = String(i + 1).padStart(2, '0');
  return {
    ready: false,
    label: n,
    title: title,
    eyebrow: `Level B2 — Lesson ${n}`,
    level: "B2",
    immersive: true,
    intro: "This lesson is being prepared and will be available soon."
  };
});
