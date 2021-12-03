'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      { name: 'Bolinho gelado', description: 'Bolo de chocolate recheado', createdAt: new Date(), updatedAt:  new Date() },
      { name: 'Bolinho morango', description: 'Bolo de chocolate recheado com morango', createdAt: new Date(), updatedAt:  new Date() },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});     
  }
};
