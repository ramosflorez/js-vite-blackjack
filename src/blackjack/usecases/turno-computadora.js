import {acumularPuntos } from "..";
import { pedirCarta } from "./pedir-carta";
import { crearCarta } from "./crear-carta";


const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora Gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador gana');
        } else {
            alert('gana computadora')
        }

    }, 150)
}

export const turnoComputadora = (puntosMinimos,deck,puntosJugadores,divCartas) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, (puntosJugadores.length - 1))
        crearCarta(carta, (puntosJugadores.length - 1),divCartas)
        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);

}