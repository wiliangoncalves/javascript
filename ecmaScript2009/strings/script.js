(function(){
    let nome = 'Wilian Alinsky';
    let nomeFormatado = formatarNome(nome);     

    function formatarNome(nome){
        let posicaoUltimoEspaco = nome.lastIndexOf(' ');
        if(posicaoUltimoEspaco <= 0){
            return nome;
        }

        let ultimoNome = nome.slice(posicaoUltimoEspaco + 1); 
        console.log('UltimoNome', ultimoNome);

        let primeiroNome = nome.slice(0, posicaoUltimoEspaco);
        console.log('Posição último espaço', posicaoUltimoEspaco);

        return ultimoNome +', ' + primeiroNome;
    };

    console.log(nomeFormatado);
})();