/* ============================================================
   IDIOLIBRE — js/lessons-data-a2.js
   Banco de dados das aulas do nível A2.

   Continuação real da A1: reutiliza o vocabulário e as
   estruturas já ensinadas, e usa tradução oculta apenas
   para o conteúdo NOVO do A2 (revelável com um clique).

   Segue a mesma estrutura de dados de js/lessons-data.js.
   Depende de js/app.js para saber renderizar (?nivel=a2).
   ============================================================ */

const LESSON_TITLES_A2 = [
  "Um probleminha em casa",
  "No trabalho",
  "Na farmácia e no médico",
  "Fazer compras",
  "Procurando uma casa",
  "Pegar o autocarro",
  "Viagem imprevista",
  "Minha família e nossos planos",
  "Conversa com o vizinho",
  "Dando a minha opinião",
  "O que aconteceu ontem",
  "Planos para o futuro",
  "Isto ou aquilo?",
  "Fazendo perguntas",
  "Continuar a conversa",
  "Não entendi, pode repetir?"
];
const LESSON_EMOJIS_A2 = [
  "🏠",
  "💼",
  "🏥",
  "🛒",
  "🏡",
  "🚌",
  "✈️",
  "👨‍👩‍👧",
  "🗣️",
  "🧠",
  "📖",
  "📅",
  "⚖️",
  "❓",
  "🔄",
  "🆘"
];

