/* ============================================================
   IDIOLIBRE — js/main.js
   Lógica compartilhada de TODO o site: login/acesso antecipado
   (antigo js/auth.js) + motor de renderização (antigo js/app.js).

   Páginas:
     index.html        → tela de boas-vindas (#welcome-root)
     pages/a1.html      → nível A1 (#level-root, data-level="a1")
     pages/a2.html      → nível A2 (#level-root, data-level="a2")
     pages/b1.html      → nível B1 (#level-root, data-level="b1")
     pages/b2.html      → nível B2 (#level-root, data-level="b2")
     pages/c1.html      → nível C1 (#level-root, data-level="c1")
     pages/c2.html      → nível C2 (#level-root, data-level="c2")

   Cada página de nível (pages/*.html) é uma única página que
   mostra TANTO o índice de aulas QUANTO o conteúdo de uma aula —
   a troca entre os dois é feita por hash na URL (ex.: b1.html#aula-5),
   sem recarregar a página. `renderLevelPage()` decide o que mostrar
   olhando pra `window.location.hash`, e um listener de `hashchange`
   re-renderiza sempre que o hash muda (clique num cartão de aula,
   botão anterior/próxima, ou o botão voltar do navegador).

   Depende de js/lessons.js já estar carregado antes deste arquivo
   (usa as variáveis globais `lessons`, `lessonsA2`, `lessonsB1`...).
   ============================================================ */

/* ============================================================
   ACESSO ANTECIPADO (login por e-mail via Supabase)
   Antigo js/auth.js — ver README.md para configurar seu projeto.
   ============================================================ */

const SUPABASE_URL = 'https://cfopcdkuznlqhpjkrnxo.supabase.co';   // TODO: preencher
const SUPABASE_ANON_KEY = 'sb_publishable_dfyx3SBDaWOr7NKbj_MBDw_et2wbKSm';   // TODO: preencher

const AUTH_CONFIGURED = !SUPABASE_URL.includes('SEU-PROJETO') && !SUPABASE_ANON_KEY.includes('SUA-CHAVE');

const supabaseClient = (AUTH_CONFIGURED && window.supabase)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const ACCESS_KEY = 'idiolibre_access';

/* As primeiras aulas ficam liberadas sem login — a partir desta,
   é preciso ter e-mail aprovado no Supabase. */
const FREE_LESSONS = 3;

/* ============================================================
   ⚠️ CONFIGURAÇÃO OBRIGATÓRIA — WhatsApp
   Preencha com o SEU número no formato internacional, só dígitos
   (código do país + DDD/área + número, sem "+", sem espaços,
   sem traços). Exemplo Portugal: '351912345678'.
   ============================================================ */
const WHATSAPP_NUMBER = '351915391705';

const UNLOCK_PRICE = '4,99€ ou 29,99R$';

