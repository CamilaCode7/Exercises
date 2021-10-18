const cepModel = require('../models/cepModels');

const cepRegex = /\d{5}-\d{3}/;
const getAllCep = async (cepToSearc) => {
  const cep = await cepModel.getAllCep(cepToSearc);

  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'Cep não encontrado'
      },
    };
  }

  return cep;
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const existCep = await cepModel.getAllCep(cep);

  if(existCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      }
    }
  }
  return cepModel.create({ cep, logradouro, bairro, localidade, uf })
};

module.exports = {
  getAllCep,
  create,
}