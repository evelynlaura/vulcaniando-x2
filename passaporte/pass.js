//Vetor de imagens -> 3/4;
let imagens = document.querySelectorAll('.personagens img');

//função adiciona nome:
function addNome(){
  //pegar o valor do input;
  //passar para todos os .saida;

  let nomeEl = document.querySelector('#nome').value;
  let nomeP = document.querySelectorAll('.saida');
  for(let i=0; i<nomeP.length; i++){
    nomeP[i].innerHTMl = nomeEl;
  }
}

let botaoNomeEl = document.querySelector('#pronto');
botaoNomeEl.addEventListener('click', addNome);

let inputNomeEl = document.querySelector('#nome');

inputNomeEl.addEventListener('input', () => {
    let pNomeEl = document.querySelector('#digitado');
    pNomeEl.innerHTML = inputNomeEl.value;
}); 

inputNomeEl.addEventListener('input', () => {
  let pNomeEl = document.querySelector('#assinado');
  pNomeEl.innerHTML = inputNomeEl.value;
}); 

//chamando função com o valor da imagem escolhido:
for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener('mouseover', expPerson);
  imagens[i].addEventListener('mouseout', saiPerson);
  imagens[i].addEventListener('click', addPerson);
}

//função mouseover -> mostra personagem > corpo:
function expPerson(evento){
  //descobrir o indice do personagem;
  let imgAlvoEl = evento.currentTarget;

  //let indiceDaImg = perfis.indexOf('../personagens/' + imgAlvoEl.src);
  let imgId = imgAlvoEl.dataset.personagem;

  //descobrir o nome da imagem de perfil dessa pessoa;
  let nomeCorpo = '../personagens/corpo/corpo' + (imgId) + '.png';

  //alterar o src da imagem de perfil -> corpo;
  let corpoEl = document.querySelector('.personagemcorpo img');
  corpoEl.src = nomeCorpo;
}

//função mouseout -> não mostra personagem:
function saiPerson(){
  //não mostra nada quando o mouse não está em cima de alguma imagem;
  //string do src vazia;
  let corpoEl = document.querySelector('.personagemcorpo img');
  corpoEl.src = ' ';
}

// AJUDA COUTINHO: dx o (corpo);
//função click -> escolhe personagem > perfil, comemoração e duvida:
function addPerson(evento){
  //descobrir o indice do personagem;
  let escolhidaEl = evento.currentTarget;
  let idImg = escolhidaEl.dataset.personagem;

  //descobrir o nome da imagem de perfil dessa pessoa;
  let nomePerfil = '../personagens/perfil/perfil' + (idImg) + '.png';
  let perfilEl = document.querySelector('#perfil');
  perfilEl.src = nomePerfil;

  let nomeCorpo = '../personagens/corpo/corpo' + (idImg) + '.png';
  let corpoEl = document.querySelector('.personagemcorpo img');
  corpoEl.src = nomeCorpo;

  //Pagina dos vulcões:
  let nomeDuvida = '../personagens/duvida/duvida' + (idImg) + '.png';
  let duvidaEl = document.querySelectorAll('.duvida');
  for (var i = 0; i < duvidaEl.length; i++) {
    duvidaEl[i].src = nomeDuvida;
  }

  //Pagina do mapa:
  let nomeComemora = '../personagens/comemoracao/comemora' + (idImg) + '.png';
  let comemoraEl = document.querySelectorAll('.comemora');
  for (var i = 0; i < comemoraEl.length; i++) {
    comemoraEl[i].src = nomeComemora;
  }

  viajar();
  localStorage.setItem('src-duvida', nomeDuvida);buttonErradoEl.addEventListener('click', function() {
    buttonErradoEl.style.backgroundColor = 'red';
    ativarCorreto();
  });
}

//função tudo pronto?! Vamos viajar viajar:
let botaoViajarEl = document.querySelector('.viajar');
let inputNomeUsuarioEl = document.querySelector('#nome');
let tituloModalEl = document.querySelector("#tituloModal");

botaoViajarEl.addEventListener('click', function() {
  localStorage.setItem('nome-usuario', inputNomeUsuarioEl.value);
  localStorage.removeItem('nome-de-usuario');
  localStorage.setItem('src-duvida', nomeDuvida.text);
  
  //tituloModalEl.innerHTML = 'Você agora irá explorar cinco vulcões ao redor do mundo!' + nome-de-usuario; 
});

function viajar() {
  botaoViajarEl.classList.remove('disabled');
}