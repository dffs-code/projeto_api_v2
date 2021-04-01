'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materias extends Model {
    static associate(models) {
    }
  };
  Materias.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Materias',
  });
  return Materias;
};