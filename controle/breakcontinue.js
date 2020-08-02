const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in num){
    if(x == 5) {
        break // Não age sobre o IF, ele age no bloco mais PRÓXIMO do tipo FOR, WHILE ou SWITCH.
    }
    console.log(`${x} = ${num[x]}`)
}

for(let y in num){
    if(y == 5){
        continue // Age SOMENTE nos laços do tipo FOR e WHILE. Quando chegar no 5 ele vai interromper e ir para a próxima execussão.
    }
    console.log(`${y} = ${num[y]}`)
}

externo: for(let a in num){
    for(let b in num){
        if(a == 2 && b == 3) break externo // Vai agir no laço mais EXTERNO com o RÓTULO.
            console.log(`Par = ${a}, ${b}`)
    }
}