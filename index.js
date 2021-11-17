const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
    res.send('Me first deploy-process-managers')  
});

app.listen(port);
console.log(`Server started on ${port}`);