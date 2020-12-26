let usernumber = Number(prompt('Digite um número: '));
let resultado = document.querySelector('.resultado');

resultado.innerHTML = usernumber;

function adicao(){
    let numerosomar = Number(prompt('Digite um número: '));

    resultado.innerHTML = (usernumber += numerosomar);
}

function subtracao(){
    let numerosubtrair = Number(prompt('Digite um número: '));

    resultado.innerHTML = (usernumber -= numerosubtrair);
}

function divisao(){
    let numerodividir = Number(prompt('Digite um número: '));

    resultado.innerHTML = (usernumber /= numerodividir)
}

function multiplicacao(){
    let numeromultiplicar = Number(prompt('Digite um número: '));

    resultado.innerHTML = (usernumber *= numeromultiplicar)
}