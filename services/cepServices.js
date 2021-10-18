const cepModel = require('../models/cepModels');

const cepRegex = /\d{5}-\d{3}/;
const getAllCep = async (cepToSearc) => {
  if (!cepRegex.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }
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
}

module.exports = {
  getAllCep,
}