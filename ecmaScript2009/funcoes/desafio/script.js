/*
Crie uma função que retorne o índice de massa corporal(IMC);
Crie uma outra função que receba este índice e retorne uma string informando sua classificação.

IMC = peso / altura ao quadrado

Muito abaixo do peso = 16 a 16,9kg/m2
Abaixo do peso = 17 a 18,4kg/m2
peso normal = 18,5 a 24,9kg/m2
acima do peso = 25 a 29,9kg/m2
obesidade grau I = 30 a 34,9kg/m2
obesidade grau II = 35 a 40kg/m2
obesidade grau III = maior que 40kg/m2
*/
(function(){
    function calcularIMC(peso, altura){
        return peso / (altura * altura);
    }

    function classificarIMC(imc){
        if(imc <= 16.9){
            return 'Muito abaixo do peso.';
        } else if(imc <= 18.4){
            return 'Abaixo do peso';
        } else if(imc <= 24.9){
            return 'Normal';
        } else if(imc <= 29.9){
            return 'Acima do preso';
        } else if(imc <= 34.9){
            return 'Obesidade grau I';
        } else if(imc <= 40){
            return 'Obesidade grau II';
        } else{
            return 'Obesidade grau III';
        }
    }

    let peso = 65;
    let altura = 1.75;
    let imc = calcularIMC(peso, altura);
    let classificacao = classificarIMC(imc);

    console.log('Classificação IMC:', classificacao);
})()