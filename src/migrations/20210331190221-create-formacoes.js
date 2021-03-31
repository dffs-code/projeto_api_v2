'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Formacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProfessor: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: 'Professores',
          key: 'id'
        }
      },
      nivel: {
        type: Sequelize.STRING
      },
      curso: {
        type: Sequelize.STRING
      },
      instituicao: {
        type: Sequelize.STRING
      },
      ano: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Formacoes');
  }
};