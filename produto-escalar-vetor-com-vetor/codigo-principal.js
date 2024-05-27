/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: produto-escalar-vetor-com-vetor © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/

//Classe não usada
function Vector( config ){
    let vector = {};
    vector.initialColumnValue = config['fillValue'] || 0;
    vector.content = [];

    //Se passar diretamente o conteudo
    if( config instanceof Array ){
        vector.content = config;
        vector.length = config.length;

    //Ou caso contrario
    }else{
        //Inicializa o vetor
        for( let i = 0 ; i < vector.length ; i++ )
        {
            vector.content[i] = vector.initialColumnValue;
        }
    }

    vector.values = function(){
        return vector.content;
    }

    return vector;
}

/**
 * Calcula o produto escalar entre dois vetores:
 * @param {Array} vectorA - o vetor A
 * @param {Array} vectorB - o vetor B
 * @returns {Number} - produto escalar
*/
function produtoEscalarVetorComVetor( vectorA, vectorB ){
    if( vectorA.length != vectorB.length ){
        throw 'O número de elementos do vetor A deve ser exatamente igual ao numero de elementos do vetor B. Impossivel calcular!';
    }

    //Inicializa a variavel que será usada para a soma ponderada da linha atual
    let produtoAtual = 0;
    //Percorre cada elemento do vetor B
    for( let colunaB = 0 ; colunaB < vectorB.length ; colunaB++ ){
        produtoAtual += ( vectorA[colunaB] * vectorB[colunaB] );
    }

    return produtoAtual;

}

var vetor1 = [2,  3, 8,  1.2];
var vetor2 = [12, 5, 11, 8.5];

var resultado = produtoEscalarVetorComVetor( vetor1, vetor2 );

console.log(resultado);
