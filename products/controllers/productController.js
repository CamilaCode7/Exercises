const { Router } = require('express');
const { product } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const response = await product.findAll();

  res.status(200).json(response);
});

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const products = await product.create({ name, description });
  // sempre passar na forma de objeto 
  res.status(201).json(products)
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await product.findByPk(id);
  if (!products) return res.status(404).json({ message: 'Produto não encontrado' })
  // sempre passar na forma de objeto 
  res.status(200).json(products)
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const [products] = await product.update(
      { name, description },
      // primeiro objeto que vai ser atualizado e depois o id de onde vai acontecer a atualização
      { where: { id } },
  )
  console.log(products);
  if (!products) return res.status(404).json({ message: 'Produto não encontrado' })
  // sempre passar na forma de objeto 
  res.status(200).json(products)
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await product.destroy(
    { where: { id } },  
  );
  res.status(200).json(products)
})

router.get('/search', async (req, res) => {
  const { q } = req.query;
  const products = await product.findAll({
    where: {
      name: {
        [Op.like]: `%${q}%`
      }
    }
  })
  res.status(200).json(products)
})

module.exports = router;

