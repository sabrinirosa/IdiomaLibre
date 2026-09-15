/* ============================================================
   IDIOLIBRE — js/app.js
   Lógica compartilhada entre as 3 páginas do site:
     index.html            → tela de boas-vindas
     pages/lessons.html    → índice das 30 aulas
     pages/lesson.html     → conteúdo de uma aula (?aula=N)

   Depende de js/lessons-data.js já estar carregado antes deste
   arquivo (usa a variável global `lessons`).

   Cada página tem uma <div> com um id próprio (#welcome-root,
   #lessons-root ou #lesson-root). No carregamento, este arquivo
   detecta qual delas existe e renderiza só essa página — por
   isso o mesmo app.js pode ser incluído nas três páginas.
   ============================================================ */

/* ================= STATE ================= */
let progress = { lastLesson: 0, answers: {}, done: [] };
let current = 0; // índice da aula aberta (só usado em pages/lesson.html)

/* ================= NÍVEIS (A1 / A2) =================
   O site suporta múltiplos níveis. O nível é escolhido pelo
   parâmetro ?nivel=a2 na URL (padrão: a1). Cada nível tem seu
   próprio array de aulas e sua própria chave de progresso salvo,
   para o progresso de A1 e A2 nunca se misturarem. */
let LEVEL = null;
function getLevelParam(){
  const p = new URLSearchParams(window.location.search).get('nivel');
  return p === 'a2' ? 'a2' : 'a1';
}
function levelData(){
  const key = getLevelParam();
  if(key === 'a2' && typeof lessonsA2 !== 'undefined'){
    return {
      key: 'a2', label: 'A2', list: lessonsA2,
      emojis: (typeof LESSON_EMOJIS_A2 !== 'undefined') ? LESSON_EMOJIS_A2 : [],
      storageKey: 'idiolibre_progress_a2',
      alwaysLocked: true, // A2 é continuação: exige acesso liberado em todas as aulas
      qs: '?nivel=a2', qsAmp: '&nivel=a2'
    };
  }
  return {
    key: 'a1', label: 'A1', list: lessons,
    emojis: (typeof LESSON_EMOJIS !== 'undefined') ? LESSON_EMOJIS : [],
    storageKey: 'idiolibre_progress',
    alwaysLocked: false,
    qs: '', qsAmp: ''
  };
}
function lessonHref(n){ return `lesson.html?aula=${n}${LEVEL.qsAmp}`; }
function lessonsHref(){ return `lessons.html${LEVEL.qs}`; }

/* Todos os níveis do curso. A1 e A2 já têm conteúdo; B1-C2 estão
   "em breve" e apontam para páginas próprias (pages/b1.html, etc). */
const ALL_LEVELS = [
  { key:'a1', label:'A1', href:'lessons.html' },
  { key:'a2', label:'A2', href:'lessons.html?nivel=a2' },
  { key:'b1', label:'B1', href:'b1.html' },
  { key:'b2', label:'B2', href:'b2.html' },
  { key:'c1', label:'C1', href:'c1.html' },
  { key:'c2', label:'C2', href:'c2.html' },
];

/* Usado dentro de pages/ (lessons.html, lesson.html, b1.html...).
   `active` é opcional — por padrão usa o nível atual (LEVEL.key). */
function levelSwitcher(active){
  const cur = active || (LEVEL && LEVEL.key);
  return `
    <div class="level-switch">
      ${ALL_LEVELS.map(l => `<a class="level-pill ${cur===l.key ? 'active' : ''}" href="${l.href}">${l.label}</a>`).join('')}
    </div>
  `;
}

/* Usado na home (index.html), onde os links precisam do prefixo "pages/". */
function homeLevelsRow(){
  const emojis = { a1:'🌱', a2:'🗣️', b1:'📘', b2:'📗', c1:'📙', c2:'🏆' };
  return `
    <div class="stops">
      ${ALL_LEVELS.map(l => `<a class="stop" href="pages/${l.href}"><span class="stop-badge">${emojis[l.key]}</span>${l.label}</a>`).join('')}
    </div>
  `;
}

/* ================= STORAGE ================= */
const memoryStore = {};
function storageGet(key){ try{ return localStorage.getItem(key); }catch(e){ return memoryStore[key] !== undefined ? memoryStore[key] : null; } }
function storageSet(key, value){ try{ localStorage.setItem(key, value); }catch(e){ memoryStore[key] = value; } }
function loadProgress(){ const raw = storageGet(LEVEL.storageKey); return raw ? JSON.parse(raw) : { lastLesson: 0, answers: {}, done: [] }; }
function persistProgress(){ storageSet(LEVEL.storageKey, JSON.stringify(progress)); }

