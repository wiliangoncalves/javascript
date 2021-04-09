// ES8: Object.value/Object.entries.
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na Notação Literal.
const nome = 'Carla';
const pessoa = {
    nome,
    ola(){
        return 'Função no objeto';
    }
}

console.log(pessoa.nome, pessoa.ola());

// Class.
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Doge';
    }
}

console.log(new Cachorro().falar());