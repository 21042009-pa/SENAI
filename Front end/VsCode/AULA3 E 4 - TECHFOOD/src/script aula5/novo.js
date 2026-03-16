// --- SELEÇÃO COM QUERY SELECTOR (O padrão moderno) ---

// 1. Especificidade total: Buscando o h3 apenas dentro de um ID específico
// Isso evita pegar o h3 da Lasanha por engano.
const tituloNhoque = document.querySelector('#card-nhoque h3');

// 2. Selecionando múltiplos elementos: Todos os botões que têm a classe .btn-pedido
const botoesCompra = document.querySelectorAll('.btn-pedido');

//manipulando os atributos

// 3. Selecionando por atributo (Ex: pegar a imagem pelo 'alt')

const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]');

const imagem_lasanha = document.querySelector('#foto-destaque');

const card_Lasanha = document.querySelector('#card-lasanha');

const terceiroCard = document.querySelector('.card:nth-child(2)') //mostrar o quarto card

console.log('Mostrando o titulo nhoque', tituloNhoque)
console.log('quantidade de botôes de pedido', botoesCompra.length)
console.log('2. Quantidade de botões de pedido', botoesCompra)
console.log('terceiro card', terceiroCard)

const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#boas-vindas')
const seuNome = document.querySelector('#nome')

saudacao.textContent = hora < 18 && hora > 12 ? 'Bem vindo! boa tarde!' : hora > 18 && hora < 24 ? 'Bem vindo! boa noite!' : 'Bem vindo! Bom dia!'

seuNome.innerHTML =  "<strong>Meu nome é Celso</strong>" //TEM QUE SER TUDO ENTRE ASPAS

imagem_lasanha.alt = 'Produto esgotado'

imagem_lasanha.src = './src/images/esgotado.jpg'

tituloNhoque.style.color = 'yellow'

card_Lasanha.classList.add('em-promocao')