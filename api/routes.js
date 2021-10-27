const getPosts = require('../controllers/posts');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const findUserById = require('../controllers/FindUserById');

module.exports = {
  getPosts,
  createUsers,
  login,
  findUserById,
};
