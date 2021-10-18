const express = require('express');
const bodyParser = require('body-parser');
const cepController = require('./controllers/cepController');

const app = express();
app.use(bodyParser.json());

app.get('/cep/:cep', cepController.getAllCep);
app.post('cep', cepController.create);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);  
});