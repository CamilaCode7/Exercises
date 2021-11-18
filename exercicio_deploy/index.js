const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`id = ${process.pid}`)  
});

app.get('/break', (req, res) => {
  res.send('Quebrando...');

  process.exit(1);
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Porta rodando na ${PORT}`);  
});