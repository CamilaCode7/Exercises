const User = require('../models/user');
const jwt = require('jsonwebtoken');

/* Chave secreta. É com ela que os dados do usuário serão encriptados. */
   const secret = 'secretdetoken';

module.exports = async (req, res) => {
  try {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await User.findUser(username);

  if (!user || user.password !== password)
    return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

  // Crio uma config básica para o JWT, onde:
  // expiresIn -> significa o tempo pelo qual esse token será válido;
  // algorithm -> algoritmo que você usará para assinar a mensagem.

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};
