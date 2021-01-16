(function(){
    'use strict'

    let $botao = document.getElementById('btn');
    let $checkbox = document.getElementById('chk');

    taggleBtn();
    
    $checkbox.addEventListener('change', function(){
        /*if(this.checked){
            $botao.disabled = false;
        }else{
            $botao.disabled = true;
        }*/
        taggleBtn();
    });

    function taggleBtn(){
        $botao.disabled = !$checkbox.checked;
    }
})();