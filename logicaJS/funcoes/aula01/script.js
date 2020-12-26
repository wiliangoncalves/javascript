let output = document.querySelector('#output');
let mensagem = '';

function mostrarTabuada(){
    //Perguntar o  número para o usuário*
    let numero = Number(prompt('Digite um número: '));

    limparTabuada()
    //Criar uma variável que servira de índice.
    let i = 0;

    //Enquanto índice <= 1000
        //Concatena na variável mensagem.
    while(i <= 10){
        mensagem += numero + ' X ' + i + ' = ' + (numero * i) + '<br>';
        i++
    }

    //Mostra mensagem no output
    output.innerHTML = mensagem;
}

function limparTabuada(){
    mensagem = '';
    output.innerHTML = mensagem;
}