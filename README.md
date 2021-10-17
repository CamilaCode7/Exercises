# As camadas de Controller e Service
Essas duas camadas são, respectivamente, responsáveis por (1) receber e tratar os dados da requisição e (2) aplicar as regras de negócio da aplicação antes que qualquer comunicação com o banco seja realizada. Dessa forma, o Model precisa fazer menos coisas, o que quer dizer que terei uma arquitetura que delimita mais as responsabilidades de cada camada, de forma que, caso precise alterar uma parte do código, a quantidade de lugares em que precisare mexer é menor, visto que camada tem sua responsabilidade bem delimitada.

# A camada dos Controllers
A camada dos controllers é a primeira camada numa API. É nela onde os dados da requisição serão recebidos e tratados, pra depois serem passados para as próximas camadas.
O controller recebe as requisições e então consulta o service , enviando na resposta aquilo que o service retornar, que pode ser uma mensagem de erro, em caso de falha, ou as informações pedidas, em caso de sucesso.

# A camada dos Services
Ela fica situada entre as camadas de controller e model e é responsável pela lógica de negócio. O modelo, então, passa a ser responsável somente pelo acesso a dados.
Uma boa camada de serviço:
 * Deve centralizar acesso a dados e funções externas. Exemplo: chamar um evento que dispara uma
 mensagem no Slack;
 * Deve abstrair lógica de negócio complexa do seu modelo;
 * Não deve ter nenhum tipo de informação sobre o acesso a camada de dados. Exemplo: não ter nenhuma query SQL;
 * Não deve receber nada relacionado ao HTTP, seja o request ou o response . O controller deve mandar apenas o necessário para o service .