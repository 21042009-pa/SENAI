/* ==========================================================
   AULA 06: EVENTOS DOM - TECHFOOD
   ========================================================== */


// 1️⃣ SAUDAÇÃO AUTOMÁTICA

// Pega o elemento da saudação
const saudacao = document.querySelector("#boas-vindas");

// Pega a hora atual
const hora = new Date().getHours();

// Se o elemento existir...
if (saudacao) {
    // Se for antes de 12 → bom dia
    // Senão → boa tarde
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}



// 2️⃣ CÁLCULO DE PREÇO AUTOMÁTICO

// Pega o input de quantidade
const inputQtd = document.querySelector("#qtd-lasanha");

// Pega onde mostra o preço
const precoTexto = document.querySelector("#preco-lasanha");

// Se os dois existirem...
if (inputQtd && precoTexto) {

    // Quando mudar o valor do input...
    inputQtd.addEventListener("input", () => {

        // Preço de 1 lasanha
        const precoUnitario = 45.0;

        // Calcula total (quantidade × preço)
        const total = Number(inputQtd.value) * precoUnitario;

        // Mostra o preço formatado (R$)
        precoTexto.textContent = `R$ ${total.toFixed(2)}`;

        // Se passar de 150 → vermelho
        // Senão → laranja
        precoTexto.style.color = total > 150 ? "#c0392b" : "#e67e22";
    });
}



// 3️⃣ BOTÕES DE PEDIDO

// Pega TODOS os botões de pedido
const botoesPedido = document.querySelectorAll(".btn-pedido");

// Para cada botão...
botoesPedido.forEach((botao) => {

    // Quando clicar...
    botao.addEventListener("click", (event) => {

        // Evita comportamento padrão (tipo recarregar página)
        event.preventDefault();

        // Pega o nome do prato (h3 dentro do card)
        const nomePrato = botao.parentElement.querySelector("h3").textContent;

        // Mostra mensagem de sucesso
        alert(`🥘 Sucesso! Seu pedido de "${nomePrato}" foi enviado para a cozinha.`);

        // Muda o botão depois do clique
        botao.textContent = "✓ Pedido Enviado";
        botao.style.backgroundColor = "#27ae60"; // verde
        botao.disabled = true; // desativa o botão
    });
});



// 4️⃣ EFEITO NOS CARDS (quando passa o mouse)

// Pega todos os cards
const cards = document.querySelectorAll(".card");

// Para cada card...
cards.forEach((card) => {

    // Quando o mouse entra
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)"; // sobe um pouco
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)"; // sombra
    });

    // Quando o mouse sai
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)"; // volta ao normal
        card.style.boxShadow = "none"; // tira sombra
    });
});