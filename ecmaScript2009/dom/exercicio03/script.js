/*
Temos duas variáveis chamadas nome e sobrenome com valores definidos.
Precisamos mostrar estas variáveis concatenadas em um input type="text" e deixar este input desabilitado.
*/

(function(){
    let nome = 'wilian';
    let sobrenome = 'goncalves';
    document.querySelector('#inputValor').value = nome + ' ' + sobrenome;
    document.querySelector('#inputValor').disabled = true;
})();