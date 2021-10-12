const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  // createPool cria uma pool de conexões com o banco de dados.
  // Significa que a própria biblioteca irá gerenciar as múltiplas conexões que fizer com o banco.
  host: 'localhost',
  // host : local onde o servidor do MySQL está armazenado.
  user: 'root',
  // user : usuário que vou utilizar para acessar o banco.
  password: '#Dbvfawdi1',
  // senha do usuário especificado
  database: 'model_example'
  // database : nome do banco ao qual queremos nos conectar;
});

module.exports = connection;