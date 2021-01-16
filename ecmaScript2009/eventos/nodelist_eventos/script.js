(function(){
    'use strict';

    let $botoes = document.querySelectorAll('button');

    for(let i = 0; i < $botoes.length; i++){
        $botoes[i].addEventListener('click', clicou);
    }

    function clicou(){
        console.log(this.textContent);
    }
})();