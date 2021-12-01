const model = require('../model/joke');

const getJokes = async (req, res) => {
  const joke = await model.getJokes();
  console.log(joke);
  if (!joke) return res.status(404).json({ message: 'Errado' });
  return res.render('jokeView', { joke });
};

module.exports = {
  getJokes,
}