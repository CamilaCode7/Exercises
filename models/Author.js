const connection = require("../infraestrutura/connection");

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
  return { id, firstName, middleName, lastName, name: fullName };
}; // cria uma string com nome completo do autor.

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name
}); // Converte os campos de snake_case para camelCase.

const getAll = async () => {
  const [authors] = await connection.execute(
  // método execute => Utilizado para fazer uma query mysql. *Desconstruido essa resposta utilizando [authors]
  // Esse método retorna uma Promise que quando resolvida, fornece um array com 2 campos: [rows, fields]
  // O primeiro index é onde está a resposta que quero (no caso o Authors)   
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
  );
  return authors.map(serialize).map(getNewAuthor);
} // Busca todos os autores do banco.

const findById = async (id) => {
  const query = 'SELECT * FROM model_example.authors WHERE id = ?';
  // substitui o id por ?, e depois de executá-la, informar um array com o id para o método `execute.`
  // `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
  const [authorData] = await connection.execute(query, [id]);
  if (authorData.length === 0) return null;

  // // Utilizo [0] para buscar a primeira linha,
  const { firstName, middleName, lastName } = serialize(authorData[0]);
  return getNewAuthor({ id, firstName, middleName, lastName })
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
}; // isValid é uma função que retorna um boolean indicando se os dados são válidos, checando se firstName e lastName são strings não vazias,
   // e se middleName , caso seja informado, é uma string. create é uma função que recebe firstName, middleName e lastName e salva um autor no banco.

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);


module.exports = {
  getAll,
  findById,
  isValid,
  create,
}
