/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/
function calcular(valor1, valor2){
    console.log(`Soma: ${valor1} + ${valor2} = ${valor1 + valor2}`)
    console.log(`Subtração: ${valor1} - ${valor2} = ${valor1 - valor2}`)
    console.log(`Multiplicação: ${valor1} x ${valor2} = ${valor1 * valor2}`)
    console.log(`Divisão: ${valor1} / ${valor2} = ${valor1 / valor2}`)
}
calcular(2, 2)