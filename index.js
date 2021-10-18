const express = require('express');
const bodyParser = require('body-parser');

const author = require('./controllers/Authors');
const error = require('./middlewares/error');
const app = express();

app.use(bodyParser.json());

app.get('/authors', author.getAll);
app.get('/authors/:id', author.findById);
app.post('/authors', author.create);

app.use(error);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);  
})