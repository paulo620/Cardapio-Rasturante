# ESPECIFICAÇÃO TÉCNICA E REQUISITOS DE DESENVOLVIMENTO - RESTAURANTE REACT

Este documento serve como a **Especificação Técnica Geral (`spac-geral.md`)** para orientar o desenvolvimento completo do site de cardápio interativo para restaurante utilizando a biblioteca **React**.

---

## 1. VISÃO GERAL E OBJETIVOS DO PROJETO

- **Tecnologia Principal**: React (Página Única / SPA).
- **Objetivo**: Disponibilizar um cardápio digital responsivo e intuitivo, onde clientes consultem pratos por nome, categoria ou descrição.
- **Acesso via QR Code**: O site deve ser acessível via dispositivo móvel através de um QR Code disponibilizado nas mesas/restaurante.
- **Estrutura Visual**: Página única dividida em 4 componentes principais:
  1. `Home`
  2. `Categorias`
  3. `CampoDeBusca`
  4. `Cards` / `Card`

---

## 2. ARQUITETURA E SEPARAÇÃO EM CAMADAS

O projeto deve seguir estritamente o padrão de separação em camadas:

```
src/
├── assets/                  # Estilos globais e fontes
│   └── styles/
│       ├── global.css       # Estilos globais e importação da fonte Poppins
│       └── page.module.css  # Estilos da Home e importação da fonte Dancing Script
├── components/              # Camada Visual (Componentes React)
│   ├── Categorias/
│   │   ├── index.jsx
│   │   └── Categorias.module.css
│   ├── CampoDeBusca/
│   │   ├── index.jsx
│   │   └── CampoDeBusca.module.css
│   └── Cards/
│       ├── index.jsx        # Renderiza a lista de cards
│       ├── Card/
│       │   ├── index.jsx    # Componente individual de Card
│       │   └── Card.module.css
│       └── Cards.module.css
├── servicos/                # Camada de Serviço (Regras de Negócio)
│   └── retornoProdutos.js   # Funções de busca, filtragem e dados estáticos
└── public/                  # Imagens estáticas e recursos do QR Code
    ├── banner.png
    ├── entrada.png
    ├── massa.png
    ├── carne.png
    ├── bebida.png
    ├── salada.png
    ├── sobremesa.png
    ├── me.png (lupa)
    └── pratos/              # Imagens dos pratos do cardápio
```

### 2.1. Camada de Serviço (`servicos/retornoProdutos.js`)
- **Dados Estáticos**: Coleção estática contendo a lista completa de pratos (propriedades: `id`, `nome`, `categoria`, `descricao`, `preco`, `imagem`).
- **Função `filtrarProdutos(categoria)`**: Recebe a categoria desejada e utiliza `Array.filter()` para retornar apenas os pratos correspondentes.
- **Função `buscarProduto(textoDigitado)`**: 
  - Recebe a string pesquisada.
  - Converte para minúsculas (`toLowerCase()`).
  - Utiliza `Array.filter()` com `String.includes()` para verificar match parcial no `nome` ou na `descricao` do prato.

### 2.2. Camada Visual (`components/`)
- Responsável por receber props, gerenciar estados de interface (`useState`) e renderizar a estrutura HTML sem conter regras puras de filtro na view.

---

## 3. ESTRUTURA E HIERARQUIA DOS COMPONENTES

### 3.1. Componente `Home` (`<main>` e `<header>`)
```html
<header>
  <!-- Banner da página -->
  <img src="banner.png" alt="Banner Restaurante" />
  <div class="header-container">
    <h1>RESTAURANTE</h1>
    <p>De pratos tradicionais a criações contemporâneas, uma experiência gastronômica inesquecível.</p>
  </div>
</header>

<main>
  <Categorias />
  <CampoDeBusca />
  <section class="secao-cardapio">
    <h2>Cardápio</h2>
    <div class="container-cards">
      <Cards />
    </div>
  </section>
</main>
```

