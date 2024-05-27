/**
 * CRÉDITOS: Help Engenharia, Aula de Derivadas, MARATONA COMO PASSAR EM CÁLCULO, Abril de 2024
 *
 * Calcula a derivada aproximada de uma função matematica usando um método numérico.
 * @param {number} funcao - A função matematica em forma de função JavaScript mesmo.
 * @param {number} pontoX - O ponto X da função que queremos calcular a derivada.
 * @returns {number} A derivada.
*/
function derivada_por_definicao(funcao, pontoX)
{
    const valorPertinho = 1.4901161193847656e-8;

    const x = pontoX;
    const xPlus = x + valorPertinho;

    const y = funcao(x);
    const yPlus = funcao(xPlus);

    const deltaX = (xPlus - x);
    const deltaY = (yPlus - y);

    return deltaY / deltaX;
}