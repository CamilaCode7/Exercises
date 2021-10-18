const connection = require('./connection');

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formateCep(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

const cepRegex = /\d{5}-\d{3}/;
// Função que formata um CEP
const formateCep = (cep) => {
  if (cepRegex.test(cep)) return cep;   // Caso o CEP já esteja formatado, retorna o próprio CEP
  return cep.replace(/\d{5}-\d{3}/, '$1-$2');
  // Caso não esteja formatado, utiliza regex para adicionar a formatação
};

const getAllCep = async (cepToSearch) => {
  const cepTratado = cepToSearch.replace('-', '');

  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const result = await connection.execute(query, [cepTratado])
    .then(([results]) => (results.length ? results[0] : null));

  if (!result) return null;
  return getNewCep(result); 
};

const create = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = rawCep.replace(/-/ig, '');
  const query = 'INSERT INTO cep_lookup.ceps (logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?)';
  
  await connection.execute(query, [cep, logradouro, bairro, localidade,uf]);

  return { cep, logradouro, bairro, localidade, uf };
}
module.exports = {
  getAllCep,
  create,
}