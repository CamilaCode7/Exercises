# JWT - JSON Web Token. 🔐
O JWT é, definitivamente, uma maneira inteligente de obter, com segurança, a identidade de um usuário!
* O JWT (JSON Web Token) é um token gerado a partir de dados "pessoais" que pode ser trafegado pela internet ao fazer requisições para APIs e afins. Mas atenção: toda a informação que colocamos no JWT é pública , e qualquer pessoa com o token consegue ler essas informações.

# A coisa toda funciona assim:

* O navegador solicita que o usuário digite seu login e senha.
* O navegador então envia esse login e senha ao servidor, para verificar que esses dados estão corretos.
* Uma vez que valida login e senha, o servidor cria dois objetos: um contendo informações sobre o token que será gerado, que chama header , e outro contendo os dados do usuário e as permissões que aquela pessoa têm, ao qual chama payload .
* O servidor então converte esses dois objetos em JSON, junta-os em uma mesma string e utiliza um algoritmo chamado HMAC para "criptografar" essa string usando um "segredo" que só ele sabe, gerando o que chamado de assinatura , que nada mais é do que Header + Payload criptografados.
* Por fim, o servidor combina o header, o payload originais e a assinatura, criando assim o token
* O token é enviado ao cliente, que o armazena para utilizá-lo nas próximas requisições

O JWT também é usado para autorização, quando necessario fazer o processo de atestar as permissões de uma pessoa usuária que deseja acessar uma rota ou recurso protegido. Isso exige o envio do token, normalmente no header Authorization, a partir do qual são acessadas as informações necessárias para a verificação.

# Autenticação e Autorização
Autenticação é usada para atestar que alguém é quem diz ser, verificando sua identidade, comumente feita por meio de informações confidenciais como email e senha. Já a autorização verifica as permissões de uma pessoa para acessar ou executar determinadas operações.

# Entendendo o JWT 🔧

O resultado final do JWT dá-se através da assinatura criptográfica de dois blocos de JSON codificados em base64. Esses dois blocos JSON codificados são o header (cabeçalho) e payload (carga) que mencionamos acima. A signature (assinatura) é a junção dos hashes gerados a partir do header e payload.

# Header
O Header contém duas propriedades: o tipo do token, que é JWT, e o tipo do algoritmo de hash , como HMAC-SHA256 ou RSA :
  {
    "alg": "HS256",
    "typ": "JWT"
  }

# Payload (dados do usuário)
Esta é a segunda parte do token, que contém os "dados". Esses "dados" são declarações sobre uma entidade (geralmente, o usuário):
  {
    "sub": "1234567890",
    "name": "John Doe",
    "admin": true
  }