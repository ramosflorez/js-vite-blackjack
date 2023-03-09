
export const crearCarta = (carta, turno,divCartas) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartas[turno].append(imgCarta);

}