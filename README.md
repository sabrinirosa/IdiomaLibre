<div align="center">

<img src="images/logo.jpg" alt="IdioLibre" width="120" />

# IdioLibre

**Aprenda inglês do zero ao avançado — uma aula por vez.**

Curso A1 a B2 completo · 106 aulas · Prática guiada por IA · 100% gratuito e offline-first

</div>

---

## ✨ Sobre

O **IdioLibre** ensina inglês para falantes de português através de uma jornada
visual, com a identidade de um **passaporte de viagem vintage**: papel
envelhecido, carimbos de tinta e um mapa de rota.

Cada aula segue sempre a mesma estrutura pedagógica, para que o aluno
reconheça o padrão e ganhe confiança:

```
👀 VEJA  →  💬 FRASE  →  🧩 MOLDE  →  ✂️ SIMPLIFIQUE  →  🔄 TROQUE
   →  🗣️ FALE / ❓ PERGUNTE  →  🔁 CONVERSE  →  ➡️ CONTINUE
   →  ♻️ REUTILIZE  →  🎯 DESAFIO  →  🗣️ prática com IA externa
```

Não há chatbot nem API de IA embutida no site — cada aula **gera um prompt
automaticamente** a partir do próprio conteúdo da aula (tema, estruturas,
vocabulário e o que já foi visto antes), pronto pra colar no ChatGPT, Gemini,
Claude ou outra IA, e praticar a conversa por 5–10 minutos.

## 🌍 Níveis disponíveis

| Nível | Aulas | Acesso | Estilo |
|---|---|---|---|
| **A1** | 30 | 3 primeiras livres, resto com login | Introdutório, com tradução sempre visível |
| **A2** | 16 | Login obrigatório | Imersivo — só o novo fica com tradução escondida |
| **B1** | 30 | Login obrigatório | Imersivo |
| **B2** | 30 | Login obrigatório | Imersivo, conversas mais longas e argumentativas |

Troca de nível pelo parâmetro `?nivel=` na URL (`a2`, `b1`, `b2` — A1 é o
padrão): `pages/lessons.html?nivel=b2`, por exemplo. O progresso de cada
nível é salvo separadamente (`idiolibre_progress_b2`, etc.), então terminar
um nível não afeta os outros.

## 📁 Estrutura do projeto

```
IdioLibre/
│
├── index.html              → tela de boas-vindas (raiz do site)
├── README.md                 → este arquivo
├── CNAME
│
├── pages/
│   ├── lessons.html          → índice das aulas (todos os níveis, via ?nivel=)
│   ├── lesson.html           → conteúdo de uma aula (?aula=N&nivel=X)
│   ├── b2.html                → redireciona pra lessons.html?nivel=b2 (link antigo)
│   ├── c1.html                → "em breve" (nível ainda não criado)
│   └── c2.html                → "em breve" (nível ainda não criado)
│
├── css/
│   └── style.css              → identidade visual completa (carimbo de passaporte)
│
├── js/
│   ├── lessons-data.js        → conteúdo das 30 aulas do A1
│   ├── lessons-data-a2.js     → conteúdo das 16 aulas do A2 (imersivo)
│   ├── lessons-data-b1.js     → conteúdo das 30 aulas do B1 (imersivo, 6 mundos)
│   ├── lessons-data-b2.js     → conteúdo das 30 aulas do B2 (imersivo, 6 mundos)
│   ├── auth.js                 → login/acesso antecipado (Supabase + WhatsApp)
│   └── app.js                  → um único motor de renderização pra todos os
│                                   níveis: detecta o nível pelo `?nivel=` na
│                                   URL e renderiza a partir do array certo
│
└── images/
    └── logo.jpg                → carimbo/logo do IdioLibre
```

É um site **multi-página de verdade**: cada aula tem sua própria URL
(`pages/lesson.html?aula=5` ou `pages/lesson.html?aula=5&nivel=b2`), o botão
**Voltar** do navegador funciona normalmente, e qualquer aula pode ser
aberta direto por link ou favorito.

`js/app.js` é compartilhado por todas as páginas e por todos os níveis —
não existe um `app-a2.js` ou `app-b2.js` separado. Ele lê o nível pela URL
(`levelData()`), pega o array de aulas certo (`lessons`, `lessonsA2`,
`lessonsB1` ou `lessonsB2`) e usa **sempre a mesma estrutura de 10 passos**
pra renderizar — inclusive o prompt de prática com IA, que é **gerado
automaticamente** a partir do conteúdo da aula (`buildAiPrompt()`), não
escrito à mão em cada uma.

## 🧭 Navegação

```
index.html  →  pages/lessons.html[?nivel=X]  →  pages/lesson.html?aula=N[&nivel=X]
(boas-vindas)   (índice das aulas do nível)       (conteúdo da aula, com ← anterior / próxima →)
```

## 🧩 Como adicionar conteúdo

**Uma aula nova (nível A1, 31+):**
Em `js/lessons-data.js`, copie o objeto de uma aula existente (ex.
`LESSON_01`), ajuste o conteúdo e adicione-o ao array `lessons` no final do
arquivo. Ela aparece automaticamente no índice e fica acessível por
`pages/lesson.html?aula=31`.

**Um nível novo (A2, B1...):**
Crie `js/lessons-a2.js` seguindo o mesmo formato de objeto, e inclua o
`<script>` correspondente nas três páginas, **antes** de `js/app.js`:

```html
<script src="js/lessons-data.js"></script>
<script src="js/lessons-a2.js"></script>
<script src="js/app.js"></script>
```

## 🔐 Acesso antecipado (login por e-mail via Supabase)

O site inteiro fica protegido: só quem tem o e-mail liberado entra nas
aulas. Quem não está na lista ainda pode se cadastrar — o próprio login
já funciona como formulário de lista de espera.

**Como funciona:**
1. Na tela inicial, a pessoa clica em **🔐 Login** e digita o e-mail.
2. O site chama uma função no seu banco Supabase (`check_early_access`).
3. Se o e-mail já estiver **aprovado**, ela entra direto em `pages/lessons.html`.
4. Se o e-mail for novo ou ainda **pendente**, ele é salvo como pendente e a
   pessoa vê a mensagem de lista de espera.
5. O acesso liberado fica salvo no navegador (`localStorage`) — não precisa
   logar de novo a cada visita, até clicar em **Sair**.

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
4. Cole os dois valores no topo de `js/auth.js`:

```js
const SUPABASE_URL = 'https://seu-projeto.supabase.co';
const SUPABASE_ANON_KEY = 'sua-chave-anon-publica';
```

5. Para **liberar alguém**, abra a tabela `early_access` no painel do
   Supabase (**Table Editor**) e mude o `status` da pessoa de `pending`
   para `approved`. Da próxima vez que ela fizer login, entra direto.

> Enquanto `js/auth.js` não for configurado, o botão de login mostra um
> aviso pedindo para preencher esses dois valores — o resto do site
> funciona normalmente para testes locais.



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
