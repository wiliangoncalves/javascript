/*
Validar um formulário de login(usuário e senha) ao clicar no botão de envio. Se algum campo estiver vazio deve ser mostrado um alert impedindo o envio.
*/
(function(){
    'use strict';
    let $form = document.querySelector('form');
    let $txtUser = document.querySelector('#txtUser');
    let $txtPass = document.querySelector('#txtPass');
    let $btn = document.querySelector('#btn');

    $form.addEventListener('submit', function(e){        
        if(!$txtUser.value || !$txtPass.value){
            alert('Preencha todos os campos!');
            e.preventDefault();
        }
    });
})();