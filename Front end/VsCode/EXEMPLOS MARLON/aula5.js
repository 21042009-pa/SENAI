/* ==========================================================
   AULA 5: DOM - SELEÇÃO E MANIPULAÇÃO ESTÁTICA
   ========================================================== */


// 1️⃣ WINDOW E DOCUMENT

// Mostra a URL da página
console.log("URL da página (via window):", window.location.href);

// Mostra o título da aba
console.log("Título da aba (via document):", document.title);



// 2️⃣ PEGAR ELEMENTO PELO ID (jeito antigo)

// Pega o elemento com id "titulo-site"
const tituloPrincipal = document.getElementById('titulo-site');



// 3️⃣ QUERYSELECTOR (jeito moderno)

// 👉 Pega pelo ID (#)
const saudacao = document.querySelector('#boas-vindas');

// 👉 Pega pela classe (.)
const primeiroBotao = document.querySelector('.btn-pedido');


// 👉 Pega um elemento dentro de outro (hierarquia)
// h3 que está dentro do card de lasanha
const nomeLasanha = document.querySelector('#card-lasanha h3');


// 👉 Pega o primeiro elemento da lista
const cardDestaque = document.querySelector('.card:nth-of-type(1)');


// 👉 Pega pelo atributo
// imagem que tem alt = "Lasanha Tech"
const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]');



// 4️⃣ PEGAR VÁRIOS ELEMENTOS

// Pega TODOS os elementos com classe "card"
const todosOsCards = document.querySelectorAll('.card');

// Mostra quantos tem
console.log("Total de cards na vitrine:", todosOsCards.length);



// 5️⃣ MUDAR TEXTO

// Pega a hora atual
const horaAtual = new Date().getHours();

// Se for antes de 12 → "Bom dia"
// Senão → "Boa tarde"
saudacao.textContent = (horaAtual < 12) 
    ? "Bom dia! Veja nossas massas." 
    : "Boa tarde! Que tal uma pizza?";



// 6️⃣ MUDAR ATRIBUTOS (imagem, link, etc)

// Forma antiga
imgLasanha.setAttribute('title', 'Nossa famosa massa artesanal');

// Forma moderna (mais usada)
imgLasanha.src = "src/images/lasanha-destaque.jpg"; // muda imagem
imgLasanha.alt = "Foto da Lasanha Bolonhesa em Destaque"; // muda descrição



// 7️⃣ MUDAR ESTILO DIRETO (CSS pelo JS)

// Muda a cor do título
tituloPrincipal.style.color = "#e67e22"; 

// Coloca uma linha embaixo
tituloPrincipal.style.borderBottom = "3px solid #2c3e50";



// 8️⃣ MUDAR ESTILO COM CLASSE (melhor jeito)

// Adiciona a classe "em-promocao"
cardDestaque.classList.add('em-promocao');



// Mensagem final
console.log("Manipulação DOM Aula 5: Concluída com sucesso!");