/* TESTE JANELA MODAL

//Função de click - Botão Começar
let botaoComecarEl = document.querySelector("#botao-comecar");
let divModalEl = document.querySelector("#modal-background");

botaoComecarEl.addEventListener('click', function(e) {
    isModalFechada = divModalEl.style.display='none'; // Não é uma classe
    localStorage.setItem('modal-fechado', isModalFechada);
});

let devoFecharModal = localStorage.getItem('modal-fechado');

if (devoFecharModal === 'true') {
    divModalEl.style.display='none';
}

*/


// Função de click - Botão Menu 
let botaoAbrirMenuEl = document.querySelector("#icone");
let divMenuVerticalEl = document.querySelector("nav");

botaoAbrirMenuEl.addEventListener('click', function(e) {
    isMenu = divMenuVerticalEl.classList.toggle('barra-abrir');
    sessionStorage.setItem('menu-fechado', isMenu);
});

let devoFecharMenu = sessionStorage.getItem('menu-fechado');

if (devoFecharMenu === 'true') {
divMenuVerticalEl.classList.toggle('barra-abrir');
}

//RESERVA 

//Função de click - Botão Começar
let botaoComecarEl = document.querySelector("#botao-comecar");
let tituloModalEl = document.querySelector("#tituloModal");
let imgDuvidaEl = document.querySelector('#duvida');

botaoComecarEl.addEventListener('click', function(e) {
    let divModalEl = document.querySelector("#modal-background");
    divModalEl.style.display='none';
});

let nomeUsuario = localStorage.getItem('nome-usuario');
tituloModalEl.innerHTML = 'Bem Vindo(a) ' + nomeUsuario + '!';

let srcImgDuvida = localStorage.getItem('src-imagem');
imgDuvidaEl.src = srcImgDuvida;




