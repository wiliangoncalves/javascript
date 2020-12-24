/*
Mostre na tela todos os anos a partir de 1004 até o ano 2017, pulando de quatro em quatro anos.
*/
let ano = 1004;

while(ano <= 2020){
    if( !(ano % 100 === 0) || (ano % 400 === 0)){
        document.write(ano + '<br>')
    }else{
        document.write(ano + ' Não é bissexto <br>')
    }

    ano += 4;
}