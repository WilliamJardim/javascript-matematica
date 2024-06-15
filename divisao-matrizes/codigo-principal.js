/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: WilliamJardim/divisao-matrizes © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/

function divisaoMatrizes(matrixA, matrixB){
    let novaMatrix = [];

    if( matrixA.length != matrixB.length || matrixA[0].length != matrixB[0].length ){
        throw 'As matrizes precisam ser do mesmo tamanho!'
    }

    for( let i = 0 ; i < matrixA.length ; i++ )
    {
        novaMatrix[i] = [];
        for( let j = 0 ; j < matrixA[0].length ; j++ )
        {
            novaMatrix[i][j] = matrixA[i][j] / matrixB[i][j];
        }
    }

    return novaMatrix;
}

//Exemplo
const matrix1 = [[ 1,  2,  3],
                 [-2, -5,  3],
                 [ 3,  3,  4]];

const matrix2 = [[ 0.3,  0.6,  0.9],
                 [-0.6, -1.5,  0.9],
                 [ 0.9,  0.9,  1.2]];

console.log(divisaoMatrizes(matrix1, matrix2));