function whatsappUnlockLink(){
  const msg = `Olá! Quero liberar o acesso completo ao IdioLibre (${UNLOCK_PRICE}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function whatsappNotifyLink(level){
  const msg = `Olá! Quero ser avisado(a) quando o nível ${level} do IdioLibre estiver disponível.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ---------- estado local de acesso ----------
   Usa sessionStorage (não localStorage) de propósito: o acesso
   dura só enquanto a aba/navegador ficar aberto. Ao fechar o
   navegador, a sessão expira e é preciso digitar o e-mail de
   novo — assim, se várias pessoas usarem o mesmo computador,
   cada uma precisa confirmar o próprio e-mail liberado. */
function getAccess(){
  try { return JSON.parse(sessionStorage.getItem(ACCESS_KEY) || 'null'); }
  catch(e){ return null; }
}
function setAccess(email){
  try { sessionStorage.setItem(ACCESS_KEY, JSON.stringify({ email, approved: true, ts: Date.now() })); }
  catch(e){ /* sessionStorage indisponível — segue sem persistir */ }
}
function hasAccess(){
  const a = getAccess();
  return !!(a && a.approved);
}
function basePath(){
  return location.pathname.includes('/pages/') ? '../' : '';
}
function logout(){
  try { sessionStorage.removeItem(ACCESS_KEY); } catch(e){}
  window.location.href = basePath() + 'index.html';
}

/* ---------- protege pages/*.html (níveis além das FREE_LESSONS) ---------- */
function guardPage(){
  if(!hasAccess()){
    window.location.replace(basePath() + 'index.html?locked=1');
    return false;
  }
  return true;
}

/* ---------- pede/verifica acesso via Supabase ----------
   Chama a função check_early_access(p_email) no banco, que:
   - se o e-mail já existe e está 'approved' → retorna 'approved'
   - se o e-mail já existe e está 'pending'  → retorna 'pending'
   - se o e-mail não existe, cria como 'pending' → retorna 'pending'
   Veja o SQL completo da função no README.md.
*/
async function requestAccess(email){
  const clean = (email || '').trim().toLowerCase();
  if(!clean || !clean.includes('@')){
    return { ok: false, message: 'Digite um e-mail válido.' };
  }

  if(!AUTH_CONFIGURED){
    return {
      ok: false,
      message: 'O login ainda não foi configurado. Preencha SUPABASE_URL e SUPABASE_ANON_KEY em js/main.js (veja o README).'
    };
  }
  if(!supabaseClient){
    return { ok: false, message: 'Não foi possível carregar o Supabase. Verifique sua conexão e tente novamente.' };
  }

  try {
    const { data, error } = await supabaseClient.rpc('check_early_access', { p_email: clean });
    if(error){
      console.error('Supabase error:', error);
      return { ok: false, message: 'Erro ao verificar seu acesso. Tente novamente em instantes.' };
    }
    if(data === 'approved'){
      setAccess(clean);
      return { ok: true, approved: true, message: '✅ Acesso liberado! Entrando...' };
    }
    return {
      ok: true,
      approved: false,
      message: '📬 Você entrou na lista de espera! Avisaremos por e-mail assim que seu acesso for liberado.'
    };
  } catch(e){
    console.error(e);
    return { ok: false, message: 'Erro inesperado. Tente novamente.' };
  }
}

/* ---------- modal de login (usado em index.html) ---------- */
function openLoginModal(){
  const overlay = document.getElementById('login-overlay');
  if(!overlay) return;
  overlay.style.display = 'flex';
  const input = document.getElementById('login-email');
  if(input) input.focus();
}
function closeLoginModal(){
  const overlay = document.getElementById('login-overlay');
  if(overlay) overlay.style.display = 'none';
}
async function submitLogin(){
  const input = document.getElementById('login-email');
  const msg = document.getElementById('login-msg');
  const btn = document.getElementById('login-submit-btn');
  if(!input) return;

  btn.disabled = true;
  btn.textContent = 'Verificando...';
  const result = await requestAccess(input.value);
  btn.disabled = false;
  btn.textContent = 'Entrar';

  if(msg){
    msg.textContent = result.message;
    msg.className = 'modal-msg ' + (result.ok ? (result.approved ? 'ok' : 'pending') : 'error');
  }

  if(result.approved){
    setTimeout(() => { window.location.href = basePath() + 'pages/a1.html'; }, 900);
  }
}

/* ================= STATE ================= */
let progress = { lastLesson: 0, answers: {}, done: [] };
let current = 0; // índice da aula aberta dentro da página de nível atual

/* ================= NÍVEIS (A1-C2) =================
   Cada nível agora tem sua própria página (pages/a1.html ...
   pages/c2.html), com uma única <div id="level-root"
   data-level="b1"> — o nível é lido desse atributo, não mais de
   um parâmetro ?nivel= na URL. Cada nível continua com seu
   próprio array de aulas e sua própria chave de progresso salvo,
   pra nunca se misturarem. */
let LEVEL = null;
function getLevelParam(){
  const root = document.getElementById('level-root');
  const key = root && root.getAttribute('data-level');
  if(['a2','b1','b2','c1','c2'].includes(key)) return key;
  return 'a1';
}
function levelData(){
  const key = getLevelParam();
  if(key === 'a2' && typeof lessonsA2 !== 'undefined'){
    return {
      key: 'a2', label: 'A2', list: lessonsA2,
      emojis: (typeof LESSON_EMOJIS_A2 !== 'undefined') ? LESSON_EMOJIS_A2 : [],
      storageKey: 'idiolibre_progress_a2',
      alwaysLocked: true // A2 é continuação: exige acesso liberado em todas as aulas
    };
  }
  if(key === 'b1' && typeof lessonsB1 !== 'undefined'){
    return {
      key: 'b1', label: 'B1', list: lessonsB1,
      emojis: (typeof LESSON_EMOJIS_B1 !== 'undefined') ? LESSON_EMOJIS_B1 : [],
      storageKey: 'idiolibre_progress_b1',
      alwaysLocked: true // B1 exige acesso liberado em todas as aulas
    };
  }
  if(key === 'b2' && typeof lessonsB2 !== 'undefined'){
    return {
      key: 'b2', label: 'B2', list: lessonsB2,
      emojis: (typeof LESSON_EMOJIS_B2 !== 'undefined') ? LESSON_EMOJIS_B2 : [],
      storageKey: 'idiolibre_progress_b2',
      alwaysLocked: true // B2 exige acesso liberado em todas as aulas
    };
  }
  if(key === 'c1' && typeof lessonsC1 !== 'undefined'){
    return {
      key: 'c1', label: 'C1', list: lessonsC1,
      emojis: (typeof LESSON_EMOJIS_C1 !== 'undefined') ? LESSON_EMOJIS_C1 : [],
      storageKey: 'idiolibre_progress_c1',
      alwaysLocked: true // C1 exige acesso liberado em todas as aulas
    };
  }
  if(key === 'c2' && typeof lessonsC2 !== 'undefined'){
    return {
      key: 'c2', label: 'C2', list: lessonsC2,
      emojis: (typeof LESSON_EMOJIS_C2 !== 'undefined') ? LESSON_EMOJIS_C2 : [],
      storageKey: 'idiolibre_progress_c2',
      alwaysLocked: true // C2 exige acesso liberado em todas as aulas
    };
  }
  return {
    key: 'a1', label: 'A1', list: lessons,
    emojis: (typeof LESSON_EMOJIS !== 'undefined') ? LESSON_EMOJIS : [],
    storageKey: 'idiolibre_progress',
    alwaysLocked: false
  };
}
/* Aula N vira só um hash na MESMA página (ex.: b1.html#aula-5) —
   não existe mais pages/lesson.html separado. */
function lessonHref(n){ return `#aula-${n}`; }
function lessonsHref(){ return '#'; }

/* Botões de "aula anterior / próxima aula" — usados tanto no topo
   quanto no fim do conteúdo da aula, pra não precisar rolar até
   embaixo pra trocar de aula. Usa `current`/`LEVEL` do escopo
   global (já setados por renderLessonView antes de qualquer
   função de render ser chamada). */
function navButtons(position){
  const advanced = isAdvancedLevel();
  const prevLabel = advanced ? '← Previous lesson' : '← Aula anterior';
  const nextLabel = advanced ? 'Next lesson →' : 'Próxima aula →';
  const cls = position === 'top' ? 'nav-btns nav-btns-top' : 'nav-btns';
  return `
    <div class="${cls}">
      <a class="nav-btn ${current === 0 ? 'disabled' : ''}" href="${lessonHref(current)}">${prevLabel}</a>
      <a class="nav-btn ${current === LEVEL.list.length - 1 ? 'disabled' : ''}" href="${lessonHref(current + 2)}">${nextLabel}</a>
    </div>
  `;
}

/* Todos os níveis do curso, um arquivo por nível. Todos já têm
   conteúdo (A1-C2). */
const ALL_LEVELS = [
  { key:'a1', label:'A1', href:'a1.html' },
  { key:'a2', label:'A2', href:'a2.html' },
  { key:'b1', label:'B1', href:'b1.html' },
  { key:'b2', label:'B2', href:'b2.html' },
  { key:'c1', label:'C1', href:'c1.html' },
  { key:'c2', label:'C2', href:'c2.html' },
];

/* Usado dentro de pages/*.html (a1.html, b1.html...).
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
          ? `<div class="header-actions"><a class="login-btn" href="pages/a1.html">Minhas aulas →</a></div>`
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
        <a class="cta-btn" href="pages/a1.html">Começar minha jornada →</a>
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
        <p class="whatsapp-note">Liberação manual rápida: mande seu e-mail pelo WhatsApp e receba acesso a todas as aulas por apenas 4,99€ ou 29,99R$.</p>
      </div>
    </div>
  `;

  if(locked) openLoginModal();
}

/* ================= PÁGINA: pages/a1.html (índice) ================= */
/* ================= PÁGINAS DE NÍVEL: pages/a1.html ... pages/c2.html =================
   Uma única <div id="level-root" data-level="..."> por página, que
   mostra o ÍNDICE das aulas ou o CONTEÚDO de uma aula, trocando
   pelo hash da URL (ex.: b1.html#aula-5) — sem navegar pra outra
   página. `renderLevelPage()` decide qual visão mostrar e é
   chamada de novo a cada `hashchange` (clique num cartão, clique
   em anterior/próxima, ou o botão voltar do navegador). */
function renderLevelPage(){
  const root = document.getElementById('level-root');
  if(!root) return;

  const hash = window.location.hash || '';
  const m = hash.match(/^#aula-(\d+)$/);
  if(m){
    renderLessonView(root, parseInt(m[1], 10));
  } else {
    renderListView(root);
  }
}

function renderListView(root){
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

  const subtitleMap = {
    a2: 'Continue de onde parou na A1: aqui você usa o que já sabe para viver situações reais em inglês.',
    b1: 'Everyday situations to describe, explain and solve problems in English — without relying on translation.',
    b2: 'Explain, discuss, negotiate and defend your ideas in English — real conversations, not just ready-made sentences.',
    c1: 'Refine, rephrase and argue with nuance — express exactly what you think, not just what you can manage to say.',
    c2: 'Precision, naturalness and flexibility: adapt your English to context, irony and the right register for every situation.',
  };
  const subtitle = subtitleMap[LEVEL.key]
    || (isIn ? 'Escolha uma aula para começar ou continuar de onde parou.' : 'As 3 primeiras aulas são livres. A partir da 4ª, faça login para desbloquear.');

  const titleMap = {
    a2: 'Inglês para viver, não para passar numa prova',
    b1: 'Describe, explain and solve',
    b2: 'Explain, discuss and negotiate',
    c1: 'Refine and express nuance',
    c2: 'Mastery: precision and naturalness',
  };

  const advanced = isAdvancedLevel();
  document.title = `${LEVEL.label} — IdioLibre`;
  root.innerHTML = `
    <div class="page-topbar">
      <a class="brand-link" href="../index.html"><img src="../images/logo.jpg" alt="Carimbo IdioLibre">IdioLibre</a>
      ${levelSwitcher()}
      <a class="logout-link" href="#" onclick="logout();return false;">Sair</a>
    </div>
    <main>
      <div class="course-header">
        <h1>${titleMap[LEVEL.key] || 'Do zero ao avançado'}</h1>
        <p class="sub">${subtitle}</p>
        <div class="course-progress">
          ${LEVEL.label} • ${progress.done.length}/${list.length} ${advanced ? 'lessons' : 'aulas'}
          <div class="track"><div class="fill" style="width:${pct}%"></div></div>
        </div>
      </div>
      <div class="lesson-index-grid">${cards}</div>
    </main>
    <footer>Progresso salvo automaticamente neste navegador</footer>
  `;
  window.scrollTo(0,0);
}

function renderLessonView(root, requested){
  const list = LEVEL.list;

  // Aulas 1 a FREE_LESSONS são livres (só no nível A1). Os outros
  // níveis exigem acesso liberado em todas as aulas.
  const needsLogin = LEVEL.alwaysLocked || requested > FREE_LESSONS;
  if(needsLogin && typeof guardPage === 'function' && !guardPage()){
    return; // guardPage() já redirecionou para o login
  }

  current = Math.min(Math.max(requested - 1, 0), list.length - 1);
  progress.lastLesson = current;
  persistProgress();

  const lesson = list[current];
  const advanced = isAdvancedLevel();
  document.title = advanced
    ? `Lesson ${lesson.label} — ${lesson.title} · IdioLibre`
    : `Aula ${lesson.label} — ${lesson.title} · IdioLibre`;

  root.innerHTML = `
    <div class="page-topbar">
      <a class="brand-link" href="../index.html"><img src="../images/logo.jpg" alt="Carimbo IdioLibre">IdioLibre</a>
      ${levelSwitcher()}
      <div style="display:flex;align-items:center;gap:10px;">
        <a class="back-link" href="${lessonsHref()}">${advanced ? '← All lessons' : '← Todas as aulas'}</a>
        <a class="logout-link" href="#" onclick="logout();return false;">Sair</a>
      </div>
    </div>
    <main>
      ${navButtons('top')}
      ${lesson.ready ? renderLessonMain(lesson) : renderLockedMain(lesson)}
    </main>
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
    ${navButtons()}
  `;
}

// Pronúncia simplificada embaixo de uma frase em inglês (exceto enunciados
// de atividades, que não têm esse campo). `inline` usa um espaço em vez de
// quebra de linha, para caber dentro de chips/pills.
function sentPron(pronArr, i, inline){
  const p = pronArr && pronArr[i];
  if(!p) return '';
  return inline
    ? ` <span class="sent-pron sent-pron-inline">🔊 ${p}</span>`
    : `<span class="sent-pron">🔊 ${p}</span>`;
}

/* A partir do B1, a aula inteira (título, seções, enunciados) fica em
   inglês — com tradução em português sempre disponível atrás do mesmo
   botão "Ver tradução" já usado no resto do site — em vez de ter tudo em
   português com só o vocabulário/diálogo em inglês. A1/A2 continuam como
   sempre (enunciados em português). `isAdvancedLevel()` decide isso a
   partir do LEVEL global (ou de um nível passado explicitamente); botões
   e mensagens de feedback (checkFale, toggleAnswer, toggleTranslation,
   copyPrompt) também usam essa função pra escolher o idioma certo. */
function isAdvancedLevel(levelKey){
  const key = levelKey || (LEVEL && LEVEL.key);
  return key === 'b1' || key === 'b2' || key === 'c1' || key === 'c2';
}

/* "Enunciado bilíngue": um campo de instrução/legenda que antes era só
   uma string em português (A1/A2 e o C1/C2 antigos) agora pode ser um
   objeto {en, pt} nos níveis avançados — o texto aparece em inglês, com
   a tradução escondida atrás do botão de sempre. Aceita as duas formas
   pra não quebrar nada que ainda for string simples. */
function bi(field){
  if(field == null) return '';
  if(typeof field === 'string') return field;
  return `${field.en || ''}${hiddenPt(field.pt)}`;
}

function renderLessonMain(lesson){
  if(lesson.flow === 'v4') return renderLessonMainV4(lesson);
  if(lesson.flow === 'c1') return renderLessonMainC1(lesson);
  if(lesson.flow === 'c2') return renderLessonMainC2(lesson);
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
                ${l.pron ? `<span class="line-pron">${l.pron}</span>` : ''}
                ${lesson.immersive
                  ? `<button class="translate-btn" onclick="toggleTranslation(this)">🇵🇹 Ver tradução</button><span class="pt line-pt">${l.pt}</span>`
                  : `<span class="pt">${l.pt}</span>`}
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
      ${lesson.pattern.explanation ? `<p style="margin:0 0 14px;color:var(--ink-soft);">${lesson.pattern.explanation}</p>` : ''}
      <div class="formula-box">${lesson.pattern.formula}</div>
      <div class="grammar-box">
        <div class="pattern-examples">${lesson.pattern.examples.map((e, i) => `<div>${e}${sentPron(lesson.pattern.examplesPron, i)}</div>`).join('')}</div>
      </div>
    </section>

    <section>
      <h2 class="section-title">4. ✂️ Simplifique</h2>
      ${lesson.simplify.map((f, i) => `<div class="formula-box">${f}${sentPron(lesson.simplifyPron, i)}</div>`).join('')}
    </section>

    <section>
      <h2 class="section-title">5. 🔁 Converse</h2>
      <div class="dialogue">${dialogueLines}</div>
    </section>

    <section>
      <h2 class="section-title">6. ➡️ Continue a conversa</h2>
      <div class="grammar-box">
        <p style="margin:0 0 4px;color:var(--ink-soft);">Expressões que mantêm a conversa viva:</p>
        <div class="connector-row">${lesson.connectors.map((c, i) => `<span class="connector-chip">${c}${sentPron(lesson.connectorsPron, i, true)}</span>`).join('')}</div>
      </div>
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

    ${navButtons()}
  `;
}

/* ================= NOVO FLUXO DE AULA (v4) =================
   Estrutura de 20+5 min sugerida pela Bambobee: Relembre → Veja →
   Descubra o molde → Simplifique e combine → Fale → Responda →
   Desafio → Diálogo completo → Fixe → prática com IA.
   Usada só nas aulas com `lesson.flow === 'v4'` (piloto: aulas 1 e 2);
   as demais aulas continuam no fluxo antigo (renderLessonMain acima). */
/* Textos fixos (títulos de seção, botões, frases de apoio) do template
   V4 — em português (A1/A2, como sempre) ou em inglês (B1/B2, a partir
   desta mudança). O conteúdo de cada aula (vocabulário, diálogo, molde,
   etc.) já é bilíngue nos dois casos; isso aqui é só a "moldura" ao redor. */
const V4_UI_PT = {
  verTraducao: '🇵🇹 Ver tradução', ouvirPronuncia: 'Ouvir pronúncia', ouvirFala: 'Ouvir fala',
  relembre: '♻️ Relembre', veja: '👀 Veja', molde: '🧩 Descubra o molde',
  simplifique: '✂️🔄 Simplifique e combine', traduza: '🗣️ Traduza', responda: '💬 Responda',
  desafio: '🎯 Desafio', dialogo: '🎭 Diálogo completo', conectores: '🔗 Conectores', fixe: '♻️ Fixe',
  relembrePrompt: 'Antes de começar, responda rapidinho (mentalmente ou em voz alta):',
  firstLesson: '🌱 Esta é a sua primeira aula — ainda não há nada para relembrar. Vamos começar!',
  combosLead: 'Algumas combinações com essas palavras:',
  suaResposta: '✍️ Sua resposta:', escrevaIngles: 'Escreva em inglês...', salvo: 'Salvo ✓', corrigir: '✅ Corrigir',
  conectoresLead: (b2) => `Expressões para ${b2 ? 'questionar e aprofundar' : 'desenvolver suas ideias'} sobre o tema de hoje:`,
  fixeBefore: '🌱 O que você já sabia', fixeToday: '✨ O que você aprendeu hoje', fixeAgain: '🔁 Use de novo na próxima conversa',
  conversar: '🗣️ Agora vamos conversar!', pratique: 'Pratique com uma IA',
  cole: 'Cole o prompt abaixo no ChatGPT, Gemini ou Claude e converse por 5 minutos.',
  copiar: '📋 Copiar prompt', aulaAnterior: '← Aula anterior', proximaAula: 'Próxima aula →',
};
const V4_UI_EN = {
  verTraducao: '🇵🇹 See translation', ouvirPronuncia: 'Listen', ouvirFala: 'Listen',
  relembre: '♻️ Recall', veja: '👀 Watch', molde: '🧩 Discover the pattern',
  simplifique: '✂️🔄 Simplify and combine', traduza: '🗣️ Translate', responda: '💬 Answer',
  desafio: '🎯 Challenge', dialogo: '🎭 Full dialogue', conectores: '🔗 Connectors', fixe: '♻️ Reuse',
  relembrePrompt: 'Before you start, answer quickly (in your head or out loud):',
  firstLesson: "🌱 This is your first lesson — nothing to recall yet. Let's get started!",
  combosLead: 'A few combinations using these words:',
  suaResposta: '✍️ Your answer:', escrevaIngles: 'Write in English...', salvo: 'Saved ✓', corrigir: '✅ Check',
  conectoresLead: (b2) => `Expressions to ${b2 ? 'question and dig deeper into' : 'develop your ideas about'} today's topic:`,
  fixeBefore: '🌱 What you already knew', fixeToday: '✨ What you learned today', fixeAgain: '🔁 Use it again in your next conversation',
  conversar: "🗣️ Now let's talk!", pratique: 'Practice with an AI',
  cole: 'Paste the prompt below into ChatGPT, Gemini or Claude and talk for 5 minutes.',
  copiar: '📋 Copy prompt', aulaAnterior: '← Previous lesson', proximaAula: 'Next lesson →',
};

function renderLessonMainV4(lesson){
  const T = isAdvancedLevel(lesson.level && lesson.level.toLowerCase()) ? V4_UI_EN : V4_UI_PT;
  const vocabCards = lesson.vocab.map(([word, pron, pt, emoji, isNew], i) => {
    const isBlue = i % 2 === 0;
    const sceneBg = isBlue ? 'linear-gradient(160deg,#EAF2FA 0%,#CFE1F1 100%)' : 'linear-gradient(160deg,#FBEFE6 0%,#F0D9C6 100%)';
    const blobA = isBlue ? 'rgba(47,102,144,0.25)' : 'rgba(181,84,42,0.22)';
    const blobB = isBlue ? 'rgba(181,84,42,0.18)' : 'rgba(47,102,144,0.16)';
    const ptBlock = isNew
      ? `<button class="translate-btn vocab-translate-btn" onclick="toggleTranslation(this)">${T.verTraducao}</button><div class="vocab-pt line-pt">${pt}</div>`
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
      <button class="play-btn" onclick="speak('${word.replace(/'/g, "\\'")}')" aria-label="${T.ouvirPronuncia}">🔊</button>
    </div>
  `;
  }).join('');

  const dialogueCompletoLines = lesson.dialogueCompleto.map(l => `
    <div class="line">
      <span class="speaker">${l.speaker}</span>
      <span class="line-text">${l.en}<span class="line-pron">${l.pron}</span>
        ${l.pt ? `<button class="translate-btn" onclick="toggleTranslation(this)">${T.verTraducao}</button><span class="line-pt">${l.pt}</span>` : ''}
      </span>
      <button class="play-btn" onclick="speak('${l.en.replace(/'/g, "\\'")}')" aria-label="${T.ouvirFala}">🔊</button>
    </div>
  `).join('');

  const coursePct = Math.round((progress.done.length / LEVEL.list.length) * 100);

  const relembreSection = lesson.relembre && lesson.relembre.length
    ? `<div class="grammar-box">
        <p style="margin:0 0 10px;color:var(--ink-soft);">${T.relembrePrompt}</p>
        <div class="pattern-examples">${lesson.relembre.map(r => `<div>${r.en}${r.pron ? `<span class="sent-pron">🔊 ${r.pron}</span>` : ''}${hiddenPt(r.pt)}</div>`).join('')}</div>
      </div>`
    : `<p class="first-lesson-note">${T.firstLesson}</p>`;

  // Em todos os níveis (A1, A2, B1, B2) o Fale/Desafio são exercícios de
  // tradução PT→EN com resposta exata, corrigidos automaticamente. A
  // frase-fonte (f.pt) É o exercício, então continua sempre em português
  // mesmo nos níveis "em inglês" (B1/B2) — só a moldura ao redor muda.
  function activityBlock(prompt, answerEn, answerPron, dataI){
    return `
    <div class="activity" data-answer="${escAttr(answerEn)}" data-pron="${escAttr(answerPron)}">
      <p class="q">${prompt}</p>
      <textarea placeholder="${T.escrevaIngles}" data-i="${dataI}" onblur="saveAnswer(this)"></textarea>
      <span class="save-note" id="save-note-${dataI}">${T.salvo}</span>
      <button class="reveal-btn" onclick="checkFale(this)">${T.corrigir}</button>
      <div class="answer"></div>
    </div>
  `;
  }

  const faleActivities = lesson.fale.map((f, i) => activityBlock(f.pt, f.en, f.pron, `fale-${i}`)).join('');

  // Seção extra "Conectores" — só existe em B1/B2 (lesson.connectorsThematic),
  // com expressões de acordo com o tema/foco do nível (B1 = desenvolver
  // ideias, B2 = questionar/aprofundar). Some silenciosamente nos outros níveis.
  const conectoresSection = lesson.connectorsThematic && lesson.connectorsThematic.length
    ? { title: T.conectores, body: `
      <p style="margin:0 0 14px;color:var(--ink-soft);">${T.conectoresLead(lesson.level === 'B2')}</p>
      <div class="responda-list">
        ${lesson.connectorsThematic.map(c => `
          <div class="responda-item">
            <span class="responda-en">${c.en}</span>
            ${c.pron ? `<span class="sent-pron">🔊 ${c.pron}</span>` : ''}
            ${hiddenPt(c.pt)}
          </div>
        `).join('')}
      </div>` }
    : null;

  const sections = [
    { title: T.relembre, body: relembreSection },
    { title: T.veja, body: `
      <div class="scene-box">
        <div class="scene-emoji">${lesson.scene.emoji}</div>
        <p class="scene-caption">${bi(lesson.scene.caption)}</p>
        <div class="scene-dialogue">
          ${lesson.scene.dialogue.map(l => `
            <div class="scene-line ${l.who}">
              <span class="who">${l.speaker}</span>
              <div class="scene-bubble">
                ${l.en}
                ${l.pron ? `<span class="line-pron">${l.pron}</span>` : ''}
                ${lesson.immersive
                  ? `<button class="translate-btn" onclick="toggleTranslation(this)">${T.verTraducao}</button><span class="pt line-pt">${l.pt}</span>`
                  : `<span class="pt">${l.pt}</span>`}
              </div>
            </div>
          `).join('')}
        </div>
      </div>` },
    { title: T.molde, body: `
      ${lesson.pattern.explanation ? `<p style="margin:0 0 14px;color:var(--ink-soft);">${lesson.pattern.explanation}</p>` : ''}
      <div class="formula-box">${lesson.pattern.formula}</div>
      <div class="grammar-box">
        <div class="pattern-examples">${lesson.pattern.examples.map((e, i) => `<div>${e}${sentPron(lesson.pattern.examplesPron, i)}${hiddenPt(lesson.pattern.examplesPt && lesson.pattern.examplesPt[i])}</div>`).join('')}</div>
      </div>` },
    { title: T.simplifique, body: `
      <div class="vocab-grid">${vocabCards}</div>
      <p style="margin:18px 0 10px;color:var(--ink-soft);">${T.combosLead}</p>
      <div class="reuse-box">
        ${lesson.combos.map(c => `<div class="combo-box">${c.en}${sentPron([c.pron], 0)}${hiddenPt(c.pt)}</div>`).join('')}
      </div>` },
    { title: T.traduza, body: faleActivities },
    { title: T.responda, body: `
      <div class="responda-list">
        ${lesson.responda.map(r => `
          <div class="responda-item">
            <span class="responda-en">${r.en}</span>
            ${r.pron ? `<span class="sent-pron">🔊 ${r.pron}</span>` : ''}
            ${hiddenPt(r.pt)}
          </div>
        `).join('')}
      </div>` },
    { title: T.desafio, body: `
      <div class="challenge-box">
        <p>${bi(lesson.desafio.situation)}</p>
      </div>
      <div style="margin-top:14px;">${activityBlock(T.suaResposta, lesson.desafio.en, lesson.desafio.pron, 'desafio')}</div>` },
    { title: T.dialogo, body: `<div class="dialogue">${dialogueCompletoLines}</div>` },
    conectoresSection,
    { title: T.fixe, body: `
      <div class="fixe-grid">
        ${lesson.reuse.before && lesson.reuse.before.length ? `
        <div class="fixe-col before">
          <h4>${T.fixeBefore}</h4>
          ${lesson.reuse.before.map(t => `<div class="fixe-item">${t}</div>`).join('')}
        </div>` : ''}
        <div class="fixe-col today">
          <h4>${T.fixeToday}</h4>
          ${lesson.reuse.today.map(t => `<div class="fixe-item">${t}</div>`).join('')}
        </div>
        <div class="fixe-col again">
          <h4>${T.fixeAgain}</h4>
          ${lesson.reuse.again.map(t => `<div class="fixe-item">${t}</div>`).join('')}
        </div>
      </div>` },
  ].filter(Boolean);

  const sectionsHtml = sections.map((s, i) => `
    <section>
      <h2 class="section-title">${i + 1}. ${s.title}</h2>
      ${s.body}
    </section>
  `).join('');

  return `
    <div class="progress-chip">${lesson.level || LEVEL.label} • ${coursePct}%</div>
    <p class="eyebrow">${lesson.eyebrow}</p>
    <h1 class="title">${lesson.title}</h1>
    <p class="intro">${bi(lesson.intro)}</p>

    ${sectionsHtml}

    <section>
      <h2 class="section-title">${T.conversar}</h2>
      <div class="ai-box">
        <h3>${T.pratique}</h3>
        <p class="desc">${T.cole}</p>
        <div class="ai-prompt-box" id="ai-prompt-box">${buildAiPrompt(lesson, LEVEL)}</div>
        <button class="copy-btn" id="copy-prompt-btn" onclick="copyPrompt(this)">${T.copiar}</button>
      </div>
    </section>

    ${navButtons()}
  `;
}

/* ================= BLOCO DE RESPOSTA ABERTA (C1/C2) =================
   Diferente do activityBlock() do v4 (tradução PT→EN com uma única
   resposta "certa", corrigida automaticamente), C1/C2 pedem expressão
   livre: o aluno escreve o que quiser e só depois revela uma ou mais
   respostas-modelo possíveis (sem marcar "errado"), porque nesse nível
   várias formulações podem estar igualmente corretas. Reaproveita o
   mesmo textarea/save/reveal-btn do resto do site (saveAnswer,
   toggleAnswer) — só a comparação automática (checkFale) não se aplica. */
function openActivityBlock(promptHtml, answers, dataI){
  const list = (answers || []).map(a => `
    <div class="open-answer">
      ${a.label ? `<span class="open-answer-label">${a.label}</span>` : ''}
      <div>${a.en}${sentPron([a.pron], 0)}</div>
      ${hiddenPt(a.pt)}
    </div>
  `).join('');
  return `
    <div class="activity open-activity">
      <p class="q">${promptHtml}</p>
      <textarea placeholder="Write your answer in English..." data-i="${dataI}" onblur="saveAnswer(this)"></textarea>
      <span class="save-note" id="save-note-${dataI}">Saved ✓</span>
      <button class="reveal-btn" onclick="toggleAnswer(this)">See example${(answers || []).length > 1 ? 's' : ''}</button>
      <div class="answer">${list}</div>
    </div>
  `;
}

/* ================= NÍVEL C1 — "refinar e expressar nuances" =================
   Não é mais "15 palavras + 1 estrutura + 4 respostas" — o C1 gira em
   torno de: 🎯 Tema → 💡 Ideia → 🧩 Estruturas → 🔗 Conectores →
   🗣️ Desenvolva → ⚖️ Considere o outro lado → 🔄 Reformule → 🎭 Discussão
   → 🎭 Diálogo completo → ♻️ Reutilize (+ prática com IA, automática). */
function renderLessonMainC1(lesson){
  const dialogueCompletoLines = lesson.dialogueCompleto.map(l => `
    <div class="line">
      <span class="speaker">${l.speaker}</span>
      <span class="line-text">${l.en}<span class="line-pron">${l.pron}</span>
        ${l.pt ? `<button class="translate-btn" onclick="toggleTranslation(this)">🇵🇹 See translation</button><span class="line-pt">${l.pt}</span>` : ''}
      </span>
      <button class="play-btn" onclick="speak('${l.en.replace(/'/g, "\\'")}')" aria-label="Listen">🔊</button>
    </div>
  `).join('');

  const coursePct = Math.round((progress.done.length / LEVEL.list.length) * 100);

  const relembreSection = lesson.relembre && lesson.relembre.length
    ? `<div class="grammar-box">
        <p style="margin:0 0 10px;color:var(--ink-soft);">Before you start, answer quickly (in your head or out loud):</p>
        <div class="pattern-examples">${lesson.relembre.map(r => `<div>${r.en}${r.pron ? `<span class="sent-pron">🔊 ${r.pron}</span>` : ''}${hiddenPt(r.pt)}</div>`).join('')}</div>
      </div>`
    : `<p class="first-lesson-note">🎯 This is your first C1 lesson — nothing to recall yet. Let's get started!</p>`;

  const structuresSection = lesson.structures.map(s => `
    <div class="structure-block">
      <h4>${s.category}</h4>
      <div class="formula-box">${s.formula}</div>
      <div class="grammar-box" style="margin-top:10px;">
        <div class="pattern-examples">${s.examples.map(e => `<div>${e.en}${sentPron([e.pron], 0)}${hiddenPt(e.pt)}</div>`).join('')}</div>
      </div>
    </div>
  `).join('');

  const sections = [
    { title: '♻️ Recall', body: relembreSection },
    { title: '💡 Idea', body: `
      <div class="scene-box">
        <div class="scene-emoji">${lesson.scene.emoji}</div>
        <p class="scene-caption">${bi(lesson.scene.caption)}</p>
        <div class="scene-dialogue">
          ${lesson.scene.dialogue.map(l => `
            <div class="scene-line ${l.who}">
              <span class="who">${l.speaker}</span>
              <div class="scene-bubble">
                ${l.en}
                ${l.pron ? `<span class="line-pron">${l.pron}</span>` : ''}
                <button class="translate-btn" onclick="toggleTranslation(this)">🇵🇹 See translation</button><span class="pt line-pt">${l.pt}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>` },
    { title: '🧩 Structures', body: structuresSection },
    { title: '🔗 Connectors', body: `
      <div class="responda-list">
        ${lesson.connectors.map(c => `
          <div class="responda-item">
            <span class="responda-en">${c.en}</span>
            ${c.pron ? `<span class="sent-pron">🔊 ${c.pron}</span>` : ''}
            ${hiddenPt(c.pt)}
          </div>
        `).join('')}
      </div>` },
    { title: '🗣️ Develop', body: openActivityBlock(bi(lesson.desenvolver.prompt), lesson.desenvolver.modelAnswers, 'desenvolver') },
    { title: '⚖️ Consider the other side', body: `
      <div class="quote-box">“${lesson.outroLado.opinion.en}”${sentPron([lesson.outroLado.opinion.pron], 0)}${hiddenPt(lesson.outroLado.opinion.pt)}</div>
      ${openActivityBlock(bi(lesson.outroLado.instruction), lesson.outroLado.modelAnswers, 'outrolado')}` },
    { title: '🔄 Rephrase', body: `
      <div class="quote-box">“${lesson.reformular.original.en}”${hiddenPt(lesson.reformular.original.pt)}</div>
      ${openActivityBlock(bi(lesson.reformular.instruction), lesson.reformular.modelAnswers, 'reformular')}` },
    { title: '🎭 Discussion', body: `
      <div class="challenge-box"><p>${bi(lesson.discussao.situation)}</p></div>
      <div style="margin-top:14px;">${openActivityBlock('🗣️ Your turn:', lesson.discussao.modelAnswers, 'discussao')}</div>` },
    { title: '🎭 Full dialogue', body: `<div class="dialogue">${dialogueCompletoLines}</div>` },
    { title: '♻️ Reuse', body: `
      <div class="fixe-grid">
        ${lesson.reuse.before && lesson.reuse.before.length ? `
        <div class="fixe-col before">
          <h4>🌱 What you already knew</h4>
          ${lesson.reuse.before.map(t => `<div class="fixe-item">${t}</div>`).join('')}
        </div>` : ''}
        <div class="fixe-col today">
          <h4>✨ What you learned today</h4>
          ${lesson.reuse.today.map(t => `<div class="fixe-item">${t}</div>`).join('')}
        </div>
        <div class="fixe-col again">
          <h4>🔁 Use it again in your next conversation</h4>
          ${lesson.reuse.again.map(t => `<div class="fixe-item">${t}</div>`).join('')}
        </div>
      </div>` },
  ].filter(Boolean);

  const sectionsHtml = sections.map((s, i) => `
    <section>
      <h2 class="section-title">${i + 1}. ${s.title}</h2>
      ${s.body}
    </section>
  `).join('');

  return `
    <div class="progress-chip">${lesson.level || LEVEL.label} • ${coursePct}%</div>
    <p class="eyebrow">${lesson.eyebrow}</p>
    <h1 class="title">${lesson.title}</h1>
    <p class="intro">${bi(lesson.intro)}</p>

    ${sectionsHtml}

    <section>
      <h2 class="section-title">🤖 Now let's talk!</h2>
      <div class="ai-box">
        <h3>Practice with an AI</h3>
        <p class="desc">Paste the prompt below into ChatGPT, Gemini or Claude and talk for 5 minutes.</p>
        <div class="ai-prompt-box" id="ai-prompt-box">${buildAiPrompt(lesson, LEVEL)}</div>
        <button class="copy-btn" id="copy-prompt-btn" onclick="copyPrompt(this)">📋 Copy prompt</button>
      </div>
    </section>

    ${navButtons()}
  `;
}

/* ================= NÍVEL C2 — "precisão e naturalidade" =================
   Segue as 12 etapas do briefing: VEJA → PERCEBA → EXPRESSE A MESMA
   IDEIA → REFORMULE → VOCABULÁRIO E COLLOCATIONS → CONECTORES →
   DESENVOLVA → CONSIDERE O OUTRO LADO → MISSÃO COMUNICATIVA →
   DIÁLOGO COMPLETO → DESAFIO FINAL → REUTILIZE (+ prática com IA). */
function renderLessonMainC2(lesson){
  const dialogueCompletoLines = lesson.dialogueCompleto.map(l => `
    <div class="line">
      <span class="speaker">${l.speaker}</span>
      <span class="line-text">${l.en}<span class="line-pron">${l.pron}</span>
        ${l.pt ? `<button class="translate-btn" onclick="toggleTranslation(this)">🇵🇹 See translation</button><span class="line-pt">${l.pt}</span>` : ''}
      </span>
      <button class="play-btn" onclick="speak('${l.en.replace(/'/g, "\\'")}')" aria-label="Listen">🔊</button>
    </div>
  `).join('');

  const coursePct = Math.round((progress.done.length / LEVEL.list.length) * 100);

  const relembreSection = lesson.relembre && lesson.relembre.length
    ? `<div class="grammar-box">
        <p style="margin:0 0 10px;color:var(--ink-soft);">Before you start, answer quickly (in your head or out loud):</p>
        <div class="pattern-examples">${lesson.relembre.map(r => `<div>${r.en}${r.pron ? `<span class="sent-pron">🔊 ${r.pron}</span>` : ''}${hiddenPt(r.pt)}</div>`).join('')}</div>
      </div>`
    : `<p class="first-lesson-note">🏆 This is your first C2 lesson — nothing to recall yet. Let's get started!</p>`;

  const collocList = lesson.vocab.map(v => `
    <div class="colloc-item">
      <span class="colloc-expr">${v.expr}</span>
      <div class="colloc-meaning">${bi(v.meaning)}</div>
      <div class="colloc-example">${v.exampleEn}${sentPron([v.examplePron], 0)}${hiddenPt(v.examplePt)}</div>
    </div>
  `).join('');

  const sections = [
    { title: '♻️ Recall', body: relembreSection },
    { title: '👀 Watch', body: `
      <div class="scene-box">
        <div class="scene-emoji">${lesson.scene.emoji}</div>
        <p class="scene-caption">${bi(lesson.scene.caption)}</p>
        <div class="scene-dialogue">
          ${lesson.scene.dialogue.map(l => `
            <div class="scene-line ${l.who}">
              <span class="who">${l.speaker}</span>
              <div class="scene-bubble">
                ${l.en}
                ${l.pron ? `<span class="line-pron">${l.pron}</span>` : ''}
                <button class="translate-btn" onclick="toggleTranslation(this)">🇵🇹 See translation</button><span class="pt line-pt">${l.pt}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>` },
    { title: '🧠 Notice', body: `<div class="grammar-box"><p style="margin:0;">${bi(lesson.perceba.text)}</p></div>` },
    { title: '🎯 Say it different ways', body: `
      <p style="margin:0 0 10px;color:var(--ink-soft);">${bi(lesson.registro.topic)}</p>
      <div class="register-variants">
        ${lesson.registro.variants.map(v => `
          <div class="register-variant">
            <span class="register-label">${v.label}</span>
            <div>${v.en}${sentPron([v.pron], 0)}${hiddenPt(v.pt)}</div>
          </div>
        `).join('')}
      </div>
      <div class="grammar-box"><p style="margin:0;">${bi(lesson.registro.note)}</p></div>` },
    { title: '🔄 Rephrase', body: `
      <div class="quote-box">“${lesson.reformular.original.en}”${hiddenPt(lesson.reformular.original.pt)}</div>
      ${openActivityBlock(bi(lesson.reformular.instruction), lesson.reformular.modelAnswers, 'reformular')}` },
    { title: '🧩 Vocabulary and collocations', body: `<div class="colloc-list">${collocList}</div>` },
    { title: '🔗 Connectors', body: `
      <div class="responda-list">
        ${lesson.connectors.map(c => `
          <div class="responda-item">
            <span class="responda-en">${c.en}</span>
            ${c.pron ? `<span class="sent-pron">🔊 ${c.pron}</span>` : ''}
            ${hiddenPt(c.pt)}
          </div>
        `).join('')}
      </div>` },
    { title: '🗣️ Develop', body: openActivityBlock(bi(lesson.desenvolva.prompt), lesson.desenvolva.modelAnswers, 'desenvolva') },
    { title: '⚖️ Consider the other side', body: `
      <div class="quote-box">“${lesson.outroLado.opinion.en}”${sentPron([lesson.outroLado.opinion.pron], 0)}${hiddenPt(lesson.outroLado.opinion.pt)}</div>
      ${openActivityBlock(bi(lesson.outroLado.instruction), lesson.outroLado.modelAnswers, 'outrolado')}` },
    { title: '🎭 Communicative mission', body: `
      <div class="challenge-box"><p>${bi(lesson.missao.situation)}</p></div>
      <div style="margin-top:14px;">${openActivityBlock('🗣️ Your turn:', lesson.missao.modelAnswers, 'missao')}</div>` },
    { title: '💬 Full dialogue', body: `<div class="dialogue">${dialogueCompletoLines}</div>` },
    { title: '🧠 Final challenge', body: `
      <div class="challenge-box"><p>${bi(lesson.desafioFinal.situation)}</p></div>
      <div style="margin-top:14px;">${openActivityBlock('✍️ Your answer:', lesson.desafioFinal.modelAnswers, 'desafiofinal')}</div>` },
    { title: '♻️ Reuse', body: `
      <div class="fixe-grid">
        ${lesson.reuse.before && lesson.reuse.before.length ? `
        <div class="fixe-col before">
          <h4>🌱 What you already knew</h4>
          ${lesson.reuse.before.map(t => `<div class="fixe-item">${t}</div>`).join('')}
        </div>` : ''}
        <div class="fixe-col today">
          <h4>✨ What you learned today</h4>
          ${lesson.reuse.today.map(t => `<div class="fixe-item">${t}</div>`).join('')}
        </div>
        <div class="fixe-col again">
          <h4>🔁 Use it again in your next conversation</h4>
          ${lesson.reuse.again.map(t => `<div class="fixe-item">${t}</div>`).join('')}
        </div>
      </div>` },
  ].filter(Boolean);

  const sectionsHtml = sections.map((s, i) => `
    <section>
      <h2 class="section-title">${i + 1}. ${s.title}</h2>
      ${s.body}
    </section>
  `).join('');

  return `
    <div class="progress-chip">${lesson.level || LEVEL.label} • ${coursePct}%</div>
    <p class="eyebrow">${lesson.eyebrow}</p>
    <h1 class="title">${lesson.title}</h1>
    <p class="intro">${bi(lesson.intro)}</p>

    ${sectionsHtml}

    <section>
      <h2 class="section-title">🤖 Now let's talk!</h2>
      <div class="ai-box">
        <h3>Practice with an AI</h3>
        <p class="desc">Paste the prompt below into ChatGPT, Gemini or Claude and talk for 5 minutes.</p>
        <div class="ai-prompt-box" id="ai-prompt-box">${buildAiPrompt(lesson, LEVEL)}</div>
        <button class="copy-btn" id="copy-prompt-btn" onclick="copyPrompt(this)">📋 Copy prompt</button>
      </div>
    </section>

    ${navButtons()}
  `;
}

/* ================= PROMPT DE PRÁTICA COM IA =================
   Gerado automaticamente a partir do conteúdo de cada aula (título,
   estruturas, vocabulário e o que já foi visto em aulas anteriores),
   para que o aluno sempre cole um prompt atualizado, sem precisar
   editar nada manualmente. */
function buildAiPrompt(lesson, level){
  const structures = [
    lesson.pattern && lesson.pattern.formula,
    ...((lesson.reuse && lesson.reuse.today) || lesson.simplify || [])
  ].filter(Boolean);
  const uniqueStructures = [...new Set(structures)];
  const estruturas = uniqueStructures.map(s => `- ${s}`).join('\n');

  return `Converse comigo em inglês por 5 minutos sobre o tema da aula.

- Faça uma pergunta simples por vez e espere minha resposta.
- Reaja naturalmente e use minhas respostas para continuar.
- Reutilize as estruturas desta aula e das anteriores.
- Se eu errar, corrija brevemente em português:

❌ Eu disse: …
✅ Correto: …

- Se eu travar, dê uma opção simples para eu continuar.
- Não transforme a conversa em aula de gramática.

No final, mostre:
🌟 3 coisas que fiz bem
🔧 Principais erros + correções
📌 2 estruturas para revisar

Tema: ${lesson.title}
Estruturas:
${estruturas}

Comece agora com uma pergunta simples.`;
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
  const shown = pt.classList.contains('show');
  btn.textContent = isAdvancedLevel()
    ? (shown ? '🇵🇹 Hide translation' : '🇵🇹 See translation')
    : (shown ? '🇵🇹 Esconder tradução' : '🇵🇹 Ver tradução');
}

function toggleAnswer(btn){
  const answer = btn.nextElementSibling;
  answer.classList.toggle('show');
  const shown = answer.classList.contains('show');
  btn.textContent = shown ? 'Hide answer' : `See example${btn.textContent.includes('examples') ? 's' : ''}`;
}

// Escapa aspas/quebras pra poder guardar uma frase inteira num atributo
// HTML (data-answer, data-pron) sem quebrar o markup.
function escAttr(str){
  return String(str || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

// Bloco de tradução oculta reutilizável (botão "Ver tradução" + texto
// escondido até o clique), pro conteúdo que hoje só aparece em inglês
// (Relembre, Combine, Responda). Usa o mesmo mecanismo de .line-pt
// já usado no resto da aula (toggleTranslation).
function hiddenPt(pt){
  if(!pt) return '';
  const label = isAdvancedLevel() ? '🇵🇹 See translation' : '🇵🇹 Ver tradução';
  return `<button class="translate-btn" onclick="toggleTranslation(this)">${label}</button><span class="line-pt">${pt}</span>`;
}

// Normaliza uma frase pra comparar (minúsculas, sem acento, sem
// pontuação, espaços colapsados) — assim "I'm from Brazil!" e
// "im from brazil" contam como a mesma resposta.
function normalizeAnswer(str){
  return String(str || '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Correção automática do 🗣️ Fale e do 🎯 Desafio: compara o que o
// aluno escreveu com a resposta-modelo guardada em data-answer e
// mostra um feedback, sempre revelando a frase certa embaixo.
function checkFale(btn){
  const box = btn.closest('.activity');
  if(!box) return;
  const ta = box.querySelector('textarea');
  const expected = box.getAttribute('data-answer') || '';
  const expectedPron = box.getAttribute('data-pron') || '';
  const userVal = ta ? ta.value : '';
  const answerBox = box.querySelector('.answer');
  if(!answerBox) return;

  const advanced = isAdvancedLevel();
  let feedback;
  if(!userVal.trim()){
    feedback = advanced
      ? `<p class="fale-feedback fale-empty">✏️ Write your sentence before checking it.</p>`
      : `<p class="fale-feedback fale-empty">✏️ Escreva sua frase antes de corrigir.</p>`;
  } else if(normalizeAnswer(userVal) === normalizeAnswer(expected)){
    feedback = advanced
      ? `<p class="fale-feedback fale-correct">✅ Well done! That's right.</p>`
      : `<p class="fale-feedback fale-correct">✅ Muito bem! Está certinho.</p>`;
  } else {
    feedback = advanced
      ? `<p class="fale-feedback fale-wrong">🔎 Almost there! Compare with the answer below:</p>`
      : `<p class="fale-feedback fale-wrong">🔎 Quase lá! Compare com a resposta abaixo:</p>`;
  }

  answerBox.innerHTML = `${feedback}<div class="fale-model">${expected}${expectedPron ? `<span class="sent-pron">🔊 ${expectedPron}</span>` : ''}</div>`;
  answerBox.classList.add('show');
  btn.textContent = advanced ? '🔁 Check again' : '🔁 Corrigir de novo';
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
  const advanced = isAdvancedLevel();
  const done = () => {
    btn.textContent = advanced ? '✅ Copied!' : '✅ Copiado!';
    btn.classList.add('copied');
    if (!progress.done.includes(current)) progress.done.push(current);
    persistProgress();
    const chip = document.querySelector('.progress-chip');
    if(chip){
      const pct = Math.round((progress.done.length / LEVEL.list.length) * 100);
      chip.textContent = `${LEVEL.label} • ${pct}%`;
    }
    setTimeout(() => { btn.textContent = advanced ? '📋 Copy prompt' : '📋 Copiar prompt'; btn.classList.remove('copied'); }, 2000);
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
   as duas em todas as páginas: só a que "bate" com o HTML roda.
   Nas páginas de nível (pages/*.html), `renderLevelPage()` decide
   índice-de-aulas vs. conteúdo-de-aula pelo hash da URL, e um
   listener de hashchange re-renderiza sempre que ele muda (clique
   num cartão, anterior/próxima, ou o botão voltar do navegador). */
document.addEventListener('DOMContentLoaded', () => {
  LEVEL = levelData();
  progress = loadProgress();
  renderWelcomePage();
  renderLevelPage();
});
window.addEventListener('hashchange', () => {
  if(document.getElementById('level-root')) renderLevelPage();
});
