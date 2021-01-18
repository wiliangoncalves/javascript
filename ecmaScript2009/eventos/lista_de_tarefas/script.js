(function(){
    'use strict'

    let $ul = document.querySelector('ul');
    let $lis = $ul.querySelectorAll('li');
    let $txtTask = document.querySelector('#txtTask');
    let $btn = document.querySelector('#btn');

    $txtTask.focus();

    $btn.addEventListener('click', addTask);

    $txtTask.addEventListener('keyup', function(e){
        if(e.keyCode === 13){
            addTask();
        }
    });

    $ul.addEventListener('click', function(e){
        if(e.target.nodeName === 'LI'){
            removeTask(e.target);
        }
    });

    function removeTask(li){
        if(confirm('Deseja realment excluir a terefa: \n'+li.textContent +' ?')){
            li.parentNode.removeChild(li);
        }
    }

    function addTask(){
        let li = document.createElement('li');
        let text = document.createTextNode($txtTask.value);

        li.appendChild(text);
        $ul.appendChild(li);

        $txtTask.value = '';
        $txtTask.focus();
    }
})();