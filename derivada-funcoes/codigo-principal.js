/*
Calculando a derivada de uma função matematica usando JavaScript
*/

/**
 * Jason Brownlee, How to Code a Neural Network with Backpropagation In Python (from scratch), Machine Learning Mastery, Available from https://machinelearningmastery.com/implement-backpropagation-algorithm-scratch-python/, accessed April 15th, 2024.
 *
 * @param {number} x - valor X.
 * @returns {number} O resultado da função Sigmoid.
*/
function sigmoid(x)
{
    return 1.0 / (1.0 + Math.exp(-x))
}

/**
 * Jason Brownlee, How to Code a Neural Network with Backpropagation In Python (from scratch), Machine Learning Mastery, Available from https://machinelearningmastery.com/implement-backpropagation-algorithm-scratch-python/, accessed April 15th, 2024.
 *
 * @param {number} saidaSigmoid - Saida da função sigmoid.
 * @returns {number} A derivada da Sigmoid.
*/
function derivada_real(saidaSigmoid)
{
    return saidaSigmoid * (1.0 - saidaSigmoid)
}

/**
 * Calcula a derivada aproximada de uma função matematica usando um método numérico.
 * @param {number} funcao - A função matematica em forma de função JavaScript mesmo.
 * @param {number} pontoX - O ponto X da função que queremos calcular a derivada.
 * @returns {number} A derivada.
*/
function derivada_estimada(funcao, pontoX)
{
    const valorPertinho = 0.001;

    const x = pontoX;
    const xPlus = x + valorPertinho;

    const y = funcao(x);
    const yPlus = funcao(xPlus);

    const deltaX = (xPlus - x);
    const deltaY = (yPlus - y);

    return deltaY / deltaX;
}

/*
Comparando o resultado
*/
const codeResults = document.getElementById('result-table');

function calculate()
{
    const pontos = document.getElementById('points-input').value.split(',').map( point => { return Number(point) } );

    codeResults.innerHTML = `
    <tr class='table-line'>
        <td class='header-td table-column point-column'> Ponto </td>
        <td class='header-td table-column'> Derivada Aproximada </td>
        <td class='header-td table-column'> Derivada Real </td>
        <td class='header-td table-column diff-column'> Diferença </td>
    </tr>
    `;

    for( let i = 0 ; i < pontos.length ; i++ )
    {
        const ponto = pontos[i];
        const resultadoFuncao = sigmoid(ponto);
        
        const derivadaReal = derivada_real(resultadoFuncao);
        const derivadaAproximada = derivada_estimada(sigmoid, ponto);

        //Exibe os resultados na tabela
        const resuls = [derivadaReal, derivadaAproximada, (derivadaReal-derivadaAproximada)]

        codeResults.innerHTML += `
        <tr class='table-line'>
            <td class='table-column point-column'> ${ponto} </td>
            <td class='table-column'> ${resuls[1]} </td>
            <td class='table-column'> ${resuls[0]} </td>
            <td class='table-column diff-column'> ${resuls[2]} </td>
        </tr>
        `;
    }
}
