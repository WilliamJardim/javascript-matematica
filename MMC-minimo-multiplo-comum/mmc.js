/**
* File Name: mmc.js
* Author Name: William Alves Jardim
* Author Email: williamalvesjardim@gmail.com
*
* License: MMC-minimo-multiplo-comum © 2024 by William Alves Jardim is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/4.0/
*
*/

/**
Calcula o MMC entre números
@param {Array} numerosDesejados;
@returns {Object}

Exemplo de uso:
    MMC([115, 250]) returns {
        mmc: 5750,
        string: "2 * 5 * 5 * 5 * 23"
    }
*/
function MMC( numerosDesejados ){
    let i = 0;
    let numerosObtidos = [];
    let passos = []; //Historico de passos

    //Controle da iteração
    let numerosAtuais = numerosDesejados;
    let multiploAtual = 2;
    let incremento = 1;
    let maxIteracoes = 8000;

    //Enquando todos os números não forem todos igual a 1
    while( true ){

        //vai tentando encontrar o proximo multiplo
        //Enquando não der pra dividir os numeros pelo multiplo atual
        while( numerosAtuais.every( (num)=>{ return num % multiploAtual != 0 } ) ){
            //Troca o multiplo
            multiploAtual += incremento;
            i++;

            //Se o limite de iterações foi atingido
            if( i >= maxIteracoes ){
                break;
            }
        }

        //Se deu pra dividir
        //Depois que encontrar um multiploAtual que dá pra dividir
        numerosObtidos.push( multiploAtual );
        passos.push( [numerosAtuais, multiploAtual] );

        //Atualiza os númeres atuais
        numerosAtuais = [...numerosAtuais].map( (num)=>{ return num % multiploAtual == 0 ? (num / multiploAtual) : num } );

        //Se o limite de iterações foi atingido ou se satifez o critério de parada
        if( i >= maxIteracoes || numerosAtuais.every( (num)=>{ return num == 1 } ) ){
            break;
        }

        i++;
    }

    //Faz a soma de todos os numeros até o momento
    let mmc = 1;
    for( let n = 0 ; n < numerosObtidos.length ; n++ ){
        mmc = mmc * numerosObtidos[n];
    }

    return {
        passos: passos, //cada item é um vetor: [numero, multiplo]
        numeros: numerosObtidos, //Lista com todos os numeros usados
        iters: i, //Contagem de iterações total
        mmc: mmc,
        string: numerosObtidos.join(' * ')
    };
}