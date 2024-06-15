/**
 * File Name: codigo-principal.js
 * Author Name: William Alves Jardim
 * Author Email: williamalvesjardim@gmail.com
 *
 * License: WilliamJardim/multiplicar vetores elemento a elemento © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
 *
*/

/**
 * @param {Array} vectorA
 * @param {Array} vectorB
 * @returns {Array}
*/
function multiplicarVetores(vectorA, vectorB){
    let vetorResultado = [];

    if( vectorA.length != vectorB.length ){
        throw 'Os vetores precisam ser do mesmo tamanho!'
    }

    for( let i = 0 ; i < vectorA.length ; i++ )
    {   
        vetorResultado.push( vectorA[i] * vectorB[i] );
    }

    return vetorResultado;
}

//Testando
const vector1 = [5,  2,  6];
const vector2 = [0.3,  0.6,  0.9];

console.log( multiplicarVetores(vector1, vector2) );