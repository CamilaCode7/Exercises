const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

/* Crio um stream de um arquivo */
const stream = fs.createReadStream('./meu-arquivo.txt');

/* Aqui, crio um formulário com um campo chamado 'file' que carregará o stream do arquivo */
const form = new FormData();
form.append('file', stream);


const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3000/files/upload', form, {
    headers: {
      ...formHeaders,  
    }, 
  })
  .then((response) => {
    console.log(response.status);  
  })
  .catch((error) => {
    console.error(error);
  });