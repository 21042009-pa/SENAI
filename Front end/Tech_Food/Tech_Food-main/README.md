# 🍝 TechFood — Sabor & Saber

> Projeto integrador — Desenvolvimento de Sistemas | SENAI Ítalo Bologna, Itu/SP

---

## 📌 Sobre o projeto

Cardápio digital do restaurante **Sabor & Saber**, desenvolvido com HTML5, CSS3 e JavaScript puro (sem frameworks).

O repositório contém o projeto **completo e planejado**, com funcionalidades futuras já escritas e comentadas. A cada nova aula, um bloco é descomentado e a aplicação ganha vida.

---

## 🗂️ Estrutura de arquivos

```
techfood/
│
├── index.html          ← [✔ ATIVO] Cardápio — entrega atual
├── cadastro.html       ← [🔒 PRÓXIMA ENTREGA] Cadastro de pratos
├── pedidos.html        ← [🔒 DEPOIS] Meus pedidos
│
└── src/
    ├── images/                 ← Imagens dos pratos (.png)
    ├── scripts/
    │   ├── global.js           ← [✔ ATIVO] Saudação, footer, menu mobile
    │   ├── main.js             ← [✔ ATIVO] Lógica do cardápio
    │   ├── cadastro.js         ← [🔒 PRÓXIMA ENTREGA] Formulário e tabela
    │   └── pedidos.js          ← [🔒 DEPOIS] Lista de pedidos
    │
    └── styles/
        ├── global.css          ← [✔ ATIVO] Header, footer, menu, reset
        ├── style.css           ← [✔ ATIVO] Cards, vitrine, botões
        ├── cadastro.css        ← [🔒 PRÓXIMA ENTREGA] Formulário e tabela
        └── pedidos.css         ← [🔒 DEPOIS] Lista de pedidos
```

---

## 🚀 Roadmap de entregas

| Entrega | O que fazer | Arquivo |
|---|---|---|
| ✔ **Atual** | Cardápio funcional, subtotal, hover, botão pedir | `main.js` |
| 🔒 **Próxima** | Cadastro de pratos com validação | `cadastro.js` — descomentar bloco 1 |
| 🔒 **Depois** | Edição e exclusão de pratos | `cadastro.js` — descomentar bloco 2 |
| 🔒 **Depois** | Pedidos com localStorage | `main.js` e `pedidos.js` — descomentar |
| 🔒 **Futuro** | Integração com back-end (API REST) | Substituir localStorage por `fetch()` |

---

## 🎨 Identidade visual

| Variável | Cor | Uso |
|---|---|---|
| `--cor-primaria` | `#2c3e50` | Header, footer, títulos |
| `--cor-destaque` | `#e67e22` | Botões, preços, destaques |
| `--cor-amarelo` | `#f1c40f` | Links do menu |

---

## ▶️ Como executar

1. Clone o repositório
2. Adicione as imagens dos pratos em `src/images/`
3. Abra `index.html` no navegador (recomendado: **Live Server** no VS Code)

> Não requer servidor, instalação ou dependências.

---

*SENAI Ítalo Bologna — Itu/SP | TechFood Soluções Digitais © 2026*
