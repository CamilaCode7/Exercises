const connection = require('../infraestrutura/connectionMongo');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return connection()
      .then((db) => db.collection('authors').find().toArray())
      .then((authors) =>
          authors.map(({ _id, firstName, middleName, lastName }) =>
          getNewAuthor({
            id: _id,
            firstName,
            middleName,
            lastName,
        })
      )
  );
}
// O método getAll continua funcionando de forma parecida. Ela busca no banco todos os escritores, faz um mapeamento para 
// o formato de objeto definido para Author e retorna uma Promise . A diferença é que, como agora esta usando o MongoDB
// muda a forma de recuperar os dados. A diferença foi do id para _id , e que mudei o destructure utilizado no authors.map
// para utilizar um destructure de objeto, ao invés de um destructure de array. Fiz isso porque o MongoDB não devolve um 
// Array de colunas como o MySQL , e sim um objeto para cada documento encontrado.

const findById = async (id) => {
  if(!ObjectId.isValid(id)) return null;
  // a função isValid do ObjectId verifica o id informado, caso não seja um ObjectId válido do MongoDB, ira dar um erro ao fazer new Object(id)
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));
    // ou findOne({ _id: new ObjectId(id) })
  if (!authorData) return null;
  
  const { firstName, middleName, lastName } = authorData;
  return getNewAuthor({ id, firstName, middleName, lastName });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => 
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertId, firstNamem, middleName, lastName }));
    
module.exports = {
  getAll,
  findById,
  isValid,
  create,
}