const router = require('express').Router();

const { Product } = require('../models/index');

router.post('/', (req, res) => {
  const { name } = req.body;
  
  Product.create({ name })
    .then((newProduct) => {
      res.status(201).json(newProduct)
    })
    .catch((e) => {
      res.status(400).send({ message: "Erro na criação do produto" }) 
    });
});

router.get('/', (req, res) => {
  const { name } = req.body;
  
  Product.findAll()
    .then((products) => {
      res.status(201).json(products)
    })
    .catch((e) => {
      res.status(400).send({ message: "Erro na criação do produto" }) 
    });
});

module.exports = router;

