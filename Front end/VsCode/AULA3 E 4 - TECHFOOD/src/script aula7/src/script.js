/* ==========================================================
   AULA 06: EVENTOS DOM - TECHFOOD
   CORREÇÃO: Eventos aplicados para funcionar em todos os dispositivos
   ========================================================== */

// 1. SAUDAÇÃO DINÂMICA (Base Aula 5)
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

// 2 INTERATIVIDADE NOS CARDS (Feedback visual)
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});






/* ==========================================================
   AULA 07: EVENTOS DOM AVANÇADOS - TECHFOOD
   ========================================================== */


// 1. DELEGAÇÃO DE EVENTOS
// Seleciona o elemento <main> do HTML e guarda na variável "main"
const main = document.querySelector("main") // tag HTML: só coloca o nome da tag

// Adiciona um ouvinte de clique no <main> (event delegation)
main.addEventListener("click", (event) => { // main fica ouvindo o click...

    // Identifica exatamente qual elemento foi clicado
    const clicado = event.target // quem foi clicado...

    // Verifica se o elemento clicado tem a classe "btn-menos"
    if (clicado.classList.contains("btn-menos")) {

        // Pega o elemento pai do botão ("card" do prato)
        const prato = clicado.parentElement

        // Dentro do "prato", busca o elemento que mostra a quantidade
        const spanQtd = prato.querySelector('.qtd-valor')

        // Converte o texto atual para número
        const valorAtual = Number(spanQtd.textContent)

        // Diminui a quantidade em 1, mas garante que nunca fique menor que 1
        spanQtd.textContent = Math.max(1, valorAtual - 1)

        // Atualiza o preço do card com base na nova quantidade
        atualizarPrecoCard(prato)

        // Encerra a execução para não verificar o próximo if
        return
    }

    // Verifica se o elemento clicado tem a classe "btn-mais"
    if (clicado.classList.contains("btn-mais")) {

        // Pega o elemento pai do botão
        const prato = clicado.parentElement

        // Busca o elemento que mostra a quantidade
        const spanQtd = prato.querySelector('.qtd-valor')

        // Converte o valor atual para número e soma 1
        spanQtd.textContent = Number(spanQtd.textContent) + 1

        // Atualiza o preço do card com base na nova quantidade
        atualizarPrecoCard(prato)

        // Encerra a execução
        return
    }
    // ação do botão "Pedir Agora"
    if (clicado.classList.contains("btn-pedido")) {

    // Evita comportamento padrão (ex: submit de formulário ou link)
    event.preventDefault()

    // Pega o card (elemento pai do botão clicado)
    const card = clicado.parentElement

    // Captura o nome do prato (dentro de um <h3>)
    const nomePrato = card.querySelector("h3").textContent

    // Captura a quantidade atual exibida
    const quantidade = card.querySelector(".qtd-valor").textContent

    // Captura o preço exibido no card
    const precoExibido = card.querySelector(".preco").textContent

    // Efeito visual ao clicar no botão
    clicado.textContent = "Adicionado🥸🥳" // muda o texto
    clicado.style.backgroundColor = "#27ae60" // muda a cor de fundo (verde)

    
    clicado.disable = true

    // Após 1.5 segundos, volta ao estado original
    setTimeout(() => {
        clicado.textContent = "Pedir Agora" // restaura texto
        clicado.style.backgroundColor = "" // remove cor inline
        clicado.disable = false // reativa botão
    }, 1500)

    // Verifica se já existe o badge "adicionado"
    if (!card.querySelector(".badge-adicionado")) {

        // Insere um span no final do card com um aviso visual
        card.insertAdjacentHTML(
            "beforeend",
            "<span class='badge-adicionado'> 🥳🥸 no resumo </span>"
        )
    }

    // Chama função para adicionar o item ao resumo do pedido
    adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card)
}
})


