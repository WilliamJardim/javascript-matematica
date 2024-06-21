/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: produto-escalar-vetor-com-matriz © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
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
 * Calcula o produto escalar entre um vetor e uma matrix:
 * https://github.com/WilliamJardim/javascript-matematica/tree/main/produto-escalar-matriz-com-vetor
 * 
 * @param {Array} vectorB - o vetor
 * @param {Matrix} matrixA - a matrix
 * @returns {Array} - vetor resultante
*/
function produtoEscalarVetorComMatriz( vectorB, matrixA ){
    if( matrixA.rows != vectorB.length ){
        throw 'O número de linhas da matrixA deve ser exatamente igual ao numero de elementos do vetor. Impossivel calcular!';
    }

    let vetorResultado = [];

    //Percorre cada linha da matrix A
    for( let linha = 0 ; linha < matrixA.rows ; linha++ ){

        //Inicializa a variavel que será usada para a soma ponderada
        let produtoAtual = 0;

        //Percorre cada elemento do vetor B
        for( let colunaB = 0 ; colunaB < vectorB.length ; colunaB++ ){
            /*
            * Obtem os valores da linha atual da matrix A(nesse caso, a linha é na verdade a colunaB)
            * Pois, quando vamos calcular o produto escalar entre um vetor e uma matrix, acessamos os elementos de forma diferente: ao invez de acessar matrix[linha][coluna](como fazemos no produto escalar entre matrix e vetor), fazemos o contrário e acessamos matrix[coluna][linha], 
            * Ou seja, na matrix A, acessamos a coluna correspondente ao elemento atual do vetor B.
            * Ou seja, a nivel de código, na matrixA acessamos a colunaB que é o elemento atual do vetor, de modo que matrixA.content[colunaB] retornará um vetor(isto é, a variavel colunaB da matrixA), e ai em seguida nós acessamos a linha atual da matrixA, ou seja, literalmente matrixA.content[coluna][linha], e é assim que vamos fazer a soma ponderada.
            * É assim que vamos fazer a soma ponderada.
            */
            let valoresAtualMatrixNaPosicaoColunaB = matrixA.content[colunaB]; //Aqui a linha vai ser na verdade a coluna, no caso, a linha da colunaB, da matrix em questão

            produtoAtual += ( vectorB[colunaB] * valoresAtualMatrixNaPosicaoColunaB[linha] ); //E a coluna vai ser a linha
        }

        //Vai adicionando os resultados no vetor de resultado
        vetorResultado.push(produtoAtual);
    }

    return vetorResultado;

}

var vetor = [12, 5, 11, 8.5];

var matrix = Matrix([
    [3,8,6,50],
    [1,2,2,100],
    [4,5,5,5],
    [1,2,2,2]
]);

var resultado = produtoEscalarVetorComMatriz( vetor, matrix );

console.log(resultado);
