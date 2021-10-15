const express = require('express');

const router = express.Router();
const model = require('../models/models');
const { StatusCodes } = require('http-status-codes');

router.get('/', async(_req, res, _next) => {
  try {
    const products = await model.getAll();
    res.status(StatusCodes.OK).json(products)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Error in Server, try again ! !" })
  }  
});

router.get('/:id', async(req, res, _next) => {
  try {
    const { id } = req.params;
    const product = await model.getById(id);
    res.status(StatusCodes.OK).json(product)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Error in Server, try again !' })
  }
});
router.post('/', async(req, res, _next) => {
  try {
    const { name, brand } = req.body;
    const product = await model.create({ name, brand });
    res.status(StatusCodes.CREATED).json(product);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Was not possible to created' })
  }
});
router.put('/:id', async (req, res, _next) => {
  try {
    const { id } = req.params;
    const { name, brand } = req.body;
    const product = await model.update(id, name, brand);
    res.status(StatusCodes.OK).json({ message: 'Update successfully' });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'could not update' })    
  }
});
router.delete('/:id', async (req, res, _next) => {
  try {
    const { id } = req.params;
    const product = await model.deleta(id);
    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Was not possible to delete !' })    
  }
});

module.exports = router;