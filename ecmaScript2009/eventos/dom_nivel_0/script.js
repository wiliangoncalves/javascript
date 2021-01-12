let btn2 = document.querySelector('#btn2');

btn2.onclick = clicar();

function clicar(){
    alert('Clicou');

    return function(){
        alert('Clicou 2');
    }
}