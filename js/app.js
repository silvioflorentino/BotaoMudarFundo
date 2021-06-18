const button = window.document.querySelector('button');
const body = window.document.querySelector('body');
const cores = ['blue','pink','yellow'];

body.style.background = 'red';

button.addEventListener('click',trocaCor);

function trocaCor(){
    const t = Math.random();
    alert(t);
    const cor = parseInt(Math.random()*cores.length);
    alert(cor);
body.style.background = cores[cor];
}



