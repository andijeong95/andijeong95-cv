/*BOTONES DEL FOOTER*/

const botonCorreo = document.querySelector('.button_correo');
const botonCel = document.querySelector('.button_cel');
const botonDir = document.querySelector('.button_dir');

const correo = document.querySelector('.correo');
const cel = document.querySelector('.cel');
const dir = document.querySelector('.dir');

botonCorreo.addEventListener('click', toggleCorreo);
function toggleCorreo(){
    correo.classList.toggle('show')
}

botonCel.addEventListener('click', toggleCel);
function toggleCel(){
    cel.classList.toggle('show')
}

botonDir.addEventListener('click', toggleDir);
function toggleDir(){
    dir.classList.toggle('show')
}


// botonCorreo.onclick = function(){
//     correo.style.display= "block"
// };

// botonCel.onclick = function(){
//     cel.style.display= "block"
// };

// botonDir.onclick = function(){
//     dir.style.display= "block"
// };

