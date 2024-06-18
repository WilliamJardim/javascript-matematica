/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: WilliamJardim/divisao-matrizes-por-um-vetor-linha-por-linha © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/

function divisaoMatrizPorUmVetor(matrixA, vectorB){
    let novaMatrix = [];

    if( matrixA[0].length != vectorB.length ){
        throw 'A quantidade de elementos do vetor precisa ser igual a quantidade de colunas da matrix!'
    }

    for( let i = 0 ; i < matrixA.length ; i++ )
    {
        novaMatrix[i] = [];
        for( let j = 0 ; j < vectorB.length ; j++ )
        {
            novaMatrix[i][j] = matrixA[i][j] / vectorB[j];
        }
    }

    return novaMatrix;
}

//Exemplo
const matrix1 = [[ 1,  2,  3],
                 [-2, -5,  3],
                 [ 3,  3,  4]];

const vetor = [0.3,  0.6,  0.9];

console.table(divisaoMatrizPorUmVetor(matrix1, vetor));