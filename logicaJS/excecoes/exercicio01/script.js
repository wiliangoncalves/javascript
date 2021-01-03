/*
Pedir para o usuário digitar dois números que representam os lados de um retângulo.
Mostrar na tela a área total.
Esse código deve ser executado quand a página é aberta e também quando clicar em um botão.
O que acontece se o usuáio inserir um dado inválido?
*/
function mostrarResultado(){
    let largura = parseInt(prompt('Digite a largura: '));
    let altura = parseInt(prompt('Digite a altura: '));
    let resultado = document.querySelector('.resultado');

    try{
        let area = mostrarArea(largura, altura);
        resultado.innerHTML = 'A área é: ' + area;
    } catch(e){
        area = e;
    }

    //let resultado = document.querySelector('.resultado');

    //resultado.innerHTML = 'A área é: ' + area;
}

function mostrarArea(l, a){
    if(l === undefined || a === undefined){
        throw new Error('Calcular área precisa receber dois números!');
    }

    if(isNaN(l) || isNaN(a)){
        throw new Error('Apenas números!');
    }
    return (l * a)
}

mostrarResultado()