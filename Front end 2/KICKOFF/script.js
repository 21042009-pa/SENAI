//ORIENTAÇÃO A OBJETO
class Prato{
    constructor(nome, preco, categoria){// atributos
        this.nome = nome //especificar o objeto
        this.preco = preco
        this.categoria = categoria
    }

    //métodos: fazer uma ação
    formatarPreco(){ //alterar o preco
        return `R$ ${this.preco.toFixed(2).replace(".",",")}`//ToFixed: casas dps da virgula  //replace: substituir o ponto para virgula
    }

    aplicarDesconto(percentual){
        this.preco = this.preco *(1 - percentual / 100)
    }
}

class Bebida{
    constructor(nome, preco, volume){// atributos
        this.nome = nome //especificar o objeto
        this.preco = preco
        this.volume = volume
    }

    //métodos: fazer uma ação
    descricao(){
        return `${this.nome} - ${this.volume}ml - R$ ${this.preco.toFixed(2).replace(".",",")}`//ToFixed: casas dps da virgula  //replace: substituir o ponto para virgula
    }

    formatarVolume(){
        this.volume = this.volume / 1000 
        this.volume.toFixed(2)
    }
}

const cardapio = [
    new Prato("Feijoada completa", 42.90, "Prato principal"),
    new Prato("Parmegiana de carne", 35.00, "Prato principal"),
    new Prato("Coxinha", 2.00, "Entrada"),
    new Prato("Cookies", 10.00, "Sobremesa"),
    new Prato ("Suco de Maracujá", 8.00, "Bebidas"),
]

const bebidas = [
    new Bebida("água", 2.00, 500),
    new Bebida("coca-cola", 5.00, 500),
]

//aparecer no console do inspecionar
console.log("=== Pratos Criados ===")
//forEach passar item a item 
cardapio.forEach(p => {
    console.log(`${p.nome} -> ${p.formatarPreco()}`)
})

console.log("Bebidas adicionadas")
bebidas.forEach(p =>{
    console.log(`${p.nome} -> ${p.descricao()}`)
})

//DOM
//vamos completar a section do main do html
const containerCardapio = document.querySelector("#cardapio")//pegando a section com id cardapio

function criarCardPrato(prato){
    const card = document.createElement("div") //nao tem no htlm, estamos criando um elemento e adicionando la, nesse cado é uma div
    card.className = 'card'//class para o card, ou seja, o nome ao qual vamos chamar para utilizar

    //adicionar coisas dentro desse card que criamos
    card.innerHTML = `
        <h3>${prato.nome}</h3>
        <span class="categoria"> ${prato.categoria}</span>
        <div class="preco">${prato.formatarPreco()}</div>

    `

    //ação para quando eu clicar nesse card dos pratos aparecer um popup
    card.addEventListener('click', () =>{
        //\n=pula linha
        alert(`🍽️ ${prato.nome} \n\n` +
            `Categoria: ${prato.categoria}\n`+
            `Preco: ${prato.formatarPreco()}`
        )
    })
    return card

}

function criarCardBebida(bebida){
    const card = document.createElement("div")
    card.className = 'card'

    card.innerHTML = `
        <h3>${bebida.nome}</h3>
        <span class="preco"> ${bebida.preco}</span>
        <div class="volume">${bebida.formatarVolume()}</div>

    `

    card.addEventListener('click', () =>{
        alert(`🍽️ ${bebida.nome} \n\n` +
            `Volume: ${bebida.formatarVolume()}\n`+
            `Preco: ${bebida.preco}`
        )
    })
    return card

}


//renderizar para realmente aparecer na tela
function renderizarCardapio(){
    containerCardapio.innerHTML = "" //deixamos o inerHTML vazio pois inicialmente ele estara vazio

    //comando para inserir card a card na página
    cardapio.forEach(prato => {
        const card = criarCardPrato(prato) //ir inserindo o card que ciramos um a um prato

        //inserir visualmente na tela
        containerCardapio.appendChild(card)//respeita os cards anteriores colocando na proxima posição disponivel
    })
}

function renderizarBebida(){
    containerCardapio.innerHTML = ""

    cardapio.forEach(prato => {
        const card = criarCardBebida(bebida)
        containerCardapio.appendChild(card)
    })
}

renderizarCardapio()

//aplicar desconto em algum prato
cardapio[0].aplicarDesconto(20) //o 0 é o numero do prato que eu quero aplicar desconto
renderizarCardapio()

renderizarBebida()