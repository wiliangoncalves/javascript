/*
Num textarea com  um número máximo de caracteres permitidos, mostrar numa span o número de caracteres restantes e indicar para o usuário quando restarem apenas 10 caracteres.
*/
(function(){
    'use strict'

    let $txtMsg = document.querySelector('#msg');
    let $resta = document.querySelector('#resta');
    let $restaContainer = document.querySelector('#restaContainer');
    let maxima = $txtMsg.maxLength;

    function showContainer(){
        $restaContainer.style.display = 'block';
    }
    showContainer();
    showCharactersLeft(maxima);

    $txtMsg.addEventListener('input', checkLength);

    function checkLength(e){
        let numeroLetrasDigitadas = this.value.length;
        let charactersLeft = parseInt(maxima) - parseInt(numeroLetrasDigitadas);
        showCharactersLeft(charactersLeft);
    }

    function showCharactersLeft(numero){
        $resta.textContent = numero;
    }
})();