'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Aulas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProfessorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Professores',
          key: 'id'
        }
      },
      AlunoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Alunos',
          key: 'id'
        }
      },
      MateriaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'Materias',
          key: 'id'
        }
      },
      dataHoraInicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dataHoraFim: {
        type: Sequelize.DATE,
        allowNull: false,
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
    await queryInterface.dropTable('Aulas');
  }
};