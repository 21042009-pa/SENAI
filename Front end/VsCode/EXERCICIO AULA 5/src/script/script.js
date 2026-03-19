//1

const seuNome = document.querySelector('#nome-usuario')

seuNome.innerHTML =  "<strong>Paula Sbrissa Gianotto</strong>"

//2

const imagem_usuario = document.querySelector('#foto-perfil')

imagem_usuario.src = 'src/img/ritinha.jpg'

//3

const cor_fundo = document.querySelector('#container-perfil')
cor_fundo.style.backgroundColor = 'yellow'

//4
const online = document.querySelector('#badge-status')
online.classList.add('.online')
online.innerHTML =  "<strong>Status: Ativo</strong>"

//5

const contar = document.querySelectorAll('.skill')
console.log('Você tem', contar.length, 'skills' )
