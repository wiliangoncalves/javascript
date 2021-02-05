(function(){
    let dataAtual = new Date();
    dataAtual.setHours(0);
    dataAtual.setMinutes(0);
    dataAtual.setSeconds(0);
    dataAtual.setMilliseconds(0);
    let anoAtual = dataAtual.getFullYear();

    let dataNiver = new Date(anoAtual, 2, 23);

    let dataAtualTS = dataAtual.getTime();
    let dataNiverTS = dataNiver.getTime();

    if(dataNiverTS === dataAtualTS){
        alert('Feliz aniversário!');
        return;
    }

    if(dataNiverTS < dataAtualTS){
        dataNiver.setFullYear(++anoAtual);
    }

    const umDiaTS = 24 * 60 * 60 * 1000;
    let diferenca = dataNiverTS - dataAtualTS;

    console.log(diferenca);
})();