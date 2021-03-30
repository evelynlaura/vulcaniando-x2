// Botão com alternativa CORRETA
let buttonCorretoEl = document.querySelector('.correto');
buttonCorretoEl.addEventListener('click', function() {
  buttonCorretoEl.style.backgroundColor = '#198754';
});

function ativarCorreto() {
  buttonCorretoEl.style.backgroundColor = '#198754';
}

// Botão com alternativa ERRADO
let buttonErradoEl = document.querySelectorAll('.errado');
for (let i = 0; i < buttonErradoEl.length; i++) {
  buttonErradoEl[i].addEventListener('click', buttonErradoMEl);
}

function buttonErradoMEl(e) {
  let buttonErradoAlvo = e.currentTarget;
  buttonErradoAlvo.style.backgroundColor = 'red';
  ativarCorreto();
};

//Personagem
let imgDuvidaEl = document.querySelector('#duvida');
let srcImgDuvida = localStorage.getItem('src-duvida');
imgDuvidaEl.src = srcImgDuvida;