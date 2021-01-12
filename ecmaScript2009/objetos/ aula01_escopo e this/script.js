/*
Construtores Funções que geram novas instâncias.
*/
let hoje = new Date();

let x = [0];

function mudaArr(x){
    //debugger;
    let y = x;
    y.push(2);
    x.push(3);
}

mudaArr(x);

console.log('x:', x);
console.log(x);

console.log('----------');
let n = 0;

function mudaN(n){
    let n2 = n;
    console.log(++n2);
}
mudaN(n);
console.log(n);

console.log('-------------');

function mudaCor(cor){
    console.log(this);
    this.cor = cor;
}

let caneta1 = {
    cor: 'red',
    preco: 1,
    mudarCor: mudaCor
}

let caneta2 = {
    cor: 'azul',
    preco: 2,
    mudarCor: mudaCor
}

caneta1.mudarCor('green');
console.log(caneta1);
console.log(caneta2);