/**
 * File Name: codigo-principal.js
 * Author Name: William Alves Jardim
 * Author Email: williamalvesjardim@gmail.com
 *
 * License: WilliamJardim/multiplicar-vetores-por-um-numero-scalar © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
 *
*/

/**
 * @param {Array} vectorA
 * @param {Number} numero
 * @returns {Array}
*/
function multiplicarVetorPorUmNumero(vectorA, numero){
    let vetorResultado = [];

    for( let i = 0 ; i < vectorA.length ; i++ )
    {   
        vetorResultado.push( vectorA[i] * numero );
    }

    return vetorResultado;
}

//Testando
const vector1 = [5,  2,  6];
const numero = 0.8;

console.log( multiplicarVetorPorUmNumero(vector1, numero) );