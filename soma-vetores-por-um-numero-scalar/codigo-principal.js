/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: WilliamJardim/soma-vetores-por-um-numero-scalar © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/

function somaVetorPorUmNumero(vectorA, numero){
    let novoVetor = [];

    for( let i = 0 ; i < vectorA.length ; i++ )
    {
        novoVetor[i] = vectorA[i] + numero;
    }

    return novoVetor;
}

//Exemplo
const vetor1 = [ 1,  2,  3 ];
const numero = 1.8;

console.table(somaVetorPorUmNumero(vetor1, numero));