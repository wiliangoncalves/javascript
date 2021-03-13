const moduloA = require('../../moduloA');
console.log(moduloA.ola);

const c = require('./pastaC');
console.log(c);

const http = require('http');
http.createServer((req, res) => {
    res.write('Hello world!');
    res.end();
}).listen(8080);