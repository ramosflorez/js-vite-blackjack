
/**
 * 
 * @param {Array<string>} deck 
 * @returns 
 */


export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();

}