/*
Obj 01 -  quando usuario clicar no botao do trailer, devemos abrir a modal com o video do trailer
    -Passo1 - dar um jeito de pegar o elemento que representa o botao na tela usando o JS;
    -Passo 2 -  Dar um jeito de identificar quando o usuario clicar no botao;
    -Passo 3 - Dar um jeito de pegar o elemento da modal no JS;
    -passo 4 -  Abrir a modal na tela;

Obj 02 - Quando o usuario clicar no botao "x" devemos fechar a modal.
    - Passo 1 - dar um jeito de pegar a elemento da modal usando o js;
    - Passo 2 - dar um jeito de identificar quando o usuario clicar no "X";
    - Passo 3 - Fechar a modal.
*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
};

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});








