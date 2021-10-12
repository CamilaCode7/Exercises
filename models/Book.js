const connection = require("./connection");

const getAll = async () => {
  const [book] = await connection.execute(
    'SELECT * FROM model_example.books;',
  );
  return book.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const findById = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?';
  const [book] = await connection.execute(query, [authorId]);

  if (book.length === 0) return null;

  return book.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
};

const isValid = (title, authorId) => {
  if (!title|| title.length < 3 || typeof title !== 'string') return false;
  if (!authorId || typeof authorId !== 'number') return false;
  
  return true;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books(title, author_id) VALUES (?, ?)',
  [title, authorId]
);

module.exports = {
  getAll,
  findById,
  isValid,
  create
}