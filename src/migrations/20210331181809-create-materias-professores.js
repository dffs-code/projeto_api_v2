'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Materias_Professores', {
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
          model: 'professores',
          key: 'id'
        }
      },
      idMateria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'materias',
          key: 'id',        
        }
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
    await queryInterface.dropTable('Materias_Professores');
  }
};