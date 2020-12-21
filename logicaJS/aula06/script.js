/*
Pedir para o usuário digitar um número de 1 a 6.
Mostrar na tela uma mensagem diferente para cada número
*/

let usuarionumero = parseInt(prompt('Digte um número de 1 a 6: '));

switch(usuarionumero){
    case 1:
        alert('Está longe.')
        break
    case 2:
        alert('Ainda longe.')
        break
    case 3:
        alert('Está chegando perto.')
        break
    case 4:
        alert('Continue assim.')
        break
    case 5:
        alert('Falta pouco.')
        break
    case 6:
        alert('Chegou ao fim, parabéns!')
        break
    default:
        alert('Por favor, digite um número de 1 a 6')
};