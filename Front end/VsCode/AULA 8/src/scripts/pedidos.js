document.addEventListener("DOMContentLoaded",function(){
    renderizarPedidos()
})

function renderizarPedidos(){
    const lista = document.querySelector("#lista-pedidos")
    const spanTotal = document.querySelector("#valor-total")
    const spanResumo = document.querySelector("#valor-total-resumo")
    const spanContador = document.querySelector("#contador-itens")

    // Se não encontrar a lista, interrompe a função
    if(!lista) return

    const pedidos =JSON.parse(localStorage.getItem("techfood_pedidos")||"[]")

    if(pedidos.length === 0){
        lista.innerHTML = "<li class='pedido-vazio'> Nenhum pedido ainda. Acesse o" + "<a href='index.html> Cardápio </a> Para adicionar! 😋 </li>"

        if(spanTotal) spanTotal.textContent = "R$0,00"
        if(spanResumo) spanResumo.textContent = "R$0,00"
        if(spanContador)spanContador = "0 itens"
    }

    lista.innerHTML =""
    let total = 0
    const textoSpan = document.createElement("span")
    textoSpan.innerHTML = 


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
