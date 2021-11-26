const bodyParser = require('body-parser');
const express = require('express');
const product = require('./controller/productController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use('/product', product);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);  
});
