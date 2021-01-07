/*

*/
let dias = new Array('domingo', 'segunda', 'terça', 'quarta', 'quinta feira', 'sexta', 'sábado');
let hoje = new Date();
let diaSemana = hoje.getDay(); //Retorna o dia da semana
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sábado
*/
alert('Bem vindo hoje é ' + dias[diaSemana]);