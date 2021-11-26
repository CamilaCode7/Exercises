## ORM - Interface da aplicação com o banco de dados

Mapeamento objeto-relacional ou ORM ( Object Relational Mapper ) é uma técnica/camada de mapeamento que permite fazer uma relação de estruturas de dados da nossa aplicação com os dados do banco de dados que as mesmas representam. O mapeamento objeto-relacional abstrai as diferenças entre os dois paradigmas, da aplicação e do banco de dados.

## Mapeamentos
No mercado, existem dois padrões que são mais utilizados para realizar os mapeamentos. Esses padrões são o Data Mapper e o Active Record . Ambos os padrões foram definidos por Martin Fowler em seu livro Padrões de Arquitetura de Aplicações Corporativas.

### Data Mapper
Nesse padrão, a classe que representa a tabela do banco de dados não deve conhecer os recursos necessários para realizar as transações com o banco de dados.

### Active Record
Diferentemente do anterior, a classe que representa a tabela conhece os recursos necessários para realizar as transações no banco de dados.

## Sequelize
Sequelize, que segue a linha Active Record, juntamente com uma aplicação simples Node.js . Para banco de dados iremos utilizar o MySQL. Vale ressaltar que a maioria dos métodos fornecidos pelo Sequelize são assíncronos e, portanto, retornam promises . Podemos usar then , catch etc. para tratar os retornos. Ou podemos utilizar, também, async e await .
O fluxograma abaixo mostra as etapas para a implementação do Sequelize no seu projeto. Pode parecer um processo complexo, mas esta biblioteca ORM possui muitas vantagens sobre a utilização de uma interface direta com o MySQL. O JavaScript sozinho não possui um suporte eficiente para o SQL, afinal, você precisa de um script SQL separado para criar seu database e tabelas, sem falar que as queries SQL precisam ser incorporados ( "embedados" ) no código do JavaScript para serem utilizadas. No final, estamos apenas incluindo boilerplates de SQL em vez de utilizar a Lógica de Negócio na nossa aplicação.

# Configurando o Sequelize

### Para começar, vamos iniciar uma aplicação Node.js e instalar o Sequelize

```
  mkdir app-with-sequelize && cd app-with-sequelize
  npm init -y
  npm install sequelize
  npm install sequelize-cli
  npm install mysql2  
```

## Inicializar o Sequelize
```
px sequelize-cli init
```
## Esse comando irá criar as seguintes pastas:
* config : contém um arquivo de configuração, que "fala" para o CLI como conectar-se com o nosso banco de dados;
* models : contém todos os modelos da nossa aplicação;
* migrations : contém todos os arquivos de migração da nossa aplicação;
* seeders : contém todos os arquivos de "seeds".

# Criando o banco usando o CLI do Sequelize
Agora que iniciamos uma aplicação do sequelize, podemos criar o banco de dados orm_example que nomeamos no arquivo config.json através deste comando
```
npx sequelize db:create
```

## Model
dentro da pasta models criada, existe um arquivo index.js . Este arquivo é gerado automaticamente pelo sequelize e possui um papel muito importante: estabelecer uma instância de conexão entre os arquivos presentes na pasta model e o banco de dados relacional utilizado. Não apague este arquivo, ele é necessário para a operação do sequelize.
Os models são a essência do Sequelize. Um model é uma abstração que representa uma linha na tabela em seu banco de dados e diz ao Sequelize várias coisas sobre essa entidade, como o nome da tabela no banco de dados e quais colunas ela possui (e seus tipos de dados). O model pode ser definido de duas formas:
* Chamando pela função sequelize.define(modelName, attributes, options)
* Estendendo Model como uma classe e chamando init(attributes, options).
#### Para criar um model, usamos o seguinte comando no CLI
```
 npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string
```

Além de gerar o model, ele também gera uma migration que irá criar a tabela no banco de dados. Não se preocupe, vamos aprender sobre as migrations no próximo tópico. Observe que passamos dois parâmetros para o comando:
* O parâmetro --name se refere ao nome da tabela, mas no singular, pois se refere a uma unidade dos dados, como uma linha no banco ou um objeto no seu código javascript;
* O parâmetro --attributes se refere ao nome das colunas e os tipos de dados que ela contém. Não é preciso definir todas as colunas neste comando, é possível adicioná-las direto no arquivo model.js gerado e na migration equivalente a este model.
## Migrações
Uma migration é uma forma de versionar o schema do banco de dados, ou seja, cada migration conterá um pedaço de código que representa, no conjunto, todas as alterações feitas no histórico do nosso banco de dados.
Usando migrations, o mapeador objeto-relacional sabe exatamente quais alterações executar no banco de dados, tanto para criar algo novo quanto para restaurar o banco para uma versão mais antiga. Além disso, uma migration tem dois códigos conhecidos como Up e Down . Ou seja: toda migration, além de saber o que fazer para executar as mudanças no banco de dados ( Up ), também deve saber como reverter essas mudanças ( Down ). Isso significa que as migrations têm o poder de avançar ou reverter o seu banco de dados para qualquer um dos estados que ele já teve.

Com a migration criada, basta executarmos pelo CLI:
```cmd
  npx sequelize db:migrate
``` 
Caso queira reverter uma migration
```cmd
  npx sequelize db:migrate:undo
``` 
### Criando uma nova migration para alterar uma tabela já existente
```
npx sequelize migration:generate --name add-column-phone-table-users
```
## Seeders
um seeder é usado para, basicamente, alimentar o banco de dados com informações necessárias para o funcionamento mínimo da aplicação.

Primeiramente vamos precisar executar pelo CLI a criação de um novo seed:
```
 npx sequelize seed:generate --name users
```

Na função do './seeders/20211126192844-users.js',esta sendo utilizando o parâmetro recebido pela função `queryInterface` para conversar com o banco de dados. Dessa forma conseguimos inserir os dados que queremos. Estamos adicionando os dados, que estão na estrutura de uma array de objetos, na tabela Users . O queryInterface tem a função `bulkInsert` , a qual estamos utilizando, que insere múltiplos dados na tabela.

Para executar o seed, basta rodarmos o comando
```
 npx sequelize db:seed:all
```
E para reverter
```
npx sequelize db:seed:undo:all
```