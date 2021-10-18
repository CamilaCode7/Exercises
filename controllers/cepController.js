const cepService= require('../services/cepServices');
const rescue = require('express-rescue');

const getAllCep = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const address = await cepService.getAllCep(cep)

  if(address.error) return next(address.error); 

  return res.status(200).json(address);
});

module.exports = {
  getAllCep,  
}