const router = require('express').Router();
const { getAll, findById, isValid, create } = require('../models/Author');

router
  .get('/', async (req, res) => {
    const data = await getAll()
    res.status(200).json(data)
  })
  .get('/:id', async(req, res) => {
    const { id } = req.params;
    // extrai o parametro id da url e usa para consultar o model pelo autor requisitado
    const author = await findById(id);
    if(!author) return res.status(404).json({ message: 'Not found' });
    res.status(200).json(author);
  })
  .post('/', async(req, res) => {
    const { first_name, middle_name, last_name } = req.body;
    // extrai informações do autor que chegam em req.body e faz a validação.
    if(!isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados invalidos' });
    }
    await create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso!!!' });
  })

module.exports = router;