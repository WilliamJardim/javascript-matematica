/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: WilliamJardim/matriz oposta © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/

function matrixOposta(matrixA){
    let novaMatrix = [];

    for( let i = 0 ; i < matrixA.length ; i++ )
    {
        novaMatrix[i] = [];
        for( let j = 0 ; j < matrixA[0].length ; j++ )
        {
            novaMatrix[i][j] = matrixA[i][j] * -1;
        }
    }

    return novaMatrix;
}

//Exemplo
const matrix1 = [[ 1,  2,  3],
                 [-2, -5,  3],
                 [ 3,  3,  4]];

const opostaMatrix1 = matrixOposta(matrix1);

console.log(opostaMatrix1);