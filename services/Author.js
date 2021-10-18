const modelAuthor = require('../models/Author');

const getAll = async () => modelAuthor.getAll();

const findById = async (id) => modelAuthor.findById(id);

const create = async (firstName, middleName, lastName) =>
  modelAuthor.create(firstName, middleName, lastName);

module.exports = {
  getAll,
  findById,
  create,
};
