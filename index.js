const express = require('express');

const randomHexColor = require('random-hex-color')();

const app = express();

const port = process.env.PORT || 3002;

app.get('/', (_req, res) => {
  res.type('text/html')
  res.send(
    `<body style="background-color: ${randomHexColor}">
      <h1>A aplicação esta rodando no processo de id ${process.pid}!</h1>
    </body>`
  );
});

app.get('/hello', (_req, res) => {
  res.send(`Meu id é ${process.pid}`)  
});

app.listen(port);
console.log(`Server started on ${port}`);