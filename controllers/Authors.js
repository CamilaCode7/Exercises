const rescue = require('express-rescue');
const service = require('../services/Author');
const Joi = require('joi');

const getAll = rescue(async (req, res) => {
   const author = await service.getAll();
	 
	 res.status(200).json(author);
});

const findById = rescue(async (req, res, next) => {
	const { id } = req.params;

	const author = await service.findById(id);

	if(author.error) return next(author.error);
	res.status(200).json(author);
})

const create = rescue(async (req, res, next) => {
  // Utilizo o Joi para descrever o objeto que espero
  // receber na requisição. Para isso, chamo Joi.object()
  // passando um objeto com os campos da requisição e suas descrições	
	const { error } = Joi.object({
		// Deve ser uma string (.string()) não vazia (.not().empty()) e é obrigatório (.required())
		firstName: Joi.string().not().empty().required(),
		// Não é obrigatório mas, caso seja informado, deve ser uma string não vazia
		middleName: Joi.string().not().empty(),
		lastName: Joi.string().not().empty().required(),
	})
	// Por fim, pedi que o Joi verifique se o corpo da requisição se adequa a essas regras
	 .validate(req.body);
	// Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
  if (error) return next(error);
	
	const { firstName, middleName, lastName } = req.body;
	const newAuthor = await service.create(firstName, middleName, lastName);
	
	if (newAuthor.error) return next(newAuthor.error);

  return res.status(201).json(newAuthor);
})

module.exports = {
	getAll,
	findById,
	create,
}