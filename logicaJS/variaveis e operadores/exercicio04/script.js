/*
Pedir para o usuário digitar dois números e mostrar uma mensagem informando se foi aprovado ou não.
A nota de corte é 5.
Conteudo, se qualquer uma das notas for zero, reprova automaticamente
*/

let alunonota1 = parseFloat(prompt('Digite a primeira nota: '));
let alunonota2 = parseFloat(prompt('Digite a segunda nota: '));
let media = (alunonota1 + alunonota2) / 2;

if(alunonota1 && alunonota2 && media > 5){
    alert(`Aluno APROVADO com a média ${media}`);
}else{
    alert(`Aluno REPROVADO com a média ${media}`)
};