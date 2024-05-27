/**
 * Calcula o limite aproximado de uma função matematica usando um método clássico de tentativa e erro, com minha adaptação.
 * Esse método é mais lento e menos preciso que o método padrão. Fiz mais para um exemplo educacional, apenas para ilustrar o conceito de limites.
 * @param {number} funcao - A função matematica em forma de função JavaScript mesmo.
 * @param {number} tentendo_A - O limite tendendo a X(número que deu a indeterminação que queremos calcular o limite).
 * @param {number} step - Um passo minúsculo que vamos a cada iteração
 * @param {number} largeStep - Um passo mais largo, que vamos dar uma ou duas vezes, se necessário, para tentar ajudar o algoritmo a encontrar o limite, caso esteja demorando muito.
 * @param {number} maxTentativas - Um limite de tentativas, para evitar cair num loop infinito, caso esse limite seja atingido a função retorna uma mensagem de erro
 * @returns {number} O limite estimado.
*/
function estimar_limite( funcao, tentendo_A, step=0.00001, largeStep=0.5, maxTentativas=2000 )
{
    let valorAtual = tentendo_A;
    let limite = null;

    //Controle anti loop infinito
    let tentativas = 0;
    let darPassoLargo = Math.ceil( maxTentativas/2 );

    //Enquanto não encontrou o limite, fica tentando encontrar
    while( !limite )
    {
        ultimoResultado = funcao( valorAtual );

        //Se o resultado da iteração atual não for uma indeterminação
        if( !isNaN(ultimoResultado) && ultimoResultado != Infinity ) {
            limite = ultimoResultado;
            break;
        }

        //Dá um passo para atualizar o "valor do quase lá"
        valorAtual = valorAtual - step;

        //Se chegou no momento de tentar um passo largo, tenta um pra ver se ajuda
        if( tentativas >= darPassoLargo ){
            valorAtual = valorAtual - largeStep;
            darPassoLargo = darPassoLargo * 2;
        }
        
        tentativas++;

        //Se exceder o limite de tentativas para
        if( tentativas >= maxTentativas ){
            throw "Não foi possivel resolver!";
            break;
        }
    }

    return limite;
}