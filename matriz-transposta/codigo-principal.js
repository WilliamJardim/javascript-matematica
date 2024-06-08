/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: WilliamJardim/matriz-transposta © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/

/**
 * Faz a transposição de uma matrix - as linhas se tornam colunas e as colunas se tornam linhas
 * @param {Array} matrix - A matrix em questão 
 * @returns {Array} - A matrix transposta resultante
 */
function transpostaMatrix(matrix){
    let novaMatrix = [];

    for( let j = 0 ; j < matrix[0].length ; j++ ){
        novaMatrix[j] = [];

        for( let i = 0 ; i < matrix.length ; i++ ){
            novaMatrix[j].push( matrix[i][j] );
        }
    }

    return novaMatrix;
}

//Fazendo a transposição
var transp = transpostaMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);

console.log(transp);

var retransp = transpostaMatrix(transp);

console.log(retransp);