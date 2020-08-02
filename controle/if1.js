function Nota(nota1){
    if(nota1 >= 7){
        console.log('Aprovado com ' + nota1)
    }
}
Nota(8)
Nota(6.1)

function Verdade(valor){
    if(valor){
        console.log('É verdade... ' + valor)
    }
}

Verdade() // Undefined = false
Verdade(null) // false
Verdade(undefined) // false
Verdade(NaN) // false
Verdade('') // false
Verdade(0) // false
Verdade(-1) // True
Verdade(' ') // True
Verdade('?') // True
Verdade([]) // True
Verdade([1, 2]) // True
Verdade({}) // True