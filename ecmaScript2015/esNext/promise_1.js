let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

p
    .then(valor => valor[0])
    .then(valor => console.log(valor))