
import {crearDeck} from './usecases/crear-deck';
import { pedirCarta } from './usecases/pedir-carta';
import { valorCarta } from './usecases/valor-carta';
import { turnoComputadora } from './usecases/turno-computadora';
import { crearCarta } from './usecases/crear-carta';


let deck = [];
const tipos = ['C', 'D', 'H', 'S'], especiales = ['A', 'J', 'Q', 'K'];

// let puntosJugador=0,puntosComputadora=0;

let puntosJugadores = [];

const divCartasJugadores = document.querySelectorAll('.divCartas'),
    puntosHTML = document.querySelectorAll('small');

const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos,especiales);
    puntosJugadores = [];

    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }
    divCartasJugadores.forEach(elem => elem.innerText = '');
    puntosHTML.forEach(elem => elem.innerText = 0);

    btnPedir.disabled = false;
    btnDetener.disabled = false;

}

//referencias html
const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

//turno de la computadora

export const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];

}

//eventos

btnPedir.addEventListener('click', function () {
    const carta = pedirCarta(deck);

    const puntosJugador = acumularPuntos(carta, 0);
    crearCarta(carta, 0,divCartasJugadores);

    if (puntosJugador > 21) {
        console.warn("Lo siento, perdiste");
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador,deck,puntosJugadores,divCartasJugadores);
    } else if (puntosJugador === 21) {
        alert('ganaste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    }
});

btnDetener.addEventListener('click', function () {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0],deck,puntosJugadores,divCartasJugadores);
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();
});
