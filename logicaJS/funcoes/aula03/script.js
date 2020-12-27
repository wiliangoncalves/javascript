/*
Pedir para o usuário digitar dois números que representam os lados de um retângulo.
Mostrar na tela a área total de duas formas distintas: Em um alert ou em uma div(Dependendo do botão clicado).
Esse código não precisa ser executado quando a página for aberta.
*/
function mostrarAreaAlert(){
    let largura = parseFloat(prompt('Digite a largura: '));
    let altura = parseFloat(prompt('Digite a altura: '));
    let area = calcularArea(largura, altura);

    alert('A área total é: ' + area);
}

function mostrarAreaOutput(){
    let largura = parseFloat(prompt('Digite a largura: '));
    let altura = parseFloat(prompt('Digite a altura: '));
    let resultado = document.querySelector('.resultado');
    let area = calcularArea(largura, altura);

    resultado.innerHTML = 'A área total é: ' + area;

}

function calcularArea(l, a){
    return l * a;
}