// 1️⃣ BOTÃO DE CURTIR

// Pega o botão de curtir
const btn = document.querySelector('#btn-curtir')

// Pega o lugar onde aparece o número
const contador = document.querySelector('#contador')

// Cria uma variável para contar (começa em 0)
let contar = 0

// Quando clicar no botão...
btn.addEventListener('click', function () {
    // Soma +1 no contador
    contar++

    // Atualiza o número na tela
    contador.innerText = contar
})



// 2️⃣ TEXTO E PREVIEW

// Pega o campo de texto
const texto = document.querySelector('#campo-texto')

// Pega onde vai mostrar o preview
const preview = document.querySelector('#preview-texto')

// Quando digitar algo...
texto.addEventListener('keyup', function (){
    // Pega o texto digitado
    let preview = texto.value()

    // Mostra no console
    console.log(preview)
})


// 3️⃣ MUDAR COR AO PASSAR O MOUSE

// Pega a caixa
const cor_muda = document.querySelector('#caixa-cor')

// Quando o mouse entra...
cor_muda.addEventListener('mouseenter', function(){
    // Muda a cor para azul
    cor_muda.style.backgroundColor = 'blue'
})

// Quando o mouse sai...
cor_muda.addEventListener('mouseleave', function(){
    // Volta para cinza
    cor_muda.style.backgroundColor = 'gray'
})



// 4️⃣ BOTÃO DE RESET

// Pega o botão de reset
const reset = document.querySelector('#btn-reset')

// Quando clicar...
reset.addEventListener('click', function(){
    // Zera o contador
    contar = 0,

    // Atualiza o número na tela
    contador.textContext = 0

    // Limpa o campo de texto
    texto.value = ''
})

/*
⚠️ ERRO AQUI:
- "textContext" está errado

✔️ Correto:
contador.innerText = 0
*/