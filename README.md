<div align="center">

<img src="images/logo.jpg" alt="IdioLibre" width="120" />

# IdioLibre

**Aprenda inglês do zero ao avançado — uma aula por vez.**

Curso A1 a C2 completo · 166 aulas · Prática guiada por IA · 100% gratuito e offline-first

</div>

---

## ✨ Sobre

O **IdioLibre** ensina inglês para falantes de português através de uma jornada
visual, com a identidade de um **passaporte de viagem vintage**: papel
envelhecido, carimbos de tinta e um mapa de rota.

Cada aula segue sempre a mesma estrutura pedagógica, para que o aluno
reconheça o padrão e ganhe confiança:

```
♻️ RELEMBRE  →  👀 VEJA  →  🧩 MOLDE  →  ✂️🔄 SIMPLIFIQUE E COMBINE
   →  🗣️ TRADUZA (correção automática)  →  💬 RESPONDA  →  🎯 DESAFIO
   →  🎭 DIÁLOGO COMPLETO  →  ♻️ FIXE  →  🗣️ prática com IA externa
```

A1, A2, B1 e B2 usam essa estrutura (`lesson.flow === "v4"` em cada aula).
Em B1 e B2 tem uma 11ª etapa extra, **🔗 Conectores**, entre o Diálogo
completo e o Fixe — expressões de acordo com o foco de cada nível (B1 =
desenvolver ideias, B2 = questionar e aprofundar). No 🗣️ Traduza e no
🎯 Desafio, em A1/A2/B1/B2: o aluno traduz uma frase de PT para EN num
quadro de escrita, e a correção é automática (compara com a resposta,
ignorando acentuação/pontuação/maiúsculas).

**C1 e C2 mudam de estrutura** (`lesson.flow === "c1"` / `"c2"`), porque a
partir daí o objetivo deixa de ser "aprender conteúdo novo" e passa a ser
"refinar como expressar o que você já consegue dizer" — então os exercícios
de escrita não comparam com uma única resposta "certa": o aluno escreve
livremente e revela uma ou mais respostas-modelo possíveis.

```
C1 (refinar e expressar nuances):
♻️ Relembre → 💡 Ideia → 🧩 Estruturas → 🔗 Conectores → 🗣️ Desenvolva
   → ⚖️ Considere o outro lado → 🔄 Reformule → 🎭 Discussão
   → 🎭 Diálogo completo → ♻️ Reutilize → 🤖 prática com IA

C2 (domínio: precisão e naturalidade):
♻️ Relembre → 👀 Veja → 🧠 Perceba → 🎯 Expresse a mesma ideia (registros)
   → 🔄 Reformule → 🧩 Vocabulário e collocations → 🔗 Conectores
   → 🗣️ Desenvolva → ⚖️ Considere o outro lado → 🎭 Missão comunicativa
   → 💬 Diálogo completo → 🧠 Desafio final → ♻️ Reutilize → 🤖 prática com IA
```

Não há chatbot nem API de IA embutida no site — cada aula **gera um prompt
automaticamente** a partir do próprio conteúdo da aula (tema, estruturas,
vocabulário e o que já foi visto antes), pronto pra colar no ChatGPT, Gemini,
Claude ou outra IA, e praticar a conversa por 5–10 minutos.

## 🌍 Inglês a partir do B1 ("full immersion")

A partir do nível **B1**, a aula inteira fica em inglês — títulos de seção,
introdução, legendas de cena, instruções dos exercícios ("enunciados") — não
só o vocabulário e o diálogo, como acontecia antes. A1 e A2 continuam com os
enunciados em português (só o conteúdo novo em inglês fica com tradução
oculta), porque nesses níveis o aluno ainda está construindo o vocabulário
básico pra acompanhar instruções em inglês.

Três coisas continuam **exatamente iguais** em todos os níveis, mesmo em
B1-C2 imersivos:

- **Tradução em português sempre disponível, mas escondida** — atrás do
  mesmo botão "🇵🇹 See translation" / "🇵🇹 Ver tradução" já usado no resto do
  site (`hiddenPt()`). Clique pra revelar, clique de novo pra esconder.
- **Pronúncia simplificada** — o "português-ês" (ex. `ái iúzd tu liv...`)
  embaixo das frases em inglês continua do mesmo jeito, em todos os níveis.
- **A frase-fonte do 🗣️ Traduza/🎯 Desafio continua em português** — porque
  esse campo (`fale[].pt`) **é o próprio exercício**: o aluno traduz do
  português pro inglês, e a correção compara com a resposta certa. Traduzir
  esse campo pra inglês destruiria o exercício (o enunciado e a resposta
  esperada ficariam quase idênticos). Só a moldura ao redor (botões,
  feedback, "Escreva sua frase...") muda de idioma.

