/*
Mostrar na tela em um alert ou output, a soma dos números PARES.

Obs: Número par não pode ter resto na divisão por 2.
*/
let output = document.querySelector('#output');
let numeros = new Array(1, 2, 3, 5, 2);
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    if(!isNaN(numeros[i]) && numeros[i] % 2 === 0){
        soma += numeros[i];
    }

    output.innerHTML = 'A soma dos números pares é: ' + soma;
}