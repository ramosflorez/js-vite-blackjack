import _ from 'underscore';


/**
 * 
 * @param {Array<string>} tiposDeCartas 
 * @param {Array<string>} tipoEspeciales 
 * @returns {array} 
 */
export const crearDeck = (tiposDeCartas,tipoEspeciales) => {

    if(!tiposDeCartas) throw new Error('es obligatorio');
    
   let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCartas) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tiposDeCartas) {
        for (let esp of tipoEspeciales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
}