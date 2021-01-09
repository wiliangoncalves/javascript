let msg = '';
let produto1 = new Object();

produto1.nome = 'caneta';
produto1.preco = 2.2;
produto1.estoque = 10;

produto1.comprar = function(quantidade){
    if(!quantidade){
        quantidade = 1;
    };
    console.log('Comprou caneta');
    //this.estoque--;
    this.estoque = this.estoque - quantidade;
    console.log(this.estoque);
};

msg += 'Nome: ' + produto1.nome + '<br>';
msg += 'Preço: ' + produto1.preco + '<br>';
msg += 'estoque' + produto1.estoque + '<br>';

document.querySelector('#output').innerHTML = msg;