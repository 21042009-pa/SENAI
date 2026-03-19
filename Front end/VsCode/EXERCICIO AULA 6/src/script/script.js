const botao = document.querySelector ('#btn-curtir')
const contar = document.querySelector ('#contador')
let contador = 0

if (botao === 'click'){
    contador ++
    contador.innerText = contar
}