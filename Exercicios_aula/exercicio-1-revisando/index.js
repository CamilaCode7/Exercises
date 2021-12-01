const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller/joke');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/joke', controller.getJokes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);  
});