O que faz o site escolher inglês ou português nas partes fixas da interface
(botões, títulos de seção, mensagens de feedback) é `isAdvancedLevel()` em
`js/main.js` — `true` para b1/b2/c1/c2, `false` para a1/a2.

Chrome do site que **não** muda de idioma (compartilhado por todos os
níveis, incluindo A1/A2): o link "Sair" e "Voltar" do topo de página, o
rodapé "Progresso salvo automaticamente...", a página de boas-vindas
(`index.html`), o modal de login, e as instruções internas do prompt de IA
(`buildAiPrompt()`) — que orientam a IA externa a corrigir e dar feedback em
português, o que continua útil em qualquer nível.

## 🌍 Níveis disponíveis

| Nível | Aulas | Acesso | Estilo |
|---|---|---|---|
| **A1** | 30 | 3 primeiras livres, resto com login | Introdutório, com tradução sempre visível, enunciados em PT |
| **A2** | 16 | Login obrigatório | Imersivo — só o novo fica com tradução escondida, enunciados em PT |
| **B1** | 30 | Login obrigatório | 100% em inglês (enunciados inclusos) — desenvolver ideias |
| **B2** | 30 | Login obrigatório | 100% em inglês (enunciados inclusos) — questionar e aprofundar |
| **C1** | 30 | Login obrigatório | 100% em inglês — refinar e expressar nuances, sem correção automática de frase única |
| **C2** | 30 | Login obrigatório | 100% em inglês — domínio: precisão, naturalidade, registro e collocations |

Cada nível tem sua própria página (`pages/a1.html` ... `pages/c2.html`) — ver
estrutura do projeto abaixo. O progresso de cada nível é salvo separadamente
(`idiolibre_progress_c2`, etc.), então terminar um nível não afeta os outros.

## 📁 Estrutura do projeto

```
IdioLibre/
│
├── index.html               → tela de boas-vindas (raiz do site)
├── README.md                  → este arquivo
├── CNAME
│
├── pages/
│   ├── a1.html                → nível A1 (índice de aulas + conteúdo, na mesma página)
│   ├── a2.html                → nível A2
│   ├── b1.html                → nível B1
│   ├── b2.html                → nível B2
│   ├── c1.html                → nível C1
│   └── c2.html                → nível C2
│
├── css/
│   ├── style.css               → "chrome" do site: cores, boas-vindas, topo de
│   │                              página, troca de nível, modal de login —
│   │                              compartilhado por TODAS as páginas
│   └── lessons.css             → conteúdo das aulas: índice, cartões de
│                                  vocabulário, cena, exercícios, prática com
│                                  IA, blocos extras de C1/C2
│
├── js/
│   ├── lessons.js              → banco de dados de TODAS as aulas, todos os
│   │                              níveis (A1-C2) — um único arquivo
│   └── main.js                  → tudo o resto: login/acesso antecipado
│                                  (Supabase + WhatsApp) + motor de
│                                  renderização de todos os níveis
│
└── images/
    └── logo.jpg                 → carimbo/logo do IdioLibre
```

### Uma página por nível, com roteamento por hash

Cada `pages/{nivel}.html` é uma única página com uma `<div id="level-root"
data-level="b1">` que mostra **tanto o índice de aulas quanto o conteúdo de
uma aula específica** — a troca entre os dois é feita pelo hash da URL
(`pages/b1.html#aula-5`), **sem recarregar a página**:

- Sem hash (ou hash vazio) → mostra o índice de aulas (cartões).
- `#aula-N` → mostra o conteúdo da aula N.

Clicar num cartão de aula, no botão "← Aula anterior"/"Próxima aula →", ou
usar o botão **voltar do navegador**, tudo isso só muda o hash — e um
listener de `hashchange` em `js/main.js` (`renderLevelPage()`) re-renderiza
a página na hora. Um link direto pra `pages/b1.html#aula-5` também funciona
normalmente (abre já na aula 5).

`js/main.js` é compartilhado por todas as páginas e por todos os níveis —
não existe um `main-a2.js` ou `main-b2.js` separado. Ele lê o nível pelo
atributo `data-level` do `#level-root` (`levelData()`), pega o array de
aulas certo (`lessons`, `lessonsA2`, `lessonsB1`...) e usa a estrutura de
passos certa pra renderizar — A1-B2 usam `renderLessonMainV4()`, C1 usa
`renderLessonMainC1()` e C2 usa `renderLessonMainC2()` (schemas diferentes,
mas o mesmo `buildAiPrompt()` no final).

## 🧭 Navegação

