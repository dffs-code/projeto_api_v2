'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Professores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sobre: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      modalidade: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('Professores');
  }
};