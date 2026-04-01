//1

const seuNome = document.querySelector('#nome-usuario') //mudar o nome do usuario
seuNome.innerHTML =  "<strong>Paula Sbrissa Gianotto</strong>"

//2

const imagem_usuario = document.querySelector('#foto-perfil')//mudar a foto do perfil

imagem_usuario.src = 'src/img/ritinha.jpg'

//3

const cor_fundo = document.querySelector('#container-perfil')//mudar a cor do fundo do perfil
cor_fundo.style.backgroundColor = 'yellow'

//4
const online = document.querySelector('#badge-status')
online.classList.add('.online') //adicionar a classe online
online.innerHTML =  "<strong>Status: Ativo</strong>" //mudar status

//5

const contar = document.querySelectorAll('.skill') //contar skills
console.log('Você tem', contar.length, 'skills' )
