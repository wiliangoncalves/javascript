/// estrategia 1 para gerar valor padrão.
function soma1(a, b, c){
    a = a || 1 // Se for FALSO vai pegar o 1.
    b = b || 1 // Se for FALSO vai pegar o 1.
    c = c || 1 // Se for FALSO vai pegar o 1.
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão.
function soma2(a, b, c){
    a = a !== undefined ? a : 1 // Se a for diferente de undefined ele vai pegar o pŕoprio valor de a, caso contrário ele pega 1.
    b = 1 in arguments ? b : 1 // Dentro de argument existe o índice 1, se existir pegue o valor de b, se não pegue o valor 1.
    c = isNaN(c) ? 1 : c // Se c is not a number retorne o valor padrão 1, caso seja number retorne o valor de c.
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do EcmaScript 2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))