/**
 * File Name: codigo-principal.js
 * Author Name: William Alves Jardim
 * Author Email: williamalvesjardim@gmail.com
 *
 * License: WilliamJardim/multiplicar matrizes elemento a elemento © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
 *
*/

/**
 * @param {Matrix} matrixA
 * @param {Matrix} matrixB
 * @returns {Matrix}
*/
function multiplicarMatrizes(matrixA, matrixB){
    let matrixResultado = [];

    if( matrixA.length != matrixB.length || matrixA[0].length != matrixB[0].length ){
        throw 'As matrizes precisam ser do mesmo tamanho!'
    }

    for( let i = 0 ; i < matrixA.length ; i++ )
    {   
        matrixResultado[i] = [];

        for( let j = 0 ; j < matrixA[0].length ; j++ )
        {
            matrixResultado[i].push( matrixA[i][j] * matrixB[i][j] );
        }
    }

    return matrixResultado;
}

//Testando
const matrix1 = [[ 1,  2,  3],
                 [-2, -5,  3],
                 [ 3,  3,  4]];

const matrix2 = [[ 0.3,  0.6,  0.9],
                 [-0.6, -1.5,  0.9],
                 [ 0.9,  0.9,  1.2]];

console.log( multiplicarMatrizes(matrix1, matrix2) );