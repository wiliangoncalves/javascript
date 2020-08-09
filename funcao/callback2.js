const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0] // Fazer um array com notas menores que 7.

// Sem callback
const notasbaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasbaixas1.push(notas[i])
    }
}

console.log(notasbaixas1)

// Com callback
const notasbaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasbaixas2)

const notasMenorQue7 = nota => nota < 7
const notasbaixas3 = notas.filter(notasMenorQue7)
console.log(notasbaixas3)