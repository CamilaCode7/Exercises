const model = require('../models/modelsMongo');
const { StatusCodes } = require('http-status-codes');

const getAll = async (req, res) => {
  const product = await model.getAll();
  if (!product) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error in Server, try again !' })
  };
  res.status(StatusCodes.OK).json(product);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await model.getById(id);
  if (!product) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error in Server, try again !' })
  };
  res.status(StatusCodes.OK).json(product)
};

const create = async (req, res) => {
  const { name, brand } = req.body;
  const product = await model.create({ name, brand });
  if (!product) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error in Server, try again !' })
  };
  res.status(StatusCodes.CREATED).json(product);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;
  const product = await model.update(id, name, brand);
  if (!product) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error in Server, try again !' })
  };
  res.status(StatusCodes.OK).json({ message: 'Update successfully' });
};

const deleta = async (req, res) => {
  const { id } = req.params;
  const product = await model.deleta(id);
  if (!product) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error in Server, try again !' })
  };
  res.status(StatusCodes.OK).json(product);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleta,
};