### 3.2. Componente `Categorias`
```html
<section class="secao-categorias">
  <button class="btn-categoria {ativo}">
    <img src="entrada.png" alt="Entradas" />
    <span>Entradas</span>
  </button>
  <button class="btn-categoria">
    <img src="massa.png" alt="Massas" />
    <span>Massas</span>
  </button>
  <button class="btn-categoria">
    <img src="carne.png" alt="Carnes" />
    <span>Carnes</span>
  </button>
  <button class="btn-categoria">
    <img src="bebida.png" alt="Bebidas" />
    <span>Bebidas</span>
  </button>
  <button class="btn-categoria">
    <img src="salada.png" alt="Saladas" />
    <span>Saladas</span>
  </button>
  <button class="btn-categoria">
    <img src="sobremesa.png" alt="Sobremesas" />
    <span>Sobremesas</span>
  </button>
</section>
```

### 3.3. Componente `CampoDeBusca`
```html
<div class="container-busca">
  <img src="lupa.png" alt="Ícone de busca" />
  <input 
    type="text" 
    placeholder="Pesquise aqui um dos pratos do nosso cardápio" 
    value={textoBusca}
    onChange={handleBusca}
  />
</div>
```

### 3.4. Componente `Cards` / `Card`
```html
<div class="card-prato">
  <figure>
    <img src={prato.imagem} alt={prato.nome} />
  </figure>
  <div class="card-conteudo">
    <div class="card-info">
      <h3>{prato.nome}</h3>
      <small>{prato.categoria}</small>
      <p>{prato.descricao}</p>
    </div>
    <div class="card-preco">
      <span>{prato.precoFormatted}</span>
    </div>
  </div>
</div>
```

---

## 4. REGRAS DE NEGÓCIO E COMPORTAMENTOS (REQUISITOS FUNCIONAIS)

1. **Estado Inicial**:
   - Ao carregar a aplicação, a lista deve exibir apenas os pratos da categoria **"Entradas"** (ou `"entradas"`).
   - O botão da categoria "Entradas" deve vir marcado como **aceso / selecionado** por padrão.

2. **Seleção de Categorias & Efeito "Aceso"**:
   - Cada clique num botão de categoria deve:
     1. Atualizar o estado da categoria selecionada (`botaoClicado`).
     2. Disparar a filtragem dos dados através da camada de serviço (`filtrarProdutos`).
     3. Limpar o campo de texto de busca (ou resetar o filtro por texto).
     4. Alterar visualmente a cor de fundo do botão ativo (adicionando a classe CSS de destaque).

3. **Busca Dinâmica por Texto**:
   - **Gatilho de Busca (3º Caractere)**: A filtragem por busca só deve ocorrer se `textoDigitado.length >= 3`.
   - **Busca Insensível a Maiúsculas/Minúsculas**: Deve converter a busca e os campos `nome` e `descricao` usando `.toLowerCase()`.
   - **Busca Parcial**: Deve usar `.includes()` para aceitar sub-strings em qualquer parte do texto.
   - **Comportamento ao Limpar o Campo**: Se o usuário apagar totalmente o texto (quando `textoDigitado.length === 0`), a lista de pratos **NÃO** deve resetar automaticamente para a lista completa. A lista mantém a exibição atual até que o usuário clique em uma categoria ou digite uma nova busca com $\ge 3$ caracteres.

4. **Imagens Estáticas Obrigatórias**:
   - Banner do cabeçalho.
   - 6 Ícones para os botões de categoria (Entradas, Massas, Carnes, Bebidas, Saladas, Sobremesas).
   - Ícone de Lupa (`lupa.png` / `me.png`) para o input de busca.
   - Imagens dos pratos servidos localizadas na pasta `public/`.

5. **Disponibilização por QR Code**:
   - O projeto incluirá um QR Code funcional gerado a partir da URL da aplicação para simulação de acesso mobile no restaurante.

---

## 5. DESIGN SYSTEM E ESPECIFICAÇÕES CSS

### 5.1. Tipografia & Fontes (Google Fonts)
- **Fonte Padrão do Projeto**: `Poppins` (Sans-serif)
  - Importada diretamente no arquivo CSS global (`global.css`):
    ```css
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    body {
      font-family: 'Poppins', sans-serif;
    }
    ```
- **Fonte Secundária / Decorativa**: `Dancing Script` (Cursive)
  - Importada diretamente no CSS da página/Home (`page.module.css`):
    ```css
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');
    .paragrafosDecorativos, .titulosDecorativos {
      font-family: 'Dancing Script', cursive;
    }
    ```
  - Usada exclusivamente no **parágrafo `<p>` do header** e em **subtítulos decorativos** do componente `Home`.

