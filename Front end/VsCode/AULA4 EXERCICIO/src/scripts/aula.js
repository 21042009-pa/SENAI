class Conta{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    exibirComoMoeda(total){
        return 'R$' + total.toFixed(2)
    }


}

const Conta1 = new Conta ('conat do cliente', 200)

const cliente_nome = prompt ('Bem vindo querido cliente, se você que um atendimento personalizado digite seu nome lindo a seguir')

const cliente_sobrenome = prompt ('Para a experiência ser completa digite seu sobrenome a seguir')

let sobrenome = cliente_nome.concat(cliente_sobrenome).trim().toLowerCase()

alert('Bem vindo ' + sobrenome)

alert(sobrenome.length)

const conta = confirm (`Oi lindo cliente, você gostaria de pedir sua conta?`)
if(conta){
    let pessoas = prompt('Quantas pessoas estão na sua mesa?')
    let total = Conta1.preco / pessoas 
    alert(`Otimo, sua conta para cada um da sua mesa ficou igual a ${total}`)
}else{
    alert('Otimo, espero que tenha gostado!')
}

const promocao = confirm('Oi cliente lindo você tem cupom?')
if(promocao || Conta1 > 200){
    alert('Frete grátis')
}else{
    alert('Infelizmente você não terá frete grátis')
}

const escolher = prompt('Escolha um número de 1 a 10, caso ele seja igual ao sorteado pelo sistema você ganhará um brinde')
const numero = Math.floor(Math.random() * 10) +1

if(escolher == numero){
    alert('PARABÉNS VOCÊ GANHOU UM BRINDE!!!!!!'+ numero)                         
}else{
    alert('Que pena não foi dessa vez'+ numero)
}

class Veiculo{
    constructor(modelo, marca, ano){
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
    }
    idadeVeivulo(anoAtual){
        return anoAtual - this.ano
    }
}

const Fusca = new Veiculo ('Fusca', "hgghj", 2000)

const anoAtual = Number(prompt('Em que ano estamos?'))
alert ("O" + Fusca.modelo + "tem" + Fusca.idadeVeivulo(anoAtual) + "anos")