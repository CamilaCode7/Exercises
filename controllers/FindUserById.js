const model = require('../models/user');

module.exports = async (req, res) => {
  if (req.params.userId !== req.user._id) {
    res.status(401).json({ error: 'Acesso negado' });
  }
  const {
    name,
    username,
    birthdate,
    biography
  } = await model.findUserById(req.params.userId);

  res.status(200).json({
    name,
    username,
    birthdate,
    biography,
  });
};
