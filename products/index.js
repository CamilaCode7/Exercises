const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const router = require('./controllers/productController');

app.use(bodyParser.json());

app.use('/products', router);

const PORT = 8082;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});