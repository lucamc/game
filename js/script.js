let ataqueJugador;
let ataqueEnemigo;
let resultado;
let vidasJugador = 3;
let vidasEnemigo = 3;


function iniciarJuego() {
    
    //Ocultar el elemento Seleccion de Ataque
    let sectionSeleccionarAtaque = document.getElementById('select-atack')
    sectionSeleccionarAtaque.style.display = 'none';

    //Ocultar el elemento Seleccion de Reiniciar
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none';

    //Evento Seleccion de Jugador.
    let btnSelectJugador = document.getElementById('btn-select')
    btnSelectJugador.addEventListener('click', selecionarDranmonJugador)

    //Eventos Ataques.
    let btnFuego = document.getElementById('btn-fuego');
    btnFuego.addEventListener('click', ataqueFuego);
    let btnAgua = document.getElementById('btn-agua');
    btnAgua.addEventListener('click', ataqueAgua);
    let btnTierra = document.getElementById('btn-tierra');
    btnTierra.addEventListener('click', ataqueTierra);

    //Boton de Reinicio de Juego
    let btnReiniciar = document.getElementById('btn-reiniciar')
    btnReiniciar.addEventListener('click', reiniciarJuego)
}
//Seleccion Jugador.
function selecionarDranmonJugador() {
    
    //Ocultar el elemento Seleccion de Dranmon
    let sectionSeleccionarDranmon = document.getElementById('select-dranmon')
    sectionSeleccionarDranmon.style.display = 'none';


    //Mostrar el elemento Seleccion de Ataque
    let sectionSeleccionarAtaque = document.getElementById('select-atack')
    sectionSeleccionarAtaque.style.display = 'block';

    let inputRangor = document.getElementById('rangor');
    let inputCapron = document.getElementById('capron');
    let inputFeront = document.getElementById('feront');
    let inputLortus = document.getElementById('lortus');
    let inputTermer = document.getElementById('termer');
    let inputPydors = document.getElementById('pydors');
    
    let spanDranmonJugador = document.getElementById('dranmon-jugador');

    if (inputRangor.checked) {
        spanDranmonJugador.innerHTML = 'Rangor'
    } else if (inputCapron.checked) {
        spanDranmonJugador.innerHTML = 'Capron'
    } else if (inputFeront.checked) {
        spanDranmonJugador.innerHTML = 'Feront'
    } else if (inputLortus.checked) {
        spanDranmonJugador.innerHTML = 'Lortus'
    } else if (inputTermer.checked) {
        spanDranmonJugador.innerHTML = 'Termer'
    } else if (inputPydors.checked) {
        spanDranmonJugador.innerHTML = 'Pydors'
    } else {
        alert('Selecciona un Dranmon')
        sectionSeleccionarDranmon.style.display = 'block'
        sectionSeleccionarAtaque.style.display = 'none'
    }
    
    seleccionarDranmonEnemigo()

}
  
//Seleccion Aleatoria del Enemigo.
function seleccionarDranmonEnemigo() {
    
    let dranmonAleatorio = aleatorio(1,6);
    let spanDranmonEnemigo = document.getElementById('dranmon-enemigo');

    if (dranmonAleatorio == 1) {
        spanDranmonEnemigo.innerHTML = 'Rangor'
    } else if (dranmonAleatorio == 2) {
        spanDranmonEnemigo.innerHTML = 'Capron'
    } else if (dranmonAleatorio == 3) {
        spanDranmonEnemigo.innerHTML = 'Feront'
    } else if (dranmonAleatorio == 4) {
        spanDranmonEnemigo.innerHTML = 'Lortus'
    } else if (dranmonAleatorio == 5) {
        spanDranmonEnemigo.innerHTML = 'Termer'
    } else {
        spanDranmonEnemigo.innerHTML = 'Pydors'
    }
}

//Ataques Jugador.
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
//Ataque Aleatorio del Enemigo.
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'TIERRA'
    }
    
    combate();

    crearMensaje();
}

//Ejecucion de combate.
function combate() {
    
    let spanVidasJugador = document.getElementById('vidas-jugador');
    let spanVidasEnemigo = document.getElementById('vidas-enemigo');

    if (ataqueJugador == ataqueEnemigo) {
        resultado = 'EMPATE' 
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') { 
        resultado ='GANASTE'
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        resultado = 'GANASTE'
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        resultado ='GANASTE'
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        resultado = 'PERDISTE'
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador;
    } 

}

//Contador de Vidas
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('FELICITACIONES GANASTE')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('LO SIENTO PERDISTE')
    }
}

//Mensaje quien gano en el Enfrentamiento.
function crearMensaje() {
    let sectionMensaje = document.getElementById('mensajes');

    let parrafo = document.createElement('p');
    parrafo.innerHTML = 'Tu Dranmon atacó con ' + ataqueJugador + ' el Dranmon del enemigo atacó con '  + ataqueEnemigo + " " + resultado

    sectionMensaje.appendChild(parrafo);

    //Revisar Vidas
    revisarVidas()  
}

//Mensaje Final de la Partida - Ganaste-Perdiste.
function crearMensajeFinal(resultadoFinal) {
    
    let sectionMensaje = document.getElementById('mensajes');

    let parrafoFinal = document.createElement('p');
    parrafoFinal.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafoFinal);

     //Desabilitar Btns de Ataques despues del Mensaje Final
     let btnFuego = document.getElementById('btn-fuego');
     btnFuego.disabled = true
     let btnAgua = document.getElementById('btn-agua');
     btnAgua.disabled = true
     let btnTierra = document.getElementById('btn-tierra');
     btnTierra.disabled = true

     let sectionReiniciar = document.getElementById('reiniciar')
     sectionReiniciar.style.display = 'block';
}

//Reiniciar el Juego
function reiniciarJuego() {
    location.reload()
}

//Generador número aleatorio.
function aleatorio(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);    
}

//Cualquier evento que le pase al navegador
//Escuche el evento de carga
window.addEventListener('load', iniciarJuego)

