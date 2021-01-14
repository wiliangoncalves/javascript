let $d1 = document.querySelector('#d1');
let $d1Span = document.querySelector('#d1 span');

$d1.addEventListener('click', function(e){
    console.log('click no d1');
    e.stopPropagation();
}, false);

$d1Span.addEventListener('click', function(){
    console.log('click no $d1Span');
}, false);

document.addEventListener('click', function(e){
    console.log('clicou no document');
    console.log(e.currentTarget);
    console.log(this);
    console.log(e.target);
}, false);

let $ul = document.querySelector('ul');
let $lis = document.querySelectorAll('li');

/*for(let i = 0; i < $lis.length; i++){
    $lis[i].addEventListener('click', function(e){
        {e.stopPropagation();
        console.log('clicou na li');
    });
}*/
$ul.addEventListener('click', function(e){
    e.stopPropagation();
    console.log(this);
    console.log(e.currentTarget);
    console.log(e.target);

    console.log(e.target.nodeName);
    if(e.target.nodeName === 'LI'){
        alert('clicou na li');
    }
});