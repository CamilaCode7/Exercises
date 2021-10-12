const router = require('express').Router();
const { getAll, findById, isValid, create } = require('../models/Book');

router
  .get('/', async (req, res) => {
    const book = await getAll()
    res.status(200).json(book)  
  })
  .get('/:id', async(req, res) => {
    const { id } = req.params;
    const book = await findById(id)
    if (!book) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(book);
  })
  .post('/', async (req, res) => {
    const { title, author_id } = req.body;
    if(!isValid(title, author_id)) {
      return res.status(400).json({ message: 'Dados inválidos' })
    }
    await create(title, author_id);
    res.status(200).json({ message: 'Livro criado com sucesso! '})
  })

module.exports = router;