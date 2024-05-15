/*
Calculando a derivada de uma função matematica usando JavaScript
*/

/**
 * Função Sigmoid escrita em JavaScript
 * @param {number} x - valor X.
 * @returns {number} O resultado da funçãos.
*/
function sigmoid(x)
{
    return 1.0 / (1.0 + Math.exp(-x))
}

/**
 * Derivada real da função Sigmoid escrita em JavaScript
 * @param {number} x - valor X.
 * @returns {number} O resultado da funçãos.
*/
function derivada_real(output)
{
    return output * (1.0 - output)
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
