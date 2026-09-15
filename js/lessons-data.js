/* ============================================================
   IDIOLIBRE — js/lessons-data.js
   Banco de dados de todas as 30 aulas do curso A1.

   Cada aula segue a estrutura pedagógica fixa:
   VEJA → FRASE → MOLDE → SIMPLIFIQUE → TROQUE → FALE/PERGUNTE →
   CONVERSE → CONTINUE → REUTILIZE → DESAFIO → prática com IA.

   Para adicionar conteúdo a um nível novo (A2, B1...), crie um
   arquivo js/lessons-a2.js seguindo o mesmo formato e inclua-o
   no index.html antes de js/app.js.
   ============================================================ */

/* ================= DATA ================= */
/* Cada aula segue: VEJA · FRASE · MOLDE · SIMPLIFIQUE · TROQUE ·
   FALE/PERGUNTE (atividades) · CONVERSE · CONTINUE · REUTILIZE ·
   DESAFIO · prática com IA externa.
   Para adicionar a Aula 2 em diante: copie a Aula 01 inteira,
   troque o conteúdo e mude ready para true. */

const LESSON_TITLES = [
  "Conhecer alguém","Família","Idade e números","Gostos","Casa",
  "Rotina","Minha manhã","Dia e noite","Dias e horários","Minha rotina completa",
  "Comida","Compras","No café","No restaurante","Pagar",
  "Lugares da cidade","Onde fica?","Direções","Transporte","Viagem",
  "O que está acontecendo?","Pessoas e aparência","Roupas","Clima","Como estou?",
  "Small talk","Fazer perguntas","Manter uma conversa","Grande revisão A1","Meu primeiro diálogo completo"
];
const LESSON_EMOJIS = [
  "👋","👪","🔢","❤️","🏠","⏰","🌅","🌗","📅","🔁",
  "🍽️","🛍️","☕","🍝","💳","🏙️","📍","🧭","🚌","✈️",
  "🎬","🧍","👕","☀️","🙂","💬","❓","🔄","🏆","🎓"
];

const LESSON_01 = {
  ready: true,
  label: "01",
  title: "Conhecer alguém",
  eyebrow: "Nível A1 — Aula 01",
  characters: ["Ana", "Leo"],
  intro: "Hoje você vai aprender a se apresentar em inglês: dizer seu nome, de onde você é e onde mora — o suficiente para começar qualquer conversa.",

  scene: {
    emoji: "🏠",
    caption: "Ana e Leo estão se conhecendo pela primeira vez, numa festa.",
    dialogue: [
      { who: "A", speaker: "Ana", en: "Hi! My name is Ana.", pt: "Oi! Meu nome é Ana." },
      { who: "L", speaker: "Leo", en: "Hi Ana! I'm Leo. Nice to meet you.", pt: "Oi Ana! Eu sou o Leo. Prazer em conhecer você." },
      { who: "A", speaker: "Ana", en: "Nice to meet you too!", pt: "Prazer em conhecer você também!" }
    ]
  },

  vocab: [
    ["Hello.", "rrelôu", "Olá.", "👋"],
    ["Hi!", "rrái", "Oi!", "✋"],
    ["My name is Ana.", "mái nêim iz Ana", "Meu nome é Ana.", "🙋"],
    ["I'm Leo.", "áim Líiô", "Eu sou o Leo.", "🙋‍♂️"],
    ["What's your name?", "uáts iór nêim", "Qual é o seu nome?", "❓"],
    ["Nice to meet you.", "náis tu mít iú", "Prazer em conhecer você.", "🤝"],
    ["Where are you from?", "uér ar iú from", "De onde você é?", "🌍"],
    ["I'm from Brazil.", "áim from brazíu", "Eu sou do Brasil.", "🇧🇷"],
    ["Where do you live?", "uér du iú liv", "Onde você mora?", "📍"],
    ["I live in Portugal.", "ái liv in pórtchugou", "Eu moro em Portugal.", "🇵🇹"]
  ],

  grammarTitle: "Descubra o molde",
  pattern: {
    lead: "I live in Portugal.",
    formula: "I live in + PLACE",
    examples: ["I live in Portugal.", "I live in Spain.", "I live in London.", "I live in a small town."]
  },
  simplify: ["I'm + NAME", "I'm from + PLACE", "I live in + PLACE"],
  swap: {
    base: "I'm from ______.",
    options: ["🇧🇷 Brazil", "🇵🇹 Portugal", "🇪🇸 Spain", "🇺🇸 the United States", "🇫🇷 France", "🇮🇹 Italy"]
  },

  activities: [
    ["Traduza para o inglês: \"Meu nome é Ana.\"", "My name is Ana.", "mái nêim iz Ana"],
    ["Traduza para o inglês: \"Eu sou do Brasil.\"", "I'm from Brazil.", "áim from brazíu"],
    ["Traduza para o inglês: \"Eu moro em Portugal.\"", "I live in Portugal.", "ái liv in pórtchugou"],
    ["Traduza para o inglês: \"De onde você é?\"", "Where are you from?", "uér ar iú from"]
  ],

  dialogue: [
    ["L", "Hi! What's your name?", "rrái! uáts iór nêim", "Oi! Qual é o seu nome?"],
    ["A", "I'm Ana. Nice to meet you.", "áim Ana. náis tu mít iú", "Eu sou a Ana. Prazer em conhecer você."],
    ["L", "Nice to meet you too. Where are you from?", "náis tu mít iú tú. uér ar iú from", "Prazer em conhecer você também. De onde você é?"],
    ["A", "I'm from Brazil. What about you?", "áim from brazíu. uát abáut iú", "Eu sou do Brasil. E você?"],
    ["L", "I'm from Portugal. Where do you live now?", "áim from pórtchugou. uér du iú liv náu", "Eu sou de Portugal. Onde você mora agora?"],
    ["A", "I live in Lisbon.", "ái liv in lízbon", "Eu moro em Lisboa."]
  ],

  connectors: ["What about you?", "Nice to meet you.", "Really?"],

  reuse: {
    firstLesson: true,
    today: ["I'm...", "My name is...", "I'm from...", "I live in..."],
    combo: "My name is Ana. I'm from Brazil and I live in Portugal."
  },

  challenge: "Apresente-se em inglês usando 4 frases: nome, de onde você é, onde mora, e diga \"nice to meet you\".",

  aiPrompt: `Você é meu parceiro de conversação em inglês.

Estou estudando inglês nível A1 no IdioLibre.
Hoje estou praticando a Aula 1: Conhecer alguém.

Use principalmente estas estruturas:
- I'm...
- My name is...
- I'm from...
- I live in...
- What's your name?
- Where are you from?
- Where do you live?

Use principalmente estas palavras:
name, country, city, live, from, hello, nice, meet

Faça uma conversa natural comigo.

Regras:
1. Fale principalmente inglês simples de nível A1.
2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.
3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.
4. Não transforme a conversa em uma aula de gramática.
5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.
6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.
7. Use expressões como "What about you?", "Really?" e "Nice to meet you!" quando fizer sentido.
8. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.
9. Converse comigo durante aproximadamente 5 a 10 minutos.

No final da conversa, diga:
✅ 3 coisas que fiz bem
🧩 1 ou 2 estruturas para praticar
💬 3 frases que posso reutilizar.

Comece a conversa agora com uma pergunta simples relacionada à aula.`
};

const LESSON_02 = {
  ready: true,
  label: "02",
  title: "Família",
  eyebrow: "Nível A1 — Aula 02",
  characters: ["Ana", "Leo"],
  intro: "Hoje você aprende a falar sobre sua família: quem são, quantos irmãos você tem e como apresentar alguém com \"This is my...\".",

  scene: {
    emoji: "👨‍👩‍👧‍👦",
    caption: "Ana está mostrando fotos da família para Leo.",
    dialogue: [
      { who: "A", speaker: "Ana", en: "This is my family.", pt: "Esta é a minha família." },
      { who: "L", speaker: "Leo", en: "Wow! How many brothers and sisters do you have?", pt: "Uau! Quantos irmãos e irmãs você tem?" },
      { who: "A", speaker: "Ana", en: "I have one brother and one sister.", pt: "Eu tenho um irmão e uma irmã." }
    ]
  },

  vocab: [
    ["mother", "mâdher", "mãe", "👩"],
    ["father", "fâdher", "pai", "👨"],
    ["sister", "síster", "irmã", "👧"],
    ["brother", "brâdher", "irmão", "👦"],
    ["parents", "pérents", "pais (mãe e pai)", "👪"],
    ["son", "sân", "filho", "👦"],
    ["daughter", "dóter", "filha", "👧"],
    ["husband", "râzband", "marido", "🤵"],
    ["wife", "uáif", "esposa", "👰"],
    ["family", "fémili", "família", "👨‍👩‍👧‍👦"]
  ],

  grammarTitle: "Descubra o molde",
  pattern: {
    lead: "I have one brother.",
    formula: "I have + NUMBER + FAMILY MEMBER",
    examples: ["I have one brother.", "I have two sisters.", "I have one daughter.", "I have three children."]
  },
  simplify: ["I have + NUMBER + FAMILY MEMBER", "I don't have + FAMILY MEMBER", "This is my + FAMILY MEMBER"],
  swap: {
    base: "I have one ______.",
    options: ["👦 brother", "👧 sister", "👨 father", "👩 mother", "👦 son", "👧 daughter"]
  },

  activities: [
    ["Traduza para o inglês: \"Eu tenho um irmão.\"", "I have one brother.", "ái rrev uán brâdher"],
    ["Traduza para o inglês: \"Esta é a minha mãe.\"", "This is my mother.", "dhis iz mái mâdher"],
    ["Traduza para o inglês: \"Você tem uma irmã?\"", "Do you have a sister?", "du iú rrev a síster"],
    ["Traduza para o inglês: \"Eu não tenho um irmão.\"", "I don't have a brother.", "ái dôunt rrev a brâdher"]
  ],

  dialogue: [
    ["L", "Do you have brothers or sisters?", "du iú rrev brâdherz or sísterz", "Você tem irmãos ou irmãs?"],
    ["A", "Yes, I have one brother. His name is Pedro.", "iés, ái rrev uán brâdher. rriz nêim iz Pedro", "Sim, eu tenho um irmão. O nome dele é Pedro."],
    ["L", "Nice! Do you have children?", "náis! du iú rrev chíldren", "Legal! Você tem filhos?"],
    ["A", "Yes, I have one daughter. What about you?", "iés, ái rrev uán dóter. uát abáut iú", "Sim, eu tenho uma filha. E você?"],
    ["L", "I have two sons.", "ái rrev tú sânz", "Eu tenho dois filhos."],
    ["A", "That's a big family!", "dháts a big fémili", "Que família grande!"]
  ],

  connectors: ["What about you?", "Really?", "That's nice!"],

  reuse: {
    firstLesson: false,
    known: ["My name is Ana.", "I'm from Brazil.", "I live in Portugal."],
    today: ["I have...", "I don't have...", "Do you have...?", "This is my..."],
    combo: "My name is Ana, I live in Portugal, and I have one brother."
  },

  challenge: "Fale sobre sua família em inglês usando 4 frases: quantos irmãos você tem, se você tem filhos, e apresente um membro da família com \"This is my...\".",

  aiPrompt: `Você é meu parceiro de conversação em inglês.

Estou estudando inglês nível A1 no IdioLibre.
Hoje estou praticando a Aula 2: Família.

Use principalmente estas estruturas:
- I have...
- I don't have...
- Do you have...?
- This is my...

Use principalmente estas palavras:
mother, father, sister, brother, parents, son, daughter, husband, wife, family

Faça uma conversa natural comigo.

Regras:
1. Fale principalmente inglês simples de nível A1.
2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.
3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.
4. Não transforme a conversa em uma aula de gramática.
5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.
6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.
7. Você pode reutilizar estruturas de aulas anteriores, como "My name is..." e "I live in...".
8. Use expressões como "What about you?", "Really?" e "That's nice!" quando fizer sentido.
9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.
10. Converse comigo durante aproximadamente 5 a 10 minutos.

No final da conversa, diga:
✅ 3 coisas que fiz bem
🧩 1 ou 2 estruturas para praticar
💬 3 frases que posso reutilizar.

Comece a conversa agora com uma pergunta simples relacionada à aula.`
};

const LESSON_03 = {
  ready: true,
  label: "03",
  title: "Idade e números",
  eyebrow: "Nível A1 — Aula 03",
  characters: ["Ana", "Leo"],
  intro: "Hoje você aprende a dizer sua idade, perguntar a idade de alguém e trocar um número de telefone.",

  scene: {
    emoji: "🎂",
    caption: "Ana e Leo estão trocando informações básicas na festa.",
    dialogue: [
      { who: "L", speaker: "Leo", en: "How old are you?", pt: "Quantos anos você tem?" },
      { who: "A", speaker: "Ana", en: "I'm twenty-five years old. And you?", pt: "Eu tenho vinte e cinco anos. E você?" },
      { who: "L", speaker: "Leo", en: "I'm twenty-eight.", pt: "Eu tenho vinte e oito." }
    ]
  },

  vocab: [
    ["one, two, three...", "uán, tú, thrí", "um, dois, três...", "🔢"],
    ["ten", "ten", "dez", "🔟"],
    ["twenty", "tuénti", "vinte", "2️⃣0️⃣"],
    ["thirty", "thérti", "trinta", "3️⃣0️⃣"],
    ["How old are you?", "rráu ôuld ar iú", "Quantos anos você tem?", "🎂"],
    ["I'm 25 years old.", "áim tuéni-fáiv iérs ôuld", "Eu tenho 25 anos.", "🎂"],
    ["phone number", "fôun nâmber", "número de telefone", "📱"],
    ["What's your phone number?", "uáts iór fôun nâmber", "Qual é o seu número de telefone?", "📱"],
    ["How many?", "rráu méni", "Quantos/Quantas?", "🔢"],
    ["years old", "iérs ôuld", "anos de idade", "🎉"]
  ],

  grammarTitle: "Descubra o molde",
  pattern: {
    lead: "I'm 25 years old.",
    formula: "I'm + NUMBER + years old",
    examples: ["I'm 25 years old.", "I'm 30 years old.", "I'm 18 years old.", "I'm 40 years old."]
  },
  simplify: ["I'm + NUMBER + years old", "How old are you?", "What's your phone number?", "How many + THING?"],
  swap: {
    base: "I'm ______ years old.",
    options: ["18", "22", "25", "30", "45", "60"]
  },

  activities: [
    ["Traduza para o inglês: \"Eu tenho 25 anos.\"", "I'm 25 years old.", "áim tuéni-fáiv iérs ôuld"],
    ["Traduza para o inglês: \"Quantos anos você tem?\"", "How old are you?", "rráu ôuld ar iú"],
    ["Traduza para o inglês: \"Quantos irmãos você tem?\"", "How many brothers do you have?", "rráu méni brâdherz du iú rrev"],
    ["Traduza para o inglês: \"Qual é o seu número de telefone?\"", "What's your phone number?", "uáts iór fôun nâmber"]
  ],

  dialogue: [
    ["L", "How old are you?", "rráu ôuld ar iú", "Quantos anos você tem?"],
    ["A", "I'm twenty-five years old. And you?", "áim tuéni-fáiv iérs ôuld. end iú", "Eu tenho vinte e cinco anos. E você?"],
    ["L", "I'm twenty-eight. What's your phone number?", "áim tuéni-êit. uáts iór fôun nâmber", "Eu tenho vinte e oito. Qual é o seu número de telefone?"],
    ["A", "It's zero nine one, two three four, five six seven.", "its zírou náin uán, tú thrí fôr, fáiv six séven", "É zero nove um, dois três quatro, cinco seis sete."],
    ["L", "Thanks! How many brothers and sisters do you have?", "thenks! rráu méni brâdherz end sísterz du iú rrev", "Obrigado! Quantos irmãos e irmãs você tem?"],
    ["A", "I have one brother and one sister.", "ái rrev uán brâdher end uán síster", "Eu tenho um irmão e uma irmã."]
  ],

  connectors: ["And you?", "Really?", "Thanks!"],

  reuse: {
    firstLesson: false,
    known: ["My name is Ana.", "I'm from Brazil.", "I live in Portugal.", "I have one brother."],
    today: ["I'm ... years old.", "How old are you?", "What's your phone number?", "How many...?"],
    combo: "My name is Ana, I'm 25 years old, and I have one brother."
  },

  challenge: "Grave-se (ou diga em voz alta) falando 3 frases: sua idade, seu número de telefone, e quantos irmãos você tem.",

  aiPrompt: `Você é meu parceiro de conversação em inglês.

Estou estudando inglês nível A1 no IdioLibre.
Hoje estou praticando a Aula 3: Idade e números.

Use principalmente estas estruturas:
- I'm + NUMBER + years old.
- How old are you?
- What's your phone number?
- How many...?

Use principalmente estas palavras:
números de 1 a 100, years old, phone number

Faça uma conversa natural comigo.

Regras:
1. Fale principalmente inglês simples de nível A1.
2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.
3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.
4. Não transforme a conversa em uma aula de gramática.
5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.
6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.
7. Você pode reutilizar estruturas de aulas anteriores, como "My name is...", "I live in..." e "I have...".
8. Use expressões como "And you?", "Really?" e "Thanks!" quando fizer sentido.
9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.
10. Converse comigo durante aproximadamente 5 a 10 minutos.

No final da conversa, diga:
✅ 3 coisas que fiz bem
🧩 1 ou 2 estruturas para praticar
💬 3 frases que posso reutilizar.

Comece a conversa agora com uma pergunta simples relacionada à aula.`
};

