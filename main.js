const btMenu = document.getElementById('menu-ham');
const btX = document.getElementById('menu-x');
const btbt = document.getElementById('menu-lista');
let trocando = 0;

function trocar(){
    btMenu.style.display = 'none';
    btX.style.display = 'flex';
    btbt.style.display = 'flex';
}

function destrocar(){
    btMenu.style.display = 'flex';
    btX.style.display = 'none';
    btbt.style.display = 'none';
}

function hamOuX(){
    if (trocando === 0) {
        trocar();
        trocando = 1;
    } else {
        destrocar();
        trocando = 0;
    }
}

btMenu.addEventListener('click', hamOuX)
btX.addEventListener('click', hamOuX)