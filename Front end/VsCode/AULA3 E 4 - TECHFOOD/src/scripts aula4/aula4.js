class Prato{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    exibirComoMoeda(total){
        return 'R$' + total.toFixed(2)
    }


}

const lasanha = new Prato('lasanha da mais mais', 30.00)


alert('Seja bem vindo ao restaurant Sabor e Saber!') /*mensagem que aparece na tela quando abre*/
console.log('teste')

const cliente = prompt('Bem vindo cliente, se você quer um atendimento personalizador, digite seu nome')/*mensagem que aparece na tela, mas com intereção */

let nomeFormatado = cliente.trim().toUpperCase() /*usar o nome do cliente */
alert('Bem vindo ' + nomeFormatado)

const horaAgora = new Date() 

const hora = horaAgora.getHours()

if(hora < 11){
    alert(`Bom dia, ${nomeFormatado}, aproveite o café da manhã`)
    console.log('antes das onze')
}else{
    alert(`Boa tarde, ${nomeFormatado}, aproveite o almoço`)
    console.log('depois das onze')
}

const querPrato = confirm(`Fala meu querido ${nomeFormatado}, quer a lasainha da mais mais chefe Paula?`)
if(querPrato){
    let quantidade = prompt('Lasanha ta delícia, quer quantas?')
    let total = lasanha.preco * quantidade
    alert(`Bacana, o seu total de ${lasanha.nome} deu ${lasanha.exibirComoMoeda(total)}`)
}else{
    alert('Bye baby!')
}
