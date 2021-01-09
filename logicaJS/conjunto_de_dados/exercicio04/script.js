/*
Criar um array com três objetos.
Cada objeto deverá ter duas propriedades (nome e email).
Depois mostrar na tela o nome e o email de cada um dos objetos do array criado.
*/
let msg = '';
let cadastro = [
    {nome: 'wile', email: 'wile38@gmail.com'},
    {nome: 'wilian', email: 'wilian289@gmail.com'},
    {nome: 'troncomando', email: 'troncomando@gmail.com'}
];

for(let i = 0; i < cadastro.length; i++){
    msg += 'Nome: ' + cadastro[i].nome + '<br>';
    msg += 'Email: ' + cadastro[i].email + '<hr>';
}

document.querySelector('#output').innerHTML = msg;