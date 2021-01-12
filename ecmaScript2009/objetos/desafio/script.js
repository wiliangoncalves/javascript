/*
Criar um array com 3 objetos. Pessoa1, pessoa2 e pessoa3, com nome e sobrenome.
Mostrar no console o nome e o sobreniome dos objetos.
*/

let pessoas = [
    pessoa1 = {
        nome: 'leandro',
        sobrenome: 'marcelo'
    },

    pessoa2 = {
        nome: 'sandro',
        sobrenome: 'lima'
    },

    pessoa3 = {
        nome: 'douglas',
        sobrenome: 'morais'
    }
]

for(let i = 0; i < pessoas.length; i++){
    console.log(`Nome: ${pessoas[i].nome} ${pessoas[i].sobrenome}`);
}