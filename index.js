const express = require('express');
const bodyParser = require('body-parser');
const router =require('./router/router');
const routerMongo = require('./router/routerMongo');
const routerBook = require('./router/routerBook');

const app = express();
app.use(bodyParser.json());

app.use('/authors', router);
app.use('/author', routerMongo);
app.use('/book', routerBook);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);  
});