### 5.2. Efeitos Visuais
- **Sombra no Título Principal (`<h1>`)**:
  - Utilizar a propriedade CSS `text-shadow` para dar destaque e profundidade ao título da Home.
- **No desenvolvimento do projeto deve ser utilizada a seguinte -  paleta de cores:
  #daa520
  #f3f3f3
  #000000
  #fff
### 5.3. Dimensões do Layout & Grid

#### **Header (`<header>`)**
- Largura máxima do container interno: `1024px` (centralizado com `margin: 0 auto`).
- Largura máxima do container de texto dentro do header: `50%`.
- Tamanho da fonte do `<h1>`: `46px`.
- Tamanho da fonte do `<p>`: `32px` (`Dancing Script`).

#### **Conteúdo Principal (`<main>`)**
- Espaçamento interno (`padding`): `50px 20px`.
- Espaçamento vertical entre elementos filhos (`gap`): `30px`.
- Largura máxima da seção principal (`<section>`): `1024px`.
- Espaçamento interno dos itens da seção (`gap`): `10px`.
- Container que recebe os cards (`.container-cards`):
  - `padding`: `20px`.
  - `gap` entre os cards: `40px`.

#### **Componente Categorias**
- Largura máxima: `1024px`.
- `gap` entre os elementos da seção: `10px`.
- `gap` entre os botões: `10px`.
- Dimensões do `<button>`:
  - Largura fixa: `150px`.
  - `padding`: `10px 0px`.
  - `gap` interno (entre imagem e span): `10px`.

#### **Componente CampoDeBusca**
- Largura do container: `1024px` (com `max-width: 100%` para responsividade).
- Imagem da Lupa: largura de `30px`.
- Input de Busca: altura interna/fonte correspondente (`font-size: 14px` / `height: 40px` / `padding: 10px`).

#### **Componente Card**
- Largura inicial (`width`): `250px`.
- Crescimento flexível (`flex-grow: 1`): Os cards devem crescer para preencher a largura total da linha quando necessário.
- Subcontainer da Imagem (`<figure>`): altura fixa de `250px`. A imagem deve utilizar `object-fit: cover` e ocupar 100% de largura e altura.
- Subcontainer de Texto (`.card-conteudo`):
  - Altura: `150px`.
  - `padding`: `10px`.
  - `gap` interno entre elementos de texto: `5px`.

---

## 6. RESPONSIVIDADE E BREAKPOINTS

A aplicação deve se adaptar perfeitamente às seguintes resoluções de tela:

| Resolução | Ajustes Necessários |
| :--- | :--- |
| **1920px (Desktop Wide)** | Centralização em 1024px com margens fluidas, exibição dos cards em grid/flex equilibrado (3 a 4 colunas). |
| **1024px (Tablet Landcape / Laptop)** | Layout 100% preenchido com padding de segurança nas bordas. |
| **768px (Tablet Portrait)** | Reorganização das categorias em wrap/scroll horizontal, container do header expandido para 80%-90%. |
| **375px (Mobile SmartPhone)** | Container do header com 100% de largura, botões de categoria ajustados em grid de 2 a 3 colunas, cards ocupando 100% da largura útil. |

---

## 7. MATRIZ DE TESTES E VERIFICAÇÃO

| ID | Cenário de Teste | Comportamento Esperado |
| :--- | :--- | :--- |
| **TC-01** | Carregamento inicial da página | Renderiza pratos da categoria "Entradas" e botão "Entradas" em estado aceso. |
| **TC-02** | Clique no botão "Massas" | Filtra e mostra apenas pratos da categoria Massas; botão "Massas" fica aceso e outros apagam. |
| **TC-03** | Digitar 2 caracteres no campo de busca ("sp") | A lista não sofre alteração (aguarda o 3º caractere). |
| **TC-04** | Digitar 3 ou mais caracteres ("spa") | Filtra pratos contendo "spa" no nome ou na descrição (ex: Espaguete), ignorando maiúsculas/minúsculas. |
| **TC-05** | Apagar todo o texto da busca (Backspace total) | A lista exibida permanece inalterada até novo clique de categoria ou nova busca $\ge 3$ letras. |
| **TC-06** | Teste de responsividade em 375px | O layout se ajusta sem barra de rolagem horizontal quebrada; cards ocupam a largura disponível. |
Paleta de cores



---