// Função responsável por atualizar o preço do card conforme a quantidade
function atualizarPrecoCard(prato) {

    // Pega o card completo (pai do elemento "prato")
    const card = prato.parentElement

    // Seleciona o elemento onde o preço é exibido
    const spanPreco = card.querySelector('.preco')

    // Pega o preço unitário armazenado no atributo data-preco
    const precoUnitario = parseFloat(
        spanPreco.getAttribute('data-preco')
    )

    // Pega a quantidade atual e converte para número
    const quantidade = Number(
        prato.querySelector('.qtd-valor').textContent
    )

    // Calcula o total (preço unitário * quantidade)
    const total = precoUnitario * quantidade

    // Atualiza o texto do preço no formato brasileiro (R$ 0,00)
    spanPreco.textContent =
        "R$" + total.toFixed(2).replace('.', ',')

    // Muda a cor do preço dependendo do valor total
    // Se for maior que 150 → dourado
    // Caso contrário → laranja
    spanPreco.style.color =
        total > 150 ? "#c0892b" : "#e67e22"
}

// Função que adiciona um item no resumo do pedido
function adicionarItemAoResumo(nome, qtd, preco, cardOrigem){

    // Seleciona a seção do resumo no HTML (onde aparece o carrinho/resumo)
    const secaoResumo = document.querySelector("#secao-resumo")

    // Seleciona a lista onde os itens do resumo serão adicionados
    const listaResumo = document.querySelector("#lista-resumo")

    // Se não encontrar a seção ou a lista, interrompe a função
    if(! secaoResumo || !listaResumo) return

    // Torna a seção do resumo visível na tela
    secaoResumo.style.display = "block"

    // Cria um elemento <li> que será o item do resumo
    const itemLi = document.createElement("li")

    // Adiciona uma classe CSS ao <li> para estilização
    itemLi.classList.add("item-resumo")

    // Cria um elemento <span> para mostrar o texto do item
    const textoSpan = document.createElement("span")

    // Define o conteúdo do texto (quantidade + nome + preço)
    textoSpan.textContent = qtd + "x " + nome + " — " + preco

    // Cria um botão para remover o item do resumo
    const btnRemover = document.createElement("button")

    // Define o texto do botão como "X"
    btnRemover.textContent = "✕"

    // Adiciona uma classe ao botão para estilização
    btnRemover.classList.add("btn-remover")

    //Ação de remover
    // Quando o botão de remover é clicado
    btnRemover.addEventListener("click", () => {

    // Remove o item da lista (li)
        itemLi.remove()

    // Procura um badge (tipo um selo/indicador) dentro do card de origem
        const badge = cardOrigem.querySelector(".badge-adicionado")

    // Se existir o badge, remove ele
        if(badge) badge.remove()
    
    // Se não houver mais itens na lista de resumo
        if(listaResumo.children.length === 0){
        // Esconde a seção de resumo
            secaoResumo.style.display = "none"
        }
})

// Adiciona o texto dentro do item da lista
itemLi.appendChild(textoSpan)

// Adiciona o botão de remover dentro do item
itemLi.appendChild(btnRemover)

// Adiciona o item completo na lista de resumo
listaResumo.appendChild(itemLi)
}

// Seleciona o botão de limpar
const bntLimpar = document.querySelector("#btn-limpar")

// Verifica se o botão existe na página
if(bntLimpar){

    // Adiciona um evento de clique no botão
    bntLimpar.addEventListener("click", () =>{

        // Seleciona a lista de resumo e a seção de resumo
        const listaResumo = document.querySelector("#lista-resumo")
        const secaoResumo = document.querySelector("#secao-resumo")

        // Remove todos os badges (indicadores visuais)
        document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove())

        // Enquanto existir algum item na lista
        while(listaResumo.firstElementChild){
            // Remove o primeiro item (até esvaziar tudo)
            listaResumo.firstElementChild.remove()
        }

        // Esconde a seção de resumo
        secaoResumo.style.display = "none"
    })
}





