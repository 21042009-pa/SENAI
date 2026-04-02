/* ==========================================================
   AULA 06: EVENTOS DOM - PROJETO ECOCYCLE
   ========================================================== */


// 1️⃣ SIMULADOR DE ÁGUA

// Pega o input (onde digita os kg de papel)
const inputPapel = document.querySelector("#input-papel");

// Pega o número dentro do <strong> (resultado)
const resultadoAgua = document.querySelector("#txt-resultado strong");

// Se os dois existirem...
if (inputPapel && resultadoAgua) {

  // Quando o usuário digitar...
  inputPapel.addEventListener("input", () => {

    // Pega o valor digitado e transforma em número
    const kg = Number(inputPapel.value);

    // Calcula: 1kg = 10 litros de água
    const totalAgua = kg * 10;

    // Mostra o resultado na tela
    resultadoAgua.textContent = totalAgua;
  });
}



// 2️⃣ CONTROLE DO VÍDEO

// Pega o botão "Assistir vídeo"
const btnVideo = document.querySelector("#btn-video");

// Pega a imagem (thumbnail do vídeo)
const thumbnail = document.querySelector("#thumb-video");

// Se os dois existirem...
if (btnVideo && thumbnail) {

  // Quando clicar no botão...
  btnVideo.addEventListener("click", (event) => {

    // Evita comportamento padrão
    event.preventDefault();

    // Esconde a imagem → aparece o vídeo
    thumbnail.style.display = "none";

    // Muda o botão
    btnVideo.textContent = "A reproduzir...";
    btnVideo.style.backgroundColor = "#555"; // cinza
    btnVideo.disabled = true; // desativa botão
  });
}



// 3️⃣ EFEITOS NOS BOTÕES

// Pega todos os botões
const todosBotoes = document.querySelectorAll(".btn-leitura");

// Para cada botão...
todosBotoes.forEach((botao) => {

  // NÃO aplica no botão de vídeo
  if (botao.id !== "btn-video") {

    // Quando passa o mouse
    botao.addEventListener("mouseover", () => {
      botao.style.backgroundColor = "#27ae60"; // verde claro
      botao.style.transform = "scale(1.05)"; // aumenta um pouco
    });

    // Quando tira o mouse
    botao.addEventListener("mouseout", () => {
      botao.style.backgroundColor = "#1b5e20"; // verde normal
      botao.style.transform = "scale(1)"; // volta ao tamanho normal
    });

    // Quando clicar
    botao.addEventListener("click", (event) => {
      event.preventDefault();

      // Mostra alerta
      alert("A redirecionar para o artigo completo...");
    });
  }
});