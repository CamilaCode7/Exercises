# Exercises
# Desenvolver uma aplicação de busca de CEP, chamada cep-lookup
A aplicação fornecerá um serviço de busca e cadastro de CEPs em um banco de dados. Como bônus, ao invés de cadastrar novos CEPs manualmente, a aplicação consultará uma API externa para obter os dados do CEP desejado.
# Banco de dados MySQL.
* Crie uma nova API utilizando o express
* A aplicação deve ser um pacote Node.js
* Dê ao pacote o nome de cep-lookup
* Utilize o express para gerenciar os.
* endpoints da sua aplicação
* A aplicação deve escutar na porta 3000
* Deve ser possível iniciar a aplicação através do comando npm start .
* Crie o endpoint GET /cep/:cep
* O endpoint deve receber, no parâmetro :cep , um número de CEP válido.
* O CEP precisa conter 8 dígitos numéricos e pode ou não possui traço.
* Caso o CEP seja inválido, retorne o status 400 Bad Request
* Caso o CEP seja válido, realize uma busca no banco de dados.