const LESSON_A2_01 = {
  "ready": true,
  "label": "01",
  "title": "Um probleminha em casa",
  "eyebrow": "Nível A2 — Aula 01",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Você já sabe se apresentar e falar da sua rotina. Agora vamos usar isso para resolver um probleminha real: algo em casa não está funcionando.",
  "scene": {
    "emoji": "🚿",
    "caption": "Leo liga para Ana porque o chuveiro do apartamento parou de funcionar.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Hi Ana, sorry to bother you. There's a problem with the shower.",
        "pt": "Oi Ana, desculpa incomodar. Tem um problema com o chuveiro."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Oh no! What's wrong with it?",
        "pt": "Ah não! O que há de errado com ele?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "There's no hot water. It's not working properly.",
        "pt": "Não tem água quente. Não está funcionando direito."
      }
    ]
  },
  "vocab": [
    [
      "There's a problem with...",
      "dhérs a próblem uít",
      "Tem um problema com...",
      "⚠️",
      true
    ],
    [
      "It's not working.",
      "its not uérkin",
      "Não está funcionando.",
      "🔧",
      true
    ],
    [
      "It's broken.",
      "its brôukn",
      "Está quebrado.",
      "🛠️",
      true
    ],
    [
      "Can you help me?",
      "ken iú rrelp mi",
      "Você pode me ajudar?",
      "🙏",
      true
    ],
    [
      "I'll take a look.",
      "áiu têik a luk",
      "Vou dar uma olhada.",
      "👀",
      true
    ],
    [
      "It's fixed now.",
      "its fikst náu",
      "Agora está consertado.",
      "✅",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "There's a problem with the shower.",
    "formula": "There's a problem with + THING",
    "examples": [
      "There's a problem with the shower.",
      "There's a problem with the light.",
      "There's a problem with the door.",
      "There's a problem with my phone."
    ]
  },
  "simplify": [
    "It's not working.",
    "It's broken.",
    "Can you help me?"
  ],
  "swap": {
    "base": "There's a problem with the ______.",
    "options": [
      "🚿 shower",
      "💡 light",
      "🚪 door",
      "🔑 lock",
      "🌡️ heater"
    ]
  },
  "activities": [
    [
      "Traduza: \"Tem um problema com a porta.\"",
      "There's a problem with the door.",
      "dhérs a próblem uít dhe dôr"
    ],
    [
      "Traduza: \"Não está funcionando.\"",
      "It's not working.",
      "its not uérkin"
    ],
    [
      "Traduza: \"Você pode me ajudar?\"",
      "Can you help me?",
      "ken iú rrelp mi"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Hi Ana, sorry to bother you. There's a problem with the shower.",
      "rrái Ana, sóri tu bódher iú. dhérs a próblem uít dhe cháuer",
      "Oi Ana, desculpa incomodar. Tem um problema com o chuveiro."
    ],
    [
      "A",
      "Oh no, really? What's wrong with it?",
      "ôu nôu, ríli? uáts rong uít it",
      "Ah não, sério? O que há de errado com ele?"
    ],
    [
      "L",
      "There's no hot water. It's not working properly.",
      "dhérs nôu rrót uóter. its not uérkin próperli",
      "Não tem água quente. Não está funcionando direito."
    ],
    [
      "A",
      "OK, I'll take a look this afternoon.",
      "ôukêi, áiu têik a luk dhis aftenún",
      "Certo, vou dar uma olhada essa tarde."
    ],
    [
      "L",
      "Thank you so much. Can you also check the kitchen light?",
      "thenk iú sôu mâtch. ken iú órso chek dhe kítchin láit",
      "Muito obrigado. Você também pode checar a luz da cozinha?"
    ],
    [
      "A",
      "Sure, no problem. I'll fix everything today.",
      "chúr, nôu próblem. áiu fiks évrithin tudêi",
      "Claro, sem problema. Vou consertar tudo hoje."
    ]
  ],
  "connectors": [
    "Oh no, really?",
    "No problem.",
    "Thank you so much."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Hi / Hello",
      "My name is...",
      "I live in...",
      "What's your name?"
    ],
    "today": [
      "There's a problem with...",
      "It's not working.",
      "Can you help me?"
    ],
    "combo": "Hi Ana, there's a problem with the shower. Can you help me?"
  },
  "challenge": "Grave um áudio explicando um problema real na sua casa, usando \"There's a problem with...\" e \"It's not working.\"",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 01: Um probleminha em casa.\n\nUse principalmente estas estruturas:\n- There's a problem with...\n- It's not working / It's broken\n- Can you help me?\n\nFaça uma conversa natural comigo em que eu preciso explicar um problema doméstico e pedir ajuda.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja naturalmente ao que eu disser.\n4. Corrija apenas erros importantes, com uma correção curta, e continue.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_02 = {
  "ready": true,
  "label": "02",
  "title": "No trabalho",
  "eyebrow": "Nível A2 — Aula 02",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Você já sabe dizer sua profissão. Agora vamos falar sobre tarefas, horários e um pequeno problema no trabalho.",
  "scene": {
    "emoji": "💼",
    "caption": "Ana pergunta a Leo como está o novo trabalho dele.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "How's the new job going?",
        "pt": "Como está indo o novo trabalho?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "It's good, but I'm really busy. I have a lot of tasks.",
        "pt": "Está bom, mas estou bem ocupado. Tenho muitas tarefas."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "How long have you been working there?",
        "pt": "Há quanto tempo você trabalha lá?"
      }
    ]
  },
  "vocab": [
    [
      "I have a lot of tasks.",
      "ái rrev a lôt óv tásks",
      "Tenho muitas tarefas.",
      "📋",
      true
    ],
    [
      "I've been working here for...",
      "áiv bín uérkin rrír for",
      "Trabalho aqui há...",
      "⏳",
      true
    ],
    [
      "since 2023",
      "sins tuenti tuenti thrí",
      "desde 2023",
      "📆",
      true
    ],
    [
      "My shift starts at 9.",
      "mái chift starts et náin",
      "Meu turno começa às 9.",
      "⏰",
      true
    ],
    [
      "I have a meeting.",
      "ái rrev a mítin",
      "Tenho uma reunião.",
      "🗓️",
      true
    ],
    [
      "I'm running late.",
      "áim rânin lêit",
      "Estou atrasado.",
      "🏃",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I've been working here for two years.",
    "formula": "I've been + -ing + FOR/SINCE",
    "examples": [
      "I've been working here for two years.",
      "I've been living here since 2023.",
      "I've been studying English for six months.",
      "I've been waiting for ten minutes."
    ]
  },
  "simplify": [
    "I work in...",
    "My shift starts at...",
    "I have a meeting."
  ],
  "swap": {
    "base": "I've been working here for ______.",
    "options": [
      "📅 two years",
      "🗓️ six months",
      "⏳ a long time",
      "📆 a few weeks"
    ]
  },
  "activities": [
    [
      "Traduza: \"Tenho muitas tarefas hoje.\"",
      "I have a lot of tasks today.",
      "ái rrev a lôt óv tásks tudêi"
    ],
    [
      "Traduza: \"Trabalho aqui desde 2023.\"",
      "I've been working here since 2023.",
      "áiv bín uérkin rrír sins tuenti tuenti thrí"
    ],
    [
      "Traduza: \"Estou atrasado.\"",
      "I'm running late.",
      "áim rânin lêit"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Hi Leo! How's the new job going?",
      "rrái Líiô! rráus dhe niú djob gôuin",
      "Oi Leo! Como está indo o novo trabalho?"
    ],
    [
      "L",
      "It's good, but I'm really busy. I have a lot of tasks.",
      "its gud, bât áim ríli bízi. ái rrev a lôt óv tásks",
      "Está bom, mas estou bem ocupado. Tenho muitas tarefas."
    ],
    [
      "A",
      "How long have you been working there?",
      "rráu long rrev iú bín uérkin dhér",
      "Há quanto tempo você trabalha lá?"
    ],
    [
      "L",
      "I've been working there since March.",
      "áiv bín uérkin dhér sins march",
      "Trabalho lá desde março."
    ],
    [
      "A",
      "What time does your shift start?",
      "uát táim dâz iór chift start",
      "Que horas começa seu turno?"
    ],
    [
      "L",
      "It starts at 9, but today I'm running late!",
      "it starts et náin, bât tudêi áim rânin lêit",
      "Começa às 9, mas hoje estou atrasado!"
    ]
  ],
  "connectors": [
    "How's it going?",
    "That's a lot!",
    "Good luck!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I'm a...",
      "I usually work in the morning.",
      "What do you do?"
    ],
    "today": [
      "I've been working here for/since...",
      "I have a lot of tasks.",
      "I'm running late."
    ],
    "combo": "I'm a nurse. I've been working here since 2023 and I usually have a lot of tasks."
  },
  "challenge": "Descreva seu trabalho (ou rotina de estudos) em 3 frases: o que você faz, desde quando, e uma tarefa que você tem hoje.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 02: No trabalho.\n\nUse principalmente estas estruturas:\n- I've been working here for/since...\n- I have a lot of tasks / a meeting\n- I'm running late\n\nMe pergunte sobre meu trabalho, minhas tarefas e meus horários.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja naturalmente e faça perguntas de continuação.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_03 = {
  "ready": true,
  "label": "03",
  "title": "Na farmácia e no médico",
  "eyebrow": "Nível A2 — Aula 03",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Vamos aprender a explicar um sintoma simples e marcar uma consulta — algo essencial para viver em outro país.",
  "scene": {
    "emoji": "💊",
    "caption": "Leo entra numa farmácia porque não está se sentindo bem.",
    "dialogue": [
      {
        "who": "P",
        "speaker": "Farmacêutica",
        "en": "Hi, how can I help you?",
        "pt": "Oi, como posso ajudar?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I have a headache and a sore throat.",
        "pt": "Estou com dor de cabeça e dor de garganta."
      },
      {
        "who": "P",
        "speaker": "Farmacêutica",
        "en": "You should take this, twice a day.",
        "pt": "Você deveria tomar isso, duas vezes ao dia."
      }
    ]
  },
  "vocab": [
    [
      "I have a headache.",
      "ái rrev a rrédêik",
      "Estou com dor de cabeça.",
      "🤕",
      true
    ],
    [
      "I don't feel well.",
      "ái dôunt fíl uél",
      "Não estou me sentindo bem.",
      "😷",
      true
    ],
    [
      "You should take this.",
      "iú chud têik dhis",
      "Você deveria tomar isso.",
      "💊",
      true
    ],
    [
      "I need to make an appointment.",
      "ái níd tu mêik en apóintment",
      "Preciso marcar uma consulta.",
      "📅",
      true
    ],
    [
      "Do you have anything for...?",
      "du iú rrev éniithin for",
      "Você tem alguma coisa para...?",
      "🔍",
      true
    ],
    [
      "twice a day",
      "tuáis a dêi",
      "duas vezes ao dia",
      "🕑",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "You should take this medicine.",
    "formula": "You should / shouldn't + VERB",
    "examples": [
      "You should take this medicine.",
      "You should rest today.",
      "You shouldn't go to work.",
      "You should drink more water."
    ]
  },
  "simplify": [
    "I have a headache.",
    "I don't feel well.",
    "I need an appointment."
  ],
  "swap": {
    "base": "I have a ______.",
    "options": [
      "🤕 headache",
      "🤒 fever",
      "😷 sore throat",
      "🤢 stomachache",
      "🤧 cold"
    ]
  },
  "activities": [
    [
      "Traduza: \"Não estou me sentindo bem.\"",
      "I don't feel well.",
      "ái dôunt fíl uél"
    ],
    [
      "Traduza: \"Preciso marcar uma consulta.\"",
      "I need to make an appointment.",
      "ái níd tu mêik en apóintment"
    ],
    [
      "Traduza: \"Você deveria descansar hoje.\"",
      "You should rest today.",
      "iú chud rést tudêi"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Hi Leo, you look tired. Are you OK?",
      "rrái Líiô, iú luk táierd. ar iú ôukêi",
      "Oi Leo, você parece cansado. Você está bem?"
    ],
    [
      "L",
      "Not really. I have a headache and a sore throat.",
      "not ríli. ái rrev a rrédêik end a sór thrôut",
      "Não muito. Estou com dor de cabeça e dor de garganta."
    ],
    [
      "A",
      "You should go to the pharmacy.",
      "iú chud gôu tu dhe fármassi",
      "Você deveria ir à farmácia."
    ],
    [
      "L",
      "I already went. They gave me this medicine.",
      "ái órredi uent. dhêi guêiv mi dhis médisin",
      "Eu já fui. Me deram esse remédio."
    ],
    [
      "A",
      "Good. How often should you take it?",
      "gud. rráu ófen chud iú têik it",
      "Bom. Com que frequência você deve tomar?"
    ],
    [
      "L",
      "Twice a day, after meals.",
      "tuáis a dêi, áfter míls",
      "Duas vezes ao dia, depois das refeições."
    ]
  ],
  "connectors": [
    "Are you OK?",
    "Not really.",
    "How often...?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "How are you?",
      "I'm tired.",
      "Today is..."
    ],
    "today": [
      "I have a headache.",
      "You should...",
      "twice a day"
    ],
    "combo": "I don't feel well, I have a headache. I should rest today."
  },
  "challenge": "Escreva 3 frases explicando um sintoma e o que você deveria fazer sobre ele, usando \"I have...\" e \"You should...\".",
  "aiPrompt": "Você é meu parceiro de conversação em inglês, fazendo o papel de farmacêutico(a) ou médico(a).\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 03: Na farmácia e no médico.\n\nUse principalmente estas estruturas:\n- I have a headache / sore throat / fever\n- You should / shouldn't...\n- I need to make an appointment\n\nMe pergunte sobre meus sintomas e me dê conselhos simples.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Não dê conselhos médicos reais, é apenas prática de idioma.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_04 = {
  "ready": true,
  "label": "04",
  "title": "Fazer compras",
  "eyebrow": "Nível A2 — Aula 04",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Comprar, comparar preços e até devolver um produto — tudo isso faz parte de viver o dia a dia em inglês.",
  "scene": {
    "emoji": "🛍️",
    "caption": "Ana está numa loja de roupas, comparando dois casacos.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "This jacket is cheaper than that one.",
        "pt": "Este casaco é mais barato do que aquele."
      },
      {
        "who": "S",
        "speaker": "Vendedor",
        "en": "Yes, but this one is better quality.",
        "pt": "Sim, mas este tem melhor qualidade."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Can I return it if it doesn't fit?",
        "pt": "Posso devolver se não servir?"
      }
    ]
  },
  "vocab": [
    [
      "It's cheaper / more expensive.",
      "its chíper / mor ekspénsiv",
      "É mais barato / mais caro.",
      "💰",
      true
    ],
    [
      "Do you have this in a smaller size?",
      "du iú rrev dhis in a smóler sáiz",
      "Você tem isso num tamanho menor?",
      "📏",
      true
    ],
    [
      "Can I try it on?",
      "ken ái trái it on",
      "Posso experimentar?",
      "👕",
      true
    ],
    [
      "I'd like to return this.",
      "áid láik tu retérn dhis",
      "Eu gostaria de devolver isso.",
      "↩️",
      true
    ],
    [
      "Do you have a receipt?",
      "du iú rrev a resít",
      "Você tem o recibo?",
      "🧾",
      true
    ],
    [
      "How much is it?",
      "rráu mâtch iz it",
      "Quanto custa?",
      "❓",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "This one is cheaper than that one.",
    "formula": "ADJECTIVE + -er + than",
    "examples": [
      "This one is cheaper than that one.",
      "This shop is bigger than the other one.",
      "This bag is better than mine.",
      "This coat is more expensive than that shirt."
    ]
  },
  "simplify": [
    "Can I try it on?",
    "How much is it?",
    "I'd like to return this."
  ],
  "swap": {
    "base": "Do you have any ______?",
    "options": [
      "🥛 milk",
      "🍞 bread",
      "👕 t-shirts",
      "🧦 socks",
      "📱 chargers"
    ]
  },
  "activities": [
    [
      "Traduza: \"Posso experimentar isso?\"",
      "Can I try it on?",
      "ken ái trái it on"
    ],
    [
      "Traduza: \"Este é mais barato do que aquele.\"",
      "This one is cheaper than that one.",
      "dhis uán iz chíper dhen dhet uán"
    ],
    [
      "Traduza: \"Gostaria de devolver isso.\"",
      "I'd like to return this.",
      "áid láik tu retérn dhis"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Excuse me, do you have this jacket in a smaller size?",
      "eksquiúz mi, du iú rrev dhis djáket in a smóler sáiz",
      "Com licença, você tem esse casaco num tamanho menor?"
    ],
    [
      "L",
      "Let me check. Yes, here you go.",
      "let mi chek. iés, rrír iú gôu",
      "Deixa eu ver. Sim, aqui está."
    ],
    [
      "A",
      "Thanks. Is this one cheaper than the other one?",
      "thenks. iz dhis uán chíper dhen dhi ódher uán",
      "Obrigada. Este é mais barato do que o outro?"
    ],
    [
      "L",
      "No, but it's better quality.",
      "nôu, bât its béter cuáliti",
      "Não, mas tem melhor qualidade."
    ],
    [
      "A",
      "OK, I'll take it. Can I return it if it doesn't fit?",
      "ôukêi, áiu têik it. ken ái retérn it if it dâznt fit",
      "Certo, vou levar. Posso devolver se não servir?"
    ],
    [
      "L",
      "Sure, just keep the receipt.",
      "chúr, djâst kíp dhe resít",
      "Claro, apenas guarde o recibo."
    ]
  ],
  "connectors": [
    "Let me check.",
    "Here you go.",
    "Sure, no problem."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Can I have...?",
      "How much is it?",
      "I'd like..."
    ],
    "today": [
      "cheaper / more expensive than...",
      "Can I try it on?",
      "I'd like to return this."
    ],
    "combo": "Can I try this on? It's cheaper than the other one, so I'd like to buy it."
  },
  "challenge": "Compare dois produtos em inglês usando \"cheaper than\" ou \"better than\" e pratique pedir para experimentar ou devolver algo.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês, fazendo o papel de vendedor(a) numa loja.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 04: Fazer compras.\n\nUse principalmente estas estruturas:\n- cheaper / more expensive than\n- Can I try it on? / Can I return this?\n- How much is it?\n\nMe ajude a praticar comprar, comparar e devolver um produto.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja naturalmente à minha resposta.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_05 = {
  "ready": true,
  "label": "05",
  "title": "Procurando uma casa",
  "eyebrow": "Nível A2 — Aula 05",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Vamos praticar como perguntar sobre uma casa ou apartamento: preço, tamanho e comparar opções.",
  "scene": {
    "emoji": "🏡",
    "caption": "Ana liga para perguntar sobre um apartamento anunciado.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Hi, is the apartment still available?",
        "pt": "Oi, o apartamento ainda está disponível?"
      },
      {
        "who": "R",
        "speaker": "Corretor",
        "en": "Yes, it is. It has two bedrooms.",
        "pt": "Sim, está. Tem dois quartos."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Is it bigger than the one on Main Street?",
        "pt": "É maior do que aquele na Main Street?"
      }
    ]
  },
  "vocab": [
    [
      "Is it still available?",
      "iz it stiu avêilebou",
      "Ainda está disponível?",
      "🔑",
      true
    ],
    [
      "How much is the rent?",
      "rráu mâtch iz dhe rent",
      "Quanto é o aluguel?",
      "💶",
      true
    ],
    [
      "It has two bedrooms.",
      "it rrez tú bédrums",
      "Tem dois quartos.",
      "🛏️",
      true
    ],
    [
      "It's bigger / smaller than...",
      "its bíguer / smóler dhen",
      "É maior / menor do que...",
      "📐",
      true
    ],
    [
      "Is it close to the center?",
      "iz it clôus tu dhe sénter",
      "É perto do centro?",
      "📍",
      true
    ],
    [
      "There's a problem with the roof.",
      "dhérs a próblem uít dhe rúf",
      "Tem um problema com o telhado.",
      "🏚️",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "It's bigger than the other apartment.",
    "formula": "It's + ADJ-er + than + THING",
    "examples": [
      "It's bigger than the other apartment.",
      "It's smaller than my old room.",
      "It's cheaper than that house.",
      "It's closer to the center than this one."
    ]
  },
  "simplify": [
    "Is it still available?",
    "How much is the rent?",
    "It has two bedrooms."
  ],
  "swap": {
    "base": "Is it close to the ______?",
    "options": [
      "🏙️ center",
      "🚌 bus stop",
      "🏫 school",
      "🏥 hospital",
      "🛒 supermarket"
    ]
  },
  "activities": [
    [
      "Traduza: \"Ainda está disponível?\"",
      "Is it still available?",
      "iz it stiu avêilebou"
    ],
    [
      "Traduza: \"Quanto é o aluguel?\"",
      "How much is the rent?",
      "rráu mâtch iz dhe rent"
    ],
    [
      "Traduza: \"É maior do que o meu quarto antigo.\"",
      "It's bigger than my old room.",
      "its bíguer dhen mái ôuld rúm"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Hi, I saw your ad. Is the apartment still available?",
      "rrái, ái sór iór ad. iz dhi apártment stiu avêilebou",
      "Oi, eu vi seu anúncio. O apartamento ainda está disponível?"
    ],
    [
      "L",
      "Yes, it is! It has two bedrooms and one bathroom.",
      "iés, it iz! it rrez tú bédrums end uán báthrum",
      "Sim, está! Tem dois quartos e um banheiro."
    ],
    [
      "A",
      "Great. Is it bigger than the one on Main Street?",
      "grêit. iz it bíguer dhen dhi uán on mêin strít",
      "Ótimo. É maior do que aquele na Main Street?"
    ],
    [
      "L",
      "Yes, and it's cheaper too.",
      "iés, end its chíper tú",
      "Sim, e também é mais barato."
    ],
    [
      "A",
      "Perfect. Is it close to the center?",
      "pérfekt. iz it clôus tu dhe sénter",
      "Perfeito. É perto do centro?"
    ],
    [
      "L",
      "Yes, it's just ten minutes away by bus.",
      "iés, its djâst ten mínits auêi bái bâs",
      "Sim, é só dez minutos de ônibus."
    ]
  ],
  "connectors": [
    "Great!",
    "Perfect.",
    "Yes, and also..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I live in...",
      "I have a...",
      "How much is it?"
    ],
    "today": [
      "Is it still available?",
      "It's bigger/smaller than...",
      "close to the center"
    ],
    "combo": "I live in a small apartment. It's close to the center, but it's smaller than my old house."
  },
  "challenge": "Escreva uma pequena descrição da sua casa dos sonhos comparando com a casa onde você mora hoje.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês, fazendo o papel de corretor(a) de imóveis.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 05: Procurando uma casa.\n\nUse principalmente estas estruturas:\n- Is it still available?\n- bigger/smaller/cheaper than\n- How much is the rent?\n\nMe ajude a praticar perguntar sobre um imóvel disponível.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja naturalmente à minha resposta.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_06 = {
  "ready": true,
  "label": "06",
  "title": "Pegar o autocarro",
  "eyebrow": "Nível A2 — Aula 06",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Vamos praticar pedir e entender direções, e resolver um pequeno imprevisto no transporte público.",
  "scene": {
    "emoji": "🚌",
    "caption": "Leo está numa parada de ônibus e pergunta a um estranho sobre o caminho.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Excuse me, could you tell me how to get to the station?",
        "pt": "Com licença, você poderia me dizer como chegar à estação?"
      },
      {
        "who": "S",
        "speaker": "Estranho",
        "en": "Sure. Take bus number 12, it stops right there.",
        "pt": "Claro. Pegue o ônibus número 12, ele para bem ali."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "How long does it take?",
        "pt": "Quanto tempo leva?"
      }
    ]
  },
  "vocab": [
    [
      "Could you tell me how to get to...?",
      "cud iú têu mi rráu tu guét tu",
      "Você poderia me dizer como chegar a...?",
      "🧭",
      true
    ],
    [
      "How long does it take?",
      "rráu long dâz it têik",
      "Quanto tempo leva?",
      "⏱️",
      true
    ],
    [
      "How often does it come?",
      "rráu ófen dâz it câm",
      "Com que frequência ele vem?",
      "🔁",
      true
    ],
    [
      "I missed the bus.",
      "ái mist dhe bâs",
      "Eu perdi o ônibus.",
      "🏃‍♂️",
      true
    ],
    [
      "Which platform?",
      "uítch plátform",
      "Qual plataforma?",
      "🚉",
      true
    ],
    [
      "Turn left / right.",
      "térn left / ráit",
      "Vire à esquerda / direita.",
      "↩️",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Could you tell me how to get to the station?",
    "formula": "Could you tell me how to get to + PLACE?",
    "examples": [
      "Could you tell me how to get to the station?",
      "Could you tell me how to get to the pharmacy?",
      "Could you tell me how to get to the city center?",
      "Could you tell me how to get to school?"
    ]
  },
  "simplify": [
    "How long does it take?",
    "How often does it come?",
    "I missed the bus."
  ],
  "swap": {
    "base": "Could you tell me how to get to the ______?",
    "options": [
      "🚉 station",
      "🏥 hospital",
      "🏫 school",
      "🏙️ center",
      "🏠 nearest pharmacy"
    ]
  },
  "activities": [
    [
      "Traduza: \"Você poderia me dizer como chegar à estação?\"",
      "Could you tell me how to get to the station?",
      "cud iú têu mi rráu tu guét tu dhe stêichon"
    ],
    [
      "Traduza: \"Quanto tempo leva?\"",
      "How long does it take?",
      "rráu long dâz it têik"
    ],
    [
      "Traduza: \"Eu perdi o ônibus.\"",
      "I missed the bus.",
      "ái mist dhe bâs"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Excuse me, could you tell me how to get to the station?",
      "eksquiúz mi, cud iú têu mi rráu tu guét tu dhe stêichon",
      "Com licença, você poderia me dizer como chegar à estação?"
    ],
    [
      "A",
      "Sure! Take bus number 12, it stops right there.",
      "chúr! têik bâs nâmber tuélv, it stops ráit dhér",
      "Claro! Pegue o ônibus número 12, ele para bem ali."
    ],
    [
      "L",
      "How long does it take to get there?",
      "rráu long dâz it têik tu guét dhér",
      "Quanto tempo leva para chegar lá?"
    ],
    [
      "A",
      "About fifteen minutes.",
      "abáut fiftín mínits",
      "Cerca de quinze minutos."
    ],
    [
      "L",
      "And how often does it come?",
      "end rráu ófen dâz it câm",
      "E com que frequência ele vem?"
    ],
    [
      "A",
      "Every twenty minutes. Don't worry, you won't miss it.",
      "évri tuénti mínits. dôunt uéri, iú uônt mis it",
      "A cada vinte minutos. Não se preocupe, você não vai perdê-lo."
    ]
  ],
  "connectors": [
    "Sure!",
    "Don't worry.",
    "About..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Excuse me.",
      "Where is...?",
      "Thank you."
    ],
    "today": [
      "Could you tell me how to get to...?",
      "How long does it take?",
      "How often does it come?"
    ],
    "combo": "Excuse me, could you tell me how to get to the station? How long does it take?"
  },
  "challenge": "Peça direções para um lugar da sua cidade em inglês, usando \"Could you tell me how to get to...?\" e \"How long does it take?\"",
  "aiPrompt": "Você é meu parceiro de conversação em inglês, fazendo o papel de um morador local.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 06: Pegar o autocarro.\n\nUse principalmente estas estruturas:\n- Could you tell me how to get to...?\n- How long does it take? / How often does it come?\n- I missed the bus.\n\nMe ajude a praticar pedir e entender direções de transporte público.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja naturalmente à minha resposta.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_07 = {
  "ready": true,
  "label": "07",
  "title": "Viagem imprevista",
  "eyebrow": "Nível A2 — Aula 07",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "No aeroporto ou no hotel, imprevistos acontecem. Vamos praticar falar sobre planos de viagem e resolver um problema.",
  "scene": {
    "emoji": "✈️",
    "caption": "Ana está no check-in do hotel, mas há um problema com a reserva.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Hi, I have a reservation under Ana Silva.",
        "pt": "Oi, tenho uma reserva no nome de Ana Silva."
      },
      {
        "who": "R",
        "speaker": "Recepcionista",
        "en": "I'm sorry, I can't find it in the system.",
        "pt": "Sinto muito, não consigo encontrar no sistema."
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "That's strange. I'm going to check my email.",
        "pt": "Isso é estranho. Vou checar meu e-mail."
      }
    ]
  },
  "vocab": [
    [
      "I have a reservation.",
      "ái rrev a rézervêichon",
      "Tenho uma reserva.",
      "🏨",
      true
    ],
    [
      "I'm going to...",
      "áim gôuin tu",
      "Eu vou (fazer algo).",
      "🗓️",
      true
    ],
    [
      "My flight was delayed.",
      "mái fláit uóz diléid",
      "Meu voo foi atrasado.",
      "🛫",
      true
    ],
    [
      "I lost my luggage.",
      "ái lóst mái lâguij",
      "Perdi minha bagagem.",
      "🧳",
      true
    ],
    [
      "Is breakfast included?",
      "iz brékfast inclúded",
      "O café da manhã está incluso?",
      "🍳",
      true
    ],
    [
      "What time is check-out?",
      "uát táim iz chek-áut",
      "Que horas é o check-out?",
      "🕐",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I'm going to check my email.",
    "formula": "I'm going to + VERB",
    "examples": [
      "I'm going to check my email.",
      "I'm going to call the hotel.",
      "I'm going to wait here.",
      "I'm going to travel next month."
    ]
  },
  "simplify": [
    "I have a reservation.",
    "My flight was delayed.",
    "I'm going to..."
  ],
  "swap": {
    "base": "I'm going to ______.",
    "options": [
      "📧 check my email",
      "📞 call the hotel",
      "🧳 look for my luggage",
      "🛂 show my passport"
    ]
  },
  "activities": [
    [
      "Traduza: \"Tenho uma reserva.\"",
      "I have a reservation.",
      "ái rrev a rézervêichon"
    ],
    [
      "Traduza: \"Meu voo foi atrasado.\"",
      "My flight was delayed.",
      "mái fláit uóz diléid"
    ],
    [
      "Traduza: \"Vou checar meu e-mail.\"",
      "I'm going to check my email.",
      "áim gôuin tu chek mái ímêil"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Hi, I have a reservation under Ana Silva.",
      "rrái, ái rrev a rézervêichon ânder Ana Silva",
      "Oi, tenho uma reserva no nome de Ana Silva."
    ],
    [
      "L",
      "I'm sorry, I can't find it in the system.",
      "áim sóri, ái kent fáind it in dhe sístem",
      "Sinto muito, não consigo encontrar no sistema."
    ],
    [
      "A",
      "That's strange. I'm going to check my email for the confirmation.",
      "dhats strêindj. áim gôuin tu chek mái ímêil for dhe confirmêichon",
      "Isso é estranho. Vou checar meu e-mail para ver a confirmação."
    ],
    [
      "L",
      "No problem, take your time.",
      "nôu próblem, têik iór táim",
      "Sem problema, fique à vontade."
    ],
    [
      "A",
      "Here it is! I booked it for three nights.",
      "rrír it iz! ái bukt it for thrí náits",
      "Aqui está! Reservei por três noites."
    ],
    [
      "L",
      "Perfect, I found it. Welcome!",
      "pérfekt, ái fáund it. uélcâm",
      "Perfeito, encontrei. Bem-vinda!"
    ]
  ],
  "connectors": [
    "I'm sorry.",
    "Take your time.",
    "Here it is!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I'm from...",
      "I live in...",
      "Can you help me?"
    ],
    "today": [
      "I have a reservation.",
      "I'm going to...",
      "My flight was delayed."
    ],
    "combo": "I have a reservation, but there's a problem. I'm going to check my email."
  },
  "challenge": "Descreva um plano de viagem em 3 frases usando \"I'm going to...\" e resolva um imprevisto imaginário no hotel ou aeroporto.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês, fazendo o papel de recepcionista de hotel ou funcionário de aeroporto.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 07: Viagem imprevista.\n\nUse principalmente estas estruturas:\n- I have a reservation\n- I'm going to...\n- My flight was delayed / I lost my luggage\n\nMe ajude a praticar uma situação de viagem com um pequeno imprevisto.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja naturalmente à minha resposta.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_08 = {
  "ready": true,
  "label": "08",
  "title": "Minha família e nossos planos",
  "eyebrow": "Nível A2 — Aula 08",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Vamos combinar o que você já sabe sobre família com planos futuros — rotina dos filhos, fim de semana, próximas férias.",
  "scene": {
    "emoji": "👨‍👩‍👧",
    "caption": "Ana conta a Leo sobre os planos da família para o fim de semana.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "This weekend, my daughter is going to visit her grandparents.",
        "pt": "Neste fim de semana, minha filha vai visitar os avós."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "That's nice! Are you going with her?",
        "pt": "Que legal! Você vai com ela?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "No, my husband will take her. I'm going to rest.",
        "pt": "Não, meu marido vai levá-la. Eu vou descansar."
      }
    ]
  },
  "vocab": [
    [
      "my husband / my wife",
      "mái rrâzbend / mái uáif",
      "meu marido / minha esposa",
      "💍",
      true
    ],
    [
      "my son / my daughter",
      "mái sân / mái dóter",
      "meu filho / minha filha",
      "👶",
      true
    ],
    [
      "We're going to visit...",
      "uír gôuin tu vízit",
      "Vamos visitar...",
      "🚗",
      true
    ],
    [
      "He/She will take care of it.",
      "rri/chi uíl têik quér óv it",
      "Ele/Ela vai cuidar disso.",
      "🤝",
      true
    ],
    [
      "on weekends",
      "on uíkends",
      "nos fins de semana",
      "🗓️",
      true
    ],
    [
      "We plan to...",
      "uí plen tu",
      "Planejamos...",
      "📝",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "We're going to visit my parents next weekend.",
    "formula": "We're going to + VERB + TIME",
    "examples": [
      "We're going to visit my parents next weekend.",
      "We're going to travel next summer.",
      "She's going to start school in September.",
      "They're going to move next month."
    ]
  },
  "simplify": [
    "my husband / my wife",
    "We're going to...",
    "on weekends"
  ],
  "swap": {
    "base": "This weekend, we're going to ______.",
    "options": [
      "👵 visit the grandparents",
      "🏖️ go to the beach",
      "🏡 stay home",
      "🍽️ have lunch with family"
    ]
  },
  "activities": [
    [
      "Traduza: \"Minha filha vai visitar os avós.\"",
      "My daughter is going to visit her grandparents.",
      "mái dóter iz gôuin tu vízit rrer grendpérents"
    ],
    [
      "Traduza: \"Vamos viajar no próximo verão.\"",
      "We're going to travel next summer.",
      "uír gôuin tu trável nekst sâmer"
    ],
    [
      "Traduza: \"Meu marido vai cuidar disso.\"",
      "My husband will take care of it.",
      "mái rrâzbend uíl têik quér óv it"
    ]
  ],
  "dialogue": [
    [
      "A",
      "This weekend, my daughter is going to visit her grandparents.",
      "dhis uíkend, mái dóter iz gôuin tu vízit rrer grendpérents",
      "Neste fim de semana, minha filha vai visitar os avós."
    ],
    [
      "L",
      "That's nice! Are you going with her?",
      "dhats náis! ar iú gôuin uít rrer",
      "Que legal! Você vai com ela?"
    ],
    [
      "A",
      "No, my husband will take her. I'm going to rest.",
      "nôu, mái rrâzbend uíl têik rrer. áim gôuin tu rest",
      "Não, meu marido vai levá-la. Eu vou descansar."
    ],
    [
      "L",
      "Good idea! Do you usually have free time on weekends?",
      "gud áidía! du iú iújuali rrev frí táim on uíkends",
      "Boa ideia! Você geralmente tem tempo livre nos fins de semana?"
    ],
    [
      "A",
      "Not really, but this weekend will be different.",
      "not ríli, bât dhis uíkend uíl bí díferent",
      "Não muito, mas este fim de semana vai ser diferente."
    ],
    [
      "L",
      "We plan to have lunch with the family too.",
      "uí plen tu rrev lântch uít dhe fámili tú",
      "Nós também planejamos almoçar com a família."
    ]
  ],
  "connectors": [
    "That's nice!",
    "Good idea!",
    "Not really, but..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "My family is...",
      "I have one brother.",
      "I usually..."
    ],
    "today": [
      "We're going to...",
      "my husband/wife",
      "We plan to..."
    ],
    "combo": "My family and I are going to visit my parents this weekend. We plan to have lunch together."
  },
  "challenge": "Fale sobre um plano da sua família para o próximo fim de semana usando \"We're going to...\" ou \"We plan to...\"",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 08: Minha família e nossos planos.\n\nUse principalmente estas estruturas:\n- my husband/wife/son/daughter\n- We're going to... / We plan to...\n- on weekends\n\nMe pergunte sobre minha família e nossos planos para o fim de semana.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja naturalmente e faça perguntas de continuação.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_09 = {
  "ready": true,
  "label": "09",
  "title": "Conversa com o vizinho",
  "eyebrow": "Nível A2 — Aula 09",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Small talk é a base de qualquer amizade. Vamos praticar conversar casualmente com um vizinho ou colega.",
  "scene": {
    "emoji": "🏘️",
    "caption": "Ana encontra seu vizinho Sam no corredor do prédio.",
    "dialogue": [
      {
        "who": "S",
        "speaker": "Sam",
        "en": "Hi Ana! Nice weather today, isn't it?",
        "pt": "Oi Ana! Tempo bom hoje, não é?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "It really is. How's your family doing?",
        "pt": "É mesmo. Como está a sua família?"
      },
      {
        "who": "S",
        "speaker": "Sam",
        "en": "They're doing well, thanks for asking!",
        "pt": "Estão bem, obrigado por perguntar!"
      }
    ]
  },
  "vocab": [
    [
      "Nice weather today, isn't it?",
      "náis uédher tudêi, íznt it",
      "Tempo bom hoje, não é?",
      "☀️",
      true
    ],
    [
      "How's your family doing?",
      "rráuz iór fámili dúin",
      "Como está a sua família?",
      "👪",
      true
    ],
    [
      "Long time no see!",
      "long táim nôu sí",
      "Há quanto tempo!",
      "👋",
      true
    ],
    [
      "What have you been up to?",
      "uát rrev iú bín âp tu",
      "O que você andou fazendo?",
      "🤔",
      true
    ],
    [
      "Same as always.",
      "sêim ez órueis",
      "O mesmo de sempre.",
      "🔁",
      true
    ],
    [
      "Have a good one!",
      "rrev a gud uán",
      "Tenha um bom dia!",
      "👍",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Nice weather today, isn't it?",
    "formula": "STATEMENT + , isn't it? / don't you?",
    "examples": [
      "Nice weather today, isn't it?",
      "You live upstairs, don't you?",
      "It's a busy day, isn't it?",
      "You work at the hospital, don't you?"
    ]
  },
  "simplify": [
    "Long time no see!",
    "What have you been up to?",
    "Have a good one!"
  ],
  "swap": {
    "base": "Nice ______ today, isn't it?",
    "options": [
      "☀️ weather",
      "🌧️ rain",
      "🍂 wind",
      "🎉 party"
    ]
  },
  "activities": [
    [
      "Traduza: \"Há quanto tempo!\"",
      "Long time no see!",
      "long táim nôu sí"
    ],
    [
      "Traduza: \"O que você andou fazendo?\"",
      "What have you been up to?",
      "uát rrev iú bín âp tu"
    ],
    [
      "Traduza: \"Tenha um bom dia!\"",
      "Have a good one!",
      "rrev a gud uán"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Hi Ana! Long time no see!",
      "rrái Ana! long táim nôu sí",
      "Oi Ana! Há quanto tempo!"
    ],
    [
      "A",
      "I know! What have you been up to?",
      "ái nôu! uát rrev iú bín âp tu",
      "Eu sei! O que você andou fazendo?"
    ],
    [
      "L",
      "Same as always — work and family. Nice weather today, isn't it?",
      "sêim ez órueis — uérk end fámili. náis uédher tudêi, íznt it",
      "O mesmo de sempre — trabalho e família. Tempo bom hoje, não é?"
    ],
    [
      "A",
      "It really is. How's your family doing?",
      "it ríli iz. rráuz iór fámili dúin",
      "É mesmo. Como está sua família?"
    ],
    [
      "L",
      "They're doing well, thanks for asking! And yours?",
      "dhêir dúin uél, thenks for áskin! end iórs",
      "Estão bem, obrigado por perguntar! E a sua?"
    ],
    [
      "A",
      "Great, thank you. Well, have a good one!",
      "grêit, thenk iú. uél, rrev a gud uán",
      "Ótima, obrigada. Bem, tenha um bom dia!"
    ]
  ],
  "connectors": [
    "I know!",
    "Thanks for asking.",
    "Well,..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "How are you?",
      "I'm fine, thanks.",
      "What about you?"
    ],
    "today": [
      "Long time no see!",
      "What have you been up to?",
      "isn't it? / don't you?"
    ],
    "combo": "Long time no see! How's your family doing? Have a good one!"
  },
  "challenge": "Pratique um pequeno small talk de rua: cumprimente, comente o tempo, pergunte pela família e se despeça — tudo em inglês.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês, fazendo o papel de vizinho(a) ou colega.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 09: Conversa com o vizinho.\n\nUse principalmente estas estruturas:\n- Nice weather today, isn't it?\n- Long time no see! / What have you been up to?\n- Have a good one!\n\nFaça um pequeno small talk casual comigo, como se fôssemos vizinhos nos encontrando no corredor.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja naturalmente e mantenha o tom leve e casual.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_10 = {
  "ready": true,
  "label": "10",
  "title": "Dando a minha opinião",
  "eyebrow": "Nível A2 — Aula 10",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Ter uma opinião simples e saber explicá-la é essencial para qualquer conversa real. Vamos praticar isso.",
  "scene": {
    "emoji": "🧠",
    "caption": "Ana e Leo conversam sobre um restaurante novo no bairro.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What do you think of the new restaurant?",
        "pt": "O que você acha do restaurante novo?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I think it's great, because the food is fresh.",
        "pt": "Eu acho ótimo, porque a comida é fresca."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "I agree, but it's a bit expensive.",
        "pt": "Eu concordo, mas é um pouco caro."
      }
    ]
  },
  "vocab": [
    [
      "I think...",
      "ái think",
      "Eu acho...",
      "💭",
      true
    ],
    [
      "In my opinion...",
      "in mái opínion",
      "Na minha opinião...",
      "🗯️",
      true
    ],
    [
      "I agree / I disagree.",
      "ái agrí / ái disagrí",
      "Eu concordo / discordo.",
      "🤝",
      true
    ],
    [
      "...because...",
      "bikóz",
      "...porque...",
      "🔗",
      true
    ],
    [
      "It depends.",
      "it dipénds",
      "Depende.",
      "⚖️",
      true
    ],
    [
      "That's a good point.",
      "dhats a gud póint",
      "É um bom ponto.",
      "👍",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I think it's great, because the food is fresh.",
    "formula": "I think + OPINION, because + REASON",
    "examples": [
      "I think it's great, because the food is fresh.",
      "I think it's too expensive, because it's a small place.",
      "I think English is useful, because it opens doors.",
      "I think this city is nice, because people are friendly."
    ]
  },
  "simplify": [
    "I think...",
    "I agree / I disagree.",
    "It depends."
  ],
  "swap": {
    "base": "I think it's ______, because...",
    "options": [
      "👍 great",
      "😐 OK",
      "👎 too expensive",
      "😊 interesting"
    ]
  },
  "activities": [
    [
      "Traduza: \"Na minha opinião, é caro.\"",
      "In my opinion, it's expensive.",
      "in mái opínion, its ekspénsiv"
    ],
    [
      "Traduza: \"Eu concordo com você.\"",
      "I agree with you.",
      "ái agrí uít iú"
    ],
    [
      "Traduza: \"Depende.\"",
      "It depends.",
      "it dipénds"
    ]
  ],
  "dialogue": [
    [
      "L",
      "What do you think of the new restaurant?",
      "uát du iú think óv dhe niú réstront",
      "O que você acha do restaurante novo?"
    ],
    [
      "A",
      "I think it's great, because the food is fresh.",
      "ái think its grêit, bikóz dhe fúd iz frech",
      "Eu acho ótimo, porque a comida é fresca."
    ],
    [
      "L",
      "I agree, but I think it's a bit expensive.",
      "ái agrí, bât ái think its a bit ekspénsiv",
      "Eu concordo, mas acho um pouco caro."
    ],
    [
      "A",
      "That's a good point. It depends on the day, maybe.",
      "dhats a gud póint. it dipénds on dhe dêi, mêibi",
      "É um bom ponto. Depende do dia, talvez."
    ],
    [
      "L",
      "What about the service? What do you think?",
      "uát abáut dhe sérvis? uát du iú think",
      "E o atendimento? O que você acha?"
    ],
    [
      "A",
      "In my opinion, it's very good.",
      "in mái opínion, its véri gud",
      "Na minha opinião, é muito bom."
    ]
  ],
  "connectors": [
    "What do you think?",
    "That's a good point.",
    "What about...?"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I like...",
      "I love...",
      "What about you?"
    ],
    "today": [
      "I think..., because...",
      "I agree / I disagree",
      "It depends."
    ],
    "combo": "What do you think of this city? I think it's great, because people are friendly."
  },
  "challenge": "Dê sua opinião sobre um filme, restaurante ou cidade em inglês, usando \"I think..., because...\"",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 10: Dando a minha opinião.\n\nUse principalmente estas estruturas:\n- I think..., because...\n- I agree / I disagree\n- In my opinion...\n\nMe pergunte minha opinião sobre assuntos simples do dia a dia (comida, lugares, filmes).\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja e peça para eu explicar o porquê da minha opinião.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_11 = {
  "ready": true,
  "label": "11",
  "title": "O que aconteceu ontem",
  "eyebrow": "Nível A2 — Aula 11",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Contar o que aconteceu é uma das coisas mais úteis que você pode fazer em inglês. Vamos praticar o passado.",
  "scene": {
    "emoji": "📖",
    "caption": "Leo pergunta a Ana sobre o dia dela ontem.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "How was your day yesterday?",
        "pt": "Como foi seu dia ontem?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "It was busy. I went to work and I saw my friend.",
        "pt": "Foi corrido. Eu fui trabalhar e vi minha amiga."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "What did you do after work?",
        "pt": "O que você fez depois do trabalho?"
      }
    ]
  },
  "vocab": [
    [
      "I went to work.",
      "ái uent tu uérk",
      "Eu fui trabalhar.",
      "🚶",
      true
    ],
    [
      "I saw my friend.",
      "ái sór mái frend",
      "Eu vi minha amiga.",
      "👀",
      true
    ],
    [
      "I bought some food.",
      "ái bót sâm fúd",
      "Eu comprei comida.",
      "🛒",
      true
    ],
    [
      "I came home late.",
      "ái kêim rrôum lêit",
      "Eu cheguei em casa tarde.",
      "🏠",
      true
    ],
    [
      "What did you do?",
      "uát did iú du",
      "O que você fez?",
      "❓",
      true
    ],
    [
      "It was busy / tiring.",
      "it uóz bízi / táierin",
      "Foi corrido / cansativo.",
      "😅",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "I went to work and I saw my friend.",
    "formula": "SUBJECT + VERB (past) + ...",
    "examples": [
      "I went to work and I saw my friend.",
      "I bought some food and I came home late.",
      "She called me yesterday.",
      "We had a great day."
    ]
  },
  "simplify": [
    "I went to...",
    "I saw / I bought / I came",
    "What did you do?"
  ],
  "swap": {
    "base": "Yesterday I ______.",
    "options": [
      "💼 went to work",
      "🛒 bought some food",
      "👫 saw my friend",
      "🏠 stayed home",
      "🍽️ had dinner with family"
    ]
  },
  "activities": [
    [
      "Traduza: \"Eu fui trabalhar ontem.\"",
      "I went to work yesterday.",
      "ái uent tu uérk iésterdêi"
    ],
    [
      "Traduza: \"Eu vi minha amiga.\"",
      "I saw my friend.",
      "ái sór mái frend"
    ],
    [
      "Traduza: \"O que você fez depois do trabalho?\"",
      "What did you do after work?",
      "uát did iú du áfter uérk"
    ]
  ],
  "dialogue": [
    [
      "L",
      "How was your day yesterday?",
      "rráu uóz iór dêi iésterdêi",
      "Como foi seu dia ontem?"
    ],
    [
      "A",
      "It was busy. I went to work and I saw my friend.",
      "it uóz bízi. ái uent tu uérk end ái sór mái frend",
      "Foi corrido. Eu fui trabalhar e vi minha amiga."
    ],
    [
      "L",
      "That's nice! What did you do after work?",
      "dhats náis! uát did iú du áfter uérk",
      "Que legal! O que você fez depois do trabalho?"
    ],
    [
      "A",
      "I bought some food and I came home late.",
      "ái bót sâm fúd end ái kêim rrôum lêit",
      "Comprei comida e cheguei em casa tarde."
    ],
    [
      "L",
      "Were you tired?",
      "uér iú táierd",
      "Você estava cansada?"
    ],
    [
      "A",
      "Yes, very! But it was a good day.",
      "iés, véri! bât it uóz a gud dêi",
      "Sim, muito! Mas foi um bom dia."
    ]
  ],
  "connectors": [
    "That's nice!",
    "Were you...?",
    "But it was..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I'm tired.",
      "I have a...",
      "Today is..."
    ],
    "today": [
      "I went / I saw / I bought / I came",
      "What did you do?",
      "It was..."
    ],
    "combo": "Yesterday I went to work, I saw my friend, and I came home late. It was a good day."
  },
  "challenge": "Conte o que você fez ontem em 3 ou 4 frases no passado, conectando com \"and\" e \"but\".",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 11: O que aconteceu ontem.\n\nUse principalmente estas estruturas:\n- Past simple (went, saw, bought, came, had...)\n- What did you do?\n- It was busy/tiring/great\n\nMe pergunte sobre o meu dia de ontem e peça detalhes.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja e peça mais detalhes sobre o que eu fiz.\n4. Corrija apenas erros importantes de passado, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_12 = {
  "ready": true,
  "label": "12",
  "title": "Planos para o futuro",
  "eyebrow": "Nível A2 — Aula 12",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Agora que você sabe falar do passado, vamos falar do futuro: planos concretos e intenções.",
  "scene": {
    "emoji": "📅",
    "caption": "Ana conta a Leo sobre seus planos para o próximo ano.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Next year, I'm going to study QA automation.",
        "pt": "No próximo ano, vou estudar automação de testes."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "That sounds great! Will it be difficult?",
        "pt": "Isso parece ótimo! Vai ser difícil?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Maybe, but I think I'll manage.",
        "pt": "Talvez, mas eu acho que vou conseguir."
      }
    ]
  },
  "vocab": [
    [
      "Next year, I'm going to...",
      "nekst iér, áim gôuin tu",
      "No próximo ano, eu vou...",
      "🎯",
      true
    ],
    [
      "I think I'll manage.",
      "ái think áiu manêidj",
      "Eu acho que vou conseguir.",
      "💪",
      true
    ],
    [
      "I hope to...",
      "ái rrôup tu",
      "Eu espero...",
      "🤞",
      true
    ],
    [
      "Maybe / probably",
      "mêibi / próbabli",
      "talvez / provavelmente",
      "🔮",
      true
    ],
    [
      "I'm planning to...",
      "áim plánin tu",
      "Estou planejando...",
      "📝",
      true
    ],
    [
      "Will it be difficult?",
      "uíl it bí díficout",
      "Vai ser difícil?",
      "❓",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Next year, I'm going to study QA automation.",
    "formula": "TIME + I'm going to / I'll + VERB",
    "examples": [
      "Next year, I'm going to study QA automation.",
      "Next month, I'll start a new job.",
      "Someday, I'll travel to Canada.",
      "This year, I'm going to learn Spanish too."
    ]
  },
  "simplify": [
    "I hope to...",
    "I'm planning to...",
    "Maybe / probably"
  ],
  "swap": {
    "base": "Next year, I'm going to ______.",
    "options": [
      "📚 study something new",
      "✈️ travel abroad",
      "💼 change jobs",
      "🏡 move house",
      "🗣️ speak better English"
    ]
  },
  "activities": [
    [
      "Traduza: \"No próximo ano, vou estudar inglês.\"",
      "Next year, I'm going to study English.",
      "nekst iér, áim gôuin tu stâdi ínglich"
    ],
    [
      "Traduza: \"Eu espero conseguir um novo emprego.\"",
      "I hope to get a new job.",
      "ái rrôup tu guét a niú djob"
    ],
    [
      "Traduza: \"Vai ser difícil?\"",
      "Will it be difficult?",
      "uíl it bí díficout"
    ]
  ],
  "dialogue": [
    [
      "A",
      "Next year, I'm going to study QA automation.",
      "nekst iér, áim gôuin tu stâdi QA aútomêichon",
      "No próximo ano, vou estudar automação de testes."
    ],
    [
      "L",
      "That sounds great! Will it be difficult?",
      "dhats sáunds grêit! uíl it bí díficout",
      "Isso parece ótimo! Vai ser difícil?"
    ],
    [
      "A",
      "Maybe, but I think I'll manage.",
      "mêibi, bât ái think áiu manêidj",
      "Talvez, mas eu acho que vou conseguir."
    ],
    [
      "L",
      "I'm sure you will. Are you planning to look for a job abroad?",
      "áim chúr iú uíl. ar iú plánin tu luk for a djob abród",
      "Tenho certeza que vai. Você está planejando procurar emprego no exterior?"
    ],
    [
      "A",
      "Yes, I hope to work in Europe.",
      "iés, ái rrôup tu uérk in iúrop",
      "Sim, eu espero trabalhar na Europa."
    ],
    [
      "L",
      "That's a great goal. I'll help you if I can.",
      "dhats a grêit gôul. áiu rrelp iú if ái ken",
      "Esse é um ótimo objetivo. Vou te ajudar se puder."
    ]
  ],
  "connectors": [
    "That sounds great!",
    "I'm sure you will.",
    "That's a great goal."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I like...",
      "I'm from...",
      "I want to..."
    ],
    "today": [
      "I'm going to... / I'll...",
      "I hope to...",
      "Maybe / probably"
    ],
    "combo": "Next year, I'm going to study something new. I hope to get a better job."
  },
  "challenge": "Fale sobre um plano real seu para o próximo ano usando \"I'm going to...\" e \"I hope to...\"",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 12: Planos para o futuro.\n\nUse principalmente estas estruturas:\n- I'm going to... / I'll...\n- I hope to... / I'm planning to...\n- Maybe / probably\n\nMe pergunte sobre meus planos para o próximo ano.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja com entusiasmo e faça perguntas de continuação.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_13 = {
  "ready": true,
  "label": "13",
  "title": "Isto ou aquilo?",
  "eyebrow": "Nível A2 — Aula 13",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Vamos praticar comparar pessoas, lugares e coisas — muito útil em qualquer decisão do dia a dia.",
  "scene": {
    "emoji": "⚖️",
    "caption": "Ana e Leo decidem entre duas cidades para morar.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Which city is better, Lisbon or Porto?",
        "pt": "Qual cidade é melhor, Lisboa ou Porto?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "For me, Porto is quieter than Lisbon.",
        "pt": "Pra mim, o Porto é mais tranquilo do que Lisboa."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "But Lisbon has the most job opportunities.",
        "pt": "Mas Lisboa tem as melhores oportunidades de trabalho."
      }
    ]
  },
  "vocab": [
    [
      "quieter / busier",
      "cuáieter / bíssier",
      "mais tranquilo / mais agitado",
      "🤫",
      true
    ],
    [
      "the best / the worst",
      "dhe best / dhe uérst",
      "o melhor / o pior",
      "🏆",
      true
    ],
    [
      "the most / the least",
      "dhe môust / dhe líst",
      "o mais / o menos",
      "📊",
      true
    ],
    [
      "as good as",
      "ez gud ez",
      "tão bom quanto",
      "⚖️",
      true
    ],
    [
      "Which one is better?",
      "uítch uán iz béter",
      "Qual é melhor?",
      "❓",
      true
    ],
    [
      "For me, ...",
      "for mí",
      "Pra mim, ...",
      "🙋",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Porto is quieter than Lisbon.",
    "formula": "PLACE/THING + is + ADJ-er + than + PLACE/THING",
    "examples": [
      "Porto is quieter than Lisbon.",
      "This job is better than my old one.",
      "That city has the most job opportunities.",
      "This is the best restaurant in town."
    ]
  },
  "simplify": [
    "Which one is better?",
    "For me, ...",
    "the best / the worst"
  ],
  "swap": {
    "base": "For me, ______ is better than ______.",
    "options": [
      "🏙️ Lisbon / Porto",
      "🏡 this house / that house",
      "💼 this job / my old job",
      "🍽️ this restaurant / the other one"
    ]
  },
  "activities": [
    [
      "Traduza: \"O Porto é mais tranquilo do que Lisboa.\"",
      "Porto is quieter than Lisbon.",
      "pórtu iz cuáieter dhen lízbon"
    ],
    [
      "Traduza: \"Qual é melhor?\"",
      "Which one is better?",
      "uítch uán iz béter"
    ],
    [
      "Traduza: \"Este é o melhor restaurante da cidade.\"",
      "This is the best restaurant in town.",
      "dhis iz dhe best réstront in táun"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Which city is better, Lisbon or Porto?",
      "uítch síti iz béter, lízbon or pórtu",
      "Qual cidade é melhor, Lisboa ou Porto?"
    ],
    [
      "A",
      "For me, Porto is quieter than Lisbon.",
      "for mí, pórtu iz cuáieter dhen lízbon",
      "Pra mim, o Porto é mais tranquilo do que Lisboa."
    ],
    [
      "L",
      "That's true, but Lisbon has the most job opportunities.",
      "dhats trú, bât lízbon rrez dhe môust djob oportiúnitis",
      "É verdade, mas Lisboa tem as melhores oportunidades de trabalho."
    ],
    [
      "A",
      "Good point. Is Porto as expensive as Lisbon?",
      "gud póint. iz pórtu ez ekspénsiv ez lízbon",
      "Bom ponto. O Porto é tão caro quanto Lisboa?"
    ],
    [
      "L",
      "No, I think it's a bit cheaper.",
      "nôu, ái think its a bit chíper",
      "Não, eu acho que é um pouco mais barato."
    ],
    [
      "A",
      "Then maybe Porto is the best choice for us.",
      "dhen mêibi pórtu iz dhe best chóis for âs",
      "Então talvez o Porto seja a melhor escolha para nós."
    ]
  ],
  "connectors": [
    "That's true, but...",
    "Good point.",
    "Then maybe..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I like...",
      "I live in...",
      "cheaper than"
    ],
    "today": [
      "quieter/busier than",
      "the best/the worst",
      "as ... as"
    ],
    "combo": "For me, Porto is quieter than Lisbon and it's cheaper too. Maybe it's the best choice."
  },
  "challenge": "Compare duas cidades, dois trabalhos ou dois restaurantes que você conhece, usando \"better than\", \"the best\" e \"as ... as\".",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 13: Isto ou aquilo?\n\nUse principalmente estas estruturas:\n- quieter/busier/cheaper than\n- the best / the worst / the most\n- as good as\n\nMe pergunte para comparar coisas do meu dia a dia (cidades, trabalhos, restaurantes).\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja e peça para eu justificar minha escolha.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_14 = {
  "ready": true,
  "label": "14",
  "title": "Fazendo perguntas",
  "eyebrow": "Nível A2 — Aula 14",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Fazer perguntas espontaneamente é o que mantém qualquer conversa viva. Vamos revisar e ampliar isso.",
  "scene": {
    "emoji": "❓",
    "caption": "Leo conheceu alguém novo numa festa e quer saber mais sobre a pessoa.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "How long have you lived here?",
        "pt": "Há quanto tempo você mora aqui?"
      },
      {
        "who": "M",
        "speaker": "Mia",
        "en": "About three years. What about you?",
        "pt": "Cerca de três anos. E você?"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "How often do you travel back home?",
        "pt": "Com que frequência você volta para sua terra?"
      }
    ]
  },
  "vocab": [
    [
      "How long...?",
      "rráu long",
      "Há quanto tempo...?",
      "⏳",
      true
    ],
    [
      "How often...?",
      "rráu ófen",
      "Com que frequência...?",
      "🔁",
      true
    ],
    [
      "How much...?",
      "rráu mâtch",
      "Quanto...?",
      "💰",
      true
    ],
    [
      "Why did you...?",
      "uái did iú",
      "Por que você...?",
      "🤷",
      true
    ],
    [
      "What's it like?",
      "uáts it láik",
      "Como é isso?",
      "🌍",
      true
    ],
    [
      "Really? Tell me more.",
      "ríli? têl mi mor",
      "Sério? Me conta mais.",
      "😲",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "How long have you lived here?",
    "formula": "QUESTION WORD + auxiliar + subject + verb",
    "examples": [
      "How long have you lived here?",
      "How often do you travel?",
      "Why did you move to Portugal?",
      "What's it like to live abroad?"
    ]
  },
  "simplify": [
    "How long...?",
    "How often...?",
    "Why did you...?"
  ],
  "swap": {
    "base": "______ have you lived here?",
    "options": [
      "⏳ How long",
      "❓ Why",
      "🌍 Where",
      "🤔 How"
    ]
  },
  "activities": [
    [
      "Traduza: \"Há quanto tempo você mora aqui?\"",
      "How long have you lived here?",
      "rráu long rrev iú livd rrír"
    ],
    [
      "Traduza: \"Por que você se mudou para Portugal?\"",
      "Why did you move to Portugal?",
      "uái did iú múv tu pórtchugou"
    ],
    [
      "Traduza: \"Como é morar no exterior?\"",
      "What's it like to live abroad?",
      "uáts it láik tu liv abród"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Hi! How long have you lived here?",
      "rrái! rráu long rrev iú livd rrír",
      "Oi! Há quanto tempo você mora aqui?"
    ],
    [
      "A",
      "About three years. What about you?",
      "abáut thrí iérs. uát abáut iú",
      "Cerca de três anos. E você?"
    ],
    [
      "L",
      "Almost two. Why did you move here?",
      "órmôust tú. uái did iú múv rrír",
      "Quase dois. Por que você se mudou pra cá?"
    ],
    [
      "A",
      "For work, mainly. What's it like for you?",
      "for uérk, mêinli. uáts it láik for iú",
      "Principalmente por trabalho. Como é para você?"
    ],
    [
      "L",
      "It's good! How often do you go back home?",
      "its gud! rráu ófen du iú gôu bek rrôum",
      "É bom! Com que frequência você volta pra sua terra?"
    ],
    [
      "A",
      "Once a year, usually. Really, tell me more about your story!",
      "uáns a iér, iújuali. ríli, têl mi mor abáut iór stóri",
      "Uma vez por ano, geralmente. Sério, me conta mais sobre sua história!"
    ]
  ],
  "connectors": [
    "What about you?",
    "Really? Tell me more.",
    "Mainly..."
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Where are you from?",
      "What do you do?",
      "What about you?"
    ],
    "today": [
      "How long...?",
      "How often...?",
      "Why did you...?"
    ],
    "combo": "How long have you lived here? Why did you move? What's it like?"
  },
  "challenge": "Pense em alguém que você quer conhecer melhor e escreva 4 perguntas espontâneas para fazer a essa pessoa.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês, fazendo o papel de alguém que acabei de conhecer.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 14: Fazendo perguntas.\n\nUse principalmente estas estruturas:\n- How long...? / How often...? / How much...?\n- Why did you...?\n- What's it like?\n\nResponda minhas perguntas e também me faça perguntas parecidas.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja com curiosidade natural.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_15 = {
  "ready": true,
  "label": "15",
  "title": "Continuar a conversa",
  "eyebrow": "Nível A2 — Aula 15",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Uma conversa real não é uma lista de perguntas — é uma troca. Vamos praticar reagir e continuar naturalmente.",
  "scene": {
    "emoji": "🔄",
    "caption": "Ana conta uma novidade e Leo reage naturalmente, mantendo a conversa viva.",
    "dialogue": [
      {
        "who": "A",
        "speaker": "Ana",
        "en": "I finished my first QA project this week!",
        "pt": "Terminei meu primeiro projeto de QA essa semana!"
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Really? That's amazing! How did it go?",
        "pt": "Sério? Isso é incrível! Como foi?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "It went well. And then I started looking for a job.",
        "pt": "Foi bem. E depois eu comecei a procurar emprego."
      }
    ]
  },
  "vocab": [
    [
      "Really? That's amazing!",
      "ríli? dhats amêizin",
      "Sério? Isso é incrível!",
      "😲",
      true
    ],
    [
      "How did it go?",
      "rráu did it gôu",
      "Como foi?",
      "❓",
      true
    ],
    [
      "And then...",
      "end dhen",
      "E depois...",
      "➡️",
      true
    ],
    [
      "So what happened next?",
      "sôu uát rrépend nekst",
      "Então o que aconteceu depois?",
      "🔁",
      true
    ],
    [
      "That makes sense.",
      "dhat mêiks sens",
      "Isso faz sentido.",
      "💡",
      true
    ],
    [
      "Me too! / Me neither.",
      "mi tú / mi nídher",
      "Eu também! / Eu também não.",
      "🙋",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Really? That's amazing! How did it go?",
    "formula": "REACTION + FOLLOW-UP QUESTION",
    "examples": [
      "Really? That's amazing! How did it go?",
      "Oh no! What happened next?",
      "That's great! Are you happy about it?",
      "Wow! And then what did you do?"
    ]
  },
  "simplify": [
    "Really?",
    "How did it go?",
    "And then..."
  ],
  "swap": {
    "base": "______! How did it go?",
    "options": [
      "😲 Really",
      "🎉 That's amazing",
      "😮 Wow",
      "👏 Congratulations"
    ]
  },
  "activities": [
    [
      "Traduza: \"Sério? Isso é incrível!\"",
      "Really? That's amazing!",
      "ríli? dhats amêizin"
    ],
    [
      "Traduza: \"Como foi?\"",
      "How did it go?",
      "rráu did it gôu"
    ],
    [
      "Traduza: \"Isso faz sentido.\"",
      "That makes sense.",
      "dhat mêiks sens"
    ]
  ],
  "dialogue": [
    [
      "A",
      "I finished my first QA project this week!",
      "ái fíniched mái férst QA prodjékt dhis uík",
      "Terminei meu primeiro projeto de QA essa semana!"
    ],
    [
      "L",
      "Really? That's amazing! How did it go?",
      "ríli? dhats amêizin! rráu did it gôu",
      "Sério? Isso é incrível! Como foi?"
    ],
    [
      "A",
      "It went well. And then I started looking for a job.",
      "it uent uél. end dhen ái stárted lúkin for a djob",
      "Foi bem. E depois eu comecei a procurar emprego."
    ],
    [
      "L",
      "That makes sense. So what happened next?",
      "dhat mêiks sens. sôu uát rrépend nekst",
      "Isso faz sentido. Então o que aconteceu depois?"
    ],
    [
      "A",
      "I had two interviews already.",
      "ái rred tú ínterviús órredi",
      "Já tive duas entrevistas."
    ],
    [
      "L",
      "Wow! I'm really happy for you. Me too, I'm looking for something new.",
      "uáu! áim ríli rrépi for iú. mi tú, áim lúkin for sâmthin niú",
      "Uau! Estou muito feliz por você. Eu também, estou procurando algo novo."
    ]
  ],
  "connectors": [
    "Really?",
    "So what happened next?",
    "Me too!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "I'm happy.",
      "That's nice.",
      "What about you?"
    ],
    "today": [
      "Really? That's amazing!",
      "How did it go?",
      "And then..."
    ],
    "combo": "I finished my project. It went well, and then I started looking for a job. How about you?"
  },
  "challenge": "Conte uma novidade real sua em 2 ou 3 frases, usando \"And then...\" para conectar os acontecimentos.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 15: Continuar a conversa.\n\nUse principalmente estas estruturas:\n- Really? That's amazing! / Wow!\n- How did it go? / So what happened next?\n- And then...\n\nConverse comigo como um amigo animado, sempre reagindo e fazendo perguntas de continuação sobre o que eu contar.\n\nRegras:\n1. Fale inglês simples de nível A2.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Sempre reaja antes de perguntar algo novo, como numa conversa real.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const LESSON_A2_16 = {
  "ready": true,
  "label": "16",
  "title": "Não entendi, pode repetir?",
  "eyebrow": "Nível A2 — Aula 16",
  "level": "A2",
  "characters": [
    "Ana",
    "Leo"
  ],
  "intro": "Última aula do A2! Vamos aprender a pedir esclarecimento — e juntar tudo o que você já aprendeu numa conversa completa.",
  "scene": {
    "emoji": "🆘",
    "caption": "Leo não entendeu o que Ana disse e pede para ela repetir, mais devagar.",
    "dialogue": [
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Sorry, could you repeat that, please?",
        "pt": "Desculpa, você pode repetir isso, por favor?"
      },
      {
        "who": "A",
        "speaker": "Ana",
        "en": "Sure. I said I finished my QA project.",
        "pt": "Claro. Eu disse que terminei meu projeto de QA."
      },
      {
        "who": "L",
        "speaker": "Leo",
        "en": "Oh, I understand now. Could you speak a bit slower next time?",
        "pt": "Ah, agora entendi. Você pode falar um pouco mais devagar na próxima vez?"
      }
    ]
  },
  "vocab": [
    [
      "Could you repeat that, please?",
      "cud iú ripít dhat, plíz",
      "Você pode repetir isso, por favor?",
      "🔁",
      true
    ],
    [
      "Could you speak more slowly?",
      "cud iú spík mor slôuli",
      "Você pode falar mais devagar?",
      "🐢",
      true
    ],
    [
      "What does that mean?",
      "uát dâz dhat mín",
      "O que isso significa?",
      "❓",
      true
    ],
    [
      "I don't understand.",
      "ái dôunt ânderstend",
      "Eu não entendi.",
      "🤷",
      true
    ],
    [
      "Sorry, I didn't catch that.",
      "sóri, ái dídnt ketch dhat",
      "Desculpa, eu não peguei isso.",
      "😅",
      true
    ],
    [
      "Oh, I understand now.",
      "ôu, ái ânderstend náu",
      "Ah, agora entendi.",
      "💡",
      true
    ]
  ],
  "grammarTitle": "Descubra o molde",
  "pattern": {
    "lead": "Could you repeat that, please?",
    "formula": "Could you + VERB + , please?",
    "examples": [
      "Could you repeat that, please?",
      "Could you speak more slowly, please?",
      "Could you explain that, please?",
      "Could you write it down, please?"
    ]
  },
  "simplify": [
    "I don't understand.",
    "What does that mean?",
    "Sorry, I didn't catch that."
  ],
  "swap": {
    "base": "Could you ______, please?",
    "options": [
      "🔁 repeat that",
      "🐢 speak more slowly",
      "✍️ write it down",
      "💡 explain that"
    ]
  },
  "activities": [
    [
      "Traduza: \"Você pode repetir isso, por favor?\"",
      "Could you repeat that, please?",
      "cud iú ripít dhat, plíz"
    ],
    [
      "Traduza: \"Eu não entendi.\"",
      "I don't understand.",
      "ái dôunt ânderstend"
    ],
    [
      "Traduza: \"O que isso significa?\"",
      "What does that mean?",
      "uát dâz dhat mín"
    ]
  ],
  "dialogue": [
    [
      "L",
      "Sorry, could you repeat that, please?",
      "sóri, cud iú ripít dhat, plíz",
      "Desculpa, você pode repetir isso, por favor?"
    ],
    [
      "A",
      "Sure. I said I finished my QA project.",
      "chúr. ái sed ái fíniched mái QA prodjékt",
      "Claro. Eu disse que terminei meu projeto de QA."
    ],
    [
      "L",
      "Oh, I understand now. Could you speak a bit slower next time?",
      "ôu, ái ânderstend náu. cud iú spík a bit slôuer nekst táim",
      "Ah, agora entendi. Você pode falar um pouco mais devagar na próxima vez?"
    ],
    [
      "A",
      "Of course! Sorry about that.",
      "óv kórs! sóri abáut dhat",
      "Claro! Desculpa por isso."
    ],
    [
      "L",
      "No worries. So, what does 'QA' mean exactly?",
      "nôu uóris. sôu, uát dâz QA mín eksáktli",
      "Sem problemas. Então, o que 'QA' significa exatamente?"
    ],
    [
      "A",
      "It means quality assurance — testing software before it's released.",
      "it mínz cuáliti achúrens — téstin sóftuér bifór its rilíst",
      "Significa garantia de qualidade — testar o software antes de ser lançado."
    ]
  ],
  "connectors": [
    "Sure.",
    "No worries.",
    "Of course!"
  ],
  "reuse": {
    "firstLesson": false,
    "known": [
      "Todas as estruturas das aulas 1 a 15 do A2, e o curso completo A1"
    ],
    "today": [
      "Could you repeat that, please?",
      "I don't understand.",
      "What does that mean?"
    ],
    "combo": "🎓 Agora você sabe pedir ajuda, explicar problemas, falar do passado e do futuro, dar opinião e continuar uma conversa real em inglês."
  },
  "challenge": "Grave-se tendo uma conversa completa em inglês sobre o seu dia, seu trabalho e seus planos — e, se não entender algo, peça para repetir, em inglês.",
  "aiPrompt": "Você é meu parceiro de conversação em inglês.\n\nEstou estudando inglês nível A2 no IdioLibre.\nHoje estou praticando a Aula 16: Não entendi, pode repetir? — a última aula do A2, juntando tudo o que aprendi.\n\nUse principalmente estas estruturas:\n- Could you repeat that / speak more slowly, please?\n- I don't understand. / What does that mean?\n- Qualquer estrutura das aulas anteriores do A2: passado, futuro, opinião, comparações, perguntas\n\nTenha uma conversa natural comigo sobre meu dia a dia, trabalho e planos. Fale um pouco mais rápido de vez em quando para eu praticar pedir para repetir.\n\nRegras:\n1. Fale inglês de nível A2, um pouco mais natural que nas aulas anteriores.\n2. Faça apenas uma pergunta por vez e espere minha resposta.\n3. Reaja naturalmente e continue a conversa.\n4. Corrija apenas erros importantes, com uma correção curta.\n5. Converse comigo por 5 a 10 minutos.\n\nNo final, diga:\n✅ 3 coisas que fiz bem\n🧩 1 ou 2 estruturas para praticar\n💬 3 frases que posso reutilizar."
};

const lessonsA2 = [
  LESSON_A2_01, LESSON_A2_02, LESSON_A2_03, LESSON_A2_04, LESSON_A2_05, LESSON_A2_06, LESSON_A2_07, LESSON_A2_08, LESSON_A2_09, LESSON_A2_10, LESSON_A2_11, LESSON_A2_12, LESSON_A2_13, LESSON_A2_14, LESSON_A2_15, LESSON_A2_16
];
