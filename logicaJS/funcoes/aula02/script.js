/*
Pedir para o usuário digitar dois números que representam os lados de um retângulo assim que a página for carregada.
Mostrar na tela a área total quando clicar no botão.
*/
let largura = parseFloat(prompt('Digite a largura: '));
let altura = parseFloat(prompt('Digite a altura: '));

function mostrarArea(l, a){
    alert('Área total: ' + (l * a));
}