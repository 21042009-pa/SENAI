/*
EXERCICIO 1 - CLASSE SIMPLES

Enunciado:
Crie uma classe chamada Pessoa que possua:
- nome
- idade

Crie um método apresentar() que exiba no console o nome e a idade da pessoa.
*/

class Pessoa {
    constructor (nome,idade){
        this.nome = nome
        this.idade = idade
    }

    apresentar (){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}.`)
    }
}

const pessoa1 = new Pessoa ("Pietro", 17)
pessoa1.apresentar()


/*
EXERCICIO 2 - CLASSE SIMPLES

Enunciado:
Crie uma classe com nome Produto com:
- nome
- preço

Crie um método mostrarPreco() que exiba o nome do produto e seu preço.
*/

class Produto{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
        mostrarPreco(){
            console.log(`Nome: ${this.nome}, Preco: ${this.preco}`)
        }
}

const produto1 = new Produto ("Base", 100)
produto1.mostrarPreco()

/*
EXERCICIO 3 - HERANÇA 

Enunciado:
Crie uma classe Funcionario com: 
- nome

Crie uma classe Gerente que herda de Funcionario e possui:
- setor
 
Crie um método que exiba o nome e o setor do gerente.
*/

class Funcionario{
    constructor (nome){
        this.nome = nome
    }
}

class Gerente extends Funcionario{
    constructor(nome,setor){
        super(nome)
        this.setor = setor
    }

    mostrarDados(){
        console.log(`nome: ${this.nome}, setor: ${this.setor}`)
    }
}


const gerente1 = new Gerente ("Paula", "DP")
gerente1.mostrarDados()


/*
EXERCICIO 4 - HERANÇA 

Enunciado:
Crie uma classe Veiculo com:
- marca

Crie uma classe Carro que herda de Veiculos e possui:
- Modelo

Crie um método que exiba a marca e o modelo do carro.
*/

class Veiculo{
        constructor(marca){
            this.marca = marca
        }
    
    
}

class Carro extends Veiculo{
    constructor(marca, modelo){
        super(marca)
        this.modelo = modelo
    }

    mostrarDados(){
        console.log(`marca: ${this.marca}, modelo: ${this.modelo}`)
    }
}

const carro1 = new Carro ("GMW", "Fusca")
carro1.mostrarDados()

/*
EXERCICIO 5 - ENCAPSULAMENTO 

Enunciado: 
Crie uma classe Conta onde:
- o saldo seja um atributo privado
- exista um método depositar (valor)
- exista um método mostrarSaldo()
*/

class Conta{
    #saldo
    constructor(){
        this.#saldo = 0

    }

    depositar(valor){
        if(valor < 0 ){
            console.log(`Valor inválido`)
        }else{
            this.#saldo += valor 
        }

    }
    mostraSaldo(){
        console.log(`Saldo = R$${this.#saldo}`)
    }
}

const conta1 = new Conta()
conta1.depositar(-10)
conta1.depositar(10)
conta1.mostraSaldo()

/*
EXERCICIO 6 - ENCAPSULAMNETO

Enuncido:
Crie uma classe Aluno onde:
- a nota seja um atributo privado
- exista um método definiNota(nota)
- exista um método mostrarNota()
*/

class Aluno{
    #nota
    constructor(){
        this.#nota = 0
    }
    definirNota(nota){
        if (nota < 0){
            console.log(`Valor inválido`)
        }else if (nota > 10){
            console.log(`Valor inválido`)
        }else{
            this.#nota += nota
        }
    }
    mostrarNota(){
        console.log(`Nota ${this.#nota}`)
    }
}

const aluno1 = new Aluno()
aluno1.definirNota(-10)
aluno1.definirNota(20)
aluno1.definirNota(9)
aluno1.mostrarNota()
