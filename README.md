# ORM: Associations

## Relacionamentos 1:1
Os métodos de criação de associações que o sequelize disponibiliza são:
* hasOne
* belongsTo
* hasMany
* belongsToMany
No caso de relacionamentos 1:1, utilizamos os métodos hasOne e belongsTo. A tradução literal desses métodos facilita o seu entendimento.

> `hasOne` = tem um

> `belongsTo` = pertencente a

## Validando relacionamentos 1:1

validar o relacionamento, para isso precisa criar seeders para inserir dados nas tabelas e um servidor para responder as requisições.
A grande diferença quando vamos fazer uma requisição que necessite da utilização de uma association com o Sequelize, é o campo include . Esse campo diz ao Sequelize quais serão as configurações da requisição. A propriedade model se refere a qual tabela será utilizada. Já a propriedade as deve ser igual ao que declaramos no momento da criação da associação no respectivo model

## Relacionamentos 1:N
No caso dos relacionamentos 1:N , não há grande diferença na maneira como criamos as associações. Caso cada employee possuísse vários address , bastaria declarar seu model 
> `hasMany `: tem muitos

## Eager Loading

Esse método carrega todos os dados na mesma request. Logo, ao utilizar eager loading , todas as informações são trazidas, independente se vamos usá-las ou não. Este modo é útil para cenários em que sabemos, já de antemão, que sempre vamos precisar de todos os dados das entidades envolvidas.

## Lazy Loading

Agora vamos ver como funciona a outra forma de carregar dados de associações: o lazy loading . Esse método consiste, basicamente, em não especificar uma propriedade includes no momento de realizar a query no banco. Dessa forma, cria-se a possibilidade de termos dois usos para o mesmo endpoint.
Para utilizarmos duas ações diferentes em um endpoint, iremos usar a query string `includeAddresses` , na qual, caso o parâmetro dela seja true os endereços daquele funcionário também serão retornados.

## Relacionamentos N:N
Nos relacionamentos N:N, existem algumas significativas diferenças ao se criar as associações. Esse tipo de relacionamento pode ser visto também como dois relacionamentos um para muitos (1:N) ligados por uma tabela intermediária, chamada de tabela de junção , ela guarda as informações de como as tabelas se relacionam entre si.

temos um novo tipo de relacionamento: o `belongsToMany` . Esse relacionamento cria um relacionamento do tipo N:N, utilizando o model especificado na opção `throug`h como tabela de associação. Temos também o alias daquela associação, na chave as e, por último, temos os parâmetros `foreignKey` e `otherKey` . Esses dois parâmetros dizem ao Sequelize qual campo utilizar na tabela de associação para identificar cada uma das entidades.