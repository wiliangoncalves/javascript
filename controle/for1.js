let contador = 1
while(contador <= 10){
    console.log(`Contador = ${contador}`)
    contador++
} // Simulando um laço DETERMINADO de repetições.

for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] 
for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}
// Começe apartir do zero, vá até o i menor que o tamanho do array e acrescente 1 unidade ao i a cada interação.