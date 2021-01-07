/*
Mostrar na tela todos os produtos disponíveis para comprar.
Os nomes dos produtos estão agrupados em um array.
*/
let produtos = new Array('caneta', 'lapis', 'tesoura', 'borracha', 'caderno', 'livro');
let output = document.querySelector('#output');
let msg = '';

produtos.push('compasso', 'cartolina');

for(let i = 0; i < produtos.length; i++){
    msg += 'produto: ' + (i + 1) + ': ' + produtos[i] + '<br>';
}

output.innerHTML = msg;