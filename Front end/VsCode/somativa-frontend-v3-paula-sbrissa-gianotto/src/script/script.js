//1

const saudacao = document.querySelector('#saudacao-voluntario')
const horaAgora = new Date() 
const hora = horaAgora.getHours()

if(hora < 12){
    saudacao.innerHTML = "<strong>Plantão matinal, Protetor</strong>"
    console.log('antes das 12')
}else if(hora >12 && hora <19){
    saudacao.innerHTML = "<strong>Plantão da tarde, Protetor</strong>"
    console.log('depois das 12')
}else{
    saudacao.innerHTML = "<strong>Plantão da noite, Protetor</strong>"
    console.log('depois das 19')
}

//2
const baner = document.querySelector("#banner-adocao")

baner.addEventListener('mouseover', function(){
    baner.classList.add('.destaque-pet')
})

baner
//3
const idadePet = document.querySelector('#idade-pet')
const total = document.querySelector('#idade-humana')

idadePet.addEventListener('input', () => {
const valor = Number(idadePet.value) * 7

total.textContent = valor.toFixed(2)


});

//4
const cadastrar = document.querySelector ("#btn-cadastrar")
const nome = document.querySelector ("#nome-pet")
const lista = document.querySelector ("#lista-adocao")
lista.classList.add('.card-adocao')

lista.innerHTML = '<strong>🐾 </strong>'

if(nome == "" ){

}else{
    cadastrar.addEventListener('click', () => {
    const listar = nome.value
    lista.innerHTML += listar
})
}

//5
const reset = document.querySelector('#btn-limpar')
const letra = document.querySelector ("#lista-adocao")
const numero = document.querySelector('#idade-humana')

reset.addEventListener('click', function(){
    letra.value = ""
    numero.textContent = 0

})


