const cepService= require('../services/cepServices');
const rescue = require('express-rescue');
const Joi = require('joi');

const getAllCep = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const address = await cepService.getAllCep(cep)

  if(address.error) return next(address.error); 

  return res.status(200).json(address);
});

const create = rescue(async (req, res, next) => {
  const requiredNonEmpty = Joi.string().not().empty().required();
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmpty,
    bairro: requiredNonEmpty,
    localidade: requiredNonEmpty,
    uf: requiredNonEmpty.length(2),
  }).validate(req.body);

  if (error) return next(error);
  const newCep = await cepService.create(req.body);

  if (newCep.error) return next(newCep.error);

  return res.status(201).json(newCep);
})

module.exports = {
  getAllCep,
  create,
}