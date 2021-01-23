(function(){
    'use strict'

    let paragrafos = document.querySelectorAll('p');

    function checkLength(){
        for(let i = 0; i < paragrafos.length; i++){

            let paragrafosTamanho = paragrafos[i].textContent.length;
            let paragrafosConteudos = paragrafos[i].textContent;

            if(paragrafosTamanho > 200){
                paragrafos[i].innerHTML = paragrafosConteudos.substring(0, 200) + '(...)';
                console.log(paragrafos[0])
            }
        }
    }
    checkLength();
})();