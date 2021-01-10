//Literal
function somar(numero1, numero2){
    return numero1 + numero2;
}

let soma = somar(10, 20);
let teste = function rodar(f){
    f();
};

somar.teste = 'Propriedade da função';
teste(function(){
    console.log('Função passada por parâmetro.');
});

console.log(somar.teste);
console.log('Resultado: ', soma);
console.log('-------------------');

let x = 0;
let y;

function mostraX(){
    let x = 10; // Escopo local.
    let y = 20;
    //y = 20
    console.log('Mostra x dentro:', x);
    console.log('Mostra y dentro:', y);
}
mostraX();
console.log('mostra x fora:', x);
console.log('mostra y fora:', y);

//IIFE = Função auto invocável.
(function(){
    'use strict';
    let isValid = false;

    function somar(){
        console.log(arguments);

        let result = 0;
        let x = 0;

        while(arguments[x]){
            result += arguments[x];
            //result = result + argument[x];
            x++;
        }

        console.log('result:', result);
    }
    somar(20, 20, 10, 30);
})();

//console.log(isValid);