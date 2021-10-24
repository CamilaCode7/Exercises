# JWT - JSON Web Token. 🔐
O JWT é, definitivamente, uma maneira inteligente de obter, com segurança, a identidade de um usuário!
* O JWT (JSON Web Token) é um token gerado a partir de dados "pessoais" que pode ser trafegado pela internet ao fazer requisições para APIs e afins. Mas atenção: toda a informação que colocamos no JWT é pública , e qualquer pessoa com o token consegue ler essas informações.

# Autenticação e Autorização
Autenticação é usada para atestar que alguém é quem diz ser, verificando sua identidade, comumente feita por meio de informações confidenciais como email e senha. Já a autorização verifica as permissões de uma pessoa para acessar ou executar determinadas operações.

# Entendendo o JWT 🔧

O resultado final do JWT dá-se através da assinatura criptográfica de dois blocos de JSON codificados em base64. Esses dois blocos JSON codificados são o header (cabeçalho) e payload (carga) que mencionamos acima. A signature (assinatura) é a junção dos hashes gerados a partir do header e payload.

# Exercises

Projeto chamado hello-jwt utilizando o comando npm init @tryber/backend hello-jwt.
1 Crie um endpoint POST /login
2 O endpoint deve receber os seguintes dados no corpo da requisição:

3 Caso username e password sejam válidos, retorne um token que atenda às seguintes especificações:
4 Expira em uma hora;
* Contém, no payload, o nome de usuário informado na request;
* Contém, no payload, uma propriedade admin , com o valor false .
4 Para retornar o token, utilize o seguinte formato no corpo da resposta:

5 Para que username seja válido, seu valor precisa ser uma string alfanumérica de, pelo menos, 5 caracteres.
6 Para que password seja válido, seu valor precisa ser uma string de, pelo menos, 5 caracteres.
7 Altere o endpoint POST /login :
8 Caso username seja admin e password seja s3nh4S3gur4??? , a chave admin no payload do token gerado deve ter o valor true
9 Crie o endpoint /GET /users/me
10 O endpoint só pode ser acessado por pessoas autenticadas
11 Para realizar a autenticação, a requisição deve conter o header 12 Authorization , cujo valor deve ser um token válido
13 Caso o token não exista, retorne o status 401 Unauthorized , com o seguinte corpo da resposta: