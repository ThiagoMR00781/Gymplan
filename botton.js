const overlay = document.getElementById('overlay')

function abrir() {
    document.documentElement.style.overflow = 'hidden';
    overlay.classList.remove('disabled')
    overlay.classList.add('active')

}
    
function fechar() {
    document.documentElement.style.overflow = 'auto';
    overlay.classList.add('disabled')
}

function cor1() {
        document.getElementById("bc1").style.color= "#f4cf08";
}

function scor1() {
        document.getElementById("bc1").style.color = "";
}

function cor2() {
    document.getElementById("bc2").style.color= "#f4cf08";
}

function scor2() {
    document.getElementById("bc2").style.color = "";
}

function cor3() {
    document.getElementById("bc3").style.color= "#f4cf08";
}

function scor3() {
    document.getElementById("bc3").style.color = "";
}


