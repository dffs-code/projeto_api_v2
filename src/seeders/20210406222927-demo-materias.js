'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Materias', [
    {
      descricao: 'violão',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descricao: 'geografia',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descricao: 'história',
      createdAt: new Date(),
      updatedAt: new Date()
    }
])
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Materias', null, {})
  }
};
