/*
Pedir para o usuário digitar dois números e mostrar um boolean indicando se a média for maior que 5
*/
let numero1 = parseFloat(prompt('Digite um número: '))
let numero2 = parseFloat(prompt('Digite mais um número: '))
let media = (numero1 + numero2) / 2

alert(media > 5)