```
index.html  →  pages/{nivel}.html  →  pages/{nivel}.html#aula-N
(boas-vindas)   (índice das aulas)     (conteúdo da aula, com ← anterior / próxima →)
```

## 🧩 Como adicionar conteúdo

**Uma aula nova (num nível já existente):**
Em `js/lessons.js`, ache o array do nível (`lessons`, `lessonsB1`...) e
copie o objeto de uma aula existente, ajuste o conteúdo e adicione-o ao
array. Ela aparece automaticamente no índice daquele nível e fica acessível
por `pages/{nivel}.html#aula-N`.

**Um nível novo:**
Adicione o array de aulas em `js/lessons.js` (mesmo formato de objeto dos
outros níveis), inclua o novo nível em `levelData()`/`ALL_LEVELS` em
`js/main.js`, e crie `pages/{nivel}.html` seguindo o mesmo modelo das
páginas existentes (uma `<div id="level-root" data-level="...">`, mais os
`<script>` de `js/lessons.js` e `js/main.js`).

## 🔐 Acesso antecipado (login por e-mail via Supabase)

O site inteiro fica protegido: só quem tem o e-mail liberado entra nas
aulas. Quem não está na lista ainda pode se cadastrar — o próprio login
já funciona como formulário de lista de espera.

**Como funciona:**
1. Na tela inicial, a pessoa clica em **🔐 Login** e digita o e-mail.
2. O site chama uma função no seu banco Supabase (`check_early_access`).
3. Se o e-mail já estiver **aprovado**, ela entra direto em `pages/a1.html`.
4. Se o e-mail for novo ou ainda **pendente**, ele é salvo como pendente e a
   pessoa vê a mensagem de lista de espera.
5. O acesso liberado fica salvo no navegador (`sessionStorage`) — dura
   enquanto a aba/navegador ficar aberto, até clicar em **Sair**.

### Configurar o seu projeto Supabase

1. Crie uma conta gratuita em [supabase.com](https://supabase.com) e um
   novo projeto.
2. Vá em **SQL Editor** e rode:

```sql
create table if not exists early_access (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  status text not null default 'pending', -- 'pending' ou 'approved'
  created_at timestamptz not null default now()
);

alter table early_access enable row level security;
-- Sem políticas de SELECT/INSERT diretas: o acesso só acontece pela
-- função abaixo, que roda com permissões elevadas (security definer).
-- Isso evita que a chave pública (anon) consiga listar ou editar a
-- tabela diretamente.

create or replace function check_early_access(p_email text)
returns text
language plpgsql
security definer
as $$
declare
  v_status text;
begin
  select status into v_status from early_access where email = lower(p_email);
  if v_status is null then
    insert into early_access(email, status) values (lower(p_email), 'pending');
    return 'pending';
  end if;
  return v_status;
end;
$$;

grant execute on function check_early_access(text) to anon;
```

3. Em **Project Settings → API**, copie a **Project URL** e a
   **anon public key**.
4. Cole os dois valores no topo de `js/main.js`:

```js
const SUPABASE_URL = 'https://seu-projeto.supabase.co';
const SUPABASE_ANON_KEY = 'sua-chave-anon-publica';
```

5. Para **liberar alguém**, abra a tabela `early_access` no painel do
   Supabase (**Table Editor**) e mude o `status` da pessoa de `pending`
   para `approved`. Da próxima vez que ela fizer login, entra direto.

> Enquanto essas duas constantes não forem configuradas em `js/main.js`, o
> botão de login mostra um aviso pedindo para preenchê-las — o resto do
> site funciona normalmente para testes locais.

O progresso (aulas concluídas, respostas escritas) é salvo com
`localStorage`, **direto no navegador da pessoa** — nada é enviado para
nenhum servidor.

## 🚀 Publicar no GitHub Pages

1. Suba esta pasta para um repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em *Branch*, selecione a branch principal (`main`) e a pasta `/ (root)`.
4. O site ficará disponível em `https://seu-usuario.github.io/IdioLibre/`.

Para usar um domínio próprio, adicione um arquivo `CNAME` na raiz do
projeto contendo o domínio (ex. `idiolibre.com`) e configure o DNS
conforme a [documentação do GitHub Pages](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

## 🛠️ Stack

HTML, CSS e JavaScript puro — **sem frameworks, sem build step**. As
requisições externas são: as fontes do Google Fonts (Fraunces + Inter), o
cliente `@supabase-js` via CDN, e o próprio Supabase (banco de dados do
login). Basta abrir `index.html` no navegador ou hospedar em qualquer
servidor estático — não precisa de servidor próprio nem backend customizado.

---

<div align="center">
<sub>🎓 Você não precisa saber tudo para começar a conversar.</sub>
</div>
