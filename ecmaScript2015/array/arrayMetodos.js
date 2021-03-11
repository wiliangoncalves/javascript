const pilotos = ['Vettel', 'Alonso', 'Reikkonen', 'Massa'];
pilotos.pop(); //Massa quebrou o carro!
console.log(pilotos);

pilotos.push('Vestappen');
console.log(pilotos);

pilotos.shift(); // remove o primeiro!
console.log(pilotos);

pilotos.unshift('Krosis'); // Coloca no inicio!
console.log(pilotos);

// Splice pode adicionar e remover elementos.

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');

//Remover
pilotos.splice(3, 1); // Massa saiu de novo!
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Novo array a partir de um índice X.
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // Pega índice 1 até o 3.
console.log(algunsPilotos2);