/*
Pedir para o usuário digitar dois números que representam os lados de um retângulo.
Mostrar na tela a área total.
Esse código deve ser executado quando a página é aberta e também quando clicar em um botão.
O que acontece se o usuário inserir um dado inválido?
*/
let primeiroNumero = parseFloat(prompt('Digite um número: '));
let resultado  = document.querySelector('.resultado');

if(isNaN(primeiroNumero)){
    throw new Error('Digite somente número!');
}

resultado.innerHTML = primeiroNumero;

function calcular(calculo){
    segundoNumero = parseFloat(prompt('Digite um número: '));

    /*try{
        isNaN(segundoNumero);
    } catch(e){
        alert('Error!')
    }*/

    if(isNaN(segundoNumero)){
        throw new Error('Digite um número válido!');
    }

    switch(calculo){
        case '+':
            resultado.innerHTML = primeiroNumero += segundoNumero;
            break
        case '-':
            resultado.innerHTML = primeiroNumero -= segundoNumero;
            break
        case '*':
            resultado.innerHTML = primeiroNumero *= segundoNumero;
            break
        case '/':
            resultado.innerHTML = primeiroNumero /= segundoNumero;
            break
        default:
            alert('ERRO!');
    }
}