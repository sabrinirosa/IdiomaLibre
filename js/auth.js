/* ============================================================
   IDIOLIBRE — js/auth.js
   Acesso antecipado por e-mail, verificado num projeto Supabase.

   ⚠️ CONFIGURAÇÃO OBRIGATÓRIA
   Preencha SUPABASE_URL e SUPABASE_ANON_KEY abaixo com os dados
   do SEU projeto Supabase (Project Settings → API). Sem isso, o
   login não funciona — veja o passo a passo completo no README.md.
   ============================================================ */

const SUPABASE_URL = 'https://vcfrehrtvbcqpolthdfx.supabase.co';   // TODO: preencher
const SUPABASE_ANON_KEY = 'sb_publishable_RGiqr1oU6gHBH9UDgWdFeA_IprIZ8Qi';   // TODO: preencher

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

const UNLOCK_PRICE = '2,99€';

function whatsappUnlockLink(){
  const msg = `Olá! Quero liberar o acesso completo ao IdioLibre (${UNLOCK_PRICE}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function whatsappNotifyLink(level){
  const msg = `Olá! Quero ser avisado(a) quando o nível ${level} do IdioLibre estiver disponível.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ---------- estado local de acesso ---------- */
function getAccess(){
  try { return JSON.parse(localStorage.getItem(ACCESS_KEY) || 'null'); }
  catch(e){ return null; }
}
function setAccess(email){
  try { localStorage.setItem(ACCESS_KEY, JSON.stringify({ email, approved: true, ts: Date.now() })); }
  catch(e){ /* localStorage indisponível — segue sem persistir */ }
}
function hasAccess(){
  const a = getAccess();
  return !!(a && a.approved);
}
function basePath(){
  return location.pathname.includes('/pages/') ? '../' : '';
}
function logout(){
  try { localStorage.removeItem(ACCESS_KEY); } catch(e){}
  window.location.href = basePath() + 'index.html';
}

/* ---------- protege pages/lessons.html e pages/lesson.html ---------- */
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
      message: 'O login ainda não foi configurado. Preencha SUPABASE_URL e SUPABASE_ANON_KEY em js/auth.js (veja o README).'
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
    setTimeout(() => { window.location.href = basePath() + 'pages/lessons.html'; }, 900);
  }
}
