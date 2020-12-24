/*
Pedir para o usuário digitar um número e mostrar a tábuada de 1 a 1000
*/
let numerousuario = parseFloat(prompt('Digite um número: '));
let indice = 1

while(indice <= 1001){
    document.write(numerousuario + ' x '+ indice + ' = ' + (numerousuario * indice) +' <br>');
    indice = indice + 1;
}

for(let i  = 1; i <= 1000; i++){
    document.write(numerousuario + ' x '+ i + ' = ' + (numerousuario * i) +' <br>');
}

document.write('Saiu do Loop');