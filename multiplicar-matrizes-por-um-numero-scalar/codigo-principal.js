/**
 * File Name: codigo-principal.js
 * Author Name: William Alves Jardim
 * Author Email: williamalvesjardim@gmail.com
 *
 * License: WilliamJardim/multiplicar-matrizes-por-um-numero-scalar © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
 *
*/

/**
 * @param {Matrix} matrixA
 * @param {Number} numero
 * @returns {Matrix}
*/
function multiplicarMatrizPorUmNumero(matrixA, numero){
    let matrixResultado = [];

    for( let i = 0 ; i < matrixA.length ; i++ )
    {   
        matrixResultado[i] = [];

        for( let j = 0 ; j < matrixA[0].length ; j++ )
        {
            matrixResultado[i].push( matrixA[i][j] * numero );
        }
    }

    return matrixResultado;
}

//Testando
const matrix1 = [[ 1,  2,  3],
                 [-2, -5,  3],
                 [ 3,  3,  4]];

const numero = 15.5;

console.table( multiplicarMatrizPorUmNumero(matrix1, numero) );