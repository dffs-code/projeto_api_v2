'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
        {
          email: "usuario1@email.com",
          senha: "1234",
          nome: "daniel",
          idade: 12,
          cep: "012345",
          estado: "SP sao paulo",
          cidade: "franco",
          bairro: "o meu",
          endereco: "minha rua, 89",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        email: "user_4946136@email.com",
        senha: "1234",
        nome: "jefinho",
        idade: 21,
        cep: "012345",
        estado: "RJ",
        cidade: "Belford Roxo",
        bairro: "o meu",
        endereco: "minha rua, 89",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "meu_email@outmail.com",
        senha: "1234",
        nome: "Tigas",
        idade: 300,
        cep: "012345",
        estado: "SP",
        cidade: "Osasco",
        bairro: "o meu",
        endereco: "fala, 300",
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Usuarios', null, {})
  }
};
