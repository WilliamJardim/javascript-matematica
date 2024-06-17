/**
 * File Name: codigo-principal.js
 * Author Name: William Alves Jardim
 * Author Email: williamalvesjardim@gmail.com
 *
 * License: WilliamJardim/multiplicar-matrizes-por-um-vetor-linha-por-linha © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
 *
*/

/**
 * @param {Matrix} matrixA
 * @param {Vector} vectorB
 * @returns {Matrix}
*/
function multiplicarMatrizPorUmVetor(matrixA, vectorB){
    let matrixResultado = [];

    if( matrixA[0].length != vectorB.length ){
        throw 'A quantidade de elementos do vetor precisa ser a quantidade de colunas da matrix';
    }

    for( let i = 0 ; i < matrixA.length ; i++ )
    {   
        matrixResultado[i] = [];

        for( let j = 0 ; j < vectorB.length ; j++ )
        {
            matrixResultado[i].push( matrixA[i][j] * vectorB[j] );
        }
    }

    return matrixResultado;
}

//Testando
const matrix1 = [[ 1,  2,  3],
                 [-2, -5,  3],
                 [ 3,  3,  4]];

const vetor = [-2, -5,  3];

console.table( multiplicarMatrizPorUmVetor(matrix1, vetor) );