/**
* File Name: codigo-principal.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: WilliamJardim/divisao-vetores © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/

function divisaoVetores(vectorA, vectorB){
    let novoVetor = [];

    if( vectorA.length != vectorB.length ){
        throw 'Os vetores precisam ser do mesmo tamanho!'
    }

    for( let i = 0 ; i < vectorA.length ; i++ )
    {
        novoVetor[i] = vectorA[i] / vectorB[i];
    }

    return novoVetor;
}

//Exemplo
const vetor1 = [ 1,  2,  3 ];
const vetor2 = [ 0.3,  0.6,  0.9];

console.log(divisaoVetores(vetor1, vetor2));