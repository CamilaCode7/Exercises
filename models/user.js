const connect = require('./connection');
const { ObjectId } = require('mongodb');

const registerUser = async (username, password) => {
  const db = await connect();
  const userCreated = await db.collection('users').insertOne({ username, password });
  return userCreated.ops[0].username;
}

const findUser = async (username) => {
  const db = await connect();
  const userData = await db.collection('users').findOne({ username });
  return userData;
}

const findUserById = async (userId) => {
  const db = await connect()
  const useId = await db.collection('user').findOne({ _id: ObjectId(userId) });
  return useId;
}

module.exports = { registerUser, findUser, findUserById };
