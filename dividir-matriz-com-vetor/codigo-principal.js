/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: WilliamJardim/dividir-matriz-com-vetor © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/

function dividirMatrixComVetor(matrixA, vectorB){

    if( !(vectorB instanceof Array) ){
        throw 'O segundo parametro precisa obrigatoriamente ser um Vector.';
    }

    if( matrixA[0].length != vectorB.length ){
        throw 'A quantidade de elementos do vetor precisa ser a quantidade de colunas da matrix';
    }

    let novaMatrix = [];

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
const matrix1 = [
    [3,8,6,50],
    [1,2,2,100],
    [4,5,5,5],
    [1,2,2,2]
];

const vetor2 = [ 0.3,  0.6,  0.9, 2 ];

console.log(dividirMatrixComVetor(matrix1, vetor2));