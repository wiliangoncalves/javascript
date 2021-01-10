/*
Criar uma função que retorne a média de números passados por parâmetros.
Essa função pode receber quantos números forem necessários. Exemplo:
calcularMedia(2, 4); // 3
calcularMedia(1, 1, 2, 3, 5); // 2,4
*/
(function(){
    function calcularMedia(){
        let total = 0;
        let quantidade = arguments.length;
        let x = 0;

        while(typeof arguments[x] === 'number'){
            total = total + arguments[x];
            x++;
        }

        return total / quantidade;
    };
    let media1 = calcularMedia(2, 3);
    let media2 = calcularMedia(4, 0, 10, 10);

    console.log('Média1:', media1, 'Média2:', media2);
})()