/* ================= PÁGINA: index.html (boas-vindas) ================= */
function renderWelcomePage(){
  const root = document.getElementById('welcome-root');
  if(!root) return;

  const locked = new URLSearchParams(window.location.search).get('locked') === '1';
  const alreadyIn = typeof hasAccess === 'function' && hasAccess();

  root.innerHTML = `
    <div class="welcome-wrap">
      <header class="site-header">
        <span class="logo-mark">I</span>
        <span class="logo-name">IdioLibre</span>
        ${alreadyIn
          ? `<div class="header-actions"><a class="login-btn" href="pages/lessons.html">Minhas aulas →</a></div>`
          : `<button class="login-btn" onclick="openLoginModal()">🔐 Login</button>`}
      </header>
      <div class="welcome-card">
        ${locked ? `<div class="locked-banner">🔒 A partir da Aula 4 é preciso entrar com um e-mail liberado. As 3 primeiras são livres!</div>` : ''}
        <svg class="route-svg" viewBox="0 0 420 90" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 60 Q 110 10, 210 45 T 405 40" fill="none" stroke="#B5542A" stroke-width="2" stroke-dasharray="6 8" stroke-linecap="round"/>
          <circle cx="15" cy="60" r="6" fill="#2F6690"/>
          <text x="30" y="30" font-size="26">🏠</text>
          <text x="195" y="78" font-size="26">📖</text>
          <text x="380" y="26" font-size="26">🌍</text>
        </svg>
        <p class="kicker">Sua jornada de inglês · Acesso antecipado</p>
        <h1 class="welcome-title">Aqui começamos nossa jornada juntos,<br>para viajarmos pelo mundo <em>fluentes em inglês</em>.</h1>
        <p class="welcome-sub">Passo a passo, aula por aula — do primeiro "Hello" até conversas completas. Vamos construir essa fluência juntos.</p>
        <a class="cta-btn" href="pages/lessons.html">Começar minha jornada →</a>
        ${homeLevelsRow()}
        ${alreadyIn ? '' : `<p class="free-note">🔓 As 3 primeiras aulas do A1 são livres, sem login.</p>`}
      </div>
    </div>

    <div class="modal-overlay" id="login-overlay">
      <div class="modal-box">
        <button class="modal-close" onclick="closeLoginModal()" aria-label="Fechar">✕</button>
        <h3>🔐 Acesso antecipado</h3>
        <p>Digite seu e-mail. Se ele já estiver liberado, você entra direto. Se não, te colocamos na lista de espera.</p>
        <input type="email" id="login-email" placeholder="seu@email.com" onkeydown="if(event.key==='Enter'){submitLogin()}">
        <button class="cta-btn" id="login-submit-btn" onclick="submitLogin()">Entrar</button>
        <p class="modal-msg" id="login-msg"></p>
        <div class="modal-divider"><span>ou</span></div>
        <a class="whatsapp-btn" href="${whatsappUnlockLink()}" target="_blank" rel="noopener">💬 Pedir liberação agora no WhatsApp</a>
        <p class="whatsapp-note">Liberação manual rápida: mande seu e-mail pelo WhatsApp e receba acesso a todas as aulas por apenas 2,99€.</p>
      </div>
    </div>
  `;

  if(locked) openLoginModal();
}

