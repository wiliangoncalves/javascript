function inteiro(min, max){
    const valor = Math.random() * (max - min) + min // Se for 0 vai dar o MIN se for mais vai dar o máximo.
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = inteiro(-1, 10) // Se o valor for -1 ele sai do laço, se for outro ele continua no laço.
    console.log(`Opcao escolhida foi ${opcao}`)
}

console.log('Fim!')