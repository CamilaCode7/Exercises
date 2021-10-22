const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller');
const controllerMongo = require('./controllers/controllerMongo');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', controller);

app.get('/products2', controllerMongo.getAll);
app.get('/products2/:id', controllerMongo.getById);
app.post('/products2', controllerMongo.create);
app.put('/products2/:id', controllerMongo.update);
app.delete('/products2/:id', controllerMongo.deleta);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});