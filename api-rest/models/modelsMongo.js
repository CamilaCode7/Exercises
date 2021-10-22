const connection = require('../infraestrutura/connectionsMongo');
const { ObjectId } = require('mongodb');

const getAll = async () => {
  const products = await connection().then((db) => 
    db.collection('products').find().toArray());
  if (!products) return null;
  console.log(products); 
  return products;  
};
const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  await connection().then((db) =>
    db.collection('products').findOne(new ObjectId(id)));  
};

const create = async (name, brand) => {
  await connection().then((db) => 
    db.collection('products').insertOne({ name, brand }));
  return {
    id: insertedId,
    name,
    brand
  }
};

const update = async (id, name, brand) => {
  if (!ObjectId.isValid(id)) return null;
  const product = await connection().then((db) => 
    db.collection('products').updateOne({ _id: new ObjectId(id) }, { $set: { name, brand } })
  )
  return product
};

const deleta = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  await connection().then((db) =>
    db.collection('products').deleteOne(ObjectId(id))
  )
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleta,
}