const LESSON_04 = {
  "ready": true,
  "label": "04",
  "title": "Gostos",
  "eyebrow": "Nível A1 — Aula 04",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a falar sobre o que gosta e não gosta: comida, música, filmes e esportes.",
  "scene": {
    "emoji": "🍕",
    "caption": "Ana e Leo estão conversando sobre o que gostam.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Do you like pizza?",
        "pt": "Você gosta de pizza?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Yes, I do! I love pizza.",
        "pt": "Sim! Eu adoro pizza."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Me too!",
        "pt": "Eu também!"
      }
    ]
  },
  "vocab": [
    [
      "like",
      "láik",
      "gostar",
      "❤️"
    ],
    [
      "love",
      "lâv",
      "amar/adorar",
      "💕"
    ],
    [
      "don't like",
      "dôunt láik",
      "não gostar",
      "👎"
    ],
    [
      "food",
      "fúud",
      "comida",
      "🍽️"
    ],
    [
      "music",
      "miúzik",
      "música",
      "🎵"
    ],
    [
      "movies",
      "múvis",
      "filmes",
      "🎬"
    ],
    [
      "sports",
      "spórts",
      "esportes",
      "⚽"
    ],
    [
      "What about you?",
      "uát abáut iú",
      "E você?",
      "🔁"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I like pizza.",
    "formula": "I like + THING",
    "examples": [
      "I like pizza.",
      "I like music.",
      "I don't like coffee.",
      "Do you like movies?"
    ]
  },
  "simplify": [
    "I like + THING",
    "I don't like + THING",
    "Do you like + THING?",
    "What do you like?"
  ],
  "swap": {
    "base": "I like ______.",
    "options": [
      "🍕 pizza",
      "🎵 music",
      "🎬 movies",
      "⚽ football",
      "📚 books",
      "☕ coffee"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu gosto de pizza.\"",
      "I like pizza.",
      "ái láik pítza"
    ],
    [
      "Traduza para o inglês: \"Eu não gosto de café.\"",
      "I don't like coffee.",
      "ái dôunt láik kófi"
    ],
    [
      "Traduza para o inglês: \"Você gosta de música?\"",
      "Do you like music?",
      "du iú láik miúzik"
    ],
    [
      "Traduza para o inglês: \"O que você gosta?\"",
      "What do you like?",
      "uát du iú láik"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Do you like pizza?",
      "du iú láik pítza",
      "Você gosta de pizza?"
    ],
    [
      "A",
      "Yes, I do! I love pizza. What about you?",
      "iés ái du! ái lâv pítza. uát abáut iú",
      "Sim! Eu adoro pizza. E você?"
    ],
    [
      "L",
      "Me too! Do you like music?",
      "mi tú! du iú láik miúzik",
      "Eu também! Você gosta de música?"
    ],
    [
      "A",
      "Yes, I love music. I don't like sad songs though.",
      "iés ái lâv miúzik. ái dôunt láik sed sóngs dôu",
      "Sim, eu adoro música. Mas eu não gosto de músicas tristes."
    ],
    [
      "L",
      "Really? What kind of movies do you like?",
      "ríli? uát káind âv múvis du iú láik",
      "Sério? Que tipo de filme você gosta?"
    ],
    [
      "A",
      "I like comedies.",
      "ái láik kómedis",
      "Eu gosto de comédias."
    ]
  ],
  "connectors": [
    "What about you?",
    "Me too!",
    "Really?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "My name is Ana.",
      "I'm from Brazil.",
      "I live in Portugal.",
      "I have one brother."
    ],
    "today": [
      "I like...",
      "I don't like...",
      "Do you like...?",
      "What do you like?"
    ],
    "combo": "My name is Ana, I have one brother, and I like pizza."
  },
  "challenge": "Diga 4 frases sobre o que você gosta e não gosta, usando I like, I don't like e Do you like...?",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 4: Gostos.\n\nUse principalmente estas estruturas:\n- I like...\n- I don't like...\n- Do you like...?\n- What do you like?\n\nUse principalmente estas palavras:\nfood, music, movies, sports, like, love\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_05 = {
  "ready": true,
  "label": "05",
  "title": "Casa",
  "eyebrow": "Nível A1 — Aula 05",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a descrever sua casa: os cômodos que ela tem e como usar there is / there are.",
  "scene": {
    "emoji": "🏠",
    "caption": "Ana está descrevendo a casa dela para Leo.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I have a small house.",
        "pt": "Eu tenho uma casa pequena."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "How many rooms are there?",
        "pt": "Quantos cômodos tem?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "There are four rooms.",
        "pt": "Tem quatro cômodos."
      }
    ]
  },
  "vocab": [
    [
      "house",
      "ráus",
      "casa",
      "🏠"
    ],
    [
      "apartment",
      "apártment",
      "apartamento",
      "🏢"
    ],
    [
      "room",
      "rúm",
      "cômodo/quarto",
      "🚪"
    ],
    [
      "kitchen",
      "kítchen",
      "cozinha",
      "🍳"
    ],
    [
      "bathroom",
      "báthrum",
      "banheiro",
      "🚿"
    ],
    [
      "bedroom",
      "bédrum",
      "quarto de dormir",
      "🛏️"
    ],
    [
      "living room",
      "lívin rúm",
      "sala de estar",
      "🛋️"
    ],
    [
      "There is / There are",
      "dhér iz / dhér ar",
      "Há/Existe(m)",
      "📦"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I have a small kitchen.",
    "formula": "I have + a + ADJECTIVE + ROOM",
    "examples": [
      "I have a small kitchen.",
      "I have two bedrooms.",
      "There is a living room.",
      "There are two bathrooms."
    ]
  },
  "simplify": [
    "I have + ROOM",
    "There is + SINGULAR",
    "There are + PLURAL",
    "My room is + ADJECTIVE"
  ],
  "swap": {
    "base": "I have a ______.",
    "options": [
      "🍳 kitchen",
      "🛏️ bedroom",
      "🚿 bathroom",
      "🛋️ living room",
      "🚪 small room",
      "🏢 big apartment"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu tenho uma cozinha pequena.\"",
      "I have a small kitchen.",
      "ái rrev a smól kítchen"
    ],
    [
      "Traduza para o inglês: \"Tem uma sala de estar na minha casa.\"",
      "There is a living room in my house.",
      "dhér iz a lívin rúm in mái ráus"
    ],
    [
      "Traduza para o inglês: \"Tem dois quartos.\"",
      "There are two bedrooms.",
      "dhér ar tú bédrums"
    ],
    [
      "Traduza para o inglês: \"Meu quarto é pequeno.\"",
      "My room is small.",
      "mái rúm iz smól"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Do you live in a house or an apartment?",
      "du iú liv in a ráus or en apártment",
      "Você mora em uma casa ou em um apartamento?"
    ],
    [
      "L",
      "I live in an apartment. It has two bedrooms.",
      "ái liv in en apártment. it rrez tú bédrums",
      "Eu moro em um apartamento. Ele tem dois quartos."
    ],
    [
      "A",
      "Nice! I live in a house. There is a big kitchen and a small living room.",
      "náis! ái liv in a ráus. dhér iz a big kítchen end a smól lívin rúm",
      "Legal! Eu moro em uma casa. Tem uma cozinha grande e uma sala pequena."
    ],
    [
      "L",
      "Is there a garden?",
      "iz dhér a gárden",
      "Tem um jardim?"
    ],
    [
      "A",
      "Yes, there is!",
      "iés, dhér iz",
      "Sim, tem!"
    ],
    [
      "L",
      "That sounds lovely.",
      "dhat sáunds lâvli",
      "Que legal."
    ]
  ],
  "connectors": [
    "That's nice!",
    "Really?",
    "That sounds lovely."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "My name is Ana.",
      "I have one brother.",
      "I like pizza."
    ],
    "today": [
      "I have...",
      "There is...",
      "There are...",
      "My room is..."
    ],
    "combo": "I live in Portugal, and I have a small kitchen and two bedrooms."
  },
  "challenge": "Descreva sua casa em inglês usando 4 frases com I have, There is e There are.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 5: Casa.\n\nUse principalmente estas estruturas:\n- I have...\n- There is...\n- There are...\n- My room is...\n\nUse principalmente estas palavras:\nhouse, apartment, room, kitchen, bathroom, bedroom, living room\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_06 = {
  "ready": true,
  "label": "06",
  "title": "Rotina",
  "eyebrow": "Nível A1 — Aula 06",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a falar sobre o que faz todos os dias: acordar, trabalhar, estudar e dormir.",
  "scene": {
    "emoji": "⏰",
    "caption": "Ana e Leo falam sobre a rotina deles.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What time do you wake up?",
        "pt": "A que horas você acorda?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I wake up at seven.",
        "pt": "Eu acordo às sete."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "That's early!",
        "pt": "Que cedo!"
      }
    ]
  },
  "vocab": [
    [
      "wake up",
      "uêik ap",
      "acordar",
      "⏰"
    ],
    [
      "get up",
      "guét ap",
      "levantar",
      "🛏️"
    ],
    [
      "eat",
      "íit",
      "comer",
      "🍽️"
    ],
    [
      "work",
      "uórk",
      "trabalhar",
      "💼"
    ],
    [
      "study",
      "stâdi",
      "estudar",
      "📚"
    ],
    [
      "go home",
      "gôu rrôum",
      "ir para casa",
      "🏠"
    ],
    [
      "sleep",
      "slíip",
      "dormir",
      "😴"
    ],
    [
      "always / usually / never",
      "óluêis / iújuali / néver",
      "sempre / normalmente / nunca",
      "🔁"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I wake up at seven.",
    "formula": "I + VERB + at + TIME",
    "examples": [
      "I wake up at seven.",
      "I go to work at eight.",
      "I study in the morning.",
      "I sleep at eleven."
    ]
  },
  "simplify": [
    "I + VERB + at + TIME",
    "I always/usually/never + VERB",
    "She wakes up at seven (he/she/it + -s)"
  ],
  "swap": {
    "base": "I wake up at ______.",
    "options": [
      "seven",
      "eight",
      "six thirty",
      "nine",
      "ten",
      "noon"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu acordo às sete.\"",
      "I wake up at seven.",
      "ái uêik ap et séven"
    ],
    [
      "Traduza para o inglês: \"Eu normalmente estudo de manhã.\"",
      "I usually study in the morning.",
      "ái iújuali stâdi in dhe mórnin"
    ],
    [
      "Traduza para o inglês: \"Ela trabalha em casa.\"",
      "She works at home.",
      "chi uórks et rrôum"
    ],
    [
      "Traduza para o inglês: \"Eu vou para casa depois do trabalho.\"",
      "I go home after work.",
      "ái gôu rrôum áfter uórk"
    ]
  ],
  "dialogue": [
    [
      "L",
      "What time do you wake up?",
      "uát táim du iú uêik ap",
      "A que horas você acorda?"
    ],
    [
      "A",
      "I wake up at seven o'clock. And you?",
      "ái uêik ap et séven oclók. end iú",
      "Eu acordo às sete horas. E você?"
    ],
    [
      "L",
      "I usually wake up at six thirty.",
      "ái iújuali uêik ap et six thérti",
      "Eu normalmente acordo às seis e meia."
    ],
    [
      "A",
      "That's early! Do you work in the morning?",
      "dháts érli! du iú uórk in dhe mórnin",
      "Que cedo! Você trabalha de manhã?"
    ],
    [
      "L",
      "Yes, I work from eight to five.",
      "iés, ái uórk from êit tu fáiv",
      "Sim, eu trabalho das oito às cinco."
    ],
    [
      "A",
      "I study in the evening.",
      "ái stâdi in dhi ívnin",
      "Eu estudo à noitinha."
    ]
  ],
  "connectors": [
    "And you?",
    "That's early!",
    "Really?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I have one brother.",
      "I like pizza.",
      "There is a living room."
    ],
    "today": [
      "I wake up at...",
      "I always/usually/never...",
      "She wakes up..."
    ],
    "combo": "I wake up at seven, and I usually study in the evening."
  },
  "challenge": "Descreva sua rotina em inglês usando 4 frases com wake up, work/study e sleep.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 6: Rotina.\n\nUse principalmente estas estruturas:\n- I + VERB + at + TIME\n- I always/usually/never + VERB\n- She/he wakes up at...\n\nUse principalmente estas palavras:\nwake up, work, study, sleep, always, usually, never\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_07 = {
  "ready": true,
  "label": "07",
  "title": "Minha manhã",
  "eyebrow": "Nível A1 — Aula 07",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a contar sua manhã em sequência: primeiro, depois, e depois disso.",
  "scene": {
    "emoji": "🌅",
    "caption": "Ana conta como é a manhã dela.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "First, I wake up.",
        "pt": "Primeiro, eu acordo."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Then, I take a shower.",
        "pt": "Depois, eu tomo banho."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "And after that?",
        "pt": "E depois disso?"
      }
    ]
  },
  "vocab": [
    [
      "take a shower",
      "têik a cháuer",
      "tomar banho",
      "🚿"
    ],
    [
      "have breakfast",
      "rrev brékfast",
      "tomar café da manhã",
      "☕"
    ],
    [
      "get dressed",
      "guét drest",
      "se vestir",
      "👕"
    ],
    [
      "go to work",
      "gôu tu uórk",
      "ir trabalhar",
      "💼"
    ],
    [
      "go to school",
      "gôu tu skúl",
      "ir para a escola",
      "🏫"
    ],
    [
      "brush my teeth",
      "brâch mái tíith",
      "escovar os dentes",
      "🪥"
    ],
    [
      "first / then / after that",
      "férst / dhen / áfter dhat",
      "primeiro / depois / depois disso",
      "➡️"
    ],
    [
      "every day",
      "évri dêi",
      "todos os dias",
      "📅"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "First, I wake up. Then, I take a shower.",
    "formula": "First, I... Then, I... After that, I...",
    "examples": [
      "First, I wake up.",
      "Then, I take a shower.",
      "After that, I have breakfast.",
      "Finally, I go to work."
    ]
  },
  "simplify": [
    "First, I + VERB",
    "Then, I + VERB",
    "After that, I + VERB"
  ],
  "swap": {
    "base": "Then, I ______.",
    "options": [
      "take a shower",
      "have breakfast",
      "get dressed",
      "brush my teeth",
      "go to work",
      "go to school"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Primeiro, eu acordo.\"",
      "First, I wake up.",
      "férst, ái uêik ap"
    ],
    [
      "Traduza para o inglês: \"Depois, eu tomo banho.\"",
      "Then, I take a shower.",
      "dhen, ái têik a cháuer"
    ],
    [
      "Traduza para o inglês: \"Depois disso, eu tomo café da manhã.\"",
      "After that, I have breakfast.",
      "áfter dhat, ái rrev brékfast"
    ],
    [
      "Traduza para o inglês: \"Depois, eu me visto.\"",
      "Then, I get dressed.",
      "dhen, ái guét drest"
    ]
  ],
  "dialogue": [
    [
      "A",
      "What's your morning like?",
      "uáts iór mórnin láik",
      "Como é a sua manhã?"
    ],
    [
      "L",
      "First, I wake up at seven. Then, I take a shower.",
      "férst, ái uêik ap et séven. dhen, ái têik a cháuer",
      "Primeiro, eu acordo às sete. Depois, eu tomo banho."
    ],
    [
      "A",
      "What do you do after that?",
      "uát du iú du áfter dhat",
      "O que você faz depois disso?"
    ],
    [
      "L",
      "After that, I have breakfast and get dressed.",
      "áfter dhat, ái rrev brékfast end guét drest",
      "Depois disso, eu tomo café da manhã e me visto."
    ],
    [
      "A",
      "Do you have breakfast every day?",
      "du iú rrev brékfast évri dêi",
      "Você toma café da manhã todos os dias?"
    ],
    [
      "L",
      "Yes, every day!",
      "iés, évri dêi",
      "Sim, todos os dias!"
    ]
  ],
  "connectors": [
    "What about you?",
    "Every day?",
    "Really?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I wake up at...",
      "I have one brother.",
      "I like pizza."
    ],
    "today": [
      "First, I...",
      "Then, I...",
      "After that, I...",
      "Finally, I..."
    ],
    "combo": "I wake up at seven, then I take a shower and have breakfast."
  },
  "challenge": "Monte sua manhã em inglês usando First, Then e After that — pelo menos 4 frases.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 7: Minha manhã.\n\nUse principalmente estas estruturas:\n- First, I...\n- Then, I...\n- After that, I...\n\nUse principalmente estas palavras:\nwake up, take a shower, have breakfast, get dressed, go to work, go to school\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_08 = {
  "ready": true,
  "label": "08",
  "title": "Dia e noite",
  "eyebrow": "Nível A1 — Aula 08",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a falar sobre os períodos do dia: manhã, tarde, final de tarde e noite.",
  "scene": {
    "emoji": "🌗",
    "caption": "Ana e Leo falam sobre o que fazem em cada parte do dia.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What do you do in the morning?",
        "pt": "O que você faz de manhã?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "In the morning, I study.",
        "pt": "De manhã, eu estudo."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "And at night?",
        "pt": "E à noite?"
      }
    ]
  },
  "vocab": [
    [
      "morning",
      "mórnin",
      "manhã",
      "🌅"
    ],
    [
      "afternoon",
      "afternún",
      "tarde",
      "🌤️"
    ],
    [
      "evening",
      "ívnin",
      "final de tarde/noite",
      "🌆"
    ],
    [
      "night",
      "náit",
      "noite",
      "🌙"
    ],
    [
      "In the morning",
      "in dhe mórnin",
      "de manhã",
      "🌅"
    ],
    [
      "In the afternoon",
      "in dhi afternún",
      "de tarde",
      "🌤️"
    ],
    [
      "In the evening",
      "in dhi ívnin",
      "à noitinha",
      "🌆"
    ],
    [
      "At night",
      "et náit",
      "à noite",
      "🌙"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "In the morning, I study.",
    "formula": "In the + PERIOD, I + VERB",
    "examples": [
      "In the morning, I study.",
      "In the afternoon, I work.",
      "In the evening, I have dinner.",
      "At night, I sleep."
    ]
  },
  "simplify": [
    "In the morning/afternoon/evening, I...",
    "At night, I...",
    "I usually + VERB + in the + PERIOD"
  ],
  "swap": {
    "base": "In the ______, I study.",
    "options": [
      "morning",
      "afternoon",
      "evening"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"De manhã, eu estudo.\"",
      "In the morning, I study.",
      "in dhe mórnin, ái stâdi"
    ],
    [
      "Traduza para o inglês: \"De tarde, eu trabalho.\"",
      "In the afternoon, I work.",
      "in dhi afternún, ái uórk"
    ],
    [
      "Traduza para o inglês: \"À noite, eu durmo.\"",
      "At night, I sleep.",
      "et náit, ái slíip"
    ],
    [
      "Traduza para o inglês: \"O que você normalmente faz à noitinha?\"",
      "What do you usually do in the evening?",
      "uát du iú iújuali du in dhi ívnin"
    ]
  ],
  "dialogue": [
    [
      "A",
      "What do you do in the morning?",
      "uát du iú du in dhe mórnin",
      "O que você faz de manhã?"
    ],
    [
      "L",
      "In the morning, I work. What about you?",
      "in dhe mórnin, ái uórk. uát abáut iú",
      "De manhã, eu trabalho. E você?"
    ],
    [
      "A",
      "I study in the morning. In the afternoon, I work too.",
      "ái stâdi in dhe mórnin. in dhi afternún, ái uórk tú",
      "Eu estudo de manhã. De tarde, eu também trabalho."
    ],
    [
      "L",
      "What do you do at night?",
      "uát du iú du et náit",
      "O que você faz à noite?"
    ],
    [
      "A",
      "At night, I usually watch TV.",
      "et náit, ái iújuali uóch tí ví",
      "À noite, eu normalmente assisto TV."
    ],
    [
      "L",
      "Same here!",
      "sêim rrír",
      "Eu também!"
    ]
  ],
  "connectors": [
    "What about you?",
    "Same here!",
    "Really?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I wake up at...",
      "First, I... Then, I...",
      "I have one brother."
    ],
    "today": [
      "In the morning...",
      "In the afternoon...",
      "In the evening...",
      "At night..."
    ],
    "combo": "I study in the morning, and at night, I usually watch TV."
  },
  "challenge": "Fale sobre sua rotina usando morning, afternoon, evening e night — 4 frases.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 8: Dia e noite.\n\nUse principalmente estas estruturas:\n- In the morning/afternoon/evening, I...\n- At night, I...\n\nUse principalmente estas palavras:\nmorning, afternoon, evening, night, usually\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_09 = {
  "ready": true,
  "label": "09",
  "title": "Dias e horários",
  "eyebrow": "Nível A1 — Aula 09",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende os dias da semana e como perguntar que dia é hoje ou que horas são.",
  "scene": {
    "emoji": "📅",
    "caption": "Ana e Leo falam sobre os dias da semana.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What day is it today?",
        "pt": "Que dia é hoje?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "It's Wednesday.",
        "pt": "É quarta-feira."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Do you work today?",
        "pt": "Você trabalha hoje?"
      }
    ]
  },
  "vocab": [
    [
      "Monday",
      "mândêi",
      "segunda-feira",
      "📅"
    ],
    [
      "Tuesday",
      "tiúzdêi",
      "terça-feira",
      "📅"
    ],
    [
      "Wednesday",
      "uénzdêi",
      "quarta-feira",
      "📅"
    ],
    [
      "Friday",
      "fráidêi",
      "sexta-feira",
      "📅"
    ],
    [
      "Saturday / Sunday",
      "sáterdêi / sândêi",
      "sábado / domingo",
      "📅"
    ],
    [
      "today / tomorrow / yesterday",
      "tudêi / tumórou / iésterdêi",
      "hoje / amanhã / ontem",
      "📆"
    ],
    [
      "What day is it?",
      "uát dêi iz it",
      "Que dia é hoje?",
      "❓"
    ],
    [
      "What time is it?",
      "uát táim iz it",
      "Que horas são?",
      "🕐"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I work on Monday.",
    "formula": "I + VERB + on + DAY",
    "examples": [
      "I work on Monday.",
      "I study on Tuesday.",
      "I don't work on Sunday.",
      "What day is it today?"
    ]
  },
  "simplify": [
    "I + VERB + on + DAY",
    "What day is it?",
    "What time is it?"
  ],
  "swap": {
    "base": "I work on ______.",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Friday",
      "Saturday",
      "Sunday"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu trabalho na segunda-feira.\"",
      "I work on Monday.",
      "ái uórk on mândêi"
    ],
    [
      "Traduza para o inglês: \"Eu não trabalho no domingo.\"",
      "I don't work on Sunday.",
      "ái dôunt uórk on sândêi"
    ],
    [
      "Traduza para o inglês: \"Que dia é hoje?\"",
      "What day is it today?",
      "uát dêi iz it tudêi"
    ],
    [
      "Traduza para o inglês: \"Eu estudo de manhã na terça-feira.\"",
      "I study in the morning on Tuesday.",
      "ái stâdi in dhe mórnin on tiúzdêi"
    ]
  ],
  "dialogue": [
    [
      "L",
      "What day is it today?",
      "uát dêi iz it tudêi",
      "Que dia é hoje?"
    ],
    [
      "A",
      "It's Wednesday. Do you work today?",
      "its uénzdêi. du iú uórk tudêi",
      "É quarta-feira. Você trabalha hoje?"
    ],
    [
      "L",
      "Yes, I work every day except Sunday.",
      "iés, ái uórk évri dêi iksépt sândêi",
      "Sim, eu trabalho todos os dias, menos domingo."
    ],
    [
      "A",
      "What about Saturday?",
      "uát abáut sáterdêi",
      "E no sábado?"
    ],
    [
      "L",
      "I usually study on Saturday.",
      "ái iújuali stâdi on sáterdêi",
      "Eu normalmente estudo no sábado."
    ],
    [
      "A",
      "I don't work on weekends.",
      "ái dôunt uórk on uíkends",
      "Eu não trabalho nos fins de semana."
    ]
  ],
  "connectors": [
    "What about...?",
    "Really?",
    "Me neither."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "In the morning, I...",
      "I wake up at...",
      "I have one brother."
    ],
    "today": [
      "I work on...",
      "What day is it?",
      "What time is it?"
    ],
    "combo": "I work on Monday, Tuesday and Wednesday, and I study in the morning."
  },
  "challenge": "Diga em quais dias você trabalha ou estuda, usando 4 frases com on + dia da semana.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 9: Dias e horários.\n\nUse principalmente estas estruturas:\n- I + VERB + on + DAY\n- What day is it?\n- What time is it?\n\nUse principalmente estas palavras:\nMonday, Tuesday, Wednesday, Friday, Saturday, Sunday, today, tomorrow\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_10 = {
  "ready": true,
  "label": "10",
  "title": "Minha rotina completa",
  "eyebrow": "Nível A1 — Aula 10",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você junta tudo o que aprendeu sobre rotina e conta seu dia inteiro, do início ao fim.",
  "scene": {
    "emoji": "🔁",
    "caption": "Ana conta o dia inteiro dela para Leo.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Let me tell you about my day.",
        "pt": "Deixa eu te contar sobre o meu dia."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "First, I wake up at seven.",
        "pt": "Primeiro, eu acordo às sete."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Then what do you do?",
        "pt": "Depois o que você faz?"
      }
    ]
  },
  "vocab": [
    [
      "every day",
      "évri dêi",
      "todos os dias",
      "📅"
    ],
    [
      "usually",
      "iújuali",
      "normalmente",
      "🔁"
    ],
    [
      "always",
      "óluêis",
      "sempre",
      "⏰"
    ],
    [
      "never",
      "néver",
      "nunca",
      "🚫"
    ],
    [
      "first",
      "férst",
      "primeiro",
      "1️⃣"
    ],
    [
      "then",
      "dhen",
      "depois",
      "➡️"
    ],
    [
      "after that",
      "áfter dhat",
      "depois disso",
      "➡️"
    ],
    [
      "finally",
      "fáinali",
      "finalmente",
      "🏁"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "First, I wake up. Then, I have breakfast, and I go to work.",
    "formula": "FIRST + THEN + AFTER THAT + FINALLY",
    "examples": [
      "First, I wake up at seven.",
      "Then, I have breakfast.",
      "After that, I go to work.",
      "Finally, I go to bed at eleven."
    ]
  },
  "simplify": [
    "First, I...",
    "Then, I...",
    "After that, I...",
    "Finally, I..."
  ],
  "swap": {
    "base": "Finally, I ______.",
    "options": [
      "go to bed",
      "sleep",
      "watch TV",
      "have dinner",
      "relax",
      "study"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Primeiro, eu acordo. Depois, eu tomo banho e tomo café da manhã.\"",
      "First, I wake up. Then, I take a shower and have breakfast.",
      ""
    ],
    [
      "Traduza para o inglês: \"De tarde, eu trabalho. Depois, eu estudo.\"",
      "In the afternoon, I work. Then, I study.",
      ""
    ],
    [
      "Traduza para o inglês: \"À noite, eu janto. Depois, eu assisto TV.\"",
      "In the evening, I have dinner. Then, I watch TV.",
      ""
    ],
    [
      "Traduza para o inglês: \"A que horas você vai dormir?\"",
      "What time do you go to bed?",
      "uát táim du iú gôu tu bed"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Let me tell you about my day. I wake up at seven.",
      "let mi tel iú abáut mái dêi. ái uêik ap et séven",
      "Deixa eu te contar sobre o meu dia. Eu acordo às sete."
    ],
    [
      "L",
      "Then what do you do?",
      "dhen uát du iú du",
      "Depois o que você faz?"
    ],
    [
      "A",
      "Then, I have breakfast and go to work.",
      "dhen, ái rrev brékfast end gôu tu uórk",
      "Depois, eu tomo café da manhã e vou trabalhar."
    ],
    [
      "L",
      "What about at night?",
      "uát abáut et náit",
      "E à noite?"
    ],
    [
      "A",
      "At night, I have dinner and go to bed at eleven.",
      "et náit, ái rrev díner end gôu tu bed et iléven",
      "À noite, eu janto e vou dormir às onze."
    ],
    [
      "L",
      "That's a nice routine!",
      "dháts a náis rutín",
      "Que rotina legal!"
    ]
  ],
  "connectors": [
    "Then what?",
    "What about...?",
    "That's a nice routine!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I wake up at...",
      "In the morning...",
      "I work on..."
    ],
    "today": [
      "First, Then, After that, Finally"
    ],
    "combo": "First, I wake up. Then, I have breakfast. After that, I go to work. Finally, I go to bed."
  },
  "challenge": "Escreva ou fale sua rotina completa do dia usando First, Then, After that e Finally — pelo menos 5 frases.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 10: Minha rotina completa.\n\nUse principalmente estas estruturas:\n- Toda a rotina diária (aulas 6 a 9), usando First, Then, After that, Finally\n\nUse principalmente estas palavras:\nwake up, breakfast, work, study, dinner, sleep, first, then, finally\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_11 = {
  "ready": true,
  "label": "11",
  "title": "Comida",
  "eyebrow": "Nível A1 — Aula 11",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje é dia de falar sobre comida: o que você quer, gosta e não gosta de comer.",
  "scene": {
    "emoji": "🍽️",
    "caption": "Ana e Leo estão decidindo o que comer.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Are you hungry?",
        "pt": "Você está com fome?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Yes! I want some rice and chicken.",
        "pt": "Sim! Eu quero arroz e frango."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Do you like fish?",
        "pt": "Você gosta de peixe?"
      }
    ]
  },
  "vocab": [
    [
      "water",
      "uóter",
      "água",
      "💧"
    ],
    [
      "coffee",
      "kófi",
      "café",
      "☕"
    ],
    [
      "bread",
      "bred",
      "pão",
      "🍞"
    ],
    [
      "rice",
      "ráis",
      "arroz",
      "🍚"
    ],
    [
      "chicken",
      "chíken",
      "frango",
      "🍗"
    ],
    [
      "fish",
      "fish",
      "peixe",
      "🐟"
    ],
    [
      "fruit",
      "frút",
      "fruta",
      "🍎"
    ],
    [
      "vegetables",
      "védjtabols",
      "verduras/legumes",
      "🥦"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I want some rice.",
    "formula": "I want + SOME/A + FOOD",
    "examples": [
      "I want some rice.",
      "I don't want any fish.",
      "Do you like vegetables?",
      "I like fruit."
    ]
  },
  "simplify": [
    "I want + FOOD",
    "I don't want + FOOD",
    "Do you like + FOOD?",
    "I like/I don't like + FOOD"
  ],
  "swap": {
    "base": "I want some ______.",
    "options": [
      "rice",
      "bread",
      "chicken",
      "fish",
      "fruit",
      "vegetables"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu quero arroz.\"",
      "I want some rice.",
      "ái uánt sâm ráis"
    ],
    [
      "Traduza para o inglês: \"Eu não gosto de peixe.\"",
      "I don't like fish.",
      "ái dôunt láik fish"
    ],
    [
      "Traduza para o inglês: \"Você gosta de verduras?\"",
      "Do you like vegetables?",
      "du iú láik védjtabols"
    ],
    [
      "Traduza para o inglês: \"Posso pedir água?\"",
      "Can I have some water?",
      "ken ái rrev sâm uóter"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Are you hungry?",
      "ar iú rrângri",
      "Você está com fome?"
    ],
    [
      "A",
      "Yes! I want some rice and chicken.",
      "iés! ái uánt sâm ráis end chíken",
      "Sim! Eu quero arroz e frango."
    ],
    [
      "L",
      "Do you like fish?",
      "du iú láik fish",
      "Você gosta de peixe?"
    ],
    [
      "A",
      "Not really. I prefer chicken.",
      "not ríli. ái prifér chíken",
      "Não muito. Eu prefiro frango."
    ],
    [
      "L",
      "What about vegetables?",
      "uát abáut védjtabols",
      "E verduras?"
    ],
    [
      "A",
      "I love vegetables!",
      "ái lâv védjtabols",
      "Eu adoro verduras!"
    ]
  ],
  "connectors": [
    "Not really.",
    "What about...?",
    "Me too!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I like pizza.",
      "I work on Monday.",
      "I wake up at..."
    ],
    "today": [
      "I want...",
      "I don't want...",
      "Do you like...?"
    ],
    "combo": "I like pizza, and I want some rice and chicken for dinner."
  },
  "challenge": "Diga o que você quer comer hoje, usando I want, I like e I don't like — 4 frases.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 11: Comida.\n\nUse principalmente estas estruturas:\n- I want...\n- I don't want...\n- Do you like...?\n- I like/I don't like...\n\nUse principalmente estas palavras:\nwater, coffee, bread, rice, chicken, fish, fruit, vegetables\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_12 = {
  "ready": true,
  "label": "12",
  "title": "Compras",
  "eyebrow": "Nível A1 — Aula 12",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a perguntar preços, tamanhos e cores em uma loja.",
  "scene": {
    "emoji": "🛍️",
    "caption": "Ana está numa loja de roupas com Leo.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "How much is this shirt?",
        "pt": "Quanto custa essa camisa?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "It's twenty euros.",
        "pt": "São vinte euros."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "That's a bit expensive.",
        "pt": "Está um pouco caro."
      }
    ]
  },
  "vocab": [
    [
      "price",
      "práis",
      "preço",
      "🏷️"
    ],
    [
      "money",
      "mâni",
      "dinheiro",
      "💰"
    ],
    [
      "cheap",
      "chíip",
      "barato",
      "💵"
    ],
    [
      "expensive",
      "ikspénsiv",
      "caro",
      "💸"
    ],
    [
      "size",
      "sáiz",
      "tamanho",
      "📏"
    ],
    [
      "color",
      "kâler",
      "cor",
      "🎨"
    ],
    [
      "small",
      "smól",
      "pequeno",
      "🔹"
    ],
    [
      "large",
      "lárdj",
      "grande",
      "🔷"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "How much is it?",
    "formula": "How much is/are + THING?",
    "examples": [
      "How much is it?",
      "How much is the shirt?",
      "How much are the shoes?",
      "It's too expensive."
    ]
  },
  "simplify": [
    "How much is/are + THING?",
    "I want + THING",
    "Do you have + THING?",
    "Can I have + THING?"
  ],
  "swap": {
    "base": "It's too ______.",
    "options": [
      "expensive",
      "cheap",
      "small",
      "large",
      "nice"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Quanto custa?\"",
      "How much is it?",
      "rráu mâtch iz it"
    ],
    [
      "Traduza para o inglês: \"Você tem isso em um tamanho menor?\"",
      "Do you have this in a smaller size?",
      "du iú rrev dhis in a smóler sáiz"
    ],
    [
      "Traduza para o inglês: \"Está muito caro.\"",
      "It's too expensive.",
      "its tú ikspénsiv"
    ],
    [
      "Traduza para o inglês: \"Posso levar isso, por favor?\"",
      "Can I have this, please?",
      "ken ái rrev dhis, plíz"
    ]
  ],
  "dialogue": [
    [
      "A",
      "How much is this shirt?",
      "rráu mâtch iz dhis chért",
      "Quanto custa essa camisa?"
    ],
    [
      "L",
      "It's twenty euros.",
      "its tuénti iúrous",
      "São vinte euros."
    ],
    [
      "A",
      "That's a bit expensive. Do you have a smaller size?",
      "dháts a bit ikspénsiv. du iú rrev a smóler sáiz",
      "Está um pouco caro. Você tem um tamanho menor?"
    ],
    [
      "L",
      "Yes, here you are.",
      "iés, rrír iú ar",
      "Sim, aqui está."
    ],
    [
      "A",
      "Great, I'll take it!",
      "greit, áil têik it",
      "Ótimo, vou levar!"
    ],
    [
      "L",
      "Anything else?",
      "énithin els",
      "Mais alguma coisa?"
    ]
  ],
  "connectors": [
    "That's a bit expensive.",
    "Anything else?",
    "Great!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I like pizza.",
      "I want some rice.",
      "My room is small."
    ],
    "today": [
      "How much is/are...?",
      "Do you have...?",
      "It's too expensive."
    ],
    "combo": "I want a small shirt, and I think twenty euros is expensive."
  },
  "challenge": "Simule uma compra em inglês usando How much is it?, Do you have...? e It's too expensive — 4 frases.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 12: Compras.\n\nUse principalmente estas estruturas:\n- How much is/are...?\n- Do you have...?\n- Can I have...?\n- It's too expensive.\n\nUse principalmente estas palavras:\nprice, money, cheap, expensive, size, color, small, large\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_13 = {
  "ready": true,
  "label": "13",
  "title": "No café",
  "eyebrow": "Nível A1 — Aula 13",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a pedir algo em um café: Can I have...?, Anything else? e That's all.",
  "scene": {
    "emoji": "☕",
    "caption": "Ana está pedindo um café e um sanduíche.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Can I have a coffee, please?",
        "pt": "Posso pedir um café, por favor?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Sure. Anything else?",
        "pt": "Claro. Mais alguma coisa?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Yes, a sandwich, please.",
        "pt": "Sim, um sanduíche, por favor."
      }
    ]
  },
  "vocab": [
    [
      "Can I have...?",
      "ken ái rrev",
      "Posso ter/pedir...?",
      "☕"
    ],
    [
      "Anything else?",
      "énithin els",
      "Mais alguma coisa?",
      "➕"
    ],
    [
      "That's all.",
      "dháts ól",
      "É só isso.",
      "✅"
    ],
    [
      "Thank you.",
      "thenk iú",
      "Obrigado(a).",
      "🙏"
    ],
    [
      "coffee",
      "kófi",
      "café",
      "☕"
    ],
    [
      "sandwich",
      "séndwich",
      "sanduíche",
      "🥪"
    ],
    [
      "tea",
      "tíi",
      "chá",
      "🍵"
    ],
    [
      "please",
      "plíz",
      "por favor",
      "🙏"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Can I have a coffee, please?",
    "formula": "Can I have + THING, please?",
    "examples": [
      "Can I have a coffee, please?",
      "Can I have a sandwich?",
      "Anything else?",
      "That's all, thank you."
    ]
  },
  "simplify": [
    "Can I have + THING, please?",
    "Anything else?",
    "That's all."
  ],
  "swap": {
    "base": "Can I have a ______, please?",
    "options": [
      "coffee",
      "sandwich",
      "tea",
      "water",
      "croissant",
      "juice"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Posso pedir um café, por favor?\"",
      "Can I have a coffee, please?",
      "ken ái rrev a kófi, plíz"
    ],
    [
      "Traduza para o inglês: \"Não, é só isso. Obrigado(a).\"",
      "No, that's all. Thank you.",
      "nôu, dháts ól. thenk iú"
    ],
    [
      "Traduza para o inglês: \"Posso pedir um sanduíche?\"",
      "Can I have a sandwich?",
      "ken ái rrev a séndwich"
    ],
    [
      "Traduza para o inglês: \"Tenha um bom dia!\"",
      "Have a nice day!",
      "rrev a náis dêi"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Hi! Can I have a coffee, please?",
      "rrái! ken ái rrev a kófi, plíz",
      "Oi! Posso pedir um café, por favor?"
    ],
    [
      "L",
      "Sure. Anything else?",
      "chúr. énithin els",
      "Claro. Mais alguma coisa?"
    ],
    [
      "A",
      "Yes, a sandwich, please.",
      "iés, a séndwich, plíz",
      "Sim, um sanduíche, por favor."
    ],
    [
      "L",
      "Anything else?",
      "énithin els",
      "Mais alguma coisa?"
    ],
    [
      "A",
      "No, that's all. Thank you.",
      "nôu, dháts ól. thenk iú",
      "Não, é só isso. Obrigada."
    ],
    [
      "L",
      "You're welcome. Have a nice day!",
      "iór uélcâm. rrev a náis dêi",
      "De nada. Tenha um bom dia!"
    ]
  ],
  "connectors": [
    "Anything else?",
    "That's all.",
    "You're welcome."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I want some rice.",
      "How much is it?",
      "I like coffee."
    ],
    "today": [
      "Can I have...?",
      "Anything else?",
      "That's all."
    ],
    "combo": "Can I have a coffee and a sandwich, please? That's all, thank you."
  },
  "challenge": "Peça um lanche em inglês, usando Can I have...?, Anything else? e That's all — pelo menos 4 falas.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 13: No café.\n\nUse principalmente estas estruturas:\n- Can I have...?\n- Anything else?\n- That's all.\n\nUse principalmente estas palavras:\ncoffee, sandwich, tea, please, thank you\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_14 = {
  "ready": true,
  "label": "14",
  "title": "No restaurante",
  "eyebrow": "Nível A1 — Aula 14",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a reservar mesa, pedir comida e pedir a conta em um restaurante.",
  "scene": {
    "emoji": "🍝",
    "caption": "Ana e Leo estão jantando num restaurante.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Do you have a table for two?",
        "pt": "Vocês têm mesa para dois?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Yes. Here's the menu.",
        "pt": "Sim. Aqui está o cardápio."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What do you recommend?",
        "pt": "O que você recomenda?"
      }
    ]
  },
  "vocab": [
    [
      "table",
      "têibol",
      "mesa",
      "🪑"
    ],
    [
      "menu",
      "míniu",
      "cardápio",
      "📋"
    ],
    [
      "order",
      "órder",
      "pedir/pedido",
      "✍️"
    ],
    [
      "bill",
      "bil",
      "conta",
      "🧾"
    ],
    [
      "I'd like...",
      "áid láik",
      "Eu gostaria de...",
      "🍽️"
    ],
    [
      "What do you recommend?",
      "uát du iú rekoménd",
      "O que você recomenda?",
      "👨‍🍳"
    ],
    [
      "reservation",
      "rrezervêichon",
      "reserva",
      "📖"
    ],
    [
      "Could we have the bill?",
      "kud uí rrev dhe bil",
      "Podemos ter a conta?",
      "🧾"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I'd like the chicken, please.",
    "formula": "I'd like + FOOD, please.",
    "examples": [
      "I'd like the chicken, please.",
      "I'd like a table for two.",
      "What do you recommend?",
      "Could we have the bill?"
    ]
  },
  "simplify": [
    "I'd like + FOOD, please",
    "Could we have + THING?",
    "What do you recommend?"
  ],
  "swap": {
    "base": "I'd like the ______, please.",
    "options": [
      "chicken",
      "fish",
      "pasta",
      "salad",
      "steak",
      "soup"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu gostaria do frango, por favor.\"",
      "I'd like the chicken, please.",
      "áid láik dhe chíken, plíz"
    ],
    [
      "Traduza para o inglês: \"Uma mesa para dois, por favor.\"",
      "A table for two, please.",
      "a têibol for tú, plíz"
    ],
    [
      "Traduza para o inglês: \"O que você recomenda?\"",
      "What do you recommend?",
      "uát du iú rekoménd"
    ],
    [
      "Traduza para o inglês: \"Podemos ter a conta?\"",
      "Could we have the bill?",
      "kud uí rrev dhe bil"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Do you have a table for two?",
      "du iú rrev a têibol for tú",
      "Vocês têm mesa para dois?"
    ],
    [
      "A",
      "Yes. Here's the menu.",
      "iés. rrírz dhe míniu",
      "Sim. Aqui está o cardápio."
    ],
    [
      "L",
      "What do you recommend?",
      "uát du iú rekoménd",
      "O que você recomenda?"
    ],
    [
      "A",
      "The chicken is very good.",
      "dhe chíken iz véri gud",
      "O frango é muito bom."
    ],
    [
      "L",
      "I'd like the chicken, please.",
      "áid láik dhe chíken, plíz",
      "Eu gostaria do frango, por favor."
    ],
    [
      "A",
      "Could we have the bill, please?",
      "kud uí rrev dhe bil, plíz",
      "Podemos ter a conta, por favor?"
    ]
  ],
  "connectors": [
    "What do you recommend?",
    "Great choice!",
    "Of course."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Can I have...?",
      "How much is it?",
      "I like pizza."
    ],
    "today": [
      "I'd like...",
      "Could we have...?",
      "What do you recommend?"
    ],
    "combo": "I'd like the chicken, please, and could we have the bill?"
  },
  "challenge": "Simule um pedido em um restaurante usando I'd like, What do you recommend? e Could we have the bill? — 4 falas.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 14: No restaurante.\n\nUse principalmente estas estruturas:\n- I'd like...\n- What do you recommend?\n- Could we have the bill?\n\nUse principalmente estas palavras:\ntable, menu, order, bill, reservation\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_15 = {
  "ready": true,
  "label": "15",
  "title": "Pagar",
  "eyebrow": "Nível A1 — Aula 15",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a pagar por algo: perguntar o preço, escolher a forma de pagamento e agradecer.",
  "scene": {
    "emoji": "💳",
    "caption": "Ana está pagando a conta.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "How much is it?",
        "pt": "Quanto é?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "It's fifteen euros.",
        "pt": "São quinze euros."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Can I pay by card?",
        "pt": "Posso pagar com cartão?"
      }
    ]
  },
  "vocab": [
    [
      "cash",
      "kesh",
      "dinheiro (espécie)",
      "💵"
    ],
    [
      "card",
      "kard",
      "cartão",
      "💳"
    ],
    [
      "change",
      "chêindj",
      "troco",
      "🪙"
    ],
    [
      "receipt",
      "risít",
      "recibo",
      "🧾"
    ],
    [
      "Can I pay by card?",
      "ken ái pêi bái kard",
      "Posso pagar com cartão?",
      "💳"
    ],
    [
      "How much is it?",
      "rráu mâtch iz it",
      "Quanto custa?",
      "🏷️"
    ],
    [
      "Here you are.",
      "rrír iú ar",
      "Aqui está.",
      "🤲"
    ],
    [
      "Keep the change.",
      "kíp dhe chêindj",
      "Fique com o troco.",
      "🪙"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Can I pay by card?",
    "formula": "Can I pay by + METHOD?",
    "examples": [
      "Can I pay by card?",
      "Can I pay in cash?",
      "How much is it?",
      "Here you are."
    ]
  },
  "simplify": [
    "Can I pay by + METHOD?",
    "How much is it?",
    "Keep the change."
  ],
  "swap": {
    "base": "Can I pay by ______?",
    "options": [
      "card",
      "cash",
      "phone",
      "credit card"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Posso pagar com cartão?\"",
      "Can I pay by card?",
      "ken ái pêi bái kard"
    ],
    [
      "Traduza para o inglês: \"Quanto é?\"",
      "How much is it?",
      "rráu mâtch iz it"
    ],
    [
      "Traduza para o inglês: \"Aqui está.\"",
      "Here you are.",
      "rrír iú ar"
    ],
    [
      "Traduza para o inglês: \"Fique com o troco.\"",
      "Keep the change.",
      "kíp dhe chêindj"
    ]
  ],
  "dialogue": [
    [
      "A",
      "How much is it?",
      "rráu mâtch iz it",
      "Quanto é?"
    ],
    [
      "L",
      "It's fifteen euros.",
      "its fiftín iúrous",
      "São quinze euros."
    ],
    [
      "A",
      "Can I pay by card?",
      "ken ái pêi bái kard",
      "Posso pagar com cartão?"
    ],
    [
      "L",
      "Yes, of course.",
      "iés, âv kórs",
      "Sim, claro."
    ],
    [
      "A",
      "Here you are. Keep the change!",
      "rrír iú ar. kíp dhe chêindj",
      "Aqui está. Fique com o troco!"
    ],
    [
      "L",
      "Thank you!",
      "thenk iú",
      "Obrigado!"
    ]
  ],
  "connectors": [
    "Of course.",
    "Thank you!",
    "Here you are."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "How much is it?",
      "Can I have...?",
      "I'd like..."
    ],
    "today": [
      "Can I pay by...?",
      "How much is it?",
      "Keep the change."
    ],
    "combo": "How much is it? Can I pay by card? Here you are."
  },
  "challenge": "Simule um pagamento em inglês usando How much is it?, Can I pay by...? e Here you are — 4 falas.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 15: Pagar.\n\nUse principalmente estas estruturas:\n- Can I pay by...?\n- How much is it?\n- Here you are. / Keep the change.\n\nUse principalmente estas palavras:\ncash, card, change, receipt, price\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_16 = {
  "ready": true,
  "label": "16",
  "title": "Lugares da cidade",
  "eyebrow": "Nível A1 — Aula 16",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende os lugares mais comuns de uma cidade e como dizer para onde está indo.",
  "scene": {
    "emoji": "🏙️",
    "caption": "Ana e Leo falam sobre para onde estão indo.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Where are you going?",
        "pt": "Para onde você está indo?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I'm going to the supermarket.",
        "pt": "Estou indo ao supermercado."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I need to go to the bank.",
        "pt": "Eu preciso ir ao banco."
      }
    ]
  },
  "vocab": [
    [
      "supermarket",
      "súpermárket",
      "supermercado",
      "🏬"
    ],
    [
      "pharmacy",
      "fármasi",
      "farmácia",
      "💊"
    ],
    [
      "hospital",
      "róspital",
      "hospital",
      "🏥"
    ],
    [
      "school",
      "skúl",
      "escola",
      "🏫"
    ],
    [
      "bank",
      "benk",
      "banco",
      "🏦"
    ],
    [
      "restaurant",
      "réstrant",
      "restaurante",
      "🍽️"
    ],
    [
      "park",
      "párk",
      "parque",
      "🌳"
    ],
    [
      "station",
      "stêichon",
      "estação",
      "🚉"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I'm going to the supermarket.",
    "formula": "I'm going to + the + PLACE",
    "examples": [
      "I'm going to the supermarket.",
      "I need to go to the bank.",
      "There is a park near here.",
      "I'm going to the pharmacy."
    ]
  },
  "simplify": [
    "I'm going to + the + PLACE",
    "I need to go to + the + PLACE",
    "There is a + PLACE"
  ],
  "swap": {
    "base": "I'm going to the ______.",
    "options": [
      "supermarket",
      "pharmacy",
      "bank",
      "park",
      "school",
      "hospital"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu estou indo ao supermercado.\"",
      "I'm going to the supermarket.",
      "áim gôuin tu dhe súpermárket"
    ],
    [
      "Traduza para o inglês: \"Eu preciso ir ao banco.\"",
      "I need to go to the bank.",
      "ái níid tu gôu tu dhe benk"
    ],
    [
      "Traduza para o inglês: \"Tem um parque perto daqui.\"",
      "There is a park near here.",
      "dhér iz a párk níir rrír"
    ],
    [
      "Traduza para o inglês: \"Onde fica a farmácia?\"",
      "Where is the pharmacy?",
      "uér iz dhe fármasi"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Where are you going?",
      "uér ar iú gôuin",
      "Para onde você está indo?"
    ],
    [
      "A",
      "I'm going to the supermarket. I need to buy some food.",
      "áim gôuin tu dhe súpermárket. ái níid tu bái sâm fúud",
      "Estou indo ao supermercado. Preciso comprar comida."
    ],
    [
      "L",
      "I need to go to the bank.",
      "ái níid tu gôu tu dhe benk",
      "Eu preciso ir ao banco."
    ],
    [
      "A",
      "Is there a bank near here?",
      "iz dhér a benk níir rrír",
      "Tem um banco perto daqui?"
    ],
    [
      "L",
      "Yes, there is one next to the park.",
      "iés, dhér iz uán nekst tu dhe párk",
      "Sim, tem um ao lado do parque."
    ],
    [
      "A",
      "Great, let's go together!",
      "greit, lets gôu tugédher",
      "Ótimo, vamos juntos!"
    ]
  ],
  "connectors": [
    "Is there a...?",
    "Great!",
    "Let's go!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I want some rice.",
      "How much is it?",
      "I have one brother."
    ],
    "today": [
      "I'm going to...",
      "I need to go to...",
      "There is a..."
    ],
    "combo": "I'm going to the supermarket, and then I need to go to the bank."
  },
  "challenge": "Diga 4 lugares da cidade que você precisa visitar hoje, usando I'm going to e I need to go to.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 16: Lugares da cidade.\n\nUse principalmente estas estruturas:\n- I'm going to...\n- I need to go to...\n- There is a...\n\nUse principalmente estas palavras:\nsupermarket, pharmacy, hospital, school, bank, restaurant, park, station\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_17 = {
  "ready": true,
  "label": "17",
  "title": "Onde fica?",
  "eyebrow": "Nível A1 — Aula 17",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a perguntar onde fica um lugar e a dizer se ele é perto ou longe.",
  "scene": {
    "emoji": "📍",
    "caption": "Ana pergunta a Leo onde fica a estação.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Excuse me, where is the station?",
        "pt": "Com licença, onde fica a estação?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "It's near here, next to the bank.",
        "pt": "Fica perto daqui, ao lado do banco."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Is it far from here?",
        "pt": "Fica longe daqui?"
      }
    ]
  },
  "vocab": [
    [
      "Where is...?",
      "uér iz",
      "Onde fica...?",
      "📍"
    ],
    [
      "Is there a...?",
      "iz dhér a",
      "Tem um/uma...?",
      "❓"
    ],
    [
      "It's here.",
      "its rrír",
      "Fica aqui.",
      "📌"
    ],
    [
      "It's there.",
      "its dhér",
      "Fica ali.",
      "📌"
    ],
    [
      "It's near.",
      "its níir",
      "Fica perto.",
      "🔜"
    ],
    [
      "It's far.",
      "its fár",
      "Fica longe.",
      "🔙"
    ],
    [
      "next to",
      "nekst tu",
      "ao lado de",
      "↔️"
    ],
    [
      "around the corner",
      "aráund dhe kórner",
      "ali na esquina",
      "📐"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Where is the bank?",
    "formula": "Where is + the + PLACE?",
    "examples": [
      "Where is the bank?",
      "Is there a pharmacy near here?",
      "It's near.",
      "It's around the corner."
    ]
  },
  "simplify": [
    "Where is + PLACE?",
    "Is there a + PLACE?",
    "It's near/far/here/there"
  ],
  "swap": {
    "base": "It's ______.",
    "options": [
      "near",
      "far",
      "here",
      "there",
      "around the corner",
      "next to the park"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Onde fica o banco?\"",
      "Where is the bank?",
      "uér iz dhe benk"
    ],
    [
      "Traduza para o inglês: \"Tem uma farmácia perto daqui?\"",
      "Is there a pharmacy near here?",
      "iz dhér a fármasi níir rrír"
    ],
    [
      "Traduza para o inglês: \"Fica ao lado do parque.\"",
      "It's next to the park.",
      "its nekst tu dhe párk"
    ],
    [
      "Traduza para o inglês: \"Não é longe, fica ali na esquina.\"",
      "It's not far, it's around the corner.",
      "its not fár, its aráund dhe kórner"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Excuse me, where is the station?",
      "ikskiúz mi, uér iz dhe stêichon",
      "Com licença, onde fica a estação?"
    ],
    [
      "A",
      "It's near here, next to the bank.",
      "its níir rrír, nekst tu dhe benk",
      "Fica perto daqui, ao lado do banco."
    ],
    [
      "L",
      "Is it far from here?",
      "iz it fár from rrír",
      "Fica longe daqui?"
    ],
    [
      "A",
      "No, it's not far. It's around the corner.",
      "nôu, its not fár. its aráund dhe kórner",
      "Não, não é longe. Fica ali na esquina."
    ],
    [
      "L",
      "Great, thank you!",
      "greit, thenk iú",
      "Ótimo, obrigado!"
    ],
    [
      "A",
      "You're welcome!",
      "iór uélcâm",
      "De nada!"
    ]
  ],
  "connectors": [
    "Excuse me.",
    "Thank you!",
    "You're welcome!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I'm going to...",
      "There is a...",
      "I need to go to..."
    ],
    "today": [
      "Where is...?",
      "Is there a...?",
      "It's near/far."
    ],
    "combo": "The bank is near here, next to the park."
  },
  "challenge": "Pergunte e responda onde ficam 3 lugares da sua cidade, usando Where is...? e It's near/far.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 17: Onde fica?.\n\nUse principalmente estas estruturas:\n- Where is...?\n- Is there a...?\n- It's near/far/here/there.\n\nUse principalmente estas palavras:\nnear, far, here, there, next to, around the corner\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_18 = {
  "ready": true,
  "label": "18",
  "title": "Direções",
  "eyebrow": "Nível A1 — Aula 18",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a dar e entender direções: esquerda, direita, em frente.",
  "scene": {
    "emoji": "🧭",
    "caption": "Leo pergunta como chegar à estação.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "How do I get to the station?",
        "pt": "Como chego à estação?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Go straight, then turn left.",
        "pt": "Vá em frente, depois vire à esquerda."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Turn left, okay.",
        "pt": "Virar à esquerda, ok."
      }
    ]
  },
  "vocab": [
    [
      "left",
      "left",
      "esquerda",
      "⬅️"
    ],
    [
      "right",
      "ráit",
      "direita",
      "➡️"
    ],
    [
      "straight",
      "strêit",
      "em frente",
      "⬆️"
    ],
    [
      "next to",
      "nekst tu",
      "ao lado de",
      "↔️"
    ],
    [
      "opposite",
      "ópozit",
      "de frente para",
      "🔄"
    ],
    [
      "turn",
      "térn",
      "virar",
      "🔁"
    ],
    [
      "Go straight.",
      "gôu strêit",
      "Vá em frente.",
      "⬆️"
    ],
    [
      "Turn left / right.",
      "térn left / ráit",
      "Vire à esquerda/direita.",
      "🔁"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Turn left, then go straight.",
    "formula": "Turn + LEFT/RIGHT, then Go straight",
    "examples": [
      "Turn left.",
      "Turn right.",
      "Go straight.",
      "It's next to the bank."
    ]
  },
  "simplify": [
    "Turn left/right",
    "Go straight",
    "It's next to/opposite + PLACE"
  ],
  "swap": {
    "base": "Turn ______.",
    "options": [
      "left",
      "right",
      "then go straight"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Vire à esquerda na esquina.\"",
      "Turn left at the corner.",
      "térn left et dhe kórner"
    ],
    [
      "Traduza para o inglês: \"Vá em frente por dois minutos.\"",
      "Go straight for two minutes.",
      "gôu strêit for tú mínits"
    ],
    [
      "Traduza para o inglês: \"Fica ao lado do banco.\"",
      "It's next to the bank.",
      "its nekst tu dhe benk"
    ],
    [
      "Traduza para o inglês: \"O parque fica em frente à escola.\"",
      "The park is opposite the school.",
      "dhe párk iz ópozit dhe skúl"
    ]
  ],
  "dialogue": [
    [
      "L",
      "How do I get to the station?",
      "rráu du ái guét tu dhe stêichon",
      "Como eu chego à estação?"
    ],
    [
      "A",
      "Go straight, then turn left.",
      "gôu strêit, dhen térn left",
      "Vá em frente, depois vire à esquerda."
    ],
    [
      "L",
      "Turn left, okay. Then what?",
      "térn left, okêi. dhen uát",
      "Virar à esquerda, ok. Depois o quê?"
    ],
    [
      "A",
      "It's next to the bank, opposite the park.",
      "its nekst tu dhe benk, ópozit dhe párk",
      "Fica ao lado do banco, em frente ao parque."
    ],
    [
      "L",
      "Thank you so much!",
      "thenk iú sôu mâtch",
      "Muito obrigado!"
    ],
    [
      "A",
      "You're welcome. Have a good trip!",
      "iór uélcâm. rrev a gud trip",
      "De nada. Tenha uma boa viagem!"
    ]
  ],
  "connectors": [
    "Okay.",
    "Then what?",
    "Thank you so much!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Where is...?",
      "It's near/far.",
      "There is a..."
    ],
    "today": [
      "Turn left/right",
      "Go straight",
      "next to / opposite"
    ],
    "combo": "Go straight, then turn left. It's next to the bank."
  },
  "challenge": "Explique como chegar a um lugar perto de você, usando Go straight, Turn left/right e next to.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 18: Direções.\n\nUse principalmente estas estruturas:\n- Go straight.\n- Turn left/right.\n- It's next to/opposite...\n\nUse principalmente estas palavras:\nleft, right, straight, next to, opposite, turn\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_19 = {
  "ready": true,
  "label": "19",
  "title": "Transporte",
  "eyebrow": "Nível A1 — Aula 19",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a pedir uma passagem e perguntar sobre ônibus, trem e táxi.",
  "scene": {
    "emoji": "🚌",
    "caption": "Ana está comprando uma passagem de ônibus.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I need a ticket to the city center.",
        "pt": "Preciso de uma passagem para o centro."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Sure. That's three euros.",
        "pt": "Claro. São três euros."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "What time is the next bus?",
        "pt": "A que horas é o próximo ônibus?"
      }
    ]
  },
  "vocab": [
    [
      "bus",
      "bâs",
      "ônibus",
      "🚌"
    ],
    [
      "train",
      "trêin",
      "trem",
      "🚆"
    ],
    [
      "taxi",
      "téksi",
      "táxi",
      "🚕"
    ],
    [
      "car",
      "kar",
      "carro",
      "🚗"
    ],
    [
      "station",
      "stêichon",
      "estação",
      "🚉"
    ],
    [
      "ticket",
      "tíket",
      "passagem/bilhete",
      "🎫"
    ],
    [
      "Where is the station?",
      "uér iz dhe stêichon",
      "Onde fica a estação?",
      "📍"
    ],
    [
      "What time is the bus?",
      "uát táim iz dhe bâs",
      "A que horas é o ônibus?",
      "🕐"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I need a ticket.",
    "formula": "I need + a/an + THING",
    "examples": [
      "I need a ticket.",
      "Where is the train station?",
      "What time is the bus?",
      "How much is a ticket?"
    ]
  },
  "simplify": [
    "I need + THING",
    "Where is + PLACE?",
    "What time is + THING?",
    "How much is + THING?"
  ],
  "swap": {
    "base": "I need a ______.",
    "options": [
      "ticket",
      "taxi",
      "bus",
      "train",
      "map"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu preciso de uma passagem.\"",
      "I need a ticket.",
      "ái níid a tíket"
    ],
    [
      "Traduza para o inglês: \"Onde fica a estação de ônibus?\"",
      "Where is the bus station?",
      "uér iz dhe bâs stêichon"
    ],
    [
      "Traduza para o inglês: \"A que horas é o trem?\"",
      "What time is the train?",
      "uát táim iz dhe trêin"
    ],
    [
      "Traduza para o inglês: \"Quanto custa uma passagem?\"",
      "How much is a ticket?",
      "rráu mâtch iz a tíket"
    ]
  ],
  "dialogue": [
    [
      "A",
      "I need a ticket to the city center.",
      "ái níid a tíket tu dhe síti sénter",
      "Eu preciso de uma passagem para o centro."
    ],
    [
      "L",
      "Sure. That's three euros.",
      "chúr. dháts thrí iúrous",
      "Claro. São três euros."
    ],
    [
      "A",
      "What time is the next bus?",
      "uát táim iz dhe nekst bâs",
      "A que horas é o próximo ônibus?"
    ],
    [
      "L",
      "It's in ten minutes.",
      "its in ten mínits",
      "É em dez minutos."
    ],
    [
      "A",
      "Where is the bus stop?",
      "uér iz dhe bâs stop",
      "Onde fica o ponto de ônibus?"
    ],
    [
      "L",
      "It's right there, next to the station.",
      "its ráit dhér, nekst tu dhe stêichon",
      "Fica ali, ao lado da estação."
    ]
  ],
  "connectors": [
    "Sure.",
    "Right there.",
    "Thank you!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Where is...?",
      "Turn left/right.",
      "How much is it?"
    ],
    "today": [
      "I need a...",
      "Where is...?",
      "What time is...?",
      "How much is...?"
    ],
    "combo": "I need a ticket, and I need to know what time the bus is."
  },
  "challenge": "Simule comprar uma passagem, usando I need a ticket, What time is the bus? e How much is it?",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 19: Transporte.\n\nUse principalmente estas estruturas:\n- I need a...\n- Where is...?\n- What time is...?\n- How much is...?\n\nUse principalmente estas palavras:\nbus, train, taxi, car, station, ticket\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_20 = {
  "ready": true,
  "label": "20",
  "title": "Viagem",
  "eyebrow": "Nível A1 — Aula 20",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você junta tudo sobre aeroporto, hotel e transporte em uma mini viagem completa.",
  "scene": {
    "emoji": "✈️",
    "caption": "Ana está fazendo o check-in em um hotel.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Hi, I have a reservation.",
        "pt": "Oi, eu tenho uma reserva."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Welcome! How many nights will you stay?",
        "pt": "Bem-vinda! Por quantas noites vai ficar?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Three nights.",
        "pt": "Três noites."
      }
    ]
  },
  "vocab": [
    [
      "airport",
      "érport",
      "aeroporto",
      "✈️"
    ],
    [
      "passport",
      "pásport",
      "passaporte",
      "🛂"
    ],
    [
      "luggage",
      "lâgidj",
      "bagagem",
      "🧳"
    ],
    [
      "hotel",
      "rrôutél",
      "hotel",
      "🏨"
    ],
    [
      "reservation",
      "rrezervêichon",
      "reserva",
      "📖"
    ],
    [
      "flight",
      "fláit",
      "voo",
      "✈️"
    ],
    [
      "I have a reservation.",
      "ái rrev a rrezervêichon",
      "Eu tenho uma reserva.",
      "📖"
    ],
    [
      "Is breakfast included?",
      "iz brékfast inklúdid",
      "O café da manhã está incluído?",
      "🍳"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I have a reservation.",
    "formula": "I have a + THING",
    "examples": [
      "I have a reservation.",
      "I have my passport.",
      "Is breakfast included?",
      "Where is the airport?"
    ]
  },
  "simplify": [
    "I have a + THING",
    "Is + THING + included?",
    "Where is + PLACE?"
  ],
  "swap": {
    "base": "I have a ______.",
    "options": [
      "reservation",
      "passport",
      "ticket",
      "flight at 9am"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu tenho uma reserva.\"",
      "I have a reservation.",
      "ái rrev a rrezervêichon"
    ],
    [
      "Traduza para o inglês: \"O café da manhã está incluído?\"",
      "Is breakfast included?",
      "iz brékfast inklúdid"
    ],
    [
      "Traduza para o inglês: \"Onde fica o aeroporto?\"",
      "Where is the airport?",
      "uér iz dhi érport"
    ],
    [
      "Traduza para o inglês: \"Meu voo é às nove.\"",
      "My flight is at nine.",
      "mái fláit iz et náin"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Hi, I have a reservation. My name is Ana.",
      "rrái, ái rrev a rrezervêichon. mái nêim iz Ana",
      "Oi, eu tenho uma reserva. Meu nome é Ana."
    ],
    [
      "L",
      "Welcome! How many nights will you stay?",
      "uélcâm! rráu méni náits uil iú stêi",
      "Bem-vinda! Por quantas noites vai ficar?"
    ],
    [
      "A",
      "Three nights. Is breakfast included?",
      "thrí náits. iz brékfast inklúdid",
      "Três noites. O café da manhã está incluído?"
    ],
    [
      "L",
      "Yes, it is. Here's your key.",
      "iés, it iz. rrírz iór kí",
      "Sim, está. Aqui está a sua chave."
    ],
    [
      "A",
      "Where is my room?",
      "uér iz mái rúm",
      "Onde fica o meu quarto?"
    ],
    [
      "L",
      "It's on the second floor. Enjoy your stay!",
      "its on dhe sékond flór. endjói iór stêi",
      "Fica no segundo andar. Aproveite a estadia!"
    ]
  ],
  "connectors": [
    "Welcome!",
    "Enjoy your stay!",
    "Thank you!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "My name is Ana.",
      "I need a ticket.",
      "Where is..."
    ],
    "today": [
      "I have a reservation.",
      "Is breakfast included?",
      "Where is...?"
    ],
    "combo": "My name is Ana, I have a reservation, and I live in Portugal."
  },
  "challenge": "Simule um check-in de viagem, usando I have a reservation, Is breakfast included? e Where is...?",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 20: Viagem.\n\nUse principalmente estas estruturas:\n- I have a...\n- Is ... included?\n- Where is...?\n\nUse principalmente estas palavras:\nairport, passport, luggage, hotel, reservation, flight\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_21 = {
  "ready": true,
  "label": "21",
  "title": "O que está acontecendo?",
  "eyebrow": "Nível A1 — Aula 21",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a dizer o que está acontecendo agora, usando o presente contínuo de forma simples.",
  "scene": {
    "emoji": "🎬",
    "caption": "Ana pergunta o que Leo está fazendo.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "What are you doing?",
        "pt": "O que você está fazendo?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I'm working right now.",
        "pt": "Estou trabalhando agora."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I'm eating breakfast.",
        "pt": "Estou tomando café da manhã."
      }
    ]
  },
  "vocab": [
    [
      "eating",
      "ítin",
      "comendo",
      "🍽️"
    ],
    [
      "working",
      "uórkin",
      "trabalhando",
      "💼"
    ],
    [
      "sleeping",
      "slíipin",
      "dormindo",
      "😴"
    ],
    [
      "talking",
      "tókin",
      "conversando",
      "💬"
    ],
    [
      "walking",
      "uókin",
      "andando",
      "🚶"
    ],
    [
      "watching TV",
      "uóchin tí ví",
      "assistindo TV",
      "📺"
    ],
    [
      "What are you doing?",
      "uát ar iú dúin",
      "O que você está fazendo?",
      "❓"
    ],
    [
      "right now",
      "ráit náu",
      "agora mesmo",
      "⏱️"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I am eating.",
    "formula": "I am / She is / They are + VERB-ing",
    "examples": [
      "I am eating.",
      "She is working.",
      "He is sleeping.",
      "They are talking."
    ]
  },
  "simplify": [
    "I am + VERB-ing",
    "She/He is + VERB-ing",
    "They are + VERB-ing",
    "What are you doing?"
  ],
  "swap": {
    "base": "I am ______ right now.",
    "options": [
      "eating",
      "working",
      "studying",
      "walking",
      "talking",
      "relaxing"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu estou comendo agora.\"",
      "I am eating right now.",
      "ái em ítin ráit náu"
    ],
    [
      "Traduza para o inglês: \"Ela está trabalhando.\"",
      "She is working.",
      "chi iz uórkin"
    ],
    [
      "Traduza para o inglês: \"O que você está fazendo?\"",
      "What are you doing?",
      "uát ar iú dúin"
    ],
    [
      "Traduza para o inglês: \"Eles estão conversando.\"",
      "They are talking.",
      "dhêi ar tókin"
    ]
  ],
  "dialogue": [
    [
      "L",
      "What are you doing?",
      "uát ar iú dúin",
      "O que você está fazendo?"
    ],
    [
      "A",
      "I'm eating breakfast. What about you?",
      "áim ítin brékfast. uát abáut iú",
      "Estou tomando café da manhã. E você?"
    ],
    [
      "L",
      "I'm working right now.",
      "áim uórkin ráit náu",
      "Estou trabalhando agora."
    ],
    [
      "A",
      "What is Leo's sister doing?",
      "uát iz Leos síster dúin",
      "O que a irmã do Leo está fazendo?"
    ],
    [
      "L",
      "She is sleeping. She works at night.",
      "chi iz slíipin. chi uórks et náit",
      "Ela está dormindo. Ela trabalha à noite."
    ],
    [
      "A",
      "That's interesting!",
      "dháts íntrestin",
      "Que interessante!"
    ]
  ],
  "connectors": [
    "What about you?",
    "That's interesting!",
    "Really?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I wake up at...",
      "I work on...",
      "In the evening, I..."
    ],
    "today": [
      "I am + -ing",
      "She/He is + -ing",
      "They are + -ing"
    ],
    "combo": "I am eating breakfast, and I am talking to Leo."
  },
  "challenge": "Diga o que você está fazendo agora e o que outra pessoa está fazendo, usando I am / She is / They are + -ing.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 21: O que está acontecendo?.\n\nUse principalmente estas estruturas:\n- I am + verbo-ing\n- She/He is + verbo-ing\n- They are + verbo-ing\n- What are you doing?\n\nUse principalmente estas palavras:\neating, working, sleeping, talking, walking, watching TV\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_22 = {
  "ready": true,
  "label": "22",
  "title": "Pessoas e aparência",
  "eyebrow": "Nível A1 — Aula 22",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a descrever como as pessoas são: altura, idade, personalidade e características.",
  "scene": {
    "emoji": "🧍",
    "caption": "Ana e Leo descrevem os irmãos deles.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "What does your sister look like?",
        "pt": "Como é a sua irmã?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "She is tall and has brown hair.",
        "pt": "Ela é alta e tem cabelo castanho."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Is she friendly?",
        "pt": "Ela é simpática?"
      }
    ]
  },
  "vocab": [
    [
      "tall",
      "tól",
      "alto(a)",
      "📏"
    ],
    [
      "short",
      "chort",
      "baixo(a)",
      "📏"
    ],
    [
      "young",
      "iâng",
      "jovem",
      "🧒"
    ],
    [
      "old",
      "ôuld",
      "idoso(a)",
      "👴"
    ],
    [
      "happy",
      "rrépi",
      "feliz",
      "😄"
    ],
    [
      "friendly",
      "fréndli",
      "simpático(a)",
      "🤗"
    ],
    [
      "hair",
      "rrér",
      "cabelo",
      "💇"
    ],
    [
      "eyes",
      "áiz",
      "olhos",
      "👀"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "She is tall.",
    "formula": "He/She is + ADJECTIVE / He/She has + FEATURE",
    "examples": [
      "She is tall.",
      "He is friendly.",
      "She has brown hair.",
      "He has blue eyes."
    ]
  },
  "simplify": [
    "He/She is + ADJECTIVE",
    "He/She has + FEATURE"
  ],
  "swap": {
    "base": "She is ______.",
    "options": [
      "tall",
      "short",
      "young",
      "friendly",
      "happy"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Ela é alta.\"",
      "She is tall.",
      "chi iz tól"
    ],
    [
      "Traduza para o inglês: \"Ele tem cabelo castanho.\"",
      "He has brown hair.",
      "rri rrez bráun rrér"
    ],
    [
      "Traduza para o inglês: \"Ela tem olhos azuis.\"",
      "She has blue eyes.",
      "chi rrez blú áiz"
    ],
    [
      "Traduza para o inglês: \"Meu irmão é alto e simpático.\"",
      "My brother is tall and friendly.",
      "mái brâdher iz tól end fréndli"
    ]
  ],
  "dialogue": [
    [
      "A",
      "What does your sister look like?",
      "uát dâz iór síster lúk láik",
      "Como é a sua irmã?"
    ],
    [
      "L",
      "She is tall and has brown hair.",
      "chi iz tól end rrez bráun rrér",
      "Ela é alta e tem cabelo castanho."
    ],
    [
      "A",
      "Is she friendly?",
      "iz chi fréndli",
      "Ela é simpática?"
    ],
    [
      "L",
      "Yes, very friendly! What about your brother?",
      "iés, véri fréndli! uát abáut iór brâdher",
      "Sim, bem simpática! E o seu irmão?"
    ],
    [
      "A",
      "He is short and has blue eyes. He's very happy.",
      "rri iz chort end rrez blú áiz. rriz véri rrépi",
      "Ele é baixo e tem olhos azuis. Ele é muito feliz."
    ],
    [
      "L",
      "Sounds nice!",
      "sáunds náis",
      "Que legal!"
    ]
  ],
  "connectors": [
    "What about...?",
    "Sounds nice!",
    "Really?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I have one brother.",
      "I am eating.",
      "I like pizza."
    ],
    "today": [
      "He/She is...",
      "He/She has..."
    ],
    "combo": "My brother is tall and friendly, and he has blue eyes."
  },
  "challenge": "Descreva 2 pessoas da sua família usando is + adjetivo e has + característica.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 22: Pessoas e aparência.\n\nUse principalmente estas estruturas:\n- He/She is...\n- He/She has...\n\nUse principalmente estas palavras:\ntall, short, young, old, happy, friendly, hair, eyes\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_23 = {
  "ready": true,
  "label": "23",
  "title": "Roupas",
  "eyebrow": "Nível A1 — Aula 23",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a falar sobre roupas e a dizer o que está vestindo.",
  "scene": {
    "emoji": "👕",
    "caption": "Ana e Leo falam sobre o que estão vestindo.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What are you wearing today?",
        "pt": "O que você está vestindo hoje?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I'm wearing a dress and a jacket.",
        "pt": "Estou de vestido e jaqueta."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What about me?",
        "pt": "E eu?"
      }
    ]
  },
  "vocab": [
    [
      "shirt",
      "chért",
      "camisa",
      "👔"
    ],
    [
      "T-shirt",
      "tí-chért",
      "camiseta",
      "👕"
    ],
    [
      "pants",
      "pents",
      "calça",
      "👖"
    ],
    [
      "shoes",
      "chúz",
      "sapatos",
      "👟"
    ],
    [
      "dress",
      "dres",
      "vestido",
      "👗"
    ],
    [
      "jacket",
      "djáket",
      "jaqueta",
      "🧥"
    ],
    [
      "hat",
      "rret",
      "chapéu",
      "🎩"
    ],
    [
      "jeans",
      "djíns",
      "jeans",
      "👖"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I'm wearing a jacket.",
    "formula": "I'm wearing + CLOTHING",
    "examples": [
      "I'm wearing a jacket.",
      "She is wearing a dress.",
      "What are you wearing?",
      "He is wearing jeans."
    ]
  },
  "simplify": [
    "I'm wearing + CLOTHING",
    "She/He is wearing + CLOTHING",
    "What are you wearing?"
  ],
  "swap": {
    "base": "I'm wearing a ______.",
    "options": [
      "jacket",
      "shirt",
      "dress",
      "hat",
      "T-shirt"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu estou de jaqueta.\"",
      "I'm wearing a jacket.",
      "áim uérin a djáket"
    ],
    [
      "Traduza para o inglês: \"Ela está de vestido.\"",
      "She is wearing a dress.",
      "chi iz uérin a dres"
    ],
    [
      "Traduza para o inglês: \"O que você está vestindo?\"",
      "What are you wearing?",
      "uát ar iú uérin"
    ],
    [
      "Traduza para o inglês: \"Ele está de jeans azul.\"",
      "He is wearing blue jeans.",
      "rri iz uérin blú djíns"
    ]
  ],
  "dialogue": [
    [
      "L",
      "What are you wearing today?",
      "uát ar iú uérin tudêi",
      "O que você está vestindo hoje?"
    ],
    [
      "A",
      "I'm wearing a dress and a jacket. What about you?",
      "áim uérin a dres end a djáket. uát abáut iú",
      "Estou de vestido e jaqueta. E você?"
    ],
    [
      "L",
      "I'm wearing a shirt and jeans.",
      "áim uérin a chért end djíns",
      "Estou de camisa e jeans."
    ],
    [
      "A",
      "Nice! Is it cold outside?",
      "náis! iz it kôuld áutsáid",
      "Legal! Está frio lá fora?"
    ],
    [
      "L",
      "Yes, I need a hat too!",
      "iés, ái níid a rret tú",
      "Sim, eu preciso de um chapéu também!"
    ],
    [
      "A",
      "Good idea!",
      "gud áidía",
      "Boa ideia!"
    ]
  ],
  "connectors": [
    "What about you?",
    "Good idea!",
    "Nice!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "It's cold.",
      "She is tall.",
      "I am eating."
    ],
    "today": [
      "I'm wearing...",
      "She/He is wearing...",
      "What are you wearing?"
    ],
    "combo": "I'm wearing a jacket because it's cold today."
  },
  "challenge": "Descreva o que você está vestindo hoje, usando I'm wearing — 4 peças de roupa.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 23: Roupas.\n\nUse principalmente estas estruturas:\n- I'm wearing...\n- She/He is wearing...\n- What are you wearing?\n\nUse principalmente estas palavras:\nshirt, T-shirt, pants, shoes, dress, jacket, hat, jeans\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_24 = {
  "ready": true,
  "label": "24",
  "title": "Clima",
  "eyebrow": "Nível A1 — Aula 24",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a falar sobre o tempo: sol, chuva, frio e calor.",
  "scene": {
    "emoji": "☀️",
    "caption": "Ana e Leo falam sobre o tempo hoje.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "What's the weather like today?",
        "pt": "Como está o tempo hoje?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "It's sunny and warm.",
        "pt": "Está ensolarado e ameno."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Great! Let's go to the park.",
        "pt": "Ótimo! Vamos ao parque."
      }
    ]
  },
  "vocab": [
    [
      "sunny",
      "sâni",
      "ensolarado",
      "☀️"
    ],
    [
      "rainy",
      "rêini",
      "chuvoso",
      "🌧️"
    ],
    [
      "cloudy",
      "kláudi",
      "nublado",
      "☁️"
    ],
    [
      "windy",
      "uíndi",
      "ventoso",
      "💨"
    ],
    [
      "cold",
      "kôuld",
      "frio",
      "❄️"
    ],
    [
      "hot",
      "rrót",
      "quente",
      "🔥"
    ],
    [
      "warm",
      "uórm",
      "ameno",
      "🌤️"
    ],
    [
      "What's the weather like?",
      "uáts dhe uédher láik",
      "Como está o tempo?",
      "🌦️"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "It's sunny today.",
    "formula": "It's + WEATHER",
    "examples": [
      "It's sunny today.",
      "It's raining.",
      "It's cold.",
      "What's the weather like?"
    ]
  },
  "simplify": [
    "It's + WEATHER",
    "It's raining",
    "What's the weather like?"
  ],
  "swap": {
    "base": "It's ______ today.",
    "options": [
      "sunny",
      "rainy",
      "cloudy",
      "windy",
      "cold",
      "hot"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Está ensolarado hoje.\"",
      "It's sunny today.",
      "its sâni tudêi"
    ],
    [
      "Traduza para o inglês: \"Como está o tempo?\"",
      "What's the weather like?",
      "uáts dhe uédher láik"
    ],
    [
      "Traduza para o inglês: \"Está muito frio lá fora.\"",
      "It's very cold outside.",
      "its véri kôuld áutsáid"
    ],
    [
      "Traduza para o inglês: \"Leve uma jaqueta, está ventando.\"",
      "Take a jacket, it's windy.",
      "têik a djáket, its uíndi"
    ]
  ],
  "dialogue": [
    [
      "A",
      "What's the weather like today?",
      "uáts dhe uédher láik tudêi",
      "Como está o tempo hoje?"
    ],
    [
      "L",
      "It's sunny and warm.",
      "its sâni end uórm",
      "Está ensolarado e ameno."
    ],
    [
      "A",
      "Great! Do you want to go to the park?",
      "greit! du iú uánt tu gôu tu dhe párk",
      "Ótimo! Você quer ir ao parque?"
    ],
    [
      "L",
      "Sure! Is it windy?",
      "chúr! iz it uíndi",
      "Claro! Está ventando?"
    ],
    [
      "A",
      "A little, but it's nice.",
      "a lítol, bât its náis",
      "Um pouco, mas está bom."
    ],
    [
      "L",
      "Let's go!",
      "lets gôu",
      "Vamos!"
    ]
  ],
  "connectors": [
    "Great!",
    "Sure!",
    "Let's go!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I'm wearing...",
      "I'm going to the park.",
      "It's near here."
    ],
    "today": [
      "It's + weather",
      "What's the weather like?"
    ],
    "combo": "It's sunny today, so let's go to the park."
  },
  "challenge": "Descreva o tempo de hoje e de ontem em inglês, usando It's + clima — 4 frases.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 24: Clima.\n\nUse principalmente estas estruturas:\n- It's + clima\n- What's the weather like?\n\nUse principalmente estas palavras:\nsunny, rainy, cloudy, windy, cold, hot, warm\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_25 = {
  "ready": true,
  "label": "25",
  "title": "Como estou?",
  "eyebrow": "Nível A1 — Aula 25",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a dizer como está se sentindo e a perguntar como o outro está.",
  "scene": {
    "emoji": "🙂",
    "caption": "Ana pergunta como Leo está se sentindo.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "How are you today?",
        "pt": "Como você está hoje?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I'm a little tired, but fine.",
        "pt": "Estou um pouco cansada, mas bem."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I'm great! Just a bit busy.",
        "pt": "Estou ótimo! Só um pouco ocupado."
      }
    ]
  },
  "vocab": [
    [
      "happy",
      "rrépi",
      "feliz",
      "😄"
    ],
    [
      "sad",
      "sed",
      "triste",
      "😢"
    ],
    [
      "tired",
      "táierd",
      "cansado(a)",
      "😴"
    ],
    [
      "hungry",
      "rrângri",
      "com fome",
      "🍽️"
    ],
    [
      "thirsty",
      "thérsti",
      "com sede",
      "🥤"
    ],
    [
      "sick",
      "sik",
      "doente",
      "🤒"
    ],
    [
      "busy",
      "bízi",
      "ocupado(a)",
      "📅"
    ],
    [
      "fine",
      "fáin",
      "bem",
      "🙂"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I'm tired.",
    "formula": "I'm + FEELING",
    "examples": [
      "I'm tired.",
      "I'm hungry.",
      "I'm fine, thanks.",
      "How are you?"
    ]
  },
  "simplify": [
    "I'm + FEELING",
    "How are you?",
    "How do you feel?"
  ],
  "swap": {
    "base": "I'm ______.",
    "options": [
      "tired",
      "hungry",
      "thirsty",
      "happy",
      "busy",
      "fine"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu estou cansado(a).\"",
      "I'm tired.",
      "áim táierd"
    ],
    [
      "Traduza para o inglês: \"Como você está?\"",
      "How are you?",
      "rráu ar iú"
    ],
    [
      "Traduza para o inglês: \"Eu não estou doente, só estou cansado(a).\"",
      "I'm not sick, I'm just tired.",
      "áim not sik, áim djâst táierd"
    ],
    [
      "Traduza para o inglês: \"Eu estou com fome e com sede.\"",
      "I'm hungry and thirsty.",
      "áim rrângri end thérsti"
    ]
  ],
  "dialogue": [
    [
      "L",
      "How are you today?",
      "rráu ar iú tudêi",
      "Como você está hoje?"
    ],
    [
      "A",
      "I'm a little tired, but fine. How about you?",
      "áim a lítol táierd, bât fáin. rráu abáut iú",
      "Estou um pouco cansada, mas bem. E você?"
    ],
    [
      "L",
      "I'm great! Just a bit busy.",
      "áim greit! djâst a bit bízi",
      "Estou ótimo! Só um pouco ocupado."
    ],
    [
      "A",
      "Are you hungry?",
      "ar iú rrângri",
      "Você está com fome?"
    ],
    [
      "L",
      "Yes, very hungry!",
      "iés, véri rrângri",
      "Sim, com muita fome!"
    ],
    [
      "A",
      "Let's eat something.",
      "lets íit sâmthin",
      "Vamos comer alguma coisa."
    ]
  ],
  "connectors": [
    "How about you?",
    "Just a bit...",
    "Let's..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "It's sunny.",
      "I am eating.",
      "I'm wearing..."
    ],
    "today": [
      "I'm + feeling",
      "How are you?",
      "How do you feel?"
    ],
    "combo": "I'm tired and hungry, but I'm fine."
  },
  "challenge": "Diga como você está se sentindo hoje, usando I'm + 4 sentimentos diferentes.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 25: Como estou?.\n\nUse principalmente estas estruturas:\n- I'm + sentimento\n- How are you?\n- How do you feel?\n\nUse principalmente estas palavras:\nhappy, sad, tired, hungry, thirsty, sick, busy, fine\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_26 = {
  "ready": true,
  "label": "26",
  "title": "Small Talk",
  "eyebrow": "Nível A1 — Aula 26",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a reagir naturalmente numa conversa e devolver a pergunta.",
  "scene": {
    "emoji": "💬",
    "caption": "Ana e Leo trocam um papo rápido.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Hi! How's it going?",
        "pt": "Oi! Como vai?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I'm good, thanks. How about you?",
        "pt": "Estou bem, obrigada. E você?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Not bad!",
        "pt": "Nada mal!"
      }
    ]
  },
  "vocab": [
    [
      "Oh, nice!",
      "ôu, náis",
      "Ah, que legal!",
      "😊"
    ],
    [
      "Really?",
      "ríli",
      "Sério?",
      "😮"
    ],
    [
      "Me too.",
      "mi tú",
      "Eu também.",
      "🙋"
    ],
    [
      "That's nice.",
      "dháts náis",
      "Que legal.",
      "👍"
    ],
    [
      "What about you?",
      "uát abáut iú",
      "E você?",
      "🔁"
    ],
    [
      "And you?",
      "end iú",
      "E você?",
      "🔁"
    ],
    [
      "How's it going?",
      "rráuz it gôuin",
      "Como vai?",
      "👋"
    ],
    [
      "Not bad.",
      "not bed",
      "Nada mal.",
      "🙂"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I'm good. How about you?",
    "formula": "reação + devolver a pergunta",
    "examples": [
      "I'm good. How about you?",
      "Oh, nice!",
      "Really?",
      "That's nice!"
    ]
  },
  "simplify": [
    "Reação (Oh nice! / Really? / Me too.) + nova pergunta ou devolver a pergunta"
  ],
  "swap": {
    "base": "______!",
    "options": [
      "Oh, nice!",
      "Really?",
      "Me too!",
      "That's nice!"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Ah, que legal!\"",
      "Oh, nice!",
      "ôu, náis"
    ],
    [
      "Traduza para o inglês: \"Eu também!\"",
      "Me too!",
      "mi tú"
    ],
    [
      "Traduza para o inglês: \"E você?\"",
      "What about you?",
      "uát abáut iú"
    ],
    [
      "Traduza para o inglês: \"Como vai?\"",
      "How's it going?",
      "rráuz it gôuin"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Hi! How's it going?",
      "rrái! rráuz it gôuin",
      "Oi! Como vai?"
    ],
    [
      "A",
      "I'm good, thanks. How about you?",
      "áim gud, thenks. rráu abáut iú",
      "Estou bem, obrigada. E você?"
    ],
    [
      "L",
      "Not bad! I live in Lisbon now.",
      "not bed! ái liv in Lízbon náu",
      "Nada mal! Eu moro em Lisboa agora."
    ],
    [
      "A",
      "Oh, nice! I live there too.",
      "ôu, náis! ái liv dhér tú",
      "Ah, que legal! Eu também moro lá."
    ],
    [
      "L",
      "Really? Small world!",
      "ríli? smól uórld",
      "Sério? Mundo pequeno!"
    ],
    [
      "A",
      "Yes, it is!",
      "iés, it iz",
      "Sim, é mesmo!"
    ]
  ],
  "connectors": [
    "How about you?",
    "Oh, nice!",
    "Really?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I live in...",
      "I have...",
      "I like..."
    ],
    "today": [
      "Oh, nice!",
      "Really?",
      "Me too.",
      "What about you?"
    ],
    "combo": "I live in Lisbon too! Oh, nice! Small world!"
  },
  "challenge": "Pratique uma conversa curta de small talk com pelo menos 3 trocas, usando reações e devolvendo perguntas.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 26: Small Talk.\n\nUse principalmente estas estruturas:\n- reações: Oh nice! / Really? / Me too. / That's nice.\n- devolver a pergunta: What about you? / And you?\n\nUse principalmente estas palavras:\nnice, really, too, what about you, and you\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_27 = {
  "ready": true,
  "label": "27",
  "title": "Fazer perguntas",
  "eyebrow": "Nível A1 — Aula 27",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a fazer perguntas usando What, Where, Who, When, Why e How.",
  "scene": {
    "emoji": "❓",
    "caption": "Leo faz várias perguntas para conhecer Ana melhor.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Can I ask you some questions?",
        "pt": "Posso te fazer algumas perguntas?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Sure!",
        "pt": "Claro!"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Where do you live?",
        "pt": "Onde você mora?"
      }
    ]
  },
  "vocab": [
    [
      "What?",
      "uát",
      "O quê?",
      "❓"
    ],
    [
      "Where?",
      "uér",
      "Onde?",
      "📍"
    ],
    [
      "Who?",
      "rrú",
      "Quem?",
      "👤"
    ],
    [
      "When?",
      "uén",
      "Quando?",
      "📅"
    ],
    [
      "Why?",
      "uái",
      "Por quê?",
      "❔"
    ],
    [
      "How?",
      "rráu",
      "Como?",
      "🔧"
    ],
    [
      "How much?",
      "rráu mâtch",
      "Quanto (custa)?",
      "💰"
    ],
    [
      "How many?",
      "rráu méni",
      "Quantos(as)?",
      "🔢"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Where do you live?",
    "formula": "QUESTION WORD + do you + VERB?",
    "examples": [
      "Where do you live?",
      "What do you like?",
      "Who is that?",
      "When do you work?"
    ]
  },
  "simplify": [
    "WH-word + do you + VERB?",
    "How old/much/many + ...?"
  ],
  "swap": {
    "base": "______ do you live?",
    "options": [
      "Where",
      "What",
      "Who",
      "When",
      "Why",
      "How"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Onde você mora?\"",
      "Where do you live?",
      "uér du iú liv"
    ],
    [
      "Traduza para o inglês: \"Qual é o seu nome?\"",
      "What is your name?",
      "uát iz iór nêim"
    ],
    [
      "Traduza para o inglês: \"Por que você estuda inglês?\"",
      "Why do you study English?",
      "uái du iú stâdi ínglish"
    ],
    [
      "Traduza para o inglês: \"Quantos irmãos você tem?\"",
      "How many brothers do you have?",
      "rráu méni brâdherz du iú rrev"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Can I ask you some questions?",
      "ken ái esk iú sâm kuéschons",
      "Posso te fazer algumas perguntas?"
    ],
    [
      "A",
      "Sure!",
      "chúr",
      "Claro!"
    ],
    [
      "L",
      "Where do you live? What do you do?",
      "uér du iú liv? uát du iú du",
      "Onde você mora? O que você faz?"
    ],
    [
      "A",
      "I live in Lisbon, and I'm a student. Why do you ask?",
      "ái liv in Lízbon, end áim a stiúdent. uái du iú esk",
      "Eu moro em Lisboa, e sou estudante. Por que você pergunta?"
    ],
    [
      "L",
      "Just curious! When do you study?",
      "djâst kiúrios! uén du iú stâdi",
      "Só curiosidade! Quando você estuda?"
    ],
    [
      "A",
      "In the evening.",
      "in dhi ívnin",
      "À noitinha."
    ]
  ],
  "connectors": [
    "Sure!",
    "Just curious!",
    "Good question!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I live in...",
      "I have...",
      "I like..."
    ],
    "today": [
      "What?",
      "Where?",
      "Who?",
      "When?",
      "Why?",
      "How?"
    ],
    "combo": "Where do you live? What do you like? Why do you study English?"
  },
  "challenge": "Escreva 5 perguntas diferentes usando What, Where, Who, When, Why e How.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 27: Fazer perguntas.\n\nUse principalmente estas estruturas:\n- WH-word + do you + verbo?\n- How old/much/many...?\n\nUse principalmente estas palavras:\nwhat, where, who, when, why, how, how much, how many\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_28 = {
  "ready": true,
  "label": "28",
  "title": "Manter uma conversa",
  "eyebrow": "Nível A1 — Aula 28",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje você aprende a não deixar a conversa morrer: reagir e fazer uma nova pergunta relacionada.",
  "scene": {
    "emoji": "🔄",
    "caption": "Ana e Leo continuam a conversa sem parar em respostas curtas.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I work in a hospital.",
        "pt": "Eu trabalho num hospital."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "That's interesting! What do you do there?",
        "pt": "Que interessante! O que você faz lá?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I'm a nurse.",
        "pt": "Eu sou enfermeira."
      }
    ]
  },
  "vocab": [
    [
      "Tell me more.",
      "tel mi mór",
      "Me conta mais.",
      "🗣️"
    ],
    [
      "That's interesting.",
      "dháts íntrestin",
      "Isso é interessante.",
      "💡"
    ],
    [
      "Why?",
      "uái",
      "Por quê?",
      "❔"
    ],
    [
      "Me too.",
      "mi tú",
      "Eu também.",
      "🙋"
    ],
    [
      "What do you do?",
      "uát du iú du",
      "O que você faz (profissão)?",
      "💼"
    ],
    [
      "What about you?",
      "uát abáut iú",
      "E você?",
      "🔁"
    ],
    [
      "And you?",
      "end iú",
      "E você?",
      "🔁"
    ],
    [
      "Really?",
      "ríli",
      "Sério?",
      "😮"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Really? Tell me more.",
    "formula": "PERGUNTA → RESPOSTA → REAÇÃO → NOVA PERGUNTA",
    "examples": [
      "I work in a hospital.",
      "That's interesting! What do you do there?",
      "I'm a nurse.",
      "Really? Tell me more!"
    ]
  },
  "simplify": [
    "reação + nova pergunta relacionada à resposta da outra pessoa"
  ],
  "swap": {
    "base": "That's interesting! ______?",
    "options": [
      "What do you do there?",
      "Why do you like it?",
      "Tell me more.",
      "Really?"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Sério? Qual cidade?\"",
      "Really? What city?",
      "ríli? uát síti"
    ],
    [
      "Traduza para o inglês: \"Eu também! Que tipo de música?\"",
      "Me too! What kind of music?",
      "mi tú! uát káind âv miúzik"
    ],
    [
      "Traduza para o inglês: \"Que interessante! O que você faz lá?\"",
      "That's interesting! What do you do there?",
      "dháts íntrestin! uát du iú du dhér"
    ],
    [
      "Traduza para o inglês: \"Por quê? O que aconteceu?\"",
      "Why? What happened?",
      "uái? uát rrépend"
    ]
  ],
  "dialogue": [
    [
      "A",
      "I work in a hospital.",
      "ái uórk in a róspital",
      "Eu trabalho num hospital."
    ],
    [
      "L",
      "That's interesting! What do you do there?",
      "dháts íntrestin! uát du iú du dhér",
      "Que interessante! O que você faz lá?"
    ],
    [
      "A",
      "I'm a nurse. What about you?",
      "áim a nérs. uát abáut iú",
      "Eu sou enfermeira. E você?"
    ],
    [
      "L",
      "I'm a teacher. Really? A nurse! That must be hard work.",
      "áim a títcher. ríli? a nérs! dhat mâst bi rrárd uórk",
      "Eu sou professor. Sério? Enfermeira! Deve ser um trabalho difícil."
    ],
    [
      "A",
      "Yes, but I love it. Tell me more about your job.",
      "iés, bât ái lâv it. tel mi mór abáut iór djob",
      "Sim, mas eu adoro. Me conta mais sobre o seu trabalho."
    ],
    [
      "L",
      "I teach English to kids.",
      "ái títch ínglish tu kids",
      "Eu ensino inglês para crianças."
    ]
  ],
  "connectors": [
    "Tell me more.",
    "That's interesting.",
    "Really?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "What do you do?",
      "I like...",
      "I have..."
    ],
    "today": [
      "Tell me more.",
      "That's interesting.",
      "reagir + nova pergunta"
    ],
    "combo": "I'm a nurse, and I love my job. Tell me more about yours!"
  },
  "challenge": "Continue estas 3 conversas com uma reação e uma nova pergunta, sem deixar a conversa morrer.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 28: Manter uma conversa.\n\nUse principalmente estas estruturas:\n- reação (Really? / That's interesting! / Me too.) + nova pergunta relacionada\n\nUse principalmente estas palavras:\ntell me more, that's interesting, really, what do you do\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_29 = {
  "ready": true,
  "label": "29",
  "title": "Grande revisão A1",
  "eyebrow": "Nível A1 — Aula 29",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Hoje é dia de revisar tudo: apresentação, família, rotina, comida, lugares, clima e perguntas — sem estruturas novas, só prática.",
  "scene": {
    "emoji": "🏆",
    "caption": "Ana e Leo revisam tudo o que aprenderam juntos.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Let's review everything we learned!",
        "pt": "Vamos revisar tudo que aprendemos!"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Great idea! Tell me about yourself.",
        "pt": "Ótima ideia! Me conta sobre você."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "My name is Ana, and I live in Portugal.",
        "pt": "Meu nome é Ana, e eu moro em Portugal."
      }
    ]
  },
  "vocab": [
    [
      "My name is...",
      "mái nêim iz",
      "Meu nome é...",
      "🙋"
    ],
    [
      "I live in...",
      "ái liv in",
      "Eu moro em...",
      "📍"
    ],
    [
      "I have...",
      "ái rrev",
      "Eu tenho...",
      "👪"
    ],
    [
      "I like...",
      "ái láik",
      "Eu gosto de...",
      "❤️"
    ],
    [
      "How old are you?",
      "rráu ôuld ar iú",
      "Quantos anos você tem?",
      "🎂"
    ],
    [
      "Where is...?",
      "uér iz",
      "Onde fica...?",
      "📍"
    ],
    [
      "What are you doing?",
      "uát ar iú dúin",
      "O que você está fazendo?",
      "🎬"
    ],
    [
      "What about you?",
      "uát abáut iú",
      "E você?",
      "🔁"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "My name is Ana, I live in Portugal, and I like pizza.",
    "formula": "combine tudo que você já sabe",
    "examples": [
      "My name is Ana.",
      "I live in Portugal.",
      "I have one brother.",
      "I like pizza."
    ]
  },
  "simplify": [
    "Nenhuma estrutura nova — hoje é dia de combinar tudo o que você já aprendeu."
  ],
  "swap": {
    "base": "I ______ ...",
    "options": [
      "like",
      "live in",
      "have",
      "am"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Eu moro em Portugal e tenho um irmão.\"",
      "I live in Portugal and I have one brother.",
      ""
    ],
    [
      "Traduza para o inglês: \"Eu gosto de pizza, mas não gosto de café.\"",
      "I like pizza, but I don't like coffee.",
      ""
    ],
    [
      "Traduza para o inglês: \"Eu normalmente acordo às sete e vou trabalhar.\"",
      "I usually wake up at seven and I go to work.",
      ""
    ],
    [
      "Traduza para o inglês: \"Quantos irmãos você tem?\"",
      "How many brothers do you have?",
      "rráu méni brâdherz du iú rrev"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Let's review! My name is Ana, and I'm from Brazil.",
      "lets rivíu! mái nêim iz Ana, end áim from brazíu",
      "Vamos revisar! Meu nome é Ana, e eu sou do Brasil."
    ],
    [
      "L",
      "I'm Leo, from Portugal. How old are you?",
      "áim Líiô, from pórtchugou. rráu ôuld ar iú",
      "Eu sou o Leo, de Portugal. Quantos anos você tem?"
    ],
    [
      "A",
      "I'm twenty-five. I have one brother and I like pizza.",
      "áim tuéni-fáiv. ái rrev uán brâdher end ái láik pítza",
      "Eu tenho vinte e cinco. Eu tenho um irmão e gosto de pizza."
    ],
    [
      "L",
      "That's nice! What's the weather like today?",
      "dháts náis! uáts dhe uédher láik tudêi",
      "Que legal! Como está o tempo hoje?"
    ],
    [
      "A",
      "It's sunny. Let's go to the park!",
      "its sâni. lets gôu tu dhe párk",
      "Está ensolarado. Vamos ao parque!"
    ],
    [
      "L",
      "Great idea! Tell me more about your family.",
      "greit áidía! tel mi mór abáut iór fémili",
      "Ótima ideia! Me conta mais sobre a sua família."
    ]
  ],
  "connectors": [
    "What about you?",
    "Really?",
    "That's interesting!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Todas as estruturas das aulas 1 a 28"
    ],
    "today": [
      "Nenhuma estrutura nova — hoje é dia de praticar tudo!"
    ],
    "combo": "My name is Ana, I live in Portugal, I have one brother, and I like pizza."
  },
  "challenge": "Grave um áudio de 1 minuto se apresentando: nome, família, rotina, gostos e um pedido em um café.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 29: Grande revisão A1.\n\nUse principalmente estas estruturas:\n- Revisão geral de todas as estruturas das aulas 1 a 28, nível A1\n\nUse principalmente estas palavras:\napresentação, família, rotina, comida, compras, cidade, clima, sentimentos, perguntas\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const LESSON_30 = {
  "ready": true,
  "label": "30",
  "title": "Meu primeiro diálogo completo",
  "eyebrow": "Nível A1 — Aula 30",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Este é o grande momento: uma conversa completa, do início ao fim, usando tudo o que você aprendeu no curso A1.",
  "scene": {
    "emoji": "🎓",
    "caption": "Ana e Leo têm uma conversa completa, como duas pessoas que realmente se conhecem.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Hi! My name is Ana. What's your name?",
        "pt": "Oi! Meu nome é Ana. Qual é o seu nome?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I'm Leo. Nice to meet you!",
        "pt": "Eu sou o Leo. Prazer em conhecer você!"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Nice to meet you too!",
        "pt": "Prazer em conhecer você também!"
      }
    ]
  },
  "vocab": [
    [
      "Nice to meet you.",
      "náis tu mít iú",
      "Prazer em conhecer você.",
      "🤝"
    ],
    [
      "I can speak English!",
      "ái ken spík ínglish",
      "Eu consigo falar inglês!",
      "🗣️"
    ],
    [
      "Let's talk more.",
      "lets tók mór",
      "Vamos conversar mais.",
      "💬"
    ],
    [
      "Thank you for listening.",
      "thenk iú for lísenin",
      "Obrigado(a) por ouvir.",
      "🙏"
    ],
    [
      "I did it!",
      "ái did it",
      "Eu consegui!",
      "🎉"
    ],
    [
      "Congratulations!",
      "kongrátchulêichons",
      "Parabéns!",
      "🎊"
    ],
    [
      "Keep practicing!",
      "kíp práktisin",
      "Continue praticando!",
      "💪"
    ],
    [
      "You already know enough to start.",
      "iú olrédi nôu ináf tu stárt",
      "Você já sabe o suficiente para começar.",
      "🎓"
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I don't need to know everything to start speaking.",
    "formula": "Você já sabe o suficiente para começar",
    "examples": [
      "My name is Ana.",
      "I'm from Brazil, but I live in Portugal.",
      "I have one brother.",
      "I like music and movies."
    ]
  },
  "simplify": [
    "Combine TUDO: apresentação + família + rotina + gostos + perguntas + small talk"
  ],
  "swap": {
    "base": "I feel ______ about my English now.",
    "options": [
      "confident",
      "proud",
      "ready",
      "excited"
    ]
  },
  "activities": [
    [
      "Traduza para o inglês: \"Você não precisa saber tudo para começar a falar.\"",
      "You don't need to know everything to start speaking.",
      ""
    ],
    [
      "Continue o diálogo com sua própria fala, no lugar de Ana ou Leo.",
      "(resposta livre)",
      ""
    ],
    [
      "Escreva 3 frases que você quer lembrar deste curso.",
      "(resposta livre)",
      ""
    ],
    [
      "O que você vai praticar esta semana?",
      "(resposta livre)",
      ""
    ]
  ],
  "dialogue": [
    [
      "A",
      "Hi! My name is Ana. What's your name?",
      "rrái! mái nêim iz Ana. uáts iór nêim",
      "Oi! Meu nome é Ana. Qual é o seu nome?"
    ],
    [
      "L",
      "I'm Leo. Nice to meet you! Where are you from?",
      "áim Líiô. náis tu mít iú! uér ar iú from",
      "Eu sou o Leo. Prazer em conhecer você! De onde você é?"
    ],
    [
      "A",
      "I'm from Brazil, but I live in Portugal now. What about you?",
      "áim from brazíu, bât ái liv in pórtchugou náu. uát abáut iú",
      "Eu sou do Brasil, mas moro em Portugal agora. E você?"
    ],
    [
      "L",
      "I'm from Portugal. What do you do?",
      "áim from pórtchugou. uát du iú du",
      "Eu sou de Portugal. O que você faz?"
    ],
    [
      "A",
      "I'm a nurse. I usually work in the morning. What do you like to do in your free time?",
      "áim a nérs. ái iújuali uórk in dhe mórnin. uát du iú láik tu du in iór frí táim",
      "Eu sou enfermeira. Eu normalmente trabalho de manhã. O que você gosta de fazer no seu tempo livre?"
    ],
    [
      "L",
      "I love music and movies. Do you have any brothers or sisters?",
      "ái lâv miúzik end múvis. du iú rrev éni brâdherz or sísterz",
      "Eu adoro música e filmes. Você tem irmãos ou irmãs?"
    ],
    [
      "A",
      "Yes, I have one brother. He lives in Brazil.",
      "iés, ái rrev uán brâdher. rri livz in brazíu",
      "Sim, eu tenho um irmão. Ele mora no Brasil."
    ],
    [
      "L",
      "That's nice! It's sunny today, do you want to get a coffee?",
      "dháts náis! its sâni tudêi, du iú uánt tu guét a kófi",
      "Que legal! Está ensolarado hoje, você quer tomar um café?"
    ],
    [
      "A",
      "Sure, let's go! Can I have a coffee, please?",
      "chúr, lets gôu! ken ái rrev a kófi, plíz",
      "Claro, vamos! Posso pedir um café, por favor?"
    ]
  ],
  "connectors": [
    "What about you?",
    "That's nice!",
    "Sure, let's go!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Todas as estruturas do curso A1, das aulas 1 a 29"
    ],
    "today": [
      "Nenhuma — esta é a aula de colocar tudo em prática."
    ],
    "combo": "🎓 Você não precisa saber tudo para começar a conversar. Você já sabe o suficiente para começar."
  },
  "challenge": "Grave-se tendo essa conversa completa em inglês, do início ao fim, sem parar para traduzir.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A1 no IdioLibre.\nHoje estou praticando a Aula 30: Meu primeiro diálogo completo.\n\nUse principalmente estas estruturas:\n- Todas as estruturas do curso A1: apresentação, família, rotina, gostos, comida, cidade, clima, sentimentos e perguntas\n\nUse principalmente estas palavras:\ntodo o vocabulário do curso A1\n\nFaça uma conversa natural comigo.\n\nRegras:\n1. Fale principalmente inglês simples de nível A1.\n2. Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.\n3. Reaja naturalmente ao que eu disser e faça a próxima pergunta relacionada à minha resposta.\n4. Não transforme a conversa em uma aula de gramática.\n5. Não corrija respostas pessoais apenas porque são diferentes de um exemplo.\n6. Corrija somente erros importantes de estrutura, com uma correção curta, e continue.\n7. Você pode reutilizar estruturas de aulas anteriores.\n8. Use expressões como \"What about you?\", \"Really?\" e \"That's nice!\" quando fizer sentido.\n9. Não responda por mim. Se eu não souber responder, dê uma opção simples de resposta.\n10. Converse comigo durante aproximadamente 5 a 10 minutos.\n\nNo final da conversa, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar.\n\nComece a conversa agora com uma pergunta simples relacionada à aula."
};

const lessons = [
  LESSON_01, LESSON_02, LESSON_03, LESSON_04, LESSON_05, LESSON_06, LESSON_07,
  LESSON_08, LESSON_09, LESSON_10, LESSON_11, LESSON_12, LESSON_13, LESSON_14,
  LESSON_15, LESSON_16, LESSON_17, LESSON_18, LESSON_19, LESSON_20, LESSON_21,
  LESSON_22, LESSON_23, LESSON_24, LESSON_25, LESSON_26, LESSON_27, LESSON_28,
  LESSON_29, LESSON_30
];
