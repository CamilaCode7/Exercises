const modelAuthor = require('../models/Author');

const getAll = async () => modelAuthor.getAll();

const findById = async (id) => modelAuthor.findById(id);

const create = async (firstName, middleName, lastName) => {
  // Buscamos um autor com o mesmo nome completo que pretendo criar
  const existAuthor = await modelAuthor.findByName(firstName, middleName, lastName);
  // Caso esse autor já exista, retorno um objeto de erro informando
  // que não é possível criar o autor pois ele já existe
  if(existAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um autor já existe com esse nome completo',
      },
    };
  }
  // Caso o autor não exista e, portanto, possa ser criado
  // chamo o model e retorno o resultado
  return modelAuthor.create(firstName, middleName, lastName);
}
module.exports = {
  getAll,
  findById,
  create,

};
