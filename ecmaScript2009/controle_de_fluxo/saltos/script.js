function testeSaltos(){
    for(let i = 0; i < 10; i++){

        if(i === 5){
            continue;
        }
        console.log(i);
    }
    console.log('fim do loop!');
    return 'fim da função';
}
let teste = testeSaltos();
console.log(teste);

let numero = 10;

switch(numero){
    case 0:
        console.log('Swtich 0');
        break;
    case 10:
        console.log('10');
        break;
    case 20:
        console.log('20');
        break;
    case 30:
        console.log('30');
        break;
    default:
        console.log('Padrão!');
}