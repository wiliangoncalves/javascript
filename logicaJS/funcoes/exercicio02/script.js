let primeiroNumero = parseFloat(prompt('Digite um número: '));
let resultado  = document.querySelector('.resultado');

resultado.innerHTML = primeiroNumero;

function calcular(calculo){
    segundoNumero = parseFloat(prompt('Digite um número: '));

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
    }
}