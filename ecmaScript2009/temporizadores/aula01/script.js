(function(){
    let n = 0;

    function somaUm(){
        console.log('n', ++n);

        if(n >= 5){
            clearInterval(intervalo);
        }
    }

    let timeout = setTimeout(somaUm, 1000);

    alert(timeout);

    let intervalo = setInterval(somaUm, 5000);

    console.log(intervalo);

    let str = '';
    let div = document.querySelector('div');
    /*let timeoutTEste = setTimeout(function(){
        for(let i = 0; i < 1000; i++){
            str += 'i: ' + i + ' -- ';
            div.textContent += str;
        }
    }, 3000);;*/
})();