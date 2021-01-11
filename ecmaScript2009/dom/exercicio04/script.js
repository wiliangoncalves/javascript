/*
Percorra todos os parágrafos de uma página e altere o conteúdo de cada um deles para "Este site foi hackeado por (seu nome)"
*/

(function(){
    let paragrafos = document.body.querySelectorAll('p');
    
    for(let i = 0; i < paragrafos.length; i++){
        paragrafos[i].textContent = 'Este site foi hackeado por Wilian';
    }
})()