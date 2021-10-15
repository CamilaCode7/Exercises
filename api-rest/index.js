const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/controller')
const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', controller);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});