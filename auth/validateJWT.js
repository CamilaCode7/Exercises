const jwt = require('jsonwebtoken');
const model = require('../models/user');

const segredo = 'secretdetoken';

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'Token não encontrado' });
  
  try {
    /* Através o método verify, podemos validar e decodificar o nosso JWT. */  
    const decoded = jwt.verify(token, segredo);
    const user = await model.findUser(decoded.data.username);
    if (!user) return res.status(401).json({ message: 'Erro ao prpcurar usuario do token' });
    req.user = user;
    console.log(user);
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });  
  }
}