# Sequelize - Products

Para começar, vamos iniciar uma aplicação Node.js e instalar o Sequelize

```
  mkdir products && cd products
  npm init -y
  npm install sequelize
  npm install sequelize-cli
  npm install mysql2 express body-parser dotenv
```  

Inicializar o Sequelize

```
  npx sequelize-cli init
```
Criando o banco usando o CLI do Sequelize

```
  npx sequelize db:create
```