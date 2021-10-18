const rescue = require('express-rescue');
const service = require('../services/Author');

const getAll = rescue(async (req, res) => {
   const author = await service.getAll();
	 
	 res.status(200).json(authors);
});

module.exports = {
	getAll,
}