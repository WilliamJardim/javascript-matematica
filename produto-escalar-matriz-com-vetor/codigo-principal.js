/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: produto-escalar-matriz-com-vetor © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/
function Matrix( config ){
    let matrix = {};
    matrix.rows = config['rows'] || 2;
    matrix.columns = config['columns'] || 2;
    matrix.initialColumnValue = config['fillValue'] || 0;
    matrix.content = [];

    //Se passar diretamente o conteudo
    if( config instanceof Array && config[0] instanceof Array ){
        matrix.content = config;
        matrix.rows = config.length;
        matrix.columns = config[0].length;

    //Ou caso contrario
    }else{
        //Inicializa a matrix
        for( let i = 0 ; i < matrix.rows ; i++ )
        {
            matrix.content[i] = [];
            for( let j = 0 ; j < matrix.columns ; j++ )
            {
                matrix.content[i][j] = matrix.initialColumnValue;
            }
        }
    }

    matrix.values = function(){
        return matrix.content;
    }

    return matrix;
}

/**
 * Calcula o produto escalar entre duas matrizes:
 * @param {Matrix} matrixA - a matriz
 * @param {Array} vectorB - o vetor
 * @returns {Array} - vetor resultante
*/
function produtoEscalarMatrixComVetor( matrixA, vectorB ){
    if( matrixA.rows != vectorB.length ){
        throw 'O número de linhas da matrixA deve ser exatamente igual ao numero de elementos do vetor. Impossivel calcular!';
    }

    let vetorResultado = [];

    //Percorre cada linha da matrix A
    for( let linha = 0 ; linha < matrixA.rows ; linha++ ){

        //Obtem os valores da linha atual da matrix A
        let valoresLinhaAtual = matrixA.content[linha];

        //Inicializa a variavel que será usada para a soma ponderada da linha atual
        let produtoAtual = 0;

        //Percorre cada elemento do vetor B
        for( let colunaB = 0 ; colunaB < vectorB.length ; colunaB++ ){
            produtoAtual += ( valoresLinhaAtual[colunaB] * vectorB[colunaB] );
        }

        //Vai adicionando os resultados no vetor de resultado
        vetorResultado.push(produtoAtual);
    }

    return vetorResultado;

}

var matrix = Matrix([
    [3,8,6,50],
    [1,2,2,100],
    [4,5,5,5],
    [1,2,2,2]
]);

var vetor = [12, 5, 11, 8.5];

var resultado = produtoEscalarMatrixComVetor( matrix, vetor );

console.log(resultado);
