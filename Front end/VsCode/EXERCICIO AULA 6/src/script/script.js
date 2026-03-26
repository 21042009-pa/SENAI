//1
const btn = document.querySelector('#btn-curtir')
const contador = document.querySelector('#contador')
let contar = 0

btn.addEventListener('click', function () {
    contar++
    contador.innerText = contar
})

//2

const texto = document.querySelector('#campo-texto')
const preview = document.querySelector('#preview-texto')

texto.addEventListener('keyup', function (){
    let preview = texto.value()
    console.log(preview)
})



//3

const cor_muda = document.querySelector ('#caixa-cor')

cor_muda.addEventListener('mouseenter', function(){
    cor_muda.style.backgroundColor = 'blue'
})

cor_muda.addEventListener('mouseleave', function(){
    cor_muda.style.backgroundColor = 'gray'
})


//4
const reset = document.querySelector('#btn-reset')

reset.addEventListener('click', function(){
    contar = 0,
    contador.textContext = 0
    texto.value = ''
})
