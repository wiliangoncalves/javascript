(function(){
    let $relogio = document.querySelector('.relogio');

    function getHour(){
        let data = new Date();
        let hora = formata(data.getHours());
        let minuto = formata(data.getMinutes());
        let segundos = formata(data.getSeconds());

        return hora + ':' + minuto + ':' + segundos;
    }

    function formata(tempo){
        return tempo < 10 ? '0' + tempo : tempo;
    }

    function mostraRelogio(atual){
        $relogio.textContent = atual;
    }

    mostraRelogio(getHour())

    setInterval(function(){
        mostraRelogio(getHour());
    }, 1000)
})();