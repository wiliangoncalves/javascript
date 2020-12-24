/*
pedir para o usuário digitar dois números e mostrar uma mensagem informando se foi aprovado ou não.
A nota de corte e 5.
*/
let numero1 = parseFloat(prompt('Digite um número: '));
let numero2 = parseFloat(prompt('Digite mais um número: '));
let media = (numero1 + numero2) / 2;

if(media > 5){
    alert('Parabéns! você foi reprovado.')
}else{
    alert('Você foi reprovado!')
};