/**
* produto-escalar-matrizes © 2024 by William Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
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
 * @param {Matrix} matrixA - a matriz A, ou seja, a primeira matriz
 * @param {Matrix} matrixB - a matriz B, ou seja, a segunda matriz
 * @returns {Matrix} - produto escalar.
*/
function produtoEscalar( matrixA, matrixB ){
    /**
    * Regra: percorre na vertical a matrixB, para cada coluna:
    * Coluna1 matrixB com linha1 matrixA, depois Coluna2 da matrixB com linha1 da matrixA.
    */

    if( matrixA.rows != matrixB.columns ){
        throw 'O número de linhas da matrixA deve ser exatamente igual ao numero de colunas da matrixB. Impossivel calcular!';
    }

    let resultMatrix = [];
    let ordemColunasB = [];

    //Esse trecho é semelhante a uma transposição de matriz, pra tornar possivel os calculos
    for( let coluna = 0 ; coluna < matrixB.columns ; coluna++ ){

        //Extrair os valores da coluna atual da matrixB
        let valoresColunaBAtual = [];
        for( let linha = 0 ; linha < matrixB.rows ; linha++ ){
            valoresColunaBAtual.push( matrixB.content[linha][coluna] );
        }

        //Salva isso numa lista, em ordem certa para os calculos abaixo no proximo bloco a seguir:
        ordemColunasB.push( valoresColunaBAtual );

    }   

    //Proxima etapa: percorre cada linha da matrix A
    for( let linha = 0 ; linha < matrixA.rows ; linha++ ){

        //Obtem os valores da linha atual da matrix A
        let valoresLinhaAtual = matrixA.content[linha];

        //Cria um array vazio para a linha. Esse array vai ser usado para armazenar os produtos feitos com os valores da linha abaixo:
        resultMatrix[linha] = [];
        
        //Percorre cada "fileira"(ou melhor dizendo, cada fileira é um vetor contendo cada valor da colunaB atual, ou seja, em sentido vertical) da matrix B
        for( let colunaB = 0 ; colunaB < ordemColunasB.length ; colunaB++ ){

            //Obtem a fileira atual da matrix B(o vetor atual)
            let valoresColunaBAtual = ordemColunasB[colunaB];

            //Inicializa a variavel que será usada para a soma ponderada
            let produtoAtual = 0;
            //Percorre cada indice dos valores da fileira atual da matrix B
            for( let indexValor = 0 ; indexValor < valoresColunaBAtual.length ; indexValor++ ){
                produtoAtual += ( valoresLinhaAtual[indexValor] * valoresColunaBAtual[indexValor] );
            }

            //Atribui o produto dentro da linha atual da matriz resultante, isso é feito em ordem sequencial
            resultMatrix[linha].push( produtoAtual );

            //... vai pro próximo produto [...], permanecendo na linha atual da matrixA

        }
    }

    return resultMatrix;

}

var matrix1 = Matrix([
    [3,8,6,4,4],
    [1,2,2,2,1],
    [4,5,5,3,1]
]);

var matrix2 = Matrix([
    [1,2,2],
    [3,12,5],
    [22,1,5],
    [6,2,2],
    [1,1,1]
]);

var resultado = produtoEscalar( matrix1, matrix2 );

//Imprime os resultados no console
let printString = '[\n';
for( let i = 0 ; i < resultado.length ; i++ ){
    printString += '[';
    for( let j = 0 ; j < resultado[0].length ; j++ ){
        printString += String(resultado[i][j]) + '  ';
    }
    printString += ']\n';
}

console.log(printString + ']');
