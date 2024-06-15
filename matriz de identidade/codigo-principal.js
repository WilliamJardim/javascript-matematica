/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: WilliamJardim/matriz de identidade © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/

function matrixIdentidade(ordem){
    const NON_DIAGONAL_VALUE = 0;
    const DIAGONAL_VALUE = 1;
    let matrix = [];

    for( let i = 0 ; i < ordem ; i++ )
    {
        matrix[i] = [];
        for( let j = 0 ; j < ordem ; j++ )
        {
            //NA LINHA ATUAL, Toda vez que o indice do número for igual ao indice da linha, ele faz parte da diagonal principal
            if( j == i ){
                matrix[i][j] = DIAGONAL_VALUE;

            }else{
                matrix[i][j] = NON_DIAGONAL_VALUE;
            }
        }
    }

    return matrix;
}

//Exemplo
console.log( matrixIdentidade(8) );