(function(){
    let dataAtual = new Date();
    dataAtual.setDate(2);
    dataAtual.setMonth(2);

    function formatDate(dataAtual){
        let dia = dataAtual.getDate() < 10 ? '0' + dataAtual.getDate() : dataAtual.getDate();
        let mes = dataAtual.getMonth() + 1;
        mes = mes < 10 ? '0' + mes : mes;

        return dia + '/' + mes + '/' + dataAtual.getFullYear();
    }

    console.log(formatDate(dataAtual));
})();