/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: WilliamJardim/soma-matrizes-por-um-numero-scalar © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/

function somaMatrizPorUmNumero(matrixA, numero){
    let novaMatrix = [];

    for( let i = 0 ; i < matrixA.length ; i++ )
    {
        novaMatrix[i] = [];
        for( let j = 0 ; j < matrixA[0].length ; j++ )
        {
            novaMatrix[i][j] = matrixA[i][j] + numero;
        }
    }

    return novaMatrix;
}

//Exemplo
const matrix1 = [[ 1,  2,  3],
                 [-2, -5,  3],
                 [ 3,  3,  4]];

const numero = 6;

console.table(somaMatrizPorUmNumero(matrix1, numero));