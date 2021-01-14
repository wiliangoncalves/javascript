let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

btn2.onclick = clicar;

function clicar(){
    alert('clicou');

    return function(){
        alert('clicou 2');
    }
}

btn3.addEventListener('click', function(){
    alert('clicou com dom level 2.');
});

btn3.addEventListener('click', function(){
    alert('clicou com dom level 2 com outro evento.');
});

btn3.onclick = function(){
    alert('a')
}

btn3.onclick = function(){
    alert('b')
}