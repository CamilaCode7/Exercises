const AuthorModel = require('../models/Author');

const listAuthors = async (req, res) => {
  const authors = await AuthorModel.getAll();
  res.status(200).render('authors/index', { authors })
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await AuthorModel.findById(id);

  if(!author) return res.status(404).render('404');

  res.status(200).render('authors/show', { author });
};

const newAuthor = (req, res) => {
  res.render('authors/new', { message: null });
}

const createAuthor = async(req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!AuthorModel.isValid(first_name, middle_name, last_name)) {
    return res.render('authors/new', { message: 'Dados inválidos' });
  }
  await AuthorModel.create(first_name, middle_name, last_name);
  res.redirect('authors');
};

module.exports = {
  listAuthors, 
  showAuthor,
  newAuthor,
  createAuthor,
};