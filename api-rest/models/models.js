const connection = require ('./connections');

const getAll = async () => {
  const [row] = await connection.query('SELECT * FROM products');
  return row;
}

const getById = async (id) => {
  const [result] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
  if (!result.length) return null;
  return result[0];
}

const create = async ({ name, brand }) => {
  const [row] = await connection.query('INSERT INTO products (name, brand) VALUES (?, ?)', [name, brand]);
  return { id: row.insertId, name, brand };
}

const update = async (id, name, brand) => {
  await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id])
}

const deleta = async (id) => {
  const product = await getById(id);
  if (!product) return {};
  await connection.query('DELETE FROM products WHERE id = ?', [id])
  return product;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleta,
}