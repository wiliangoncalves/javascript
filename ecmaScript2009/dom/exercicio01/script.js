/*
Mostrar na tela (div com um #msg) uma mensagem de boas-vindas, Exemplo: Bem-vindo, Wilian.
O nome de usuário pode ser uma variável cujo valor foi digitado pelo prompt() e deve estar em Negrito;
*/
(function(){
    let nomeUsuario = prompt('Qual seu nome:');
    let mensagem = document.querySelector('#mensagem');

    mensagem.innerHTML = 'Bem vindo, <b>' + nomeUsuario + '</b>';
})()