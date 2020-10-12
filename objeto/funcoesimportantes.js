const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Chaves de um Objeto
console.log(Object.values(pessoa)) // Pega os valores do Objeto
console.log(Object.entries(pessoa)) // Pega uma lista das chaves e dos valores

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2020'
})

pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Oject.assign (ECMAScript 2015)
const dest  = {
    a: 1
}
const o1 = {
    b: 2
}
const o2 = {
    c: 3, a:4
}
const obj = Object.assign(dest, o1, o2)


Object.freeze(obj)
obj.c = 1234
console.log(obj)