const { Book } = require('../models');

const findBook = async (_req, res) => {
  try {
    const book = await Book.findAll();
    if (!book) return res.status(401).json({ message: 'Not Found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(401).json({ message: 'Not Found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const create = async(req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({ title, author, pageQuantity });
   // if (!book) return res.status(401).json({ message: 'Not Found' });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const update = async(req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const [book] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );
    if (!book) return res.status(401).json({ message: 'Not Found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleta = async(req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.destroy({ where: { id } });
    if (!book) return res.status(401).json({ message: 'Not Found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  findBook,
  getById,
  create,
  update,
  deleta,
};