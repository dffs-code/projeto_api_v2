'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Professores', [
      {
        UsuarioId: 1,
        sobre: "Cursando o 8º semestre de matemática na USP, procurando oportunidades para dar aulas particulares de reforço para o ensino médio",
        preco: 15.00,
        modalidade: "EAD",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UsuarioId: 2,
        sobre: "Formado em letras - português/inglês na USP, dou aulas particulares de reforço para o ensino médio",
        preco: 35.00,
        modalidade: "Presencial",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Professores', null, {})
  }
};