/* ================= PÁGINA: pages/lessons.html (índice) ================= */
function renderLessonsListPage(){
  const root = document.getElementById('lessons-root');
  if(!root) return;

  const list = LEVEL.list;
  const pct = Math.round((progress.done.length / list.length) * 100);
  const isIn = typeof hasAccess === 'function' && hasAccess();

  const cards = list.map((l, i) => {
    const isFree = !LEVEL.alwaysLocked && i < (typeof FREE_LESSONS === 'number' ? FREE_LESSONS : 3);
    const gated = !isFree && !isIn;
    const cls = [progress.done.includes(i) ? 'done' : '', !l.ready ? 'locked' : '', gated ? 'gated' : ''].join(' ');
    return `
      <a class="lesson-card ${cls}" href="${lessonHref(i+1)}">
        <span class="num">${l.label}</span>
        <span class="emoji">${LEVEL.emojis[i] || '📘'}</span>
        <span class="card-title">${l.title}</span>
        ${gated ? `<span class="lock-badge">🔒</span>` : ''}
      </a>
    `;
  }).join('');

  const subtitle = LEVEL.key === 'a2'
    ? 'Continue de onde parou na A1: aqui você usa o que já sabe para viver situações reais em inglês.'
    : (isIn ? 'Escolha uma aula para começar ou continuar de onde parou.' : 'As 3 primeiras aulas são livres. A partir da 4ª, faça login para desbloquear.');

  root.innerHTML = `
    <div class="page-topbar">
      <a class="brand-link" href="../index.html"><img src="../images/logo.jpg" alt="Carimbo IdioLibre">IdioLibre</a>
      ${levelSwitcher()}
      <a class="logout-link" href="#" onclick="logout();return false;">Sair</a>
    </div>
    <main>
      <div class="course-header">
        <h1>${LEVEL.key === 'a2' ? 'Inglês para viver, não para passar numa prova' : 'Do zero ao avançado'}</h1>
        <p class="sub">${subtitle}</p>
        <div class="course-progress">
          ${LEVEL.label} • ${progress.done.length}/${list.length} aulas
          <div class="track"><div class="fill" style="width:${pct}%"></div></div>
        </div>
      </div>
      <div class="lesson-index-grid">${cards}</div>
    </main>
    <footer>Progresso salvo automaticamente neste navegador</footer>
  `;
}

/* ================= PÁGINA: pages/b1.html, b2.html, c1.html, c2.html ("em breve") ================= */
function renderComingSoonPage(){
  const root = document.getElementById('comingsoon-root');
  if(!root) return;

  const level = (root.getAttribute('data-level') || 'B1').toLowerCase();
  const label = level.toUpperCase();
  const isIn = typeof hasAccess === 'function' && hasAccess();

  root.innerHTML = `
    <div class="page-topbar">
      <a class="brand-link" href="../index.html"><img src="../images/logo.jpg" alt="Carimbo IdioLibre">IdioLibre</a>
      ${levelSwitcher(level)}
      ${isIn ? `<a class="logout-link" href="#" onclick="logout();return false;">Sair</a>` : `<a class="logout-link" href="../index.html">Voltar</a>`}
    </div>
    <main class="coming-soon-wrap">
      <div class="coming-soon-badge">${label}</div>
      <h1>Nível ${label} — em breve</h1>
      <p class="sub">Estamos preparando o conteúdo do nível ${label}. Enquanto isso, continue evoluindo nas aulas de A1 e A2.</p>
      <div class="coming-soon-actions">
        <a class="cta-btn" href="lessons.html">Ir para as aulas A1 →</a>
        <a class="whatsapp-link" href="${whatsappNotifyLink(label)}" target="_blank" rel="noopener">📲 Avisem-me quando o ${label} estiver pronto</a>
      </div>
    </main>
  `;
}

/* ================= PÁGINA: pages/lesson.html (uma aula) ================= */
function renderLessonPage(){
  const root = document.getElementById('lesson-root');
  if(!root) return;

  const params = new URLSearchParams(window.location.search);
  const requested = parseInt(params.get('aula') || '1', 10);
  const list = LEVEL.list;

  // Aulas 1 a FREE_LESSONS são livres (só no nível A1). A2 exige acesso liberado em todas as aulas.
  const needsLogin = LEVEL.alwaysLocked || requested > FREE_LESSONS;
  if(needsLogin && typeof guardPage === 'function' && !guardPage()){
    return; // guardPage() já redirecionou para o login
  }

  current = Math.min(Math.max(requested - 1, 0), list.length - 1);
  progress.lastLesson = current;
  persistProgress();

  const lesson = list[current];
  document.title = `Aula ${lesson.label} — ${lesson.title} · IdioLibre`;

  root.innerHTML = `
    <div class="page-topbar">
      <a class="brand-link" href="../index.html"><img src="../images/logo.jpg" alt="Carimbo IdioLibre">IdioLibre</a>
      ${levelSwitcher()}
      <div style="display:flex;align-items:center;gap:10px;">
        <a class="back-link" href="${lessonsHref()}">← Todas as aulas</a>
        <a class="logout-link" href="#" onclick="logout();return false;">Sair</a>
      </div>
    </div>
    <main>${lesson.ready ? renderLessonMain(lesson) : renderLockedMain(lesson)}</main>
    <footer>${lesson.label} · ${lesson.title} · Progresso salvo automaticamente neste navegador</footer>
  `;
  window.scrollTo(0,0);
}

