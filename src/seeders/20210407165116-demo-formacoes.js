'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Formacoes', [
      {
        ProfessorId: 2,
        nivel: "Graduação",
        curso: "Letras - Português/Inglês",
        instituicao: "Universidade de São Paulo - USP",
        ano: 2012,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Formacoes', null, {})
  }
};
