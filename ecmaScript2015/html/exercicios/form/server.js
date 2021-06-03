const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.post('/usuarios', (req, res) => {
	console.log(req.body);
	console.log(req.query);

	res.send('Parabéns usuário incluido!');
});

app.post('/usuarios/:id', (req, res) => {
	console.log(req.params.id);

	res.send('Parabéns usuário alterado!');
});

app.listen(3003, () => {
	console.log('Servidor Online na porta: 3003');
});
