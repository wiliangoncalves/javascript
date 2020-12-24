/*
Pedir para o usuário digitar um número e mostrar a tábuada de 1 a 1000.
Inserindo uma linha divisória sempre que mudar a dezena. Ou seja, entre 10 e o 11, entre o 20 e o 21 e assim por diante.
Utilizar o <hr>
*/
let usuarionumero = Number(prompt('Digite um número: '));

for(let i = 0; i <= 1000; i++){
    document.write(`${usuarionumero} X ${i} = ${usuarionumero * i} <br>`)

    if(i % 10 === 0 && i > 0){
        document.write('<hr>')
    }
}
document.write('Saiu do loop');