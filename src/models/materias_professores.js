'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materias_Professores extends Model {
    static associate(models) {

    }
  };
  Materias_Professores.init({
    ProfessorId: DataTypes.INTEGER,
    MateriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materias_Professores',
  });
  return Materias_Professores;
};