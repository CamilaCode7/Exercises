# Upload de arquivos com multer e Express
# multer
A funcionalidade é, em suma interpretar dados enviados através do body da requisição. O multer suporta requests no formato conhecido como Form Data. Enquanto o body-parser suporta requests nos formatos JSON.

# multipart/form-data

Este é um formato bem antigo, pensado para suportar todas as operações suportadas pela tag <form> do HTML. Sendo assim, pode transmitir dados comuns, como strings, booleans e números, mas também pode transmitir arquivos. Dessa forma, o body de uma request com formato Form Data pode ter vários campos (assim como um JSON), e cada campo pode ter o tipo número, boolean, string, ou arquivo .