'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aulas extends Model {
    static associate(models) {
    }
  };
  Aulas.init({
    idPorfessor: DataTypes.INTEGER,
    idAluno: DataTypes.INTEGER,
    idMateria: DataTypes.INTEGER,
    dataHoraInicio: DataTypes.DATE,
    dataHoraFim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Aulas',
  });
  return Aulas;
};