let arr = ['1',20,1,2,3,4,5, 'mundo', 20, '30'];

let soNumeros = arr.every( function(elemento){
    
    return typeof elemento === 'number';
} );
console.log(soNumeros);

let aoMenosUmNumero = arr.some( function(elemento){
    return typeof elemento === 'number';
} );
console.log(aoMenosUmNumero);

let numeros = arr.filter( function(elemento, indice, vetor){
    return typeof elemento === 'number';
} );
console.log(numeros);

arr.forEach( function(elemento, indice, vetor){
    console.log('elemento=', elemento, '| indice=', indice,'|' +  arr.toString());
} );

let posicaoStr1 = arr.indexOf('mundo', 6);
console.log(posicaoStr1);

let posicaoStr2 = arr.lastIndexOf(20);
console.log(posicaoStr2);

console.log(numeros);

numeros = numeros.map( function(elemento, indice, vetor){
    return elemento * indice;
} );
console.log(numeros);

let arr2 = arr.concat(numeros, 'olá', 'mundo');
console.log(arr2);

let str = arr2.join(' - ');
console.log(str);

arr.push('novo item', 'item');
console.log(arr);

let ultimoItem = arr.pop();
console.log(ultimoItem);
console.log(arr);

let primeiroItem = arr.shift();
console.log(primeiroItem);
console.log(arr);

arr.unshift(true, false, 'unshift');
console.log(arr);

let somaDeArr = numeros.reduce( function(anterior, atual, indice){
    console.log('anterior', anterior, '|', 'atual', atual, 'indice', indice)
    return anterior + atual;
}, 1);
console.log(numeros);
console.log(somaDeArr);

let testeReduce = ['1', '2', '3', '4', '5'].reduceRight( function(inicial, atual){
    return inicial + atual;
} );
console.log(testeReduce);


let arr3 = [10, 20, 30];
arr3.reverse();
console.log(arr3);

console.log(arr2.slice(2, 5));

console.log('-------------------');

console.log(arr2);
arr2.splice(5, 2, 'wile', 'alinsky');
console.log(arr2);