const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controllerBooks');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.get('/book', controller.findBook);
app.get('/book/:id', controller.getById);
app.post('/book', controller.create);
app.put('/book/:id', controller.update);
app.delete('/book/:id', controller.deleta);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);  
});
