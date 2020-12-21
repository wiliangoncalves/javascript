/*
Fazer jogador1 digitar um número
fazer jogador2 digitar outro número
Se forem iguais, mostrar mensagem 'emptate' e encerrar programa
se forem diferentes, sortear um número entre 0 e 1. Se o número sorteado for 0, ganha quem escolher o número MENOR, se não, ganha quem escolheu o MAIOR.
*/
let jogador1 = parseInt(prompt('Jogador1: Digite um número'));
let jogador2 = parseInt(prompt('Jogador2: Digite outro número'));
let sorteio = Math.floor(Math.random() * 2);

if(jogador1 === jogador2){
    alert('Vocês empataram');
} else{
    if(sorteio === 0){
        if(jogador1 < jogador2){
            alert('Ganhou o jogador1');
        }else{
            alert('Ganhou o jogador2');
        }
    }
    else{
        if(jogador1 > jogador2){
            alert('Ganhou o jogador1')
        }else{
            alert('Ganhou o jogador2')
        }
    }
}