function renderLockedMain(lesson){
  return `
    <div class="locked-main">
      <div class="big">🧳</div>
      <h2>Aula ${lesson.label}: ${lesson.title}</h2>
      <p>Esta aula ainda está sendo preparada. Volte em breve!</p>
    </div>
    <div class="nav-btns">
      <a class="nav-btn ${current === 0 ? 'disabled' : ''}" href="${lessonHref(current)}">← Aula anterior</a>
      <a class="nav-btn ${current === LEVEL.list.length - 1 ? 'disabled' : ''}" href="${lessonHref(current + 2)}">Próxima aula →</a>
    </div>
  `;
}

function renderLessonMain(lesson){
  const vocabCards = lesson.vocab.map(([word, pron, pt, emoji, isNew], i) => {
    const isBlue = i % 2 === 0;
    const sceneBg = isBlue ? 'linear-gradient(160deg,#EAF2FA 0%,#CFE1F1 100%)' : 'linear-gradient(160deg,#FBEFE6 0%,#F0D9C6 100%)';
    const blobA = isBlue ? 'rgba(47,102,144,0.25)' : 'rgba(181,84,42,0.22)';
    const blobB = isBlue ? 'rgba(181,84,42,0.18)' : 'rgba(47,102,144,0.16)';
    // Conteúdo novo (marcado com isNew) nasce com a tradução escondida,
    // revelável com um clique — conteúdo já conhecido continua visível direto.
    const ptBlock = isNew
      ? `<button class="translate-btn vocab-translate-btn" onclick="toggleTranslation(this)">🇵🇹 Ver tradução</button><div class="vocab-pt line-pt">${pt}</div>`
      : `<div class="vocab-pt">🇵🇹 ${pt}</div>`;
    return `
    <div class="vocab-card">
      <div class="vocab-scene" style="background:${sceneBg}">
        <span class="blob blob-a" style="background:${blobA}"></span>
        <span class="blob blob-b" style="background:${blobB}"></span>
        <div class="vocab-img">${emoji}</div>
      </div>
      <div class="vocab-word">🇬🇧 ${word}</div>
      <div class="vocab-pron">🔊 ${pron}</div>
      ${ptBlock}
      <button class="play-btn" onclick="speak('${word.replace(/'/g, "\\'")}')" aria-label="Ouvir pronúncia">🔊</button>
    </div>
  `;
  }).join('');

  const dialogueLines = lesson.dialogue.map(([speaker, text, pron, pt]) => `
    <div class="line">
      <span class="speaker">${speaker === 'A' ? 'Ana' : 'Leo'}</span>
      <span class="line-text">${text}<span class="line-pron">${pron}</span>
        ${pt ? `<button class="translate-btn" onclick="toggleTranslation(this)">🇵🇹 Ver tradução</button><span class="line-pt">${pt}</span>` : ''}
      </span>
      <button class="play-btn" onclick="speak('${text.replace(/'/g, "\\'")}')" aria-label="Ouvir frase">🔊</button>
    </div>
  `).join('');

  const savedAnswers = progress.answers[current] || {};

  const activityBlocks = lesson.activities.map(([q, answer, pron], i) => `
    <div class="activity">
      <p class="q">${i+1}. ${q}</p>
      <textarea data-i="${i}" onblur="saveAnswer(this)" placeholder="Escreva sua resposta em inglês...">${savedAnswers[i] || ''}</textarea>
      <div class="save-note" id="save-note-${i}">Progresso salvo ✓</div>
      <button class="reveal-btn" onclick="toggleAnswer(this)">Ver exemplo de resposta</button>
      <div class="answer">${answer} <span style="font-style:italic;color:var(--ink-soft);">${pron}</span></div>
    </div>
  `).join('');

  const reuseKnown = lesson.reuse.firstLesson
    ? `<div class="first-lesson-note">Esta é sua primeira aula — tudo aqui é novo, e vai ficar com você para sempre.</div>`
    : (lesson.reuse.known || []).map(k => `<div>${k}</div>`).join('');

  const coursePct = Math.round((progress.done.length / LEVEL.list.length) * 100);

  return `
    <div class="progress-chip">${lesson.level || LEVEL.label} • ${coursePct}%</div>
    <p class="eyebrow">${lesson.eyebrow}</p>
    <h1 class="title">${lesson.title}</h1>
    <p class="intro">${lesson.intro}</p>

    <section>
      <h2 class="section-title">1. 👀 Veja</h2>
      <div class="scene-box">
        <div class="scene-emoji">${lesson.scene.emoji}</div>
        <p class="scene-caption">${lesson.scene.caption}</p>
        <div class="scene-dialogue">
          ${lesson.scene.dialogue.map(l => `
            <div class="scene-line ${l.who}">
              <span class="who">${l.speaker}</span>
              <div class="scene-bubble">
                ${l.en}
                <span class="pt">${l.pt}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section>
      <h2 class="section-title">2. 💬 Frases úteis</h2>
      <div class="vocab-grid">${vocabCards}</div>
    </section>

    <section>
      <h2 class="section-title">3. 🧩 Descubra o molde</h2>
      <div class="formula-box">${lesson.pattern.formula}</div>
      <div class="grammar-box">
        <div class="pattern-examples">${lesson.pattern.examples.map(e => `<div>${e}</div>`).join('')}</div>
      </div>
    </section>

    <section>
      <h2 class="section-title">4. ✂️ Simplifique</h2>
      ${lesson.simplify.map(f => `<div class="formula-box">${f}</div>`).join('')}
    </section>

    <section>
      <h2 class="section-title">5. 🔄 Troque</h2>
      <div class="grammar-box">
        <p class="example">${lesson.swap.base}</p>
        <div class="swap-chips">${lesson.swap.options.map(o => `<span class="swap-chip">${o}</span>`).join('')}</div>
      </div>
    </section>

    <section>
      <h2 class="section-title">6. 🗣️❓ Fale e pergunte</h2>
      ${activityBlocks}
    </section>

    <section>
      <h2 class="section-title">7. 🔁 Converse</h2>
      <div class="dialogue">${dialogueLines}</div>
    </section>

    <section>
      <h2 class="section-title">8. ➡️ Continue a conversa</h2>
      <div class="grammar-box">
        <p style="margin:0 0 4px;color:var(--ink-soft);">Expressões que mantêm a conversa viva:</p>
        <div class="connector-row">${lesson.connectors.map(c => `<span class="connector-chip">${c}</span>`).join('')}</div>
      </div>
    </section>

    <section>
      <h2 class="section-title">9. ♻️ Reutilize</h2>
      <div class="grammar-box reuse-box">
        <div>
          <h4>⭐ O QUE VOCÊ JÁ SABE</h4>
          <div class="items">${reuseKnown}</div>
        </div>
        <div>
          <h4>🆕 O QUE VOCÊ APRENDEU HOJE</h4>
          <div class="items">${lesson.reuse.today.map(t => `<div>${t}</div>`).join('')}</div>
        </div>
        <div>
          <h4>🔁 USE NOVAMENTE</h4>
          <div class="combo-box">${lesson.reuse.combo}</div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="section-title">10. 🎯 Desafio</h2>
      <div class="challenge-box"><p>${lesson.challenge}</p></div>
    </section>

    <section>
      <h2 class="section-title">🗣️ Agora vamos conversar!</h2>
      <div class="ai-box">
        <h3>Pratique com uma IA</h3>
        <p class="desc">Cole o prompt abaixo no ChatGPT, Gemini ou Claude e converse por 5 a 10 minutos.</p>
        <div class="ai-prompt-box" id="ai-prompt-box">${buildAiPrompt(lesson, LEVEL)}</div>
        <button class="copy-btn" id="copy-prompt-btn" onclick="copyPrompt(this)">📋 Copiar prompt</button>
      </div>
    </section>

    <div class="nav-btns">
      <a class="nav-btn ${current === 0 ? 'disabled' : ''}" href="${lessonHref(current)}">← Aula anterior</a>
      <a class="nav-btn ${current === LEVEL.list.length - 1 ? 'disabled' : ''}" href="${lessonHref(current + 2)}">Próxima aula →</a>
    </div>
  `;
}

/* ================= PROMPT DE PRÁTICA COM IA =================
   Gerado automaticamente a partir do conteúdo de cada aula (título,
   estruturas, vocabulário e o que já foi visto em aulas anteriores),
   para que o aluno sempre cole um prompt atualizado, sem precisar
   editar nada manualmente. */
function buildAiPrompt(lesson, level){
  const levelLabel = lesson.level || (level && level.label) || 'A1';

  const structures = [
    lesson.pattern && lesson.pattern.formula,
    ...((lesson.reuse && lesson.reuse.today) || lesson.simplify || [])
  ].filter(Boolean);
  const uniqueStructures = [...new Set(structures)];

  const vocabWords = (lesson.vocab || []).map(v => v[0]);

  const knownBefore = (lesson.reuse && !lesson.reuse.firstLesson && lesson.reuse.known)
    ? lesson.reuse.known
    : [];

  const lessonBlockParts = [
    `Nível: ${levelLabel}`,
    `Tema: ${lesson.title}`,
    lesson.intro || '',
    `Estruturas principais desta aula:\n- ${uniqueStructures.join('\n- ')}`,
    `Palavras e frases principais:\n- ${vocabWords.join('\n- ')}`
  ].filter(Boolean);
  if(knownBefore.length){
    lessonBlockParts.push(`O que já aprendi em aulas anteriores (reutilize quando fizer sentido):\n- ${knownBefore.join('\n- ')}`);
  }
  const lessonBlock = lessonBlockParts.join('\n\n');

  return `Converse comigo em inglês por aproximadamente 5 minutos sobre o tema da aula atual do IdioLibre, reutilizando naturalmente conteúdos das aulas anteriores.

Faça perguntas simples, adequadas ao meu nível, e mantenha a conversa natural.

Corrija meus erros em português, de forma breve, mostrando:
❌ O que eu disse
✅ Forma correta em inglês

Depois da correção, continue a conversa normalmente.

Regras:
- Faça apenas uma pergunta por vez e espere minha resposta antes de continuar.
- Reaja naturalmente ao que eu disser e continue a conversa a partir da minha resposta.
- Não responda por mim; se eu não souber responder, dê uma opção simples.
- Não transforme isso em uma aula de gramática.

Aula atual
${lessonBlock}

Se eu disser "End conversation", encerre imediatamente e diga:
"Muito bem! Conversa concluída. Até a próxima aula!"

No final da conversa (ou quando eu disser "End conversation"), mostre um resumo:
✅ 3 coisas que fiz bem
❌ Erros que cometi, com a correção
💡 2 ou 3 dicas para praticar

Comece a conversa agora com uma pergunta simples relacionada ao tema da aula.`;
}

/* ================= AÇÕES DO ALUNO (usadas dentro da aula) ================= */
function saveAnswer(textarea){
  const key = textarea.getAttribute('data-i');
  if(!progress.answers[current]) progress.answers[current] = {};
  progress.answers[current][key] = textarea.value;
  persistProgress();
  const note = document.getElementById('save-note-' + key);
  if(note){ note.classList.add('show'); setTimeout(() => note.classList.remove('show'), 1800); }
}

function toggleTranslation(btn){
  const pt = btn.nextElementSibling;
  pt.classList.toggle('show');
  btn.textContent = pt.classList.contains('show') ? '🇵🇹 Esconder tradução' : '🇵🇹 Ver tradução';
}

function toggleAnswer(btn){
  const answer = btn.nextElementSibling;
  answer.classList.toggle('show');
  btn.textContent = answer.classList.contains('show') ? 'Esconder resposta' : 'Ver exemplo de resposta';
}

function speak(text){
  if(!('speechSynthesis' in window)) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function copyPrompt(btn){
  const box = document.getElementById('ai-prompt-box');
  const text = box ? box.textContent.trim() : '';
  const done = () => {
    btn.textContent = '✅ Copiado!';
    btn.classList.add('copied');
    if (!progress.done.includes(current)) progress.done.push(current);
    persistProgress();
    const chip = document.querySelector('.progress-chip');
    if(chip){
      const pct = Math.round((progress.done.length / LEVEL.list.length) * 100);
      chip.textContent = `${LEVEL.label} • ${pct}%`;
    }
    setTimeout(() => { btn.textContent = '📋 Copiar prompt'; btn.classList.remove('copied'); }, 2000);
  };
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done).catch(done);
  }else{
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try{ document.execCommand('copy'); }catch(e){}
    document.body.removeChild(ta);
    done();
  }
}

/* ================= INICIALIZAÇÃO ================= */
/* Cada função de render checa se a sua <div> raiz existe na página
   atual antes de fazer qualquer coisa — por isso é seguro chamar
   as três em todas as páginas: só a que "bate" com o HTML roda. */
document.addEventListener('DOMContentLoaded', () => {
  LEVEL = levelData();
  progress = loadProgress();
  renderWelcomePage();
  renderLessonsListPage();
  renderLessonPage();
  renderComingSoonPage();
});
